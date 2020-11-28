import React from "react";
import Header from "./../../components/Header/index";
import { ContentContainer, Form } from "./styles";
import ShortnerService from "./../../services/shortnerService";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Alert,
} from "react-bootstrap";

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
        const service = new ShortnerService();
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

  render() {
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
                <Button variant="primary" type="submit">
                  Encurtar
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </ContentContainer>
      </Container>
    );
  }
}

export default HomePage;
