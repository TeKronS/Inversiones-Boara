import { Body, ExitButton } from "./styles";
import { useBlocker } from "./../../hook/useBlocker";

export const ImgSpand = ({ image, setState }) => {
  useBlocker(setState, true);

  return (
    <Body>
      <ExitButton onClick={setState} />
      <img alt="" src={image} />
    </Body>
  );
};
