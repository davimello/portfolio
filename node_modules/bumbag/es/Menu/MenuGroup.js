import { useContext, createElement as createElement$1, Fragment } from 'react';
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
import { useUniqueId } from '../utils/uniqueId.js';
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
import { e as MenuGroup$1, f as MenuGroupTitle } from '../Menu.styles.js';
import '../Rover.styles.js';
import '../Rover/RoverState.js';
import '../Rover/Rover.js';
import '../Rover/index.js';
import { MenuContext } from './Menu.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var children = props.children,
      overrides = props.overrides,
      title = props.title,
      restProps = _objectWithoutPropertiesLoose(props, ["children", "overrides", "title"]);

  var boxProps = Box$1.useProps(restProps);

  var _React$useContext = useContext(MenuContext),
      menuOverrides = _React$useContext.overrides;

  var className = useClassName({
    style: MenuGroup$1,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      overrides: _objectSpread2(_objectSpread2({}, menuOverrides), overrides)
    }),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var titleClassName = useClassName({
    style: MenuGroupTitle,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      overrides: _objectSpread2(_objectSpread2({}, menuOverrides), overrides)
    }),
    themeKey: themeKey,
    themeKeySuffix: 'Title',
    prevClassName: boxProps.className
  });
  var titleId = useUniqueId();
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    'aria-labelledby': titleId,
    role: 'group',
    className: className,
    children: /*#__PURE__*/createElement$1(Fragment, null, title && /*#__PURE__*/createElement$1(Box$1, {
      className: titleClassName,
      id: titleId
    }, title), children)
  });
}, {
  themeKey: 'Menu.Group'
});
var MenuGroup = createComponent(function (props) {
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
    displayName: 'Menu.Group'
  },
  themeKey: 'Menu.Group'
});

export { MenuGroup };
