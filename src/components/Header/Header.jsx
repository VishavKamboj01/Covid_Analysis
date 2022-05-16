import React from "react";
import {
  Container,
  ExploreButton,
  HeadContainer,
  Image,
  ImageContainer,
  Info,
  Title,
  Virus1,
  Virus2,
  Virus3,
  Virus4,
  Virus5,
  Virus6,
} from "./styles";

import virus from "../../images/virus.png";
import Link from "react-scroll/modules/components/Link";

export default function Header() {
  return (
    <Container>
      <HeadContainer>
        <Title>Data Analysis</Title>
        <Info>
          COVID-19 research dataset is created to predict COVID-19 risk
          infection and risk mortality rate, this data was gathered by a
          software company located in London. This dataset consists of 1023426
          rows and 60 columns having geographical region, health diseases,
          factors used to reduce the spread of COVID-19. The initial World
          Health Organisation estimates put the chances of dying from COVID-19
          between 4% and 7%. We now know that figure is significantly lower with
          current estimates putting it between 0.3% and 0.6%.
        </Info>
        <Link to="AboutDataset" smooth={true}>
          <ExploreButton>START EXPLORING</ExploreButton>
        </Link>
      </HeadContainer>

      <ImageContainer>
        <Virus1 src={virus} />
        <Virus2 src={virus} />
        <Virus3 src={virus} />
        <Virus4 src={virus} />
        <Virus5 src={virus} />
        <Virus6 src={virus} />
      </ImageContainer>
    </Container>
  );
}
