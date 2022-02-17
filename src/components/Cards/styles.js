import styled from "styled-components";

const color = {
  azul: "#021323",
  amarillo1: "#FFCD00",
  amarillo2: "#ebb441",
  gris: "#8B8B8B"
};

export const BodyCards = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-auto-flow: dense;
  border: 1px solid ${color.azul};
  padding: 10px;
  gap: 10px;
  grid-template-rows: auto 1fr;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.article`
  border: 5px solid ${color.azul};
  text-align: center;
  border-radius: 6px;
  background: ${color.azul};
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 400px) {
    grid-column: span 1 / auto !important;
  }
`;

export const Img = styled.section`
  width: 100%;
  display: flex;
  img {
    width: 100%;
    object-fit: contain;
    margin: auto;
    min-height: 150px;
    cursor:pointer;
  }
`;

export const Title = styled.h2`
  margin-top: 10px;
  font-size: 1.5rem;
`;

export const Price = styled.div`
  bottom: 35px;
  margin-bottom: 5px;
  font-weight: 555;
`;

export const Button = styled.button`
  display: flex;
  padding: 10px;
  background: ${color.amarillo2};
  font-size: 18px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transition: 200ms ease-in 0s;
  border: none;
  border-top: 2px solid ${color.azul};
  height: 60px;
  img {
    height: 40px;
    margin-right: 5px;
    transition: 200ms ease-in 0s;
    border-radius: 999px;
  }

  :hover {
    img {
      transform: rotate(15deg);
    }
    background: ${color.amarillo1};
  }
`;

export const DataSection = styled.section`
  display: flex;
  font-size: 1.2rem;
  flex-direction: column;
  justify-content: space-between;
  background: #dfd5bf;
  min-height: 120px;
  height: 100%;
`;
