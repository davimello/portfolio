'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-c170a0e0.js');
var reakit = require('reakit');

function useTabState(initialState) {
  return reakit.useTabState(initialState);
}
function TabState(props) {
  var children = props.children,
      restProps = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(props, ["children"]);

  var state = useTabState(restProps);
  return props.children(state);
}

exports.TabState = TabState;
exports.useTabState = useTabState;
