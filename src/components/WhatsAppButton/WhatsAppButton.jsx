import "./WhatsAppButton.css";
import WhatsAppLogoButton from "../../assets/whatsapp.png";
import ReactWhatsapp from "react-whatsapp";

const WhatsAppButton = () => {
  return (
    <>
      {/* <a href="www.google.com" className="btn btn-whatsapp" target="_blank">
        <img
          src={WhatsAppLogoButton}
          alt="We WhatsApp"
          className="WhatsAppImage"
        />
      </a> */}
      <ReactWhatsapp
        className="btn btn-whatsapp"
        number="+62 882-9109-2270"
        message="Halo, saya telah menghubungi anda melalui WhatsApp"
      >
        <img
          src={WhatsAppLogoButton}
          alt="We WhatsApp"
          className="WhatsAppImage"
        />
      </ReactWhatsapp>
    </>
  );
};

export default WhatsAppButton;
