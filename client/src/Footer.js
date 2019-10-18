import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fixed: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

const defaultProps = {
  tag: 'footer',
  fixed: false
};

class AppFooter extends Component {
  constructor(props) {
    super(props);

    this.isFixed = this.isFixed.bind(this);
  }

  componentDidMount() {
    this.isFixed(this.props.fixed);
  }

  isFixed(fixed) {
    if (fixed) { document.body.classList.add('footer-fixed'); }
  }

  render() {
    const { className, children, tag: Tag, ...attributes } = this.props;

    delete attributes.fixed

    const classes = classNames(className, 'app-footer');
    const style = {
      position: fixed,
      bottom: '0px',
      width: '100%',
      height: '2.5rem'
    }

    return (
      <Tag className={classes} {...attributes} style={[style]}>
        {children}
      </Tag>
    );
  }
}

AppFooter.propTypes = propTypes;
AppFooter.defaultProps = defaultProps;

export default AppFooter;
