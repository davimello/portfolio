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
import '../Drawer/index.js';
import { k as PageWithHeader$1, l as PageWithHeaderHeader, m as PageWithHeaderContent } from '../Page.styles.js';
import { PageContext } from './PageContext.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var children = props.children,
      defaultIsVisible = props.defaultIsVisible,
      header = props.header,
      restProps = _objectWithoutPropertiesLoose(props, ["children", "defaultIsVisible", "header"]);

  var boxProps = Box$1.useProps(restProps);

  var _React$useContext = useContext(PageContext),
      headerState = _React$useContext.header;

  var className = useClassName({
    style: PageWithHeader$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var headerClassName = useClassName({
    style: PageWithHeaderHeader,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Header'
  });
  var contentClassName = useClassName({
    style: PageWithHeaderContent,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      isHeaderOpen: headerState.isOpen
    }),
    themeKey: themeKey,
    themeKeySuffix: 'Content'
  });
  useEffect(function () {
    if (!defaultIsVisible) {
      headerState.disclosure.hide();
    }
  }, [defaultIsVisible, headerState.disclosure]);
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    className: className,
    children: /*#__PURE__*/createElement$1(Fragment, null, /*#__PURE__*/createElement$1(Disclosure.Content, _extends({
      className: headerClassName
    }, headerState.disclosure), header), /*#__PURE__*/createElement$1(Box$1, {
      className: contentClassName
    }, children))
  });
}, {
  defaultProps: {
    defaultIsVisible: true,
    headerHeight: '60px'
  },
  themeKey: 'PageWithHeader'
});
var PageWithHeader = createComponent(function (props) {
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
    displayName: 'PageWithHeader'
  },
  themeKey: 'PageWithHeader'
});

export { PageWithHeader };
