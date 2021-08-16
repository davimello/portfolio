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
import { k as theme, J as space } from './getCSSFromStyleObject.js';
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
var Breadcrumb = function Breadcrumb(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var BreadcrumbItem = function BreadcrumbItem(styleProps) {
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  &&&&&:not(:last-child) {\n    margin-right: ", "rem;\n  }\n\n  & {\n    ", ";\n  }\n"])), space(2)(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var BreadcrumbSeparator = function BreadcrumbSeparator(styleProps) {
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  display: inline;\n  margin-left: ", "rem;\n\n  & {\n    ", ";\n  }\n"])), space(2)(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var BreadcrumbLink = function BreadcrumbLink(styleProps) {
  return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Breadcrumb_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Breadcrumb: Breadcrumb,
  BreadcrumbItem: BreadcrumbItem,
  BreadcrumbSeparator: BreadcrumbSeparator,
  BreadcrumbLink: BreadcrumbLink
});

export { Breadcrumb_styles as B, Breadcrumb as a, BreadcrumbItem as b, BreadcrumbSeparator as c, BreadcrumbLink as d };
