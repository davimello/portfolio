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
import { Box, useDialogDisclosure } from 'reakit';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
import { b as ModalDisclosure$1 } from '../Modal.styles.js';
import { ModalContext } from './ModalState.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var modalContext = useContext(ModalContext);
  props = _objectSpread2(_objectSpread2({}, props), modalContext.modal);

  var _props = props,
      disabled = _props.disabled,
      focusable = _props.focusable,
      visible = _props.visible,
      toggle = _props.toggle,
      baseId = _props.baseId,
      unstable_disclosureRef = _props.unstable_disclosureRef,
      htmlProps = _objectWithoutPropertiesLoose(_props, ["disabled", "focusable", "visible", "toggle", "baseId", "unstable_disclosureRef"]);

  var modalDisclosureProps = useDialogDisclosure({
    disabled: disabled,
    focusable: focusable,
    visible: visible,
    toggle: toggle,
    baseId: baseId,
    unstable_disclosureRef: unstable_disclosureRef
  }, htmlProps);
  htmlProps = Box$1.useProps(_objectSpread2(_objectSpread2({}, htmlProps), modalDisclosureProps));
  var className = useClassName({
    style: ModalDisclosure$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: htmlProps.className
  });
  return _objectSpread2(_objectSpread2({}, htmlProps), {}, {
    className: className
  });
}, {
  themeKey: 'Modal.Disclosure'
});
var ModalDisclosure = createComponent(function (props) {
  var modalDisclosureProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    htmlProps: modalDisclosureProps,
    use: props.use
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Modal.Disclosure'
  },
  defaultProps: {
    use: 'button'
  },
  themeKey: 'Modal.Disclosure'
});

export { ModalDisclosure };
