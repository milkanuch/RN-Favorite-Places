import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";

export default StyleSheet.create({
    button: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        margin: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.blue700
    },
    pressed: { 
        opacity: 0.7
    },
    text: {
        fontWeight: 'bold',
        marginLeft: 6,
        color: Colors.blue700
    }
});