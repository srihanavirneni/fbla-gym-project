import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import './Map.css';

L.Icon.Default.imagePath = '';

const Map = (props: any) => {
    return (
        <MapContainer
            center={props.center}
            zoom={props.zoom}
            className={`map ${props.className}`}
            style={props.style}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={props.markerPosition} />
        </MapContainer>
    );
};

export default Map;
