import { Body, ExitButton } from "./styles";
import { useBlocker } from "./../../hook/useBlocker";

export const ImgSpand = ({ image, setState }) => {
  useBlocker(() => setState(), true);

  return (
    <Body
      onBeforeInput={(e) => {
        alert(e);
      }}
    >
      <ExitButton onClick={setState} />
      <img alt="" src={image} />
    </Body>
  );
};
