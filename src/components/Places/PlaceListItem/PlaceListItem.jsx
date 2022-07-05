import { Image, Pressable, Text, View } from "react-native";
import styles from "./PlaceListItem.style";

const PlacesListItem = ({place,onSelect}) => { 
    return (
        <Pressable onPress={onSelect}>
            <Image source={{ uri: place.imageUri }}/>
            <View>
                <Text>{place.title}</Text>
                <Text>{place.address}</Text>
            </View>
        </Pressable>
    );
}

export default PlacesListItem;