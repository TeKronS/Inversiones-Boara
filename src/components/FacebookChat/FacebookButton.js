import { Body } from "./styles";
import icon from "./img/IconMsg.png";
export const FacebookButton = ({ url }) => {
  return (
    <Body>
      <a target={"black"} href={url}>
        <img alt="" src={icon} />
      </a>
    </Body>
  );
};
