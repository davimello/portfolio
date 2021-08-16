import { useMemo } from 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import { useTheme } from './useTheme.js';
import 'conditional-wrap';
import './useLocalStorage.js';
import '../_rollupPluginBabelHelpers.js';
import './omit.js';
import '../ColorMode/utils.js';
import { useColorMode } from '../ColorMode/ColorModeContext.js';
import './pick.js';
import { pickCSSProps } from './cssProps.js';
import 'lodash/kebabCase';
import 'tinycolor2';
import { g as getCSSFromStyleObject } from '../getCSSFromStyleObject.js';
import './isFunction.js';
import './get.js';

function useStyle(props, _ref) {
  var disableCSSProps = _ref.disableCSSProps;

  var _useTheme = useTheme(),
      theme = _useTheme.theme;

  var _useColorMode = useColorMode(),
      globalColorMode = _useColorMode.colorMode;

  var cssProps = pickCSSProps(props);
  var colorMode = props.colorMode || globalColorMode;
  return useMemo(function () {
    return getCSSFromStyleObject(cssProps, theme, colorMode, {
      fromProps: true,
      disableCSSProps: disableCSSProps
    });
  }, [cssProps, theme, colorMode, disableCSSProps]);
}

export { useStyle };
