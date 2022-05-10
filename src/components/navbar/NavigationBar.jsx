import React from "react";
import { Navbar, Title, Icon, TitleContainer } from "./styles";
import icon from "../../icons/covid.png";

export default function NavigationBar() {
  return (
    <Navbar>
      <TitleContainer>
        <Icon src={icon} />
        <Title>Data Analysis for COVID</Title>
      </TitleContainer>
    </Navbar>
  );
}
