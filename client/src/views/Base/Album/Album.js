import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, Col, Row } from 'reactstrap';
const items = [
  {
    src: 'https://media.cntraveler.com/photos/5d8cf7d5db6acf000833e6cc/4:3/w_420,c_limit/Eiffel-Tower_GettyImages-1060266626.jpg',
    altText: 'Foto 1',
    caption: 'Foto 1',
  },
  {
    src: 'https://st3.idealista.pt/news/arquivos/styles/news_detail/public/2018-03/heidi-sandstrom-187259-unsplash.jpg?sv=2LISbLFg&itok=ohTc4hXW',
    caption: 'Foto 2',
  },
  {
    src: 'https://www.fuiserviajante.com/wp-content/uploads/2018/09/grand-place-o-que-fazer-em-bruxelas-em-1-dia-4.jpg',
    altText: 'Foto 3',
    caption: 'Foto 3',
  },
];

class Carousels extends Component {

  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.src}>
          <img className="d-block w-100" src={item.src} alt={item.altText} />
        </CarouselItem>
      );
    });

    const slides2 = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img className="d-block w-100" src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <div className="animated fadeIn">
        <Row className="justify-content-center">
          <Col md="9" lg="7" xl="4">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Álbum 1</strong>
                <div className="card-header-actions">
                </div>
              </CardHeader>
              <CardBody>
                <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous} ride="carousel">
                  {slides}
                </Carousel>
              </CardBody>
            </Card>
          </Col>
          <Col md="9" lg="7" xl="4">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Álbum 2</strong>
              </CardHeader>
              <CardBody>
                <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
                  <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                  {slides2}
                  <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                  <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md="9" lg="7" xl="4">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Álbum 3</strong>
                <div className="card-header-actions">
                </div>
              </CardHeader>
              <CardBody>
                <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous} ride="carousel">
                  {slides}
                </Carousel>
              </CardBody>
            </Card>
          </Col>
          <Col md="9" lg="7" xl="4">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Álbum 4</strong>
              </CardHeader>
              <CardBody>
                <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
                  <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                  {slides2}
                  <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                  <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Carousels;