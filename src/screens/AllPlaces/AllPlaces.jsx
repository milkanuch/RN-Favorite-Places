import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import PlacesList from "../../components/Places/PlacesList/PlacesList";

export default function AllPlaces({ navigation, route}) {
    const isFocused = useIsFocused();
    const [place,setPlace] = useState([]);

    useEffect(() => {
        if(isFocused && route.params){
            setPlace((currPlaces) => [...currPlaces,route.params.place]);
        }
    },[route,isFocused]);

    return ( 
        <PlacesList places={place}/>
    );
}