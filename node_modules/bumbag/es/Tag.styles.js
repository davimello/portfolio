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
import { H as palette, p as borderRadius, z as fontSize, B as fontWeight, k as theme, J as space, d as darken } from './getCSSFromStyleObject.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
var Tag = function Tag(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: ", ";\n  color: ", ";\n  display: inline-flex;\n  fill: ", ";\n  font-size: ", "rem;\n  font-weight: ", ";\n  height: 1.5rem;\n  justify-content: center;\n\n  ", "\n  ", "\n  ", "\n\n  & {\n    ", ";\n  }\n"])), palette(styleProps.palette, {
    dark: styleProps.palette === 'text' ? 'gray900' : styleProps.palette
  })(styleProps), borderRadius('default')(styleProps), palette(styleProps.palette + "Inverted")(styleProps), palette(styleProps.palette + "Inverted")(styleProps), fontSize('100')(styleProps), fontWeight('semibold')(styleProps), styleProps.variant === 'outlined' && outlinedProperties(styleProps), styleProps.variant === 'tint' && tintProperties(styleProps), styleProps.size && sizeProperties(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TagContent = function TagContent(styleProps) {
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  align-items: center;\n  height: inherit;\n  padding: 0 ", "em;\n\n  & {\n    ", ";\n  }\n"])), space(3)(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var TagClose = function TagClose(styleProps) {
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  &&& {\n    background-color: ", ";\n    color: ", ";\n    fill: ", ";\n    height: 1.5em;\n    padding: 0 ", "em;\n    margin-right: ", "em;\n    margin-left: -", "em;\n\n    &:hover {\n      background-color: ", ";\n    }\n\n    &:focus {\n      box-shadow: unset;\n    }\n\n    ", "\n\n    & {\n      ", ";\n    }\n  }\n"])), palette(styleProps.palette)(styleProps), palette(styleProps.palette + "Inverted")(styleProps), palette(styleProps.palette + "Inverted")(styleProps), space(1)(styleProps), space(1)(styleProps), space(1)(styleProps), darken(0.1, styleProps.palette)(styleProps), styleProps.variant === 'outlined' && css$1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n        background-color: unset;\n        color: ", ";\n\n        &:hover {\n          background-color: ", ";\n        }\n      "])), palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps), palette('white700')(styleProps)), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var outlinedProperties = function outlinedProperties(styleProps) {
  return css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  & {\n    background-color: unset;\n    border: 1px solid ", ";\n    color: ", ";\n    fill: ", ";\n  }\n  & {\n    ", ";\n  }\n"])), palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps), palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps), palette(styleProps.palette, {
    dark: styleProps.palette + "300"
  })(styleProps), theme(styleProps.themeKey, "styles.outlined")(styleProps));
};
var tintProperties = function tintProperties(styleProps) {
  return css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  & {\n    background-color: ", ";\n    color: ", ";\n    fill: ", ";\n  }\n  & {\n    ", ";\n  }\n"])), palette(styleProps.palette + "Tint", {
    dark: styleProps.palette === 'text' ? 'gray900' : styleProps.palette + "Shade"
  })(styleProps), palette(styleProps.palette + "TintInverted", {
    dark: styleProps.palette === 'text' ? 'white' : styleProps.palette + "ShadeInverted"
  })(styleProps), palette(styleProps.palette + "TintInverted", {
    dark: styleProps.palette === 'text' ? 'white' : styleProps.palette + "ShadeInverted"
  })(styleProps), theme(styleProps.themeKey, "styles.outlined")(styleProps));
};
var sizeProperties = function sizeProperties(styleProps) {
  var sizes = {
    default: css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n    & {\n      ", ";\n    }\n  "])), theme(styleProps.themeKey, "styles.sizes.default")(styleProps)),
    medium: css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n    font-size: 1em;\n    height: 2rem;\n    & {\n      ", ";\n    }\n  "])), theme(styleProps.themeKey, "styles.sizes.medium")(styleProps)),
    large: css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n    font-size: 1.25em;\n    height: 2.5rem;\n    & {\n      ", ";\n    }\n  "])), theme(styleProps.themeKey, "styles.sizes.large")(styleProps))
  };
  return sizes[styleProps.size];
};

var Tag_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Tag: Tag,
  TagContent: TagContent,
  TagClose: TagClose,
  outlinedProperties: outlinedProperties,
  tintProperties: tintProperties,
  sizeProperties: sizeProperties
});

export { Tag_styles as T, Tag as a, TagContent as b, TagClose as c, outlinedProperties as o, sizeProperties as s, tintProperties as t };
