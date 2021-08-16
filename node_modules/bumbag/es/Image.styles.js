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

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var Image = function Image(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  ", "\n\n  ", "\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), styleProps.isFixed && css$1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n      max-width: unset;\n\n      ", ";\n    "])), theme(styleProps.themeKey, "styles.fixed")(styleProps)), styleProps.fit === 'contain' && css$1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n      object-fit: contain;\n\n      ", ";\n\n      ", ";\n    "])), styleProps.fitPosition && css$1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n        object-position: ", ";\n      "])), styleProps.fitPosition), theme(styleProps.themeKey, "styles.contain")(styleProps)), styleProps.fit === 'cover' && css$1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n      object-fit: cover;\n\n      ", ";\n\n      ", ";\n    "])), styleProps.fitPosition && css$1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n        object-position: ", ";\n      "])), styleProps.fitPosition), theme(styleProps.themeKey, "styles.cover")(styleProps)), theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Image_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Image: Image
});

export { Image_styles as I, Image as a };
