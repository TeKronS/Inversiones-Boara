import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Main } from "./styles";
import { Home } from "./../pages/home/Home";
import { Arreglos } from "./../pages/arreglos/Arreglos";
import { AboutUs } from "./../pages/about/AboutUs";
import { Reseñas } from "./../pages/reseñas/Reseñas";
import { Error } from "./../pages/error/Error";
import { getInitialData, getTotalData } from "./../firebase/FirebaseConfig";
import { useNavigate, useLocation } from "react-router-dom";

//This application uses local storage so that it loads faster and without internet

export const MainSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  //these are the main data
  const [recommended, setRecommended] = useState(
    localStorage.getItem("Recomendados") !== undefined &&
      localStorage.getItem("Recomendados")
      ? JSON.parse(localStorage.getItem("Recomendados"))
      : null
  );
  const [accessories, setAccessories] = useState(
    localStorage.getItem("Complementos") !== undefined &&
      localStorage.getItem("Complementos")
      ? JSON.parse(localStorage.getItem("Complementos"))
      : null
  );
  const [arrangaments, setArrangaments] = useState(
    localStorage.getItem("Arreglos") !== undefined &&
      localStorage.getItem("Arreglos")
      ? JSON.parse(localStorage.getItem("Arreglos"))
      : null
  );

  const [reviews, setReviews] = useState(
    localStorage.getItem("Reseñas") !== undefined &&
      localStorage.getItem("Reseñas")
      ? JSON.parse(localStorage.getItem("Reseñas"))
      : null
  );

  useEffect(() => {
    if (
      location.pathname === "/about" ||
      location.pathname === "/arreglos" ||
      location.pathname === "/resenas"
    ) {
      navigate(location.pathname, { replace: false });
    } else {
      navigate("/", { replace: false });
    }

    //this function gets the first data
    function getRecommended() {
      getInitialData()
        .then(setRecommended)
        .catch(() => {
          if (!recommended) {
            setRecommended(false);
          }
        });
    }

    //this function gets the following data
    function getArrangementsAndAccesories() {
      getTotalData().then((data) => {
        if (Object.keys(data.complementos).length > 0) {
          localStorage.setItem(
            "Complementos",
            JSON.stringify(data.complementos)
          );
          setAccessories(data.complementos);
        } else {
          if (!accessories) {
            setAccessories(false);
          }
        }

        if (Object.keys(data.arreglos).length > 0) {
          localStorage.setItem("Arreglos", JSON.stringify(data.arreglos));
          setArrangaments(data.arreglos);
        } else {
          if (!arrangaments) {
            setArrangaments(false);
          }
        }

        if (data.reseñas.length) {
          localStorage.setItem("Reseñas", JSON.stringify(data.reseñas));
          setReviews(data.reseñas);
        } else {
          if (!reviews) {
            setReviews(false);
          }
        }
      });
    }
    getRecommended();
    getArrangementsAndAccesories();
  }, []);

  return (
    <Main>
      <Routes>
        <Route
          path="/"
          element={<Home recommended={recommended} accessories={accessories} />}
        />
        <Route path="/about" element={<AboutUs />} />
        <Route
          path="/arreglos"
          element={
            <Arreglos arrangaments={arrangaments} accessories={accessories} />
          }
        />
        <Route path="/resenas" element={<Reseñas reviews={reviews} />} />
        <Route path="/error" element={<Error />} />

        <Route
          path="*"
          element={<Home recommended={recommended} accessories={accessories} />}
        />
      </Routes>
    </Main>
  );
};
