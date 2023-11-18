import * as React from "react";
import BozjaAccordians from "./BozjaAccordians";

const faqs = require("../FAQ.json");

function FAQ() {
  const formattedFAQs = [];

  faqs.forEach((element) => {
    const formattedLinks = [];
    element.Info.forEach((info, index) => {
      formattedLinks.push(
        info.replace(
          "<LINK>",
          `<a href=${element.Links[index][1]}>${element.Links[index][0]}</a>`
        )
      );
    });
    formattedFAQs.push(
      <BozjaAccordians
        props={{ Name: element.Name, Guides: [], Additional: formattedLinks }}
      />
    );
  });

  return (
    <>
        {formattedFAQs}
    </>
  );
}

export default FAQ;
