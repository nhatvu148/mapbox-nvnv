import React, { FC, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import parkData from "./data/skateboard-parks.json";

const App: FC = () => {
  const [viewport, setViewport] = useState({
    latitude: 35.785495315789454,
    longitude: 139.8958944210526,
    width: "100vw",
    height: "100vh",
    zoom: 10
  });
  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    const listener = (e: any) => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    }
    window.addEventListener("keydown", listener);

  }, [])

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
        {parkData.features.map((park) => (
          <Marker
            key={park.properties.PARK_ID}
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}
          >
            <button className="marker-btn" onClick={(e) => {
              e.preventDefault();
              setSelectedPark(park as any);
            }}>
              <img src="/skateboarding.svg" alt="Skate Park Icon" />
            </button>
          </Marker>
        ))}
        {selectedPark && (
          <Popup
            // @ts-ignore
            latitude={selectedPark!.geometry.coordinates[1]}
            // @ts-ignore
            longitude={selectedPark!.geometry.coordinates[0]}
            // @ts-ignore
            onClose={() => {
              setSelectedPark(null);
            }}
          >
            <div>
              {/* @ts-ignore */}
              <h2>{selectedPark.properties.NAME}</h2>
              {/* @ts-ignore */}
              <p>{selectedPark.properties.DESCRIPTIO}</p>
            </div>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
}

export default App;
