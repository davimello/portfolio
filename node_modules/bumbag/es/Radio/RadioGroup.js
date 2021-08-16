import { createElement as createElement$1 } from 'react';
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
import '../utils/uniqueId.js';
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
import '../utils/getHiddenInputStyles.js';
import '../theme/palette.js';
import { Box } from 'reakit';
import '../Button.styles.js';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
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
import '../Button/index.js';
import '../Set.styles.js';
import { Set } from '../Set/Set.js';
import '../FieldWrapper.styles.js';
import '../Card.styles.js';
import '../Card/Card.js';
import '../Card/index.js';
import '../Disclosure.styles.js';
import '../Disclosure/DisclosureState.js';
import '../Disclosure/Disclosure.js';
import '../Disclosure/DisclosureContent.js';
import '../Disclosure/index.js';
import '../Label.styles.js';
import '../Label/Label.js';
import { FieldWrapper } from '../FieldWrapper/FieldWrapper.js';
import { d as RadioGroup$1, e as RadioGroupField$1 } from '../Radio.styles.js';
import { Radio } from './Radio.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var defaultValue = props.defaultValue,
      disabled = props.disabled,
      orientation = props.orientation,
      onChange = props.onChange,
      options = props.options,
      overrides = props.overrides,
      name = props.name,
      spacing = props.spacing,
      state = props.state,
      value = props.value,
      restProps = _objectWithoutPropertiesLoose(props, ["defaultValue", "disabled", "orientation", "onChange", "options", "overrides", "name", "spacing", "state", "value"]);

  var boxProps = Box$1.useProps(restProps);
  var className = useClassName({
    style: RadioGroup$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _objectSpread2(_objectSpread2({
    role: 'radiogroup'
  }, boxProps), {}, {
    className: className,
    children: /*#__PURE__*/createElement$1(Set, {
      orientation: orientation,
      overrides: overrides,
      spacing: spacing
    }, options.map(function (option, i) {
      return /*#__PURE__*/createElement$1(Radio, _extends({
        key: i
      }, option, {
        checked: typeof value === 'undefined' ? undefined : option.value === value,
        defaultChecked: typeof defaultValue === 'undefined' ? undefined : option.value === defaultValue,
        name: name,
        onChange: onChange,
        overrides: overrides,
        state: state || option.state,
        disabled: disabled || option.disabled
      }));
    }))
  });
}, {
  defaultProps: {
    orientation: 'vertical',
    spacing: 'minor-2'
  },
  themeKey: 'RadioGroup'
});
var RadioGroup = createComponent(function (props) {
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
    displayName: 'RadioGroup'
  },
  themeKey: 'RadioGroup'
}); ////////////////////////////////////////////////////////////////

var useRadioGroupFieldProps = createHook(function (props, _ref2) {
  var themeKey = _ref2.themeKey;

  var defaultChecked = props.defaultChecked,
      description = props.description,
      disabled = props.disabled,
      hint = props.hint,
      orientation = props.orientation,
      isOptional = props.isOptional,
      isRequired = props.isRequired,
      label = props.label,
      name = props.name,
      options = props.options,
      onChange = props.onChange,
      overrides = props.overrides,
      radioGroupProps = props.radioGroupProps,
      state = props.state,
      tooltip = props.tooltip,
      tooltipTriggerComponent = props.tooltipTriggerComponent,
      value = props.value,
      validationText = props.validationText,
      restProps = _objectWithoutPropertiesLoose(props, ["defaultChecked", "description", "disabled", "hint", "orientation", "isOptional", "isRequired", "label", "name", "options", "onChange", "overrides", "radioGroupProps", "state", "tooltip", "tooltipTriggerComponent", "value", "validationText"]);

  var boxProps = Box$1.useProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
    overrides: overrides
  }));
  var className = useClassName({
    style: RadioGroupField$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    className: className,
    children: /*#__PURE__*/createElement$1(FieldWrapper, {
      description: description,
      hint: hint,
      isOptional: isOptional,
      isRequired: isRequired,
      label: label,
      labelType: "legend",
      overrides: overrides,
      state: state,
      tooltip: tooltip,
      tooltipTriggerComponent: tooltipTriggerComponent,
      validationText: validationText
    }, function (_ref3) {
      var elementProps = _ref3.elementProps;
      return /*#__PURE__*/createElement$1(RadioGroup, _extends({
        defaultChecked: defaultChecked,
        disabled: disabled,
        orientation: orientation,
        name: name,
        options: options,
        onChange: onChange,
        overrides: overrides,
        state: state,
        value: value
      }, elementProps, radioGroupProps));
    })
  });
}, {
  themeKey: 'RadioGroupField'
});
var RadioGroupField = createComponent(function (props) {
  var radioGroupFieldProps = useRadioGroupFieldProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: radioGroupFieldProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'RadioGroupField'
  },
  defaultProps: {
    use: 'fieldset'
  },
  themeKey: 'RadioGroupField'
});

export { RadioGroup, RadioGroupField };
