import { createElement as createElement$1 } from 'react';
import { _ as _objectSpread2 } from '../_rollupPluginBabelHelpers.js';
import { isFunction } from './isFunction.js';

function createElement(_ref) {
  var children = _ref.children,
      component = _ref.component,
      _ref$enableRenderProp = _ref.enableRenderPropsComposition,
      enableRenderPropsComposition = _ref$enableRenderProp === void 0 ? true : _ref$enableRenderProp,
      htmlProps = _ref.htmlProps,
      use = _ref.use;

  if (enableRenderPropsComposition && isFunction(children)) {
    return children(htmlProps);
  }

  return createElement$1(component, _objectSpread2({
    as: use
  }, htmlProps), htmlProps.children || children);
}

export { createElement };
