import React from "react";
import { Thanku, ThankuContainer, Image } from "./styles";
import virus from "../../images/virus.png";
export default function Thankyou() {
  return (
    <ThankuContainer>
      <Image src={virus} data-aos="fade-down" />
      <Thanku data-aos="zoom-in-up">Thank You</Thanku>
    </ThankuContainer>
  );
}
