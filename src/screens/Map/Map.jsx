import { useCallback, useLayoutEffect, useState } from "react";
import { Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import IconButton from "../../components/UI/IconButton/IconButton";
import styles from "./Map.style";

export default function Map({navigation}) { 
    const [selectedLocation,setSelectedLocation] = useState();

    const region = {
        latitude: 48.3578663,
        longitude: 23.2960686,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }
    
    const selectLocationHandler = (event) => { 
        const latitude = event.nativeEvent.coordinate.latitude;
        const longitude = event.nativeEvent.coordinate.longitude;
        
        setSelectedLocation({
            lat: latitude,
            long: longitude
        });
    }

    const savePickedLocationHandler = useCallback(() => {
        if(!selectedLocation) {
            Alert.alert("No Location Picked","Pick Location by tapping on the map first!!!");
            return;
        }
        
        navigation.navigate('AddPlace',
            {
                pickedlat: selectedLocation.lat,
                pickedlong: selectedLocation.long
        });
    }, [navigation,selectedLocation]);

    useLayoutEffect(() => { 
        navigation.setOptions({
            headerRight: ({tintColor}) => (
                <IconButton icon='save' size={24} color={tintColor} onPress={savePickedLocationHandler} />
                )
            }
        );
    }, [navigation,savePickedLocationHandler]);

    return ( 
        <MapView 
            initialRegion={region} 
            style={styles.map}
            onPress={selectLocationHandler}
        >
            {
                selectedLocation &&
                <Marker 
                title="Picked Location"
                coordinate={{
                        latitude: selectedLocation.lat,
                        longitude: selectedLocation.long
                    }}
                /> 
            }
        </MapView>
    );
}