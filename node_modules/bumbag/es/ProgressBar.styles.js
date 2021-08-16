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
import { p as borderRadius, H as palette, k as theme } from './getCSSFromStyleObject.js';
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
var ProgressBar = function ProgressBar(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  border-radius: ", ";\n  overflow: hidden;\n  width: 100%;\n  height: 1rem;\n  background-color: ", ";\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), borderRadius('default')(styleProps), palette(styleProps.color + "Tint", {
    dark: styleProps.color + "Shade"
  })(styleProps), getSizeAttributes(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var ProgressBarIndicator = function ProgressBarIndicator(styleProps) {
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  height: 100%;\n  background-color: ", ";\n  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  width: ", "%;\n\n  & {\n    ", ";\n  }\n"])), palette(styleProps.color)(styleProps), styleProps.value || '0', theme(styleProps.themeKey, "styles.base")(styleProps));
};

function getSizeAttributes(styleProps) {
  var sizeAttributes = {
    small: css$1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n      height: 0.6rem;\n\n      & {\n        ", ";\n      }\n    "])), theme(styleProps.themeKey, "styles.sizes.small")(styleProps)),
    default: css$1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n      & {\n        ", ";\n      }\n    "])), theme(styleProps.themeKey, "styles.sizes.default")(styleProps)),
    medium: css$1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n      height: 1.5rem;\n\n      & {\n        ", ";\n      }\n    "])), theme(styleProps.themeKey, "styles.sizes.medium")(styleProps)),
    large: css$1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n      height: 2rem;\n\n      & {\n        ", ";\n      }\n    "])), theme(styleProps.themeKey, "styles.sizes.large")(styleProps))
  };
  return sizeAttributes[styleProps.size || 'default'];
}

var ProgressBar_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ProgressBar: ProgressBar,
  ProgressBarIndicator: ProgressBarIndicator
});

export { ProgressBar_styles as P, ProgressBar as a, ProgressBarIndicator as b };
