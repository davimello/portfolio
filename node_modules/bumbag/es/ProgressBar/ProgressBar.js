import { createElement as createElement$1 } from 'react';
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
import { Box } from 'reakit';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
import { a as ProgressBar$1, b as ProgressBarIndicator } from '../ProgressBar.styles.js';

function normalizeValue(value, maxValue) {
  var newValue = value;
  if (newValue > maxValue) newValue = maxValue;else if (newValue < 0) newValue = 0;
  return newValue;
}

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var maxValue = props.maxValue,
      value = props.value,
      restProps = _objectWithoutPropertiesLoose(props, ["maxValue", "value"]);

  var boxProps = Box$1.useProps(restProps);
  var newValue = value || 0;
  var newMaxValue = maxValue || 100;
  newValue = normalizeValue(newValue, newMaxValue);
  var percent = newValue / newMaxValue * 100;
  var className = useClassName({
    style: ProgressBar$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var indicatorClassName = useClassName({
    style: ProgressBarIndicator,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      value: percent
    }),
    themeKey: themeKey,
    themeKeySuffix: 'Indicator',
    prevClassName: boxProps.className
  });
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    'aria-valuenow': newValue,
    'aria-valuemin': 0,
    'aria-valuemax': newMaxValue,
    className: className,
    role: 'progressbar',
    children: /*#__PURE__*/createElement$1(Box$1, {
      className: indicatorClassName
    })
  });
}, {
  defaultProps: {
    color: 'primary',
    maxValue: 100,
    size: 'default',
    value: 0
  },
  themeKey: 'ProgressBar'
});
var ProgressBar = createComponent(function (props) {
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
    displayName: 'ProgressBar'
  },
  themeKey: 'ProgressBar'
});

export { ProgressBar };
