import React from 'react'
import { Map, TileLayer } from 'react-leaflet'







const position = [21.43973 , 92.00955]


const LocationMap = () => {
    return (

            <Map center={position} zoom={10}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
            </Map>
    );
};

export default LocationMap;


