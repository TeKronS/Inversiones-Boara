import styled from "styled-components";

const color = {
  azul: "#021323",
  amarillo1: "#FFCD00",
  amarillo2: "#ebb441",
  gris: "#8B8B8B"
};

export const LogoContainer = styled.div`
  width: 1px;
  height: 1px;

  .logoContainerFullScreen {
    position: absolute;
    width: 1px;
    height: 1px;
    width: 100vw;
    height: 100vh;
    transform: scale(1);
    background: ${color.azul};
  }

  @keyframes animationIBF {
    0% {
      transform: scale(1.2, 1) translatex(-2200px);
    }

    100% {
      transform: scale(1.2, 1) translatex(0);
    }
  }
  @keyframes animationIB {
    0% {
      transform: scale(1, 0.8) translatex(-2240px);
    }

    100% {
      transform: scale(1, 0.8) translatex(0);
    }
  }
`;

export const ResizeBox = styled.div`
  display: flex;
  position: relative;
  transform-origin: left top;
  transition: 700ms ease-in-out 0s;
  top: 1;
  left: 1;
  width: 3px;
  height: 2px;
  transform: scale(0.46);
  justify-content: center;
  align-items: center;
  z-index: 50;

  .BoxLogoCenter {
    top: -102.5px;
    left: -143.5px;
  }
`;

export const BoxLogo = styled.div`
  position: relative;
  width: 1px;
  height: 1px;
  top: 0;
  left: 0;
  transform-origin: top left;
  transform: scale(0.9, 0.8);
  transition: 700ms ease-in-out 0s;
  .IBFl {
    left: 7px;
    animation-duration: 1500ms;
    animation-timing-function: ease-in;
  }
  .IBFl > div {
    background: linear-gradient(170deg, black 0%, ${color.gris} 100%);
    transform: translatex(30px) rotate(45deg);
  }
  .IBFr {
    left: 239px;
    animation-duration: 500ms;
    animation-timing-function: ease-in;
  }
  .IBFr > div {
    background: linear-gradient(90deg, black 0%, ${color.gris} 100%);
    transform: translatex(-30px) rotate(-45deg);
  }
`;

export const IBF = styled.div`
  display: flex;
  width: 60px;
  height: 120px;
  position: absolute;
  top: 67px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transform: scale(1.2, 1);
  animation-name: animationIBF;
  div {
    position: absolute;
    width: 85px;
    height: 85px;
  }
`;

export const IB = styled.div`
  position: relative;
  animation-name: animationIB;
  animation-duration: 1s;
  animation-timing-function: ease-in;
  transform: scale(1, 0.8) translatex(0);

  width: 150px;
  height: 315px;
  left: 77.5px;
  overflow-x: hidden;
  top: -30px;
`;

export const IBTextContainer = styled.div`
  background: #d9ad53;
  width: 220px;
  height: 220px;
  transform-origin: center;
  transform: translate(-34.5px, 47px) rotate(45deg) !important;
  overflow: hidden;
  display: flex;
  background: linear-gradient(
    145deg,
    ${color.amarillo1} 0%,
    ${color.amarillo2} 70%
  );
  text-align: center;
`;
export const IBText = styled.span`
  height: 220px;
  width: 220px;
  line-height: 220px;
  text-align: center;
  font-size: 120px;
  font-family: arial;
  color: ${color.azul};
  transform-origin: center;
  transform: rotate(-20deg) scale(1, 1.4) !important;
`;
