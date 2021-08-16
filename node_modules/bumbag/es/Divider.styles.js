import 'react';
import './Provider/ThemeContext.js';
import 'classnames';
import { css } from '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import { a as _taggedTemplateLiteralLoose } from './_rollupPluginBabelHelpers.js';
import './ColorMode/ColorModeContext.js';
import './utils/cssProps.js';
import 'lodash/kebabCase';
import 'tinycolor2';
import { H as palette, k as theme } from './getCSSFromStyleObject.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';

var _templateObject;
var Divider = function Divider(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n    border: 1px solid ", ";\n    border-width: 0 0 1px 0;\n    padding: 0;\n    width: auto;\n    height: 0;\n\n    &[aria-orientation=\"vertical\"] {\n      border-width: 0 1px 0 0;\n      width: 0;\n      height: auto;\n\n      & {\n        ", ";\n      }\n    }\n\n  & {\n    ", ";\n  }\n"])), palette('white800', {
    dark: 'gray700'
  })(styleProps), theme(styleProps.themeKey, "styles.vertical")(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Divider_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Divider: Divider
});

export { Divider_styles as D, Divider as a };
