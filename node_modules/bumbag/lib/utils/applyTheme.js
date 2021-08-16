'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-c170a0e0.js');
var _set = require('lodash/set');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _set__default = /*#__PURE__*/_interopDefaultLegacy(_set);

function applyTheme(Comp, theme) {
  var Component = React.forwardRef(function (props, ref) {
    // @ts-ignore
    var newOverrides = _set__default['default'](props.overrides || {}, Comp.displayName.replace('native.', ''), theme); // @ts-ignore


    return /*#__PURE__*/React.createElement(Comp, _rollupPluginBabelHelpers._extends({}, props, {
      ref: ref,
      overrides: newOverrides
    }));
  });
  return Object.assign(_rollupPluginBabelHelpers._objectSpread2({}, Comp), Component);
}

exports.applyTheme = applyTheme;
