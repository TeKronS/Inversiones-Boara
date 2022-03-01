import { useState, useRef, useEffect } from "react";
import { Body, Title, CustomLink } from "./styles";
import { ListArticle } from "./../../components/ListArticle/ListArticle";
import { AlertBox } from "./../../components/AlertBox/AlertBox";
import { GridCard } from "./../../components/Cards/GridCard";
import { BodyCards } from "./../../components/Cards/styles";
import { OrderBar } from "./../../components/OrderBar/OrderBar";
import { useNavigate } from "react-router-dom";

export const Home = ({ recommended, accessories }) => {
  const navigate = useNavigate();

  if (recommended === false) {
    navigate("/error");
  }

  useEffect(() => {
    if (recommended) {
      if (Object.keys(recommended).length === 0) {
        navigate("/error");
      }
    }
  }, [recommended]);

  const refWhatsappLink = useRef(null);
  const refBody = useRef(null);

  const [dataCard, setDataCard] = useState(false);
  const [isComplement, setComplement] = useState(false);
  const [nameOrder, setNameOrden] = useState(null);
  const [priceOrder, setPriceOrden] = useState(null);

  const message = `Hola me interesa el arreglo ${dataCard.title} que tiene el precio de ${dataCard.price} Dólares,`;
  const copyData = recommended && recommended.slice();

  function solicitarPerdido(title, price) {
    if (accessories && Object.keys(accessories).length > 0) {
      setDataCard({ title, price });
      return;
    }
    closeAlert(false);
  }

  function redirect(text) {
    copiarAlPortapapeles(text);
    refWhatsappLink.current.href = `https://api.whatsapp.com/send?phone=584244476167&text=${text}`;
    refWhatsappLink.current.click();
  }

  function closeAlert(response) {
    const text = `${message} tiene disponibilidad?`;
    if (response === true) {
      setComplement(true);
    } else if (response === false) {
      setDataCard(false);
      redirect(text);
    } else {
      setDataCard(false);
    }
  }

  function addComplement(response) {
    let additionalText = "";
    let totalPrice = parseFloat(dataCard.price);
    if (response) {
      setDataCard(false);
      setComplement(false);
      if (response === true) {
        return;
      }
      async function petition() {
        await Object.entries(response).forEach((item) => {
          const [key, value] = item;
          additionalText = additionalText + `${value["cantidad"]} ${key},`;
          const total =
            parseFloat(value["precio"]) * parseInt(value["cantidad"], 10);
          totalPrice = totalPrice + total;
        });
        const text = `${message} tambien me gustaria añadir ${additionalText} que seria en Total (${totalPrice} Dólares). ¿tiene disponibilidad?`;
        redirect(text);
      }
      petition();
    } else {
      setDataCard(false);
      setComplement(false);
      closeAlert(false);
    }
  }

  function copiarAlPortapapeles(text) {
    let aux = document.createElement("textarea");
    aux.innerHTML = text;
    refBody.current.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    refBody.current.removeChild(aux);
  }

  const articles =
    copyData &&
    copyData
      .sort(function (a, b) {
        var x = a.titulo.toLowerCase();
        var y = b.titulo.toLowerCase();
        if (nameOrder) {
          return x < y ? -1 : x > y ? 1 : 0;
        } else if (nameOrder === false) {
          return x > y ? -1 : x < y ? 1 : 0;
        } else {
          return 0;
        }
      })
      .sort(function (a, b) {
        if (priceOrder) {
          return a.precio - b.precio;
        } else if (priceOrder === false) {
          return b.precio - a.precio;
        } else {
          return 0;
        }
      });

  return (
    <Body ref={refBody}>
      <CustomLink ref={refWhatsappLink} />
      {dataCard && <AlertBox transitionFinish={closeAlert} />}
      <Title>
        <span>Encuentra el regalo Perfecto para esa Persona Especial</span>
      </Title>
      <OrderBar
        nameOrder={nameOrder}
        setNameOrden={setNameOrden}
        priceOrder={priceOrder}
        setPriceOrden={setPriceOrden}
      />
      <BodyCards>
        {articles && (
          <>
            {articles.map((item) => {
              return (
                <GridCard
                  item={item}
                  textButton={"Solicitar via Whatsapp"}
                  clickButton={solicitarPerdido}
                  key={item.id}
                />
              );
            })}
          </>
        )}
      </BodyCards>
      {isComplement && (
        <ListArticle
          setList={addComplement}
          articles={accessories}
          price={dataCard.price}
        />
      )}
    </Body>
  );
};
