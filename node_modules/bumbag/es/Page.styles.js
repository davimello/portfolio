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
import { J as space, k as theme, L as breakpoint, H as palette } from './getCSSFromStyleObject.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import { getHiddenScrollbarStyles } from './utils/getHiddenScrollbarStyles.js';
import './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30;
var PageContent = function PageContent(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  padding: ", "rem ", "rem;\n\n  ", "\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), space(4, 'major')(styleProps), space(2, 'major')(styleProps), styleProps.isFluid && css$1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n      padding: ", "rem ", "rem;\n\n      & {\n        ", ";\n      }\n    "])), space(4, 'major')(styleProps), theme('Container.fluidMargin')(styleProps), theme(styleProps.themeKey, "styles.fluid")(styleProps)), breakpoint('max-tablet', css$1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n      padding-top: ", "rem;\n      padding-bottom: ", "rem;\n\n      & {\n        ", ";\n      }\n    "])), space(2, 'major')(styleProps), space(2, 'major')(styleProps), theme(styleProps.themeKey, "styles.mobile")(styleProps)))(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PageContentWrapper = function PageContentWrapper(styleProps) {
  return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PageWithSidebar = function PageWithSidebar(styleProps) {
  return css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  min-height: 100vh;\n\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PageWithSidebarContent = function PageWithSidebarContent(styleProps) {
  return css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  width: 100%;\n\n  ", "\n  ", "\n\n  & {\n    ", ";\n  }\n"])), styleProps.sidebarPlacement === 'left' && css$1(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n      padding-left: ", ";\n\n      ", "\n\n      ", "\n    "])), getWidth(styleProps), breakpoint("max-" + styleProps.collapseBelow, css$1(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n          padding-left: 0px;\n        "]))))(styleProps), !styleProps.isSidebarOpen && css$1(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n        padding-left: 0px;\n      "])))), styleProps.sidebarPlacement === 'right' && css$1(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n      padding-right: ", ";\n\n      ", "\n\n      ", "\n    "])), getWidth(styleProps), breakpoint("max-" + styleProps.collapseBelow, css$1(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n          padding-right: 0px;\n        "]))))(styleProps), !styleProps.isSidebarOpen && css$1(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n        padding-right: 0px;\n      "])))), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PageWithSidebarSidebar = function PageWithSidebarSidebar(styleProps) {
  return css(_templateObject13 || (_templateObject13 = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  height: 100vh;\n  min-width: ", ";\n  width: ", ";\n  transform: translateX(0px);\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), palette('background')(styleProps), getWidth(styleProps), getWidth(styleProps), styleProps.isSidebarMinimized && css$1(_templateObject14 || (_templateObject14 = _taggedTemplateLiteralLoose(["\n      overflow: visible;\n    "]))), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PageWithSidebarSidebarExpandedWrapper = function PageWithSidebarSidebarExpandedWrapper(styleProps) {
  return css(_templateObject15 || (_templateObject15 = _taggedTemplateLiteralLoose(["\n  position: fixed;\n  z-index: 999999;\n  overflow-y: scroll;\n\n  ", "\n\n  ", "\n\n  ", ";\n\n  ", "\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), styleProps.sidebarPlacement === 'left' && css$1(_templateObject16 || (_templateObject16 = _taggedTemplateLiteralLoose(["\n      border-right: 1px solid ", ";\n    "])), palette('white800', {
    dark: 'gray700'
  })(styleProps)), styleProps.sidebarPlacement === 'right' && css$1(_templateObject17 || (_templateObject17 = _taggedTemplateLiteralLoose(["\n      border-left: 1px solid ", ";\n    "])), palette('white800', {
    dark: 'gray700'
  })(styleProps)), getHiddenScrollbarStyles(), styleProps.sidebarPlacement === 'right' && css$1(_templateObject18 || (_templateObject18 = _taggedTemplateLiteralLoose(["\n      right: 0;\n    "]))), breakpoint("max-" + styleProps.collapseBelow, css$1(_templateObject19 || (_templateObject19 = _taggedTemplateLiteralLoose(["\n      display: none;\n    "]))))(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PageWithSidebarSidebarCollapsedWrapper = function PageWithSidebarSidebarCollapsedWrapper(styleProps) {
  return css(_templateObject20 || (_templateObject20 = _taggedTemplateLiteralLoose(["\n  &&& {\n    min-width: ", ";\n    overflow-y: scroll;\n\n    ", ";\n  }\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), styleProps.collapsedSidebarWidth, getHiddenScrollbarStyles(), breakpoint("max-" + styleProps.collapseBelow, css$1(_templateObject21 || (_templateObject21 = _taggedTemplateLiteralLoose([""]))), {
    else: css$1(_templateObject22 || (_templateObject22 = _taggedTemplateLiteralLoose(["\n      display: none;\n    "])))
  })(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PageWithSidebarDisclosure = function PageWithSidebarDisclosure(styleProps) {
  return css(_templateObject23 || (_templateObject23 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PageWithSidebarMinimize = function PageWithSidebarMinimize(styleProps) {
  return css(_templateObject24 || (_templateObject24 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PageWithHeader = function PageWithHeader(styleProps) {
  return css(_templateObject25 || (_templateObject25 = _taggedTemplateLiteralLoose(["\n  min-height: 100vh;\n  position: relative;\n\n  & .bb-PageWithSidebarSidebarExpandedWrapper {\n    top: ", ";\n  }\n\n  & .bb-PageWithSidebarSidebar {\n    height: calc(100vh - ", ");\n  }\n\n  & {\n    ", ";\n  }\n"])), styleProps.headerHeight, styleProps.headerHeight, theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PageWithHeaderHeader = function PageWithHeaderHeader(styleProps) {
  return css(_templateObject26 || (_templateObject26 = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  min-height: ", ";\n  height: ", ";\n  border-bottom: 1px solid ", ";\n  z-index: 999;\n\n  & > * {\n    height: 100%;\n  }\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), palette('background')(styleProps), styleProps.headerHeight, styleProps.headerHeight, palette('white800', {
    dark: 'gray700'
  })(styleProps), styleProps.sticky && css$1(_templateObject27 || (_templateObject27 = _taggedTemplateLiteralLoose(["\n      position: fixed;\n      width: 100%;\n    "]))), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PageWithHeaderContent = function PageWithHeaderContent(styleProps) {
  return css(_templateObject28 || (_templateObject28 = _taggedTemplateLiteralLoose(["\n  ", "\n\n  & {\n    ", ";\n  }\n"])), styleProps.sticky && css$1(_templateObject29 || (_templateObject29 = _taggedTemplateLiteralLoose(["\n      padding-top: ", ";\n    "])), styleProps.isHeaderOpen ? styleProps.headerHeight : 'unset'), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PageWithHeaderDisclosure = function PageWithHeaderDisclosure(styleProps) {
  return css(_templateObject30 || (_templateObject30 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};

function getWidth(styleProps) {
  if (styleProps.isSidebarMinimized) {
    return styleProps.minimizedSidebarWidth;
  }

  if (styleProps.isCollapsed) {
    return styleProps.collapsedSidebarWidth;
  }

  return styleProps.sidebarWidth;
}

var Page_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  PageContent: PageContent,
  PageContentWrapper: PageContentWrapper,
  PageWithSidebar: PageWithSidebar,
  PageWithSidebarContent: PageWithSidebarContent,
  PageWithSidebarSidebar: PageWithSidebarSidebar,
  PageWithSidebarSidebarExpandedWrapper: PageWithSidebarSidebarExpandedWrapper,
  PageWithSidebarSidebarCollapsedWrapper: PageWithSidebarSidebarCollapsedWrapper,
  PageWithSidebarDisclosure: PageWithSidebarDisclosure,
  PageWithSidebarMinimize: PageWithSidebarMinimize,
  PageWithHeader: PageWithHeader,
  PageWithHeaderHeader: PageWithHeaderHeader,
  PageWithHeaderContent: PageWithHeaderContent,
  PageWithHeaderDisclosure: PageWithHeaderDisclosure
});

export { Page_styles as P, PageContent as a, PageContentWrapper as b, PageWithHeaderDisclosure as c, PageWithSidebarDisclosure as d, PageWithSidebarMinimize as e, PageWithSidebar as f, PageWithSidebarSidebar as g, PageWithSidebarSidebarExpandedWrapper as h, PageWithSidebarSidebarCollapsedWrapper as i, PageWithSidebarContent as j, PageWithHeader as k, PageWithHeaderHeader as l, PageWithHeaderContent as m };
