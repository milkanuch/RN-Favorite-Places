import { Pressable, Text } from "react-native";
import styles from "./Button.style";

const Button = ({onPress,children}) => { 
    return ( 
        <Pressable style={({pressed}) => [styles.button,pressed && styles.pressed]} onPress={onPress}>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    )
}

export default Button;