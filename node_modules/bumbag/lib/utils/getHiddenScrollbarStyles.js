'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('classnames');
require('@emotion/css');
var react = require('@emotion/react');
require('@emotion/styled');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-c170a0e0.js');

var _templateObject;
function getHiddenScrollbarStyles() {
  return react.css(_templateObject || (_templateObject = _rollupPluginBabelHelpers._taggedTemplateLiteralLoose(["\n    &::-webkit-scrollbar {\n      width: 0px;\n      background: transparent;\n    }\n    & {\n      scrollbar-width: none;\n      -ms-overflow-style: none;\n    }\n  "])));
}

exports.getHiddenScrollbarStyles = getHiddenScrollbarStyles;
