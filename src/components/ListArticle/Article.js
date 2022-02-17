import { useState } from "react";
import { Item, AmountBox } from "./styles";

export const Article = ({ data, setData }) => {
  const [amount, setAmount] = useState(0);
  const { titulo, precio, imagen } = data;

  function increase() {
    if (amount < 30) {
      setAmount(amount + 1);
      setData && setData(titulo, precio, amount + 1);
    }
  }
  function decrease() {
    if (amount > 0) {
      setAmount(amount - 1);
      setData && setData(titulo, precio, amount - 1);
    }
  }
  return (
    <Item>
      <section>
        <img alt="" height={50} src={imagen} />
      </section>
      <section>
        <h3>{titulo}</h3>
      </section>
      <section>
        <span>
          Precio <span>{precio}</span> USD
        </span>
      </section>
      <section>
        <label>Cantidad</label>
        <AmountBox>
          <div>
            <span>{amount}</span>
          </div>
          <div>
            <button onClick={decrease}>-</button>
            <button onClick={increase}>+</button>
          </div>
        </AmountBox>
      </section>
    </Item>
  );
};
