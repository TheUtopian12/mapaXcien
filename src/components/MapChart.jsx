import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/angelnmara/geojson/master/mexicoHigh.json";

export default function MapChart({ setTooltipContent }) {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [100, -15, 0],
        scale: 800,
      }}
    >
      <Geographies geography={geoUrl} >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#EAEAEC"
              stroke="#ffff"
             
              onClick={() => {
                setTooltipContent(`${geo.properties.name}`);
              }}

              style={{
                default: {
                  fill: "#D6D6DA",
                  outline: "none"
                },
                hover: {
                  fill: "#009B3E",
                  outline: "none"
                },
                pressed: {
                  fill: "#039B00",
                  outline: "none"
                },
               
              }}
            />
          ))
        }
      </Geographies>
      
    </ComposableMap>
  );
}
