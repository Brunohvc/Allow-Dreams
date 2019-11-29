import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, ListGroupItem } from 'reactstrap';
import axios from 'axios';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

class EditPerfil extends Component {

  constructor(props) {
    super(props);
    this.state = { name: '', phone: '', nickname: '', password: '', passwordC: '', error: [] };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeNickname = this.handleChangeNickname.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangePasswordC = this.handleChangePasswordC.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangePhone(event) {
    this.setState({ phone: event.target.value });
  }

  handleChangeNickname(event) {
    this.setState({ nickname: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleChangePasswordC(event) {
    this.setState({ passwordC: event.target.value });
  }

  handleSubmit(event) {
    let valid = true;
    let newerros = [];

    if (this.state.name.length < 3) {
      newerros.push("O campo 'Nome' deve ter no mínimo 3 caracteres!")
      valid = false;
    }

    if (this.state.phone.length < 3) {
      newerros.push("O campo 'Telefone' não é válido!")
      valid = false;
    }

    if (this.state.nickname.length < 3) {
      newerros.push("O campo 'Login' deve ter no mínimo 3 caracteres!")
      valid = false;
    }

    if (this.state.password.length < 3) {
      newerros.push("O campo 'Senha' deve ter no mínimo 4 caracteres!")
      valid = false;
    }

    if (this.state.passwordC.length != this.state.password.length) {
      newerros.push("O campo 'Senha' e 'Repetir Senha' não coincidem!")
      valid = false;
    }

    this.setState({ error: newerros });
    if (valid) {

      axios.post(`http://127.0.0.1:3333/api/v1/users`, {
        "name": this.state.name,
        "phone": this.state.phone,
        "nickname": this.state.nickname,
        "password": this.state.password
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
  }

  render() {
    return (
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit={this.handleSubmit}>
                    <h1>Dados de Usuário</h1>
                    <p className="text-muted">Mude seus dados</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Seu Nome" key="name" autoComplete="name" value={this.state.name} onChange={this.handleChangeName} required />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="cui-phone icons"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Seu Telefone" key="phone" autoComplete="phone" value={this.state.phone} onChange={this.handleChangePhone} required />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Nickname" key="nickname" autoComplete="login" value={this.state.nickname} onChange={this.handleChangeNickname} required />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Senha Atual" key="password" autoComplete="new-password" value={this.state.password} onChange={this.handleChangePassword} required />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Nova Senha" key="passwordC" autoComplete="new-password" value={this.state.passwordC} onChange={this.handleChangePasswordC} required />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-calendar"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="date" placeholder="Data de aniversário" key="aniversario" autoComplete="new-password" value={this.state.passwordC} onChange={this.handleChangePasswordC} required />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-people"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="select" placeholder="Gênero" key="genero" value={this.state.passwordC} onChange={this.handleChangePasswordC} required>
                        <option>Masculino</option>
                        <option>Feminino</option>
                      </Input>
                    </InputGroup>
                    <Button className="button-planos" color="success" block>Alterar dados</Button>
                  </Form>
                </CardBody>
                {
                  this.state.error.length > 0 &&
                  <CardFooter className="p-4">

                    {
                      this.state.error.map(function (erro) {
                        return (
                          <Row key={erro}>
                            <Col xs="12" sm="12">
                              <ListGroupItem action color="danger">{erro}</ListGroupItem>
                            </Col>
                          </Row>
                        )
                      })
                    }
                  </CardFooter>
                }
              </Card>
            </Col>
          </Row>
        </Container>
    );
  }
}

export default EditPerfil;