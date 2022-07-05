import { launchCameraAsync, PermissionStatus, useCameraPermissions } from "expo-image-picker";
import { Alert, Button, View } from "react-native";

const ImagePicker = () => {
    const [cameraPermissionInfo,requestPermission] = useCameraPermissions();

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
        
        console.log(image);
    }

    return ( 
        <View>
            <View>
                
            </View>
            <Button title="Take Image" onPress={takeImageHandler}/>
        </View>
    );
}
export default ImagePicker;