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
import { k as theme, H as palette, p as borderRadius, z as fontSize } from './getCSSFromStyleObject.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36;
var InputWrapper = function InputWrapper(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  align-items: center;\n  position: relative;\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), styleProps.size && wrapperSizeProperties(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var Input = function Input(styleProps) {
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  -webkit-appearance: none;\n  background: ", ";\n  color: ", ";\n  height: 2.75em;\n  width: 100%;\n  transition: box-shadow 0.1s ease-in-out 0s, border-color 0.1s, background-color 0.1s;\n\n  ", "\n\n  &[disabled] {\n    background-color: ", ";\n    box-shadow: unset;\n    color: ", ";\n    cursor: not-allowed;\n\n    & {\n      ", ";\n    }\n  }\n\n  &:focus {\n    outline: unset;\n    z-index: 2;\n\n    & {\n      ", ";\n    }\n  }\n\n  &::placeholder {\n    color: ", ";\n\n    & {\n      ", ";\n    }\n  }\n\n  ", "\n\n  ", ";\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), palette('white', {
    dark: 'black100'
  })(styleProps), palette('text')(styleProps), getVariantStyles(styleProps), palette('white700', {
    dark: 'black200'
  })(styleProps), palette('text100')(styleProps), theme(styleProps.themeKey, "styles.disabled")(styleProps), theme(styleProps.themeKey, "styles.focus")(styleProps), palette(styleProps.palette || 'gray300')(styleProps), theme(styleProps.themeKey, "styles.placeholder")(styleProps), styleProps.containLabel && css$1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n      height: 3.25em;\n      padding-top: 0.8em;\n      padding-bottom: 0px;\n    "]))), (styleProps.after || styleProps.isLoading) && css$1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n      & {\n        padding-right: 2.3em;\n      }\n    "]))), styleProps.before && css$1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n      & {\n        padding-left: 2.3em;\n      }\n    "]))), theme(styleProps.themeKey, "styles.base")(styleProps));
};

function getVariantStyles(styleProps) {
  if (styleProps.variant === 'bordered') {
    return css$1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n      border: 1px solid\n        ", ";\n      border-radius: ", ";\n      padding: 0.4em 0.8em;\n\n      &:focus {\n        border-color: ", ";\n        box-shadow: ", "\n          0px 0px 0px 3px !important;\n\n        & {\n          ", ";\n        }\n      }\n\n      ", "\n\n      & {\n        ", ";\n      }\n    "])), palette(styleProps.palette || 'white900', {
      dark: styleProps.palette || 'gray700'
    })(styleProps), borderRadius('default')(styleProps), palette(styleProps.palette || 'primary')(styleProps), palette((styleProps.palette || 'primary') + "Tint", {
      dark: (styleProps.palette || 'primary') + "Shade"
    })(styleProps), theme(styleProps.themeKey, "variants.bordered.styles.focus")(styleProps), styleProps.state && css$1(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n        & {\n          border-color: ", ";\n          box-shadow: ", " 0px 0px\n            0px 3px !important;\n        }\n      "])), palette("" + styleProps.state)(styleProps), palette(styleProps.state + "Tint", {
      dark: styleProps.state + "Shade"
    })(styleProps)), theme(styleProps.themeKey, "variants.bordered.styles.base")(styleProps));
  }

  if (styleProps.variant === 'filled') {
    return css$1(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n      background-color: ", ";\n      border: 1px solid transparent;\n      border-radius: ", ";\n      padding: 0.4em 0.8em;\n\n      &:focus {\n        background-color: ", ";\n        border-color: ", ";\n        box-shadow: ", "\n          0px 0px 0px 3px !important;\n\n        & {\n          ", ";\n        }\n      }\n\n      &&[disabled] {\n        color: ", ";\n\n        & {\n          ", ";\n        }\n      }\n\n      ", "\n\n      & {\n        ", ";\n      }\n    "])), palette('white700', {
      dark: 'black300'
    })(styleProps), borderRadius('default')(styleProps), palette('white', {
      dark: 'black100'
    })(styleProps), palette(styleProps.palette || 'primary')(styleProps), palette((styleProps.palette || 'primary') + "Tint", {
      dark: (styleProps.palette || 'primary') + "Shade"
    })(styleProps), theme(styleProps.themeKey, "variants.bordered.styles.focus")(styleProps), palette('gray300')(styleProps), theme(styleProps.themeKey, "variants.bordered.disabled")(styleProps), styleProps.state && css$1(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n        & {\n          border-color: ", ";\n          box-shadow: ", " 0px 0px\n            0px 3px !important;\n        }\n      "])), palette("" + styleProps.state)(styleProps), palette(styleProps.state + "Tint", {
      dark: styleProps.state + "Shade"
    })(styleProps)), theme(styleProps.themeKey, "variants.filled.styles.base")(styleProps));
  }

  if (styleProps.variant === 'borderless') {
    return css$1(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n      border-top-left-radius: ", ";\n      border-top-right-radius: ", ";\n      border-bottom: 1px solid transparent;\n\n      &:focus {\n        border-bottom-color: ", ";\n        box-shadow: ", "\n          0px 2px 0px !important;\n      }\n\n      &[disabled] {\n        border-radius: ", ";\n        padding: 0.4em 0.8em;\n      }\n\n      ", "\n    "])), borderRadius('default')(styleProps), borderRadius('default')(styleProps), palette(styleProps.palette || 'primary')(styleProps), palette((styleProps.palette || 'primary') + "Tint", {
      dark: styleProps.palette + "Shade"
    })(styleProps), borderRadius('default')(styleProps), styleProps.state && css$1(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n        & {\n          border-color: ", ";\n          box-shadow: ", " 0px 2px\n            0px !important;\n        }\n      "])), palette("" + styleProps.state)(styleProps), palette(styleProps.state + "Tint", {
      dark: styleProps.state + "Shade"
    })(styleProps)));
  }

  if (styleProps.variant === 'underline') {
    return css$1(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n      border-top-left-radius: ", ";\n      border-top-right-radius: ", ";\n      border-bottom: 1px solid\n        ", ";\n\n      &:focus {\n        border-bottom-color: ", ";\n        box-shadow: ", "\n          0px 2px 0px !important;\n      }\n\n      &[disabled] {\n        padding: 0.4em 0.8em;\n      }\n\n      ", "\n    "])), borderRadius('default')(styleProps), borderRadius('default')(styleProps), palette(styleProps.palette || 'white900', {
      dark: styleProps.palette || 'gray700'
    })(styleProps), palette(styleProps.palette || 'primary')(styleProps), palette((styleProps.palette || 'primary') + "Tint", {
      dark: styleProps.palette + "Shade"
    })(styleProps), styleProps.state && css$1(_templateObject13 || (_templateObject13 = _taggedTemplateLiteralLoose(["\n        & {\n          border-color: ", ";\n          box-shadow: ", " 0px 2px\n            0px !important;\n        }\n      "])), palette("" + styleProps.state)(styleProps), palette(styleProps.state + "Tint", {
      dark: styleProps.state + "Shade"
    })(styleProps)));
  }

  return css$1(_templateObject14 || (_templateObject14 = _taggedTemplateLiteralLoose([""])));
}

var InputIcon = function InputIcon(styleProps) {
  return css(_templateObject15 || (_templateObject15 = _taggedTemplateLiteralLoose(["\n  && {\n    fill: ", ";\n    height: 2.75em;\n    margin: 0 0.75em;\n    top: 0;\n\n    ", ";\n  }\n"])), palette('text100')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var InputSpinner = function InputSpinner(styleProps) {
  return css(_templateObject16 || (_templateObject16 = _taggedTemplateLiteralLoose(["\n  && {\n    font-size: inherit;\n    align-items: center;\n    display: flex;\n    position: absolute;\n    height: 2.75em;\n    margin: 0 0.75em;\n    top: 0;\n    right: 0;\n    z-index: 2;\n\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var InputField = function InputField(styleProps) {
  return css(_templateObject17 || (_templateObject17 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var InputFieldGroup = function InputFieldGroup(styleProps) {
  return css(_templateObject18 || (_templateObject18 = _taggedTemplateLiteralLoose(["\n  & .bb-InputWrapper {\n    flex: 1;\n  }\n\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
function wrapperSizeProperties(styleProps) {
  var properties = {
    small: css$1(_templateObject19 || (_templateObject19 = _taggedTemplateLiteralLoose(["\n      font-size: ", "rem;\n\n      & {\n        ", ";\n      }\n    "])), fontSize('150')(styleProps), theme(styleProps.themeKey, "styles.sizes.small")(styleProps)),
    default: css$1(_templateObject20 || (_templateObject20 = _taggedTemplateLiteralLoose(["\n      & {\n        ", ";\n      }\n    "])), theme(styleProps.themeKey, "styles.sizes.default")(styleProps)),
    medium: css$1(_templateObject21 || (_templateObject21 = _taggedTemplateLiteralLoose(["\n      font-size: ", "rem;\n\n      & {\n        ", ";\n      }\n    "])), fontSize('300')(styleProps), theme(styleProps.themeKey, "styles.sizes.medium")(styleProps)),
    large: css$1(_templateObject22 || (_templateObject22 = _taggedTemplateLiteralLoose(["\n      font-size: ", "rem;\n\n      & {\n        ", ";\n      }\n    "])), fontSize('400')(styleProps), theme(styleProps.themeKey, "styles.sizes.large")(styleProps))
  };
  return properties[styleProps.size];
} /////////////////////////////////////////////////////////////////////

var LabelWrapper = function LabelWrapper(styleProps) {
  return css(_templateObject23 || (_templateObject23 = _taggedTemplateLiteralLoose(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  position: absolute;\n  height: 100%;\n  transition: transform 100ms;\n  transform-origin: top left;\n  transform: translateY(0px) scale(1);\n\n  ", "\n\n  ", "\n\n  ", ";\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), palette(styleProps.palette || 'gray300')(styleProps), getLabelWrapperVariantStyles(styleProps), styleProps.isFocused && css$1(_templateObject24 || (_templateObject24 = _taggedTemplateLiteralLoose(["\n      transform: translateY(-1.1em) scale(0.75);\n\n      ", "\n    "])), styleProps.containLabel && css$1(_templateObject25 || (_templateObject25 = _taggedTemplateLiteralLoose(["\n        margin-left: 0.875em;\n        transform: translateY(-0.3em) scale(0.75);\n      "])))), (styleProps.after || styleProps.isLoading) && css$1(_templateObject26 || (_templateObject26 = _taggedTemplateLiteralLoose(["\n      & {\n        margin-right: 2.3em;\n      }\n    "]))), styleProps.before && css$1(_templateObject27 || (_templateObject27 = _taggedTemplateLiteralLoose(["\n      & {\n        margin-left: 2.3em;\n      }\n    "]))), theme(styleProps.themeKey, "styles.base")(styleProps));
};

function getLabelWrapperVariantStyles(styleProps) {
  if (styleProps.variant === 'bordered') {
    return css$1(_templateObject28 || (_templateObject28 = _taggedTemplateLiteralLoose(["\n      margin-left: 0.8em;\n\n      & {\n        ", ";\n      }\n    "])), theme(styleProps.themeKey, "variants.bordered.styles.base")(styleProps));
  }

  if (styleProps.variant === 'filled') {
    return css$1(_templateObject29 || (_templateObject29 = _taggedTemplateLiteralLoose(["\n      margin-left: 0.8em;\n\n      & {\n        ", ";\n      }\n    "])), theme(styleProps.themeKey, "variants.filled.styles.base")(styleProps));
  }

  return css$1(_templateObject30 || (_templateObject30 = _taggedTemplateLiteralLoose([""])));
} /////////////////////////////////////////////////////////////////////


var LabelWrapperBackground = function LabelWrapperBackground(styleProps) {
  return css(_templateObject31 || (_templateObject31 = _taggedTemplateLiteralLoose(["\n  padding: 0 0.25em;\n  position: absolute;\n  opacity: 0;\n  transition: opacity 100ms;\n  transform: translateY(-1em) scale(0.75);\n  transform-origin: top left;\n\n  ", "\n\n  ", "\n\n  ", ";\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), getLabelWrapperBackgroundVariantStyles(styleProps), styleProps.isFocused && css$1(_templateObject32 || (_templateObject32 = _taggedTemplateLiteralLoose(["\n      opacity: 1;\n    "]))), (styleProps.after || styleProps.isLoading) && css$1(_templateObject33 || (_templateObject33 = _taggedTemplateLiteralLoose(["\n      & {\n        margin-right: 2.1em;\n      }\n    "]))), styleProps.before && css$1(_templateObject34 || (_templateObject34 = _taggedTemplateLiteralLoose(["\n      & {\n        margin-left: 2.1em;\n      }\n    "]))), theme(styleProps.themeKey, "styles.base")(styleProps));
};

function getLabelWrapperBackgroundVariantStyles(styleProps) {
  if (styleProps.variant === 'bordered') {
    return css$1(_templateObject35 || (_templateObject35 = _taggedTemplateLiteralLoose(["\n      background-color: ", ";\n      margin-left: 0.6em;\n\n      & {\n        ", ";\n      }\n    "])), palette('white', {
      dark: 'black100'
    })(styleProps), theme(styleProps.themeKey, "variants.bordered.styles.base")(styleProps));
  }

  return css$1(_templateObject36 || (_templateObject36 = _taggedTemplateLiteralLoose([""])));
}

var Input_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  InputWrapper: InputWrapper,
  Input: Input,
  InputIcon: InputIcon,
  InputSpinner: InputSpinner,
  InputField: InputField,
  InputFieldGroup: InputFieldGroup,
  wrapperSizeProperties: wrapperSizeProperties,
  LabelWrapper: LabelWrapper,
  LabelWrapperBackground: LabelWrapperBackground
});

export { Input_styles as I, LabelWrapper as L, InputIcon as a, InputWrapper as b, LabelWrapperBackground as c, InputSpinner as d, Input as e, InputField as f, InputFieldGroup as g, wrapperSizeProperties as w };
