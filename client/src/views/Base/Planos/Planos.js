import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Col, Container, Jumbotron, Row } from 'reactstrap';

class Planos extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Básico</strong>
              </CardHeader>
              <CardBody>
                <Jumbotron>
                  <h1 className="display-3">R$49</h1>
                  <p className="lead">Definir plano 1</p>
                  <hr className="my-2" />
                  <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                  <p className="lead">
                    <Link to="/pagamento">
                      <Button color="success" active tabIndex={-1}>Adquirir agora!</Button>
                    </Link>
                  </p>
                </Jumbotron>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Intermediário</strong>
              </CardHeader>
              <CardBody>
                <Jumbotron>
                  <h1 className="display-3">R$99</h1>
                  <p className="lead">Definir plano 2</p>
                  <hr className="my-2" />
                  <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                  <p className="lead">
                    <Link to="/pagamento">
                      <Button color="success" active tabIndex={-1}>Adquirir agora!</Button>
                    </Link>
                  </p>
                </Jumbotron>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Premium</strong>
              </CardHeader>
              <CardBody>
                <Jumbotron>
                  <h1 className="display-3">R$199</h1>
                  <p className="lead">Definir plano 3</p>
                  <hr className="my-2" />
                  <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                  <p className="lead">
                    <Link to="/pagamento">
                      <Button color="success" active tabIndex={-1}>Adquirir agora!</Button>
                    </Link>
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

export default Planos;
