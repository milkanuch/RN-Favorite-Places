import { FlatList, Text, View } from "react-native";
import PlacesListItem from "../PlaceListItem/PlaceListItem";
import styles from "./PlacesList.style";

const PlacesList = ({places}) => { 
    if(!places || places.length == 0){ 
        return (
            <View style={styles.fallbackContainer}>
                <Text style={styles.fallbackText}>No Places added yet - start adding some1.</Text>
            </View>
        );
    }
    return (
        <FlatList 
            data={places}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <PlacesListItem place={item} />}
        />
    );
}

export default PlacesList;