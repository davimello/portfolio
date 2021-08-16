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
import { k as theme, H as palette, B as fontWeight } from './getCSSFromStyleObject.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';
import { getHiddenInputStyles } from './utils/getHiddenInputStyles.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
var Checkbox = function Checkbox(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  && {\n    display: flex;\n    align-items: center;\n  }\n\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var CheckboxIcon = function CheckboxIcon(styleProps) {
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  -webkit-appearance: none;\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 0.2em;\n  height: 1em;\n  position: relative;\n  min-width: 1em;\n  width: 1em;\n  transition: box-shadow 0.1s ease-in-out 0s, border-color 0.1s, background-color 0.1s;\n\n  & {\n    ", ";\n  }\n"])), palette('default')(styleProps), palette('white900', {
    dark: 'gray700'
  })(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var CheckboxLabel = function CheckboxLabel(styleProps) {
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  && {\n    font-weight: ", ";\n  }\n\n  & {\n    ", ";\n  }\n"])), fontWeight('normal')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var HiddenCheckbox = function HiddenCheckbox(styleProps) {
  return getHiddenInputStyles({
    iconClassName: 'bb-CheckboxIcon',
    checkedIconCss: css$1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n      background-clip: padding-box;\n      content: '';\n      left: calc(50% - 0.1875em);\n      top: calc(50% - 0.375em);\n      position: absolute;\n\n      & {\n        ", ";\n      }\n    "])), styleProps.indeterminate ? css$1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n              background-color: ", ";\n              height: 0.125em;\n              width: 0.625em;\n              top: calc(50% - 0.0625em);\n              left: calc(50% - 0.3125em);\n            "])), palette('primary', {
      dark: 'primary300'
    })(styleProps)) : css$1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n              border: 0.1rem solid ", ";\n              border-left-width: 0;\n              border-top-width: 0;\n              height: 0.625em;\n              transform: rotate(45deg);\n              width: 0.375em;\n            "])), palette('primary', {
      dark: 'primary300'
    })(styleProps))),
    disabledCheckedIconCss: css$1(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n      border-color: ", ";\n    "])), palette('gray300', {
      dark: 'gray'
    })(styleProps)),
    styleProps: styleProps,
    themeKey: 'Checkbox.Icon'
  });
};
var CheckboxGroup = function CheckboxGroup(styleProps) {
  return css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var CheckboxField = function CheckboxField(styleProps) {
  return css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var CheckboxGroupField = function CheckboxGroupField(styleProps) {
  return css(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Checkbox_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Checkbox: Checkbox,
  CheckboxIcon: CheckboxIcon,
  CheckboxLabel: CheckboxLabel,
  HiddenCheckbox: HiddenCheckbox,
  CheckboxGroup: CheckboxGroup,
  CheckboxField: CheckboxField,
  CheckboxGroupField: CheckboxGroupField
});

export { Checkbox_styles as C, HiddenCheckbox as H, Checkbox as a, CheckboxIcon as b, CheckboxLabel as c, CheckboxField as d, CheckboxGroup as e, CheckboxGroupField as f };
