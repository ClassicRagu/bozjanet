import * as React from "react";
import BozjaAccordians from "./BozjaAccordians";

const guides = require("../guides.json");

function Guides() {
  const formattedGuides = [];

  guides.forEach((element) => {
    formattedGuides.push(
      <BozjaAccordians props={element}/>
    );
  });

  return <>{formattedGuides}</>;
}

export default Guides;
