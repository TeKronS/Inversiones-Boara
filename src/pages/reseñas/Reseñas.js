import { useState, useEffect } from "react";
import { BodyArticles, Body } from "./styles";
import { timeAgo } from "./../../components/TimeAgo/TimeAgo";
import { OrderBox } from "./../../components/OrderBar/styles";
import { History } from "./History";
import { useNavigate } from "react-router-dom";

export const Reseñas = ({ reviews }) => {
  const navigate = useNavigate();

  if (reviews === false) {
    navigate("/error");
  }

  //checking if reviews has items
  useEffect(() => {
    if (reviews) {
      if (!reviews.length) {
        navigate("/error");
      }
    }
  }, [reviews]);

  const [order, setOrder] = useState(true);

  //creating sorted iterable variable
  const articles =
    reviews &&
    reviews.sort(function (a, b) {
      if (!order) {
        return a.fecha.seconds - b.fecha.seconds;
      } else {
        return b.fecha.seconds - a.fecha.seconds;
      }
    });

  function changedOrder(e) {
    e.target.children[0].innerHTML = "⬤";

    if (e.target.id === "resientes") {
      if (!order) {
        e.target.nextSibling.children[0].innerHTML = "◯";
        setOrder(true);
      }
    } else {
      if (order) {
        e.target.previousSibling.children[0].innerHTML = "◯";
        setOrder(false);
      }
    }
  }

  return (
    <Body>
      <h3>Reseñas</h3>
      <OrderBox>
        <span>Ordenar por:</span>
        <button onClick={changedOrder} id="resientes">
          Resientes
          <div>⬤</div>
        </button>
        <button onClick={changedOrder} id="antiguos">
          Antiguos
          <div>◯</div>
        </button>
      </OrderBox>
      <BodyArticles>
        {articles &&
          articles.map((doc) => {
            const timestamp = doc.fecha.seconds * 1000;
            const { dateTime, timeago } = timeAgo(timestamp);

            return (
              <History
                key={doc.id}
                history={doc.historia}
                dateTime={dateTime}
                timeago={timeago}
                image={doc.imagen}
              />
            );
          })}
      </BodyArticles>
    </Body>
  );
};
