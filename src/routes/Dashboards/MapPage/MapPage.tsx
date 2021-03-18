import React, { FC, useState, useEffect, useRef, useCallback } from "react";
import ReactMapGL, {
  Marker,
  Popup,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
  ScaleControl,
  Source,
  Layer,
  LayerProps,
  FlyToInterpolator
} from "react-map-gl";
import { Radio, RadioChangeEvent, Button } from "antd";
import mapboxgl from "mapbox-gl";
import {
  CityInfo,
  Pins,
  geolocateStyle,
  fullscreenControlStyle,
  navStyle,
  scaleControlStyle
} from "components/Mapbox";
import parkData from "data/skateboard-parks.json";
import CITIES from "data/cities.json";
import { useQuery } from "react-query";
import { getQuoteData } from "api/myApi";
import useComponentSize from "hooks/useComponentSize";
import useWindowSize from "hooks/useWindowSize";

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

export const MapPage: FC = () => {
  const [viewport, setViewport] = useState<any>({
    latitude: 15,
    longitude: 115,
    zoom: 2.5,
    bearing: 0,
    pitch: 0
  });
  const [popupInfo, setPopupInfo] = useState<any>(null);
  const [value, setValue] = useState(1);
  const [mapStyle, setMapStyle] = useState(1);
  const contentRef = useRef(null);
  const { width: contentWidth, height: contentHeight } = useComponentSize(
    contentRef
  );
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  const { data } = useQuery(
    "quoteData", getQuoteData,
    {
      staleTime: 0,
      onError: () => {
        console.log("Error Fetching Quotes");
      }
    }
  );

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
        setPopupInfo(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  // redraw if the map's parent container or window changes size
  useEffect(() => {
    redrawMap();
  }, [contentWidth, contentHeight, windowWidth, windowHeight]);

  const redrawMap = () => {
    setViewport({
      ...viewport
    });
  };

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
    onSelectCity(CITIES[Number(e.target.value)]);
  };

  const onSelectCity = useCallback(({ longitude, latitude }) => {
    setViewport({
      longitude,
      latitude,
      zoom: 11,
      transitionInterpolator: new FlyToInterpolator({ speed: 1.2 }),
      transitionDuration: "auto"
    });
  }, []);

  return (
    <>
      <div style={{ height: "500px", position: "relative" }} ref={contentRef}>
        <ReactMapGL
          {...viewport}
          width="100%"
          height="100%"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle={
            mapStyle === 1
              ? "mapbox://styles/nhatvu148/ckmcqd67v5zmn17o3ig6y5ykw"
              : mapStyle === 2
                ? "mapbox://styles/mapbox/streets-v11"
                : mapStyle === 3
                  ? "mapbox://styles/nhatvu148/ckmcptq458h9717le4rrs1t5u"
                  : "mapbox://styles/nhatvu148/ckmf0vdp2hj0817lkwm8z7a50"
          }
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

          <GeolocateControl style={geolocateStyle} />
          <FullscreenControl style={fullscreenControlStyle} />
          <NavigationControl style={navStyle} />
          <ScaleControl style={scaleControlStyle} />
        </ReactMapGL>
      </div>

      <Radio.Group
        onChange={onChange}
        value={value}
        defaultValue="0"
        buttonStyle="solid"
      >
        {CITIES.map((place, index) => (
          <Radio.Button key={index} value={index}>
            {place.city}
            {", "}
            {place.state}
          </Radio.Button>
        ))}
      </Radio.Group>

      <Button
        onClick={() => {
          setMapStyle((prev) => {
            return prev === 4 ? 1 : prev + 1;
          });
        }}
      >
        Change Map Style
      </Button>
      {data && <h5>Quote of the day: "{data.data.content}"</h5>}
    </>
  );
};
