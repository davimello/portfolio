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
import { k as theme, H as palette } from './getCSSFromStyleObject.js';
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
var Avatar = function Avatar(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  width: 60px;\n  height: 60px;\n  overflow: hidden;\n  object-fit: cover;\n\n  ", "\n\n  ", "\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), styleProps.variant === 'circle' && css$1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n      border-radius: 50%;\n\n      & {\n        ", ";\n      }\n    "])), theme(styleProps.themeKey, "circle.base")(styleProps)), styleProps.initials && css$1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n      background-color: ", ";\n      color: ", ";\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    "])), palette(styleProps.palette)(styleProps), palette(styleProps.palette + "Inverted")(styleProps)), getSizeAttributes(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};

function getSizeAttributes(styleProps) {
  var sizeAttributes = {
    small: css$1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n      width: 40px;\n      height: 40px;\n\n      & {\n        ", ";\n      }\n    "])), theme(styleProps.themeKey, "styles.sizes.small")(styleProps)),
    default: css$1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n      width: 60px;\n      height: 60px;\n      font-size: 24px;\n\n      & {\n        ", ";\n      }\n    "])), theme(styleProps.themeKey, "styles.sizes.default")(styleProps)),
    medium: css$1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n      width: 80px;\n      height: 80px;\n      font-size: 36px;\n\n      & {\n        ", ";\n      }\n    "])), theme(styleProps.themeKey, "styles.sizes.medium")(styleProps)),
    large: css$1(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n      width: 100px;\n      height: 100px;\n      font-size: 48px;\n\n      & {\n        ", ";\n      }\n    "])), theme(styleProps.themeKey, "styles.sizes.large")(styleProps))
  };
  return sizeAttributes[styleProps.size] || css$1(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n      width: ", ";\n      height: ", ";\n    "])), styleProps.size, styleProps.size);
}

var Avatar_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Avatar: Avatar
});

export { Avatar_styles as A, Avatar as a };
