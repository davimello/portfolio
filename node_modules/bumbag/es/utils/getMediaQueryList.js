function getMediaQueryList(_breakpoint, theme) {
  var _theme$breakpoints, _theme$breakpoints2, _theme$breakpoints3, _theme$breakpoints4, _theme$breakpoints5;

  var minBreakpointValues = {
    mobile: 0,
    tablet: theme === null || theme === void 0 ? void 0 : (_theme$breakpoints = theme.breakpoints) === null || _theme$breakpoints === void 0 ? void 0 : _theme$breakpoints.mobile,
    desktop: theme === null || theme === void 0 ? void 0 : (_theme$breakpoints2 = theme.breakpoints) === null || _theme$breakpoints2 === void 0 ? void 0 : _theme$breakpoints2.tablet,
    widescreen: theme === null || theme === void 0 ? void 0 : (_theme$breakpoints3 = theme.breakpoints) === null || _theme$breakpoints3 === void 0 ? void 0 : _theme$breakpoints3.desktop,
    fullHD: theme === null || theme === void 0 ? void 0 : (_theme$breakpoints4 = theme.breakpoints) === null || _theme$breakpoints4 === void 0 ? void 0 : _theme$breakpoints4.widescreen
  };
  var breakpoint = _breakpoint;
  var key;

  if (breakpoint.includes('min')) {
    breakpoint = breakpoint.replace('min-', '');
    key = 'min-width';
  } else if (breakpoint.includes('max')) {
    breakpoint = breakpoint.replace('max-', '');
    key = 'max-width';
  }

  var breakpointValue = key === 'min-width' ? minBreakpointValues[breakpoint] : theme === null || theme === void 0 ? void 0 : (_theme$breakpoints5 = theme.breakpoints) === null || _theme$breakpoints5 === void 0 ? void 0 : _theme$breakpoints5[breakpoint];
  var query = key ? "(" + key + ": " + (key === 'min-width' ? breakpointValue : breakpointValue - 1) + "px)" : "(min-width: " + minBreakpointValues[breakpoint] + "px) and (max-width: " + (breakpointValue - 1) + "px)";
  var mediaQueryList = typeof window !== 'undefined' ? window.matchMedia(query) : {
    matches: false,
    addListener: function addListener() {
      return null;
    },
    removeListener: function removeListener() {
      return null;
    }
  };
  return mediaQueryList;
}

export { getMediaQueryList };
