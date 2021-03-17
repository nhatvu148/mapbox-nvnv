import React, { FC, useState, useEffect } from "react";
import ReactMapGL, {
  Marker,
  Popup,
  NavigationControl,
  ScaleControl,
  Source,
  Layer,
  LayerProps
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

const pointLayer: LayerProps = {
  type: "circle",
  paint: {
    "circle-radius": 10,
    "circle-color": "#007cbf"
  }
};

const pointOnCircle = ({
  center,
  angle,
  radius
}: {
  center: any;
  angle: any;
  radius: any;
}) => {
  return {
    type: "Point",
    coordinates: [
      center[0] + Math.cos(angle) * radius,
      center[1] + Math.sin(angle) * radius
    ]
  };
};

const MapPage: FC = () => {
  const [viewport, setViewport] = useState({
    latitude: 15,
    longitude: 115,
    width: "100vw",
    height: "100vh",
    zoom: 3,
    bearing: 0,
    pitch: 0
  });
  const [selectedPark, setSelectedPark] = useState<any>(null);
  const [popupInfo, setPopupInfo] = useState<any>(null);

  const [pointData, setPointData] = useState<
    | GeoJSON.Feature<GeoJSON.Geometry>
    | GeoJSON.FeatureCollection<GeoJSON.Geometry>
    | string
  >("");

  useEffect(() => {
    const animation = window.requestAnimationFrame(() =>
      setPointData(
        // @ts-ignore
        pointOnCircle({ center: [-100, 0], angle: Date.now() / 1000, radius: 20 })
      )
    );
    return () => window.cancelAnimationFrame(animation);
  });

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
        {pointData && (
          <Source type="geojson" data={pointData}>
            <Layer {...pointLayer} />
          </Source>
        )}

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

export default MapPage;
