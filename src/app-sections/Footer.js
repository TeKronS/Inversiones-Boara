import { Footer, Copyright, Contact, Ubication } from "./styles";
import whatsapp from "./../img/WhatsappIcon.jpg";
import facebook from "./../components/FacebookChat/img/IconMsg.png";

export const FooterSection = () => {
  return (
    <Footer>
      <Copyright>
        <span>INVERSIONES BOARA</span>
        <span>Todos los derechos Reservados</span>
      </Copyright>
      <Contact>
        <h4>Contáctanos</h4>

        <div>
          <img alt="" src={whatsapp} />
          <a
            href={"https://api.whatsapp.com/send?phone=584244476167&text=Hola"}
          >
            +58 424-4476167
          </a>
        </div>
        <div>
          <img alt="" src={whatsapp} />
          <a
            href={"https://api.whatsapp.com/send?phone=584144402507&text=Hola"}
          >
            +58 414-4402507
          </a>
        </div>
        <div>
          <img alt="" src={facebook} />
          <a href={"https://m.me/105380652059822"}>Facebook</a>
        </div>
      </Contact>
      <Ubication>
        <h4>Ubícanos</h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487.18218293943164!2d-68.57814752178483!3d9.654708670096129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e7e142a983d9ead%3A0xbacfec7336c88a51!2sEzequiel%20Zamora%20Airport!5e1!3m2!1sen!2sve!4v1644282260453!5m2!1sen!2sve"
          width="100%"
          height="150"
          style={{ border: "0" }}
          loading="lazy"
          title={"Ubicación"}
        ></iframe>
      </Ubication>
    </Footer>
  );
};
