import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";

import AddPlace from "../screens/AddPlaces/AddPlaces";
import AllPlaces from "../screens/AllPlaces/AllPlaces";
import IconButton from "../components/UI/IconButton/IconButton";


export default function AppNavigation() { 
    const Stack = createNativeStackNavigator();

    return (
        <>
            <StatusBar style="dark" />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                        name="AllPlaces" 
                        component={AllPlaces} 
                        options={({navigation}) => ({
                            headerRight: ({tintColor}) => <IconButton 
                                icon="add"
                                size={24}
                                color={tintColor}
                                onPress={() => navigation.navigate('AddPlace')
                            }
                            />
                        })}
                    />
                    <Stack.Screen 
                        name="AddPlace" 
                        component={AddPlace}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}