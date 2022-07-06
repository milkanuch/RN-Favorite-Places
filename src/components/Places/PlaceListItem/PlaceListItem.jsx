import { Image, Pressable, Text, View } from "react-native";
import styles from "./PlaceListItem.style";

const PlacesListItem = ({place,onSelect}) => { 
    return (
        <Pressable onPress={onSelect} style={(pressed) => [styles.item,styles.pressed && pressed]}>
            <Image source={{ uri: place.imageUri }} style={styles.image}/>
            <View style={styles.info}>
                <Text style={styles.title}>{place.title}</Text>
                <Text style={styles.address}>{place.address}</Text>
            </View>
        </Pressable>
    );
}

export default PlacesListItem;