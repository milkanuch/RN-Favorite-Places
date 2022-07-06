const GOOGLE_API_KEY = 'UR API SHOULD BE HERE';

export const getMapPreview = (lat,long) => {
    const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${long}&key=${GOOGLE_API_KEY}`
    return imagePreviewUrl;
}
export const getAddress = async (lat,long) => { 
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${GOOGLE_API_KEY}`;
    const response = await fetch(url);

    if(!response.ok) {
        throw new Error("Failed to fetch address!!");
    }

    const data = await response.json();
    return data.results[0].formatted_address; //Address 
}