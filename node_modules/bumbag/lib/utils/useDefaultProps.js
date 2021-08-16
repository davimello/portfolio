'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('react');
require('../Provider/ThemeContext.js');
require('classnames');
require('@emotion/css');
require('@emotion/react');
require('@emotion/styled');
var utils_useTheme = require('./useTheme.js');
require('conditional-wrap');
require('./useLocalStorage.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-c170a0e0.js');
require('./omit.js');
require('../ColorMode/utils.js');
var ColorMode_ColorModeContext = require('../ColorMode/ColorModeContext.js');
var utils_get = require('./get.js');
var utils_omitBy = require('./omitBy.js');

var isUndefined = function isUndefined(val) {
  return typeof val === 'undefined';
};

function getDefaultPropsFromTheme(theme, _ref) {
  var _theme$variants, _theme$variants$varia, _theme$modes, _theme$modes$colorMod;

  var colorMode = _ref.colorMode,
      variant = _ref.variant;
  var themeDefaultProps = (theme === null || theme === void 0 ? void 0 : theme.defaultProps) ? utils_omitBy.omitBy(theme.defaultProps, isUndefined) : {};
  var themeVariantDefaultProps = (theme === null || theme === void 0 ? void 0 : theme.variants) ? utils_omitBy.omitBy(((_theme$variants = theme.variants) === null || _theme$variants === void 0 ? void 0 : (_theme$variants$varia = _theme$variants[variant]) === null || _theme$variants$varia === void 0 ? void 0 : _theme$variants$varia.defaultProps) || {}, isUndefined) : {};
  var themeColorModeDefaultProps = (theme === null || theme === void 0 ? void 0 : theme.modes) ? utils_omitBy.omitBy(((_theme$modes = theme.modes) === null || _theme$modes === void 0 ? void 0 : (_theme$modes$colorMod = _theme$modes[colorMode]) === null || _theme$modes$colorMod === void 0 ? void 0 : _theme$modes$colorMod.defaultProps) || {}, isUndefined) : {};
  return {
    themeDefaultProps: themeDefaultProps,
    themeVariantDefaultProps: themeVariantDefaultProps,
    themeColorModeDefaultProps: themeColorModeDefaultProps
  };
}

function useDefaultProps(props, config) {
  var _config2, _config3;

  if (props === void 0) {
    props = {};
  }

  if (config === void 0) {
    config = {};
  }

  var _config = config,
      themeKey = _config.themeKey;

  var _useTheme = utils_useTheme.useTheme(),
      theme = _useTheme.theme;

  var _useColorMode = ColorMode_ColorModeContext.useColorMode(),
      globalColorMode = _useColorMode.colorMode;

  var colorMode = props.colorMode || globalColorMode;
  var configDefaultProps = ((_config2 = config) === null || _config2 === void 0 ? void 0 : _config2.defaultProps) ? utils_omitBy.omitBy((_config3 = config) === null || _config3 === void 0 ? void 0 : _config3.defaultProps, isUndefined) : {};

  var _getDefaultPropsFromT = getDefaultPropsFromTheme(utils_get.get(theme, themeKey), {
    colorMode: colorMode,
    variant: props.variant
  }),
      themeDefaultProps = _getDefaultPropsFromT.themeDefaultProps,
      themeVariantDefaultProps = _getDefaultPropsFromT.themeVariantDefaultProps,
      themeColorModeDefaultProps = _getDefaultPropsFromT.themeColorModeDefaultProps;

  var _getDefaultPropsFromT2 = getDefaultPropsFromTheme(utils_get.get(props, "overrides." + themeKey.replace('native.', '')), {
    colorMode: colorMode,
    variant: props.variant
  }),
      overridesDefaultProps = _getDefaultPropsFromT2.themeDefaultProps,
      overridesVariantDefaultProps = _getDefaultPropsFromT2.themeVariantDefaultProps,
      overridesColorModeDefaultProps = _getDefaultPropsFromT2.themeColorModeDefaultProps;

  var newProps = _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, configDefaultProps), themeDefaultProps), themeVariantDefaultProps), themeColorModeDefaultProps), overridesDefaultProps), overridesVariantDefaultProps), overridesColorModeDefaultProps), {}, {
    colorMode: colorMode
  }, utils_omitBy.omitBy(props, isUndefined));

  return {
    props: newProps,
    themeKey: themeKey
  };
}

exports.useDefaultProps = useDefaultProps;
