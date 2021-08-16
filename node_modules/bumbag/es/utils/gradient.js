import 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import { css } from '@emotion/react';
import '@emotion/styled';
import './useTheme.js';
import 'conditional-wrap';
import './useLocalStorage.js';
import { _ as _objectSpread2, a as _taggedTemplateLiteralLoose } from '../_rollupPluginBabelHelpers.js';
import './omit.js';
import '../ColorMode/utils.js';
import '../ColorMode/ColorModeContext.js';
import './pick.js';
import { cssProps } from './cssProps.js';
import 'lodash/kebabCase';
import 'tinycolor2';
import { H as palette, L as breakpoint } from '../getCSSFromStyleObject.js';
import './isFunction.js';
import './get.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

function getValue(value, defaultValue) {
  var newValue = value || defaultValue;

  if (typeof newValue !== 'object') {
    newValue = {
      default: newValue
    };
  }

  return newValue;
}

function gradient(opts) {
  return function (styleProps) {
    if (!opts.from && !opts.to) return '';
    var direction = getValue(opts.direction, 'right');
    var from = getValue(opts.from, 'rgba(0,0,0,0)');
    var fromAt = getValue(opts.fromAt, undefined);
    var via = getValue(opts.via, undefined);
    var viaAt = getValue(opts.viaAt, undefined);
    var to = getValue(opts.to, 'rgba(0,0,0,0)');
    var toAt = getValue(opts.toAt, undefined);
    var breakpoints = Object.keys(opts).reduce(function (breakpoints, stop) {
      if (typeof opts[stop] !== 'object') return breakpoints;
      var keys = Object.keys(opts[stop] || {});
      return _objectSpread2(_objectSpread2({}, breakpoints), keys.reduce(function (breakpoints, bp) {
        var _objectSpread2$1;

        return _objectSpread2(_objectSpread2({}, breakpoints), {}, (_objectSpread2$1 = {}, _objectSpread2$1[bp] = true, _objectSpread2$1));
      }, {}));
    }, {
      default: true
    }); // @ts-ignore

    return Object.keys(breakpoints).reduce(function (style, bp) {
      var fromColor = palette(from[bp] || from['default'])(styleProps);
      var fromAtStop = fromAt[bp] || fromAt['default'];
      var viaColor = via[bp] || via['default'] ? palette(via[bp] || via['default'])(styleProps) : undefined;
      var viaAtStop = viaAt[bp] || viaAt['default'];
      var toColor = palette(to[bp] || from['default'])(styleProps);
      var toAtStop = toAt[bp] || toAt['default']; // eslint-disable-next-line

      var gradientCss = css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["background-image: linear-gradient(to ", ",", "", ",", " ", "", ");"])), direction[bp] || direction['default'], fromColor, fromAtStop ? " " + fromAtStop : '', viaColor ? "" + viaColor + (viaAtStop ? " " + viaAtStop : '') + "," : '', toColor, toAtStop ? " " + toAtStop : '');

      if (bp === 'default') {
        return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n          ", ";\n          ", ";\n        "])), style, gradientCss);
      }

      return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n        ", ";\n        ", ";\n      "])), style, breakpoint(bp, css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n            ", ";\n          "])), gradientCss))(styleProps));
    }, '');
  };
}

gradient.text = function (styleProps) {
  if (styleProps.gradientFrom || styleProps.gradientTo) {
    return css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n      background-clip: text;\n      color: rgba(0, 0, 0, 0);\n    "])));
  }

  return '';
};

function getGradientStyles(opts) {
  return function (styleProps) {
    var defaultStyles = gradient(opts)(styleProps);
    if (!defaultStyles) return css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose([""])));
    var pseudoStyles = Object.entries(styleProps).reduce(function (styles, _ref) {
      var prop = _ref[0],
          value = _ref[1];

      if (prop[0] === '_') {
        var pseudoSelector = cssProps[prop];
        return css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n          ", "\n          ", " {\n            ", ";\n          }\n        "])), styles, pseudoSelector, gradient({
          // @ts-ignore
          direction: value.gradientDirection || opts.direction,
          // @ts-ignore
          from: value.gradientFrom || opts.from,
          // @ts-ignore
          via: value.gradientVia || opts.via,
          // @ts-ignore
          to: value.gradientTo || opts.to
        })(styleProps));
      }

      return styles;
    }, css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose([""]))));
    return css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n      ", ";\n      ", ";\n    "])), defaultStyles, pseudoStyles);
  };
}

export { getGradientStyles, gradient };
