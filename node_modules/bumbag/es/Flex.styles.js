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
import { k as theme } from './getCSSFromStyleObject.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';

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
var Flex = function Flex(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  display: flex;\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), getFlexAlignmentAttributes(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
function getFlexAlignmentAttributes(styleProps) {
  return css$1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n    && {\n      ", "\n    }\n  "])), (styleProps.alignY || styleProps.alignX) && css$1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n        flex-direction: unset;\n\n        ", "\n\n        ", "\n      "])), styleProps.alignY && css$1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n          align-items: ", ";\n          ", "\n        "])), FLEX_VERTICAL_ALIGN_MAP[styleProps.alignY], !styleProps.alignX && css$1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n            justify-content: unset;\n          "])))), styleProps.alignX && css$1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n          justify-content: ", ";\n          ", "\n        "])), FLEX_HORIZONTAL_ALIGN_MAP[styleProps.alignX], !styleProps.alignY && css$1(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n            align-items: unset;\n          "]))))));
}

var Flex_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Flex: Flex,
  getFlexAlignmentAttributes: getFlexAlignmentAttributes
});

export { Flex_styles as F, Flex as a, getFlexAlignmentAttributes as g };
