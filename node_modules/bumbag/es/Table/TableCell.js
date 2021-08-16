import { useRef, useContext, useState, useEffect } from 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import 'conditional-wrap';
import '../utils/useLocalStorage.js';
import { _ as _objectSpread2 } from '../_rollupPluginBabelHelpers.js';
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
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/htmlProps.js';
import '../utils/OutsideClickHandler.js';
import { Box } from 'reakit';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
import { d as TableCell$1 } from '../Table.styles.js';
import { TableContext } from './Table.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;
  var tableCellRef = useRef();
  var boxProps = Box$1.useProps(_objectSpread2(_objectSpread2({}, props), {}, {
    elementRef: tableCellRef
  }));
  var tableContext = useContext(TableContext);

  var _React$useState = useState(''),
      title = _React$useState[0],
      setTitle = _React$useState[1];

  var className = useClassName({
    style: TableCell$1,
    styleProps: _objectSpread2(_objectSpread2(_objectSpread2({}, tableContext), props), {}, {
      overrides: _objectSpread2(_objectSpread2({}, tableContext.overrides), props.overrides)
    }),
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  useEffect(function () {
    if (tableCellRef && tableCellRef.current) {
      var _tableElement$childNo;

      // @ts-ignore
      var cellIndex = tableCellRef.current.cellIndex; // @ts-ignore

      var rowElement = tableCellRef.current.parentNode;
      var bodyElement = rowElement.parentNode;
      var tableElement = bodyElement.parentNode;
      var tableElementChildren = (_tableElement$childNo = tableElement === null || tableElement === void 0 ? void 0 : tableElement.childNodes) !== null && _tableElement$childNo !== void 0 ? _tableElement$childNo : [];

      if (tableElementChildren.length > 0) {
        // @ts-ignore
        NodeList.prototype.find = Array.prototype.find;
        var headElement = tableElementChildren.find(function (child) {
          return child.tagName === 'THEAD';
        });

        if (headElement && headElement.childNodes) {
          var _headRowElement$child;

          var headRowElement = headElement === null || headElement === void 0 ? void 0 : headElement.childNodes[0];
          var headCellElement = headRowElement === null || headRowElement === void 0 ? void 0 : (_headRowElement$child = headRowElement.childNodes) === null || _headRowElement$child === void 0 ? void 0 : _headRowElement$child[cellIndex];
          setTitle(headCellElement === null || headCellElement === void 0 ? void 0 : headCellElement.innerText);
        }
      }
    }
  }, []);
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    className: className,
    'data-content': title
  });
}, {
  themeKey: 'Table.Cell'
});
var TableCell = createComponent(function (props) {
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
    displayName: 'Table.Cell'
  },
  defaultProps: {
    use: 'td'
  },
  themeKey: 'Table.Cell'
});

export { TableCell };
