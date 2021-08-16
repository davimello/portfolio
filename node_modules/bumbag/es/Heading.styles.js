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
import { v as font, B as fontWeight, k as theme, L as breakpoint } from './getCSSFromStyleObject.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import { getCapsizeStyles } from './utils/getCapsizeStyles.js';
import './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
var Heading = function Heading(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  font-family: ", ";\n  font-weight: ", ";\n\n  ", ";\n\n  h1& {\n    ", ";\n\n    & {\n      ", ";\n    }\n\n    ", ";\n  }\n  h2& {\n    ", ";\n\n    & {\n      ", ";\n    }\n\n    ", ";\n  }\n  h3& {\n    ", ";\n\n    & {\n      ", ";\n    }\n\n    ", ";\n  }\n  h4& {\n    ", ";\n\n    & {\n      ", ";\n    }\n\n    ", ";\n  }\n  h5& {\n    ", ";\n\n    & {\n      ", ";\n    }\n\n    ", ";\n  }\n  h6& {\n    ", ";\n\n    & {\n      ", ";\n    }\n\n    ", ";\n  }\n\n  & {\n    ", ";\n  }\n\n  & .bb-Icon {\n    vertical-align: -0.125em;\n  }\n\n  & {\n    ", ";\n  }\n"])), font('heading')(styleProps) || font('default')(styleProps), fontWeight('bold')(styleProps), getCapsizeStyles({
    lineHeight: '100',
    fontFamily: 'heading',
    includeBottomGap: true
  })(styleProps), getCapsizeStyles({
    themeKey: 'Heading.h1',
    lineHeight: '100',
    fontFamily: 'heading',
    includeBottomGap: true
  })(styleProps), theme(styleProps.themeKey, "h1.styles.base")(styleProps), styleProps.shrinkBelow && breakpoint("max-" + styleProps.shrinkBelow, css$1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n          ", ";\n\n          & {\n            ", ";\n          }\n        "])), getCapsizeStyles({
    themeKey: 'Heading.h1',
    lineHeight: '100',
    fontFamily: 'heading',
    includeBottomGap: true,
    shrink: true
  })(styleProps), theme(styleProps.themeKey, "h1.styles.shrinked")(styleProps)))(styleProps), getCapsizeStyles({
    themeKey: 'Heading.h2',
    lineHeight: '100',
    fontFamily: 'heading',
    includeBottomGap: true
  })(styleProps), theme(styleProps.themeKey, "h2.styles.base")(styleProps), styleProps.shrinkBelow && breakpoint("max-" + styleProps.shrinkBelow, css$1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n          ", ";\n\n          & {\n            ", ";\n          }\n        "])), getCapsizeStyles({
    themeKey: 'Heading.h2',
    lineHeight: '100',
    fontFamily: 'heading',
    includeBottomGap: true,
    shrink: true
  })(styleProps), theme(styleProps.themeKey, "h2.styles.shrinked")(styleProps)))(styleProps), getCapsizeStyles({
    themeKey: 'Heading.h3',
    lineHeight: '100',
    fontFamily: 'heading',
    includeBottomGap: true
  })(styleProps), theme(styleProps.themeKey, "h3.styles.base")(styleProps), styleProps.shrinkBelow && breakpoint("max-" + styleProps.shrinkBelow, css$1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n          ", ";\n\n          & {\n            ", ";\n          }\n        "])), getCapsizeStyles({
    themeKey: 'Heading.h3',
    lineHeight: '100',
    fontFamily: 'heading',
    includeBottomGap: true,
    shrink: true
  })(styleProps), theme(styleProps.themeKey, "h3.styles.shrinked")(styleProps)))(styleProps), getCapsizeStyles({
    themeKey: 'Heading.h4',
    lineHeight: '100',
    fontFamily: 'heading',
    includeBottomGap: true
  })(styleProps), theme(styleProps.themeKey, "h4.styles.base")(styleProps), styleProps.shrinkBelow && breakpoint("max-" + styleProps.shrinkBelow, css$1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n          ", ";\n\n          & {\n            ", ";\n          }\n        "])), getCapsizeStyles({
    themeKey: 'Heading.h4',
    lineHeight: '100',
    fontFamily: 'heading',
    includeBottomGap: true,
    shrink: true
  })(styleProps), theme(styleProps.themeKey, "h4.styles.shrinked")(styleProps)))(styleProps), getCapsizeStyles({
    themeKey: 'Heading.h5',
    lineHeight: '100',
    fontFamily: 'heading',
    includeBottomGap: true
  })(styleProps), theme(styleProps.themeKey, "h5.styles.base")(styleProps), styleProps.shrinkBelow && breakpoint("max-" + styleProps.shrinkBelow, css$1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n          ", ";\n\n          & {\n            ", ";\n          }\n        "])), getCapsizeStyles({
    themeKey: 'Heading.h5',
    lineHeight: '100',
    fontFamily: 'heading',
    includeBottomGap: true,
    shrink: true
  })(styleProps), theme(styleProps.themeKey, "h5.styles.shrinked")(styleProps)))(styleProps), getCapsizeStyles({
    themeKey: 'Heading.h6',
    lineHeight: '100',
    fontFamily: 'heading',
    includeBottomGap: true
  })(styleProps), theme(styleProps.themeKey, "h6.styles.base")(styleProps), styleProps.shrinkBelow && breakpoint("max-" + styleProps.shrinkBelow, css$1(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n          & {\n            ", ";\n          }\n        "])), theme(styleProps.themeKey, "h6.styles.shrinked")(styleProps)))(styleProps), styleProps.isSubHeading && getSubHeadingProperties(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var getSubHeadingProperties = function getSubHeadingProperties(styleProps) {
  return css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  font-weight: ", ";\n\n  & {\n    ", ";\n  }\n"])), fontWeight('semibold')(styleProps), theme(styleProps.themeKey, "subHeading.styles.base")(styleProps));
};

var Heading_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Heading: Heading,
  getSubHeadingProperties: getSubHeadingProperties
});

export { Heading_styles as H, Heading as a, getSubHeadingProperties as g };
