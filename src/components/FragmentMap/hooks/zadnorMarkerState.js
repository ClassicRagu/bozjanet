import { atom } from 'jotai';
import { fragmentState } from './fragmentState';
import { fragments } from "../../../Actions";
import {
    Circle,
    Popup,
    Marker,
  } from "react-leaflet";
  import "leaflet/dist/leaflet.css";
  import { setColor } from "../components/functions/setColor";
  import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

export const zadnorMarkerState = atom((get) => {
    const fragment = get(fragmentState)
    if (fragment !== "") {
        const tmp = [];
        {
          if (fragments[fragment].Zadnor)
            fragments[fragment].Zadnor.forEach((locations) => {
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
                        {e.Monster} <br /> Level:{e.Level} <br />{" "}
                        {e.additionalInfo}
                      </Popup>
                    </Circle>
                  );
                }
              });
            });
        }
        return tmp
    } else {
        return null
    }
})