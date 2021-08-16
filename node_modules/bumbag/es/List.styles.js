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
import { J as space, k as theme } from './getCSSFromStyleObject.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var List = function List(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  list-style: unset;\n  list-style-type: none;\n\n  & & {\n    margin-left: ", "rem;\n  }\n\n  & li {\n    &:not(:last-child) {\n      margin-bottom: ", "rem;\n    }\n  }\n\n  & {\n    ", ";\n  }\n\n  & {\n    ", ";\n  }\n\n  & {\n    ", ";\n  }\n"])), space(4)(styleProps), space(1)(styleProps), styleProps.isOrdered && getOrderedProperties(styleProps), styleProps.orientation === 'horizontal' && getHorizontalProperties(styleProps), theme(styleProps.themeKey, 'styles.base')(styleProps));
};
var ListItem = function ListItem(styleProps) {
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  & .bb-Icon {\n    vertical-align: -0.125em;\n  }\n\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, 'styles.base')(styleProps));
};
var getOrderedProperties = function getOrderedProperties(styleProps) {
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  list-style-type: decimal;\n\n  & & {\n    list-style-type: lower-alpha;\n  }\n\n  & & & {\n    list-style-type: lower-roman;\n  }\n\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, 'styles.ordered')(styleProps));
};
var getHorizontalProperties = function getHorizontalProperties(styleProps) {
  return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  &&& li {\n    display: inline-block;\n    margin-bottom: unset;\n\n    &:not(:last-child) {\n      margin-right: 1rem;\n    }\n  }\n\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, 'styles.horizontal')(styleProps));
};

var List_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  List: List,
  ListItem: ListItem,
  getOrderedProperties: getOrderedProperties,
  getHorizontalProperties: getHorizontalProperties
});

export { List_styles as L, ListItem as a, List as b, getHorizontalProperties as c, getOrderedProperties as g };
