import { createContext, useState, useCallback, useMemo, createElement as createElement$1 } from 'react';
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
import '../Box/Box.js';
import '../Navigation.styles.js';
import { Navigation } from '../Navigation/Navigation.js';
import { a as TopNav$1 } from '../TopNav.styles.js';

var TopNavContext = createContext({
  onChangeSelectedId: function onChangeSelectedId() {},
  selectedId: undefined,
  overrides: {}
});
var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var children = props.children,
      defaultSelectedId = props.defaultSelectedId,
      onChange = props.onChange,
      overrides = props.overrides,
      _selectedId = props.selectedId,
      restProps = _objectWithoutPropertiesLoose(props, ["children", "defaultSelectedId", "onChange", "overrides", "selectedId"]);

  var navigationProps = Navigation.useProps(restProps);
  var className = useClassName({
    style: TopNav$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: navigationProps.className
  });

  var _React$useState = useState(defaultSelectedId || ''),
      selectedId = _React$useState[0],
      setSelectedId = _React$useState[1];

  var handleChangeSelectedId = useCallback(function (id) {
    if (onChange) {
      onChange(id);
    } else {
      setSelectedId(id || '');
    }
  }, [onChange]);
  var contextValue = useMemo(function () {
    return {
      onChangeSelectedId: handleChangeSelectedId,
      selectedId: _selectedId || selectedId,
      overrides: overrides
    };
  }, [_selectedId, handleChangeSelectedId, overrides, selectedId]);
  return _objectSpread2(_objectSpread2({}, navigationProps), {}, {
    className: className,
    children: /*#__PURE__*/createElement$1(TopNavContext.Provider, {
      value: contextValue
    }, children)
  });
}, {
  themeKey: 'TopNav'
});
var TopNav = createComponent(function (props) {
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
    displayName: 'TopNav'
  },
  themeKey: 'TopNav'
});

export { TopNav, TopNavContext };
