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

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
var Radio = function Radio(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  && {\n    display: flex;\n    align-items: center;\n  }\n\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var RadioIcon = function RadioIcon(styleProps) {
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  -webkit-appearance: none;\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 100%;\n  height: 1em;\n  position: relative;\n  min-width: 1em;\n  width: 1em;\n  transition: box-shadow 0.1s ease-in-out 0s, border-color 0.1s, background-color 0.1s;\n\n  & {\n    ", ";\n  }\n"])), palette('default')(styleProps), palette('white900', {
    dark: 'gray700'
  })(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var RadioLabel = function RadioLabel(styleProps) {
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  && {\n    font-weight: ", ";\n  }\n\n  & {\n    ", ";\n  }\n"])), fontWeight('normal')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var HiddenRadio = function HiddenRadio(styleProps) {
  return getHiddenInputStyles({
    iconClassName: 'bb-RadioIcon',
    checkedIconCss: css$1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n      background: ", ";\n      border-radius: 50%;\n      content: '';\n      height: 0.5em;\n      left: 50%;\n      position: absolute;\n      top: 50%;\n      transform: translate(-50%, -50%);\n      width: 0.5em;\n    "])), palette('primary', {
      dark: 'primary300'
    })(styleProps)),
    disabledCheckedIconCss: css$1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n      border-color: ", ";\n      background: ", ";\n    "])), palette('gray300', {
      dark: 'gray'
    })(styleProps), palette('gray300', {
      dark: 'gray'
    })(styleProps)),
    styleProps: styleProps,
    themeKey: 'Radio.Icon'
  });
};
var RadioField = function RadioField(styleProps) {
  return css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var RadioGroup = function RadioGroup(styleProps) {
  return css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var RadioGroupField = function RadioGroupField(styleProps) {
  return css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Radio_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Radio: Radio,
  RadioIcon: RadioIcon,
  RadioLabel: RadioLabel,
  HiddenRadio: HiddenRadio,
  RadioField: RadioField,
  RadioGroup: RadioGroup,
  RadioGroupField: RadioGroupField
});

export { HiddenRadio as H, Radio_styles as R, Radio as a, RadioIcon as b, RadioLabel as c, RadioGroup as d, RadioGroupField as e, RadioField as f };
