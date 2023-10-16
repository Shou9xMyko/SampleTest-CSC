import "./Buttons.css";
import { BsWhatsapp } from "react-icons/bs";
import { TbWorldHeart } from "react-icons/tb";
import ReactWhatsapp from "react-whatsapp";

const Buttons = () => {
  return (
    <>
      <div className="container mt-5">
        <h3 className="text-center">
          Klik salah satu tombol dibawah untuk hubungi kami
        </h3>
        <div className="row justify-content-center mt-5">
          <div className="col-md-3 col-lg-2 bg-warnings text-center">
            <ReactWhatsapp
              className="btn btn-success w-md-100"
              number="+62 882-9109-2270"
              message="Halo, saya telah menghubungi anda melalui WhatsApp"
            >
              WhatsApp <BsWhatsapp className="text-white fs-4 ms-2 mb-1" />
            </ReactWhatsapp>
          </div>
          <div className="col-md-3 col-lg-2 bg-dangers text-center">
            <p className="fw-bold mt-2 p-0">Atau</p>
          </div>
          <div className="col-md-3 col-lg-2 bg-successs text-center">
            <a
              href="https://cahayaasuransi.com/"
              className="btn btn-primary w-md-100"
              target="_blank"
              rel="noreferrer"
            >
              Website CSC <TbWorldHeart className="text-white fs-4 ms-2 mb-1" />
            </a>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Buttons;
