import { useRef, useEffect } from "react";
import {
  Body,
  BoxContent,
  BodyCategory,
  BodyArticles,
  BoxButtons,
  TotalPedidoBox,
} from "./styles";
import { Article } from "./Article";
import { useBlocker } from "./../../hook/useBlocker";

export const ListArticle = ({ articles, setList, price }) => {
  const refBody = useRef(null);
  const order = useRef({});
  const refTotalPrice = useRef(null);

  useBlocker(() => setList(true), true);

  useEffect(() => {
    refBody.current.style.transform = "scale(1)";
    refTotalPrice.current.innerHTML = price;
  }, [price]);

  function aceptar() {
    refBody.current.style.transform = "scale(0)";
  }
  function cancelar() {
    order.current = {};
    refBody.current.style.transform = "scale(0)";
  }

  function transitionEnd() {
    if (refBody.current.style.transform === "scale(0)") {
      if (Object.keys(order.current).length === 0) {
        setList();
      } else {
        setList(order.current);
      }
    }
  }
  function setOrder(titulo, precio, cantidad) {
    if (cantidad === 0) {
      delete order.current[titulo];
    } else {
      order.current[titulo] = { precio, cantidad };
    }
    refTotalPrice.current.innerHTML = getTotalPrice();
  }

  function getTotalPrice() {
    let totalPrice = parseFloat(price, 10);
    if (Object.keys(order.current).length !== 0) {
      Object.values(order.current).forEach((item) => {
        totalPrice =
          totalPrice +
          parseFloat(item.precio, 10) * parseInt(item.cantidad, 10);
      });
      return totalPrice;
    }
    return totalPrice;
  }
  return (
    <Body onTransitionEnd={transitionEnd} ref={refBody}>
      <TotalPedidoBox>
        <div>
          <span>Total Pedido: </span> <span ref={refTotalPrice}></span>
          <span> Dólares</span>
        </div>
      </TotalPedidoBox>
      <BoxContent>
        {articles &&
          Object.keys(articles).map((doc, key) => {
            return (
              <BodyCategory key={key}>
                <h4>
                  <span> {doc}</span>
                </h4>
                <BodyArticles>
                  {Object.values(articles[doc]).map((item, key) => {
                    return <Article data={item} key={key} setData={setOrder} />;
                  })}
                </BodyArticles>
              </BodyCategory>
            );
          })}
      </BoxContent>
      <BoxButtons>
        <button onClick={cancelar}>Cancelar</button>
        <button onClick={aceptar}>Aceptar</button>
      </BoxButtons>
    </Body>
  );
};
