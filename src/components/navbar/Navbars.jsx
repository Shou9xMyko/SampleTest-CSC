import "./Navbars.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/CSC_Logo.png";

const Navbars = () => {
  return (
    <Navbar expand="lg" className="bg-white shadow shadow-md">
      <Container>
        <Navbar.Brand href="https://cahayaasuransi.com/" target="_blank">
          <img src={Logo} alt="Logo Cahaya Solusi Cerdas" id="ImgLogo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link id="Home" href="#home">
              Home
            </Nav.Link>
            <Nav.Link id="Tentang" href="#link">
              Tentang
            </Nav.Link>
            <Nav.Link id="Kontak" href="#link">
              Kontak
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
