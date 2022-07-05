import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";

export default StyleSheet.create({
    button: { 
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginHorizontal: 4,
        marginVertical: 12,
        backgroundColor: Colors.primary800,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowOffset: { width: 1,height: 1},
        shadowRadius: 2,
        borderRadius: 4
    },
    pressed: { 
        opacity: 0.9
    },
    text: { 
        textAlign: 'center',
        fontSize: 16,
        color: '#d9bac9'
    }
});