import 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import { useTheme } from './useTheme.js';
import '../_rollupPluginBabelHelpers.js';
import { parseIcons } from './parseIcons.js';

function useIcon(_ref) {
  var _theme$icons$iconName, _theme$icons, _theme$icons$iconName2, _theme$icons$icons, _theme$icons2;

  var initialIcon = _ref.icon,
      type = _ref.type;

  var _useTheme = useTheme(),
      theme = _useTheme.theme; // @ts-ignore


  var icon = (_theme$icons$iconName = theme === null || theme === void 0 ? void 0 : (_theme$icons = theme.icons) === null || _theme$icons === void 0 ? void 0 : (_theme$icons$iconName2 = _theme$icons.iconNames) === null || _theme$icons$iconName2 === void 0 ? void 0 : _theme$icons$iconName2[initialIcon]) !== null && _theme$icons$iconName !== void 0 ? _theme$icons$iconName : initialIcon;
  var icons = (_theme$icons$icons = theme === null || theme === void 0 ? void 0 : (_theme$icons2 = theme.icons) === null || _theme$icons2 === void 0 ? void 0 : _theme$icons2.icons) !== null && _theme$icons$icons !== void 0 ? _theme$icons$icons : {};
  var iconInfo = icons[icon];

  if (type) {
    // @ts-ignore
    var parsedIcons = parseIcons([icon], {
      type: type
    });
    iconInfo = Object.entries(parsedIcons)[0][1];
  } else if (typeof icon === 'object') {
    iconInfo = icon;
  }

  var _ref2 = iconInfo || {},
      _ref2$viewBoxWidth = _ref2.viewBoxWidth,
      viewBoxWidth = _ref2$viewBoxWidth === void 0 ? 0 : _ref2$viewBoxWidth,
      _ref2$viewBoxHeight = _ref2.viewBoxHeight,
      viewBoxHeight = _ref2$viewBoxHeight === void 0 ? 0 : _ref2$viewBoxHeight,
      _ref2$props = _ref2.props,
      props = _ref2$props === void 0 ? {} : _ref2$props,
      _ref2$paths = _ref2.paths,
      paths = _ref2$paths === void 0 ? [] : _ref2$paths,
      _ref2$tree = _ref2.tree,
      tree = _ref2$tree === void 0 ? [] : _ref2$tree;

  return {
    viewBoxHeight: viewBoxHeight,
    viewBoxWidth: viewBoxWidth,
    props: props,
    paths: paths,
    tree: tree
  };
}

export { useIcon };
