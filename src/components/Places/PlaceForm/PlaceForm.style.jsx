import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";

export default StyleSheet.create({
    form: { 
        flex: 1,
        padding: 24
    },
    label: { 
        fontWeight: 'bold',
        marginBottom: 4,
        color: Colors.accent500,
        alignSelf: 'center'
    },
    input: { 
        padding: 12,
        marginVertical: 8,
        marginHorizontal: 4,
        paddingVertical: 8,
        fontSize: 16,
        borderBottomColor: Colors.primary700,
        borderBottomWidth: 2,
        backgroundColor: Colors.primary100,
        color: '#f0f0f0'
    }
});