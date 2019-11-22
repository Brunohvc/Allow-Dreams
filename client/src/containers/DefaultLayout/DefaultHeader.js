import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, InputGroup, Input} from 'reactstrap';
import PropTypes from 'prop-types';
import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.png'
import sygnet from '../../assets/img/brand/sygnet.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    localStorage.removeItem('dadosUser');
    window.location.hash = "#/login";
  }
  render() {

    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'Logo' }}
        />
        {/* <AppSidebarToggler className="d-md-down-none" display="lg" /> */}

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/home" className="nav-link" >Home</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/perfil" className="nav-link">Perfil</Link>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="/album" className="nav-link">Fotos</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="/planos" className="nav-link">Planos</NavLink>
          </NavItem>
          <InputGroup className="mb-6" style={{ marginLeft: '20px' }}>
            <Input type="text" placeholder="Procurar" key="procurar" required />
          </InputGroup>
        </Nav>
        <Nav className="ml-auto" navbar>
          {/* <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem> */}
          <UncontrolledDropdown nav direction="down" style={{ marginRight: '25px' }}>
            <DropdownToggle nav>
              <img src={'../../assets/img/avatars/felipe.jpeg'} className="img-avatar" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header tag="div" className="text-center"><strong>Perfil</strong></DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> Mensagens<Badge color="success">2</Badge></DropdownItem>
              <Link to="/editPerfil">
              <DropdownItem><i className="fa fa-user"></i> Editar Perfil</DropdownItem>
              </Link>
              <DropdownItem onClick={this.logOut}><i className="fa fa-lock"></i> Sair</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* <AppAsideToggler className="d-md-down-none" /> */}
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
