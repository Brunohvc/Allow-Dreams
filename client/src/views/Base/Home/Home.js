import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Jumbotron, Row, CardFooter, } from 'reactstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import swal from 'sweetalert';

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
    this.setState({ post: event });
  }

  sendPost(event) {
    console.log("Envia Post", this.state.post)
    console.log("User:", this.state.user)

    axios.post(`http://127.0.0.1:3333/api/v1/post`, {
      "post_content": this.state.post,
      "user_id": this.state.user.id
    })
      .then(function (response) {
        if (response.data.message) {
          swal("Erro!", response.data.message, "error");
        }
      })
      .catch(function (error) {
        swal("Erro!", "Um erro inesperado ocorreu, tente novamente!", "error");
      });
  }
  /*
    getPosts() {
      axios.get(`http://127.0.0.1:3333/api/v1/post`, {
        "user_id": this.state.user.id
      })
        .then(function (response) {
          if (response.data.message) {
            swal("Erro!", response.data.message, "error");
          } else {
            console.log("Postou")
          }
        })
        .catch(function (error) {
          swal("Erro!", "Um erro inesperado ocorreu, tente novamente!", "error");
        });
    }
    */

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <strong>Novo Post</strong>
          </CardHeader>
          <CardBody>
            <ReactQuill value={this.state.post}
              onChange={this.handleChangePost} />
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
