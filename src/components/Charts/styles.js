import styled from "@emotion/styled/macro";

import { keyframes } from "@emotion/react";

const slideToLeft = keyframes`
  0%{
    transform:translateX(70px);
  }

  100%{
    transform:translateX(0);
    background-color: #fd5d5d;
  }
`;

const slideToRight = keyframes`
  0%{
    transform:translateX(0);
  }

  100%{
    transform:translateX(70px);
    background-color:#6ECB63;
  }
`;

export const ChartSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px;
  margin-bottom: 250px;
  position: relative;
`;
export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 30px 10px;
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: bolder;
  margin-left: 35px;
  color: #1b0760;
  ::selection {
    background-color: #42d1e0;
    color: white;
  }
`;

export const PointsContainer = styled.div``;
export const Point = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 5px;
`;

export const Mark = styled.div`
  width: 20px;
  height: 2px;
  background-color: #918ca4;
  position: absolute;
`;

export const Text = styled.p`
  font-size: 1.1rem;
  margin-left: 35px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #918ca4;
  ::selection {
    background-color: #42d1e0;
    color: white;
  }
`;

export const ChartContainer = styled.div`
  width: 45%;
`;

export const ToggleContainer = styled.div`
  width: 150px;
  height: 40px;
  background-color: white;
  position: absolute;
  bottom: -40px;
  border-radius: 40px;
  align-items: center;

  box-shadow: 0 0 30px #b9c3cf;
`;

export const ToggleSwitch = styled.div`
  width: 75px;
  height: 36px;
  position: absolute;
  background-color: #fd5d5d;
  opacity: 0.8;
  border-radius: 25px;
  left: 2px;
  bottom: 2px;
  cursor: pointer;

  animation-name: ${(props) => (props.animate ? slideToRight : "")};
  animation-duration: 0.7s;
  animation-fill-mode: forwards;

  :hover {
    opacity: 1;
  }
`;

export const ToggleSwitch2 = styled.div`
  width: 75px;
  height: 36px;
  position: absolute;
  background-color: ${(props) => (props.animate ? "#6ecb63" : "#fd5d5d")};
  opacity: 0.8;
  border-radius: 25px;
  left: 2px;
  bottom: 2px;
  cursor: pointer;

  animation-name: ${(props) => (props.animate ? slideToLeft : "")};
  animation-duration: 0.7s;
  animation-fill-mode: forwards;

  :hover {
    opacity: 1;
  }
`;
