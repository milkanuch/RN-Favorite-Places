import { launchCameraAsync, PermissionStatus, useCameraPermissions } from "expo-image-picker";
import { useState } from "react";
import { Alert, Image, Text, View } from "react-native";
import OutlinedButton from "../../UI/OutlinedButton/OutlinedButton";
import styles from "./ImagePicker.style";

const ImagePicker = ({ onImageTaken }) => {
    const [cameraPermissionInfo,requestPermission] = useCameraPermissions();
    const [imageUri,setImageUri] = useState('');
    
    const verifyPermission = async () => { 
        if(cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) { 
            const permissionResponse = await requestPermission();
            return permissionResponse.granted;
        }
        if(cameraPermissionInfo.status === PermissionStatus.DENIED) { 
            Alert.alert("Insufficient Permission ","You need to grant camera permission to use this app!!!");
            return false;
        }

        return true;
    }

    const takeImageHandler = async () => { 
        const hasPermession = await verifyPermission();
        if(!hasPermession) {
            return;
        }

        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16,9],
            quality: 0.5
        });
        
        setImageUri(image.uri);
        onImageTaken(image.uri);
    }

    return ( 
        <View>
            <View style={styles.imagePreview}>
                {
                    imageUri ? 
                    <Image source={{uri: imageUri}}  style={styles.image} /> : 
                    <Text style={styles.errorText}>No image taken yet.</Text>
                }   
            </View>
            <OutlinedButton icon="camera" onPress={takeImageHandler}>Take Image</OutlinedButton>
        </View>
    );
}
export default ImagePicker;