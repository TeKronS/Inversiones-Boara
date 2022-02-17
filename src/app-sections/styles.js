import styled from "styled-components";

const color = {
  azul: "#021323",
  amarillo1: "#FFCD00",
  amarillo2: "#ebb441",
  gris: "#8B8B8B"
};

export const Header = styled.header`
  display: grid;
  grid-template-columns: 130px minmax(0, 1fr);
  grid-template-rows: 100px 40px;
  background: ${color.azul};
  color: ${color.amarillo1};
`;

export const BannerArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0 15px;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  max-height: 100%;
  h2 {
    max-width: 100%;
    max-height: 100%;
    text-align: center;
  }
`;

export const Nav = styled.nav`
  display: flex;
  grid-column-start: 1;
  grid-column-end: -1;
  background: ${color.amarillo2};
  white-space: nowrap;
  padding: 5px 0;
  ul {
    padding: 0;
    display: flex;
    gap: 10px;
    overflow: hidden;
    margin: auto;
  }

  li {
    font-weight: 555;
    padding: 3px 6px;
    border-radius: 8px;

    :hover {
      background: ${color.amarillo1};
    }
  }

  a {
    color: black;
  }
`;

export const HomeLink = styled.li`
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const Main = styled.main`
  background: ${color.amarillo2};
  padding: 0 10px;
`;

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 5px;
  border-top: 4px solid ${color.azul};
  background: ${color.amarillo2};
  border-bottom: 4px solid ${color.azul};
  justify-content: center;
  grid-gap: 10px;
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  img {
    height: 20px;
    border-radius: 999px;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Copyright = styled.section`
  justify-content: center;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Contact = styled.section`
  gap: 15px;

  div {
    display: flex;
  }
`;

export const Ubication = styled.section`
  gap: 10px;

  @media screen and (max-width: 500px) {
    grid-column-start: 1;
    grid-column-end: -1;
  }
`;
