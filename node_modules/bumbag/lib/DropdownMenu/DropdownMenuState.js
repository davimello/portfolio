'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-c170a0e0.js');
var reakit = require('reakit');

function useDropdownMenuState(initialState) {
  return reakit.useMenuState(_rollupPluginBabelHelpers._objectSpread2({
    gutter: 8
  }, initialState));
}
function DropdownMenuState(props) {
  var children = props.children,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["children"]);

  var state = useDropdownMenuState(restProps);
  return props.children(state);
}

exports.DropdownMenuState = DropdownMenuState;
exports.useDropdownMenuState = useDropdownMenuState;
