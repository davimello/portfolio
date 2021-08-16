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
import { p as borderRadius, H as palette, m as altitude, k as theme, J as space, z as fontSize, B as fontWeight } from './getCSSFromStyleObject.js';
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

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
var Dialog = function Dialog(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  border-radius: ", ";\n  background-color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), borderRadius('default')(styleProps), palette('background')(styleProps), altitude('100')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var DialogContent = function DialogContent(styleProps) {
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  padding: ", "rem;\n\n  & {\n    ", ";\n  }\n"])), space(3, 'major')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var DialogHeader = function DialogHeader(styleProps) {
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  margin-bottom: ", "rem;\n\n  & {\n    ", ";\n  }\n"])), space(2, 'major')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var DialogTitle = function DialogTitle(styleProps) {
  return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  font-size: ", "em;\n  font-weight: ", ";\n\n  & {\n    ", ";\n  }\n"])), fontSize('300')(styleProps), fontWeight('semibold')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var DialogFooter = function DialogFooter(styleProps) {
  return css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  align-items: center;\n  background-color: ", ";\n  padding: ", "rem ", "rem;\n\n  ", ";\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), palette('white600', {
    dark: 'black200'
  })(styleProps), space(5, 'minor')(styleProps), space(6, 'minor')(styleProps), styleProps.showActionButtons && styleProps.footer && css$1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n      justify-content: space-between;\n    "]))), styleProps.showActionButtons && !styleProps.footer && css$1(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n      justify-content: flex-end;\n    "]))), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var DialogClose = function DialogClose(styleProps) {
  return css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: ", "rem;\n  right: ", "rem;\n\n  & {\n    ", ";\n  }\n"])), space(2, 'major')(styleProps), space(2, 'major')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var DialogIconWrapper = function DialogIconWrapper(styleProps) {
  return css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n  margin-right: ", "rem;\n\n  & .bb-Icon {\n    vertical-align: -0.125em;\n  }\n  & .bb-CalloutContent .bb-Icon {\n    font-size: 1.25em;\n  }\n\n  & {\n    ", ";\n  }\n"])), space(2, 'major')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var DialogModal = function DialogModal(styleProps) {
  return css(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n  max-width: 600px;\n  width: 100%;\n\n  ", ";\n\n  & .bb-DialogContent {\n    max-height: 70vh;\n    overflow-y: ", ";\n\n    ", ";\n  }\n\n  & {\n    ", ";\n  }\n"])), altitude('400')(styleProps), styleProps.hasScroll ? 'scroll' : 'visible', getHiddenScrollbarStyles(), theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Dialog_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Dialog: Dialog,
  DialogContent: DialogContent,
  DialogHeader: DialogHeader,
  DialogTitle: DialogTitle,
  DialogFooter: DialogFooter,
  DialogClose: DialogClose,
  DialogIconWrapper: DialogIconWrapper,
  DialogModal: DialogModal
});

export { Dialog_styles as D, Dialog as a, DialogClose as b, DialogContent as c, DialogHeader as d, DialogTitle as e, DialogFooter as f, DialogIconWrapper as g, DialogModal as h };
