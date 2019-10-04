import React, { Component } from 'react';
import { Badge, Button, Card, CardBody, CardFooter, CardHeader, Col, Collapse, Fade, Row } from 'reactstrap';

class Users extends Component {

  constructor(props) {
    super(props);
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.toggleCustom = this.toggleCustom.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: false,
      accordion: [true, false, false],
      custom: [true, false],
      status: 'Closed',
      fadeIn: true,
      timeout: 300,
    };
  }

  onEntering() {
    this.setState({ status: 'Opening...' });
  }

  onEntered() {
    this.setState({ status: 'Opened' });
  }

  onExiting() {
    this.setState({ status: 'Closing...' });
  }

  onExited() {
    this.setState({ status: 'Closed' });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleAccordion(tab) {

    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      accordion: state,
    });
  }

  toggleCustom(tab) {

    const prevState = this.state.custom;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      custom: state,
    });
  }

  toggleFade() {
    this.setState({ fadeIn: !this.state.fadeIn });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Meu Perfil</strong>
              </CardHeader>
              <Collapse isOpen={this.state.collapse} onEntering={this.onEntering} onEntered={this.onEntered} onExiting={this.onExiting} onExited={this.onExited}>
                <CardBody>
                  <p>
                    Anim pariatur cliche reprehenderit,
                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                    nesciunt sapiente ea proident.
                  </p>
                  <p>
                    Donec molestie odio id nisi malesuada, mattis tincidunt velit egestas. Sed non pulvinar risus. Aenean
                    elementum eleifend nunc, pellentesque dapibus arcu hendrerit fringilla. Aliquam in nibh massa. Cras
                    ultricies lorem non enim volutpat, a eleifend urna placerat. Fusce id luctus urna. In sed leo tellus.
                    Mauris tristique leo a nisl feugiat, eget vehicula leo venenatis. Quisque magna metus, luctus quis
                    sollicitudin vel, vehicula nec ipsum. Donec rutrum commodo lacus ut condimentum. Integer vel turpis
                    purus. Etiam vehicula, nulla non fringilla blandit, massa purus faucibus tellus, a luctus enim orci non
                    augue. Aenean ullamcorper nisl urna, non feugiat tortor volutpat in. Vivamus lobortis massa dolor, eget
                    faucibus ipsum varius eget. Pellentesque imperdiet, turpis sed sagittis lobortis, leo elit laoreet arcu,
                    vehicula sagittis elit leo id nisi.
                  </p>
                </CardBody>
              </Collapse>
              <CardFooter>
                <Button style={{ paddingRight: '5px' }} onClick={this.toggle} className={'mb-1'} id="toggleCollapse1">Sobre mim</Button>
                <Button color="success" onClick={this.toggle} className={'mb-1'} id="toggleCollapse1">Download CV</Button>
                <Button color="primary" onClick={this.toggle} className={'mb-1'} id="toggleCollapse1">Contate-me</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Users;
