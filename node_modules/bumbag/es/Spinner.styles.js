import 'react';
import './Provider/ThemeContext.js';
import 'classnames';
import { css } from '@emotion/css';
import { css as css$1, keyframes } from '@emotion/react';
import '@emotion/styled';
import { a as _taggedTemplateLiteralLoose } from './_rollupPluginBabelHelpers.js';
import './ColorMode/ColorModeContext.js';
import './utils/cssProps.js';
import 'lodash/kebabCase';
import 'tinycolor2';
import { D as lineHeight, k as theme, H as palette } from './getCSSFromStyleObject.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
var defaultDashArrayValueMax = 325;
var defaultDashOffset = 200;
var progressDashArrayValue = 126;
var progressDashOffset = 60;
var SpinnerWrapper = function SpinnerWrapper(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  line-height: ", ";\n  font-size: 20px;\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), lineHeight('none')(styleProps), styleProps.size && getSizeProperties(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var Spinner = function Spinner(styleProps) {
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  width: 1em;\n  height: 1em;\n  transform: rotate(-90deg);\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), typeof styleProps.value === 'undefined' && getSpinnerAnimation(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TrackCircle = function TrackCircle(styleProps) {
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  stroke: ", ";\n\n  & {\n    ", ";\n  }\n"])), palette(styleProps.trackColor || styleProps.color + "100", {
    dark: styleProps.trackColor || styleProps.color + "900"
  })(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var LoaderCircle = function LoaderCircle(styleProps) {
  return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  stroke-dasharray: ", ";\n  stroke-dashoffset: ", ";\n  stroke: ", ";\n  transition: stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n\n  & {\n    ", ";\n  }\n"])), typeof styleProps.value === 'number' ? progressDashArrayValue : getDashArrayValue(styleProps), typeof styleProps.value === 'number' ? progressDashArrayValue - styleProps.value / 100 * progressDashArrayValue + "px" : defaultDashOffset + "px", palette(styleProps.color)(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var getDashArrayValue = function getDashArrayValue(styleProps) {
  var percentageString = styleProps.perimeter.split('%')[0];
  var percentage = parseFloat(percentageString);
  var scalar = percentage / 100;
  return defaultDashOffset + scalar * (defaultDashArrayValueMax - defaultDashOffset);
};
var getSizeProperties = function getSizeProperties(styleProps) {
  var sizeProperties = {
    small: css$1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n      & svg {\n        font-size: 14px;\n        border-width: 2px;\n      }\n\n      & {\n        ", ";\n      }\n    "])), theme(styleProps.themeKey, "styles.sizes.small")(styleProps)),
    default: css$1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n      & {\n        ", ";\n      }\n    "])), theme(styleProps.themeKey, "styles.sizes.default")(styleProps)),
    medium: css$1(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n      & svg {\n        font-size: 28px;\n      }\n      & {\n        ", ";\n      }\n    "])), theme(styleProps.themeKey, "styles.sizes.medium")(styleProps)),
    large: css$1(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n      & svg {\n        font-size: 36px;\n      }\n      & {\n        ", ";\n      }\n    "])), theme(styleProps.themeKey, "styles.sizes.large")(styleProps))
  };
  return sizeProperties[styleProps.size];
};
var rotate = keyframes(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var getSpinnerAnimation = function getSpinnerAnimation(styleProps) {
  return css$1(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n  animation: ", " ", " infinite linear;\n"])), rotate, styleProps.duration);
};

var Spinner_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  defaultDashArrayValueMax: defaultDashArrayValueMax,
  defaultDashOffset: defaultDashOffset,
  progressDashArrayValue: progressDashArrayValue,
  progressDashOffset: progressDashOffset,
  SpinnerWrapper: SpinnerWrapper,
  Spinner: Spinner,
  TrackCircle: TrackCircle,
  LoaderCircle: LoaderCircle,
  getDashArrayValue: getDashArrayValue,
  getSizeProperties: getSizeProperties,
  rotate: rotate,
  getSpinnerAnimation: getSpinnerAnimation
});

export { LoaderCircle as L, Spinner_styles as S, TrackCircle as T, SpinnerWrapper as a, Spinner as b, defaultDashOffset as c, defaultDashArrayValueMax as d, progressDashOffset as e, getSizeProperties as f, getDashArrayValue as g, getSpinnerAnimation as h, progressDashArrayValue as p, rotate as r };
