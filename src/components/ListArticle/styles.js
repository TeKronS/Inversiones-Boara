import styled from "styled-components";
const color = {
  azul: "#021323",
  amarillo1: "#FFCD00",
  amarillo2: "#ebb441",
  gris: "#8B8B8B"
};
export const Body = styled.section`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  transform-origin: center;
  transform: scale(0);
  transition: 350ms ease-in-out 0s;
  color: white;
  text-align: center;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 10px;
`;

export const TotalPedidoBox = styled.div`
  position: sticky;
  top: 0;
  margin-bottom: 10px;
  div {
    padding: 10px;
    margin-top: 10px;
    background: ${color.azul};
    border-radius: 3px;
    border: 2px solid ${color.gris};
  }

  span {
    font-size: 20px;
    :nth-child(2) {
      background: white;
      color: black;
      font-size: 23px;
      padding: 0 4px;
      border-radius: 999px;
    }
  }
`;
export const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  color: red;
  margin-bottom: 6px;
`;

export const BodyCategory = styled.section`
  border: 2px solid white;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  margin-bottom: 7px;
  background: white;
  width: 100%;
  max-width: 610px;
  align-self: center;
  h4 {
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    background: #ffc300;
    background: ${color.amarillo2};
    border: 2px solid white;
    color: ${color.azul};
    padding: 4px;
    font-size: 1.4em;
  }
`;
export const BodyArticles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 610px;
`;

export const BoxButtons = styled.div`
  display: flex;
  position: sticky;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 101;
  background: ${color.azul};
  min-height: 60px;
  border: 1px solid ${color.gris};
  button {
    border-radius: 6px;
    background: ${color.gris};
    font-size: 25px;
    height: 50px;
    margin: auto;
    flex: 1;
    max-width: 150px;
    cursor: pointer;
    :hover {
      background: ${color.amarillo2};
    }
  }
`;

export const Item = styled.article`
  display: flex;
  color: white;
  border-bottom: 1px solid white;
  border-left: 3px solid white;
  border-right: 3px solid white;
  border-radius: 5px;
  justify-content: space-between;
  width: calc(100% - 6px);
  max-width: 600px;
  font-size: 16px;
  font-weight: bold;
  height: 70px;
  background: #1b1d27;

  span > span {
    color: black;
    padding: 0 4px;
    border-radius: 999px;
    background: white;
    margin: 0 3px;
  }
  section {
    display: flex;
    align-items: center;
    margin: 4px;
  }
  img {
    width: 50px;
  }

  label {
    @media screen and (max-width: 555px) {
      display: none;
    }
  }
`;

export const AmountBox = styled.div`
  height: 61px;
  width: 61px;
  flex-direction: column;
  margin-left: 10px !important;
  text-align: center;

  div {
    justify-content: center;
    background: white;
    flex: 1;
    width: 100%;
    margin: 1px;
    border-radius: 3px;
  }
  span {
    margin-top: 2px;
    color: black;
    font-size: 20px;
  }
  button {
    font-size: 20px;
    height: 100%;
    flex: 1;
    width: 49%;
    cursor: pointer;
    :hover {
      background: ${color.amarillo1};
    }
  }
`;
