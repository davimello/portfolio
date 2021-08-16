import { createContext, useContext, useMemo, createElement as createElement$1 } from 'react';
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
import { Box, useTabList } from 'reakit';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
import { c as TabsList$1 } from '../Tabs.styles.js';
import './TabsState.js';
import { TabsContext } from './Tabs.js';

var TabsListContext = createContext({});
var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var align = props.align,
      baseId = props.baseId,
      children = props.children,
      id = props.id,
      variant = props.variant,
      overrides = props.overrides,
      palette = props.palette,
      disabled = props.disabled,
      focusable = props.focusable,
      first = props.first,
      last = props.last,
      move = props.move,
      currentId = props.currentId,
      wrap = props.wrap,
      groups = props.groups,
      items = props.items,
      setCurrentId = props.setCurrentId,
      orientation = props.orientation,
      unstable_virtual = props.unstable_virtual,
      unstable_moves = props.unstable_moves,
      htmlProps = _objectWithoutPropertiesLoose(props, ["align", "baseId", "children", "id", "variant", "overrides", "palette", "disabled", "focusable", "first", "last", "move", "currentId", "wrap", "groups", "items", "setCurrentId", "orientation", "unstable_virtual", "unstable_moves"]);

  var _React$useContext = useContext(TabsContext),
      tabOverrides = _React$useContext.overrides,
      tabs = _React$useContext.tabs;

  var tabsListProps = useTabList(_objectSpread2({
    baseId: baseId,
    disabled: disabled,
    focusable: focusable,
    first: first,
    last: last,
    move: move,
    currentId: currentId,
    orientation: orientation,
    wrap: wrap,
    groups: groups,
    items: items,
    setCurrentId: setCurrentId,
    unstable_virtual: unstable_virtual,
    unstable_moves: unstable_moves
  }, tabs), htmlProps);
  var boxProps = Box$1.useProps(_objectSpread2(_objectSpread2({}, htmlProps), tabsListProps));
  var className = useClassName({
    style: TabsList$1,
    styleProps: _objectSpread2(_objectSpread2(_objectSpread2({}, tabs), props), {}, {
      overrides: _objectSpread2(_objectSpread2({}, tabOverrides), overrides)
    }),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var contextValue = useMemo(function () {
    return {
      align: align,
      variant: variant,
      overrides: overrides,
      palette: palette
    };
  }, [align, variant, overrides, palette]);
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    className: className,
    children: /*#__PURE__*/createElement$1(TabsListContext.Provider, {
      value: contextValue
    }, children)
  });
}, {
  defaultProps: {
    align: 'left',
    variant: 'default',
    palette: 'primary'
  },
  themeKey: 'Tabs.List'
});
var TabsList = createComponent(function (props) {
  var tabsListProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: tabsListProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Tabs.List'
  },
  themeKey: 'Tabs.List'
});

export { TabsList, TabsListContext };
