import styled from "@emotion/styled";

export const Navbar = styled.div`
  width: 100%;
  background-color: #000;
  top: 0;
  position: fixed;
  z-index: 1;
`;

export const TitleContainer = styled.div`
  padding: 10px;
  height: 100%;
  display: flex;
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
