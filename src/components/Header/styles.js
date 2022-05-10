import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 200px;
  display: flex;
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
`;

export const Virus2 = styled.img`
  width: 320px;
  object-fit: cover;
  position: absolute;
  right: 200px;
  top: 120px;
`;

export const Virus3 = styled.img`
  width: 250px;
  object-fit: cover;
  position: absolute;
  right: 600px;
  bottom: 200px;
`;

export const Virus4 = styled.img`
  width: 250px;
  object-fit: cover;
  position: absolute;
  right: 450px;
  top: 230px;
`;

export const Virus5 = styled.img`
  width: 120px;
  object-fit: cover;
  position: absolute;
  right: 650px;
  top: 350px;
`;

export const Virus6 = styled.img`
  width: 120px;
  object-fit: cover;
  position: absolute;
  right: 650px;
  top: 200px;
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
  color: black;
  font-size: 4rem;
  margin: 0;
  padding: 0;
  opacity: 0.8;
`;

export const Info = styled.p`
  color: black;
  font-size: 1.5rem;
  padding: 10px;
  opacity: 0.8;
  margin-bottom: 100px;
`;

export const ExploreButton = styled.button`
  width: 280px;
  height: 50px;
  border-radius: 20px;
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
`;
