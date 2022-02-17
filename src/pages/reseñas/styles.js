import styled from "styled-components";

const color = {
  azul: "#021323",
  amarillo1: "#FFCD00",
  amarillo2: "#ebb441",
  gris: "#8B8B8B"
};
export const Body = styled.section`
  display: grid;
  min-height: 100vh;
  grid-template-rows: 30px 26px 1fr;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: 1px solid;
  h3 {
    margin-top: 3px;
    text-align: center;
  }
`;

export const BodyArticles = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-flow: dense;
  padding: 6px;
  gap: 10px;
  grid-template-rows: auto 1fr;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  border: 3px solid white;
  border-radius: 7px;
  padding: 10px;
  font-size: 17px;
  background: ${color.azul};
  color: white;
  min-height: 300px;
  time {
    color: ${color.amarillo1};
    font-weight: bold;
    margin-bottom: 4px;
  }
  p {
    margin-bottom: 10px;
  }
  @media screen and (max-width: 600px) {
    padding: 5px;
  }
`;

export const ImgBox = styled.div`
  max-width: 100%;
  display: flex;
  img {
    cursor: pointer;
    margin: auto;
    border-radius: 7px;
    max-width: 100%;
    max-height: 600px;
  }
`;
export const Flexdiv = styled.div`
  display: flex;
  height: 100%;
`;
