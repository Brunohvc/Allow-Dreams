import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Jumbotron, Row, CardFooter, } from 'reactstrap';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class Home extends Component {
  constructor(props) {
    super(props);

    let dadosUser = JSON.parse(localStorage.getItem('dadosUser'))

    this.state = {
      post: '',
      user: dadosUser
    };

    this.handleChangePost = this.handleChangePost.bind(this);
    this.sendPost = this.sendPost.bind(this)
  }

  handleChangePost(event) {
    //this.setState({ post: event.target.value });
    console.log(event)
  }

  sendPost(event) {
    console.log("Envia Post")
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <strong>Novo Post</strong>
          </CardHeader>
          <CardBody>
            <Editor
              value={this.state.post}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onChange={this.handleChangePost}
            />
          </CardBody>
          <CardFooter>
            <Button color="primary" onClick={this.sendPost} id="publicacao">Publicar</Button>
          </CardFooter>
        </Card>

        <Row>
          <Col>
            <Card>
              <CardHeader>
                <strong>Autor: Felipe</strong>
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

export default Home;
