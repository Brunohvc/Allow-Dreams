import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Row,
  Col,
  Button,
  CardHeader,
  Jumbotron,
} from "reactstrap";

class Perfil extends React.Component {
  render() {
    return (
      <div className="content">
        <Row className="justify-content-center">
        <Col md="9" lg="7" xl="6">
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
                  Eu gosto de futebol
                  <br />Sou programador!
                </p>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="button-container">
                  <Row>
                    <Col className="ml-auto" lg="3" md="6" xs="6">
                      <h5>
                        2 <br />
                        <small>Albúns</small>
                      </h5>
                    </Col>
                    <Col className="ml-auto" lg="3" md="6" xs="6">
                      <h5>
                        12<br />
                        <small>Postagens</small>
                      </h5>
                    </Col>
                    <Col className="ml-auto" lg="3" md="6" xs="6">
                      <h5>
                        9.570<br />
                        <small>Seguidores</small>
                      </h5>
                    </Col>
                  </Row>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md="2" lg="2" xl="3">
            <Card>
              <CardHeader>
                <strong>Autor: </strong>
              </CardHeader>
              <CardBody>
                <Jumbotron>
                  <h1 className="display-3">Post 1!</h1>
                  <p className="lead">Aula de hoje está cheia de coisas para fazer.</p>
                  <hr className="my-2" />
                  <p>Meus Post.</p>
                  <p className="lead">
                    <Button color="primary">Detalhes</Button>
                  </p>
                </Jumbotron>
              </CardBody>
            </Card>
          </Col>

          <Col md="2" lg="2" xl="3">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Autor: </strong>
              </CardHeader>
              <CardBody>
                <Jumbotron>
                  <h1 className="display-3">Post 2!</h1>
                  <p className="lead">Estava aqui pensando aonde irei jantar hoje!!</p>
                  <hr className="my-2" />
                  <p>Meu Post.</p>
                  <p className="lead">
                    <Button color="primary">Detalhes</Button>
                  </p>
                </Jumbotron>
              </CardBody>
            </Card>
          </Col>

          <Col md="2" lg="2" xl="3">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Autor: </strong>
              </CardHeader>
              <CardBody>
                <Jumbotron>
                  <h1 className="display-3">Post 3!</h1>
                  <p className="lead">Hoje vou assistir vingadores no cinema.</p>
                  <hr className="my-2" />
                  <p>Meu Post.</p>
                  <p className="lead">
                    <Button color="primary">Detalhes</Button>
                  </p>
                </Jumbotron>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Perfil;