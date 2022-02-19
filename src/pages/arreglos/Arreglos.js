import { useState, useRef, useEffect } from "react";
import { Body, Title, BodyCategory, WhatsappLink } from "./styles";
import { ListArticle } from "./../../components/ListArticle/ListArticle";
import { GridCard } from "./../../components/Cards/GridCard";
import { BodyCards } from "./../../components/Cards/styles";
import { AlertBox } from "./../../components/AlertBox/AlertBox";
import { OrderBar } from "./../../components/OrderBar/OrderBar";
import { useNavigate } from "react-router-dom";

export const Arreglos = ({ data }) => {
  const navigate = useNavigate();
  if (data === false) {
    navigate("/error");
  }

  const [arrangements, setArrangements] = useState(null);
  const [accessories, setAccessories] = useState(null);

  useEffect(() => {
    if (data) {
      if (Object.keys(data.arreglos).length === 0) {
        navigate("/error");
      } else {
        if (Object.keys(data.complementos).length > 0) {
          setAccessories(data.complementos);
        }
        setArrangements(data.arreglos);
      }
    }
  }, [data]);

  const refCategoryElement = useRef(null);
  const refWhatsappLink = useRef(null);

  const [currentCategory, setCurrentCategory] = useState("Cumpleaño");
  const [dataCard, setDataCard] = useState(false);
  const [isComplement, setComplement] = useState(false);
  const [nameOrder, setNameOrden] = useState(null);
  const [priceOrder, setPriceOrden] = useState(null);

  const currentArrangements =
    arrangements && Object.entries(arrangements[currentCategory]);
  const message = `Hola me interesa el arreglo ${dataCard.title} que tiene el precio de ${dataCard.price} Dólares,`;

  function onChangedCategory(e) {
    setCurrentCategory(e.target.id);
  }
  function ClickCategory() {
    refCategoryElement.current.classList.toggle("spand");
  }
  function solicitarPerdido(title, price) {
    if (!accessories) {
      closeAlert(false);
      return;
    }
    setDataCard({ title, price });
  }
  function redirect(text) {
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
  const articles =
    currentArrangements &&
    currentArrangements
      .sort(function (a, b) {
        var x = a[1].titulo.toLowerCase();
        var y = b[1].titulo.toLowerCase();
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
          return a[1].precio - b[1].precio;
        } else if (priceOrder === false) {
          return b[1].precio - a[1].precio;
        } else {
          return 0;
        }
      });

  return (
    <Body>
      <WhatsappLink ref={refWhatsappLink} />
      {dataCard && <AlertBox transitionFinish={closeAlert} />}
      <Title>Regalos de {currentCategory}</Title>
      <BodyCategory>
        <nav ref={refCategoryElement}>
          <ul>
            {arrangements &&
              Object.keys(arrangements).map((doc, key) => {
                return (
                  <li id={doc} onClick={onChangedCategory} key={key}>
                    <span id={doc}> {doc}</span>
                  </li>
                );
              })}
            <div onClick={ClickCategory} />
          </ul>
        </nav>
      </BodyCategory>
      <OrderBar
        nameOrder={nameOrder}
        setNameOrden={setNameOrden}
        priceOrder={priceOrder}
        setPriceOrden={setPriceOrden}
      />
      <BodyCards key={currentCategory}>
        {articles ? (
          <>
            {articles.map((item) => {
              return (
                <GridCard
                  key={item[0]}
                  item={item[1]}
                  clickButton={solicitarPerdido}
                  textButton={"Solicitar vía Whatsapp"}
                />
              );
            })}
          </>
        ) : (
          <>
            <GridCard />
            <GridCard />
            <GridCard />
            <GridCard />
            <GridCard />
            <GridCard />
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
