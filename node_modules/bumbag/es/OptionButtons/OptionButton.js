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
import { a as OptionButton$1 } from '../OptionButtons.styles.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var checked = props.checked,
      onChange = props.onChange,
      readOnly = props.readOnly,
      value = props.value,
      restProps = _objectWithoutPropertiesLoose(props, ["checked", "onChange", "readOnly", "value"]);

  var buttonProps = Button.useProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
    isStatic: readOnly,
    variant: !checked ? 'outlined' : undefined
  }));
  var className = useClassName({
    style: OptionButton$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: buttonProps.className
  });
  return _objectSpread2(_objectSpread2({}, buttonProps), {}, {
    'aria-checked': checked,
    className: className,
    onClick: function onClick() {
      return !readOnly && onChange && onChange({
        checked: !checked,
        value: value
      });
    }
  });
}, {
  defaultProps: {
    palette: 'primary'
  },
  themeKey: 'OptionButtons.Button'
});
var OptionButton = createComponent(function (props) {
  var htmlProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: htmlProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'OptionButtons.Button'
  },
  themeKey: 'OptionButtons.Button'
});

export { OptionButton };
