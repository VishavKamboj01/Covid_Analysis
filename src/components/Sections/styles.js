import styled from "@emotion/styled/macro";
import { keyframes } from "@emotion/react";

const slideToTop = keyframes`
  0%{
    transform:translateY(0);
  }

  100%{
    transform:translateY(-10px);
  }
`;

export const TagContainer = styled.div`
  width: 350px;
  height: 100px;
  background-color: black;
  margin-bottom: 200px;
  clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UpArrow = styled.img`
  width: 50px;
  object-fit: cover;

  cursor: pointer;

  :hover {
    animation-name: ${slideToTop};
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
  }
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 2.2rem;
  color: white;
  margin-right: 20px;

  cursor: pointer;
`;

export const ThankuContainer = styled.div`
  width: 100%;
  height: 1000px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(0 10%, 100% 0, 100% 100%, 0% 100%);
  margin-top: 200px;
  position: relative;
`;

export const Thanku = styled.p`
  font-size: 8rem;
  color: white;
  font-weight: bolder;
`;

export const Image = styled.img`
  position: absolute;
  left: -200px;
  top: -400px;
  width: 800px;
  object-fit: cover;
`;
