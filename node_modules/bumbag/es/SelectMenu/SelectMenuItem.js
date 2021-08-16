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
import '../utils/useOptionsState.js';
import '../utils/useLabelPlaceholder.js';
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
import '../utils/bindFns.js';
import { createComponent } from '../utils/createComponent.js';
import { createElement } from '../utils/createElement.js';
import { createHook } from '../utils/createHook.js';
import 'lodash/get';
import '../utils/fieldAdaptors.js';
import 'capsize';
import '../utils/getCapsizeStyles.js';
import '../utils/getHiddenScrollbarStyles.js';
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
import '../Button/index.js';
import '../Input.styles.js';
import 'react-input-mask';
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
import '../FieldWrapper/FieldWrapper.js';
import '../Group.styles.js';
import '../Group/Group.js';
import '../Input/Input.js';
import '../Input/index.js';
import '../Menu.styles.js';
import '../DropdownMenu.styles.js';
import '../DropdownMenu/DropdownMenuButton.js';
import '../Modal.styles.js';
import '../Popover.styles.js';
import '../DropdownMenu/DropdownMenuPopover.js';
import '../DropdownMenu/DropdownMenuState.js';
import '../DropdownMenu/DropdownMenu.js';
import { DropdownMenuItem } from '../DropdownMenu/DropdownMenuItem.js';
import '../Divider.styles.js';
import '../Divider/Divider.js';
import '../DropdownMenu/DropdownMenuDivider.js';
import '../DropdownMenu/DropdownMenuGroup.js';
import '../DropdownMenu/DropdownMenuOptionGroup.js';
import '../DropdownMenu/DropdownMenuOptionItem.js';
import '../DropdownMenu/index.js';
import '../Rover.styles.js';
import '../Rover/RoverState.js';
import '../Rover/Rover.js';
import '../Rover/index.js';
import '../Menu/Menu.js';
import '../Menu/MenuGroup.js';
import '../Menu/MenuOptionGroup.js';
import { MenuItem } from '../Menu/MenuItem.js';
import '../Menu/MenuOptionItem.js';
import '../Menu/MenuDivider.js';
import '../Menu/index.js';
import '../Select.styles.js';
import { r as SelectMenuItem$1 } from '../SelectMenu.styles.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var isDropdown = props.isDropdown,
      restProps = _objectWithoutPropertiesLoose(props, ["isDropdown"]);

  var MenuItem$1 = isDropdown ? DropdownMenuItem : MenuItem;
  var dropdownMenuItemProps = MenuItem$1.useProps(restProps);
  var className = useClassName({
    style: SelectMenuItem$1,
    styleProps: _objectSpread2(_objectSpread2({}, dropdownMenuItemProps), props),
    themeKey: themeKey,
    prevClassName: dropdownMenuItemProps.className
  });
  return _objectSpread2(_objectSpread2({}, dropdownMenuItemProps), {}, {
    className: className
  });
}, {
  defaultProps: {
    isDropdown: true,
    role: 'option'
  },
  themeKey: 'SelectMenu.Item'
});
var SelectMenuItem = createComponent(function (props) {
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
    displayName: 'SelectMenu.Item'
  },
  defaultProps: {
    use: 'li'
  },
  themeKey: 'SelectMenu.Item'
});

export { SelectMenuItem };
