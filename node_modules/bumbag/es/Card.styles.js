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
import { H as palette, p as borderRadius, J as space, k as theme, B as fontWeight, z as fontSize } from './getCSSFromStyleObject.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var Card = function Card(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  border-radius: ", ";\n  padding: ", "rem;\n\n  & {\n    ", ";\n  }\n"])), palette('background', {
    dark: 'gray900'
  })(styleProps), borderRadius('default')(styleProps), space(3, 'major')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var CardContent = function CardContent(styleProps) {
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var CardHeader = function CardHeader(styleProps) {
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  margin-bottom: ", "rem;\n  align-items: center;\n  justify-content: space-between;\n\n  & {\n    ", ";\n  }\n"])), space(2, 'major')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var CardTitle = function CardTitle(styleProps) {
  return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  font-weight: ", ";\n  font-size: ", "em;\n\n  & {\n    ", ";\n  }\n"])), fontWeight('semibold')(styleProps), fontSize('300')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var CardFooter = function CardFooter(styleProps) {
  return css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  margin-top: ", "rem;\n\n  & {\n    ", ";\n  }\n"])), space(3, 'major')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Card_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Card: Card,
  CardContent: CardContent,
  CardHeader: CardHeader,
  CardTitle: CardTitle,
  CardFooter: CardFooter
});

export { Card_styles as C, CardContent as a, CardTitle as b, CardHeader as c, CardFooter as d, Card as e };
