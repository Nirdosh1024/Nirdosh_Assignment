import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { MdLocationOn } from 'react-icons/md';

const iconStyle = {
    color: '#EA4335', fontSize: "3rem"
}

const Marker = () => <div><MdLocationOn style={iconStyle} /></div>;


const Map = ({ origin, data }) => {
    const [ map, setMap ] = useState(null); 
    const { address, latitude, longitude } = data;
    const destination = address;
    const lat = latitude;
    const lng = longitude;

    useEffect(() => {
        if(map && origin && destination) {
            const directionsService = new window.google.maps.DirectionsService();

            const request = {
                origin: origin,
                destination: destination,
                travelMode: 'DRIVING',
            };

            directionsService.route(request, (result, status) => {
                if (status === 'OK') {
                    const directionsRenderer = new window.google.maps.DirectionsRenderer({
                        map: map,
                        directions: result,
                    });
                }
            });
        }
    }, [map, origin, destination]);

    const defaultProps = {
        center: {
            lat: Number(lat), 
            lng: Number(lng), 
        },
        zoom: 16, 
    };

    return (
        <div style={{ height: '547px', width: '100%', borderTopLeftRadius:'8px', borderBottomLeftRadius:"8px", overflow: "hidden" }}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: import.meta.env.VITE_REACT_API_KEY, 
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                onGoogleApiLoaded={({ map }) => setMap(map)}
            >
                <Marker
                    lat={defaultProps.center.lat} 
                    lng={defaultProps.center.lng} 
                />
            </GoogleMapReact>
        </div>
    );
};

export default Map;
