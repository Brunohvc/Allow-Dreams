import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Row,
  Col,
  Button,
  CardHeader,
} from "reactstrap";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import swal from 'sweetalert';
import $ from 'jquery';

class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: '',
      user: null,
      userId: props.match.params.id,
      user_logado: JSON.parse(localStorage.getItem('dadosUser')),
      page: 1,
      posts: [],
      consulta: false,
      follow: null
    };

    this.handleChangePost = this.handleChangePost.bind(this);
    this.sendPost = this.sendPost.bind(this)
    this.getPosts = this.getPosts.bind(this)
    this.toogleFollow = this.toogleFollow.bind(this)
  }



  componentDidMount() {
    let dadosUser
    if (!this.state.userId) {
      $(function () {

        dadosUser = JSON.parse(localStorage.getItem('dadosUser'))
        this.setState({ user: dadosUser });
        this.getPosts();
      }.bind(this))

    } else {
      axios.post(`http://127.0.0.1:3333/api/v1/users/relationship`, {
        "userPageId": this.state.userId,
        "userId": this.state.user_logado.id
      })
        .then(function (response) {

          if (response.data.message) {
            swal("Erro!", response.data.message, "error");
          } else {
            this.setState({ user: response.data.user });

            let text = 'Seguir', style = 'primary', status = null;
            if (response.data.follower) {
              if (response.data.follower.status == 'accept') {
                text = 'Deixar de Seguir'
                style = 'danger'
              }

              status = response.data.follower.status;
            }

            this.setState({ follow: { status, text, style } });
          }
        }.bind(this))
        .catch(function (error) {
          swal("Erro!", "Um erro inesperado ocorreu, tente novamente!", "error");
        });
    }
  }

  toogleFollow() {
    console.log("Aqui")
    axios.post(`http://127.0.0.1:3333/api/v1/users/relationship`, {
      "userPageId": this.state.userId,
      "userId": this.state.user_logado.id
    })
      .then(function (response) {
        /*
        if (response.data.message) {
          swal("Erro!", response.data.message, "error");
        } else {
          this.setState({ user: response.data.user });

          let text = 'Seguir', style = 'primary', status = null;
          if (response.data.follower) {
            if (response.data.follower.status == 'accept') {
              text = 'Deixar de Seguir'
              style = 'danger'
            }

            status = response.data.follower.status;
          }

          this.setState({ follow: { status, text, style } });
        }
        */
      }.bind(this))
      .catch(function (error) {
        swal("Erro!", "Um erro inesperado ocorreu, tente novamente!", "error");
      });
  }

  handleScroll() {
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
      this.getPosts();
    }
  }

  handleChangePost(event) {
    this.setState({ post: event });
  }

  sendPost(event) {
    axios.post(`http://127.0.0.1:3333/api/v1/post`, {
      "post_content": this.state.post,
      "user_id": this.state.user_logado.id
    })
      .then(function (response) {
        if (response.data.message) {
          swal("Erro!", response.data.message, "error");
        } else {
          this.setState({ page: 1, post: '', posts: [] });
          this.getPosts();
        }
      }.bind(this))
      .catch(function (error) {
        swal("Erro!", "Um erro inesperado ocorreu, tente novamente!", "error");
      });
  }

  getPosts() {
    if (!this.state.consulta) {
      this.setState({ consulta: true });
      axios.post(`http://127.0.0.1:3333/api/v1/post/feed/`, {
        "user_id": this.state.user.id,
        "page": this.state.page,
        "post_friends": false
      })
        .then(function (response) {
          let newPosts = [...this.state.posts, ...response.data]
          this.setState({ posts: newPosts, page: this.state.page + 1, consulta: false });
        }.bind(this))
        .catch(function (error) {
          swal("Erro!", "Um erro inesperado ocorreu, tente novamente!", "error");
        });
    }
  }

  render() {
    return (
      <div className="content">
        {this.state.user &&
          <div>
            <Row className="justify-content-center">
              <Col md="9" lg="7" xl="6">
                <Card className="card-user">
                  <div className="image" style={{ textAlign: 'center', width: 'auto', height: 'auto' }}>
                    <img
                      alt="..."
                      src={require("../../assets/img/felipe.jpeg")}
                      style={{ textAlign: 'center', width: '200px', border: '5px solid white', height: '200px', borderRadius: '360px', marginTop: '10px', marginBottom: '10px' }}
                    />
                  </div>
                  <CardBody>
                    <div className="author">
                      <h5 className="title" style={{ textAlign: 'center' }}>{this.state.user.name}</h5>
                    </div>
                    <p className="description text-center">
                      @{this.state.user.nickname}
                    </p>
                    <p className="description text-center">
                      Descrição
                    </p>
                  </CardBody>
                  <CardFooter style={{ textAlign: 'center' }}>
                    <div className="button-container">
                      <Row className="justify-content-center" style={{ textAlign: 'center' }}>
                        <Col lg="3" md="6" xs="6">
                          <h5>
                            2 <br />
                            <small>Albúns</small>
                          </h5>
                        </Col>
                        <Col lg="3" md="6" xs="6">
                          <h5>
                            12<br />
                            <small>Postagens</small>
                          </h5>
                        </Col>
                        <Col lg="3" md="6" xs="6">
                          <h5>
                            9.570<br />
                            <small>Seguidores</small>
                          </h5>
                        </Col>

                        {this.state.user.id != this.state.user_logado.id && this.state.follow != null &&
                          < Col lg="3" md="6" xs="6" style={{ alignSelf: 'center' }}>
                            <Button color={this.state.follow.style} onClick={this.toogleFollow} id="publicacao">{this.state.follow.text}</Button>
                          </Col>
                        }
                      </Row>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
            </Row>

            {this.state.user.id == this.state.user_logado.id &&
              <Row className="justify-content-center">
                <Col md="9" lg="7" xl="6">
                  <Card>
                    <CardHeader>
                      <strong>Novo Post</strong>
                    </CardHeader>
                    <CardBody>
                      <ReactQuill value={this.state.post}
                        onChange={this.handleChangePost} />
                    </CardBody>
                    <CardFooter>
                      <Button color="dark" onClick={this.sendPost} id="publicacao">Publicar</Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            }

            {this.state && this.state.posts.length > 0 &&
              <Row className="justify-content-center">
                <Col md="12" lg="12" xl="6">
                  <Row className="justify-content-center">
                    {
                      this.state.posts.map(function (post) {
                        return (

                          <Col md="9" lg="7" xl="6" key={post.id}>
                            <Card>
                              <CardHeader>
                                <Row className="justify-content-center">
                                  <Col md="6" lg="6" xl="6">
                                    <strong>@{post.nickname}</strong>
                                  </Col>
                                  <Col md="6" lg="6" xl="6" style={{ textAlign: 'right' }}>
                                    <button class="btn"><i class="fa fa-trash" style={{ color: 'white' }}></i></button>
                                    {post.updated_at}
                                  </Col>
                                </Row>
                              </CardHeader>
                              <CardBody dangerouslySetInnerHTML={{ __html: post.post_content }}>
                              </CardBody>
                            </Card>
                          </Col>
                        )
                      })
                    }
                  </Row>
                </Col>
              </Row>
            }
          </div>
        }
      </div>
    );
  }
}
export default Perfil;