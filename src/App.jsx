import "./App.css";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid"

const guides = require("./guides.json");

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function App() {

  const [openKey, setOpenKey] = React.useState();
  const { height, width } = useWindowDimensions();

  console.log(height)

  const handleToggle = (key) => {
    setOpenKey(openKey !== key ? key : null);
  };

  const formattedGuides = [];

  const card = (guideName, internalGuides) => {
    const guideList = [];
    internalGuides.forEach((element) => {
      guideList.push(
        <p>
          <a href={element[1]}>{element[0]}</a>
        </p>
      );
    });
    return (
      <Accordion
        expanded={openKey === guideName}
        onChange={() => handleToggle(guideName)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id={guideName}
        >
          <Typography>{guideName}</Typography>
        </AccordionSummary>
        <AccordionDetails>{guideList}</AccordionDetails>
      </Accordion>
    );
  };

  guides.forEach((element) => {
    formattedGuides.push(
      <Grid item xs={width >= 1000 ? 4 : 12}>
      <Card
      key={element.Name}
        variant="outlined"
        sx={{
          maxWidth: 800,
          width: "100%"
        }}
      >
        {card(element.Name, element.Guides)}
      </Card>
      </Grid>
    );
  });

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Bozja Guides</h1>
      <Box 
        style={{display:"flex", alignContent:'center', justifyContent:'center'}}
      >
        <Grid
          container
          spacing={1}
          alignItems= "top"
          justify="center"
          width={"75%"}
          style={{ minHeight: "200px" }}
        >
          <Grid item xs={width >= 1000 ? 4 : 12}>
            <Card
              variant="outlined"
              sx={{
                maxWidth: 800,
                width: "100%"
              }}
            >
              <Accordion expanded={false}>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="DRS"
                >
                  <Typography>
                    <a href="https://lynn.pet/">DRS Guides</a>
                  </Typography>
                </AccordionSummary>
              </Accordion>
            </Card>
            </Grid>
            {formattedGuides}
        </Grid>
        </Box>
    </div>
  );
}

export default App;
