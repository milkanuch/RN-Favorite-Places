import { useNavigation } from "@react-navigation/native";
import { FlatList, Text, View } from "react-native";
import PlacesListItem from "../PlaceListItem/PlaceListItem";
import styles from "./PlacesList.style";

const PlacesList = ({places}) => { 
    const nav = useNavigation();
    
    const selectPlaceHandler = (id) => { 
        nav.navigate('PlaceDetails',{
            placeId: id
        })
    }

    if(!places || places.length == 0){ 
        return (
            <View style={styles.fallbackContainer}>
                <Text style={styles.fallbackText}>No Places added yet - start adding some!!!.</Text>
            </View>
        );
    }

    return (
        <FlatList 
            data={places}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <PlacesListItem place={item} onSelect={selectPlaceHandler}/>}
            style={styles.list}
        />
    );
}

export default PlacesList;