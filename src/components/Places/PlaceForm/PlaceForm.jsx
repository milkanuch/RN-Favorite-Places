import { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import Button from "../../UI/Button/Button";
import ImagePicker from "../ImagePicker/ImagePicker";
import LocationPicker from "../LocationPicker/LocationPicker";
import styles from "./PlaceForm.style";

const PlaceForm = () => { 
    const [enteredTitle, setEnteredTitle] = useState('');

    const changeTitleHandler = (enteredText) => { 
        setEnteredTitle(enteredText);
    }

    const savePlaceHandler = () => {

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
            <ImagePicker />
            <LocationPicker />
            <Button onPress={savePlaceHandler}>Add Place</Button>
        </ScrollView>
    );
}
export default PlaceForm;