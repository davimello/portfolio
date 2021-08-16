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
import { k as theme, J as space, z as fontSize, B as fontWeight, H as palette } from './getCSSFromStyleObject.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var SideNav = function SideNav(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  width: 100%;\n\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SideNavLevel = function SideNavLevel(styleProps) {
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  &&& {\n    margin-left: unset;\n  }\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), styleProps.level === 0 && css$1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n      margin-bottom: ", "rem;\n    "])), space(3, 'major')(styleProps)), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SideNavLevelTitle = function SideNavLevelTitle(styleProps) {
  return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  font-size: ", "rem;\n  font-weight: ", ";\n  margin-bottom: ", "rem;\n  padding-left: ", "rem;\n  text-transform: uppercase;\n\n  & {\n    ", ";\n  }\n"])), fontSize('150')(styleProps), fontWeight('semibold')(styleProps), space(2)(styleProps), styleProps.level + 1, theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SideNavItem = function SideNavItem(styleProps) {
  return css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  align-items: center;\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  min-height: 2.75em;\n  padding: 0 1rem;\n  padding-left: ", "rem;\n  transition: box-shadow 0.1s ease-in-out 0s, background-color 0.1s, color 0.1s;\n\n  a& {\n    color: ", ";\n    fill: ", ";\n    text-decoration: unset;\n\n    &:hover {\n      color: ", ";\n      fill: ", ";\n    }\n  }\n\n  & {\n    ", ";\n  }\n\n  &&&:hover {\n    color: ", ";\n\n    & {\n      ", ";\n    }\n  }\n\n  &:focus {\n    outline: unset;\n    background-color: ", ";\n\n    & {\n      ", ";\n    }\n  }\n\n  ", "\n"])), palette('text200')(styleProps), styleProps.level === 1 ? space(2, 'major')(styleProps) : styleProps.level, palette('text200')(styleProps), palette('text200')(styleProps), palette('text200')(styleProps), palette('text200')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps), palette('primary', {
    dark: 'primary300'
  })(styleProps), theme(styleProps.themeKey, "styles.hover")(styleProps), palette('primaryTint', {
    dark: 'primaryShade'
  })(styleProps), theme(styleProps.themeKey, "styles.focus")(styleProps), styleProps.isActive && css$1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n      background-color: ", ";\n      box-shadow: inset 3px 0 0 0 ", ";\n\n      & {\n        ", ";\n      }\n    "])), palette('primaryTint', {
    dark: 'primaryShade'
  })(styleProps), palette('primary')(styleProps), theme(styleProps.themeKey, "styles.active")(styleProps)));
};

var SideNav_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  SideNav: SideNav,
  SideNavLevel: SideNavLevel,
  SideNavLevelTitle: SideNavLevelTitle,
  SideNavItem: SideNavItem
});

export { SideNav_styles as S, SideNav as a, SideNavLevel as b, SideNavLevelTitle as c, SideNavItem as d };
