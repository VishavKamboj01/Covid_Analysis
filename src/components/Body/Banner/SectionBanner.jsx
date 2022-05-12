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
    <BaseContainer data-aos="zoom-in-up">
      <SectionsContainer>
        <Icon src={virus} />
        <Title>Sections</Title>
        <Sections>
          {selectedSection === "Section1" ? (
            <SelectedSection animate>
              <Text>Section 1</Text>
            </SelectedSection>
          ) : (
            <Section
              onClick={() => {
                setSelectedSection("Section1");
                onSectionChange("Section1");
              }}
            >
              <Text>Section 1</Text>
            </Section>
          )}
          {selectedSection === "Section2" ? (
            <SelectedSection animate>
              <Text>Section 2</Text>
            </SelectedSection>
          ) : (
            <Section
              onClick={() => {
                setSelectedSection("Section2");
                onSectionChange("Section2");
              }}
            >
              <Text>Section 2</Text>
            </Section>
          )}
          {selectedSection === "Section3" ? (
            <SelectedSection animate>
              <Text>Section 3</Text>
            </SelectedSection>
          ) : (
            <Section
              onClick={() => {
                setSelectedSection("Section3");
                onSectionChange("Section3");
              }}
            >
              <Text>Section 3</Text>
            </Section>
          )}
          {selectedSection === "Section4" ? (
            <SelectedSection animate>
              <Text>Section 4</Text>
            </SelectedSection>
          ) : (
            <Section
              onClick={() => {
                setSelectedSection("Section4");
                onSectionChange("Section4");
              }}
            >
              <Text>Section 4</Text>
            </Section>
          )}
        </Sections>
      </SectionsContainer>
    </BaseContainer>
  );
}
