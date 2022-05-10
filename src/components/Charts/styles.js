import styled from "@emotion/styled";

export const ChartSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px;
  margin-bottom: 250px;
`;
export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
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
`;

export const Mark = styled.div`
  width: 20px;
  height: 2px;
  background-color: gray;
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
