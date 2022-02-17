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
  background: #fff2dc;
  grid-template-rows: 70px 90px 26px 1fr;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Title = styled.h1`
  text-align: center;
  width: 100%;
  align-self: center;
  margin: 10px 0;
`;

export const BodyCategory = styled.section`
  background: ${color.azul};
  height: 80px;
  font-weight: bold;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  z-index: 5;
  position: relative;
  padding-top: 10px;
  white-space: nowrap;
  transition: 350ms ease-in-out 0s;

  .spand {
    height: calc(100vh - 20px);
    div:before {
      content: "Ocultar Categorias";
    }
  }
  nav {
    background: ${color.azul};
    padding-bottom: 10px;
    height: 60px;
    overflow: hidden;
    white-space: nowrap;
    transition: 350ms ease-in-out 0s;
  }

  div {
    display: flex;
    height: 30px;
    line-height: 30px;
    grid-column-start: 1;
    grid-column-end: -1;
    grid-row-start: 2;
    background: #dfd5bf;
    justify-content: center;
    border-radius: 4px;
    cursor: pointer;
    :hover {
      background: #c5ad78;
    }
    :before {
      content: "Mostrar Categorias";
    }
  }
  ul {
    display: grid;
    grid-gap: 10px 4px;
    grid-template-columns: repeat(auto-fit, 140px);
    grid-template-rows: 30px 30px;
    min-height: 100px;
    width: 100%;
    color: ${color.azul};
    justify-content: center;
    align-content: space-between;
  }
  li {
    display: flex;
    justify-content: center;
    border-radius: 4px;
    padding: 0 2px;
    background: ${color.gris};
    cursor: pointer;
    height: 30px;
    line-height: 30px;
    :hover {
      background: #c5ad78;
    }
  }
`;

export const WhatsappLink = styled.a`
  display: none;
`;
