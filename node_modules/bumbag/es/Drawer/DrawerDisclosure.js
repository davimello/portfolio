import 'react';
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
import '../Modal/ModalState.js';
import '../Modal/ModalBackdrop.js';
import '../Modal/Modal.js';
import { ModalDisclosure } from '../Modal/ModalDisclosure.js';
import '../Modal/index.js';
import { a as DrawerDisclosure$1 } from '../Drawer.styles.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var htmlProps = ModalDisclosure.useProps(props);
  var className = useClassName({
    style: DrawerDisclosure$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: htmlProps.className
  });
  return _objectSpread2(_objectSpread2({}, htmlProps), {}, {
    className: className
  });
}, {
  themeKey: 'Drawer.Disclosure'
});
var DrawerDisclosure = createComponent(function (props) {
  var DrawerDisclosureProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: DrawerDisclosureProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Drawer.Disclosure'
  },
  defaultProps: {
    use: 'button'
  },
  themeKey: 'Drawer.Disclosure'
});

export { DrawerDisclosure };
