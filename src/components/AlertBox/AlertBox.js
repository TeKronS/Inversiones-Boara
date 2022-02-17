import { useRef } from "react";
import {
  Body,
  ExitButton,
  AlertBoxElemt,
  FixedBox,
  OptionButtonBox
} from "./styles";
import { useBlocker } from "./../../hook/useBlocker";

export const AlertBox = ({ transitionFinish }) => {
  const refFixedBox = useRef(null);
  const response = useRef(null);

  useBlocker(() => transitionFinish(null), true);

  function clickYes() {
    refFixedBox.current.classList.toggle("visible");
    response.current = true;
  }
  function clickNo() {
    refFixedBox.current.classList.toggle("visible");
    response.current = false;
  }
  function transitionEnd() {
    transitionFinish(response.current);
  }

  return (
    <Body>
      <FixedBox
        onTransitionEnd={transitionEnd}
        ref={refFixedBox}
        className={"visible"}
      >
        <ExitButton onClick={() => transitionFinish(null)} />
        <AlertBoxElemt>
          <div>
            <div>
              <span>Tenemos Golosinas y Peluches.</span>
              <span>¿Quiere añadir algun complemento extra?</span>
              <OptionButtonBox>
                <button onClick={clickYes}>SI</button>
                <button onClick={clickNo}>NO</button>
              </OptionButtonBox>
            </div>
          </div>
        </AlertBoxElemt>
      </FixedBox>
    </Body>
  );
};
