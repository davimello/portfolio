import { useState, useEffect } from 'react';
import { debounceAnimationFrame } from './debounceAnimationFrame.js';

function useViewportHeight(_ref) {
  var enabled = _ref.enabled;

  var _React$useState = useState('100vh'),
      viewportHeightValue = _React$useState[0],
      setViewportHeightValue = _React$useState[1];

  useEffect(function () {
    if (typeof window !== 'undefined' && enabled) {
      var setHeight = debounceAnimationFrame(function () {
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

export { useViewportHeight };
