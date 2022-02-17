import { Body } from "./styled";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <Body>
      <h5>Error (400)</h5>
      <p>Nuestro sistema parece no estar disponible. Inténtalo más tarde.</p>
      <div>
        <a href={"/"}>
          <span>Volver a Intertarlo</span>
        </a>
        <Link to="/about">
          <span>
            Saber mas sobre <span translate={"no"}>"IB"</span>
          </span>
        </Link>
      </div>
    </Body>
  );
};
