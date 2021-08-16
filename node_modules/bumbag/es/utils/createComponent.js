import { forwardRef, memo, createElement } from 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import './useTheme.js';
import 'conditional-wrap';
import './useLocalStorage.js';
import { _ as _objectSpread2 } from '../_rollupPluginBabelHelpers.js';
import './omit.js';
import '../ColorMode/utils.js';
import '../ColorMode/ColorModeContext.js';
import './get.js';
import './omitBy.js';
import { useDefaultProps } from './useDefaultProps.js';

function createComponent(Component, config) {
  var Comp = function Comp(props, ref) {
    var _useDefaultProps = useDefaultProps(props, config),
        newProps = _useDefaultProps.props; // @ts-ignore


    return createElement(Component, _objectSpread2(_objectSpread2({}, newProps), {}, {
      elementRef: ref
    }), props === null || props === void 0 ? void 0 : props.children);
  };

  var ForwardedComponent = forwardRef(Comp);

  if (config.shouldMemo) {
    // @ts-ignore
    ForwardedComponent = memo(ForwardedComponent);
  }

  return Object.assign(ForwardedComponent, config.attach);
}

export { createComponent };
