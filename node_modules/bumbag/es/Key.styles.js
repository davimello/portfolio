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
import { H as palette, p as borderRadius, k as theme } from './getCSSFromStyleObject.js';
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
var Key = function Key(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  display: inline;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background-color: ", ";\n  font-size: 0.875em;\n  border-radius: ", ";\n  padding: 0.25em 0.5em;\n  border-style: solid;\n  border-color: ", ";\n  border-width: 1px 1px 2px;\n\n  & {\n    ", ";\n  }\n"])), palette('default')(styleProps), borderRadius('2')(styleProps), palette('white900')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Key_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Key: Key
});

export { Key_styles as K, Key as a };
