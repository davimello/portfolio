'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-c170a0e0.js');

function parseIcons(icons, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      prefix = _ref.prefix,
      type = _ref.type;

  if (type === 'font-awesome') {
    var parsedIcons = icons.reduce(function (newIcons, _ref2) {
      var _objectSpread2;

      var iconName = _ref2.iconName,
          iconDetails = _ref2.icon;
      if (!iconDetails) return newIcons;
      return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, newIcons), {}, (_objectSpread2 = {}, _objectSpread2["" + (prefix || '') + iconName] = {
        viewBoxWidth: iconDetails[0],
        viewBoxHeight: iconDetails[1],
        paths: [iconDetails[4]]
      }, _objectSpread2));
    }, {});
    return parsedIcons;
  }

  if (type === 'font-awesome-standalone') {
    var _parsedIcons = icons.reduce(function (newIcons, _ref3) {
      var _objectSpread3;

      var iconName = _ref3.iconName,
          height = _ref3.height,
          width = _ref3.width,
          svgPathData = _ref3.svgPathData;
      if (!iconName) return newIcons;
      return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, newIcons), {}, (_objectSpread3 = {}, _objectSpread3["" + (prefix || '') + iconName] = {
        viewBoxWidth: width,
        viewBoxHeight: height,
        paths: [svgPathData]
      }, _objectSpread3));
    }, {});

    return _parsedIcons;
  }

  return {};
}

exports.parseIcons = parseIcons;
