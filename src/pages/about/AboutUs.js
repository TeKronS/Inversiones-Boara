import { Body, Paragraph, Title, ContactUS, SpanBold } from "./styles";
import { Like, Comments, Page, FacebookProvider } from "react-facebook";

export const AboutUs = () => {
  return (
    <Body>
      <Title>Sobre Inversiones Boara</Title>
      <section>
        <Paragraph>
          Te traemos todo en arreglos para matrimonios, aniversario, cumpleaños
          y mas. ��� Sorprende a ese ser querido y amado por ti ����� �����,
          Nosotros te lo haremos posible.
        </Paragraph>
      </section>
      <section>
        <ContactUS>
          <SpanBold> Contactanos a los siguientes números</SpanBold>

          <p>
            <span>Jhonatan Bogado: </span>
            <a
              href={
                "https://api.whatsapp.com/send?phone=584244476167&text=Hola"
              }
            >
              +58 424-4476167
            </a>
          </p>
          <p>
            <span>Jose Bogado: </span>
            <a
              href={
                "https://api.whatsapp.com/send?phone=584144238416&text=Hola"
              }
            >
              +58 414-4238416
            </a>
          </p>
          <SpanBold>Ubicados en San Carlos, Estado Cojedes.</SpanBold>
        </ContactUS>
      </section>

      <FacebookProvider appId="808299077227731">
        <section>
          <Title>
            <Page href="https://www.facebook.com/Inversiones-Boara-101083822497326" />
          </Title>
          <br />
          <Comments
            href="https://www.facebook.com/Inversiones-Boara-101083822497326"
            width="100%"
            lazy="true"
          />
          <br />
          <Like colorScheme="dark" showFaces share />
        </section>
      </FacebookProvider>
    </Body>
  );
};
