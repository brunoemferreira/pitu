import React from "react";
import Header from "./../../components/Header/index";
import { ContentContainer, Form, CustomButton } from "./styles";
import ShortenerService from "./../../services/shortenerService";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";

document.body.style = "background: #F9F9F9;";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      url: "",
      code: "",
      errorMessage: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { url } = this.state;

    this.setState({ isLoading: true, errorMessage: "" });

    if (!url) {
      this.setState({
        isLoading: false,
        errorMessage: "Informe uma url para encurtar.",
      });
    } else {
      try {
        const service = new ShortenerService();
        const result = await service.generate({ url });

        this.setState({ isLoading: false, code: result.code });
      } catch (error) {
        this.setState({
          isLoading: false,
          errorMessage: "Ops, Ocorreu um erro ao tentar encurtar a URL.",
        });
      }
    }
  };

  copyToClipboard = () => {
    const element = this.inputURL;
    element.select();
    document.execCommand("copy");
  };

  render() {
    const { isLoading, errorMessage, code } = this.state;
    return (
      <Container>
        <Header>Seu novo encurtador de URL. :)</Header>
        <ContentContainer>
          <Form onSubmit={this.handleSubmit}>
            <InputGroup>
              <FormControl
                placeholder="Cole seu link aqui..."
                defaultValue=""
                onChange={(e) => this.setState({ url: e.target.value })}
              />
              <InputGroup.Append>
                <CustomButton type="submit">Encurtar</CustomButton>
              </InputGroup.Append>
            </InputGroup>
            {isLoading ? (
              <Spinner animation="border" />
            ) : (
              code && (
                <>
                  <InputGroup className="mt-2">
                    <FormControl
                      defaultValue={`https://pitu.tk/${code}`}
                      ref={(input) => (this.inputURL = input)}
                    />
                    <InputGroup.Append>
                      <CustomButton onClick={() => this.copyToClipboard()}>
                        Copiar
                      </CustomButton>
                    </InputGroup.Append>
                  </InputGroup>
                  <p>
                    Para acompanhar as estatíticas, acesse https://pitu.tk/
                    {code}
                  </p>
                </>
              )
            )}
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          </Form>
        </ContentContainer>
      </Container>
    );
  }
}

export default HomePage;
