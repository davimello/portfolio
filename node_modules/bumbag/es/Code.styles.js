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
import { H as palette, p as borderRadius, v as font, k as theme } from './getCSSFromStyleObject.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';

var _templateObject, _templateObject2;
var Code = function Code(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  border-radius: ", ";\n  color: ", ";\n  font-family: ", ";\n  padding: 0.1rem 0.2rem;\n  overflow: auto;\n\n  & {\n    ", "\n  };\n\n  & {\n    ", ";\n  };\n"])), styleProps.palette === 'default' ? palette('white700', {
    dark: 'black300'
  })(styleProps) : palette(styleProps.palette + "Tint", {
    dark: styleProps.palette + "Shade"
  })(styleProps), borderRadius('1')(styleProps), styleProps.palette === 'default' ? palette('text')(styleProps) : palette(styleProps.palette + "700", {
    dark: styleProps.palette + "200"
  })(styleProps), font('mono')(styleProps), styleProps.isBlock && css$1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n        padding: 1rem;\n        ", ";\n      "])), theme(styleProps.themeKey, "styles.block")(styleProps)), theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Code_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Code: Code
});

export { Code_styles as C, Code as a };
