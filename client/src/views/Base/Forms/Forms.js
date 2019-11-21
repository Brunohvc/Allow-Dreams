import React, { Component } from 'react';
import { AppSwitch } from '@coreui/react'
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
  Button,
} from 'reactstrap';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <strong>Cartão de Crédito</strong>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="name">Nome</Label>
                      <Input type="text" id="name" placeholder="Coloque seu nome" required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="ccnumber">Número Cartão de Crédito</Label>
                      <Input type="text" id="ccnumber" placeholder="0000 0000 0000 0000" required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="ccmonth">Mês</Label>
                      <Input type="select" name="ccmonth" id="ccmonth">
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="ccyear">Ano</Label>
                      <Input type="select" name="ccyear" id="ccyear">
                        <option>2017</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="cvv">CVV/CVC</Label>
                      <Input type="text" id="cvv" placeholder="123" required />
                    </FormGroup>
                  </Col>
                  <Col>
                  <Card>
                    <CardHeader>
                      Você confirma a compra deste plano?
                    </CardHeader>
                    <CardBody>
                      <AppSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked label dataOn={'\u2713'} dataOff={'\u2715'} />
                    </CardBody>
                  </Card>
                  <Link to="/base/forms">
                      <Button color="success" active tabIndex={-1}>Confirmar Pagamento!</Button>
                    </Link>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Forms;
