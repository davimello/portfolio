'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-c170a0e0.js');

function useLabelPlaceholder(_ref) {
  var _ref$enabled = _ref.enabled,
      enabled = _ref$enabled === void 0 ? false : _ref$enabled,
      _ref$useValue = _ref.useValue,
      useValue = _ref$useValue === void 0 ? false : _ref$useValue,
      props = _rollupPluginBabelHelpers._objectWithoutPropertiesLoose(_ref, ["enabled", "useValue"]);

  var _React$useState = React.useState(props.defaultValue || props.value),
      controlledValue = _React$useState[0],
      setControlledValue = _React$useState[1];

  var _React$useState2 = React.useState(enabled && Boolean(props.defaultValue || props.value)),
      isFocused = _React$useState2[0],
      setIsFocused = _React$useState2[1];

  React.useEffect(function () {
    if (enabled && props.value) {
      setControlledValue(props.value);
    }
  }, [enabled, props.value]);
  React.useEffect(function () {
    setControlledValue(props.value);
  }, [props.value]);
  React.useEffect(function () {
    if (enabled) {
      setIsFocused(Boolean(controlledValue));
    }
  }, [controlledValue, enabled]);
  var onBlur = React.useCallback(function (e) {
    var _props$onBlur;

    // eslint-disable-next-line
    (_props$onBlur = props.onBlur) === null || _props$onBlur === void 0 ? void 0 : _props$onBlur.call(props, e);

    if (enabled && !controlledValue) {
      setIsFocused(false);
    }
  }, [controlledValue, enabled, props.onBlur]);
  var onChange = React.useCallback(function () {
    var _props$onChange;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // eslint-disable-next-line
    (_props$onChange = props.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call.apply(_props$onChange, [props].concat(args));
    var e = args[0];

    if (enabled) {
      var value = useValue ? e : e.target.value;
      setControlledValue(value);
    }
  }, [enabled, props.onChange, useValue]);
  var onFocus = React.useCallback(function (e) {
    var _props$onFocus;

    // eslint-disable-next-line
    (_props$onFocus = props.onFocus) === null || _props$onFocus === void 0 ? void 0 : _props$onFocus.call(props, e);

    if (enabled) {
      setIsFocused(true);
    }
  }, [enabled, props.onFocus]);
  return {
    isFocused: isFocused,
    inputProps: {
      onBlur: onBlur,
      onChange: onChange,
      onFocus: onFocus
    }
  };
}

exports.useLabelPlaceholder = useLabelPlaceholder;
