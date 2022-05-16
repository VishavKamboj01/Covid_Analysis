import React from "react";
import { BaseContainer, Card, Title, Text } from "./styles";

export default function About() {
  return (
    <BaseContainer id="AboutDataset">
      <Card data-aos="fade-up">
        <Title>About Dataset</Title>
        <Text>
          This dataset consists of 1023426 rows and 60 columns, this data is
          gathered through multiple sources i.e nhs (UK), cdc (USA), WHO and
          various journal article and official reports basically we can group
          this data into different categories and these categories are...
          <ol>
            <li>Geographical Data</li>
            <li>Health Data</li>
            <li>Travel History</li>
            <li>Work History</li>
            <li>Risk of Infection and Mortality</li>
            <li>Living Conditions</li>
          </ol>
        </Text>
      </Card>
    </BaseContainer>
  );
}
