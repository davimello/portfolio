'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function useOptionsState(_ref) {
  var defaultValue = _ref.defaultValue,
      isNativeInput = _ref.isNativeInput,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      type = _ref.type,
      value = _ref.value;

  var _React$useState = React.useState(defaultValue || []),
      controlledValue = _React$useState[0],
      setControlledValue = _React$useState[1];

  var values = typeof value !== 'undefined' ? value : controlledValue;
  var handleChange = React.useCallback(function (e) {
    var _e$target;

    var newValue = isNativeInput ? (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value : e.value;
    var newValues = newValue;

    if (type === 'checkbox') {
      newValues = [];

      if (values.includes(newValue)) {
        newValues = (values || []).filter(function (val) {
          return val !== newValue;
        });
      } else {
        newValues = [].concat(values || [], [newValue]);
      }
    }

    if (typeof value !== 'undefined') {
      onChange && onChange(newValues, newValue);
    } else {
      setControlledValue(newValues);
    }
  }, [isNativeInput, onChange, type, value, values]);
  var handleBlur = React.useCallback(function () {
    onBlur && onBlur(values);
  }, [onBlur, values]);
  return {
    getOptionItemProps: function getOptionItemProps(_ref2) {
      var _ref2$readOnly = _ref2.readOnly,
          readOnly = _ref2$readOnly === void 0 ? false : _ref2$readOnly,
          value = _ref2.value;
      return {
        checked: values ? values.includes(value) : false,
        onChange: !readOnly ? handleChange : undefined,
        onBlur: !readOnly ? handleBlur : undefined
      };
    }
  };
}

exports.useOptionsState = useOptionsState;
