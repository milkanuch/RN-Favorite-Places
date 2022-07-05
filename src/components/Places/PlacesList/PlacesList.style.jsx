import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";

export default StyleSheet.create({
    fallbackContainer: { 
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    fallbackText: { 
        fontSize: 16,
        color: Colors.accent500
    }
});