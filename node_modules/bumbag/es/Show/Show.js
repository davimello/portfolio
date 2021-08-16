import { createElement, isValidElement } from 'react';
import '../Provider/ThemeContext.js';
import classNames from 'classnames';
import { css } from '@emotion/css';
import { css as css$1 } from '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import 'conditional-wrap';
import '../utils/useLocalStorage.js';
import { _ as _objectSpread2, a as _taggedTemplateLiteralLoose } from '../_rollupPluginBabelHelpers.js';
import '../utils/omit.js';
import '../ColorMode/utils.js';
import '../ColorMode/ColorModeContext.js';
import '../utils/pick.js';
import '../utils/cssProps.js';
import 'lodash/kebabCase';
import 'tinycolor2';
import { L as breakpoint } from '../getCSSFromStyleObject.js';
import '../utils/isFunction.js';
import '../utils/get.js';
import 'lodash/uniq';
import { useClassName } from '../utils/useClassName.js';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/OutsideClickHandler.js';

var _templateObject, _templateObject2;
var aboveBreakpoints = {
  mobile: 'tablet',
  tablet: 'desktop',
  desktop: 'widescreen',
  widescreen: 'fullHD'
};
function Show(props) {
  var above = props.above,
      below = props.below;
  var breakpoint;

  if (above) {
    breakpoint = "min-" + aboveBreakpoints[above];
  } else if (below) {
    breakpoint = "max-" + below;
  }

  var showClassName = useClassName({
    style: showStyle,
    styleProps: {
      breakpoint: breakpoint
    }
  });
  var children = transformChildren(props.children, showClassName, 0);
  return children;
}

function transformChildren(children, className, index) {
  if (typeof children === 'string') {
    return /*#__PURE__*/createElement("span", {
      key: index,
      className: className
    }, children);
  } else if (isValidElement(children)) {
    if (children.type.toString() === 'Symbol(react.fragment)') {
      return _objectSpread2(_objectSpread2({}, children), {}, {
        props: _objectSpread2(_objectSpread2({}, children.props || {}), {}, {
          // @ts-ignore
          children: transformChildren((children.props || {}).children, className, 0)
        })
      });
    }

    return _objectSpread2(_objectSpread2({}, children), {}, {
      // @ts-ignore
      props: _objectSpread2(_objectSpread2({}, children.props || {}), {}, {
        className: classNames(children.props.className, className)
      })
    });
  } else if (Array.isArray(children)) {
    return children.map(function (child, index) {
      return transformChildren(child, className, index);
    });
  }

  return null;
}

var showStyle = function showStyle(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  ", ";\n"])), breakpoint(styleProps.breakpoint, css$1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n      display: none;\n    "]))), {
    show: true
  })(styleProps));
};

export { Show, showStyle };
