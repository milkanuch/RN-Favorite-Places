import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";

export default StyleSheet.create({
    imagePreview: { 
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 8
    },
    image: { 
        width: '100%',
        height: '100%'
    }
})