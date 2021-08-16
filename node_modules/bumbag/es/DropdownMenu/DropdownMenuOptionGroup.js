import { Children, isValidElement, cloneElement } from 'react';
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
import { useOptionsState } from '../utils/useOptionsState.js';
import '../utils/omitBy.js';
import '../utils/useDefaultProps.js';
import 'lodash/uniq';
import { useClassName } from '../utils/useClassName.js';
import 'reakit/Id';
import '../utils/uniqueId.js';
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
import '../Menu.styles.js';
import { h as DropdownMenuOptionGroup$1 } from '../DropdownMenu.styles.js';
import './DropdownMenuButton.js';
import '../Modal.styles.js';
import '../Popover.styles.js';
import './DropdownMenuPopover.js';
import './DropdownMenuState.js';
import './DropdownMenu.js';
import { DropdownMenuGroup } from './DropdownMenuGroup.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var children = props.children,
      defaultValue = props.defaultValue,
      onBlur = props.onBlur,
      onChange = props.onChange,
      type = props.type,
      value = props.value,
      restProps = _objectWithoutPropertiesLoose(props, ["children", "defaultValue", "onBlur", "onChange", "type", "value"]);

  var _useOptionsState = useOptionsState({
    defaultValue: defaultValue,
    onBlur: onBlur,
    onChange: onChange,
    type: type,
    value: value
  }),
      getOptionItemProps = _useOptionsState.getOptionItemProps;

  var dropdownMenuGroupProps = DropdownMenuGroup.useProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
    children: Children.map(children, function (child) {
      var _child$props;

      if (!isValidElement(child)) return child;
      return cloneElement(child, _objectSpread2(_objectSpread2({}, child.props), getOptionItemProps({
        value: (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.value
      })));
    })
  }));
  var className = useClassName({
    style: DropdownMenuOptionGroup$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: dropdownMenuGroupProps.className
  });
  return _objectSpread2(_objectSpread2({}, dropdownMenuGroupProps), {}, {
    className: className
  });
}, {
  themeKey: 'DropdownMenu.OptionGroup'
});
var DropdownMenuOptionGroup = createComponent(function (props) {
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
    displayName: 'DropdownMenu.OptionGroup'
  },
  themeKey: 'DropdownMenu.OptionGroup'
});

export { DropdownMenuOptionGroup };
