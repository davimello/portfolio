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
import { H as palette, D as lineHeight, k as theme, p as borderRadius, z as fontSize } from './getCSSFromStyleObject.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';
import { L as LabelWrapper$1, c as LabelWrapperBackground$1 } from './Input.styles.js';
import './Input/index.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33;
var Select = function Select(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  appearance: none;\n  color: ", ";\n  height: 2.75em;\n  line-height: ", ";\n  transition: box-shadow 0.1s ease-in-out 0s, border-color 0.1s, background-color 0.1s;\n  position: relative;\n  width: 100%;\n\n  ", ";\n\n  &[disabled],\n  &[aria-disabled=\"true\"] {\n    background: ", ";\n    box-shadow: unset;\n\n    & {\n      ", ";\n    }\n  }\n\n  &[disabled] + .bb-Icon {\n    color: ", ";\n    fill: ", ";\n  }\n\n  &:focus {\n    outline: unset;\n    z-index: 2;\n    position: unset;\n  }\n\n  ", "\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), palette(styleProps.color)(styleProps), lineHeight('default')(styleProps), getVariantStyles(styleProps), palette('white700', {
    dark: 'black200'
  })(styleProps), theme(styleProps.themeKey, "styles.disabled")(styleProps), palette('gray400')(styleProps), palette('gray400')(styleProps), styleProps.containLabel && css$1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n      height: 3.25em;\n      padding-top: 0.8em;\n      padding-bottom: 0px;\n    "]))), !styleProps.isPlaceholderSelected && css$1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n      position: unset;\n    "]))), theme(styleProps.themeKey, "styles.base")(styleProps));
};

function getVariantStyles(styleProps) {
  if (styleProps.variant === 'bordered') {
    return css$1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n      border: 1px solid\n        ", ";\n      border-radius: ", ";\n      padding: 0.4em ", " 0.4em 0.8em;\n\n      &&:focus,\n      &[aria-expanded='true'] {\n        border-color: ", ";\n        box-shadow: ", "\n          0px 0px 0px 3px !important;\n      }\n\n      ", "\n\n      & {\n        ", ";\n      }\n    "])), palette(styleProps.palette || 'white900', {
      dark: styleProps.palette || 'gray700'
    })(styleProps), borderRadius('default')(styleProps), styleProps.hasIcon ? '2em' : '0.8em', palette(styleProps.palette || 'primary')(styleProps), palette((styleProps.palette || 'primary') + "Tint", {
      dark: (styleProps.palette || 'primary') + "Shade"
    })(styleProps), styleProps.state && css$1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n        & {\n          border-color: ", ";\n          box-shadow: ", "\n            0px 0px 0px 3px !important;\n        }\n      "])), palette("" + styleProps.state)(styleProps), palette(styleProps.state + "Tint", {
      dark: styleProps.state + "Shade"
    })(styleProps)), theme(styleProps.themeKey, "variants.bordered.styles.base")(styleProps));
  }

  if (styleProps.variant === 'filled') {
    return css$1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n      border: 1px solid transparent;\n      border-radius: ", ";\n      padding: 0.4em ", " 0.4em 0.8em;\n\n      &&:focus,\n      &[aria-expanded='true'] {\n        border-color: ", ";\n        box-shadow: ", "\n          0px 0px 0px 3px !important;\n      }\n\n      ", "\n\n      & {\n        ", ";\n      }\n    "])), borderRadius('default')(styleProps), styleProps.hasIcon ? '2em' : '0.8em', palette(styleProps.palette || 'primary')(styleProps), palette((styleProps.palette || 'primary') + "Tint", {
      dark: (styleProps.palette || 'primary') + "Shade"
    })(styleProps), styleProps.state && css$1(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n        & {\n          border-color: ", ";\n          box-shadow: ", "\n            0px 0px 0px 3px !important;\n        }\n      "])), palette("" + styleProps.state)(styleProps), palette(styleProps.state + "Tint", {
      dark: styleProps.state + "Shade"
    })(styleProps)), theme(styleProps.themeKey, "variants.filled.styles.base")(styleProps));
  }

  if (styleProps.variant === 'borderless') {
    return css$1(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n      border-top-left-radius: ", ";\n      border-top-right-radius: ", ";\n      border-bottom: 1px solid transparent;\n\n      ", "\n\n      &:focus,\n      &[aria-expanded='true'] {\n        border-bottom-color: ", ";\n        box-shadow: ", "\n          0px 2px 0px !important;\n      }\n\n      &[disabled] {\n        border-radius: ", ";\n        padding: 0.4em 2em 0.4em 0.8em;\n      }\n\n      ", "\n\n      ", "\n\n      & {\n        ", ";\n      }\n    "])), borderRadius('default')(styleProps), borderRadius('default')(styleProps), styleProps.hasIcon && css$1(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n        padding-right: 2em;\n      "]))), palette(styleProps.palette || 'primary')(styleProps), palette((styleProps.palette || 'primary') + "Tint", {
      dark: styleProps.palette + "Shade"
    })(styleProps), borderRadius('default')(styleProps), styleProps.disabled && css$1(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n        border-radius: ", ";\n        padding: 0.4em 0.8em 0.4em 0.8em;\n      "])), borderRadius('default')(styleProps)), styleProps.state && css$1(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n        & {\n          border-color: ", ";\n          box-shadow: ", " 0px 2px\n            0px !important;\n        }\n      "])), palette("" + styleProps.state)(styleProps), palette(styleProps.state + "Tint", {
      dark: styleProps.state + "Shade"
    })(styleProps)), theme(styleProps.themeKey, "variants.borderless.styles.base")(styleProps));
  }

  if (styleProps.variant === 'underline') {
    return css$1(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n      border-top-left-radius: ", ";\n      border-top-right-radius: ", ";\n      border-bottom: 1px solid\n        ", ";\n\n      ", "\n\n      &:focus,\n      &[aria-expanded='true'] {\n        border-bottom-color: ", ";\n        box-shadow: ", "\n          0px 2px 0px !important;\n      }\n\n      &[disabled] {\n        padding: 0.4em 2em 0.4em 0.8em;\n      }\n\n      ", "\n\n      ", "\n\n      & {\n        ", ";\n      }\n    "])), borderRadius('default')(styleProps), borderRadius('default')(styleProps), palette(styleProps.palette || 'white900', {
      dark: styleProps.palette || 'gray700'
    })(styleProps), styleProps.hasIcon && css$1(_templateObject13 || (_templateObject13 = _taggedTemplateLiteralLoose(["\n        padding-right: 2em;\n      "]))), palette(styleProps.palette || 'primary')(styleProps), palette((styleProps.palette || 'primary') + "Tint", {
      dark: styleProps.palette + "Shade"
    })(styleProps), styleProps.disabled && css$1(_templateObject14 || (_templateObject14 = _taggedTemplateLiteralLoose(["\n        padding: 0.4em 0.8em 0.4em 0.8em;\n      "]))), styleProps.state && css$1(_templateObject15 || (_templateObject15 = _taggedTemplateLiteralLoose(["\n        & {\n          border-color: ", ";\n          box-shadow: ", " 0px 2px\n            0px !important;\n        }\n      "])), palette("" + styleProps.state)(styleProps), palette(styleProps.state + "Tint", {
      dark: styleProps.state + "Shade"
    })(styleProps)), theme(styleProps.themeKey, "variants.underline.styles.base")(styleProps));
  }

  return css$1(_templateObject16 || (_templateObject16 = _taggedTemplateLiteralLoose([""])));
} ////////////////////////////////////////////////////////////////////////


var SelectWrapper = function SelectWrapper(styleProps) {
  return css(_templateObject17 || (_templateObject17 = _taggedTemplateLiteralLoose(["\n  align-items: center;\n  position: relative;\n  width: fit-content;\n  transition: background-color 0.2s ease;\n\n  ", ";\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), getSelectWrapperVariantStyles(styleProps), styleProps.size && getWrapperSizeStyles(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};

function getSelectWrapperVariantStyles(styleProps) {
  if (styleProps.variant === 'bordered') {
    return css$1(_templateObject18 || (_templateObject18 = _taggedTemplateLiteralLoose(["\n      background-color: ", ";\n      border-radius: ", ";\n\n      & {\n        ", ";\n      }\n    "])), palette('white', {
      dark: 'black100'
    })(styleProps), borderRadius('default')(styleProps), theme(styleProps.themeKey, "variants.bordered.styles.base")(styleProps));
  }

  if (styleProps.variant === 'filled') {
    return css$1(_templateObject19 || (_templateObject19 = _taggedTemplateLiteralLoose(["\n      background-color: ", ";\n      border-radius: ", ";\n\n      &&:focus,\n      &[aria-expanded='true'] {\n        background-color: ", ";\n      }\n\n      ", "\n\n      & {\n        ", ";\n      }\n    "])), palette('white700', {
      dark: 'black300'
    })(styleProps), borderRadius('default')(styleProps), palette('white', {
      dark: 'black100'
    })(styleProps), styleProps.isFocused && css$1(_templateObject20 || (_templateObject20 = _taggedTemplateLiteralLoose(["\n        background-color: ", ";\n      "])), palette('white', {
      dark: 'black100'
    })(styleProps)), theme(styleProps.themeKey, "variants.filled.styles.base")(styleProps));
  }

  if (styleProps.variant === 'borderless') {
    return css$1(_templateObject21 || (_templateObject21 = _taggedTemplateLiteralLoose(["\n      & {\n        ", ";\n      }\n    "])), theme(styleProps.themeKey, "variants.borderless.styles.base")(styleProps));
  }

  if (styleProps.variant === 'underline') {
    return css$1(_templateObject22 || (_templateObject22 = _taggedTemplateLiteralLoose(["\n      & {\n        ", ";\n      }\n    "])), theme(styleProps.themeKey, "variants.underline.styles.base")(styleProps));
  }

  return css$1(_templateObject23 || (_templateObject23 = _taggedTemplateLiteralLoose([""])));
}

function getWrapperSizeStyles(styleProps) {
  var properties = {
    small: css$1(_templateObject24 || (_templateObject24 = _taggedTemplateLiteralLoose(["\n      font-size: ", "rem;\n\n      & {\n        ", ";\n      }\n    "])), fontSize('150')(styleProps), theme(styleProps.themeKey, "styles.sizes.small")(styleProps)),
    default: css$1(_templateObject25 || (_templateObject25 = _taggedTemplateLiteralLoose(["\n      & {\n        ", ";\n      }\n    "])), theme(styleProps.themeKey, "styles.sizes.default")(styleProps)),
    medium: css$1(_templateObject26 || (_templateObject26 = _taggedTemplateLiteralLoose(["\n      font-size: ", "rem;\n\n      & {\n        ", ";\n      }\n    "])), fontSize('300')(styleProps), theme(styleProps.themeKey, "styles.sizes.medium")(styleProps)),
    large: css$1(_templateObject27 || (_templateObject27 = _taggedTemplateLiteralLoose(["\n      font-size: ", "rem;\n\n      & {\n        ", ";\n      }\n    "])), fontSize('400')(styleProps), theme(styleProps.themeKey, "styles.sizes.large")(styleProps))
  };
  return properties[styleProps.size];
} ////////////////////////////////////////////////////////////////////////

var SelectIcon = function SelectIcon(styleProps) {
  return css(_templateObject28 || (_templateObject28 = _taggedTemplateLiteralLoose(["\n  && {\n    position: absolute;\n    width: 0.8em;\n    height: 2.75em;\n    right: 0.8em;\n    z-index: 1;\n    color: ", ";\n    fill: ", ";\n    pointer-events: none;\n\n    ", "\n  }\n\n  & {\n    ", ";\n  }\n"])), palette('text')(styleProps), palette('text')(styleProps), styleProps.containLabel && css$1(_templateObject29 || (_templateObject29 = _taggedTemplateLiteralLoose(["\n        height: 3.25em;\n      "]))), theme(styleProps.themeKey, "styles.base")(styleProps));
}; ////////////////////////////////////////////////////////////////////////

var SelectSpinner = function SelectSpinner(styleProps) {
  return css(_templateObject30 || (_templateObject30 = _taggedTemplateLiteralLoose(["\n  && {\n    font-size: inherit;\n    align-items: center;\n    display: flex;\n    position: absolute;\n    height: 2.75em;\n    margin: 0 0.75em;\n    top: 0;\n    right: 0;\n    z-index: 2;\n\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
}; ////////////////////////////////////////////////////////////////////////

var SelectField = function SelectField(styleProps) {
  return css(_templateObject31 || (_templateObject31 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var LabelWrapper = function LabelWrapper(styleProps) {
  return css(_templateObject32 || (_templateObject32 = _taggedTemplateLiteralLoose(["\n  ", ";\n"])), LabelWrapper$1(styleProps));
};
var LabelWrapperBackground = function LabelWrapperBackground(styleProps) {
  return css(_templateObject33 || (_templateObject33 = _taggedTemplateLiteralLoose(["\n  ", ";\n"])), LabelWrapperBackground$1(styleProps));
};

var Select_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Select: Select,
  SelectWrapper: SelectWrapper,
  getWrapperSizeStyles: getWrapperSizeStyles,
  SelectIcon: SelectIcon,
  SelectSpinner: SelectSpinner,
  SelectField: SelectField,
  LabelWrapper: LabelWrapper,
  LabelWrapperBackground: LabelWrapperBackground
});

export { LabelWrapper as L, Select_styles as S, SelectWrapper as a, Select as b, LabelWrapperBackground as c, SelectIcon as d, SelectSpinner as e, SelectField as f, getWrapperSizeStyles as g };
