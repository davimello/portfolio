import { createElement as createElement$1, Fragment } from 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import 'conditional-wrap';
import '../utils/useLocalStorage.js';
import { _ as _objectSpread2, d as _extends } from '../_rollupPluginBabelHelpers.js';
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
import '../utils/parseIcons.js';
import { useIcon } from '../utils/useIcon.js';
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
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/htmlProps.js';
import '../utils/OutsideClickHandler.js';
import { Box } from 'reakit';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
import { a as Icon$1 } from '../Icon.styles.js';

function Tree(_ref) {
  var fill = _ref.fill,
      tree = _ref.tree;

  if (tree.length > 0) {
    return tree.map(function (node, index) {
      var _node$attributes, _node$attributes2, _node$attributes3, _node$attributes4, _node$attributes5, _node$attributes6;

      var Component = node.name;
      var newProps = {};

      if (((_node$attributes = node.attributes) === null || _node$attributes === void 0 ? void 0 : _node$attributes.fill) && ((_node$attributes2 = node.attributes) === null || _node$attributes2 === void 0 ? void 0 : _node$attributes2.fill) !== 'white' && ((_node$attributes3 = node.attributes) === null || _node$attributes3 === void 0 ? void 0 : _node$attributes3.fill) !== 'none') {
        newProps = {
          fill: fill,
          fillRule: 'evenodd'
        };
      }

      if (((_node$attributes4 = node.attributes) === null || _node$attributes4 === void 0 ? void 0 : _node$attributes4.stroke) && ((_node$attributes5 = node.attributes) === null || _node$attributes5 === void 0 ? void 0 : _node$attributes5.stroke) !== 'white' && ((_node$attributes6 = node.attributes) === null || _node$attributes6 === void 0 ? void 0 : _node$attributes6.stroke) !== 'none') {
        newProps = {
          stroke: fill,
          fillRule: 'evenodd'
        };
      }

      return (
        /*#__PURE__*/
        // eslint-disable-next-line
        createElement$1(Component, _extends({
          key: node.name + "." + index
        }, node.attributes, newProps), /*#__PURE__*/createElement$1(Tree, {
          fill: fill,
          tree: node.children
        }))
      );
    });
  }

  return null;
}

var useProps = createHook(function (props, _ref2) {
  var themeKey = _ref2.themeKey;
  var boxProps = Box$1.useProps(props);
  var className = useClassName({
    style: Icon$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });

  var _useIcon = useIcon({
    icon: props.icon,
    type: props.type
  }),
      viewBoxWidth = _useIcon.viewBoxWidth,
      viewBoxHeight = _useIcon.viewBoxHeight,
      svgProps = _useIcon.props,
      paths = _useIcon.paths,
      tree = _useIcon.tree;

  return _objectSpread2(_objectSpread2(_objectSpread2({}, svgProps), {}, {
    role: 'img',
    viewBox: "0 0 " + viewBoxWidth + " " + viewBoxHeight,
    'aria-hidden': !props['aria-label'] && !props.label
  }, boxProps), {}, {
    className: className,
    children: /*#__PURE__*/createElement$1(Fragment, null, props.label && /*#__PURE__*/createElement$1("title", null, props.label), paths.map(function (path) {
      return /*#__PURE__*/createElement$1("path", {
        key: path,
        d: path,
        fill: "currentColor",
        fillRule: "evenodd"
      });
    }), /*#__PURE__*/createElement$1(Tree, {
      fill: "currentColor",
      tree: tree
    }))
  });
}, {
  themeKey: 'Icon'
});
var Icon = createComponent(function (props) {
  var iconProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: iconProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Icon'
  },
  defaultProps: {
    use: 'svg'
  },
  themeKey: 'Icon'
});

export { Icon };
