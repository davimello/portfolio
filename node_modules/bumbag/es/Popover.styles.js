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
import { H as palette, p as borderRadius, m as altitude, k as theme, J as space, B as fontWeight } from './getCSSFromStyleObject.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';
import { g as getAnimatedAttributes } from './Modal.styles.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20;
var Popover = function Popover(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  border-radius: ", ";\n  max-width: 350px;\n  z-index: 19900410;\n\n  ", ";\n\n  ", "\n\n  &[hidden] {\n    display: inherit !important;\n    visibility: hidden !important;\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", " 0px 0px 0px 3px;\n  }\n\n  & {\n    ", ";\n  }\n"])), palette('background')(styleProps), borderRadius('default')(styleProps), altitude('200')(styleProps), getPlacementAttributes(styleProps), palette('primary200', {
    dark: 'primary'
  })(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PopoverContent = function PopoverContent(styleProps) {
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  padding: ", "rem ", "rem;\n\n  & {\n    ", ";\n  }\n"])), space(2, 'minor')(styleProps), space(3, 'minor')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PopoverHeader = function PopoverHeader(styleProps) {
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ", ";\n  padding: ", "rem ", "rem;\n\n  & {\n    ", ";\n  }\n"])), palette('white800', {
    dark: 'gray700'
  })(styleProps), space(2, 'minor')(styleProps), space(3, 'minor')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PopoverTitle = function PopoverTitle(styleProps) {
  return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  font-weight: ", ";\n\n  & {\n    ", ";\n  }\n"])), fontWeight('semibold')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PopoverFooter = function PopoverFooter(styleProps) {
  return css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid ", ";\n  padding: ", "rem ", "rem;\n\n  ", ";\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), palette('white800', {
    dark: 'gray700'
  })(styleProps), space(2, 'minor')(styleProps), space(3, 'minor')(styleProps), styleProps.showActionButtons && styleProps.footer && css$1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n      justify-content: space-between;\n    "]))), styleProps.showActionButtons && !styleProps.footer && css$1(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n      justify-content: flex-end;\n    "]))), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PopoverClose = function PopoverClose(styleProps) {
  return css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PopoverBackdrop = function PopoverBackdrop(styleProps) {
  return css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n  background-color: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 19900409;\n\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), getAnimatedAttributes({})(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PopoverDisclosure = function PopoverDisclosure(styleProps) {
  return css(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var PopoverArrow = function PopoverArrow(styleProps) {
  return css(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n  display: grid;\n  overflow: hidden;\n\n  & > svg {\n    background-color: transparent;\n\n    & .stroke {\n      fill: ", ";\n    }\n    & .fill {\n      fill: ", ";\n    }\n  }\n\n  & {\n    ", ";\n  }\n"])), palette('white800', {
    dark: 'gray700'
  })(styleProps), palette('background')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var getPlacementAttributes = function getPlacementAttributes(styleProps) {
  var placementAttributes = {
    // @ts-ignore
    top: css$1(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), getAnimatedAttributes({
      prevTransformValue: styleProps.prevTransformValue,
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'bottom',
      defaultExpand: 'bottom',
      slideOffset: (styleProps.gutter || '10') + "px"
    })(styleProps), theme(styleProps.themeKey, "styles.placements.top")(styleProps)),
    // @ts-ignore
    bottom: css$1(_templateObject13 || (_templateObject13 = _taggedTemplateLiteralLoose(["\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), getAnimatedAttributes({
      prevTransformValue: styleProps.prevTransformValue,
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'top',
      defaultExpand: 'top',
      slideOffset: (styleProps.gutter || '10') + "px"
    })(styleProps), theme(styleProps.themeKey, "styles.placements.bottom")(styleProps)),
    // @ts-ignore
    left: css$1(_templateObject14 || (_templateObject14 = _taggedTemplateLiteralLoose(["\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), getAnimatedAttributes({
      prevTransformValue: styleProps.prevTransformValue,
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'right',
      defaultExpand: 'right',
      slideOffset: (styleProps.gutter || '10') + "px"
    })(styleProps), theme(styleProps.themeKey, "styles.placements.left")(styleProps)),
    // @ts-ignore
    right: css$1(_templateObject15 || (_templateObject15 = _taggedTemplateLiteralLoose(["\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), getAnimatedAttributes({
      prevTransformValue: styleProps.prevTransformValue,
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'left',
      defaultExpand: 'left',
      slideOffset: (styleProps.gutter || '10') + "px"
    })(styleProps), theme(styleProps.themeKey, "styles.placements.right")(styleProps)),
    // @ts-ignore
    'top-start': css$1(_templateObject16 || (_templateObject16 = _taggedTemplateLiteralLoose(["\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), getAnimatedAttributes({
      prevTransformValue: styleProps.prevTransformValue,
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'bottom',
      defaultExpand: 'bottom',
      slideOffset: (styleProps.gutter || '10') + "px"
    })(styleProps), theme(styleProps.themeKey, "styles.placements.topStart")(styleProps)),
    // @ts-ignore
    'top-end': css$1(_templateObject17 || (_templateObject17 = _taggedTemplateLiteralLoose(["\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), getAnimatedAttributes({
      prevTransformValue: styleProps.prevTransformValue,
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'bottom',
      defaultExpand: 'bottom',
      slideOffset: (styleProps.gutter || '10') + "px"
    })(styleProps), theme(styleProps.themeKey, "styles.placements.topEnd")(styleProps)),
    // @ts-ignore
    'bottom-end': css$1(_templateObject18 || (_templateObject18 = _taggedTemplateLiteralLoose(["\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), getAnimatedAttributes({
      prevTransformValue: styleProps.prevTransformValue,
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'top',
      defaultExpand: 'top',
      slideOffset: (styleProps.gutter || '10') + "px"
    })(styleProps), theme(styleProps.themeKey, "styles.placements.bottomEnd")(styleProps)),
    // @ts-ignore
    'bottom-start': css$1(_templateObject19 || (_templateObject19 = _taggedTemplateLiteralLoose(["\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), getAnimatedAttributes({
      prevTransformValue: styleProps.prevTransformValue,
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'top',
      defaultExpand: 'top',
      slideOffset: (styleProps.gutter || '10') + "px"
    })(styleProps), theme(styleProps.themeKey, "styles.placements.bottomStart")(styleProps))
  };
  return css$1(_templateObject20 || (_templateObject20 = _taggedTemplateLiteralLoose(["\n    ", ";\n  "])), placementAttributes[styleProps.placement || 'center']);
};

var Popover_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Popover: Popover,
  PopoverContent: PopoverContent,
  PopoverHeader: PopoverHeader,
  PopoverTitle: PopoverTitle,
  PopoverFooter: PopoverFooter,
  PopoverClose: PopoverClose,
  PopoverBackdrop: PopoverBackdrop,
  PopoverDisclosure: PopoverDisclosure,
  PopoverArrow: PopoverArrow,
  getPlacementAttributes: getPlacementAttributes
});

export { Popover_styles as P, Popover as a, PopoverClose as b, PopoverContent as c, PopoverHeader as d, PopoverTitle as e, PopoverFooter as f, PopoverArrow as g, PopoverBackdrop as h, PopoverDisclosure as i, getPlacementAttributes as j };
