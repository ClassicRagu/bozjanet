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

import { listActions, actions, fragments, fragmentList } from "../Actions";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

const bounds = [
  [34, 9],
  [32, 11],
];

function FragmentLookup() {
  const [action, setAction] = React.useState(null);
  const [inputValue, setInputValue] = React.useState("");
  const [fragment, setFragment] = React.useState("")
  const [fragmentInputValue, setFragmentInputValue] = React.useState("")
  const [z, a] = React.useState([]);

  const setColor = (level) => {
    switch (level) {
      case 1:
        return "green";
      case 2:
        return "yellow";
      case 3:
        return "red";
      case 4:
        return "purple";
      case 5:
        return "black";
      case "Critical Engagement":
        return "white";
      default:
        return "blue";
    }
  };

  React.useEffect(() => {
    if (fragment !== "") {
      const tmp = [];
      {
        if (fragments[fragment].BSF)
          fragments[fragment].BSF.forEach((locations) => {
            locations.forEach((e) => {
              if (e.Level === "Star") {
                tmp.push(
                  <Marker
                    position={e.Location}
                    icon={
                      new Icon({
                        iconUrl: markerIconPng,
                        iconSize: [21, 41],
                        iconAnchor: [11, 41],
                      })
                    }
                  >
                    <Popup>
                      {e.Monster} <br /> Level:{e.Level}
                    </Popup>
                  </Marker>
                );
              } else if (e) {
                tmp.push(
                  <Circle
                    center={e.Location}
                    pathOptions={{
                      fillColor: setColor(e.Level),
                      color: setColor(e.Level),
                    }}
                    radius={e.radius}
                  >
                    <Popup>
                      {e.Monster} <br /> Level:{e.Level} <br /> {e.additionalInfo}
                    </Popup>
                  </Circle>
                );
              }
            });
          });
      }

      a(tmp);
    } else {
      a(null);
    }
  }, [action, fragment]);

  return (
    <>
      {
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
              display: "column",
              justifyItems: "center",
              justifyContent: "center",
            }}
          >
            <p>
              This page is under construction. Zadnor and better styling will be added in later releases.
            </p>
            <p>
              Thank you to <a href="https://xivapi.com/">XIVApi</a> for
              providing the map and icons.
            </p>
            <div style={{display: "inline"}}>
            <Autocomplete
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                if (newInputValue !== undefined) {
                  setInputValue(newInputValue);
                } else {
                  setInputValue("");
                }
              }}
              value={inputValue}
              onChange={(event, newValue) => {
                const val = actions.filter((x) => x.ActionName === newValue)[0]
                if(val){
                    setAction(val);
                setFragment(val.Fragment)
                setFragmentInputValue(val.Fragment)
                }
              }}
              disablePortal
              id="combo-box-demo"
              options={listActions}
              style={{ color: "blue", margin: "10px", minWidth: "350px", float:"left" }}
              renderInput={(params) => (
                <TextField {...params} label="Action/Essence/Item" />
              )}
            />
            <Autocomplete
              inputValue={fragmentInputValue}
              value={fragmentInputValue}
              onInputChange={(event, newInputValue, reason) => {
                  setFragmentInputValue(newInputValue)
              }}
              onChange={(event, newValue) => {
                setFragment(newValue)
                setAction("");
                setInputValue("")
              }}
              disablePortal
              id="combo-box-demo"
              options={fragmentList}
              style={{ color: "blue", margin: "10px", minWidth: "350px", float:"left" }}
              renderInput={(params) => (
                <TextField {...params} label="Fragment" />
              )}
            />
            </div>
          </Card>
        </div>
      }
      <>
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
                zoom={9}
                maxZoom={11}
                minZoom={9}
                style={{ width: "100%", height: "100%" }}
                zoomControl={false}
              >
                {fragment && fragments[fragment].Quartermaster ? (
                  <Marker
                    position={[32.6, 9.65]}
                    icon={
                      new Icon({
                        iconUrl: markerIconPng,
                        iconSize: [21, 41],
                        iconAnchor: [11, 41],
                      })
                    }
                  >
                    <Popup>Resistance Quartermaster</Popup>
                  </Marker>
                ) : null}
                {fragment && fragments[fragment].CLL ? (
                  <Marker
                    position={[33.4, 9.85]}
                    icon={
                      new Icon({
                        iconUrl: "https://xivapi.com/i/063000/063912_hr1.png",
                        iconSize: [50, 50],
                        iconAnchor: [25, 25],
                      })
                    }
                  >
                    <Popup>CLL Prisoner Chests</Popup>
                  </Marker>
                ) : null}
                {fragment && (fragments[fragment].DR || fragments[fragment].DRS)  ? (
                  <Marker
                    position={[32.54, 9.6]}
                    icon={
                      new Icon({
                        iconUrl: "https://xivapi.com/i/061000/061838_hr1.png",
                        iconSize: [34, 34],
                        iconAnchor: [17, 17],
                      })
                    }
                  >
                    <Popup>Delubrum Reginae {fragments[fragment].DRS ? "(Savage)" : null}</Popup>
                  </Marker>
                ) : null}
                {/*<Circle
                center={[33.32, 10.09]}
                pathOptions={{ fillColor: 'blue', color: 'blue' }}
                radius={3500}
              >
                <Popup>
                  test
                </Popup>
                </Circle>*/}
                {z}
                <ImageOverlay
                  url="https://xivapi.com/m/n4b4/n4b4.01.jpg"
                  bounds={bounds}
                />
              </MapContainer>
            </div>
          </Card>
        </div>
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
              display: "column",
              justifyItems: "center",
              justifyContent: "center",
            }}
          >
            <p>
              FINAL FANTASY XIV © 2010 - 2023 SQUARE ENIX CO., LTD. FINAL
              FANTASY, FINAL FANTASY XIV, and FFXIV are registered trademarks or
              trademarks of Square Enix Holdings Co., Ltd. All material used
              under license.
            </p>
          </Card>
        </div>
      </>
    </>
  );
}

export default FragmentLookup;
