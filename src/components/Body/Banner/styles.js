import styled from "@emotion/styled";

export const BaseContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 200px;
  margin-bottom: 200px;
`;

export const SectionsContainer = styled.div`
  width: 90%;
  height: 100%;
  background-color: black;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px 40px;
  clip-path: polygon(5% 10%, 100% 0, 95% 90%, 0% 100%);
`;

export const Icon = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  position: absolute;
  top: -150px;
  left: -120px;
`;

export const Title = styled.div`
  font-size: 3rem;
  font-weight: bolder;
  color: white;
  padding: 30px 0;
`;

export const Sections = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  padding: 40px;
`;

export const Section = styled.div`
  width: 300px;
  height: 70px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  clip-path: polygon(6% 10%, 100% 0, 94% 90%, 0% 100%);
  background: linear-gradient(
    90deg,
    rgba(13, 100, 90, 1) 15%,
    rgba(0, 134, 157, 1) 45%,
    rgba(4, 180, 227, 1) 100%
  );

  :hover {
    text-decoration: none;
    color: white;
    ::after {
      height: 0;
    }
  }

  ::after {
    content: "";
    width: 296px;
    height: 66px;
    right: 2px;
    top: 2px;
    position: absolute;
    background: black;
    transition: 0.3s ease;
    clip-path: polygon(6% 10%, 100% 0, 94% 90%, 0% 100%);
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
  z-index: 3;
`;
