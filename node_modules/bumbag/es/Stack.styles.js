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
import { g as getFlexAlignmentAttributes } from './Flex.styles.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var Stack = function Stack(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n\n  & {\n    ", ";\n  }\n"])), styleProps.orientation === 'vertical' && getVerticalAttributes(styleProps), styleProps.orientation === 'horizontal' && getHorizontalAttributes(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};

var getVerticalAttributes = function getVerticalAttributes(styleProps) {
  return css$1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  &&& > *:not(:last-child) {\n    margin-bottom: ", "rem;\n\n    & {\n      ", ";\n    }\n  }\n\n  & {\n    ", ";\n  }\n"])), space(styleProps.spacing)(styleProps), theme(styleProps.themeKey, "styles.child.vertical")(styleProps), theme(styleProps.themeKey, "styles.vertical")(styleProps));
};

var getHorizontalAttributes = function getHorizontalAttributes(styleProps) {
  var breakpoint = theme('breakpoints', styleProps.verticalBelow)(styleProps);
  breakpoint = breakpoint ? breakpoint + "px" : styleProps.verticalBelow;
  return css$1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n    @media screen and (min-width: ", ") {\n      display: flex;\n\n      ", "\n\n      ", "\n\n      & > *:not(:last-child) {\n        margin-right: ", "rem;\n\n        & {\n          ", ";\n        }\n      }\n\n      & {\n        ", ";\n      }\n    }\n\n    @media screen and (max-width: ", ") {\n      ", ";\n    }\n  "])), breakpoint, !styleProps.alignX && !styleProps.alignY && css$1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n        & > * {\n          flex: 1;\n        }\n      "]))), getFlexAlignmentAttributes(styleProps), space(styleProps.spacing)(styleProps), theme(styleProps.themeKey, "styles.child.horizontal")(styleProps), theme(styleProps.themeKey, "styles.horizontal")(styleProps), breakpoint, getVerticalAttributes(styleProps));
};

var Stack_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Stack: Stack
});

export { Stack_styles as S, Stack as a };
