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
import { bindFns } from '../utils/bindFns.js';
import { createComponent } from '../utils/createComponent.js';
import { createElement } from '../utils/createElement.js';
import { createHook } from '../utils/createHook.js';
import 'lodash/get';
import 'capsize';
import '../utils/getHiddenScrollbarStyles.js';
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/htmlProps.js';
import '../utils/OutsideClickHandler.js';
import { Box, useMenuItem } from 'reakit';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
import '../Icon.styles.js';
import { Icon } from '../Icon/Icon.js';
import '../Menu.styles.js';
import { b as DropdownMenuItem$1, c as DropdownMenuItemIcon } from '../DropdownMenu.styles.js';
import './DropdownMenuButton.js';
import '../Modal.styles.js';
import '../Popover.styles.js';
import './DropdownMenuPopover.js';
import './DropdownMenuState.js';
import { DropdownMenuContext } from './DropdownMenu.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var iconAfter = props.iconAfter,
      iconAfterProps = props.iconAfterProps,
      iconBefore = props.iconBefore,
      iconBeforeProps = props.iconBeforeProps,
      children = props.children,
      baseId = props.baseId,
      disabled = props.disabled,
      first = props.first,
      focusable = props.focusable,
      last = props.last,
      unregisterItem = props.unregisterItem,
      registerItem = props.registerItem,
      currentId = props.currentId,
      hide = props.hide,
      hideOnClick = props.hideOnClick,
      move = props.move,
      next = props.next,
      onClick = props.onClick,
      orientation = props.orientation,
      overrides = props.overrides,
      placement = props.placement,
      previous = props.previous,
      id = props.id,
      setCurrentId = props.setCurrentId,
      items = props.items,
      visible = props.visible,
      up = props.up,
      down = props.down,
      unstable_arrowStyles = props.unstable_arrowStyles,
      unstable_clickOnEnter = props.unstable_clickOnEnter,
      unstable_clickOnSpace = props.unstable_clickOnSpace,
      unstable_hasActiveWidget = props.unstable_hasActiveWidget,
      unstable_idCountRef = props.unstable_idCountRef,
      unstable_moves = props.unstable_moves,
      unstable_popoverStyles = props.unstable_popoverStyles,
      unstable_virtual = props.unstable_virtual,
      restProps = _objectWithoutPropertiesLoose(props, ["iconAfter", "iconAfterProps", "iconBefore", "iconBeforeProps", "children", "baseId", "disabled", "first", "focusable", "last", "unregisterItem", "registerItem", "currentId", "hide", "hideOnClick", "move", "next", "onClick", "orientation", "overrides", "placement", "previous", "id", "setCurrentId", "items", "visible", "up", "down", "unstable_arrowStyles", "unstable_clickOnEnter", "unstable_clickOnSpace", "unstable_hasActiveWidget", "unstable_idCountRef", "unstable_moves", "unstable_popoverStyles", "unstable_virtual"]);

  var _React$useContext = useContext(DropdownMenuContext),
      dropdownMenuOverrides = _React$useContext.overrides,
      dropdownMenu = _React$useContext.dropdownMenu;

  var dropdownMenuItemProps = useMenuItem(_objectSpread2({
    baseId: baseId,
    disabled: disabled,
    first: first,
    focusable: focusable,
    last: last,
    unregisterItem: unregisterItem,
    registerItem: registerItem,
    currentId: currentId,
    hide: hide,
    move: move,
    next: next,
    orientation: orientation,
    placement: placement,
    previous: previous,
    id: id,
    setCurrentId: setCurrentId,
    items: items,
    visible: visible,
    up: up,
    down: down,
    unstable_arrowStyles: unstable_arrowStyles,
    unstable_clickOnEnter: unstable_clickOnEnter,
    unstable_clickOnSpace: unstable_clickOnSpace,
    unstable_hasActiveWidget: unstable_hasActiveWidget,
    unstable_idCountRef: unstable_idCountRef,
    unstable_moves: unstable_moves,
    unstable_popoverStyles: unstable_popoverStyles,
    unstable_virtual: unstable_virtual
  }, dropdownMenu), restProps);
  var boxProps = Box$1.useProps(_objectSpread2(_objectSpread2({}, restProps), dropdownMenuItemProps));
  var className = useClassName({
    style: DropdownMenuItem$1,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      overrides: _objectSpread2(_objectSpread2({}, dropdownMenuOverrides), overrides)
    }),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var iconBeforeClassName = useClassName({
    style: DropdownMenuItemIcon,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      overrides: _objectSpread2(_objectSpread2({}, dropdownMenuOverrides), overrides),
      isBefore: true
    }),
    themeKey: themeKey,
    themeKeySuffix: 'Icon'
  });
  var iconAfterClassName = useClassName({
    style: DropdownMenuItemIcon,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      overrides: _objectSpread2(_objectSpread2({}, dropdownMenuOverrides), overrides),
      isAfter: true
    }),
    themeKey: themeKey,
    themeKeySuffix: 'Icon'
  });
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    className: className,
    children: /*#__PURE__*/createElement$1(Fragment, null, iconBefore && /*#__PURE__*/createElement$1(Icon, _extends({
      className: iconBeforeClassName,
      icon: iconBefore
    }, iconBeforeProps)), children, iconAfter && /*#__PURE__*/createElement$1(Icon, _extends({
      className: iconAfterClassName,
      icon: iconAfter
    }, iconAfterProps))),
    onClick: hideOnClick ? bindFns(onClick, hide, dropdownMenu.hide) : onClick,
    tabIndex: props.isTabbable ? boxProps.tabIndex : undefined
  });
}, {
  defaultProps: {
    hideOnClick: true,
    isTabbable: true
  },
  themeKey: 'DropdownMenu.Item'
});
var DropdownMenuItem = createComponent(function (props) {
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
    displayName: 'DropdownMenu.Item'
  },
  themeKey: 'DropdownMenu.Item'
});

export { DropdownMenuItem };
