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

const listActions = ["Essence of the Platebearer", "Essence of the Skirmisher"];

const bsfMonsterLocations = {
  Zone1: {
    Normal: [
      { Monster: "Bozjan Nepenthes", Level: 1, Location: [32.63, 9.78], radius: 4000 },
      { Monster: "Bozjan Orobon", Level: 1, Location: [32.64, 9.86], radius: 5000 },
      { Monster: "Bozjan Korrigan", Level: 2, Location: [32.75, 10.04], radius: 5000 },
      { Monster: "Bozjan Mudpuppy", Level: 2, Location: [32.595, 10.025], radius: 4500 },
      { Monster: "Bozjan Matamata", Level: 2, Location: [32.75, 10.5], radius: 6500 }
    ],
  },
  Zone2: {
    Normal: [
        { Monster: "Bozjan Doblyn", Level: 1, Location: [33.01, 10.35], radius: 4000 },
        { Monster: "Bozjan Sabotender", Level: 1, Location: [33.125, 10.4], radius: 5000 },
        { Monster: "Bozjan Tormentor", Level: 2, Location: [33.205, 10.27], radius: 5000 },
        { Monster: "Red Chocobo", Level: 2, Location: [33.21, 10.37], radius: 4000 },
        { Monster: "Bozjan Worm", Level: 3, Location: [33.033, 10.23], radius: 4000 },
        { Monster: "Bozjan Antlion", Level: 3, Location: [33.06, 10.08], radius: 5000 },
        { Monster: "Bozjan Bandersnatch", Level: 4, Location: [32.9, 10.12], radius: 4000 },
        { Monster: "Bozjan Biast", Level: 4, Location: [32.91, 9.961], radius: 5000 },
        { Monster: "Bozjan Taipan", Level: 4, Location: [32.85, 9.72], radius: 5000 },
    ]
  },
  Zone3: {
    Normal: []
  }
};

const actions = [
  {
    ActionName: "Essence of the Platebearer",
    Fragment: "Skill",
    Zones: ["BSF"],
    BSF: bsfMonsterLocations.Zone1.Normal,
  },
  {
    ActionName: "Essence of the Skirmisher",
    Fragment: "Awakening",
    Zones: ["BSF"],
    BSF: bsfMonsterLocations.Zone2.Normal,
  },
  {
    ActionName: "Lost Cure II",
    Fragment: "Compassion",
    Zones: ["BSF"],
    BSF: bsfMonsterLocations.Zone3.Normal,
  },
];

const fragments = [{ Fragment: "Sagacity", Locations: [["CLL", "2nd Chest"]] }];

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

  const locations = null;

  React.useEffect(() => {
    console.log(action);
  });

  React.useEffect(() => {
    if (x && action !== null) {
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
      action.BSF.forEach((e) => {
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
              setInputValue(newInputValue);
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
                {true ? <Circle
            center={[32.85, 9.72]}
            pathOptions={{ fillColor: "blue" }}
            radius={5000}
          >
            <Popup>
              Patriot Games <br /> CE
            </Popup>
        </Circle> : null}
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
