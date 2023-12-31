import "./App.css";
import * as React from "react";
import { Box, Grid, Button } from "@mui/material";
import Guides from "./components/Guides";
import { useWindowDimensions } from "./hooks/useWindowDimensions";
import FAQ from "./components/FAQ";
import FragmentLookup from "./components/FragmentMap/FragmentLookup";

function App() {
  const [pageState, setPageState] = React.useState("guides");
  const { width } = useWindowDimensions();

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Bozja Guides</h1>
      <Box
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          spacing={1}
          alignItems="top"
          justify="center"
          width={"100%"}
          style={{ minHeight: "75px", maxWidth: "1000px", marginBottom: "5px" }}
        >
          <Grid
            item
            xs={width >= 800 ? 4 : 12}
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              maxHeight: "50px",
              minWidth: "250px"
            }}
          >
            <Button
              size="large"
              style={{minWidth: "250px"}}
              variant={
                pageState === "initial" || pageState === "FAQ"
                  ? "contained"
                  : "outlined"
              }
              onClick={() => {
                setPageState("FAQ");
              }}
            >
              FAQ
            </Button>
          </Grid>
          <Grid
            item
            xs={width >= 800 ? 4 : 12}
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              maxHeight: "50px",
              minWidth: "250px"
            }}
          >
            <Button
              size="large"
              variant={
                pageState === "initial" || pageState === "guides"
                  ? "contained"
                  : "outlined"
              }
              style={{minWidth: "250px"}}
              onClick={() => {
                setPageState("guides");
              }}
            >
              I'm here for Guides
            </Button>
          </Grid>
          <Grid
            item
            xs={width >= 800 ? 4 : 12}
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              maxHeight: "50px",
              minWidth: "250px"
            }}
          >
            <Button
              size="large"
              variant={
                pageState === "initial" || pageState === "fragments"
                  ? "contained"
                  : "outlined"
              }
              style={{minWidth: "250px"}}
              onClick={() => {
                setPageState("fragments");
              }}
            >
              Fragment Map
            </Button>
          </Grid>
        </Grid>
      </Box>
      {pageState === "guides" ? (
        <Box
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            spacing={1}
            alignItems="top"
            justify="center"
            width={"75%"}
            style={{ minHeight: "200px" }}
          >
            <Guides />
          </Grid>
        </Box>
      ) : null}
      {pageState === "FAQ" ? (
        <Box
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            spacing={1}
            alignItems="top"
            justify="center"
            width={"75%"}
            style={{ minHeight: "200px" }}
          >
            <FAQ />
          </Grid>
        </Box>
      ) : null}
      {
        pageState === "fragments" ? <>
        <FragmentLookup />
        </> : null
      }
    </div>
  );
}

export default App;
