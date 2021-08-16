import { useContext, useMemo, createElement } from 'react';
import './ThemeContext.js';
import 'classnames';
import '@emotion/css';
import { ThemeContext, Global, css } from '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import 'conditional-wrap';
import '../utils/useLocalStorage.js';
import { a as _taggedTemplateLiteralLoose } from '../_rollupPluginBabelHelpers.js';
import '../utils/omit.js';
import { getColorModesCSSVariables } from '../ColorMode/utils.js';
import { useColorMode } from '../ColorMode/ColorModeContext.js';
import '../utils/pick.js';
import '../utils/cssProps.js';
import 'lodash/kebabCase';
import 'tinycolor2';
import { H as palette, v as font, k as theme, z as fontSize, D as lineHeight } from '../getCSSFromStyleObject.js';
import '../utils/isFunction.js';
import '../utils/get.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/OutsideClickHandler.js';

var _templateObject;
function GlobalStyles() {
  var _theme = useContext(ThemeContext);

  var _useColorMode = useColorMode(),
      colorMode = _useColorMode.colorMode;

  var styleProps = {
    colorMode: colorMode,
    theme: _theme
  };
  var colorModesCSSVariables = useMemo(function () {
    return getColorModesCSSVariables(_theme);
  }, [_theme]);
  return /*#__PURE__*/createElement(Global, {
    styles: css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n        ", "\n\n        html,\n        body {\n          background-color: ", ";\n          box-sizing: border-box;\n          font-family: ", ";\n          font-size: ", "px;\n          line-height: ", ";\n          margin: 0;\n          padding: 0;\n          -webkit-font-smoothing: antialiased;\n          text-rendering: optimizeLegibility;\n          color: ", ";\n          fill: ", ";\n        }\n\n        & input:focus {\n          outline: unset;\n        }\n\n        *,\n        *::before,\n        *::after {\n          box-sizing: inherit;\n        }\n\n        ", ";\n\n        ", ";\n      "])), colorModesCSSVariables, palette('background')(styleProps), font('default')(styleProps), theme('global', 'fontSize')(styleProps) * fontSize('200')(styleProps), lineHeight('default')(styleProps), palette('text')(styleProps), palette('text')(styleProps), font('importUrls')(styleProps) && font('importUrls')(styleProps).map(function (url) {
      return "@import url('" + url + "');";
    }).join(''), theme('global.styles.base')(styleProps))
  });
}

export { GlobalStyles };
