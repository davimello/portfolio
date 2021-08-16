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
import { k as theme, H as palette, J as space, z as fontSize } from './getCSSFromStyleObject.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
var Rating = function Rating(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  align-items: center;\n\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var RatingItem = function RatingItem(styleProps) {
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  display: inline-flex;\n  transition: color 0.1s, transform 0.2s;\n\n  ", "\n\n  ", "\n\n  &:not(:first-of-type) {\n    margin-left: ", "rem;\n  }\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), styleProps.isActive ? palette(styleProps.color)(styleProps) : palette('white900', {
    dark: 'gray800'
  })(styleProps), !styleProps.disabled && css$1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n      &:hover {\n        transform: scale(1.2);\n      }\n      &:hover:active {\n        transform: scale(1.1);\n      }\n    "]))), styleProps.disabled && !styleProps.isStatic && css$1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n      cursor: not-allowed;\n      opacity: 0.5;\n    "]))), space(1)(styleProps), getSizeAttributes(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};

function getSizeAttributes(styleProps) {
  var sizeAttributes = {
    small: css$1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n      font-size: ", "rem;\n\n      & {\n        ", ";\n      }\n    "])), fontSize('300')(styleProps), theme(styleProps.themeKey, "styles.sizes.small")(styleProps)),
    default: css$1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n      font-size: ", "rem;\n\n      & {\n        ", ";\n      }\n    "])), fontSize('400')(styleProps), theme(styleProps.themeKey, "styles.sizes.default")(styleProps)),
    medium: css$1(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n      font-size: ", "rem;\n\n      & {\n        ", ";\n      }\n    "])), fontSize('500')(styleProps), theme(styleProps.themeKey, "styles.sizes.medium")(styleProps)),
    large: css$1(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n      font-size: ", "rem;\n\n      & {\n        ", ";\n      }\n    "])), fontSize('600')(styleProps), theme(styleProps.themeKey, "styles.sizes.large")(styleProps))
  };
  return sizeAttributes[styleProps.size || 'default'];
}

var Rating_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Rating: Rating,
  RatingItem: RatingItem
});

export { Rating_styles as R, Rating as a, RatingItem as b };
