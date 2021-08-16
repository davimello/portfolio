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
import { k as theme, H as palette, J as space, d as darken, z as fontSize } from './getCSSFromStyleObject.js';
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
import { a as SelectWrapper, b as Select, L as LabelWrapper, c as LabelWrapperBackground } from './Select.styles.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26;
var SelectMenu = function SelectMenu(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  position: relative;\n\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SelectMenuPopover = function SelectMenuPopover(styleProps) {
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  &&& {\n    max-width: 100%;\n    width: 100%;\n    max-height: ", ";\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n  }\n\n  & {\n    ", ";\n  }\n"])), styleProps.popoverHeight, theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SelectMenuButtonWrapper = function SelectMenuButtonWrapper(styleProps) {
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  ", ";\n\n  width: 100%;\n"])), SelectWrapper(styleProps));
};
var SelectMenuButton = function SelectMenuButton(styleProps) {
  return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  ", ";\n\n  & {\n    cursor: default;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  && {\n    position: relative;\n  }\n\n  &[aria-expanded=\"true\"] {\n    position: unset;\n  }\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), Select(styleProps), styleProps.isSelected && css$1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n      && {\n        position: unset;\n      }\n    "]))), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SelectMenuButtonIcon = function SelectMenuButtonIcon(styleProps) {
  return css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SelectMenuClearButtonWrapper = function SelectMenuClearButtonWrapper(styleProps) {
  return css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SelectMenuClearButton = function SelectMenuClearButton(styleProps) {
  return css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SelectMenuButtonIconsWrapper = function SelectMenuButtonIconsWrapper(styleProps) {
  return css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  min-width: 4rem;\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), styleProps.containLabel && css$1(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n      margin-top: -0.75em;\n    "]))), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SelectMenuButtonText = function SelectMenuButtonText(styleProps) {
  return css(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  max-width: calc(100% - 4rem);\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  & {\n    ", ";\n  }\n"])), palette(styleProps.color)(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SelectMenuStaticItem = function SelectMenuStaticItem(styleProps) {
  return css(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n  padding: ", "rem ", "rem;\n  width: 100%;\n\n  & {\n    ", ";\n  }\n"])), space(1.5)(styleProps), space(4)(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SelectMenuItem = function SelectMenuItem(styleProps) {
  return css(_templateObject13 || (_templateObject13 = _taggedTemplateLiteralLoose(["\n  &&& {\n    font-weight: 300;\n\n    &[aria-selected=\"true\"] {\n      background-color: ", ";\n      color: ", ";\n\n      &:hover {\n        background-color: ", ";\n      }\n\n      ", "\n    }\n\n    &[aria-disabled=\"true\"] {\n      color: ", ";\n    }\n  }\n\n  & {\n    ", ";\n  }\n"])), palette('primaryTint')(styleProps), palette('primary900')(styleProps), darken(0.01, 'primaryTint')(styleProps), styleProps.tabIndex === 0 && css$1(_templateObject14 || (_templateObject14 = _taggedTemplateLiteralLoose(["\n          background-color: ", ";\n        "])), darken(0.01, 'primaryTint')(styleProps)), palette('gray100')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SelectMenuItemText = function SelectMenuItemText(styleProps) {
  return css(_templateObject15 || (_templateObject15 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SelectMenuItemsWrapper = function SelectMenuItemsWrapper(styleProps) {
  return css(_templateObject16 || (_templateObject16 = _taggedTemplateLiteralLoose(["\n  &&& {\n    padding: ", "rem 0;\n    overflow-y: scroll;\n\n    ", ";\n  }\n\n  & {\n    ", ";\n  }\n"])), space(2)(styleProps), getHiddenScrollbarStyles(), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SelectMenuSearchInputWrapper = function SelectMenuSearchInputWrapper(styleProps) {
  return css(_templateObject17 || (_templateObject17 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SelectMenuSearchInput = function SelectMenuSearchInput(styleProps) {
  return css(_templateObject18 || (_templateObject18 = _taggedTemplateLiteralLoose(["\n  & > input {\n    border-color: transparent;\n    border-bottom-color: ", ";\n    border-bottom-left-radius: 0px;\n    border-bottom-right-radius: 0px;\n  }\n\n  & {\n    ", ";\n  }\n"])), palette('white800')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SelectMenuTagsWrapper = function SelectMenuTagsWrapper(styleProps) {
  return css(_templateObject19 || (_templateObject19 = _taggedTemplateLiteralLoose(["\n  background: ", ";\n  border-bottom: 1px solid ", ";\n  padding: ", "rem;\n\n  & {\n    ", ";\n  }\n"])), palette('white600')(styleProps), palette('white800')(styleProps), space(2)(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SelectMenuField = function SelectMenuField(styleProps) {
  return css(_templateObject20 || (_templateObject20 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var SelectMenuLabelWrapper = function SelectMenuLabelWrapper(styleProps) {
  return css(_templateObject21 || (_templateObject21 = _taggedTemplateLiteralLoose(["\n  ", ";\n"])), LabelWrapper(styleProps));
};
var SelectMenuLabelWrapperBackground = function SelectMenuLabelWrapperBackground(styleProps) {
  return css(_templateObject22 || (_templateObject22 = _taggedTemplateLiteralLoose(["\n  ", ";\n"])), LabelWrapperBackground(styleProps));
};
function wrapperSizeProperties(styleProps) {
  var properties = {
    small: css$1(_templateObject23 || (_templateObject23 = _taggedTemplateLiteralLoose(["\n      font-size: ", "rem;\n\n      & {\n        ", ";\n      }\n    "])), fontSize('150')(styleProps), theme(styleProps.themeKey, "styles.sizes.small")(styleProps)),
    default: css$1(_templateObject24 || (_templateObject24 = _taggedTemplateLiteralLoose(["\n      & {\n        ", ";\n      }\n    "])), theme(styleProps.themeKey, "styles.sizes.default")(styleProps)),
    medium: css$1(_templateObject25 || (_templateObject25 = _taggedTemplateLiteralLoose(["\n      font-size: ", "rem;\n\n      & {\n        ", ";\n      }\n    "])), fontSize('300')(styleProps), theme(styleProps.themeKey, "styles.sizes.medium")(styleProps)),
    large: css$1(_templateObject26 || (_templateObject26 = _taggedTemplateLiteralLoose(["\n      font-size: ", "rem;\n\n      & {\n        ", ";\n      }\n    "])), fontSize('400')(styleProps), theme(styleProps.themeKey, "styles.sizes.large")(styleProps))
  };
  return properties[styleProps.size];
}

var SelectMenu_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  SelectMenu: SelectMenu,
  SelectMenuPopover: SelectMenuPopover,
  SelectMenuButtonWrapper: SelectMenuButtonWrapper,
  SelectMenuButton: SelectMenuButton,
  SelectMenuButtonIcon: SelectMenuButtonIcon,
  SelectMenuClearButtonWrapper: SelectMenuClearButtonWrapper,
  SelectMenuClearButton: SelectMenuClearButton,
  SelectMenuButtonIconsWrapper: SelectMenuButtonIconsWrapper,
  SelectMenuButtonText: SelectMenuButtonText,
  SelectMenuStaticItem: SelectMenuStaticItem,
  SelectMenuItem: SelectMenuItem,
  SelectMenuItemText: SelectMenuItemText,
  SelectMenuItemsWrapper: SelectMenuItemsWrapper,
  SelectMenuSearchInputWrapper: SelectMenuSearchInputWrapper,
  SelectMenuSearchInput: SelectMenuSearchInput,
  SelectMenuTagsWrapper: SelectMenuTagsWrapper,
  SelectMenuField: SelectMenuField,
  SelectMenuLabelWrapper: SelectMenuLabelWrapper,
  SelectMenuLabelWrapperBackground: SelectMenuLabelWrapperBackground,
  wrapperSizeProperties: wrapperSizeProperties
});

export { SelectMenu_styles as S, SelectMenu as a, SelectMenuButtonWrapper as b, SelectMenuPopover as c, SelectMenuItemsWrapper as d, SelectMenuLabelWrapper as e, SelectMenuLabelWrapperBackground as f, SelectMenuButton as g, SelectMenuButtonText as h, SelectMenuButtonIconsWrapper as i, SelectMenuButtonIcon as j, SelectMenuSearchInputWrapper as k, SelectMenuSearchInput as l, SelectMenuTagsWrapper as m, SelectMenuItemText as n, SelectMenuClearButtonWrapper as o, SelectMenuClearButton as p, SelectMenuStaticItem as q, SelectMenuItem as r, SelectMenuField as s, wrapperSizeProperties as w };
