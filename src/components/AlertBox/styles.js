import styled from "styled-components";

const color = {
  azul: "#021323",
  amarillo1: "#FFCD00",
  amarillo2: "#ebb441",
  gris: "#8B8B8B"
};

export const Body = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 0;
  height: 0;
  .visible {
    transform: scale(1);
  }
`;
export const FixedBox = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(10, 10, 10, 0.5);
  transform-origin: center;
  transform: scale(0);
  transition: 350ms ease-in-out 0s;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const AlertBoxElemt = styled.section`
  background: ${color.amarillo1};
  border-radius: 6px;
  width: 90%;
  max-width: 500px;
  padding: 5px;
  div {
    padding: 4px;
    background: ${color.azul};
    border-radius: 6px;

    div {
      background: ${color.amarillo2};
    }
  }

  span {
    display: block;
    padding: 10px;
    font-size: 24px;
  }
`;

export const ExitButton = styled.button`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 101;
  background: ${color.azul};
  border: 2px solid ${color.amarillo1};
  width: 50px;
  height: 50px;
  border-radius: 999px;
  font-size: 25px;
  color: white;
  :before {
    content: "X";
  }
`;

export const OptionButtonBox = styled.div`
  display: flex;

  button {
    height: 50px;
    padding: 10px;
    flex: 1;
    margin: 5px;
    border-radius: 6px;
    background: ${color.azul};
    color: ${color.amarillo2};
    font-weight: bold;
    :hover {
      background: grey;
    }
  }
`;
