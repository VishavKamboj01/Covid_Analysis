import React from "react";
import {
  Section,
  SectionsContainer,
  BaseContainer,
  Title,
  Sections,
  Text,
  Icon,
} from "./styles";

import virus from "../../../images/virus.png";

export default function SectionBanner() {
  return (
    <BaseContainer>
      <SectionsContainer>
        <Icon src={virus} />
        <Title>Sections</Title>
        <Sections>
          <Section>
            <Text>Section 1</Text>
          </Section>
          <Section>
            <Text>Section 2</Text>
          </Section>
          <Section>
            <Text>Section 3</Text>
          </Section>
          <Section>
            <Text>Section 4</Text>
          </Section>
        </Sections>
      </SectionsContainer>
    </BaseContainer>
  );
}
