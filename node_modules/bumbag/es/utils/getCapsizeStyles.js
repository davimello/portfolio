import 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import { css } from '@emotion/react';
import '@emotion/styled';
import './useTheme.js';
import 'conditional-wrap';
import './useLocalStorage.js';
import { b as _objectWithoutPropertiesLoose, _ as _objectSpread2, a as _taggedTemplateLiteralLoose } from '../_rollupPluginBabelHelpers.js';
import './omit.js';
import '../ColorMode/utils.js';
import '../ColorMode/ColorModeContext.js';
import './pick.js';
import './cssProps.js';
import 'lodash/kebabCase';
import 'tinycolor2';
import { L as breakpoint } from '../getCSSFromStyleObject.js';
import './isFunction.js';
import { get } from './get.js';
import capsize from 'capsize';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function getCapsizeAttributes(opts) {
  return function (_ref) {
    var _theme$fontMetrics, _theme$lineHeights, _theme$fontSizes, _theme$global;

    var theme = _ref.theme,
        props = _objectWithoutPropertiesLoose(_ref, ["theme"]);

    var shrinkScale = opts.shrink ? get(theme, opts.themeKey + ".shrinkScale") || 1 : 1;
    var fontFamily = props.font || props.fontFamily || opts.fontFamily;
    var fontMetrics = props.fontMetrics || get(theme, "fontMetrics." + fontFamily) || ((_theme$fontMetrics = theme.fontMetrics) === null || _theme$fontMetrics === void 0 ? void 0 : _theme$fontMetrics.default) || {};
    var lineHeight = props.lineHeight || opts.lineHeight || 'default';
    var lineHeightScale = (_theme$lineHeights = theme.lineHeights) === null || _theme$lineHeights === void 0 ? void 0 : _theme$lineHeights[lineHeight];
    var fontSizeInPx = shrinkScale * ((_theme$fontSizes = theme.fontSizes) === null || _theme$fontSizes === void 0 ? void 0 : _theme$fontSizes[opts.fontSize]) * ((_theme$global = theme.global) === null || _theme$global === void 0 ? void 0 : _theme$global.fontSize);
    var leading = fontSizeInPx * lineHeightScale;
    var capHeight = fontSizeInPx * (fontMetrics.capHeight / fontMetrics.unitsPerEm);
    var lineGap = leading - capHeight;
    return {
      fontMetrics: fontMetrics,
      lineHeight: lineHeight,
      lineHeightScale: lineHeightScale,
      lineGap: lineGap,
      fontSizeInPx: fontSizeInPx,
      leading: leading
    };
  };
}
function getFontSize(opts) {
  return function (props) {
    var fontSize = props.fontSize || opts.fontSize || get(props, "theme." + opts.themeKey + ".fontSize") || '200';

    if (typeof fontSize === 'string') {
      fontSize = {
        default: fontSize
      };
    }

    return fontSize;
  };
}
function getCapsizeStyles(opts) {
  return function (props) {
    // We want to cater for responsive `fontSize` CSS props, so let's
    // transform fontSize in the shape of a responsive CSS prop.
    var fontSize = getFontSize(opts)(props); // If a responsive `fontSize` CSS prop exists, then ignore the shrinked variant...

    if (opts.shrink && Object.keys(fontSize).length > 1) return {}; // For each fontSize on the breakpoint, we want to apply Capsize.

    return Object.entries(fontSize).reduce(function (currentStyles, _ref2) {
      var bp = _ref2[0],
          fontSize = _ref2[1];

      var _getCapsizeAttributes = getCapsizeAttributes(_objectSpread2(_objectSpread2({}, opts), {}, {
        fontSize: fontSize
      }))(props),
          _getCapsizeAttributes2 = _getCapsizeAttributes.fontMetrics,
          fontMetrics = _getCapsizeAttributes2 === void 0 ? {} : _getCapsizeAttributes2,
          fontSizeInPx = _getCapsizeAttributes.fontSizeInPx,
          leading = _getCapsizeAttributes.leading,
          lineGap = _getCapsizeAttributes.lineGap,
          lineHeightScale = _getCapsizeAttributes.lineHeightScale; // @ts-ignore


      var styles = function styles(fontSize) {
        return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n        ", "\n\n        ", "\n      "])), capsize({
          fontMetrics: fontMetrics,
          fontSize: fontSizeInPx,
          leading: leading
        }), opts.includeBottomGap && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n          &:not(:last-child) {\n            margin-bottom: ", "px;\n          }\n\n          ", "\n        "])), lineGap, opts.lineHeight === 'heading' && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n            &:last-of-type:not(:last-child) {\n              margin-bottom: ", "px;\n            }\n          "])), lineHeightScale * lineGap)));
      };

      return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n        ", "\n        ", ";\n      "])), currentStyles, bp === 'default' ? styles() : // @ts-ignore
      css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n              ", ";\n            "])), breakpoint(bp, styles())(props)));
    }, css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose([""]))));
  };
}

export { getCapsizeAttributes, getCapsizeStyles, getFontSize };
