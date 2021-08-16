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
import { useOptionsState } from '../utils/useOptionsState.js';
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
import '../Group.styles.js';
import { Group } from '../Group/Group.js';
import '../Rover.styles.js';
import '../Rover/RoverState.js';
import '../Rover/Rover.js';
import { Rover } from '../Rover/index.js';
import { b as OptionButtons$1, c as OptionButtonsWrapper, d as OptionButtonsField$1 } from '../OptionButtons.styles.js';
import { OptionButton } from './OptionButton.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var borderRadius = props.borderRadius,
      children = props.children,
      defaultValue = props.defaultValue,
      disabled = props.disabled,
      isFullWidth = props.isFullWidth,
      readOnly = props.readOnly,
      onBlur = props.onBlur,
      onChange = props.onChange,
      options = props.options,
      orientation = props.orientation,
      overrides = props.overrides,
      palette = props.palette,
      size = props.size,
      type = props.type,
      value = props.value,
      verticalBelow = props.verticalBelow,
      restProps = _objectWithoutPropertiesLoose(props, ["borderRadius", "children", "defaultValue", "disabled", "isFullWidth", "readOnly", "onBlur", "onChange", "options", "orientation", "overrides", "palette", "size", "type", "value", "verticalBelow"]);

  var boxProps = Box$1.useProps(restProps);
  var className = useClassName({
    style: OptionButtons$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var wrapperClassName = useClassName({
    style: OptionButtonsWrapper,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Wrapper'
  });

  var _useOptionsState = useOptionsState({
    defaultValue: defaultValue,
    onBlur: onBlur,
    onChange: onChange,
    type: type,
    value: value
  }),
      getOptionItemProps = _useOptionsState.getOptionItemProps;

  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    'aria-disabled': disabled,
    className: className,
    children: /*#__PURE__*/createElement$1(Rover.State, null, /*#__PURE__*/createElement$1(Group, {
      className: wrapperClassName,
      borderRadius: borderRadius,
      orientation: orientation,
      verticalBelow: verticalBelow
    }, options.map(function (_ref2, index) {
      var label = _ref2.label,
          option = _objectWithoutPropertiesLoose(_ref2, ["label"]);

      return /*#__PURE__*/createElement$1(Rover, {
        key: index
      }, function (roverProps) {
        return /*#__PURE__*/createElement$1(OptionButton, _extends({}, roverProps, getOptionItemProps({
          readOnly: readOnly,
          value: option.value
        }), {
          disabled: disabled // @ts-ignore
          ,
          isFullWidth: isFullWidth,
          overrides: overrides,
          palette: palette,
          readOnly: readOnly,
          size: size
        }, option), label);
      });
    })))
  });
}, {
  themeKey: 'OptionButtons'
});
var OptionButtons = createComponent(function (props) {
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
    displayName: 'OptionButtons'
  },
  themeKey: 'OptionButtons'
}); //////////////////////////////////////////////////////////////////

var useOptionButtonsFieldProps = createHook(function (props, _ref3) {
  var themeKey = _ref3.themeKey;

  var borderRadius = props.borderRadius,
      defaultValue = props.defaultValue,
      description = props.description,
      disabled = props.disabled,
      hint = props.hint,
      isFullWidth = props.isFullWidth,
      isOptional = props.isOptional,
      isRequired = props.isRequired,
      label = props.label,
      options = props.options,
      orientation = props.orientation,
      onBlur = props.onBlur,
      onChange = props.onChange,
      overrides = props.overrides,
      palette = props.palette,
      optionButtonsProps = props.optionButtonsProps,
      readOnly = props.readOnly,
      size = props.size,
      state = props.state,
      tooltip = props.tooltip,
      tooltipTriggerComponent = props.tooltipTriggerComponent,
      type = props.type,
      value = props.value,
      validationText = props.validationText,
      verticalBelow = props.verticalBelow,
      restProps = _objectWithoutPropertiesLoose(props, ["borderRadius", "defaultValue", "description", "disabled", "hint", "isFullWidth", "isOptional", "isRequired", "label", "options", "orientation", "onBlur", "onChange", "overrides", "palette", "optionButtonsProps", "readOnly", "size", "state", "tooltip", "tooltipTriggerComponent", "type", "value", "validationText", "verticalBelow"]);

  var boxProps = Box$1.useProps(restProps);
  var className = useClassName({
    style: OptionButtonsField$1,
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
    }, function (_ref4) {
      var elementProps = _ref4.elementProps;
      return /*#__PURE__*/createElement$1(OptionButtons, _extends({
        borderRadius: borderRadius,
        defaultValue: defaultValue,
        disabled: disabled,
        isFullWidth: isFullWidth,
        onBlur: onBlur,
        onChange: onChange,
        options: options,
        orientation: orientation,
        palette: palette,
        readOnly: readOnly,
        size: size,
        state: state,
        type: type,
        value: value,
        verticalBelow: verticalBelow,
        overrides: overrides
      }, elementProps, optionButtonsProps));
    })
  });
}, {
  themeKey: 'OptionButtonsField'
});
var OptionButtonsField = createComponent(function (props) {
  var htmlProps = useOptionButtonsFieldProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: htmlProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'OptionButtonsField'
  },
  defaultProps: {
    use: 'fieldset'
  },
  themeKey: 'OptionButtonsField'
});

export { OptionButtons, OptionButtonsField };
