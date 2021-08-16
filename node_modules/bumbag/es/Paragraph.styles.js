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
var Paragraph = function Paragraph(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  ", ";\n\n  & .bb-Icon {\n    vertical-align: -0.125em;\n  }\n\n  & {\n    ", ";\n  }\n"])), getCapsizeStyles({
    lineHeight: 'default',
    includeBottomGap: true
  })(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Paragraph_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Paragraph: Paragraph
});

export { Paragraph_styles as P, Paragraph as a };
