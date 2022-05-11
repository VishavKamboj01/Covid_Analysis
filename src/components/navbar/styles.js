import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { NavLink } from "react-router-dom";

const appearFromTop = keyframes`
  0%{
    opacity:0;
    transform:translateY(-100px);
  }

  100%{
    opacity:1;
    transform:translateY(0);
  }
`;

export const Navbar = styled.div`
  width: 100%;
  background-color: #000;
  top: 0;
  position: fixed;
  z-index: 1;
  animation-name: ${appearFromTop};
  animation-duration: 0.7s;
`;

export const TitleContainer = styled.div`
  padding: 10px;
  height: 100%;
  display: inline-flex;
  align-items: center;
`;

export const Title = styled.p`
  color: #2494a1;
  margin: 0px;
  font-size: 30px;
  display: inline;
`;

export const Icon = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 40px;
  object-fit: cover;
  margin-right: 10px;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SectionLink = styled.div`
  color: white;
  position: relative;
  justify-self: center;
  margin-right: 10px;
  line-height: -5px;
  font-size: 1.1rem;
  opacity: 0.7;
  cursor: pointer;
  text-transform: uppercase;
  font-family: inherit;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      45deg,
      rgba(13, 100, 90, 1) 15%,
      rgba(0, 134, 157, 1) 45%,
      rgba(4, 180, 227, 1) 100%
    );
    left: 0;
    bottom: -4px;
    transition: 0.3s ease;
    transform: scale(0, 1);
  }

  :hover {
    opacity: 1;
    color: white;
    ::after {
      transform: scale(1, 1);
    }
  }

  :active {
    color: white;
    transform: scale(0.95);
    transition-duration: 0.02s;
    transition-timing-function: ease-in-out;
  }

  @media (max-width: 812px) {
    display: none;
  }
`;
