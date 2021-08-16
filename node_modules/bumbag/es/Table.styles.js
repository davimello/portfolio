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
import { H as palette, L as breakpoint, J as space, B as fontWeight, z as fontSize, k as theme, p as borderRadius, m as altitude } from './getCSSFromStyleObject.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;
var Table = function Table(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  border-collapse: collapse;\n  border-spacing: 0;\n  text-align: left;\n  width: 100%;\n  color: ", ";\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), palette('text200')(styleProps), styleProps.hasDividers && css$1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n      & tbody tr:not(:last-child) {\n        border-bottom: 1px solid ", ";\n      }\n    "])), palette('white800', {
    dark: 'gray900'
  })(styleProps)), styleProps.isHoverable && css$1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n      & tbody tr:hover {\n        background-color: ", ";\n      }\n    "])), palette('white600', {
    dark: 'black200'
  })(styleProps)), styleProps.isStriped && css$1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n      & tbody tr:nth-child(even) {\n        background-color: ", ";\n      }\n    "])), palette('white600', {
    dark: 'black200'
  })(styleProps)), styleProps.isResponsive && css$1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n      ", ";\n    "])), breakpoint("max-" + styleProps.responsiveBreakpoint, css$1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n          & thead {\n            display: none;\n          }\n\n          & tbody tr:not(:last-child) {\n            border-bottom: 1px solid ", ";\n          }\n\n          & tbody td {\n            display: block;\n            text-align: left !important;\n            padding: ", "rem ", "rem;\n\n            &::before {\n              display: block;\n              content: attr(data-content);\n              ", ";\n\n              & {\n                ", ";\n              }\n            }\n          }\n\n          & tfoot td {\n            display: block;\n            text-align: left !important;\n          }\n\n          & {\n            ", ";\n          }\n        "])), palette('white800', {
    dark: 'gray900'
  })(styleProps), space(2)(styleProps), space(4)(styleProps), tableHeadCellText(styleProps), theme(styleProps.themeKey, "styles.responsive.headCellText")(styleProps), theme(styleProps.themeKey, "styles.responsive.base")(styleProps)))(styleProps)), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TableHead = function TableHead(styleProps) {
  return css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n  border-bottom: 1px solid ", ";\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), palette('white800', {
    dark: 'gray900'
  })(styleProps), styleProps.tableVariant !== 'minimal' && css$1(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n      background-color: ", ";\n    "])), palette('white600', {
    dark: 'black200'
  })(styleProps)), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TableRow = function TableRow(styleProps) {
  return css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TableHeadCell = function TableHeadCell(styleProps) {
  return css(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n  padding: ", "rem ", "rem;\n  vertical-align: middle;\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), space(3)(styleProps), space(4)(styleProps), tableHeadCellText(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TableCell = function TableCell(styleProps) {
  return css(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n  padding: ", "rem ", "rem;\n\n  & {\n    ", ";\n  }\n"])), space(3)(styleProps), space(4)(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TableFoot = function TableFoot(styleProps) {
  return css(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n  border-top: 1px solid ", ";\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), palette('white800', {
    dark: 'gray900'
  })(styleProps), styleProps.tableVariant !== 'minimal' && css$1(_templateObject13 || (_templateObject13 = _taggedTemplateLiteralLoose(["\n      background-color: ", ";\n    "])), palette('white600', {
    dark: 'black200'
  })(styleProps)), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TableBody = function TableBody(styleProps) {
  return css(_templateObject14 || (_templateObject14 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TableWrapper = function TableWrapper(styleProps) {
  return css(_templateObject15 || (_templateObject15 = _taggedTemplateLiteralLoose(["\n  border-radius: ", ";\n  overflow: hidden;\n\n  ", "\n\n  ", "\n\n\n  & {\n    ", ";\n  }\n"])), borderRadius('default')(styleProps), styleProps.variant === 'default' && css$1(_templateObject16 || (_templateObject16 = _taggedTemplateLiteralLoose(["\n      border: 1px solid ", ";\n    "])), palette('white800', {
    dark: 'gray900'
  })(styleProps)), styleProps.variant === 'shadowed' && css$1(_templateObject17 || (_templateObject17 = _taggedTemplateLiteralLoose(["\n      ", ";\n    "])), altitude('100')(styleProps)), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var tableHeadCellText = function tableHeadCellText(styleProps) {
  return css$1(_templateObject18 || (_templateObject18 = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  font-weight: ", ";\n  font-size: ", "rem;\n  text-transform: uppercase;\n"])), palette('text100')(styleProps), fontWeight('semibold')(styleProps), fontSize('100')(styleProps));
};

var Table_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Table: Table,
  TableHead: TableHead,
  TableRow: TableRow,
  TableHeadCell: TableHeadCell,
  TableCell: TableCell,
  TableFoot: TableFoot,
  TableBody: TableBody,
  TableWrapper: TableWrapper,
  tableHeadCellText: tableHeadCellText
});

export { Table_styles as T, TableWrapper as a, Table as b, TableHead as c, TableCell as d, TableFoot as e, TableHeadCell as f, TableBody as g, TableRow as h, tableHeadCellText as t };
