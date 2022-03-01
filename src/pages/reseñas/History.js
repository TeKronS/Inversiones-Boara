import { useState } from "react";
import { Article, Flexdiv, ImgBox } from "./styles";
import { ImgSpand } from "./../../components/ImgSpand/ImgSpand";

export const History = ({ history, dateTime, timeago, image }) => {
  const [isImgSpan, setImgSpand] = useState(false);

  function imageState() {
    isImgSpan ? setImgSpand(false) : setImgSpand(true);
  }

  return (
    <Article>
      {isImgSpan && <ImgSpand setState={imageState} image={image} />}
      <time datatime={dateTime}>{timeago}</time>
      <p>{history}</p>
      <Flexdiv />
      <ImgBox>
        <img onClick={imageState} alt="" src={image} />
      </ImgBox>
    </Article>
  );
};
