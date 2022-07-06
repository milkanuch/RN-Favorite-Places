import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import PlacesList from "../../components/Places/PlacesList/PlacesList";
import { fetchPlaces } from "../../utils/database";

export default function AllPlaces({route}) {
    const isFocused = useIsFocused();
    const [place,setPlace] = useState([]);

    useEffect(() => {
        const loadPlaces = async() => {
            const places =  await fetchPlaces();
            setPlace(places);
        }
        if(isFocused) {
            loadPlaces();
        }
    },[isFocused,route]);

    return ( 
        <PlacesList places={place}/>
    );
}