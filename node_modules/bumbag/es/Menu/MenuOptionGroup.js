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
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/htmlProps.js';
import '../utils/OutsideClickHandler.js';
import { Box } from 'reakit';
import '../Box.styles.js';
import '../Box/Box.js';
import { g as MenuOptionGroup$1 } from '../Menu.styles.js';
import '../Rover.styles.js';
import '../Rover/RoverState.js';
import '../Rover/Rover.js';
import '../Rover/index.js';
import './Menu.js';
import { MenuGroup } from './MenuGroup.js';

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

  var menuGroupProps = MenuGroup.useProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
    children: Children.map(children, function (child) {
      var _child$props;

      if (!isValidElement(child)) return child;
      return cloneElement(child, _objectSpread2(_objectSpread2({}, child.props), getOptionItemProps({
        value: (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.value
      })));
    })
  }));
  var className = useClassName({
    style: MenuOptionGroup$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: menuGroupProps.className
  });
  return _objectSpread2(_objectSpread2({}, menuGroupProps), {}, {
    className: className
  });
}, {
  themeKey: 'Menu.OptionGroup'
});
var MenuOptionGroup = createComponent(function (props) {
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
    displayName: 'Menu.OptionGroup'
  },
  themeKey: 'Menu.OptionGroup'
});

export { MenuOptionGroup };
