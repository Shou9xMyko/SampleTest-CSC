import { useEffect } from "react";
import "./App.css";
import Navbars from "./components/navbar/Navbars";
import Swal from "sweetalert2";
import Buttons from "./components/Button/Buttons";
import WhatsAppLogo from "./assets/whatsapp.png";

function App() {
  useEffect(() => {
    Swal.fire({
      html: `
        <button class="btn-joinus-popup">LETS JOIN US!</button>
        <a href="https://api.whatsapp.com/send?phone=6288291092270" className="btn btn-whatsapp shadow shadow-lg" target="_blank">
          <img
            src=${WhatsAppLogo}
            alt="We WhatsApp"
            class="WhatsAppImage"
          />
        </a> 
      `,
      showCloseButton: true,
      showConfirmButton: false,
      customClass: {
        popup: "popup-class",
        closeButton: "CloseButtonPopUp",
      },
    });

    const btnJoinUsClick = document.querySelector(".btn-joinus-popup");
    btnJoinUsClick.addEventListener("click", () => {
      window.open("https://cahayaasuransi.com/", "_blank");
    });
  }, []);

  return (
    <>
      <Navbars />
      <Buttons />
    </>
  );
}

export default App;
