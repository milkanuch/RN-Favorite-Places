import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from "expo-location";
import { useState } from "react";
import { Alert, Image, Text, View } from "react-native";

import getMapPreview from "../../../utils/location";
import OutlinedButton from "../../UI/OutlinedButton/OutlinedButton";
import styles from "./LocationPicker.style";

const LocationPicker = () => { 
    const [locationPermissionInfo,requestPermission] = useForegroundPermissions();
    const [locationUri, setLocationUri] = useState();

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
        })
    }

    const pickOnMapHandler = () => { 

    }

    return ( 
        <View>
            <View style={styles.mapPreview}>
                {locationUri ? 
                <Image source={{uri: getMapPreview(locationUri.lat,locationUri.long)}} style={styles.image} /> :
                <Text>No Location Picked Yet.</Text>
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