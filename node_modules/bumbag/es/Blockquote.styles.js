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
import { d as darken, J as space, k as theme } from './getCSSFromStyleObject.js';
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
var Blockquote = function Blockquote(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  border-left: 4px solid ", ";\n  padding: ", "rem;\n\n  & {\n    ", ";\n  }\n"])), darken(0.2, 'white')(styleProps), space(6)(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Blockquote_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Blockquote: Blockquote
});

export { Blockquote_styles as B, Blockquote as a };
