import { Pressable, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from "./IconButton.style";

const IconButton = ({icon,color,size,onPress}) => { 
    return ( 
        <Pressable 
            onPress={onPress} 
            style={({pressed}) =>[styles.button,pressed && styles.pressed]}
            android_ripple={{color: '#c0c0c0'}}
        >
            <Ionicons name={icon} color={color} size={size} />
        </Pressable>
    );
}

export default IconButton;