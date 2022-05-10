import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const heartBeat = keyframes`
   0% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(0.9);
  }
`;

const appearFromRightVirus1 = keyframes`
  0%{
    opacity:0;
    transform:translateX(200px);
  }

  100%{
    opacity:1;
    transform:translateX(0);
  }
`;

const appearFromRightVirus2 = keyframes`
  0%{
    opacity:0;
    transform:translateX(100px);
  }

  100%{
    opacity:1;
    transform:translateX(0);
  }
`;

const appearFromRightVirus3 = keyframes`
  0%{
    opacity:0;
    transform:translateX(100px);
  }

  100%{
    opacity:1;
    transform:translateX(0);
  }
`;

const appearFromRightVirus4 = keyframes`
  0%{
    opacity:0;
    transform:translateX(100px);
  }

  100%{
    opacity:1;
    transform:translateX(0);
  }
`;

const appearFromRightVirus5 = keyframes`
  0%{
    opacity:0;
    transform:translateX(200px);
  }

  100%{
    opacity:1;
    transform:translateX(0);
  }
`;

const appearFromRightVirus6 = keyframes`
  0%{
    opacity:0;
    transform:translateX(200px);
  }

  100%{
    opacity:1;
    transform:translateX(0);
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 80vh;
  padding-top: 200px;
  margin-bottom: 100px;
  display: flex;
  background-color: #000;
  clip-path: polygon(0 0, 100% 0, 100% 93%, 0% 100%);
`;

export const Image = styled.img`
  width: 99.1vw;
  left: 0;
  object-fit: cover;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
`;

export const ImageContainer = styled.div`
  width: 50%;
`;

export const Virus1 = styled.img`
  width: 550px;
  object-fit: cover;
  position: absolute;
  right: 150px;
  bottom: 70px;
  animation-name: ${appearFromRightVirus1};
  animation-duration: 2s;
`;

export const Virus2 = styled.img`
  width: 320px;
  object-fit: cover;
  position: absolute;
  right: 200px;
  top: 120px;
  animation-name: ${appearFromRightVirus2};
  animation-duration: 1.3s;
`;

export const Virus3 = styled.img`
  width: 250px;
  object-fit: cover;
  position: absolute;
  right: 600px;
  bottom: 200px;
  animation-name: ${appearFromRightVirus3};
  animation-duration: 1.5s;
`;

export const Virus4 = styled.img`
  width: 250px;
  object-fit: cover;
  position: absolute;
  right: 450px;
  top: 230px;
  animation-name: ${appearFromRightVirus4};
  animation-duration: 1s;
`;

export const Virus5 = styled.img`
  width: 120px;
  object-fit: cover;
  position: absolute;
  right: 650px;
  top: 350px;
  animation-name: ${appearFromRightVirus5};
  animation-duration: 1.5s;
`;

export const Virus6 = styled.img`
  width: 120px;
  object-fit: cover;
  position: absolute;
  right: 600px;
  top: 200px;
  animation-name: ${appearFromRightVirus6};
  animation-duration: 1s;
`;

export const HeadContainer = styled.div`
  width: 40%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  margin-left: 100px;
`;

export const Title = styled.p`
  font-size: 4rem;
  margin: 0;
  padding: 0;
  opacity: 0.8;
  color: white;
  /* background-image: linear-gradient(90deg, #2494a1 0%, #42d1e0 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
`;

export const Info = styled.p`
  color: #b9c3cf;
  font-size: 1.5rem;
  padding: 10px;
  opacity: 0.8;
  margin-bottom: 80px;
  margin-top: 50px;
`;

export const ExploreButton = styled.button`
  width: 280px;
  height: 50px;
  border-radius: 20px;
  box-shadow: 0 0 3px gray;
  background: linear-gradient(
    45deg,
    rgba(13, 100, 90, 1) 15%,
    rgba(0, 134, 157, 1) 45%,
    rgba(4, 180, 227, 1) 100%
  );
  color: white;
  align-items: center;
  justify-content: center;
  border: 0;
  cursor: pointer;
  font-size: 1.1rem;

  animation-name: ${heartBeat};
  animation-duration: 3s;
  animation-iteration-count: infinite;

  position: relative;
  z-index: 20;

  /* :hover {
    text-decoration: none;
    color: white;
    ::after {
      height: 0;
    }
  }

  ::after {
    content: "";
    width: 272px;
    height: 42px;
    right: 4px;
    z-index: -1;
    border-radius: 18px;
    top: 4px;
    position: absolute;
    background: white;
    transition: 0.3s ease;
  } */
`;
