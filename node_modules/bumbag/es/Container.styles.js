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

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
var Container = function Container(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  width: 100%;\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), !styleProps.isFluid && css$1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n      max-width: ", "px;\n    "])), theme('breakpoints', 'fullHD')(styleProps)), styleProps.isFluid && css$1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n      padding-left: ", "rem;\n      padding-right: ", "rem;\n\n      & {\n        ", ";\n      }\n    "])), theme(styleProps.themeKey, 'fluidMargin')(styleProps), theme(styleProps.themeKey, 'fluidMargin')(styleProps), theme(styleProps.themeKey, 'styles.fluid')(styleProps)), (styleProps.isLayout || styleProps.isFluid) && css$1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n      @media (max-width: ", "px) {\n        padding-left: ", "rem;\n        padding-right: ", "rem;\n      }\n    "])), theme('breakpoints.tablet')(styleProps), theme(styleProps.themeKey, 'tabletMargin')(styleProps), theme(styleProps.themeKey, 'tabletMargin')(styleProps)), styleProps.isLayout && css$1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n      & {\n        ", ";\n      }\n    "])), theme(styleProps.themeKey, 'styles.layout')(styleProps)), getResponsiveProperties(styleProps), styleProps.align && !styleProps.isFluid ? alignProperties[styleProps.align] : null, theme(styleProps.themeKey, 'styles.base')(styleProps));
};
var alignProperties = {
  left: css$1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n    margin-right: auto;\n  "]))),
  center: css$1(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n    margin-left: auto;\n    margin-right: auto;\n  "]))),
  right: css$1(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n    margin-left: auto;\n  "])))
};
function getResponsiveProperties(styleProps) {
  var breakpoint = styleProps.breakpoint,
      isFluid = styleProps.isFluid;
  if (isFluid) return;

  if (breakpoint) {
    return css$1(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n      & {\n        max-width: ", "px;\n      }\n    "])), theme('breakpoints', breakpoint)(styleProps));
  }

  return css$1(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n    @media (max-width: ", "px) {\n      max-width: ", "px;\n    }\n\n    @media (max-width: ", "px) {\n      max-width: ", "px;\n    }\n\n    @media (max-width: ", "px) {\n      max-width: ", "px;\n    }\n  "])), theme('breakpoints', 'fullHD')(styleProps) + 128, theme('breakpoints', 'widescreen')(styleProps), theme('breakpoints', 'widescreen')(styleProps) + 128, theme('breakpoints', 'desktop')(styleProps), theme('breakpoints', 'desktop')(styleProps) + 128, theme('breakpoints', 'tablet')(styleProps));
}

var Container_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Container: Container,
  alignProperties: alignProperties,
  getResponsiveProperties: getResponsiveProperties
});

export { Container_styles as C, Container as a, alignProperties as b, getResponsiveProperties as g };
