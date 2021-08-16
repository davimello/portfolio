import { useContext, createElement as createElement$1, Fragment } from 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import 'conditional-wrap';
import '../utils/useLocalStorage.js';
import { b as _objectWithoutPropertiesLoose, _ as _objectSpread2, d as _extends } from '../_rollupPluginBabelHelpers.js';
import '../utils/omit.js';
import '../ColorMode/utils.js';
import '../ColorMode/ColorModeContext.js';
import '../utils/pick.js';
import '../utils/cssProps.js';
import 'lodash/kebabCase';
import 'tinycolor2';
import '../getCSSFromStyleObject.js';
import '../utils/isFunction.js';
import '../utils/get.js';
import '../utils/useStyle.js';
import '../utils/parseIcons.js';
import '../utils/useIcon.js';
import '../utils/omitBy.js';
import '../utils/useDefaultProps.js';
import 'lodash/uniq';
import { useClassName } from '../utils/useClassName.js';
import 'reakit/Id';
import '../utils/mergeRefs.js';
import 'deepmerge';
import 'lodash/set';
import { createComponent } from '../utils/createComponent.js';
import { createElement } from '../utils/createElement.js';
import { createHook } from '../utils/createHook.js';
import 'lodash/get';
import 'capsize';
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/htmlProps.js';
import '../utils/OutsideClickHandler.js';
import { Box } from 'reakit';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
import '../Icon.styles.js';
import { Icon } from '../Icon/Icon.js';
import { b as MenuItem$1, c as MenuItemIcon } from '../Menu.styles.js';
import '../Rover.styles.js';
import '../Rover/RoverState.js';
import '../Rover/Rover.js';
import { Rover } from '../Rover/index.js';
import { MenuContext } from './Menu.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var children = props.children,
      iconAfter = props.iconAfter,
      iconAfterProps = props.iconAfterProps,
      iconBefore = props.iconBefore,
      iconBeforeProps = props.iconBeforeProps,
      overrides = props.overrides,
      restProps = _objectWithoutPropertiesLoose(props, ["children", "iconAfter", "iconAfterProps", "iconBefore", "iconBeforeProps", "overrides"]);

  var _React$useContext = useContext(MenuContext),
      rover = _React$useContext.rover,
      menuOverrides = _React$useContext.overrides;

  var boxProps = Box$1.useProps(restProps);
  var roverProps = Rover.useProps(_objectSpread2(_objectSpread2({}, rover), boxProps));
  var className = useClassName({
    style: MenuItem$1,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      overrides: _objectSpread2(_objectSpread2({}, menuOverrides), overrides)
    }),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var iconBeforeClassName = useClassName({
    style: MenuItemIcon,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      overrides: _objectSpread2(_objectSpread2({}, menuOverrides), overrides),
      isBefore: true
    }),
    themeKey: themeKey,
    themeKeySuffix: 'Icon'
  });
  var iconAfterClassName = useClassName({
    style: MenuItemIcon,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      overrides: _objectSpread2(_objectSpread2({}, menuOverrides), overrides),
      isAfter: true
    }),
    themeKey: themeKey,
    themeKeySuffix: 'Icon'
  });
  return _objectSpread2(_objectSpread2({}, roverProps), {}, {
    className: className,
    role: 'menuitem',
    children: /*#__PURE__*/createElement$1(Fragment, null, iconBefore && /*#__PURE__*/createElement$1(Icon, _extends({
      className: iconBeforeClassName,
      icon: iconBefore
    }, iconBeforeProps)), children, iconAfter && /*#__PURE__*/createElement$1(Icon, _extends({
      className: iconAfterClassName,
      icon: iconAfter
    }, iconAfterProps)))
  });
}, {
  themeKey: 'Menu.Item'
});
var MenuItem = createComponent(function (props) {
  var textProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: textProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Menu.Item'
  },
  themeKey: 'Menu.Item'
});

export { MenuItem };
