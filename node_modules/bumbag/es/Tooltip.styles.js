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
import { p as borderRadius, H as palette, z as fontSize, B as fontWeight, J as space, k as theme } from './getCSSFromStyleObject.js';
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

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
var TooltipContent = function TooltipContent(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  background: black;\n  border-radius: ", ";\n  color: ", ";\n  opacity: 0.8;\n  hyphens: auto;\n  font-size: ", "rem;\n  font-weight: ", ";\n  padding: ", "rem ", "rem;\n  z-index: 19900411;\n\n  ", "\n\n  &[hidden] {\n    display: inherit !important;\n    visibility: hidden !important;\n  }\n\n  & {\n    ", ";\n  }\n"])), borderRadius('1')(styleProps), palette('white')(styleProps), fontSize('100')(styleProps), fontWeight('normal')(styleProps), space(1)(styleProps), space(2)(styleProps), getPlacementAttributes(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TooltipReference = function TooltipReference(styleProps) {
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TooltipArrow = function TooltipArrow(styleProps) {
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  display: grid;\n  overflow: hidden;\n\n  & > svg {\n    background-color: transparent;\n\n    & .stroke {\n      fill: black;\n    }\n    & .fill {\n      fill: black;\n    }\n  }\n\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var getPlacementAttributes = function getPlacementAttributes(styleProps) {
  var placementAttributes = {
    // @ts-ignore
    top: css$1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), getAnimatedAttributes({
      prevTransformValue: styleProps.prevTransformValue,
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'bottom',
      defaultExpand: 'bottom',
      slideOffset: (styleProps.gutter || '10') + "px"
    })(styleProps), theme(styleProps.themeKey, "styles.placements.top")(styleProps)),
    // @ts-ignore
    bottom: css$1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), getAnimatedAttributes({
      prevTransformValue: styleProps.prevTransformValue,
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'top',
      defaultExpand: 'top',
      slideOffset: (styleProps.gutter || '10') + "px"
    })(styleProps), theme(styleProps.themeKey, "styles.placements.bottom")(styleProps)),
    // @ts-ignore
    left: css$1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), getAnimatedAttributes({
      prevTransformValue: styleProps.prevTransformValue,
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'right',
      defaultExpand: 'right',
      slideOffset: (styleProps.gutter || '10') + "px"
    })(styleProps), theme(styleProps.themeKey, "styles.placements.left")(styleProps)),
    // @ts-ignore
    right: css$1(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), getAnimatedAttributes({
      prevTransformValue: styleProps.prevTransformValue,
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'left',
      defaultExpand: 'left',
      slideOffset: (styleProps.gutter || '10') + "px"
    })(styleProps), theme(styleProps.themeKey, "styles.placements.right")(styleProps)),
    // @ts-ignore
    'top-start': css$1(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), getAnimatedAttributes({
      prevTransformValue: styleProps.prevTransformValue,
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'bottom',
      defaultExpand: 'bottom',
      slideOffset: (styleProps.gutter || '10') + "px"
    })(styleProps), theme(styleProps.themeKey, "styles.placements.topStart")(styleProps)),
    // @ts-ignore
    'top-end': css$1(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), getAnimatedAttributes({
      prevTransformValue: styleProps.prevTransformValue,
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'bottom',
      defaultExpand: 'bottom',
      slideOffset: (styleProps.gutter || '10') + "px"
    })(styleProps), theme(styleProps.themeKey, "styles.placements.topEnd")(styleProps)),
    // @ts-ignore
    'bottom-end': css$1(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), getAnimatedAttributes({
      prevTransformValue: styleProps.prevTransformValue,
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'top',
      defaultExpand: 'top',
      slideOffset: (styleProps.gutter || '10') + "px"
    })(styleProps), theme(styleProps.themeKey, "styles.placements.bottomEnd")(styleProps)),
    // @ts-ignore
    'bottom-start': css$1(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n      ", ";\n\n      & {\n        ", ";\n      }\n    "])), getAnimatedAttributes({
      prevTransformValue: styleProps.prevTransformValue,
      transformX: '0px',
      transformY: '0px',
      defaultSlide: 'top',
      defaultExpand: 'top',
      slideOffset: (styleProps.gutter || '10') + "px"
    })(styleProps), theme(styleProps.themeKey, "styles.placements.bottomStart")(styleProps))
  };
  return css$1(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n    ", ";\n  "])), placementAttributes[styleProps.placement || 'center']);
};

var Tooltip_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  TooltipContent: TooltipContent,
  TooltipReference: TooltipReference,
  TooltipArrow: TooltipArrow,
  getPlacementAttributes: getPlacementAttributes
});

export { Tooltip_styles as T, TooltipContent as a, TooltipReference as b, TooltipArrow as c, getPlacementAttributes as g };
