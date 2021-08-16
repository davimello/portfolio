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
var Icon = function Icon(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  fill: ", ";\n  position: relative;\n  height: 1em;\n  width: 1em;\n\n  & {\n    ", ";\n  }\n"])), styleProps.color ? palette(styleProps.color)(styleProps) : 'inherit', theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Icon_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Icon: Icon
});

export { Icon_styles as I, Icon as a };
