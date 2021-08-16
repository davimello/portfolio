import { createContext, useMemo, createElement as createElement$1 } from 'react';
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
import { Box } from 'reakit';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
import { b as Tabs$1 } from '../Tabs.styles.js';
import { useTabState } from './TabsState.js';

var TabsContext = createContext({
  mountWhenInactive: true,
  tabs: {},
  overrides: {}
});
var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var baseId = props.baseId,
      children = props.children,
      defaultSelectedId = props.defaultSelectedId,
      loop = props.loop,
      manual = props.manual,
      mountWhenInactive = props.mountWhenInactive,
      orientation = props.orientation,
      overrides = props.overrides,
      selectedId = props.selectedId,
      restProps = _objectWithoutPropertiesLoose(props, ["baseId", "children", "defaultSelectedId", "loop", "manual", "mountWhenInactive", "orientation", "overrides", "selectedId"]);

  var boxProps = Box$1.useProps(restProps);
  var tabs = useTabState({
    baseId: baseId,
    loop: loop,
    manual: manual,
    orientation: orientation,
    selectedId: defaultSelectedId
  });
  tabs = _objectSpread2(_objectSpread2({}, tabs), selectedId ? {
    currentId: selectedId,
    selectedId: selectedId
  } : {});
  var className = useClassName({
    style: Tabs$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var contextValue = useMemo(function () {
    return {
      tabs: tabs,
      mountWhenInactive: mountWhenInactive,
      overrides: overrides
    };
  }, [mountWhenInactive, overrides, tabs]);
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    className: className,
    children: /*#__PURE__*/createElement$1(TabsContext.Provider, {
      value: contextValue
    }, children)
  });
}, {
  defaultProps: {
    mountWhenInactive: true
  },
  themeKey: 'Tabs'
});
var Tabs = createComponent(function (props) {
  var tabsProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: tabsProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Tabs'
  },
  themeKey: 'Tabs'
});

export { Tabs, TabsContext };
