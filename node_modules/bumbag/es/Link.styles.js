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
import { H as palette, B as fontWeight, k as theme } from './getCSSFromStyleObject.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import { getCapsizeStyles } from './utils/getCapsizeStyles.js';
import './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';

var _templateObject, _templateObject2, _templateObject3;
var Link = function Link(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  fill: ", ";\n  cursor: pointer;\n  font-weight: ", ";\n  text-decoration: none;\n\n  &:hover {\n    text-decoration: underline;\n\n    & {\n      ", ";\n    }\n  }\n\n  &:focus {\n    & {\n      ", ";\n    }\n  }\n\n  & .bb-Icon {\n    vertical-align: -0.125em;\n  }\n\n  & {\n    ", ";\n  }\n"])), palette('primary', {
    dark: 'primary300'
  })(styleProps), palette('primary', {
    dark: 'primary300'
  })(styleProps), fontWeight('semibold')(styleProps), theme(styleProps.themeKey, "styles.hover")(styleProps), theme(styleProps.themeKey, "styles.focus")(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var LinkBlock = function LinkBlock(styleProps) {
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  ", ";\n\n  display: block;\n\n  ", ";\n"])), Link(styleProps), getCapsizeStyles({
    lineHeight: 'default'
  })(styleProps));
};
var LinkInline = function LinkInline(styleProps) {
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  ", ";\n"])), Link(styleProps));
};

var Link_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Link: Link,
  LinkBlock: LinkBlock,
  LinkInline: LinkInline
});

export { Link_styles as L, Link as a, LinkBlock as b, LinkInline as c };
