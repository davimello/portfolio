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
import { useDisclosureState as useDisclosureState$1 } from 'reakit';

var DisclosureContext = createContext({
  disclosure: {}
});
function useDisclosureState(initialState) {
  return useDisclosureState$1(initialState);
}
function useDisclosureContext() {
  return useContext(DisclosureContext);
}
function DisclosureState(props) {
  var children = props.children,
      restProps = _objectWithoutPropertiesLoose(props, ["children"]);

  var disclosure = useDisclosureState(restProps);
  var contextValue = useMemo(function () {
    return {
      disclosure: disclosure
    };
  }, [disclosure]);
  return /*#__PURE__*/createElement(DisclosureContext.Provider, {
    value: contextValue
  }, isFunction(props.children) ? props.children(disclosure) : props.children);
}

export { DisclosureContext, DisclosureState, useDisclosureContext, useDisclosureState };
