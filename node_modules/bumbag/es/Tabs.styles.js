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
import { H as palette, p as borderRadius, k as theme, B as fontWeight } from './getCSSFromStyleObject.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31;
var Tab = function Tab(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  height: 2.75em;\n  justify-content: center;\n  margin-bottom: -1px;\n  padding: 0 1rem;\n  transition: box-shadow 0.1s ease-in-out 0s, background-color 0.1s, color 0.1s;\n\n  ", "\n\n  ", "\n\n  ", "\n\n    ", "\n\n  &[aria-selected='true'] {\n    color: ", ";\n    fill: ", ";\n\n    ", "\n\n    ", "\n\n    ", "\n\n    & {\n      ", ";\n    }\n  }\n\n  &:focus {\n    outline: unset;\n\n    ", "\n\n    ", "\n\n    & {\n      ", ";\n    }\n  }\n\n  &:not([aria-selected='true']):hover {\n    ", "\n\n    ", "\n\n    & {\n      ", ";\n    }\n  }\n\n  & {\n    ", ";\n  }\n"])), styleProps.disabled && css$1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n      color: ", ";\n    "])), palette('gray300')(styleProps)), styleProps.variant === 'boxed' && css$1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n      border: 1px solid transparent;\n    "]))), styleProps.variant === 'button' && css$1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n      border-radius: ", ";\n    "])), borderRadius('default')(styleProps)), styleProps.orientation === 'vertical' ? css$1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n            width: 100%;\n            border-top-left-radius: ", ";\n            border-bottom-left-radius: ", ";\n            margin-right: -2px;\n\n            &:not(:last-child) {\n              margin-bottom: 0.5rem;\n            }\n          "])), borderRadius('default')(styleProps), borderRadius('default')(styleProps)) : css$1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n            border-top-left-radius: ", ";\n            border-top-right-radius: ", ";\n\n            &:not(:last-child) {\n              margin-right: 0.5rem;\n            }\n          "])), borderRadius('default')(styleProps), borderRadius('default')(styleProps)), palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps), palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps), styleProps.variant === 'default' && css$1(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n        ", ";\n      "])), styleProps.orientation === 'vertical' ? css$1(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n              box-shadow: inset -2px 0 0 0 ", ";\n            "])), palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps)) : css$1(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n              box-shadow: inset 0 -2px 0 0 ", ";\n            "])), palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps))), styleProps.variant === 'boxed' && css$1(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n        border: 1px solid ", ";\n\n        ", ";\n      "])), palette('white900', {
    dark: 'gray700'
  })(styleProps), styleProps.orientation === 'vertical' ? css$1(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n              border-right-color: ", ";\n            "])), palette('white', {
    dark: 'background'
  })(styleProps)) : css$1(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n              border-bottom-color: ", ";\n            "])), palette('white', {
    dark: 'background'
  })(styleProps))), styleProps.variant === 'button' && css$1(_templateObject13 || (_templateObject13 = _taggedTemplateLiteralLoose(["\n        background-color: ", ";\n        color: ", ";\n      "])), palette(styleProps.palette)(styleProps), palette(styleProps.palette + "Inverted")(styleProps)), theme(styleProps.themeKey, "styles.selected")(styleProps), styleProps.variant === 'default' && css$1(_templateObject14 || (_templateObject14 = _taggedTemplateLiteralLoose(["\n        ", ";\n      "])), styleProps.orientation === 'vertical' ? css$1(_templateObject15 || (_templateObject15 = _taggedTemplateLiteralLoose(["\n              box-shadow: inset -2px 0 0 0 ", ";\n            "])), palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps)) : css$1(_templateObject16 || (_templateObject16 = _taggedTemplateLiteralLoose(["\n              box-shadow: inset 0 -2px 0 0 ", ";\n            "])), palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps))), (styleProps.variant === 'boxed' || styleProps.variant === 'button') && css$1(_templateObject17 || (_templateObject17 = _taggedTemplateLiteralLoose(["\n        box-shadow: ", " 0px 0px 0px 1px,\n          ", " 0px 0px 0px 3px;\n      "])), palette(styleProps.palette)(styleProps), palette(styleProps.palette + "200")(styleProps)), theme(styleProps.themeKey, "styles.focus")(styleProps), styleProps.variant !== 'button' && css$1(_templateObject18 || (_templateObject18 = _taggedTemplateLiteralLoose(["\n        color: ", ";\n      "])), palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps)), styleProps.variant === 'button' && css$1(_templateObject19 || (_templateObject19 = _taggedTemplateLiteralLoose(["\n        background-color: ", ";\n      "])), palette('white700', {
    dark: 'black200'
  })(styleProps)), theme(styleProps.themeKey, "styles.hover")(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var Tabs = function Tabs(styleProps) {
  return css(_templateObject20 || (_templateObject20 = _taggedTemplateLiteralLoose(["\n  width: 100%;\n\n  ", "\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), styleProps.isFitted && css$1(_templateObject21 || (_templateObject21 = _taggedTemplateLiteralLoose(["\n      & .bb-TabsTab {\n        flex: 1;\n      }\n    "]))), styleProps.orientation === 'vertical' && css$1(_templateObject22 || (_templateObject22 = _taggedTemplateLiteralLoose(["\n      display: flex;\n    "]))), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TabsList = function TabsList(styleProps) {
  return css(_templateObject23 || (_templateObject23 = _taggedTemplateLiteralLoose(["\n  align-items: center;\n  display: flex;\n  font-weight: ", ";\n\n  ", "\n\n  ", "\n\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), fontWeight('semibold')(styleProps), styleProps.orientation === 'vertical' && css$1(_templateObject24 || (_templateObject24 = _taggedTemplateLiteralLoose(["\n      flex-direction: column;\n    "]))), (styleProps.variant === 'boxed' || styleProps.variant === 'default') && css$1(_templateObject25 || (_templateObject25 = _taggedTemplateLiteralLoose(["\n      ", ";\n    "])), styleProps.orientation === 'vertical' ? css$1(_templateObject26 || (_templateObject26 = _taggedTemplateLiteralLoose(["\n            border-right: 1px solid ", ";\n          "])), palette('white900', {
    dark: 'gray700'
  })(styleProps)) : css$1(_templateObject27 || (_templateObject27 = _taggedTemplateLiteralLoose(["\n            border-bottom: 1px solid ", ";\n          "])), palette('white900', {
    dark: 'gray700'
  })(styleProps))), getAlignAttributes(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TabsPanel = function TabsPanel(styleProps) {
  return css(_templateObject28 || (_templateObject28 = _taggedTemplateLiteralLoose(["\n  &:focus {\n    outline: none;\n  }\n\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};

function getAlignAttributes(styleProps) {
  var sizeAttributes = {
    left: css$1(_templateObject29 || (_templateObject29 = _taggedTemplateLiteralLoose(["\n      & {\n        justify-content: start;\n\n        ", ";\n      }\n    "])), theme(styleProps.themeKey, "styles.align.left")(styleProps)),
    center: css$1(_templateObject30 || (_templateObject30 = _taggedTemplateLiteralLoose(["\n      justify-content: center;\n\n      & {\n        ", ";\n      }\n    "])), theme(styleProps.themeKey, "styles.align.center")(styleProps)),
    right: css$1(_templateObject31 || (_templateObject31 = _taggedTemplateLiteralLoose(["\n      justify-content: flex-end;\n\n      & {\n        ", ";\n      }\n    "])), theme(styleProps.themeKey, "styles.align.right")(styleProps))
  };
  return sizeAttributes[styleProps.align || 'left'];
}

var Tabs_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Tab: Tab,
  Tabs: Tabs,
  TabsList: TabsList,
  TabsPanel: TabsPanel
});

export { Tabs_styles as T, Tab as a, Tabs as b, TabsList as c, TabsPanel as d };
