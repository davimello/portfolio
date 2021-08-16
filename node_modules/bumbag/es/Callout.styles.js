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
import { H as palette, k as theme, J as space, z as fontSize, B as fontWeight, m as altitude } from './getCSSFromStyleObject.js';
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
var Callout = function Callout(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n\n  ", "\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), palette('background', {
    dark: 'gray900'
  })(styleProps), styleProps.showCloseButton && css$1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n      position: relative;\n    "]))), styleProps.hasTint && getTintAttributes(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var CalloutContent = function CalloutContent(styleProps) {
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var CalloutHeader = function CalloutHeader(styleProps) {
  return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  margin-bottom: ", "rem;\n\n  & {\n    ", ";\n  }\n"])), space(3, 'minor')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var CalloutTitle = function CalloutTitle(styleProps) {
  return css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  font-size: ", "em;\n  font-weight: ", ";\n\n  & {\n    ", ";\n  }\n"])), fontSize('300')(styleProps), fontWeight('semibold')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var CalloutFooter = function CalloutFooter(styleProps) {
  return css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  margin-top: ", "rem;\n\n  & {\n    ", ";\n  }\n"])), space(3, 'major')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var CalloutIconWrapper = function CalloutIconWrapper(styleProps) {
  return css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n  margin-right: ", "rem;\n\n  & .bb-Icon {\n    vertical-align: -0.125em;\n  }\n  & .bb-CalloutContent .bb-Icon {\n    font-size: 1.25em;\n  }\n\n  & {\n    ", ";\n  }\n"])), space(2, 'major')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var CalloutClose = function CalloutClose(styleProps) {
  return css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: ", "rem;\n  right: ", "rem;\n\n  & {\n    ", ";\n  }\n"])), space(1, 'major')(styleProps), space(1, 'major')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var CalloutOverlay = function CalloutOverlay(styleProps) {
  return css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n  max-width: 500px;\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), altitude('200')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var getTintAttributes = function getTintAttributes(styleProps) {
  return css$1(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n    && {\n      border-color: ", " !important;\n    }\n\n    background-color: ", ";\n    color: ", ";\n    fill: ", ";\n\n    & {\n      ", ";\n    }\n  "])), palette(styleProps.type + "100")(styleProps), palette(styleProps.type + "Tint", {
    dark: styleProps.type + "Shade"
  })(styleProps), palette(styleProps.type + "TintInverted", {
    dark: styleProps.type + "ShadeInverted"
  })(styleProps), palette(styleProps.type + "TintInverted", {
    dark: styleProps.type + "ShadeInverted"
  })(styleProps), theme(styleProps.themeKey, "tint")(styleProps));
};

var Callout_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Callout: Callout,
  CalloutContent: CalloutContent,
  CalloutHeader: CalloutHeader,
  CalloutTitle: CalloutTitle,
  CalloutFooter: CalloutFooter,
  CalloutIconWrapper: CalloutIconWrapper,
  CalloutClose: CalloutClose,
  CalloutOverlay: CalloutOverlay,
  getTintAttributes: getTintAttributes
});

export { Callout_styles as C, Callout as a, CalloutClose as b, CalloutContent as c, CalloutHeader as d, CalloutTitle as e, CalloutFooter as f, CalloutIconWrapper as g, CalloutOverlay as h, getTintAttributes as i };
