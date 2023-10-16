import { useEffect } from "react";
import "./App.css";
import Navbars from "./components/navbar/Navbars";
import Swal from "sweetalert2";
import LogoCSC from "./assets/CSC_Logo.png";
import Buttons from "./components/Button/Buttons";

function App() {
  useEffect(() => {
    Swal.fire({
      imageUrl: LogoCSC,
      imageHeight: 250,
      imageAlt: "Cahaya Solusi Cerdas",
      showConfirmButton: false,
      showCloseButton: true,
      customClass: {
        closeButton: "CloseButtonPopUp",
        image: "ImgClick",
      },
    });

    const closeButton = document.querySelector(".ImgClick");
    closeButton.addEventListener("click", () => {
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
