import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";

import AddPlace from "../screens/AddPlaces/AddPlaces";
import AllPlaces from "../screens/AllPlaces/AllPlaces";
import IconButton from "../components/UI/IconButton/IconButton";
import { Colors } from "../constants/Colors";
import Map from "../screens/Map/Map";


export default function AppNavigation() { 
    const Stack = createNativeStackNavigator();

    return (
        <>
            <StatusBar style="light" />
            <NavigationContainer>
                <Stack.Navigator 
                    screenOptions={{
                        headerStyle: { backgroundColor: Colors.primary500},
                        headerTintColor: Colors.blue700,
                        contentStyle: {backgroundColor: Colors.primary400}
                    }}
                >
                    <Stack.Screen 
                        name="AllPlaces" 
                        component={AllPlaces} 
                        options={({navigation}) => ({
                            title: "Your Favorite Places",
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
                        options={{
                            title: 'Add a new Place'
                        }}
                    />
                    <Stack.Screen 
                        name="Map"
                        component={Map}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}