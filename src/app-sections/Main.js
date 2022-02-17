import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Main } from "./styles";
import { Home } from "./../pages/home/Home";
import { Arreglos } from "./../pages/arreglos/Arreglos";
import { AboutUs } from "./../pages/about/AboutUs";
import { Reseñas } from "./../pages/reseñas/Reseñas";
import { Error } from "./../pages/error/Error";
import { getInitialData, getTotalData } from "./../firebase/FirebaseConfig";
import { FacebookProvider } from "react-facebook";

export const MainSection = () => {
  const navigate = useNavigate();
  const [InitialDataPage, setInitialDataPage] = useState(null);
  const [DataPage, setDataPage] = useState(null);

  useEffect(() => {
    async function getTotalDataPage() {
      let triedInitialData = 0;
      let triedTotalData = 0;
      function getRecommended() {
        getInitialData()
          .then((data) => {
            setInitialDataPage(data);
          })
          .catch(() => {
            if (triedInitialData > 1) {
              navigate("/error");
            } else {
              getRecommended();
              triedInitialData += 1;
            }
          });
      }
      function getArrangementsAndAccesories() {
        getTotalData()
          .then((data) => {
            setDataPage(data);
          })
          .catch(() => {
            if (triedTotalData > 2) {
              setDataPage(false);
            } else {
              getArrangementsAndAccesories();
              triedTotalData += 1;
            }
          });
      }

      await getRecommended();
      if (triedInitialData < 2) {
        getArrangementsAndAccesories();
      } else {
        setDataPage(false);
      }
    }
    getTotalDataPage();
  }, []);

  return (
    <Main>
      <FacebookProvider appId="808299077227731">
        <Routes>
          <Route
            path="/"
            element={
              <Home initialData={InitialDataPage} totalData={DataPage} />
            }
          />
          <Route path="/about" element={<AboutUs data={DataPage} />} />
          <Route path="/arreglos" element={<Arreglos data={DataPage} />} />
          <Route path="/resenas" element={<Reseñas data={DataPage} />} />
          <Route path="/error" element={<Error />} />

          <Route
            path="*"
            element={
              <Home initialData={InitialDataPage} totalData={DataPage} />
            }
          />
        </Routes>
      </FacebookProvider>
    </Main>
  );
};
