import 'react';
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
import { _ as _objectSpread2 } from '../_rollupPluginBabelHelpers.js';
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
import '../Box/Box.js';
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
import '../Drawer/index.js';
import { d as PageWithSidebarDisclosure$1 } from '../Page.styles.js';
import './PageContext.js';
import { usePage } from './usePage.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var page = usePage();
  var htmlProps = Disclosure.useProps(_objectSpread2(_objectSpread2({}, props), page.isCollapsed ? page.sidebar.drawer : page.sidebar.disclosure));
  var className = useClassName({
    style: PageWithSidebarDisclosure$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: htmlProps.className
  });
  return _objectSpread2(_objectSpread2({}, htmlProps), {}, {
    className: className
  });
}, {
  themeKey: 'PageWithSidebar.Disclosure'
});
var PageWithSidebarDisclosure = createComponent(function (props) {
  var PageWithSidebarDisclosureProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: PageWithSidebarDisclosureProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'PageWithSidebar.Disclosure'
  },
  defaultProps: {
    use: 'button'
  },
  themeKey: 'PageWithSidebar.Disclosure'
});

export { PageWithSidebarDisclosure };
