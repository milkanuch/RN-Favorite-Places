export class Place { 
    constructor(title, imageUri, location, id) { 
        this.title = title;
        this.imageUri = imageUri;
        this.address = location.address;
        this.location = {
            lat: location.lat,
            long: location.long
        }; 
        this.id = id;
    }
}