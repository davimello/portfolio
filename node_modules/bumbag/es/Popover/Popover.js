import { createContext, useContext, useMemo, useCallback, createElement as createElement$1, Fragment } from 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import 'conditional-wrap';
import '../utils/useLocalStorage.js';
import { _ as _objectSpread2, b as _objectWithoutPropertiesLoose, d as _extends } from '../_rollupPluginBabelHelpers.js';
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
import { useUniqueId } from '../utils/uniqueId.js';
import '../utils/palette.js';
import '../utils/mergeRefs.js';
import 'deepmerge';
import 'lodash/set';
import { createComponent } from '../utils/createComponent.js';
import { createElement } from '../utils/createElement.js';
import { createHook } from '../utils/createHook.js';
import 'lodash/get';
import 'capsize';
import '../utils/getCapsizeStyles.js';
import '../utils/getHiddenScrollbarStyles.js';
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/htmlProps.js';
import '../utils/OutsideClickHandler.js';
import '../theme/palette.js';
import '../ActionButtons.styles.js';
import { Box, usePopover, usePopoverArrow } from 'reakit';
import '../Button.styles.js';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
import '../Flex.styles.js';
import { Flex } from '../Flex/Flex.js';
import '../Icon.styles.js';
import '../Icon/Icon.js';
import '../Text.styles.js';
import '../Text/Text.js';
import '../Text/TextBlock.js';
import '../Text/TextInline.js';
import { Text } from '../Text/index.js';
import '../Spinner.styles.js';
import '../Spinner/Spinner.js';
import '../Button/Button.js';
import 'reakit/VisuallyHidden';
import '../Button/ButtonClose.js';
import { Button } from '../Button/index.js';
import '../Set.styles.js';
import '../Set/Set.js';
import { ActionButtons } from '../ActionButtons/ActionButtons.js';
import '../Modal.styles.js';
import { a as Popover$1, b as PopoverClose, c as PopoverContent$1, d as PopoverHeader$1, e as PopoverTitle$1, f as PopoverFooter$1, g as PopoverArrow$1 } from '../Popover.styles.js';
import { PopoverStateContext } from './PopoverState.js';

var PopoverContext = createContext({});
var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var popoverContext = useContext(PopoverStateContext);
  props = _objectSpread2(_objectSpread2({}, props), popoverContext.popover);

  var _props = props,
      _props$actionButtonsP = _props.actionButtonsProps,
      actionButtonsProps = _props$actionButtonsP === void 0 ? {} : _props$actionButtonsP,
      _props$arrowProps = _props.arrowProps,
      arrowProps = _props$arrowProps === void 0 ? {} : _props$arrowProps,
      _props$closeButtonPro = _props.closeButtonProps,
      closeButtonProps = _props$closeButtonPro === void 0 ? {} : _props$closeButtonPro,
      footer = _props.footer,
      hasArrow = _props.hasArrow,
      hide = _props.hide,
      hideOnEsc = _props.hideOnEsc,
      hideOnClickOutside = _props.hideOnClickOutside,
      modal = _props.modal,
      onClickClose = _props.onClickClose,
      overrides = _props.overrides,
      preventBodyScroll = _props.preventBodyScroll,
      showActionButtons = _props.showActionButtons,
      showCloseButton = _props.showCloseButton,
      standalone = _props.standalone,
      title = _props.title,
      usePortal = _props.usePortal,
      visible = _props.visible,
      animating = _props.animating,
      animated = _props.animated,
      baseId = _props.baseId,
      unstable_initialFocusRef = _props.unstable_initialFocusRef,
      unstable_finalFocusRef = _props.unstable_finalFocusRef,
      unstable_orphan = _props.unstable_orphan,
      unstable_autoFocusOnHide = _props.unstable_autoFocusOnHide,
      unstable_autoFocusOnShow = _props.unstable_autoFocusOnShow,
      unstable_popoverRef = _props.unstable_popoverRef,
      unstable_popoverStyles = _props.unstable_popoverStyles,
      stopAnimation = _props.stopAnimation,
      restProps = _objectWithoutPropertiesLoose(_props, ["actionButtonsProps", "arrowProps", "closeButtonProps", "footer", "hasArrow", "hide", "hideOnEsc", "hideOnClickOutside", "modal", "onClickClose", "overrides", "preventBodyScroll", "showActionButtons", "showCloseButton", "standalone", "title", "usePortal", "visible", "animating", "animated", "baseId", "unstable_initialFocusRef", "unstable_finalFocusRef", "unstable_orphan", "unstable_autoFocusOnHide", "unstable_autoFocusOnShow", "unstable_popoverRef", "unstable_popoverStyles", "stopAnimation"]);

  var popoverProps = usePopover({
    hide: hide,
    hideOnEsc: hideOnEsc,
    hideOnClickOutside: hideOnClickOutside,
    modal: process.env.NODE_ENV === 'test' ? false : usePortal || modal,
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
    unstable_popoverRef: unstable_popoverRef,
    unstable_popoverStyles: unstable_popoverStyles,
    stopAnimation: stopAnimation
  }, restProps);
  var boxProps = Box$1.useProps(_objectSpread2(_objectSpread2({}, restProps), popoverProps));
  var className = useClassName({
    style: Popover$1,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      prevTransformValue: unstable_popoverStyles.transform
    }),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var popoverCloseClassName = useClassName({
    style: PopoverClose,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Close',
    prevClassName: closeButtonProps.className
  });
  var titleId = useUniqueId();
  var descriptionId = useUniqueId();
  var context = useMemo(function () {
    return _objectSpread2({
      descriptionId: descriptionId,
      titleId: titleId
    }, props);
  }, [descriptionId, props, titleId]);
  var handleClickClose = useCallback(function (e) {
    onClickClose && onClickClose(e);
    hide && hide();
  }, [hide, onClickClose]);
  var children = /*#__PURE__*/createElement$1(PopoverContext.Provider, {
    value: context
  }, standalone ? props.children : /*#__PURE__*/createElement$1(Fragment, null, hasArrow && /*#__PURE__*/createElement$1(PopoverArrow, _extends({
    overrides: overrides // @ts-ignore
    ,
    placement: props.placement // @ts-ignore
    ,
    unstable_arrowRef: props.unstable_arrowRef // @ts-ignore
    ,
    unstable_arrowStyles: props.unstable_arrowStyles
  }, arrowProps)), title && /*#__PURE__*/createElement$1(PopoverHeader, {
    overrides: overrides
  }, typeof title === 'string' ? /*#__PURE__*/createElement$1(PopoverTitle, {
    overrides: overrides
  }, title) : title, showCloseButton && /*#__PURE__*/createElement$1(Button.Close, _extends({
    className: popoverCloseClassName,
    onClick: handleClickClose,
    size: "small"
  }, closeButtonProps))), /*#__PURE__*/createElement$1(PopoverContent, {
    overrides: overrides
  }, props.children), (footer || showActionButtons) && /*#__PURE__*/createElement$1(PopoverFooter, {
    overrides: overrides
  }, footer && /*#__PURE__*/createElement$1(Box$1, null, footer), showActionButtons && /*#__PURE__*/createElement$1(Box$1, null, /*#__PURE__*/createElement$1(ActionButtons, _extends({}, actionButtonsProps, {
    onClickCancel: actionButtonsProps.onClickCancel || hide,
    size: "small"
  }))))));
  return _objectSpread2(_objectSpread2({
    'aria-describedby': props.children ? descriptionId : undefined,
    'aria-labelledby': props.title ? titleId : undefined
  }, boxProps), {}, {
    children: children,
    className: className
  });
}, {
  defaultProps: {
    duration: '150ms'
  },
  themeKey: 'Popover'
});
var Popover = createComponent(function (props) {
  var popoverProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: popoverProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Popover'
  },
  themeKey: 'Popover'
}); //////////////////////////////

var usePopoverContentProps = createHook(function (props, _ref2) {
  var themeKey = _ref2.themeKey;
  var boxProps = Box$1.useProps(props);
  var contextProps = useContext(PopoverContext);
  var className = useClassName({
    style: PopoverContent$1,
    styleProps: _objectSpread2(_objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _objectSpread2(_objectSpread2({
    id: props.id || contextProps.descriptionId
  }, boxProps), {}, {
    className: className
  });
}, {
  themeKey: 'Popover.Content'
});
var PopoverContent = createComponent(function (props) {
  var calloutContentProps = usePopoverContentProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: calloutContentProps
  });
}, {
  attach: {
    useProps: usePopoverContentProps,
    displayName: 'Popover.Content'
  },
  themeKey: 'Popover.Content'
}); //////////////////////////////

var usePopoverHeaderProps = createHook(function (props, _ref3) {
  var themeKey = _ref3.themeKey;
  var flexProps = Flex.useProps(props);
  var contextProps = useContext(PopoverContext);
  var className = useClassName({
    style: PopoverHeader$1,
    styleProps: _objectSpread2(_objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: flexProps.className
  });
  return _objectSpread2(_objectSpread2({}, flexProps), {}, {
    className: className
  });
}, {
  themeKey: 'Popover.Header'
});
var PopoverHeader = createComponent(function (props) {
  var calloutHeaderProps = usePopoverHeaderProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: calloutHeaderProps
  });
}, {
  attach: {
    useProps: usePopoverHeaderProps,
    displayName: 'Popover.Header'
  },
  themeKey: 'Popover.Header'
}); //////////////////////////////

var usePopoverTitleProps = createHook(function (props, _ref4) {
  var themeKey = _ref4.themeKey;
  var textProps = Text.useProps(props);
  var contextProps = useContext(PopoverContext);
  var className = useClassName({
    style: PopoverTitle$1,
    styleProps: _objectSpread2(_objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: textProps.className
  });
  return _objectSpread2(_objectSpread2({
    id: contextProps.titleId
  }, textProps), {}, {
    className: className
  });
}, {
  themeKey: 'Popover.Title'
});
var PopoverTitle = createComponent(function (props) {
  var calloutTitleProps = usePopoverTitleProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: calloutTitleProps
  });
}, {
  attach: {
    useProps: usePopoverTitleProps,
    displayName: 'Popover.Title'
  },
  defaultProps: {
    use: 'span'
  },
  themeKey: 'Popover.Title'
}); //////////////////////////////

var usePopoverFooterProps = createHook(function (props, _ref5) {
  var themeKey = _ref5.themeKey;
  var flexProps = Flex.useProps(props);
  var contextProps = useContext(PopoverContext);
  var className = useClassName({
    style: PopoverFooter$1,
    styleProps: _objectSpread2(_objectSpread2({}, contextProps), props),
    themeKey: themeKey,
    prevClassName: flexProps.className
  });
  return _objectSpread2(_objectSpread2({}, flexProps), {}, {
    className: className
  });
}, {
  themeKey: 'Popover.Footer'
});
var PopoverFooter = createComponent(function (props) {
  var calloutFooterProps = usePopoverFooterProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: calloutFooterProps
  });
}, {
  attach: {
    useProps: usePopoverFooterProps,
    displayName: 'Popover.Footer'
  },
  themeKey: 'Popover.Footer'
}); //////////////////////////////

var usePopoverArrowProps = createHook(function (props, _ref6) {
  var themeKey = _ref6.themeKey;
  var popoverContext = useContext(PopoverStateContext);
  props = _objectSpread2(_objectSpread2({}, props), popoverContext.popover);

  var _props2 = props,
      placement = _props2.placement,
      size = _props2.size,
      unstable_arrowRef = _props2.unstable_arrowRef,
      unstable_arrowStyles = _props2.unstable_arrowStyles,
      htmlProps = _objectWithoutPropertiesLoose(_props2, ["placement", "size", "unstable_arrowRef", "unstable_arrowStyles"]);

  var contextProps = useContext(PopoverContext);
  var popoverArrowProps = usePopoverArrow({
    // @ts-ignore
    placement: placement || contextProps.placement,
    size: size,
    // @ts-ignore
    unstable_arrowRef: unstable_arrowRef || contextProps.unstable_arrowRef,
    // @ts-ignore
    unstable_arrowStyles: unstable_arrowStyles || contextProps.unstable_arrowRef
  }, htmlProps);
  htmlProps = Box$1.useProps(_objectSpread2(_objectSpread2({}, htmlProps), popoverArrowProps));
  var className = useClassName({
    style: PopoverArrow$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: htmlProps.className
  });
  return _objectSpread2(_objectSpread2({}, htmlProps), {}, {
    className: className
  });
}, {
  themeKey: 'Popover.Arrow'
});
var PopoverArrow = createComponent(function (props) {
  var popoverArrowProps = usePopoverArrowProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: popoverArrowProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Popover.Arrow'
  },
  themeKey: 'Popover.Arrow'
});

export { Popover, PopoverArrow, PopoverContent, PopoverContext, PopoverFooter, PopoverHeader, PopoverTitle };
