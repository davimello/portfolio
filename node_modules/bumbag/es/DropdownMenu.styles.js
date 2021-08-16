import 'react';
import './Provider/ThemeContext.js';
import 'classnames';
import { css } from '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import { a as _taggedTemplateLiteralLoose } from './_rollupPluginBabelHelpers.js';
import './ColorMode/ColorModeContext.js';
import './utils/cssProps.js';
import 'lodash/kebabCase';
import 'tinycolor2';
import { k as theme, m as altitude, J as space } from './getCSSFromStyleObject.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';
import { a as Menu, b as MenuItem, c as MenuItemIcon, d as MenuDivider, e as MenuGroup, f as MenuGroupTitle, g as MenuOptionGroup, h as MenuOptionItem, i as MenuOptionItemIconWrapper } from './Menu.styles.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
var DropdownMenu = function DropdownMenu(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var DropdownMenuPopover = function DropdownMenuPopover(styleProps) {
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  ", " !important;\n\n  ", "\n\n  padding: ", "rem 0;\n  position: absolute;\n  min-width: 200px;\n  width: unset;\n"])), altitude(styleProps.altitude)(styleProps), Menu(styleProps), space(2)(styleProps));
};
var DropdownMenuItem = function DropdownMenuItem(styleProps) {
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  ", "\n"])), MenuItem(styleProps));
};
var DropdownMenuButton = function DropdownMenuButton(styleProps) {
  return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var DropdownMenuDisclosure = function DropdownMenuDisclosure(styleProps) {
  return css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var DropdownMenuItemIcon = function DropdownMenuItemIcon(styleProps) {
  return css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  ", "\n"])), MenuItemIcon(styleProps));
};
var DropdownMenuDivider = function DropdownMenuDivider(styleProps) {
  return css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n  ", "\n"])), MenuDivider(styleProps));
};
var DropdownMenuGroup = function DropdownMenuGroup(styleProps) {
  return css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  ", "\n"])), MenuGroup(styleProps));
};
var DropdownMenuGroupTitle = function DropdownMenuGroupTitle(styleProps) {
  return css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n  ", "\n"])), MenuGroupTitle(styleProps));
};
var DropdownMenuOptionGroup = function DropdownMenuOptionGroup(styleProps) {
  return css(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n  ", "\n"])), MenuOptionGroup(styleProps));
};
var DropdownMenuOptionItem = function DropdownMenuOptionItem(styleProps) {
  return css(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n  ", "\n"])), MenuOptionItem(styleProps));
};
var DropdownMenuOptionItemIconWrapper = function DropdownMenuOptionItemIconWrapper(styleProps) {
  return css(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n  ", "\n"])), MenuOptionItemIconWrapper(styleProps));
};

var DropdownMenu_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  DropdownMenu: DropdownMenu,
  DropdownMenuPopover: DropdownMenuPopover,
  DropdownMenuItem: DropdownMenuItem,
  DropdownMenuButton: DropdownMenuButton,
  DropdownMenuDisclosure: DropdownMenuDisclosure,
  DropdownMenuItemIcon: DropdownMenuItemIcon,
  DropdownMenuDivider: DropdownMenuDivider,
  DropdownMenuGroup: DropdownMenuGroup,
  DropdownMenuGroupTitle: DropdownMenuGroupTitle,
  DropdownMenuOptionGroup: DropdownMenuOptionGroup,
  DropdownMenuOptionItem: DropdownMenuOptionItem,
  DropdownMenuOptionItemIconWrapper: DropdownMenuOptionItemIconWrapper
});

export { DropdownMenu_styles as D, DropdownMenu as a, DropdownMenuItem as b, DropdownMenuItemIcon as c, DropdownMenuButton as d, DropdownMenuPopover as e, DropdownMenuGroup as f, DropdownMenuGroupTitle as g, DropdownMenuOptionGroup as h, DropdownMenuOptionItem as i, DropdownMenuOptionItemIconWrapper as j, DropdownMenuDivider as k, DropdownMenuDisclosure as l };
