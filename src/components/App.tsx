import React, { FC, useState, useEffect } from "react";
import ReactMapGL, {
  Marker,
  Popup,
  NavigationControl,
  ScaleControl
} from "react-map-gl";
import mapboxgl from "mapbox-gl";
import CityInfo from "components/CityInfo";
import Pins from "components/Pins";
import parkData from "data/skateboard-parks.json";
import CITIES from "data/cities.json";
import { navStyle, scaleControlStyle } from "components/Styles";

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const App: FC = () => {
  const [viewport, setViewport] = useState({
    latitude: 35.785495315789454,
    longitude: 139.8958944210526,
    width: "100vw",
    height: "100vh",
    zoom: 10
  });
  const [selectedPark, setSelectedPark] = useState<any>(null);
  const [popupInfo, setPopupInfo] = useState<any>(null);

  useEffect(() => {
    const listener = (e: any) => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/nhatvu148/ckmcqd67v5zmn17o3ig6y5ykw"
        onViewportChange={(viewport: any) => {
          setViewport(viewport);
        }}
      >
        <Pins data={CITIES} onClick={setPopupInfo} />

        {popupInfo && (
          <Popup
            tipSize={5}
            anchor="top"
            longitude={popupInfo.longitude}
            latitude={popupInfo.latitude}
            closeOnClick={false}
            onClose={setPopupInfo}
          >
            <CityInfo info={popupInfo} />
          </Popup>
        )}

        {parkData.features.map((park) => (
          // @ts-ignore
          <Marker
            key={park.properties.PARK_ID}
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}
          >
            <button
              className="marker-btn"
              onClick={(e) => {
                e.preventDefault();
                setSelectedPark(park as any);
              }}
            >
              <img src="/skateboarding.svg" alt="Skate Park Icon" />
            </button>
          </Marker>
        ))}

        {selectedPark && (
          <Popup
            latitude={selectedPark.geometry.coordinates[1]}
            longitude={selectedPark.geometry.coordinates[0]}
            onClose={() => {
              setSelectedPark(null);
            }}
          >
            <div>
              <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.DESCRIPTIO}</p>
            </div>
          </Popup>
        )}

        {/* <GeolocateControl style={geolocateStyle} /> */}
        {/* <FullscreenControl style={fullscreenControlStyle} /> */}
        <NavigationControl style={navStyle} />
        <ScaleControl style={scaleControlStyle} />
      </ReactMapGL>
    </div>
  );
};

export default App;
