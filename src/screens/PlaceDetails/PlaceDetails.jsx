import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import OutlinedButton from "../../components/UI/OutlinedButton/OutlinedButton";
import { fetchPlaceDetails } from "../../utils/database";
import styles from "./PlaceDetails.style";

export default function PlaceDetails({ route, navigation }) { 
    const [fetchedPlace,setFetchedPlace] = useState();

    function showOnMapHandler() {
        navigation.navigate('Map', {
                initialLat: fetchedPlace.location.lat,
                initialLong: fetchedPlace.location.long
            }
        )
    }

    const selectedPlaceId = route.params.placeId;

    useEffect(() => { 
        const loadPlaceData = async() => { 
            const placeDetail = await fetchPlaceDetails(selectedPlaceId);
            setFetchedPlace(placeDetail);

            navigation.setOptions({
                title: placeDetail.title,
            });
        }

        loadPlaceData();
    }, [selectedPlaceId]);

    return fetchedPlace ? 
            <ScrollView>
                <Image style={styles.image} source={{uri: fetchedPlace.imageUri}}/>
                <View style={styles.locationContainer}>
                    <View style={styles.addressContainer}>
                        <Text style={styles.address}>{ fetchedPlace.address}</Text>
                    </View>
                    <OutlinedButton icon="map" onPress={showOnMapHandler}>View on Map</OutlinedButton>
                </View>
            </ScrollView> : 
            <View style={styles.fallback}>
                <Text>Loading Place Data...</Text>
            </View>
    }