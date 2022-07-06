import { useCallback, useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import Button from "../../UI/Button/Button";
import ImagePicker from "../ImagePicker/ImagePicker";
import LocationPicker from "../LocationPicker/LocationPicker";
import styles from "./PlaceForm.style";

const PlaceForm = () => { 
    const [enteredTitle, setEnteredTitle] = useState('');
    const [pickedLocation,setPickedLocation] = useState();
    const [takenImage,setTakenImage] = useState();

    const changeTitleHandler = (enteredText) => { 
        setEnteredTitle(enteredText);
    }

    const imgaeTakenHandler = (imageUri) => { 
        setTakenImage(imageUri);
    }

    const pickLocationHandler = useCallback((location) => { 
        setPickedLocation(location);
    },[]);

    const savePlaceHandler = () => {
        console.log(enteredTitle);
        console.log(pickedLocation);
        console.log(takenImage);
    }

    return (
        <ScrollView style={styles.form}>
            <View>
                <Text style={styles.label}>Title</Text>
                <TextInput 
                    onChangeText={changeTitleHandler} 
                    value={enteredTitle}
                    style={styles.input}
                />
            </View>
            <ImagePicker onImageTaken={imgaeTakenHandler} />
            <LocationPicker onLocationPick={pickLocationHandler} />
            <Button onPress={savePlaceHandler}>Add Place</Button>
        </ScrollView>
    );
}
export default PlaceForm;