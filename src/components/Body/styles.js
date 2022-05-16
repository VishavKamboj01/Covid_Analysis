import styled from "@emotion/styled";

export const BaseContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 50px;
  background-color: #f5f5f5;
  clip-path: polygon(0 10%, 100% 0, 100% 90%, 0% 100%);
`;

export const Card = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0 0 30px 30px #f0f0f0;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 50px 30px;
`;

export const Title = styled.p`
  font-size: 2.1rem;
  color: #1b0760;
  font-weight: bolder;
`;

export const Text = styled.p`
  font-size: 1.3rem;
  color: #918ca4;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
`;
