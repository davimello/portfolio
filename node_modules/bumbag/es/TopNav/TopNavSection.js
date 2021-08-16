import { useContext } from 'react';
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
import '../Box/Box.js';
import '../List.styles.js';
import '../List/List.js';
import '../List/ListItem.js';
import { List } from '../List/index.js';
import '../Navigation.styles.js';
import '../Navigation/Navigation.js';
import { b as TopNavSection$1 } from '../TopNav.styles.js';
import { TopNavContext } from './TopNav.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var children = props.children,
      overrides = props.overrides,
      title = props.title,
      restProps = _objectWithoutPropertiesLoose(props, ["children", "overrides", "title"]);

  var listProps = List.useProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
    orientation: 'horizontal'
  }));

  var _React$useContext = useContext(TopNavContext),
      topNavOverrides = _React$useContext.overrides;

  var className = useClassName({
    style: TopNavSection$1,
    styleProps: _objectSpread2(_objectSpread2({}, props), {}, {
      overrides: _objectSpread2(_objectSpread2({}, topNavOverrides), overrides)
    }),
    themeKey: themeKey,
    prevClassName: listProps.className
  });
  return _objectSpread2(_objectSpread2({}, listProps), {}, {
    className: className
  });
}, {
  themeKey: 'TopNav.Section'
});
var TopNavSection = createComponent(function (props) {
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
    displayName: 'TopNav.Section'
  },
  defaultProps: {
    use: 'ul'
  },
  themeKey: 'TopNav.Section'
});

export { TopNavSection };
