import { View } from "react-native";
import OutlinedButton from "../../UI/OutlinedButton/OutlinedButton";
import styles from "./LocationPicker.style";

const LocationPicker = () => { 
    const getLocationHandler = () => { 

    }

    const pickOnMapHandler = () => { 

    }

    return ( 
        <View>
            <View style={styles.mapPreview}>

            </View>
            <View style={styles.actions}>
                <OutlinedButton icon="location" onPress={getLocationHandler}>Locate User</OutlinedButton>
                <OutlinedButton icon="map" onPress={pickOnMapHandler}>Pick On Map</OutlinedButton>
            </View>
        </View>
    );
}

export default LocationPicker;