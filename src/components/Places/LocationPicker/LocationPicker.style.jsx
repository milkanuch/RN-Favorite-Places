import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";

export default StyleSheet.create({
    mapPreview: { 
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 8

    },
    actions: { 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    image: { 
        width: '100%',
        height: '100%',
        borderRadius: 12
    }
});