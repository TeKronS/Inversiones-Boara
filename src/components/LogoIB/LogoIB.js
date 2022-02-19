import { useRef } from "react";
import {
  LogoContainer,
  ResizeBox,
  BoxLogo,
  IBF,
  IB,
  IBText,
  IBTextContainer
} from "./styles";

export const LogoIB = () => {
  const refBoxLogo = useRef(null);
  const LogoResizeBox = useRef(null);

  function endAnimation() {
    setTimeout(() => {
      LogoResizeBox.current.classList.remove("logoContainerFullScreen");
      refBoxLogo.current.classList.remove("BoxLogoCenter");
    }, 700);
  }

  function elementPositionchanged(){
    LogoResizeBox.current.style.position = "relative";
  }

  return (
    <LogoContainer>
      <ResizeBox
        onTransitionEnd={elementPositionchanged}
        ref={LogoResizeBox}
        className={"logoContainer logoContainerFullScreen"}
      >
        <BoxLogo ref={refBoxLogo} className={"BoxLogoCenter"}>
          <IBF onAnimationEnd={endAnimation} className={"IBFl"}>
            <div></div>
          </IBF>

          <IBF className={"IBFr"}>
            <div></div>
          </IBF>

          <IB>
            <IBTextContainer>
              <IBText translate={"no"}>IB</IBText>
            </IBTextContainer>
          </IB>
        </BoxLogo>
      </ResizeBox>
    </LogoContainer>
  );
};
