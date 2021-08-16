import { useContext, createElement as createElement$1, Fragment } from 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import 'conditional-wrap';
import '../utils/useLocalStorage.js';
import { _ as _objectSpread2, b as _objectWithoutPropertiesLoose } from '../_rollupPluginBabelHelpers.js';
import { omit } from '../utils/omit.js';
import '../ColorMode/utils.js';
import '../ColorMode/ColorModeContext.js';
import '../utils/pick.js';
import { omitCSSProps } from '../utils/cssProps.js';
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
import '../utils/getHiddenScrollbarStyles.js';
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/htmlProps.js';
import '../utils/OutsideClickHandler.js';
import { Box, useDialog } from 'reakit';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
import { c as Modal$1 } from '../Modal.styles.js';
import { ModalContext } from './ModalState.js';
import { ModalBackdrop } from './ModalBackdrop.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var modalContext = useContext(ModalContext);
  props = _objectSpread2(_objectSpread2({}, props), modalContext.modal);

  var _props = props,
      children = _props.children,
      hideBackdrop = _props.hideBackdrop,
      hide = _props.hide,
      hideOnEsc = _props.hideOnEsc,
      hideOnClickOutside = _props.hideOnClickOutside,
      modal = _props.modal,
      preventBodyScroll = _props.preventBodyScroll,
      visible = _props.visible,
      animating = _props.animating,
      animated = _props.animated,
      baseId = _props.baseId,
      unstable_initialFocusRef = _props.unstable_initialFocusRef,
      unstable_finalFocusRef = _props.unstable_finalFocusRef,
      unstable_orphan = _props.unstable_orphan,
      unstable_autoFocusOnHide = _props.unstable_autoFocusOnHide,
      unstable_autoFocusOnShow = _props.unstable_autoFocusOnShow,
      stopAnimation = _props.stopAnimation,
      htmlProps = _objectWithoutPropertiesLoose(_props, ["children", "hideBackdrop", "hide", "hideOnEsc", "hideOnClickOutside", "modal", "preventBodyScroll", "visible", "animating", "animated", "baseId", "unstable_initialFocusRef", "unstable_finalFocusRef", "unstable_orphan", "unstable_autoFocusOnHide", "unstable_autoFocusOnShow", "stopAnimation"]);

  var modalProps = useDialog({
    hide: hide,
    hideOnEsc: hideOnEsc,
    hideOnClickOutside: hideOnClickOutside,
    modal: process.env.NODE_ENV === 'test' ? false : modal,
    preventBodyScroll: preventBodyScroll,
    visible: visible,
    animating: animating,
    animated: animated,
    baseId: baseId,
    unstable_initialFocusRef: unstable_initialFocusRef,
    unstable_finalFocusRef: unstable_finalFocusRef,
    unstable_orphan: unstable_orphan,
    unstable_autoFocusOnHide: unstable_autoFocusOnHide,
    unstable_autoFocusOnShow: unstable_autoFocusOnShow,
    stopAnimation: stopAnimation
  }, htmlProps);
  htmlProps = Box$1.useProps(_objectSpread2(_objectSpread2(_objectSpread2({}, props), modalProps), !modal ? {
    wrapElement: function wrapElement(children) {
      return /*#__PURE__*/createElement$1(Box$1, null, !hideBackdrop && /*#__PURE__*/createElement$1(ModalBackdrop, null, /*#__PURE__*/createElement$1("div", null)), children);
    }
  } : {}));
  var className = useClassName({
    style: Modal$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: htmlProps.className
  });
  return _objectSpread2(_objectSpread2({}, htmlProps), {}, {
    className: className,
    children: modal ? /*#__PURE__*/createElement$1(Fragment, null, !hideBackdrop && /*#__PURE__*/createElement$1(ModalBackdrop, omitCSSProps(omit(props, 'className')), /*#__PURE__*/createElement$1("div", null)), children) : children
  });
}, {
  defaultProps: {
    placement: 'center'
  },
  themeKey: 'Modal'
});
var Modal = createComponent(function (props) {
  var modalProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: modalProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Modal'
  },
  themeKey: 'Modal'
});

export { Modal };
