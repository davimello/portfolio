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
import { Box, useTab } from 'reakit';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
import { a as Tab$1 } from '../Tabs.styles.js';
import './TabsState.js';
import { TabsContext } from './Tabs.js';
import { TabsListContext } from './TabsList.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var baseId = props.baseId,
      currentId = props.currentId,
      disabled = props.disabled,
      first = props.first,
      focusable = props.focusable,
      id = props.id,
      last = props.last,
      manual = props.manual,
      next = props.next,
      orientation = props.orientation,
      overrides = props.overrides,
      panels = props.panels,
      previous = props.previous,
      registerItem = props.registerItem,
      selectedId = props.selectedId,
      select = props.select,
      tabId = props.tabId,
      setCurrentId = props.setCurrentId,
      items = props.items,
      up = props.up,
      down = props.down,
      unregisterItem = props.unregisterItem,
      unstable_clickOnEnter = props.unstable_clickOnEnter,
      unstable_clickOnSpace = props.unstable_clickOnSpace,
      unstable_hasActiveWidget = props.unstable_hasActiveWidget,
      unstable_idCountRef = props.unstable_idCountRef,
      unstable_moves = props.unstable_moves,
      unstable_virtual = props.unstable_virtual,
      htmlProps = _objectWithoutPropertiesLoose(props, ["baseId", "currentId", "disabled", "first", "focusable", "id", "last", "manual", "next", "orientation", "overrides", "panels", "previous", "registerItem", "selectedId", "select", "tabId", "setCurrentId", "items", "up", "down", "unregisterItem", "unstable_clickOnEnter", "unstable_clickOnSpace", "unstable_hasActiveWidget", "unstable_idCountRef", "unstable_moves", "unstable_virtual"]);

  var _React$useContext = useContext(TabsContext),
      tabOverrides = _React$useContext.overrides,
      tabs = _React$useContext.tabs;

  var tabProps = useTab(_objectSpread2({
    baseId: baseId,
    currentId: currentId,
    disabled: disabled,
    first: first,
    focusable: focusable,
    id: tabId,
    last: last,
    manual: manual,
    next: next,
    orientation: orientation,
    panels: panels,
    previous: previous,
    registerItem: registerItem,
    selectedId: selectedId,
    select: select,
    setCurrentId: setCurrentId,
    items: items,
    up: up,
    down: down,
    unregisterItem: unregisterItem,
    unstable_clickOnEnter: unstable_clickOnEnter,
    unstable_clickOnSpace: unstable_clickOnSpace,
    unstable_hasActiveWidget: unstable_hasActiveWidget,
    unstable_idCountRef: unstable_idCountRef,
    unstable_moves: unstable_moves,
    unstable_virtual: unstable_virtual
  }, tabs), htmlProps);
  var boxProps = Box$1.useProps(_objectSpread2(_objectSpread2({}, htmlProps), tabProps));
  var tabsListContext = useContext(TabsListContext);
  var className = useClassName({
    style: Tab$1,
    styleProps: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, tabs), props), tabsListContext), {}, {
      overrides: _objectSpread2(_objectSpread2(_objectSpread2({}, tabOverrides), tabsListContext.overrides), overrides)
    }),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    className: className
  });
}, {
  themeKey: 'Tabs.Tab'
});
var Tab = createComponent(function (props) {
  var tabProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: tabProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Tabs.Tab'
  },
  themeKey: 'Tabs.Tab'
});

export { Tab };
