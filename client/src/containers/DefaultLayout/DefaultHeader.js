import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, InputGroup, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/dream.png'
import sygnet from '../../assets/img/brand/dream.png'
import SearchExampleStandard from './SearchExampleStandard'

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.handleDark = this.handleDark.bind(this)
  }

  handleDark = () => {
    document.querySelector("body").toggleAttribute("dark");
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
          full={{ src: logo, width: 120, height: 30, alt: 'Logo' }}
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
          <NavItem className="px-3">
            <SearchExampleStandard />
          </NavItem>
        </Nav>

        <Nav className="ml-auto" navbar>
          {/* <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem> */}
          <UncontrolledDropdown nav direction="down" style={{ marginRight: '25px' }}>
            <DropdownToggle nav>
              <img style={{ border: '1px solid white' }} src={'../../assets/img/avatars/felipe.jpeg'} className="img-avatar" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header tag="div" className="text-center"><strong>Perfil</strong></DropdownItem>
              <DropdownItem onClick={this.handleDark}>
                Dark Mode
              </DropdownItem>
              <Link to="/editPerfil" style={{ textDecoration: 'none' }}>
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
