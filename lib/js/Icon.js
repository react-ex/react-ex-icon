'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(_ref) {
  var alt = _ref.alt,
      className = _ref.className,
      children = _ref.children;
  return _react2.default.createElement(
    'i',
    { 'data-react-ex': 'icon', 'aria-label': alt, className: 'react-ex-icon ' + className },
    children
  );
};

Icon.propTypes = {
  alt: _react.PropTypes.string,
  className: _react.PropTypes.string,
  children: _react.PropTypes.node
};

Icon.defaultProps = {
  alt: '',
  className: ''
};

exports.default = Icon;