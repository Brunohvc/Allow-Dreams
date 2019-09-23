import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Container, Jumbotron, Row } from 'reactstrap';

class Jumbotrons extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Autor: Felipe</strong>
              </CardHeader>
              <CardBody>
                <Jumbotron>
                  <h1 className="display-3">Post 1!</h1>
                  <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra
                    attention to featured content or information.</p>
                  <hr className="my-2" />
                  <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                  <p className="lead">
                    <Button color="primary">Detalhes</Button>
                  </p>
                </Jumbotron>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Autor: Bruno</strong>
              </CardHeader>
              <CardBody>
                <Jumbotron>
                  <h1 className="display-3">Post 2!</h1>
                  <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra
                    attention to featured content or information.</p>
                  <hr className="my-2" />
                  <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                  <p className="lead">
                    <Button color="primary">Detalhes</Button>
                  </p>
                </Jumbotron>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Autor: Guilherme</strong>
              </CardHeader>
              <CardBody>
                <Jumbotron>
                  <h1 className="display-3">Post 3!</h1>
                  <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra
                    attention to featured content or information.</p>
                  <hr className="my-2" />
                  <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
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

export default Jumbotrons;
