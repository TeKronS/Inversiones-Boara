import styled from "styled-components";

const color = {
  azul: "#021323",
  amarillo1: "#FFCD00",
  amarillo2: "#ebb441",
  gris: "#8B8B8B",
};

export const Body = styled.section`
  display: grid;
  min-height: 100vh;
  overflow: hidden;
  border-top-left-radius: 30px;
  grid-template-rows: 80px 26px 1fr;
  background: #fff2dc;
  textarea {
    height: 0;
    width: 0;
    opacity: 0;
  }
`;

export const Title = styled.h1`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 100%;
  max-height: 100%;
  border: 1px solid ${color.azul};
  border-top-left-radius: 31px;
  span {
    color: ${color.azul};
    line-height: 25px;
    margin: 5px 5px 5px 10px;
    @media screen and (max-width: 285px) {
      font-size: 20px;
    }
  }
`;

export const CustomLink = styled.a`
  display: none;
`;
