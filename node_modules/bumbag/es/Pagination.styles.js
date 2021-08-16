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
import { k as theme, B as fontWeight } from './getCSSFromStyleObject.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var Pagination = function Pagination(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PaginationButton = function PaginationButton(styleProps) {
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PaginationSelect = function PaginationSelect(styleProps) {
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PaginationPrepositionText = function PaginationPrepositionText(styleProps) {
  return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  font-weight: ", ";\n\n  & {\n    ", ";\n  }\n"])), fontWeight('semibold')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Pagination_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Pagination: Pagination,
  PaginationButton: PaginationButton,
  PaginationSelect: PaginationSelect,
  PaginationPrepositionText: PaginationPrepositionText
});

export { Pagination_styles as P, Pagination as a, PaginationButton as b, PaginationSelect as c, PaginationPrepositionText as d };
