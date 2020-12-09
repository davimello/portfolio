'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isPropValid = require('@emotion/is-prop-valid');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var isPropValid__default = /*#__PURE__*/_interopDefaultLegacy(isPropValid);

var omitProps = ['focusable', 'spacing', 'size', 'kind', 'variant', 'orientation', 'wrap', 'colorMode', 'title'];
function pickHTMLProps(props) {
  var filteredProps = {};

  for (var prop in props) {
    if (isPropValid__default['default'](prop) && !omitProps.includes(prop)) {
      filteredProps[prop] = props[prop];
    }
  }

  return filteredProps;
}

exports.pickHTMLProps = pickHTMLProps;
