import 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
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
import { createComponent } from '../utils/createComponent.js';
import { createElement } from '../utils/createElement.js';
import { createHook } from '../utils/createHook.js';
import 'lodash/get';
import 'capsize';
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/htmlProps.js';
import '../utils/OutsideClickHandler.js';
import { Box, useTabbable } from 'reakit';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
import { a as Tabbable$1 } from '../Tabbable.styles.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var disabled = props.disabled,
      focusable = props.focusable,
      htmlProps = _objectWithoutPropertiesLoose(props, ["disabled", "focusable"]);

  var tabbableProps = useTabbable({
    disabled: disabled,
    focusable: focusable
  }, htmlProps);
  htmlProps = Box$1.useProps(_objectSpread2(_objectSpread2({}, props), tabbableProps));
  var className = useClassName({
    style: Tabbable$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: htmlProps.className
  });
  return _objectSpread2(_objectSpread2({}, htmlProps), {}, {
    className: className
  });
}, {
  themeKey: 'Tabbable'
});
var Tabbable = createComponent(function (props) {
  var tabbableProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: tabbableProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Tabbable'
  },
  themeKey: 'Tabbable'
});

export { Tabbable };
