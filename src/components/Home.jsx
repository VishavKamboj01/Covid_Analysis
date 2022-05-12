import React, { Fragment, useState } from "react";
import Header from "./Header/Header";
import Body from "./Body/Body";
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import Section4 from "./Sections/Section4";
export default function Home() {
  const [selectedSection, setSelectedSection] = useState("Section1");

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <Fragment>
      <Header />
      <Body onSectionChange={handleSectionChange} />
      {selectedSection === "Section1" && <Section1 />}
      {selectedSection === "Section2" && <Section2 />}
      {selectedSection === "Section3" && <Section3 />}
      {selectedSection === "Section4" && <Section4 />}
    </Fragment>
  );
}
