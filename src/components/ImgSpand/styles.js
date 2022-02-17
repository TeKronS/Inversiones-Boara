import styled from "styled-components";

const color = {
  azul: "#021323",
  amarillo1: "#FFCD00",
  amarillo2: "#ebb441",
  gris: "#8B8B8B"
};

export const Body = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  padding: 0 10px;
  overflow: hidden;

  @keyframes open {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }
  img {
    width: 100%;
    height: 95vh;
    max-width: 1000px;
    max-height: 1000px;
    margin: auto;
    object-fit: contain;
    width: 100%;
    transform-origin: center;
    animation-name: open;
    animation-duration: 300ms;
    animation-timing-function: ease-in-out;
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
