import { useContext, useEffect, createElement as createElement$1, Fragment } from 'react';
import '../utils/debounceAnimationFrame.js';
import '../utils/useViewportHeight.js';
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
import '../utils/omitBy.js';
import '../utils/useDefaultProps.js';
import 'lodash/uniq';
import { useClassName } from '../utils/useClassName.js';
import '../utils/getMediaQueryList.js';
import '../utils/useBreakpoint.js';
import 'reakit/Id';
import '../utils/mergeRefs.js';
import 'deepmerge';
import 'lodash/set';
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
import { Box } from 'reakit';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
import '../Disclosure.styles.js';
import '../Disclosure/DisclosureState.js';
import '../Disclosure/Disclosure.js';
import '../Disclosure/DisclosureContent.js';
import { Disclosure } from '../Disclosure/index.js';
import '../Modal.styles.js';
import '../Modal/ModalState.js';
import '../Modal/ModalBackdrop.js';
import '../Modal/Modal.js';
import '../Modal/ModalDisclosure.js';
import '../Modal/index.js';
import '../Drawer.styles.js';
import '../Drawer/Drawer.js';
import '../Drawer/DrawerDisclosure.js';
import '../Drawer/DrawerState.js';
import { Drawer } from '../Drawer/index.js';
import { f as PageWithSidebar$1, g as PageWithSidebarSidebar, h as PageWithSidebarSidebarExpandedWrapper, i as PageWithSidebarSidebarCollapsedWrapper, j as PageWithSidebarContent } from '../Page.styles.js';
import { PageContext } from './PageContext.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var children = props.children,
      collapsedSidebarProps = props.collapsedSidebarProps,
      defaultIsVisible = props.defaultIsVisible,
      expandedSidebarProps = props.expandedSidebarProps,
      overrides = props.overrides,
      sidebar = props.sidebar,
      sidebarPlacement = props.sidebarPlacement,
      restProps = _objectWithoutPropertiesLoose(props, ["children", "collapsedSidebarProps", "defaultIsVisible", "expandedSidebarProps", "overrides", "sidebar", "sidebarPlacement"]);

  var boxProps = Box$1.useProps(_objectSpread2({}, restProps));

  var _React$useContext = useContext(PageContext),
      collapseBelow = _React$useContext.collapseBelow,
      isCollapsed = _React$useContext.isCollapsed,
      sidebarState = _React$useContext.sidebar;

  var className = useClassName({
    style: PageWithSidebar$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var sidebarClassName = useClassName({
    style: PageWithSidebarSidebar,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      collapseBelow: collapseBelow,
      isCollapsed: isCollapsed,
      isSidebarMinimized: sidebarState.isMinimized
    }),
    themeKey: themeKey,
    themeKeySuffix: 'Sidebar'
  });
  var sidebarExpandedWrapperClassName = useClassName({
    style: PageWithSidebarSidebarExpandedWrapper,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      collapseBelow: collapseBelow
    }),
    themeKey: themeKey,
    themeKeySuffix: 'SidebarExpandedWrapper'
  });
  var sidebarCollapsedWrapperClassName = useClassName({
    style: PageWithSidebarSidebarCollapsedWrapper,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      collapseBelow: collapseBelow
    }),
    themeKey: themeKey,
    themeKeySuffix: 'SidebarCollapsedWrapper'
  });
  var contentClassName = useClassName({
    style: PageWithSidebarContent,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      collapseBelow: collapseBelow,
      isCollapsed: isCollapsed,
      isSidebarMinimized: sidebarState.isMinimized,
      isSidebarOpen: sidebarState.isOpen
    }),
    themeKey: themeKey,
    themeKeySuffix: 'Content'
  }); //////////////////////////////////////////

  useEffect(function () {
    if (!defaultIsVisible) {
      sidebarState.disclosure.hide();
    }
  }, [defaultIsVisible, sidebarState.disclosure]); //////////////////////////////////////////

  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    className: className,
    children: /*#__PURE__*/createElement$1(Fragment, null, /*#__PURE__*/createElement$1(Box$1, null, /*#__PURE__*/createElement$1(Drawer, _extends({
      className: sidebarCollapsedWrapperClassName,
      overrides: overrides,
      slide: true,
      fade: true,
      placement: sidebarPlacement
    }, collapsedSidebarProps, sidebarState.drawer, {
      animating: false
    }), /*#__PURE__*/createElement$1(Box$1, {
      className: sidebarClassName,
      overrides: overrides
    }, isCollapsed ? sidebar : null))), /*#__PURE__*/createElement$1(Disclosure.Content, _extends({
      overrides: overrides
    }, expandedSidebarProps, sidebarState.disclosure), /*#__PURE__*/createElement$1(Box$1, {
      className: sidebarExpandedWrapperClassName,
      overrides: overrides
    }, /*#__PURE__*/createElement$1(Box$1, {
      className: sidebarClassName,
      overrides: overrides
    }, !isCollapsed ? sidebar : null))), /*#__PURE__*/createElement$1(Box$1, {
      className: contentClassName,
      overrides: overrides
    }, children))
  });
}, {
  defaultProps: {
    collapsedSidebarProps: {},
    expandedSidebarProps: {},
    defaultIsVisible: true,
    minimizedSidebarWidth: '60px',
    sidebarWidth: '250px',
    sidebarPlacement: 'left',
    collapsedSidebarWidth: '320px'
  },
  themeKey: 'PageWithSidebar'
});
var PageWithSidebar = createComponent(function (props) {
  var pageWithSidebarProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: pageWithSidebarProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'PageWithSidebar'
  },
  themeKey: 'PageWithSidebar'
});

export { PageWithSidebar };
