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
import { k as theme, J as space, B as fontWeight, p as borderRadius, H as palette } from './getCSSFromStyleObject.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
var TopNav = function TopNav(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: space-between;\n  min-height: 60px;\n\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TopNavSection = function TopNavSection(styleProps) {
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  display: flex;\n\n  &:not(:last-child) {\n    margin-right: ", "rem;\n  }\n\n  &&&&& li {\n    align-items: center;\n    display: flex;\n  }\n\n  &&&&& > *:not(:last-child) {\n    margin-right: ", "rem;\n  }\n\n  & {\n    ", ";\n  }\n"])), space(2, 'major')(styleProps), space(1, 'minor')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TopNavItem = function TopNavItem(styleProps) {
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  align-items: center;\n  color: inherit;\n  height: 100%;\n  font-weight: ", ";\n  text-decoration: none;\n\n  &&&& {\n    display: flex;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  &:hover {\n    ", "\n\n    ", "\n\n    & {\n      ", ";\n    }\n  }\n\n  &:focus {\n    outline: none;\n    fill: ", ";\n\n    ", "\n\n    ", "\n\n    ", "\n\n    & {\n      ", ";\n    }\n  }\n\n  & {\n    ", ";\n  }\n"])), fontWeight('semibold')(styleProps), (styleProps.href || styleProps.onClick || styleProps.navId) && css$1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n      &&&&&& {\n        cursor: pointer;\n        padding: 0 0.8rem;\n      }\n    "]))), styleProps.variant === 'default' && css$1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n      min-height: 2.75rem;\n    "]))), styleProps.variant === 'pill' && css$1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n      border-radius: ", ";\n      height: 44px;\n    "])), borderRadius('default')(styleProps)), styleProps.isActive && css$1(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n      color: ", ";\n      fill: ", ";\n\n      ", " & {\n        ", ";\n      }\n    "])), palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps), palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps), styleProps.variant === 'default' && css$1(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n        box-shadow: inset 0 -2px 0 0 ", ";\n      "])), palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps)), theme(styleProps.themeKey, "styles.active")(styleProps)), styleProps.variant !== 'pill' && css$1(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n        color: ", ";\n      "])), palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps)), styleProps.variant === 'pill' && css$1(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n        background-color: ", ";\n      "])), palette('white700', {
    dark: 'black200'
  })(styleProps)), theme(styleProps.themeKey, "styles.hover")(styleProps), palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps), styleProps.variant === 'default' && css$1(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n        box-shadow: inset 0 -2px 0 0 ", ";\n      "])), palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps)), styleProps.variant !== 'pill' && css$1(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n        color: ", ";\n      "])), palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps)), styleProps.variant === 'pill' && css$1(_templateObject13 || (_templateObject13 = _taggedTemplateLiteralLoose(["\n        background-color: ", ";\n      "])), palette('white700', {
    dark: 'black200'
  })(styleProps)), theme(styleProps.themeKey, "styles.focus")(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};

var TopNav_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  TopNav: TopNav,
  TopNavSection: TopNavSection,
  TopNavItem: TopNavItem
});

export { TopNav_styles as T, TopNav as a, TopNavSection as b, TopNavItem as c };
