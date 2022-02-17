import "./styles.css";
import { HeaderSection } from "./app-sections/Header";
import { FooterSection } from "./app-sections/Footer";
import { MainSection } from "./app-sections/Main";
import styled from "styled-components";
import { FacebookButton } from "./components/FacebookChat/FacebookButton";

export const App = () => {
  return (
    <Body>
      <HeaderSection />
      <MainSection />
      <FooterSection />
      <FacebookButton url={"https://m.me/101083822497326"} />
    </Body>
  );
};

const Body = styled.div`
  display: grid;
  grid-template-rows: 140px 1fr auto;
  grid-template-columns: 100%;
  max-width: 100vw;
  width: 100vw;
  min-height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
`;
