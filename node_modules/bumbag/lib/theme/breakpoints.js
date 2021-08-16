'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-c170a0e0.js');

var breakpoints = (function (overrides) {
  return _rollupPluginBabelHelpers._objectSpread2({
    mobile: 480,
    tablet: 768,
    desktop: 1024,
    widescreen: 1200,
    fullHD: 1440
  }, overrides);
});

exports.default = breakpoints;
