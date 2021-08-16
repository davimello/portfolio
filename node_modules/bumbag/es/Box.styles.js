import 'classnames';
import { css } from '@emotion/css';
import { css as css$1 } from '@emotion/react';
import '@emotion/styled';
import { a as _taggedTemplateLiteralLoose } from './_rollupPluginBabelHelpers.js';
import { k as theme } from './getCSSFromStyleObject.js';
import { getGradientStyles } from './utils/gradient.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
var FLEX_HORIZONTAL_ALIGN_MAP = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end'
};
var FLEX_VERTICAL_ALIGN_MAP = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end'
};
var style = function style(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n\n  ", ";\n  ", ";\n"])), styleProps.style, getAlignmentAttributes(styleProps), getGradientStyles({
    direction: styleProps.gradientDirection,
    from: styleProps.gradientFrom,
    fromAt: styleProps.gradientFromAt,
    via: styleProps.gradientVia,
    viaAt: styleProps.gradientViaAt,
    to: styleProps.gradientTo,
    toAt: styleProps.gradientToAt
  })(styleProps));
};
var Box = function Box(styleProps) {
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  margin: unset;\n  padding: unset;\n  border: unset;\n  background: unset;\n  font: unset;\n  font-family: inherit;\n  font-size: 100%;\n  box-sizing: border-box;\n\n  &:focus:not(:focus-visible) {\n    outline: none;\n  }\n\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, 'styles.base')(styleProps));
};
function getAlignmentAttributes(styleProps) {
  return css$1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n    ", "\n  "])), (styleProps.alignY || styleProps.alignX) && css$1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n      display: flex;\n\n      ", "\n\n      ", "\n\n      ", "\n    "])), !styleProps.display && css$1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n          flex-direction: column;\n        "]))), styleProps.alignY && css$1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n          justify-content: ", ";\n        "])), FLEX_VERTICAL_ALIGN_MAP[styleProps.alignY]), styleProps.alignX && css$1(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n          align-items: ", ";\n        "])), FLEX_HORIZONTAL_ALIGN_MAP[styleProps.alignX])));
}

var Box_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  style: style,
  Box: Box,
  getAlignmentAttributes: getAlignmentAttributes
});

export { Box_styles as B, Box as a, getAlignmentAttributes as g, style as s };
