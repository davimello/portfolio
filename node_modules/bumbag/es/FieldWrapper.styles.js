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
import { k as theme, J as space, z as fontSize, H as palette, D as lineHeight, B as fontWeight, m as altitude } from './getCSSFromStyleObject.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import { getCapsizeStyles } from './utils/getCapsizeStyles.js';
import './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
var FieldWrapper = function FieldWrapper(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var Label = function Label(styleProps) {
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  &&& {\n    margin-bottom: 0px;\n  }\n\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var LabelWrapper = function LabelWrapper(styleProps) {
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  margin-bottom: ", "rem;\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), space(3)(styleProps), (styleProps.variant === 'borderless' || styleProps.variant === 'underline') && css$1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n      margin-bottom: ", "rem;\n    "])), space(1)(styleProps)), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var DescriptionText = function DescriptionText(styleProps) {
  return css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  display: block;\n  margin-top: ", "rem;\n\n  && {\n    ", ";\n  }\n\n  & {\n    ", ";\n  }\n"])), space(2)(styleProps), getCapsizeStyles({
    fontSize: '150'
  })(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var HintText = function HintText(styleProps) {
  return css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  display: block;\n  font-size: ", "rem;\n\n  & {\n    ", ";\n  }\n"])), fontSize('150')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var OptionalText = function OptionalText(styleProps) {
  return css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n  font-size: ", "rem;\n  color: ", ";\n  margin-left: ", "rem;\n  line-height: ", ";\n\n  & {\n    ", ";\n  }\n"])), fontSize('150')(styleProps), palette('text100')(styleProps), space(2)(styleProps), lineHeight('none')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var RequiredText = function RequiredText(styleProps) {
  return css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  margin-left: ", "rem;\n  font-weight: ", ";\n  font-size: ", "rem;\n\n  & {\n    ", ";\n  }\n"])), palette('danger')(styleProps), space(1)(styleProps), fontWeight('semibold')(styleProps), fontSize('150')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var ValidationText = function ValidationText(styleProps) {
  return css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n  display: block;\n  font-size: ", "rem;\n\n  & {\n    ", ";\n  }\n"])), fontSize('150')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TooltipTrigger = function TooltipTrigger(styleProps) {
  return css(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n  && {\n    font-size: ", "rem;\n    padding: ", "rem;\n    min-height: unset;\n  }\n\n  & {\n    ", ";\n  }\n"])), fontSize('100')(styleProps), space(1)(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TooltipPopover = function TooltipPopover(styleProps) {
  return css(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n  && {\n    position: absolute;\n    padding: ", "rem;\n    margin-top: ", "rem;\n    width: max-content;\n    max-width: 400px;\n    z-index: 999999;\n    ", ";\n  }\n\n  & {\n    ", ";\n  }\n"])), space(1, 'major')(styleProps), space(1, 'major')(styleProps), altitude('300')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};

var FieldWrapper_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  FieldWrapper: FieldWrapper,
  Label: Label,
  LabelWrapper: LabelWrapper,
  DescriptionText: DescriptionText,
  HintText: HintText,
  OptionalText: OptionalText,
  RequiredText: RequiredText,
  ValidationText: ValidationText,
  TooltipTrigger: TooltipTrigger,
  TooltipPopover: TooltipPopover
});

export { DescriptionText as D, FieldWrapper_styles as F, HintText as H, Label as L, OptionalText as O, RequiredText as R, TooltipTrigger as T, ValidationText as V, FieldWrapper as a, LabelWrapper as b, TooltipPopover as c };
