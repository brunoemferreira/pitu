import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { parseISO, formatRelative } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import ShortenerService from "../../services/shortenerService";
import { StatsRow, StatsBox, StatsBoxTitle } from "./styles";
import { BlockContainer } from "../../styles/global";

class StatsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      shortenedURL: {},
      errorMessage: "",
    };
  }

  async componentDidMount() {
    const { code } = this.props.match.params;

    try {
      const service = new ShortenerService();
      const shortenedURL = await service.getStats(code);

      // Convertendo data de string para datetime
      const parsedDate = parseISO(shortenedURL.updatedAt);
      const currentDate = new Date();

      // Extrai o resultado do tempo entre as duas datas
      const relativeDate = formatRelative(parsedDate, currentDate, {
        locale: ptBR,
      });

      shortenedURL.relativeDate = relativeDate;

      this.setState({ isLoading: false, shortenedURL });
    } catch (error) {
      this.setState({
        isLoading: false,
        errorMessage: "Ops! A URL solicitada não existe.",
      });
    }
  }

  render() {
    const { shortenedURL, errorMessage } = this.state;

    return (
      <Container>
        <Header>Estatísticas:</Header>
        {errorMessage ? (
          <BlockContainer className="text-center">
            <FontAwesomeIcon
              size="3x"
              color="#FF6961"
              icon="exclamation-triangle"
            />
            <p className="m-3">
              <strong>{errorMessage}</strong>
            </p>
            <Link className="btn btn-primary" to="/">
              Encurtar nova URL
            </Link>
          </BlockContainer>
        ) : (
          <BlockContainer className="text-center">
            <p>
              <b>http://localhost:3000/{shortenedURL.code}</b>
            </p>
            <p>
              Redireciona para:
              <br />
              <strong>
                <Link to={shortenedURL.url} target="blank_">
                  {shortenedURL.url}
                </Link>
              </strong>
            </p>
            <StatsRow>
              <StatsBox>
                <b>{shortenedURL.hits}</b>
                <StatsBoxTitle>Visitas</StatsBoxTitle>
              </StatsBox>
              <StatsBox>
                <b>{shortenedURL.relativeDate}</b>
                <StatsBoxTitle>Sua última visita</StatsBoxTitle>
              </StatsBox>
            </StatsRow>
            <Link className="btn btn-primary" to="/">
              Encurtar nova URL
            </Link>
          </BlockContainer>
        )}
      </Container>
    );
  }
}

export default StatsPage;
