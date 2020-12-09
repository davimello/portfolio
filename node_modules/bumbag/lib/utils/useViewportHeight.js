'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var utils_debounceAnimationFrame = require('./debounceAnimationFrame.js');

function useViewportHeight(_ref) {
  var enabled = _ref.enabled;

  var _React$useState = React.useState('100vh'),
      viewportHeightValue = _React$useState[0],
      setViewportHeightValue = _React$useState[1];

  React.useEffect(function () {
    if (typeof window !== 'undefined' && enabled) {
      var setHeight = utils_debounceAnimationFrame.debounceAnimationFrame(function () {
        var vh = window.innerHeight;
        setViewportHeightValue(vh + "px");
      });
      setHeight();
      window.addEventListener('resize', setHeight, {
        passive: true
      });
      return function () {
        return window.removeEventListener('resize', setHeight);
      };
    }
  }, [enabled]);
  return viewportHeightValue;
}

exports.useViewportHeight = useViewportHeight;
