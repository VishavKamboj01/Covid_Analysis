import React, { useState } from "react";
import {
  SelectedSection,
  Section,
  SectionsContainer,
  BaseContainer,
  Title,
  Sections,
  Text,
  Icon,
} from "./styles";

import virus from "../../../images/virus.png";

export default function SectionBanner({ onSectionChange }) {
  const [selectedSection, setSelectedSection] = useState("Section1");

  return (
    <BaseContainer data-aos="zoom-in-up" id="Sections">
      <SectionsContainer>
        <Icon src={virus} />
        <Title>Sections</Title>
        <Sections>
          {selectedSection === "Section1" ? (
            <SelectedSection animate>
              <Text>Regions</Text>
            </SelectedSection>
          ) : (
            <Section
              onClick={() => {
                setSelectedSection("Section1");
                onSectionChange("Section1");
              }}
            >
              <Text>Regions</Text>
            </Section>
          )}
          {selectedSection === "Section2" ? (
            <SelectedSection animate>
              <Text>Symptoms / Infected</Text>
            </SelectedSection>
          ) : (
            <Section
              onClick={() => {
                setSelectedSection("Section2");
                onSectionChange("Section2");
              }}
            >
              <Text>Symptoms / Infected</Text>
            </Section>
          )}
          {selectedSection === "Section3" ? (
            <SelectedSection animate>
              <Text>Risk Mortality / Infection</Text>
            </SelectedSection>
          ) : (
            <Section
              onClick={() => {
                setSelectedSection("Section3");
                onSectionChange("Section3");
              }}
            >
              <Text>Risk Mortality / Infection</Text>
            </Section>
          )}
          {selectedSection === "Section4" ? (
            <SelectedSection animate>
              <Text>Disease</Text>
            </SelectedSection>
          ) : (
            <Section
              onClick={() => {
                setSelectedSection("Section4");
                onSectionChange("Section4");
              }}
            >
              <Text>Disease</Text>
            </Section>
          )}
        </Sections>
      </SectionsContainer>
    </BaseContainer>
  );
}
