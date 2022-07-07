import PlaceForm from "../../components/Places/PlaceForm/PlaceForm";
import { insertPlaces } from "../../utils/database";

export default function AddPlace({ navigation }) { 
    async function createPlaceHandler(place) { 
        await insertPlaces(place);
        navigation.navigate('AllPlaces');
    }
    
    return ( 
        <PlaceForm onCreatePlace={createPlaceHandler} />
    );
}