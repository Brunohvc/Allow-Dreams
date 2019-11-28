import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Jumbotron, Row, CardFooter, } from 'reactstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import swal from 'sweetalert';
import $ from 'jquery';

class Home extends Component {
  constructor(props) {
    super(props);

    let dadosUser = JSON.parse(localStorage.getItem('dadosUser'))

    this.state = {
      post: '',
      user: dadosUser,
      page: 1,
      posts: [],
      consulta: false
    };

    this.handleChangePost = this.handleChangePost.bind(this);
    this.sendPost = this.sendPost.bind(this)
    this.getPosts = this.getPosts.bind(this)

  }

  handleScroll() {
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
      this.getPosts();
    }
  }

  componentDidMount() {
    if (this.state.user) {
      this.getPosts();
      window.onscroll = () => this.handleScroll()
    }
  }

  handleChangePost(event) {
    this.setState({ post: event });
  }

  sendPost(event) {
    axios.post(`http://127.0.0.1:3333/api/v1/post`, {
      "post_content": this.state.post,
      "user_id": this.state.user.id
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
        "post_friends": true
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
      <div className="animated fadeIn">
        <Row className="justify-content-center">
          <Col md="9" lg="7" xl="6">
            <Card>
              <CardHeader>
                <strong>Criar publicação</strong>
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

        {this.state.posts.length > 0 &&
          <Row className="justify-content-center">
            <Col md="12" lg="12" xl="6">
              <Row className="justify-content-center">
                {
                  this.state.posts.map(function (post) {
                    return (

                      <Col md="9" lg="7" xl="6" key={post.id}>
                        <Card>
                          <CardHeader>
                            <Row>
                              <Col md="9" lg="7" xl="6">
                                <strong>@{post.nickname}</strong>
                              </Col>
                              <Col md="9" lg="7" xl="6" style={{ textAlign: 'right' }}>
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
    );
  }
}

export default Home;
