import 'react';
import './Provider/ThemeContext.js';
import 'classnames';
import { css } from '@emotion/css';
import { css as css$1 } from '@emotion/react';
import '@emotion/styled';
import { a as _taggedTemplateLiteralLoose } from './_rollupPluginBabelHelpers.js';
import './ColorMode/ColorModeContext.js';
import './utils/cssProps.js';
import 'lodash/kebabCase';
import 'tinycolor2';
import { J as space, k as theme, L as breakpoint } from './getCSSFromStyleObject.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21;
var Columns = function Columns(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  ", ";\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), !styleProps.isGapless && css$1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n      margin-left: -", "rem;\n      margin-right: -", "rem;\n      margin-top: -", "rem;\n\n      &:last-child {\n        margin-bottom: -", "rem;\n      }\n    "])), space(styleProps.spacing)(styleProps) / 2, space(styleProps.spacing)(styleProps) / 2, space(styleProps.spacing)(styleProps) / 2, space(styleProps.spacing)(styleProps) / 2), getWrapProperties(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var Column = function Column(styleProps) {
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  flex: 1;\n  max-width: 100%;\n\n  ", ";\n\n  & {\n    ", ";\n  }\n\n  & {\n    ", ";\n  }\n\n  & {\n    ", ";\n  }\n"])), !styleProps.isGapless && css$1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n      padding: ", "rem;\n    "])), space(styleProps.spacing)(styleProps) / 2), getSpreadProperties(styleProps), getSpreadOffsetProperties(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var marginAutoOffsets = {
  left: css$1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n    margin-left: auto;\n  "]))),
  both: css$1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n    margin-left: auto;\n    margin-right: auto;\n  "]))),
  right: css$1(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n    margin-right: auto;\n  "])))
};
var getWidth = function getWidth(spread) {
  return spread / 12 * 100 + "%";
};
function getWrapProperties(styleProps) {
  var isOneLine = styleProps.isOneLine,
      minBreakpoint = styleProps.minBreakpoint;

  if (isOneLine) {
    if (minBreakpoint !== 'tablet' && minBreakpoint !== 'mobile') {
      return breakpoint('max-tablet', css$1(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n          flex-wrap: wrap;\n        "]))))(styleProps);
    }

    if (minBreakpoint !== 'mobile') {
      return breakpoint('max-mobile', css$1(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n          flex-wrap: wrap;\n        "]))))(styleProps);
    }

    return null;
  } else {
    return css$1(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n      flex-wrap: wrap;\n    "])));
  }
}
function getSpreadProperties(styleProps) {
  var minBreakpoint = styleProps.minBreakpoint,
      spread = styleProps.spread,
      spreadMobile = styleProps.spreadMobile,
      spreadTablet = styleProps.spreadTablet,
      spreadDesktop = styleProps.spreadDesktop,
      spreadWidescreen = styleProps.spreadWidescreen,
      spreadFullHD = styleProps.spreadFullHD;

  if (!minBreakpoint && !spread && !spreadMobile && !spreadTablet && !spreadDesktop && !spreadWidescreen && !spreadFullHD) {
    return css$1(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n      @media (max-width: ", "px) {\n        flex: none;\n        width: 100%;\n      }\n    "])), theme('breakpoints', 'tablet')(styleProps));
  }

  var getProperties = function getProperties(_ref) {
    var _breakpoint = _ref.breakpoint,
        spread = _ref.spread;
    var properties = css$1(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n      flex: none;\n      width: ", ";\n    "])), getWidth(spread));
    if (!spread) return null;

    if (_breakpoint) {
      return breakpoint("max-" + _breakpoint, css$1(_templateObject13 || (_templateObject13 = _taggedTemplateLiteralLoose(["\n          ", ";\n        "])), properties))(styleProps);
    }

    return properties;
  };

  return css$1(_templateObject14 || (_templateObject14 = _taggedTemplateLiteralLoose(["\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n  "])), getProperties({
    spread: spread
  }), getProperties({
    spread: spreadFullHD,
    breakpoint: 'fullHD'
  }), getProperties({
    spread: spreadWidescreen,
    breakpoint: 'widescreen'
  }), getProperties({
    spread: spreadDesktop,
    breakpoint: 'desktop'
  }), minBreakpoint !== 'tablet' && minBreakpoint !== 'mobile' && !spreadTablet && !spreadMobile && breakpoint("max-tablet", css$1(_templateObject15 || (_templateObject15 = _taggedTemplateLiteralLoose(["\n        width: 100%;\n      "]))))(styleProps), getProperties({
    spread: spreadTablet,
    breakpoint: 'tablet'
  }), minBreakpoint !== 'mobile' && !spreadMobile && breakpoint("max-mobile", css$1(_templateObject16 || (_templateObject16 = _taggedTemplateLiteralLoose(["\n        width: 100%;\n      "]))))(styleProps), getProperties({
    spread: spreadMobile,
    breakpoint: 'mobile'
  }));
}
function getSpreadOffsetProperties(styleProps) {
  var spreadOffset = styleProps.spreadOffset,
      spreadMobileOffset = styleProps.spreadMobileOffset,
      spreadTabletOffset = styleProps.spreadTabletOffset,
      spreadDesktopOffset = styleProps.spreadDesktopOffset,
      spreadWidescreenOffset = styleProps.spreadWidescreenOffset,
      spreadFullHDOffset = styleProps.spreadFullHDOffset;

  if (!spreadOffset && !spreadMobileOffset && !spreadTabletOffset && !spreadDesktopOffset && !spreadWidescreenOffset && !spreadFullHDOffset) {
    return null;
  }

  var getProperties = function getProperties(_ref2) {
    var _breakpoint = _ref2.breakpoint,
        spreadOffset = _ref2.spreadOffset;
    var properties = css$1(_templateObject17 || (_templateObject17 = _taggedTemplateLiteralLoose(["\n      margin-left: ", ";\n    "])), getWidth(spreadOffset));
    if (!spreadOffset) return null;

    if (_breakpoint) {
      return breakpoint("max-" + _breakpoint, css$1(_templateObject18 || (_templateObject18 = _taggedTemplateLiteralLoose(["\n          ", ";\n        "])), properties))(styleProps);
    }

    return properties;
  };

  if (typeof spreadOffset === 'number') {
    return css$1(_templateObject19 || (_templateObject19 = _taggedTemplateLiteralLoose(["\n      ", ";\n      ", ";\n      ", ";\n      ", ";\n      ", ";\n      ", ";\n      ", ";\n      ", ";\n    "])), getProperties({
      spreadOffset: spreadOffset
    }), getProperties({
      spreadOffset: spreadFullHDOffset,
      breakpoint: 'fullHD'
    }), getProperties({
      spreadOffset: spreadWidescreenOffset,
      breakpoint: 'widescreen'
    }), getProperties({
      spreadOffset: spreadDesktopOffset,
      breakpoint: 'desktop'
    }), !spreadTabletOffset && !spreadMobileOffset && breakpoint("max-tablet", css$1(_templateObject20 || (_templateObject20 = _taggedTemplateLiteralLoose(["\n          margin-left: 0;\n        "]))))(styleProps), getProperties({
      spreadOffset: spreadTabletOffset,
      breakpoint: 'tablet'
    }), !spreadMobileOffset && breakpoint("max-mobile", css$1(_templateObject21 || (_templateObject21 = _taggedTemplateLiteralLoose(["\n          margin-left: 0;\n        "]))))(styleProps), getProperties({
      spreadOffset: spreadMobileOffset,
      breakpoint: 'mobile'
    }));
  }

  return marginAutoOffsets[spreadOffset];
}

var Columns_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Columns: Columns,
  Column: Column,
  marginAutoOffsets: marginAutoOffsets,
  getWidth: getWidth,
  getWrapProperties: getWrapProperties,
  getSpreadProperties: getSpreadProperties,
  getSpreadOffsetProperties: getSpreadOffsetProperties
});

export { Columns_styles as C, Column as a, Columns as b, getWrapProperties as c, getSpreadProperties as d, getSpreadOffsetProperties as e, getWidth as g, marginAutoOffsets as m };
