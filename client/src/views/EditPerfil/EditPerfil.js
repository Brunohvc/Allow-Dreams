import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class EditPerfil extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Editar Dados de Usuário</CardTitle>
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
                          type="date"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="4">
                    <FormGroup>
                    <label>Gênero</label>
                    <Input 
                      defaultValue="Gênero"
                      placeholder="Gênero"
                      type="select">
                      <option>Masculino</option>
                      <option>Feminino</option>
                    </Input>
                  </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Button
                      style={{ marginLeft: '15px' }}
                      className="btn-round"
                      color="primary"
                      type="submit"
                    >
                      Atualizar Perfil
                    </Button>
                  </Row>
                </Form>
              </CardBody>
            </Card>

            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Editar Senha</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Senha Atual</label>
                        <Input
                          placeholder="Digite sua senha atual"
                          type="password"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>Nova Senha</label>
                        <Input
                          placeholder="Digite sua nova senha"
                          type="password"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Button
                      style={{ marginLeft: '15px' }}
                      className="btn-round"
                      color="success"
                      type="submit"
                    >
                      Mudar Senha
                    </Button>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default EditPerfil;