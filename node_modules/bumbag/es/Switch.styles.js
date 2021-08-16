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

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
var Switch = function Switch(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  && {\n    display: flex;\n    align-items: center;\n  }\n\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SwitchIcon = function SwitchIcon(styleProps) {
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 1em;\n  height: 1.5em;\n  position: relative;\n  width: 2.5em;\n  transition: box-shadow 0.1s ease-in-out 0s, border-color 0.1s, background-color 0.1s;\n\n  & {\n    ", ";\n  }\n"])), palette('default')(styleProps), palette('gray100', {
    dark: 'gray700'
  })(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SwitchLabel = function SwitchLabel(styleProps) {
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  && {\n    font-weight: ", ";\n  }\n\n  & {\n    ", ";\n  }\n"])), fontWeight('normal')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var HiddenSwitch = function HiddenSwitch(styleProps) {
  return getHiddenInputStyles({
    iconClassName: 'bb-SwitchIcon',
    checkedCss: css$1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n      background-color: ", ";\n      transition: all ease 0.2s;\n    "])), palette(styleProps.palette || 'primary', {
      dark: (styleProps.palette || 'primary') + "700"
    })(styleProps)),
    disabledCheckedCss: css$1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n      background-color: ", ";\n      border-color: ", ";\n    "])), palette((styleProps.palette || 'primary') + "100", {
      dark: (styleProps.palette || 'primary') + "800"
    })(styleProps), palette((styleProps.palette || 'primary') + "100", {
      dark: (styleProps.palette || 'primary') + "800"
    })(styleProps)),
    disabledUncheckedIconCss: css$1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n      background: ", ";\n    "])), palette('white700')(styleProps)),
    checkedIconCss: css$1(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n      border-color: ", ";\n      left: 1.25em;\n    "])), palette(styleProps.palette || 'primary', {
      dark: (styleProps.palette || 'primary') + "700"
    })(styleProps)),
    disabledCheckedIconCss: css$1(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n      border-color: ", ";\n    "])), palette((styleProps.palette || 'primary') + "100", {
      dark: (styleProps.palette || 'primary') + "800"
    })(styleProps)),
    uncheckedIconCss: css$1(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n      background: ", ";\n      content: '';\n      border-radius: 100%;\n      border: 1px solid ", ";\n      height: 1em;\n      width: 1em;\n      top: 0.2em;\n      left: 0.2em;\n      transition: all ease 0.2s;\n      position: absolute;\n    "])), palette('default', {
      dark: 'gray100'
    })(styleProps), palette('gray100', {
      dark: 'gray700'
    })(styleProps)),
    styleProps: styleProps,
    themeKey: 'Switch.Icon'
  });
};
var SwitchGroup = function SwitchGroup(styleProps) {
  return css(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SwitchField = function SwitchField(styleProps) {
  return css(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SwitchGroupField = function SwitchGroupField(styleProps) {
  return css(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Switch_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Switch: Switch,
  SwitchIcon: SwitchIcon,
  SwitchLabel: SwitchLabel,
  HiddenSwitch: HiddenSwitch,
  SwitchGroup: SwitchGroup,
  SwitchField: SwitchField,
  SwitchGroupField: SwitchGroupField
});

export { HiddenSwitch as H, Switch_styles as S, Switch as a, SwitchIcon as b, SwitchLabel as c, SwitchField as d, SwitchGroup as e, SwitchGroupField as f };
