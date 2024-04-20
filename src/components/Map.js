import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Rectangle,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
const Map = () => {
  const position = [33.6356737, 72.8853426];
  const rectangleBounds = [
    [33.635766, 72.885209],
    [33.635822, 72.885333],
    [33.63565, 72.885478],
    [33.635572, 72.885338],
  ];
  return (
    <MapContainer
      center={position}
      zoom={20}
      // scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }} // Set a specific height here
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Alice <br />
        </Popup>
      </Marker>
      <Rectangle bounds={rectangleBounds}>
        <Popup>
          AvantLabs <br />
        </Popup>
      </Rectangle>
    </MapContainer>
  );
};

export default Map;
