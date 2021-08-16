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
import { H as palette, p as borderRadius, B as fontWeight, J as space, k as theme, z as fontSize } from './getCSSFromStyleObject.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';
import getDefaultPalette from './theme/palette.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23;
var defaultPalette = getDefaultPalette({});
var Button = function Button(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: ", ";\n  color: ", ";\n  fill: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-weight: ", ";\n  min-height: 2.75rem;\n  justify-content: center;\n  padding: 0 ", "rem;\n  text-decoration: none;\n  hyphens: auto;\n  transition: box-shadow 0.1s ease-in-out 0s, border 0.1s, background-color 0.1s;\n\n  ", "\n\n  & {\n    ", ";\n  }\n\n  &[disabled],\n  &[aria-disabled=\"true\"] {\n    ", ";\n  }\n\n  ", "\n  ", ";\n  ", ";\n  ", ";\n\n  ", ";\n  ", ";\n  ", ";\n"])), palette(styleProps.palette)(styleProps), borderRadius('default')(styleProps), palette(styleProps.palette + "Inverted")(styleProps), palette(styleProps.palette + "Inverted")(styleProps), fontWeight('semibold')(styleProps), space(4)(styleProps), styleProps.palette === 'default' && css$1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n      border: 1px solid ", ";\n    "])), palette('white900', {
    dark: 'gray600'
  })(styleProps)), theme(styleProps.themeKey, "styles.base")(styleProps), getDisabledProperties(styleProps), styleProps.size && getSizeProperties(styleProps), styleProps.isLoading && getLoadingProperties(styleProps), styleProps.isStatic && getStaticProperties(styleProps), isInteractive(styleProps) && getInteractiveProperties(styleProps), styleProps.variant === 'outlined' && getOutlinedProperties(styleProps), styleProps.variant === 'link' && getLinkProperties(styleProps), styleProps.variant === 'ghost' && getGhostProperties(styleProps));
};
var ButtonIcon = function ButtonIcon(styleProps) {
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  ", ";\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), styleProps.isBefore && css$1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n      margin-left: -", "em;\n      margin-right: ", "em;\n\n      & {\n        ", ";\n      }\n    "])), space(1)(styleProps), space(2)(styleProps), theme(styleProps.themeKey, "styles.before")(styleProps)), styleProps.isAfter && css$1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n      margin-left: ", "em;\n      margin-right: -", "em;\n\n      & {\n        ", ";\n      }\n    "])), space(2)(styleProps), space(1)(styleProps), theme(styleProps.themeKey, "styles.after")(styleProps)), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var ButtonSpinnerWrapper = function ButtonSpinnerWrapper(styleProps) {
  return css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  align-items: center;\n  justify-content: center;\n\n  & + .bb-Text {\n    opacity: 0;\n  }\n\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var ButtonSpinner = function ButtonSpinner(styleProps) {
  return css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n  && {\n    font-size: 1.25em;\n  }\n\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var ButtonClose = function ButtonClose(styleProps) {
  return css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  && {\n    min-height: unset;\n    padding: ", "em;\n  }\n\n  & {\n    ", ";\n  }\n"])), space(2)(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var isInteractive = function isInteractive(styleProps) {
  return !styleProps.isStatic && !styleProps.isLoading && !styleProps.disabled && styleProps.variant !== 'link';
};
var getDisabledProperties = function getDisabledProperties(styleProps) {
  return css$1(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n  & {\n    cursor: not-allowed;\n    opacity: ", ";\n    outline: unset;\n    pointer-events: unset;\n  }\n  & {\n    ", ";\n  }\n"])), styleProps.colorMode === 'dark' ? '0.5' : '0.7', theme(styleProps.themeKey, "styles.disabled")(styleProps));
};
var getSizeProperties = function getSizeProperties(styleProps) {
  var styles = {
    small: css$1(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n      & {\n        font-size: ", "em;\n        min-height: 2rem;\n        padding: 0 ", "rem;\n      }\n      & {\n        ", ";\n      }\n    "])), fontSize('100')(styleProps), space(3)(styleProps), theme(styleProps.themeKey, "styles.sizes.small")(styleProps)),
    default: css$1(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n      & {\n        ", ";\n      }\n    "])), theme(styleProps.themeKey, "styles.sizes.default")(styleProps)),
    medium: css$1(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n      & {\n        min-height: 3rem;\n        padding: 0 ", "rem;\n      }\n      & {\n        ", ";\n      }\n    "])), space(5)(styleProps), theme(styleProps.themeKey, "styles.sizes.medium")(styleProps)),
    large: css$1(_templateObject13 || (_templateObject13 = _taggedTemplateLiteralLoose(["\n      & {\n        font-size: ", "em;\n        min-height: 3.25rem;\n        padding: 0 ", "rem;\n      }\n      & {\n        ", ";\n      }\n    "])), fontSize('300')(styleProps), space(6)(styleProps), theme(styleProps.themeKey, "styles.sizes.large")(styleProps))
  };
  return styles[styleProps.size];
};
var getLoadingProperties = function getLoadingProperties(styleProps) {
  return css$1(_templateObject14 || (_templateObject14 = _taggedTemplateLiteralLoose(["\n  & {\n    cursor: not-allowed;\n    position: relative;\n\n    &:focus {\n      box-shadow: unset !important;\n      outline: unset !important;\n    }\n  }\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.loading")(styleProps));
};
var getStaticProperties = function getStaticProperties(styleProps) {
  return css$1(_templateObject15 || (_templateObject15 = _taggedTemplateLiteralLoose(["\n  & {\n    cursor: default;\n    outline: unset;\n\n    &:focus {\n      box-shadow: unset !important;\n      outline: unset !important;\n    }\n  }\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.static")(styleProps));
};
var getInteractiveProperties = function getInteractiveProperties(styleProps) {
  return css$1(_templateObject16 || (_templateObject16 = _taggedTemplateLiteralLoose(["\n  &:focus {\n    outline: unset;\n    z-index: 2;\n    box-shadow: ", "\n        0px 0px 0px 1px,\n      ", "\n        0px 0px 0px 3px;\n\n    ", ";\n\n    && {\n      ", ";\n    }\n  }\n\n  ", ";\n\n  ", ";\n"])), palette(styleProps.palette === 'default' ? 'gray200' : styleProps.palette, {
    dark: styleProps.palette === 'default' ? 'gray700' : styleProps.palette
  })(styleProps), palette(styleProps.palette === 'default' ? 'gray100' : styleProps.palette + "200", {
    dark: styleProps.palette === 'default' ? 'gray600' : styleProps.palette + "200"
  })(styleProps), styleProps.palette === 'default' && css$1(_templateObject17 || (_templateObject17 = _taggedTemplateLiteralLoose(["\n      border-color: transparent;\n    "]))), theme(styleProps.themeKey, "styles.focus")(styleProps), styleProps.variant !== 'link' && css$1(_templateObject18 || (_templateObject18 = _taggedTemplateLiteralLoose(["\n    &:hover {\n      background-color: ", ";\n\n      & {\n        ", ";\n      }\n    }\n  "])), palette((styleProps.palette === 'default' ? 'white' : styleProps.palette) + "600", {
    dark: "" + (styleProps.palette === 'default' ? 'black100' : styleProps.palette + "600")
  })(styleProps), theme(styleProps.themeKey, "styles.hover")(styleProps)), styleProps.variant !== 'link' && css$1(_templateObject19 || (_templateObject19 = _taggedTemplateLiteralLoose(["\n    &:hover:active {\n      background-color: ", ";\n\n      & {\n        ", ";\n      }\n    }\n  "])), palette(styleProps.palette === 'default' ? 'white800' : styleProps.palette + "700", {
    dark: "" + (styleProps.palette === 'default' ? 'black200' : styleProps.palette + "700")
  })(styleProps), theme(styleProps.themeKey, "styles.hoveractive")(styleProps)));
};
var getLinkProperties = function getLinkProperties(styleProps) {
  return css$1(_templateObject20 || (_templateObject20 = _taggedTemplateLiteralLoose(["\n  & {\n    border: 0;\n    background: unset;\n    color: ", ";\n    fill: ", ";\n    box-shadow: unset;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n\n  & {\n    ", ";\n  }\n"])), styleProps.palette === 'default' ? palette('text')(styleProps) : palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps), styleProps.palette === 'default' ? palette('text')(styleProps) : palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps), theme(styleProps.themeKey, "styles.link")(styleProps));
};
var getOutlinedProperties = function getOutlinedProperties(styleProps) {
  return css$1(_templateObject21 || (_templateObject21 = _taggedTemplateLiteralLoose(["\n  & {\n    background-color: ", ";\n    border: 1px solid ", ";\n    color: ", ";\n    fill: ", ";\n    box-shadow: unset;\n\n    ", ";\n  }\n  & {\n    ", ";\n  }\n"])), palette('default')(styleProps), palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps), palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps), palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps), isInteractive(styleProps) && css$1(_templateObject22 || (_templateObject22 = _taggedTemplateLiteralLoose(["\n      &:hover {\n        border-color: ", ";\n        background-color: ", ";\n      }\n\n      &:hover:active {\n        border-color: ", ";\n        background-color: ", ";\n      }\n    "])), palette(styleProps.palette)(styleProps), palette(styleProps.palette + "Tint", {
    dark: styleProps.palette + "Shade"
  })(styleProps), palette(styleProps.palette)(styleProps), palette(styleProps.palette + "100", {
    dark: styleProps.palette + "900"
  })(styleProps)), theme(styleProps.themeKey, "styles.outlined")(styleProps));
};
var getGhostProperties = function getGhostProperties(styleProps) {
  return css$1(_templateObject23 || (_templateObject23 = _taggedTemplateLiteralLoose(["\n  & {\n    background-color: unset;\n    border: unset;\n    color: ", ";\n    fill: ", ";\n    box-shadow: unset;\n\n    &:hover {\n      background-color: rgba(0, 0, 0, 0.05);\n    }\n    &:hover:active {\n      background-color: rgba(0, 0, 0, 0.1);\n    }\n  }\n  & {\n    ", ";\n  }\n"])), styleProps.palette === 'default' ? palette('defaultInverted')(styleProps) : palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps), styleProps.palette === 'default' ? palette('defaultInverted')(styleProps) : palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps), theme(styleProps.themeKey, "styles.ghost")(styleProps));
};

var Button_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Button: Button,
  ButtonIcon: ButtonIcon,
  ButtonSpinnerWrapper: ButtonSpinnerWrapper,
  ButtonSpinner: ButtonSpinner,
  ButtonClose: ButtonClose,
  isInteractive: isInteractive,
  getDisabledProperties: getDisabledProperties,
  getSizeProperties: getSizeProperties,
  getLoadingProperties: getLoadingProperties,
  getStaticProperties: getStaticProperties,
  getInteractiveProperties: getInteractiveProperties,
  getLinkProperties: getLinkProperties,
  getOutlinedProperties: getOutlinedProperties,
  getGhostProperties: getGhostProperties
});

export { Button_styles as B, Button as a, ButtonIcon as b, ButtonSpinnerWrapper as c, ButtonSpinner as d, ButtonClose as e, getSizeProperties as f, getDisabledProperties as g, getLoadingProperties as h, isInteractive as i, getStaticProperties as j, getInteractiveProperties as k, getLinkProperties as l, getOutlinedProperties as m, getGhostProperties as n };
