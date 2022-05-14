import React from "react";
import { TagContainer, Title, TitleContainer, UpArrow } from "./styles";
import arrow from "../../images/up-arrow.png";
import Link from "react-scroll/modules/components/Link";
export default function BackToSections() {
  return (
    <Link to="Sections" smooth={true}>
      <TagContainer data-aos="fade-right">
        <TitleContainer>
          <Title>Sections</Title>
          <UpArrow src={arrow} />
        </TitleContainer>
      </TagContainer>
    </Link>
  );
}
