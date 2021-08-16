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
import { k as theme, D as lineHeight } from './getCSSFromStyleObject.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import { getCapsizeStyles } from './utils/getCapsizeStyles.js';
import { gradient } from './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';

var _templateObject, _templateObject2, _templateObject3;
var Text = function Text(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  abbr& {\n    border-bottom: 1px dotted;\n    cursor: help;\n    text-decoration: none;\n  }\n\n  code& {\n    font-family: monospace;\n  }\n\n  i& {\n    font-style: italic;\n  }\n\n  kbd& {\n    background: #454d5d;\n    border-radius: 0.1rem;\n    color: #fff;\n    fill: #fff;\n    padding: 0.1rem 0.2rem;\n  }\n\n  mark& {\n    background: #ffe9b3;\n    border-radius: 0.1rem;\n    padding: 0.1rem 0.2rem;\n  }\n\n  strong& {\n    font-weight: bold;\n  }\n\n  sub&,\n  sup& {\n    font-size: 0.8em;\n    vertical-align: baseline;\n  }\n\n  ins&,\n  u& {\n    text-decoration-skip: ink edges;\n  }\n\n  i&,\n  cite&,\n  var&,\n  em& {\n    font-style: italic;\n  }\n\n  kbd&,\n  pre&,\n  samp& {\n    font-family: 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', Menlo, Courier, monospace;\n  }\n\n  & .bb-Icon {\n    vertical-align: -0.125em;\n  }\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), gradient.text(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TextInline = function TextInline(styleProps) {
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  ", ";\n\n  line-height: ", ";\n"])), Text(styleProps), lineHeight('none')(styleProps));
};
var TextBlock = function TextBlock(styleProps) {
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  ", ";\n\n  display: block;\n  ", ";\n"])), Text(styleProps), getCapsizeStyles({
    lineHeight: 'default'
  })(styleProps));
};

var Text_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Text: Text,
  TextInline: TextInline,
  TextBlock: TextBlock
});

export { Text_styles as T, Text as a, TextBlock as b, TextInline as c };
