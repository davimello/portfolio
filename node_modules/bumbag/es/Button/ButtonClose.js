import { createElement as createElement$1, Fragment } from 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import 'conditional-wrap';
import '../utils/useLocalStorage.js';
import { b as _objectWithoutPropertiesLoose, d as _extends, _ as _objectSpread2 } from '../_rollupPluginBabelHelpers.js';
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
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/htmlProps.js';
import '../utils/OutsideClickHandler.js';
import '../theme/palette.js';
import { Button } from 'reakit';
import { e as ButtonClose$1 } from '../Button.styles.js';
import '../Box.styles.js';
import '../Box/Box.js';
import '../Flex.styles.js';
import '../Flex/Flex.js';
import '../Icon.styles.js';
import { Icon } from '../Icon/Icon.js';
import '../Text.styles.js';
import '../Text/Text.js';
import '../Text/TextBlock.js';
import '../Text/TextInline.js';
import '../Text/index.js';
import '../Spinner.styles.js';
import '../Spinner/Spinner.js';
import { Button as Button$1 } from './Button.js';
import { VisuallyHidden } from 'reakit/VisuallyHidden';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var iconProps = props.iconProps,
      label = props.label,
      restProps = _objectWithoutPropertiesLoose(props, ["iconProps", "label"]);

  var buttonProps = Button$1.useProps(restProps);
  var className = useClassName({
    style: ButtonClose$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: buttonProps.className
  });
  var children = /*#__PURE__*/createElement$1(Fragment, null, /*#__PURE__*/createElement$1(Icon, _extends({
    fontSize: "300",
    icon: "close"
  }, iconProps)), /*#__PURE__*/createElement$1(VisuallyHidden, null, label));
  return _objectSpread2(_objectSpread2({}, buttonProps), {}, {
    className: className,
    children: children
  });
}, {
  defaultProps: {
    label: 'Close',
    variant: 'ghost'
  },
  themeKey: 'Button.Close'
});
var ButtonClose = createComponent(function (props) {
  var buttonCloseProps = useProps(props);
  return createElement({
    children: props.children,
    component: Button,
    use: props.use,
    htmlProps: buttonCloseProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Button.Close'
  },
  themeKey: 'Button.Close'
});

export { ButtonClose };
