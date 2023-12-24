import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { useAtom } from "jotai";
import { openKeyState } from "./hooks/openKeyState";

function BozjaAccordians(props) {
  const { width } = useWindowDimensions();
  const [openKey, setOpenKey] = useAtom(openKeyState);

  const handleToggle = (key) => {
    setOpenKey(openKey !== key ? key : null);
  };

  const card = (guideName, internalGuides, additionalGuides) => {
    const guideList = [];

    internalGuides.forEach((element) => {
      guideList.push(
        <p>
          <a href={element[1]}>{element[0]}</a>
        </p>
      );
    });

    if (additionalGuides) {
      additionalGuides.forEach((element) => {
        guideList.push(<p dangerouslySetInnerHTML={{ __html: element}} />);
      });
    }

    return (
      <Accordion
        expanded={openKey === guideName}
        onChange={() => {
          handleToggle(guideName);
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={guideName}
          id={guideName}
        >
          <Typography>{guideName}</Typography>
        </AccordionSummary>
        <AccordionDetails>{guideList}</AccordionDetails>
      </Accordion>
    );
  };

  return (
    <Grid item xs={width >= 1000 ? 4 : 12}>
      <Card
        key={props.props.Name}
        variant="outlined"
        sx={{
          maxWidth: 800,
          width: "100%",
        }}
      >
        {card(props.props.Name, props.props.Guides, props.props.Additional)}
      </Card>
    </Grid>
  );
}

export default BozjaAccordians;
