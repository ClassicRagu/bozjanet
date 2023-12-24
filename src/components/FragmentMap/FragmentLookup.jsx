import * as React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { Card } from "@mui/material";
import "leaflet/dist/leaflet.css";

import { listActions, actions, fragments, fragmentList } from "../../Actions";
import { useAtom } from "jotai";
import { fragmentState } from "./hooks/fragmentState";
import BSFFragmentMap from "./components/BSFFragmentMap";
import ZadnorFragmentMap from "./components/ZadnorFragmentMap";

function FragmentLookup() {
  const [inputValue, setInputValue] = React.useState("");
  const [fragment, setFragment] = useAtom(fragmentState);
  const [fragmentInputValue, setFragmentInputValue] = React.useState("");

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
              Thank you to <a href="https://xivapi.com/">XIVApi</a> for
              providing the map and icons.
            </p>
            <div style={{ display: "inline" }}>
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
                  const val = actions.filter(
                    (x) => x.ActionName === newValue
                  )[0];
                  if (val) {
                    setFragment(val.Fragment);
                    setFragmentInputValue(val.Fragment);
                  }
                }}
                disablePortal
                id="combo-box-demo"
                options={listActions}
                style={{
                  color: "blue",
                  margin: "10px",
                  minWidth: "350px",
                  float: "left",
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Action/Essence/Item" />
                )}
              />
              <Autocomplete
                inputValue={fragmentInputValue}
                value={fragmentInputValue}
                onInputChange={(event, newInputValue, reason) => {
                  setFragmentInputValue(newInputValue);
                }}
                onChange={(event, newValue) => {
                  setFragment(newValue);
                  setInputValue("");
                }}
                disablePortal
                id="combo-box-demo"
                options={fragmentList}
                style={{
                  color: "blue",
                  margin: "10px",
                  minWidth: "350px",
                  float: "left",
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Fragment" />
                )}
              />
            </div>
          </Card>
        </div>
      }
      <>
        {fragment &&
        (fragments[fragment].BSF ||
          fragments[fragment].CLL ||
          fragments[fragment].DR ||
          fragments[fragment].DRS ||
          (fragments[fragment].Quartermaster &&
            !fragments[fragment].Zadnor)) ? (
          <BSFFragmentMap />
        ) : null}
        {fragment && (fragments[fragment].Zadnor || fragments[fragment].Dal) ? (
          <ZadnorFragmentMap />
        ) : null}
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
