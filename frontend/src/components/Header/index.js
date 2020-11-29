import { React } from "react";
import { Logo } from "./styles";
import LogoPitu from "../../assets/logobig.png";
import { Col, Container } from "react-bootstrap";

function Header(props) {
  return (
    <>
      <Container align="center" className="mt-5 mb-5">
        <Col md={5}>
          <Logo src={LogoPitu} alt="Pitu - Encurtador de URL" />
        </Col>
        <h1>Pitu</h1>
        <p>{props.children}</p>
      </Container>
    </>
  );
}

export default Header;
