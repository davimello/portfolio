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

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17;
var Grid = function Grid(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  display: grid;\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  & {\n    ", ";\n  }\n"])), styleProps.autoFlow && css$1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n      grid-auto-flow: ", ";\n    "])), styleProps.autoFlow), styleProps.gap && css$1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n      grid-gap: ", ";\n    "])), styleProps.gap), styleProps.template && css$1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n      grid-template: ", ";\n    "])), styleProps.template), styleProps.templateAreas && css$1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n      grid-template-areas: ", ";\n    "])), styleProps.templateAreas), styleProps.templateColumns && css$1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n      grid-template-columns: ", ";\n    "])), styleProps.templateColumns), styleProps.templateRows && css$1(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n      grid-template-rows: ", ";\n    "])), styleProps.templateRows), styleProps.autoColumns && css$1(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n      grid-auto-columns: ", ";\n    "])), styleProps.autoColumns), styleProps.autoRows && css$1(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n      grid-auto-rows: ", ";\n    "])), styleProps.autoRows), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var GridItem = function GridItem(styleProps) {
  return css(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n  display: grid-item;\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  & {\n    ", ";\n  }\n"])), styleProps.area && css$1(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n      grid-area: ", ";\n    "])), styleProps.area), styleProps.column && css$1(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n      grid-column: ", ";\n    "])), styleProps.column), styleProps.row && css$1(_templateObject13 || (_templateObject13 = _taggedTemplateLiteralLoose(["\n      grid-row: ", ";\n    "])), styleProps.row), styleProps.columnStart && css$1(_templateObject14 || (_templateObject14 = _taggedTemplateLiteralLoose(["\n      grid-column-start: ", ";\n    "])), styleProps.columnStart), styleProps.columnEnd && css$1(_templateObject15 || (_templateObject15 = _taggedTemplateLiteralLoose(["\n      grid-column-end: ", ";\n    "])), styleProps.columnEnd), styleProps.rowStart && css$1(_templateObject16 || (_templateObject16 = _taggedTemplateLiteralLoose(["\n      grid-row-start: ", ";\n    "])), styleProps.rowStart), styleProps.rowEnd && css$1(_templateObject17 || (_templateObject17 = _taggedTemplateLiteralLoose(["\n      grid-row-end: ", ";\n    "])), styleProps.rowEnd), theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Grid_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Grid: Grid,
  GridItem: GridItem
});

export { Grid_styles as G, GridItem as a, Grid as b };
