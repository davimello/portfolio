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
import { H as palette, z as fontSize, B as fontWeight, k as theme } from './getCSSFromStyleObject.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var Badge = function Badge(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  align-items: center;\n  border-radius: 1rem;\n  display: inline-flex;\n  justify-content: center;\n  background-color: ", ";\n  box-sizing: content-box;\n  padding: 0 0.4em;\n  color: ", ";\n  fill: ", ";\n  font-size: ", "rem;\n  font-weight: ", ";\n  height: 1.2em;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  & {\n    ", ";\n  }\n"])), palette(styleProps.palette)(styleProps), palette(styleProps.palette + "Inverted")(styleProps), palette(styleProps.palette + "Inverted")(styleProps), fontSize('100')(styleProps), fontWeight('semibold')(styleProps), !styleProps.children && css$1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n      height: 1em;\n      width: 1em;\n      padding: 0px;\n    "]))), styleProps.isAttached && css$1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n      position: absolute;\n      top: -0.5em;\n      right: -0.5em;\n\n      & {\n        ", ";\n      }\n    "])), theme(styleProps.themeKey, "styles.attached")(styleProps)), getSizeAttributes(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};

function getSizeAttributes(styleProps) {
  var sizeAttributes = {
    default: css$1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n      & {\n        ", ";\n      }\n    "])), theme(styleProps.themeKey, "styles.sizes.default")(styleProps)),
    medium: css$1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n      & {\n        font-size: ", "rem;\n        ", ";\n      }\n    "])), fontSize('200')(styleProps), theme(styleProps.themeKey, "styles.sizes.medium")(styleProps)),
    large: css$1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n      & {\n        font-size: ", "rem;\n        ", ";\n      }\n    "])), fontSize('300')(styleProps), theme(styleProps.themeKey, "styles.sizes.large")(styleProps))
  };
  return sizeAttributes[styleProps.size || 'default'];
}

var Badge_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Badge: Badge
});

export { Badge_styles as B, Badge as a };
