import styled from "@emotion/styled";

export const Navbar = styled.div`
  width: 100%;
  background-color: white;
  border-bottom-style: solid;
  border-bottom-color: grey;
  border-bottom-width: 1px;
  top: 0;
  position: absolute;
  z-index: 1;
`;

export const TitleContainer = styled.div`
  padding: 20px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Title = styled.p`
  color: black;
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
