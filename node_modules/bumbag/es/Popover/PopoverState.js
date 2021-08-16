import { createContext, useContext, useMemo, createElement } from 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import 'conditional-wrap';
import '../utils/useLocalStorage.js';
import { b as _objectWithoutPropertiesLoose } from '../_rollupPluginBabelHelpers.js';
import '../utils/omit.js';
import '../ColorMode/utils.js';
import '../ColorMode/ColorModeContext.js';
import '../utils/pick.js';
import '../utils/cssProps.js';
import 'lodash/kebabCase';
import 'tinycolor2';
import '../getCSSFromStyleObject.js';
import { isFunction } from '../utils/isFunction.js';
import '../utils/get.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/OutsideClickHandler.js';
import { usePopoverState as usePopoverState$1 } from 'reakit';

var PopoverStateContext = createContext({
  popover: {}
});
function usePopoverState(initialState) {
  return usePopoverState$1(initialState);
}
function usePopoverContext() {
  return useContext(PopoverStateContext);
}
function PopoverState(props) {
  var children = props.children,
      restProps = _objectWithoutPropertiesLoose(props, ["children"]);

  var popover = usePopoverState(restProps);
  var contextValue = useMemo(function () {
    return {
      popover: popover
    };
  }, [popover]);
  return /*#__PURE__*/createElement(PopoverStateContext.Provider, {
    value: contextValue
  }, isFunction(props.children) ? props.children(popover) : props.children);
}

export { PopoverState, PopoverStateContext, usePopoverContext, usePopoverState };
