import PropTypes from "prop-types";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = (props) => {
  const position = [50.77976768239073, 6.100671628729534];

  return (
    <div className="Map">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100px", width: "100%", }}
        zoomControl={false}
      >
        <TileLayer
          // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
          Jülicher Straße 72a <br/>  c/o digitalHUB,<br/> 52070 Aachen, Germany
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

Map.defaultProps = {
  variant: "default",
  className: "",
};

Map.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default Map;
