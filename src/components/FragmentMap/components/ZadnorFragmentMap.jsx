import * as React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { Card } from "@mui/material";
import {
  MapContainer,
  ImageOverlay,
  Circle,
  Popup,
  Marker,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { fragments } from "../../../Actions";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import { useAtom } from "jotai";
import { fragmentState } from "../hooks/fragmentState";
import { bsfMarkerState } from "../hooks/bsfMarkerState";
import { zadnorMarkerState } from "../hooks/zadnorMarkerState";

const bounds = [
  [34, 9],
  [32, 11],
];

function ZadnorFragmentMap() {
  const [fragment] = useAtom(fragmentState);
  const [zadnorMarkers] = useAtom(zadnorMarkerState)

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          maxWidth: 800,
          width: "100%",
        }}
        style={{
          textAlign: "center",
          display: "flex",
          justifyItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100%", height: "600px" }} className="App">
          <MapContainer
            center={[33, 10]}
            zoom={8.499}
            maxZoom={11}
            minZoom={8.499}
            style={{ width: "100%", height: "100%" }}
            zoomControl={false}
          >
            {fragment && fragments[fragment].Dal ? (
              <Marker
                position={[33.6, 10.15]}
                icon={
                  new Icon({
                    iconUrl: "https://xivapi.com/i/063000/063912_hr1.png",
                    iconSize: [50, 50],
                    iconAnchor: [25, 25],
                  })
                }
              >
                <Popup>First Boss Dal Chest</Popup>
              </Marker>
            ) : null}
            {<Circle
                center={[33.25, 10.1]}
                pathOptions={{ fillColor: 'blue', color: 'blue' }}
                radius={7000}
              >
                <Popup>
                  test
                </Popup>
                </Circle>}
            {zadnorMarkers}
            <ImageOverlay
              url="https://xivapi.com/m/n4b6/n4b6.01.jpg"
              bounds={bounds}
            />
          </MapContainer>
        </div>
      </Card>
    </div>
  );
}

export default ZadnorFragmentMap;
