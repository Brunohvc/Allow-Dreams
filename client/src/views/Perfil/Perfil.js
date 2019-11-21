import React from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class Perfil extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="4">
              <Card className="card-user">
                <div className="image">
                  <img
                    alt="..."
                    src={require("../../assets/img/felipe2.jpeg")}
                  />
                </div>
                <CardBody>
                  <div className="author">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={require("../../assets/img/felipe2.jpeg")}
                      />
                      <h5 className="title">Felipe Pedreli</h5>
                    </a>
                    <p className="description">@felipepedreli</p>
                  </div>
                  <p className="description text-center">
                    Eu gosto de futebol <br />
                    Sou das festinhas <br />Sou programador!
                  </p>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="button-container">
                    <Row>
                      <Col className="ml-auto" lg="3" md="6" xs="6">
                        <h5>
                          12 <br />
                          <small>Fotos</small>
                        </h5>
                      </Col>
                      <Col className="mr-auto" lg="3">
                        <h5>
                          9.570<br />
                          <small>Seguidor</small>
                        </h5>
                      </Col>
                    </Row>
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="8">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Editar Perfil</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label>Nickname</label>
                          <Input
                            defaultValue="Nickname"
                            placeholder="Nickname"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>Nome Perfil</label>
                          <Input
                            defaultValue="Nome do Perfil"
                            placeholder="Usuário"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label htmlFor="ExemploEmail">
                            Email
                          </label>
                          <Input placeholder="Email" type="email" />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label>Telefone</label>
                          <Input
                            defaultValue="Telefone."
                            placeholder="Seu telefone"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>Data de aniversário</label>
                          <Input
                            defaultValue="Data"
                            placeholder="Data de aniversário"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>Gênero</label>
                          <Input
                            defaultValue="Gênero"
                            placeholder="Gênero"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="primary"
                          type="submit"
                        >
                          Atualizar Perfil
                        </Button>
                      </div>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
export default Perfil;