import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from "expo-location";
import { useEffect, useState } from "react";
import { Alert, Image, Text, View } from "react-native";
import { getAddress, getMapPreview } from "../../../utils/location";
import OutlinedButton from "../../UI/OutlinedButton/OutlinedButton";
import styles from "./LocationPicker.style";

const LocationPicker = ({ onLocationPick }) => { 
    const [locationPermissionInfo,requestPermission] = useForegroundPermissions();
    const [locationUri, setLocationUri] = useState();

    const nav = useNavigation();
    const route = useRoute();
    const isFocused = useIsFocused();

    useEffect(() => { 
        if(isFocused && route.params) {
            const mapPickedLocation = route.params && {
                lat: route.params.pickedlat,
                long: route.params.pickedlong 
            };

            setLocationUri(mapPickedLocation);
        }
    },[route,isFocused]);

    useEffect(() => { 
        const handleLoctaion = async () => { 
            if(locationUri) {
                const address = await getAddress(
                    locationUri.lat,
                    locationUri.long
                );
                onLocationPick({...locationUri,address: address});
            }
        }

        handleLoctaion();
    },[locationUri,onLocationPick]);
    
    const verifyPermission = async () => { 
        if(locationPermissionInfo.status === PermissionStatus.UNDETERMINED) { 
            const permissionResponse = await requestPermission();
            return permissionResponse.granted;
        }
        if(locationPermissionInfo.status === PermissionStatus.DENIED) { 
            Alert.alert("Insufficient Permission ","You need to grant camera permission to use this app!!!");
            return false;
        }

        return true;
    }

    const getLocationHandler = async () => { 
        const hasPermession = await verifyPermission();
        if(!hasPermession) {
            return;
        }

        const location = await getCurrentPositionAsync();
        setLocationUri({
            lat: location.coords.latitude,
            long: location.coords.longitude
        });
    }

    const pickOnMapHandler = () => { 
        nav.navigate('Map');
    }

    return ( 
        <View>
            <View style={styles.mapPreview}>
                {locationUri ? 
                <Image source={{uri: getMapPreview(locationUri.lat,locationUri.long)}} style={styles.image} /> :
                <Text style={styles.errorText}>No Location Picked Yet.</Text>
                }
            </View>
            <View style={styles.actions}>
                <OutlinedButton icon="location" onPress={getLocationHandler}>Locate User</OutlinedButton>
                <OutlinedButton icon="map" onPress={pickOnMapHandler}>Pick On Map</OutlinedButton>
            </View>
        </View>
    );
}

export default LocationPicker;