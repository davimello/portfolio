import { useContext } from 'react';
import '../utils/debounceAnimationFrame.js';
import { useViewportHeight } from '../utils/useViewportHeight.js';
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
import '../Modal.styles.js';
import { ModalContext } from '../Modal/ModalState.js';
import '../Modal/ModalBackdrop.js';
import '../Modal/Modal.js';
import '../Modal/ModalDisclosure.js';
import { Modal } from '../Modal/index.js';
import { b as Drawer$1 } from '../Drawer.styles.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var modalContext = useContext(ModalContext);
  var viewportHeight = useViewportHeight({
    enabled: modalContext.modal.visible || props.visible
  });
  var modalProps = Modal.useProps(_objectSpread2({}, props), {
    themeKey: 'Drawer'
  });
  var className = useClassName({
    style: Drawer$1,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      viewportHeight: viewportHeight
    }),
    themeKey: themeKey,
    prevClassName: modalProps.className
  });
  return _objectSpread2(_objectSpread2({}, modalProps), {}, {
    className: className
  });
}, {
  defaultProps: {
    duration: '0.2s',
    placement: 'left'
  },
  themeKey: 'Drawer'
});
var Drawer = createComponent(function (props) {
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
    displayName: 'Drawer'
  },
  themeKey: 'Drawer'
});

export { Drawer };
