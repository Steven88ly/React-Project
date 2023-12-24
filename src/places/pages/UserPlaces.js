import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
        id:'p1',
        title: 'Empire State Building',
        description: "The famous scyscraper in New York City",
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg/640px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },
    {
        id:'p2',
        title: 'Empire State Building',
        description: "The famous scyscraper in New York City",
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg/640px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u2'
    }
]

const UserPlaces = () => {
    const userId = useParams().userId

    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)


    return<PlaceList items={loadedPlaces}/>
}

export default UserPlaces