import { createContext, useMemo, createElement as createElement$1, cloneElement } from 'react';
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
import '../utils/getHiddenScrollbarStyles.js';
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/htmlProps.js';
import '../utils/OutsideClickHandler.js';
import { Box } from 'reakit';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
import '../Menu.styles.js';
import { a as DropdownMenu$1 } from '../DropdownMenu.styles.js';
import { DropdownMenuButton } from './DropdownMenuButton.js';
import '../Modal.styles.js';
import '../Popover.styles.js';
import { DropdownMenuPopover } from './DropdownMenuPopover.js';
import { useDropdownMenuState } from './DropdownMenuState.js';

var DropdownMenuContext = createContext({
  dropdownMenu: {},
  overrides: {}
});
var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var baseId = props.baseId,
      children = props.children,
      dropdownMenuState = props.dropdownMenuState,
      menu = props.menu,
      overrides = props.overrides,
      visible = props.visible,
      restProps = _objectWithoutPropertiesLoose(props, ["baseId", "children", "dropdownMenuState", "menu", "overrides", "visible"]);

  var boxProps = Box$1.useProps(restProps);
  var dropdownMenu = useDropdownMenuState(_objectSpread2({
    baseId: baseId,
    visible: visible
  }, dropdownMenuState));
  var dropdownMenuButtonProps = DropdownMenuButton.useProps(_objectSpread2(_objectSpread2({}, dropdownMenu), {}, {
    overrides: overrides
  }));
  var className = useClassName({
    style: DropdownMenu$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var contextValue = useMemo(function () {
    return {
      dropdownMenu: dropdownMenu,
      overrides: overrides
    };
  }, [dropdownMenu, overrides]);
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    className: className,
    children: /*#__PURE__*/createElement$1(DropdownMenuContext.Provider, {
      value: contextValue
    }, cloneElement(children, _objectSpread2({}, dropdownMenuButtonProps)), dropdownMenu.visible && /*#__PURE__*/createElement$1(DropdownMenuPopover, _extends({}, dropdownMenu, {
      overrides: overrides
    }), menu))
  });
}, {
  themeKey: 'DropdownMenu'
});
var DropdownMenu = createComponent(function (props) {
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
    displayName: 'DropdownMenu'
  },
  themeKey: 'DropdownMenu'
});

export { DropdownMenu, DropdownMenuContext };
