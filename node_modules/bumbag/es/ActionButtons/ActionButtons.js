import { createElement as createElement$1, Fragment } from 'react';
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
import { a as ActionButtons$1 } from '../ActionButtons.styles.js';
import { Box } from 'reakit';
import '../Button.styles.js';
import '../Box.styles.js';
import '../Box/Box.js';
import '../Flex.styles.js';
import '../Flex/Flex.js';
import '../Icon.styles.js';
import '../Icon/Icon.js';
import '../Text.styles.js';
import '../Text/Text.js';
import '../Text/TextBlock.js';
import '../Text/TextInline.js';
import '../Text/index.js';
import '../Spinner.styles.js';
import '../Spinner/Spinner.js';
import '../Button/Button.js';
import 'reakit/VisuallyHidden';
import '../Button/ButtonClose.js';
import { Button } from '../Button/index.js';
import '../Set.styles.js';
import { Set } from '../Set/Set.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var addonButtons = props.addonButtons,
      cancelProps = props.cancelProps,
      cancelText = props.cancelText,
      isLoading = props.isLoading,
      onClickCancel = props.onClickCancel,
      onClickSubmit = props.onClickSubmit,
      overrides = props.overrides,
      palette = props.palette,
      size = props.size,
      submitProps = props.submitProps,
      submitText = props.submitText,
      type = props.type,
      restProps = _objectWithoutPropertiesLoose(props, ["addonButtons", "cancelProps", "cancelText", "isLoading", "onClickCancel", "onClickSubmit", "overrides", "palette", "size", "submitProps", "submitText", "type"]);

  var setProps = Set.useProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
    overrides: overrides
  }), {
    themeKey: 'ActionButtons'
  });
  var className = useClassName({
    style: ActionButtons$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: setProps.className
  });
  var children = /*#__PURE__*/createElement$1(Fragment, null, /*#__PURE__*/createElement$1(Button, _extends({
    onClick: onClickCancel,
    overrides: overrides,
    size: size
  }, cancelProps), cancelText), addonButtons, /*#__PURE__*/createElement$1(Button, _extends({
    isLoading: isLoading,
    onClick: onClickSubmit,
    overrides: overrides,
    palette: palette,
    size: size,
    type: type
  }, submitProps), submitText));
  return _objectSpread2(_objectSpread2({}, setProps), {}, {
    className: className,
    children: children
  });
}, {
  defaultProps: {
    addonButtons: undefined,
    cancelProps: {},
    cancelText: 'Cancel',
    isLoading: false,
    onClickSubmit: undefined,
    onClickCancel: undefined,
    palette: 'primary',
    submitProps: {},
    submitText: 'Submit',
    type: 'submit'
  },
  themeKey: 'ActionButtons'
});
var ActionButtons = createComponent(function (props) {
  var actionButtonsProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: actionButtonsProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'ActionButtons'
  },
  themeKey: 'ActionButtons'
});

export { ActionButtons };
