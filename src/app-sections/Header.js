import { Link } from "react-router-dom";
import { Header, BannerArea, Nav, HomeLink } from "./styles";
import { LogoIB } from "./../components/LogoIB/LogoIB";

export const HeaderSection = () => {
  return (
    <Header>
      <Link to="/">
        <LogoIB />
      </Link>
      <BannerArea>
        <h2>INVERSIONES BOARA</h2>
      </BannerArea>

      <Nav>
        <ul>
          <HomeLink>
            <Link to="/">Home</Link>
          </HomeLink>
          <li>
            <Link to="/arreglos">Arreglos</Link>
          </li>
          <li>
            <Link to="/resenas">Reseñas</Link>
          </li>
          <li>
            <Link to="/about">Sobre Nosotros</Link>
          </li>
        </ul>
      </Nav>
    </Header>
  );
};
