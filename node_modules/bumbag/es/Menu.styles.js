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
import { k as theme, B as fontWeight, J as space, H as palette, z as fontSize, F as letterSpacing } from './getCSSFromStyleObject.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
var Menu = function Menu(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  width: 100%;\n\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var MenuItem = function MenuItem(styleProps) {
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  background-color: unset;\n  cursor: pointer;\n  display: block;\n  font-weight: ", ";\n  padding: ", "rem ", "rem;\n  text-align: left;\n  width: 100%;\n  transition: background-color 0.1s;\n\n  a& {\n    color: unset;\n    fill: unset;\n    text-decoration: unset;\n\n    &:hover {\n      color: unset;\n      fill: unset;\n    }\n  }\n\n  &[disabled] {\n    cursor: not-allowed;\n    opacity: 0.5;\n\n    & {\n      ", ";\n    }\n  }\n\n  &:not(:disabled):focus {\n    outline: unset;\n    background-color: ", ";\n\n    & {\n      ", ";\n    }\n  }\n  &:not(:disabled):hover {\n    background-color: ", ";\n\n    & {\n      ", ";\n    }\n  }\n  &:not(:disabled):focus:active,\n  &:not(:disabled):hover:active {\n    background-color: ", ";\n  }\n\n  ", "\n\n  & .bb-Icon {\n    vertical-align: -0.125em;\n  }\n\n  & {\n    ", ";\n  }\n"])), fontWeight('semibold')(styleProps), space(1.5)(styleProps), space(4)(styleProps), theme(styleProps.themeKey, "disabled")(styleProps), palette('white600', {
    dark: 'black200'
  })(styleProps), theme(styleProps.themeKey, "focus")(styleProps), palette('white600', {
    dark: 'black200'
  })(styleProps), theme(styleProps.themeKey, "hover")(styleProps), palette('white700', {
    dark: 'black300'
  })(styleProps), styleProps.isActive && css$1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n      background-color: ", ";\n\n      &&:hover,\n      &&:focus {\n        background-color: ", ";\n      }\n\n      & {\n        ", ";\n      }\n    "])), palette('white700', {
    dark: 'black300'
  })(styleProps), palette('white800', {
    dark: 'black400'
  })(styleProps), theme(styleProps.themeKey, "active")(styleProps)), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var MenuItemIcon = function MenuItemIcon(styleProps) {
  return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n\n  & {\n    ", ";\n  }\n"])), styleProps.isBefore && css$1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n      margin-right: ", "rem;\n    "])), space(2)(styleProps)), styleProps.isAfter && css$1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n      margin-left: ", "rem;\n    "])), space(2)(styleProps)), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var MenuDivider = function MenuDivider(styleProps) {
  return css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n  && {\n    margin: ", "rem 0;\n  }\n\n  & {\n    ", ";\n  }\n"])), space(2)(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var MenuGroup = function MenuGroup(styleProps) {
  return css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  & + & {\n    margin-top: ", "rem;\n  }\n\n  & {\n    ", ";\n  }\n"])), space(2, 'major')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var MenuOptionGroup = function MenuOptionGroup(styleProps) {
  return css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var MenuOptionItem = function MenuOptionItem(styleProps) {
  return css(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n\n  &[aria-checked=\"true\"] {\n    color: ", ";\n  }\n\n  & {\n    ", ";\n  }\n"])), palette('primary')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var MenuOptionItemIconWrapper = function MenuOptionItemIconWrapper(styleProps) {
  return css(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n  margin-right: ", "rem;\n  width: 16px;\n\n  & {\n    ", ";\n  }\n"])), space(1, 'major')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var MenuGroupTitle = function MenuGroupTitle(styleProps) {
  return css(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  font-size: ", "rem;\n  font-weight: ", ";\n  letter-spacing: ", ";\n  padding: ", "rem ", "rem;\n  padding-top: ", "rem;\n  text-transform: uppercase;\n\n  & {\n    ", ";\n  }\n"])), palette('text100')(styleProps), fontSize('100')(styleProps), fontWeight('semibold')(styleProps), letterSpacing('400')(styleProps), space(2)(styleProps), space(4)(styleProps), space(1)(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Menu_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Menu: Menu,
  MenuItem: MenuItem,
  MenuItemIcon: MenuItemIcon,
  MenuDivider: MenuDivider,
  MenuGroup: MenuGroup,
  MenuOptionGroup: MenuOptionGroup,
  MenuOptionItem: MenuOptionItem,
  MenuOptionItemIconWrapper: MenuOptionItemIconWrapper,
  MenuGroupTitle: MenuGroupTitle
});

export { Menu_styles as M, Menu as a, MenuItem as b, MenuItemIcon as c, MenuDivider as d, MenuGroup as e, MenuGroupTitle as f, MenuOptionGroup as g, MenuOptionItem as h, MenuOptionItemIconWrapper as i };
