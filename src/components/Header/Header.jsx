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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          quae vel aut, accus amus optio eius nemo atque, qui busdam porro iusto
          dolo ribus conse ctetur, digni ssimos illum tenetur culpa officia.
          Dicta, necessi tatibus voluptate. Ad pariatur eum qui itaque dolores
          asperiores.
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
