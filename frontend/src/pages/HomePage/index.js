import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "./../../components/Header/index";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header>Seu novo encurtador de URL. :)</Header>
        <FontAwesomeIcon icon="check-square" />
        Pitu
      </Container>
    );
  }
}

export default HomePage;
