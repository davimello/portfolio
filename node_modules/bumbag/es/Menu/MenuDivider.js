import { useContext } from 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import 'conditional-wrap';
import '../utils/useLocalStorage.js';
import { b as _objectWithoutPropertiesLoose, _ as _objectSpread2 } from '../_rollupPluginBabelHelpers.js';
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
import { Box, useMenuSeparator } from 'reakit';
import '../Box.styles.js';
import '../Box/Box.js';
import { d as MenuDivider$1 } from '../Menu.styles.js';
import '../Divider.styles.js';
import { Divider } from '../Divider/Divider.js';
import '../Rover.styles.js';
import '../Rover/RoverState.js';
import '../Rover/Rover.js';
import '../Rover/index.js';
import { MenuContext } from './Menu.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var orientation = props.orientation,
      overrides = props.overrides,
      restProps = _objectWithoutPropertiesLoose(props, ["orientation", "overrides"]);

  var _React$useContext = useContext(MenuContext),
      menuOverrides = _React$useContext.overrides;

  var MenuDividerProps = useMenuSeparator({
    orientation: orientation
  }, restProps);
  var dividerProps = Divider.useProps(_objectSpread2(_objectSpread2({}, restProps), MenuDividerProps));
  var className = useClassName({
    style: MenuDivider$1,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      overrides: _objectSpread2(_objectSpread2({}, menuOverrides), {}, {
        overrides: overrides
      })
    }),
    themeKey: themeKey,
    prevClassName: dividerProps.className
  });
  return _objectSpread2(_objectSpread2({}, dividerProps), {}, {
    role: 'separator',
    className: className
  });
}, {
  themeKey: 'Menu.Divider'
});
var MenuDivider = createComponent(function (props) {
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
    displayName: 'Menu.Divider'
  },
  themeKey: 'Menu.Divider'
});

export { MenuDivider };
