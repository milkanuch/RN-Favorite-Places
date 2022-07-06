import * as SQLite from 'expo-sqlite';
import { Place } from '../models/places';

const database = SQLite.openDatabase('places.db');

export const init = () => { 
    const promise = new Promise((resolve,reject) => {
        database.transaction((transaction) => {
            transaction.executeSql(`CREATE TABLE IF NOT EXISTS places (
                        id INTEGER PRIMARY KEY NOT NULL,
                        title TEXT NOT NULL,
                        imageUri TEXT NOT NULL,
                        address TEXT NOT NULL,
                        lat REAL NOT NULL,
                        long REAL NOT NULL
                    )`,
                    [],
                    () => { resolve(); },
                    (_,error) => { reject(error); }
                );
            }
        );
    });

    return promise;
}

export const insertPlaces = (place) => { 
    const promise = new Promise((resolve,reject) => { 
        database.transaction((transaction) => { 
            transaction.executeSql(`INSERT INTO places (title,imageUri,address,lat,long) VALUES (?,?,?,?,?)`,
                                    [place.title,place.imageUri,place.address,place.location.lat,place.location.long],
                                    (_,result) => {
                                        console.log(result);
                                        resolve(result);
                                    },
                                    (_,error) => reject(error)
            );
        })
    });

    return promise;
}

export const fetchPlaces = () => { 
    const promise = new Promise((resolve,reject) => { 
        database.transaction((transaction) => { 
            transaction.executeSql(`SELECT * FROM places`,
                                    [],
                                    (_,result) => {
                                        const places = [];

                                        for(const place of result.rows._array){
                                            places.push(new Place(
                                                place.title,
                                                place.imageUri,
                                                {
                                                    address: place.address,
                                                    lat: place.lat,
                                                    long: place.long
                                                },
                                                place.id
                                            ));

                                        resolve(places);
                                        }
                                    },
                                    (_,error) => reject(error)
            
            );
        });
    });

    return promise;
}