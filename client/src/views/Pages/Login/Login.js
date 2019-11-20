import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';
import swal from 'sweetalert';



class Login extends Component {
  constructor(props) {
    super(props);

    let dados = JSON.parse(localStorage.getItem('dadosUser'))
    if (dados) {
      this.props.history.push("/home");
    }

    this.state = {
      nome: '',
      senha: ''
    };

    this.handleChangeNome = this.handleChangeNome.bind(this);
    this.handleChangeSenha = this.handleChangeSenha.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.login = this.login.bind(this);
  }

  handleChangeNome(event) {
    this.setState({ nome: event.target.value });
  }

  handleChangeSenha(event) {
    this.setState({ senha: event.target.value });
  }

  login() {
    axios.post(`http://127.0.0.1:3333/api/v1/users/login`, {
      "login": this.state.nome,
      "password": this.state.senha
    })
      .then(function (response) {
        if (response.data.message) {
          swal("Erro!", response.data.message, "error");
        } else {
          localStorage.setItem('dadosUser', JSON.stringify(response.data))
          window.location.hash = "#/home";
        }
      })
      .catch(function (error) {
        swal("Erro!", "Um erro inesperado ocorreu, tente novamente!", "error");
      });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.nome);
    event.preventDefault();
  }

  render() {
    const { navigate } = this.props;
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Entrar</h1>
                      <p className="text-muted">Entre na sua conta</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Login" autoComplete="username" value={this.state.nome} onChange={this.handleChangeNome}
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Senha" autoComplete="current-password" value={this.state.senha} onChange={this.handleChangeSenha}
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.login}>Entrar</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Esqueceu sua senha?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Cadastre-se</h2>
                      <p>Allow Dreams, a melhor rede social. Desenvolvida para fazer a diferença.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" type="button" active tabIndex={-1}>Cadastrar agora!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
