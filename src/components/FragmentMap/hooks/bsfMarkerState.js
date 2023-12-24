import { atom } from "jotai";
import { fragmentState } from "./fragmentState";
import { fragments } from "../../../Actions";
import { Circle, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { setColor } from "../components/functions/setColor";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

export const bsfMarkerState = atom((get) => {
  const fragment = get(fragmentState);
  if (fragment !== "") {
    const tmp = [];
    if (fragments[fragment].BSF)
      fragments[fragment].BSF.forEach((locations) => {
        locations.forEach((monster) => {
          if (monster.Level === "Star") {
            tmp.push(
              <Marker
                position={monster.Location}
                icon={
                  new Icon({
                    iconUrl: markerIconPng,
                    iconSize: [21, 41],
                    iconAnchor: [11, 41],
                  })
                }
              >
                <Popup>
                  {monster.Monster} <br /> Level:{monster.Level}
                </Popup>
              </Marker>
            );
          } else if (monster) {
            tmp.push(
              <Circle
                center={monster.Location}
                pathOptions={{
                  fillColor: setColor(monster.Level),
                  color: setColor(monster.Level),
                }}
                radius={monster.radius}
              >
                <Popup>
                  {monster.Monster} <br /> Level:{monster.Level} <br />{" "}
                  {monster.additionalInfo}
                </Popup>
              </Circle>
            );
          }
        });
      });
    return tmp;
  } else {
    return null;
  }
});
