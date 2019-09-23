import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span><a href="https://cdnstatic8.com/brasilnaweb.com.br/wp-content/uploads/2016/12/cupons-de-desconto-black-friday-brasileira.png">Rede Social</a> &copy; 2019 Allow Dreams.</span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
