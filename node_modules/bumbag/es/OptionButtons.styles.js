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
import { k as theme, H as palette } from './getCSSFromStyleObject.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
var OptionButtons = function OptionButtons(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var OptionButton = function OptionButton(styleProps) {
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  ", ";\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), styleProps.isFullWidth && css$1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n      flex: 1;\n    "]))), styleProps.checked && css$1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n      border: 1px solid transparent;\n    "]))), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var OptionButtonsWrapper = function OptionButtonsWrapper(styleProps) {
  return css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  ", ";\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), !styleProps.isFullWidth && css$1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n      width: fit-content;\n    "]))), styleProps.state && css$1(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n      box-shadow: ", " 0px 0px 0px\n        3px;\n\n      & > *[aria-checked='false'] {\n        border-color: ", ";\n      }\n    "])), palette(styleProps.state + "Tint", {
    dark: styleProps.state + "Shade"
  })(styleProps), palette("" + styleProps.state)(styleProps)), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var OptionButtonsField = function OptionButtonsField(styleProps) {
  return css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};

var OptionButtons_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  OptionButtons: OptionButtons,
  OptionButton: OptionButton,
  OptionButtonsWrapper: OptionButtonsWrapper,
  OptionButtonsField: OptionButtonsField
});

export { OptionButtons_styles as O, OptionButton as a, OptionButtons as b, OptionButtonsWrapper as c, OptionButtonsField as d };
