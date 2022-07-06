import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";

export default StyleSheet.create({
    item: { 
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderRadius: 8,
        marginVertical: 12,
        backgroundColor: Colors.primary500,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowOffset: { width: 1,height: 1},
        shadowRadius: 2,
    },
    pressed: {
        opacity: 0.7
    },
    image: { 
        flex: 1,
        borderBottomLeftRadius: 4,
        borderTopLeftRadius: 4,
        height: 100
    },
    info:{
        flex: 2,
        padding: 12
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18,
        color: Colors.blue700
    },
    address:{
        fontSize: 12,
        color: Colors.blue700
    }
});