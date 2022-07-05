import { Pressable, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from "./OutlinedButton.style";
import { Colors } from "../../../constants/Colors";

const OutlinedButton = ({children,onPress,icon}) => { 
    return ( 
        <Pressable onPress={onPress} style={({pressed}) => [styles.button,styles.pressed && pressed]}>
            <Ionicons name={icon} size={18} color={Colors.accent500} />
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    );
}

export default OutlinedButton;