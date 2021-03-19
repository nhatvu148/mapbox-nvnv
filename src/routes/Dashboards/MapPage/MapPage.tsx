import React, { FC, useState, useEffect, useRef, useCallback } from "react";
import ReactMapGL, {
  Popup,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
  ScaleControl,
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
import CITIES from "data/cities.json";
import { useQuery } from "react-query";
import { getQuoteData } from "api/myApi";
import useComponentSize from "hooks/useComponentSize";
import useWindowSize from "hooks/useWindowSize";

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

export const MapPage: FC = () => {
  const [viewport, setViewport] = useState<any>({
    latitude: 15,
    longitude: 115,
    zoom: 2.5,
    bearing: 0,
    pitch: 0
  });
  const [popupInfo, setPopupInfo] = useState<any>(null);
  const [value, setValue] = useState<number>(1);
  const [mapStyle, setMapStyle] = useState<number>(1);
  const contentRef = useRef(null);
  const { width: contentWidth, height: contentHeight } = useComponentSize(
    contentRef
  );
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  const { data } = useQuery("quoteData", getQuoteData, {
    staleTime: 0,
    onError: () => {
      console.log("Error Fetching Quotes");
    }
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

  const onRadioChange = (e: RadioChangeEvent) => {
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
              : "mapbox://styles/nhatvu148/ckmcptq458h9717le4rrs1t5u"
          }
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

          <GeolocateControl style={geolocateStyle} />
          <FullscreenControl style={fullscreenControlStyle} />
          <NavigationControl style={navStyle} />
          <ScaleControl style={scaleControlStyle} />
        </ReactMapGL>
      </div>

      <Radio.Group
        onChange={onRadioChange}
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
          setValue((prev: number) => {
            let nextVal = prev === 0 ? CITIES.length - 1 : prev - 1;
            onSelectCity(CITIES[nextVal]);
            return nextVal;
          });
        }}
      >
        Previous City
      </Button>

      <Button
        onClick={() => {
          setValue((prev: number) => {
            let nextVal = prev === CITIES.length - 1 ? 0 : prev + 1;
            onSelectCity(CITIES[nextVal]);
            return nextVal;
          });
        }}
      >
        Next City
      </Button>

      <Button
        onClick={() => {
          setMapStyle((prev: number) => {
            return prev === 3 ? 1 : prev + 1;
          });
        }}
      >
        Change Map Style
      </Button>
      {data && <h5>Quote of the day: "{data.data.content}"</h5>}
    </>
  );
};
