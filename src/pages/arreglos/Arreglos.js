import { useState, useRef, useEffect } from "react";
import { Body, Title, BodyCategory, WhatsappLink } from "./styles";
import { ListArticle } from "./../../components/ListArticle/ListArticle";
import { GridCard } from "./../../components/Cards/GridCard";
import { BodyCards } from "./../../components/Cards/styles";
import { AlertBox } from "./../../components/AlertBox/AlertBox";
import { OrderBar } from "./../../components/OrderBar/OrderBar";
import { useNavigate } from "react-router-dom";

export const Arreglos = ({ arrangaments, accessories }) => {
  const navigate = useNavigate();
  if (arrangaments === false) {
    navigate("/error");
  }

  //checking if arrangaments has items
  //
  useEffect(() => {
    if (arrangaments) {
      if (Object.keys(arrangaments).length === 0) {
        navigate("/error");
      }
    }
  }, [arrangaments]);

  //Reference
  const refCategoryElement = useRef(null);
  const refWhatsappLink = useRef(null);

  //state var
  const [currentCategory, setCurrentCategory] = useState(
    arrangaments ? Object.keys(arrangaments)[0] : null
  );
  const [dataCard, setDataCard] = useState(false);
  const [isComplement, setComplement] = useState(false);
  const [nameOrder, setNameOrden] = useState(null);
  const [priceOrder, setPriceOrden] = useState(null);

  //get the current Arrangements
  const currentArrangements =
    arrangaments && currentCategory
      ? Object.entries(arrangaments[currentCategory])
      : null;
  //creating message to send to whatsapp
  const message = `Hola me interesa el arreglo ${dataCard.title} que tiene el precio de ${dataCard.price} Dólares,`;

  function onChangedCategory(e) {
    setCurrentCategory(e.target.id);
  }
  //this function open category bar
  function ClickCategory() {
    refCategoryElement.current.classList.toggle("spand");
  }

  //function to request product
  function solicitarPerdido(title, price) {
    //checking if accessories has elements, to activate alert box.
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

  //this function adds accessories to the request and calculates the total price
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

  //sort the variable
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

      {currentCategory ? (
        <Title>Regalos de {currentCategory}</Title>
      ) : (
        <Title className={"loading"}>CARGANDO</Title>
      )}

      <BodyCategory>
        <nav ref={refCategoryElement}>
          <ul>
            {arrangaments &&
              Object.keys(arrangaments).map((doc, key) => {
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
        {articles && (
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
