'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-c170a0e0.js');

var modes = (function (overrides) {
  return _rollupPluginBabelHelpers._objectSpread2({
    localStoragePrefix: 'bb',
    enableLocalStorage: true,
    useSystemColorMode: false
  }, overrides);
});

exports.default = modes;
