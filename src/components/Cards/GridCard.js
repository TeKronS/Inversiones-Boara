import { useState } from "react";
import { Card, DataSection, Img, Title, Price, Button } from "./styles";
import IconWhatsapp from "./../../img/WhatsappIcon.jpg";
import { ImgSpand } from "./../ImgSpand/ImgSpand";

export const GridCard = ({ item, clickButton, textButton }) => {
  const [isImgSpan, setImgSpand] = useState(false);

  function imageState() {
    isImgSpan ? setImgSpand(false) : setImgSpand(true);
  }
  function spanImg(e) {
    if (e.target.width > e.target.height + 5) {
      e.target.parentNode.parentNode.style.gridColumn = "span 2";
    }
  }

  function handlerClick() {
    clickButton(item.titulo, item.precio);
  }
  return (
    <Card>
      {isImgSpan && <ImgSpand setState={imageState} image={item.imagen} />}
      {item ? (
        <>
          <Img>
            <img
              onClick={imageState}
              onLoad={spanImg}
              alt=""
              src={item.imagen}
            />
          </Img>
          <DataSection>
            <Title>{item.titulo}</Title>
            <Price>
              <span>Precio: {item.precio} UDS</span>
            </Price>

            <Button onClick={handlerClick}>
              <img alt="" src={IconWhatsapp} />
              <span>{textButton}</span>
            </Button>
          </DataSection>
        </>
      ) : (
        <>
          <Img>
            <img alt="" />
          </Img>
          <DataSection>
            <Title></Title>
            <Price>
              <span>Precio: 10 UDS</span>
            </Price>
            <Button>Solicitar Pedido</Button>
          </DataSection>
        </>
      )}
    </Card>
  );
};
