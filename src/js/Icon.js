import React, { PropTypes } from 'react';

const Icon = ({ alt, className, children }) => (
  <i data-react-ex="icon" aria-label={ alt } className={ `react-ex-icon ${className}` }>{ children }</i>
);

Icon.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

Icon.defaultProps = {
  alt: '',
  className: ''
};

export default Icon;
