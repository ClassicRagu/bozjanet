import * as React from "react";
import BozjaAccordians from "./BozjaAccordians";
import { Autocomplete, TextField } from "@mui/material";
import { Card } from "@mui/material";
import {
  MapContainer,
  ZoomControl,
  TileLayer,
  GeoJSON,
  ImageOverlay,
  Circle,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { listActions, actions, fragments } from "../Actions";

const bounds = [
  [34, 9],
  [32, 11],
];

function FragmentLookup() {
  const [action, setAction] = React.useState(null);
  const [inputValue, setInputValue] = React.useState("");
  const [x, y] = React.useState(true);
  const [z, a] = React.useState([]);

  const handleClick = () => {
    y(!x);
  };

  React.useEffect(() => {
    console.log(action);
  });

  React.useEffect(() => {
    if (x && action) {
      const tmp = [];
      /*actions.forEach((p) => {
        tmp.push(<Circle
            center={p.BSF[0].Location}
            pathOptions={{ fillColor: "blue" }}
            radius={4000}
          >
            <Popup>
              {p.BSF[0].Monster} <br /> Level:{p.BSF[0].Level}
            </Popup>
          </Circle>)
    })*/
    fragments[action.Fragment].BSF.forEach((locations) => {
        locations.forEach((e) => {
            tmp.push(
              <Circle
                center={e.Location}
                pathOptions={{ fillColor: "blue" }}
                radius={e.radius}
              >
                <Popup>
                  {e.Monster} <br /> Level:{e.Level}
                </Popup>
              </Circle>
            );
          });
      })
      
      a(tmp);
    } else {
      a(null);
    }
  }, [action]);

  return (
    <>
      {
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
          <Autocomplete
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
                if(newInputValue !== undefined){
              setInputValue(newInputValue);} else {
                setInputValue("")
              }
            }}
            value={inputValue}
            onChange={(event, newValue) => {
              console.log(newValue);
              console.log(action);
              setAction(actions.filter((x) => x.ActionName === newValue)[0]);
            }}
            disablePortal
            id="combo-box-demo"
            options={listActions}
            sx={{ width: 300 }}
            style={{ color: "blue", margin: "10px" }}
            renderInput={(params) => <TextField {...params} label="Actions" />}
          />
        </Card>
      }
      <>
        <div style={{ justifyContent: "center", flexDirection: "column" }}>
          {<button onClick={() => handleClick()}>Hello There</button>}
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
                // whenReady={setMapRef}
                center={[33, 10]}
                zoom={9}
                maxZoom={11}
                minZoom={9}
                style={{ width: "100%", height: "100%" }}
                zoomControl={false}
              >
                {true ? (
                  <Circle
                    center={[33.23, 9.605]}
                    pathOptions={{ fillColor: "blue" }}
                    radius={7500}
                  >
                    <Popup>
                      Patriot Games <br /> CE
                    </Popup>
                  </Circle>
                ) : null}
                {z}
                <ImageOverlay
                  url="https://xivapi.com/m/n4b4/n4b4.01.jpg"
                  bounds={bounds}
                />
              </MapContainer>
            </div>
          </Card>
        </div>
      </>
    </>
  );
}

export default FragmentLookup;
