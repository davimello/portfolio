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
import { k as theme } from './getCSSFromStyleObject.js';
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
var Tabbable = function Tabbable(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  &[disabled],\n  &[aria-disabled=\"true\"] {\n    opacity: 0.5;\n\n    & {\n      ", ";\n    }\n  }\n\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.disabled")(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Tabbable_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Tabbable: Tabbable
});

export { Tabbable_styles as T, Tabbable as a };
