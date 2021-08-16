import { createContext, useContext, createElement as createElement$1, useMemo, Fragment } from 'react';
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
import { useUniqueId } from '../utils/uniqueId.js';
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
import '../Flex.styles.js';
import { Flex } from '../Flex/Flex.js';
import { a as CardContent$1, b as CardTitle$1, c as CardHeader$1, d as CardFooter$1, e as Card$1 } from '../Card.styles.js';

var CardContext = createContext({});
var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var footer = props.footer,
      headerAddon = props.headerAddon,
      overrides = props.overrides,
      standalone = props.standalone,
      title = props.title,
      variant = props.variant,
      restProps = _objectWithoutPropertiesLoose(props, ["footer", "headerAddon", "overrides", "standalone", "title", "variant"]);

  var boxProps = Box$1.useProps(_objectSpread2({
    altitude: variant === 'shadowed' ? '100' : null,
    border: variant === 'bordered' ? 'default' : null
  }, restProps));
  var className = useClassName({
    style: Card$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  var titleId = useUniqueId();
  var descriptionId = useUniqueId();
  var context = useMemo(function () {
    return _objectSpread2({
      descriptionId: descriptionId,
      titleId: titleId
    }, props);
  }, [descriptionId, props, titleId]);
  var children = /*#__PURE__*/createElement$1(CardContext.Provider, {
    value: context
  }, standalone ? props.children : /*#__PURE__*/createElement$1(Fragment, null, title && /*#__PURE__*/createElement$1(CardHeader, {
    overrides: overrides
  }, /*#__PURE__*/createElement$1(CardTitle, {
    overrides: overrides
  }, title), headerAddon && /*#__PURE__*/createElement$1(Box$1, null, headerAddon)), /*#__PURE__*/createElement$1(CardContent, {
    overrides: overrides
  }, props.children), footer && /*#__PURE__*/createElement$1(CardFooter, {
    overrides: overrides
  }, footer)));
  return _objectSpread2(_objectSpread2({
    'aria-describedby': props.children ? descriptionId : undefined,
    'aria-labelledby': props.title ? titleId : undefined
  }, boxProps), {}, {
    className: className,
    children: children
  });
}, {
  defaultProps: {
    variant: 'shadowed'
  },
  themeKey: 'Card'
});
var Card = createComponent(function (props) {
  var cardProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: cardProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'Card'
  },
  themeKey: 'Card'
}); /////////////////////////////////////

function CardContent(props) {
  var children = props.children,
      restProps = _objectWithoutPropertiesLoose(props, ["children"]);

  var context = useContext(CardContext);
  var cardContentClassName = useClassName({
    style: CardContent$1,
    styleProps: _objectSpread2(_objectSpread2({}, context), props),
    themeKey: context.themeKey || 'Card',
    themeKeySuffix: 'Content'
  });
  return /*#__PURE__*/createElement$1(Box$1, _extends({
    className: cardContentClassName,
    id: context.descriptionId
  }, restProps), children);
} /////////////////////////////////////

function CardTitle(props) {
  var children = props.children,
      restProps = _objectWithoutPropertiesLoose(props, ["children"]);

  var context = useContext(CardContext);
  var cardTitleClassName = useClassName({
    style: CardTitle$1,
    styleProps: _objectSpread2(_objectSpread2({}, context), props),
    themeKey: context.themeKey || 'Card',
    themeKeySuffix: 'Title'
  });
  return /*#__PURE__*/createElement$1(Box$1, _extends({
    className: cardTitleClassName,
    id: context.titleId
  }, restProps), children);
} /////////////////////////////////////

function CardHeader(props) {
  var children = props.children,
      restProps = _objectWithoutPropertiesLoose(props, ["children"]);

  var context = useContext(CardContext);
  var cardHeaderClassName = useClassName({
    style: CardHeader$1,
    styleProps: _objectSpread2(_objectSpread2({}, context), props),
    themeKey: context.themeKey || 'Card',
    themeKeySuffix: 'Header'
  });
  return /*#__PURE__*/createElement$1(Flex, _extends({
    className: cardHeaderClassName
  }, restProps), children);
} /////////////////////////////////////

function CardFooter(props) {
  var children = props.children,
      restProps = _objectWithoutPropertiesLoose(props, ["children"]);

  var context = useContext(CardContext);
  var cardFooterClassName = useClassName({
    style: CardFooter$1,
    styleProps: _objectSpread2(_objectSpread2({}, context), props),
    themeKey: context.themeKey || 'Card',
    themeKeySuffix: 'Footer'
  });
  return /*#__PURE__*/createElement$1(Box$1, _extends({
    className: cardFooterClassName
  }, restProps), children);
}

export { Card, CardContent, CardContext, CardFooter, CardHeader, CardTitle };
