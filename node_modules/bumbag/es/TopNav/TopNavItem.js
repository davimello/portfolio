import { useContext, isValidElement, cloneElement, createElement as createElement$1 } from 'react';
import '../Provider/ThemeContext.js';
import classNames from 'classnames';
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
import { bindFns } from '../utils/bindFns.js';
import { createComponent } from '../utils/createComponent.js';
import { createElement } from '../utils/createElement.js';
import { createHook } from '../utils/createHook.js';
import 'lodash/get';
import 'capsize';
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/htmlProps.js';
import '../utils/OutsideClickHandler.js';
import { Box, useButton } from 'reakit';
import '../Box.styles.js';
import '../Box/Box.js';
import '../List.styles.js';
import '../List/List.js';
import { ListItem } from '../List/ListItem.js';
import '../List/index.js';
import '../Navigation.styles.js';
import '../Navigation/Navigation.js';
import { c as TopNavItem$1 } from '../TopNav.styles.js';
import { TopNavContext } from './TopNav.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var children = props.children,
      href = props.href,
      isActive = props.isActive,
      navId = props.navId,
      onClick = props.onClick,
      overrides = props.overrides,
      restProps = _objectWithoutPropertiesLoose(props, ["children", "href", "isActive", "navId", "onClick", "overrides"]);

  var htmlProps;

  if (navId) {
    htmlProps = useButton(restProps);
  }

  htmlProps = ListItem.useProps(_objectSpread2(_objectSpread2({}, htmlProps), restProps));

  var _React$useContext = useContext(TopNavContext),
      onChangeSelectedId = _React$useContext.onChangeSelectedId,
      selectedId = _React$useContext.selectedId,
      topNavOverrides = _React$useContext.overrides;

  var className = useClassName({
    style: TopNavItem$1,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      isActive: typeof isActive === 'boolean' ? isActive : selectedId === navId,
      overrides: _objectSpread2(_objectSpread2({}, topNavOverrides), overrides)
    }),
    themeKey: themeKey
  });
  return _objectSpread2(_objectSpread2({}, htmlProps), {}, {
    'aria-current': isActive || selectedId === navId ? 'page' : undefined,
    className: classNames(htmlProps.className, href || navId && isValidElement(children) ? undefined : className),
    onClick: href || navId && isValidElement(children) ? undefined : bindFns(onClick, function () {
      return onChangeSelectedId(navId);
    }),
    children: href || navId && isValidElement(children) ?
    /*
    // @ts-ignore */
    cloneElement(href ? /*#__PURE__*/createElement$1("a", {
      href: href
    }, children) : children, {
      className: className,
      onClick: bindFns(onClick, function () {
        return onChangeSelectedId(navId);
      })
    }) : children
  });
}, {
  defaultProps: {
    palette: 'primary',
    variant: 'default'
  },
  themeKey: 'TopNav.Item'
});
var TopNavItem = createComponent(function (props) {
  var TopNavItemProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: TopNavItemProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'TopNav.Item'
  },
  defaultProps: {
    use: 'li'
  },
  themeKey: 'TopNav.Item'
});

export { TopNavItem };
