import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export default StyleSheet.create({
    image: {
        height: "35%",
        minHeight: 300,
        width: '100%',
    },
    locationContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    addressContainer: {
        padding: 20
    },
    address: { 
        color: Colors.primary800,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
    fallback: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});