import { useContext } from 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import 'conditional-wrap';
import '../utils/useLocalStorage.js';
import { _ as _objectSpread2, b as _objectWithoutPropertiesLoose } from '../_rollupPluginBabelHelpers.js';
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
import '../utils/getHiddenScrollbarStyles.js';
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/htmlProps.js';
import '../utils/OutsideClickHandler.js';
import { Box, useDialogBackdrop } from 'reakit';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
import { a as ModalBackdrop$1 } from '../Modal.styles.js';
import { ModalContext } from './ModalState.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var modalContext = useContext(ModalContext);
  props = _objectSpread2(_objectSpread2({}, props), modalContext.modal);

  var _props = props,
      visible = _props.visible,
      baseId = _props.baseId,
      modal = _props.modal,
      animating = _props.animating,
      animated = _props.animated,
      stopAnimation = _props.stopAnimation,
      htmlProps = _objectWithoutPropertiesLoose(_props, ["visible", "baseId", "modal", "animating", "animated", "stopAnimation"]);

  var modalBackdropProps = useDialogBackdrop({
    visible: visible,
    baseId: baseId,
    modal: process.env.NODE_ENV === 'test' ? false : modal,
    animating: animating,
    animated: animated,
    stopAnimation: stopAnimation
  }, htmlProps);
  htmlProps = Box$1.useProps(_objectSpread2(_objectSpread2({}, htmlProps), modalBackdropProps));
  var className = useClassName({
    style: ModalBackdrop$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: htmlProps.className
  });
  return _objectSpread2(_objectSpread2({}, htmlProps), {}, {
    className: className
  });
}, {
  themeKey: 'Modal.Backdrop'
});
var ModalBackdrop = createComponent(function (props) {
  var modalBackdropProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: modalBackdropProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Modal.Backdrop'
  },
  themeKey: 'Modal.Backdrop'
});

export { ModalBackdrop };
