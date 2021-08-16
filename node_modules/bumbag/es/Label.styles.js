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
import { getCapsizeStyles } from './utils/getCapsizeStyles.js';
import './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';

var _templateObject;
var Label = function Label(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  display: block;\n  font-weight: 500;\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), getCapsizeStyles({
    lineHeight: '100',
    includeBottomGap: true
  })(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Label_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Label: Label
});

export { Label_styles as L, Label as a };
