import { useState, useEffect, useCallback, createElement as createElement$1, Fragment } from 'react';
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
import '../utils/useLabelPlaceholder.js';
import '../utils/parseIcons.js';
import '../utils/useIcon.js';
import '../utils/omitBy.js';
import '../utils/useDefaultProps.js';
import 'lodash/uniq';
import { useClassName } from '../utils/useClassName.js';
import 'reakit/Id';
import '../utils/uniqueId.js';
import '../utils/palette.js';
import '../utils/mergeRefs.js';
import 'deepmerge';
import 'lodash/set';
import '../utils/bindFns.js';
import { createComponent } from '../utils/createComponent.js';
import { createElement } from '../utils/createElement.js';
import { createHook } from '../utils/createHook.js';
import 'lodash/get';
import '../utils/fieldAdaptors.js';
import 'capsize';
import '../utils/getCapsizeStyles.js';
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/htmlProps.js';
import '../utils/OutsideClickHandler.js';
import '../theme/palette.js';
import { Box } from 'reakit';
import '../Button.styles.js';
import '../Box.styles.js';
import { Box as Box$1 } from '../Box/Box.js';
import '../Flex.styles.js';
import '../Flex/Flex.js';
import '../Icon.styles.js';
import '../Icon/Icon.js';
import '../Text.styles.js';
import '../Text/Text.js';
import '../Text/TextBlock.js';
import '../Text/TextInline.js';
import '../Text/index.js';
import '../Spinner.styles.js';
import '../Spinner/Spinner.js';
import '../Button/Button.js';
import 'reakit/VisuallyHidden';
import '../Button/ButtonClose.js';
import { Button } from '../Button/index.js';
import '../Set.styles.js';
import { Set } from '../Set/Set.js';
import '../Input.styles.js';
import 'react-input-mask';
import '../FieldWrapper.styles.js';
import '../Card.styles.js';
import '../Card/Card.js';
import '../Card/index.js';
import '../Disclosure.styles.js';
import '../Disclosure/DisclosureState.js';
import '../Disclosure/Disclosure.js';
import '../Disclosure/DisclosureContent.js';
import '../Disclosure/index.js';
import '../Label.styles.js';
import '../Label/Label.js';
import '../FieldWrapper/FieldWrapper.js';
import '../Group.styles.js';
import '../Group/Group.js';
import '../Input/Input.js';
import '../Input/index.js';
import { a as Pagination$1, b as PaginationButton, c as PaginationSelect, d as PaginationPrepositionText } from '../Pagination.styles.js';
import _times from 'lodash/times';
import '../Select.styles.js';
import '../Select/Select.js';
import { Select } from '../Select/index.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var _currentPage = props.currentPage,
      nextButtonProps = props.nextButtonProps,
      nextText = props.nextText,
      numberOfPages = props.numberOfPages,
      onChangePage = props.onChangePage,
      overrides = props.overrides,
      prepositionText = props.prepositionText,
      previousButtonProps = props.previousButtonProps,
      previousText = props.previousText,
      selectProps = props.selectProps,
      restProps = _objectWithoutPropertiesLoose(props, ["currentPage", "nextButtonProps", "nextText", "numberOfPages", "onChangePage", "overrides", "prepositionText", "previousButtonProps", "previousText", "selectProps"]);

  var setProps = Set.useProps(_objectSpread2(_objectSpread2({}, restProps), {}, {
    overrides: overrides
  }));

  var _React$useState = useState(1),
      currentPage = _React$useState[0],
      setCurrentPage = _React$useState[1];

  useEffect(function () {
    setCurrentPage(_currentPage || 1);
  }, [_currentPage]);
  var className = useClassName({
    style: Pagination$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: setProps.className
  });
  var buttonClassName = useClassName({
    style: PaginationButton,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Button'
  });
  var selectClassName = useClassName({
    style: PaginationSelect,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'Select'
  });
  var prepositionClassName = useClassName({
    style: PaginationPrepositionText,
    styleProps: props,
    themeKey: themeKey,
    themeKeySuffix: 'PrepositionText'
  });
  var handleChangePage = useCallback(function (page) {
    if (onChangePage) {
      onChangePage(page);
    } else {
      setCurrentPage(page);
    }
  }, [onChangePage]);
  var handleChangePageDropdown = useCallback(function (e) {
    var index = parseInt(e.target.value, 10);
    handleChangePage(index + 1);
  }, [handleChangePage]);
  return _objectSpread2(_objectSpread2({}, setProps), {}, {
    className: className,
    children: /*#__PURE__*/createElement$1(Fragment, null, /*#__PURE__*/createElement$1(Button, _extends({
      className: buttonClassName,
      disabled: currentPage === 1,
      onClick: function onClick() {
        return handleChangePage(currentPage - 1);
      },
      iconBefore: "chevron-left",
      variant: "ghost",
      themeKey: themeKey + ".Button",
      overrides: overrides
    }, previousButtonProps), previousText), /*#__PURE__*/createElement$1(Select, _extends({
      className: selectClassName,
      onChange: handleChangePageDropdown,
      options: _times(numberOfPages).map(function (_, index) {
        return {
          label: "" + (index + 1),
          value: index
        };
      }),
      value: currentPage - 1,
      themeKey: themeKey + ".Select",
      overrides: overrides
    }, selectProps)), /*#__PURE__*/createElement$1(Box$1, {
      className: prepositionClassName
    }, prepositionText, " ", numberOfPages), /*#__PURE__*/createElement$1(Button, _extends({
      className: buttonClassName,
      disabled: currentPage === numberOfPages,
      onClick: function onClick() {
        return handleChangePage(currentPage + 1);
      },
      iconAfter: "chevron-right",
      variant: "ghost",
      themeKey: themeKey + ".Button",
      overrides: overrides
    }, nextButtonProps), nextText))
  });
}, {
  defaultProps: {
    prepositionText: 'of',
    previousText: 'Previous',
    nextText: 'Next'
  },
  themeKey: 'Pagination'
});
var Pagination = createComponent(function (props) {
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
    displayName: 'Pagination'
  },
  themeKey: 'Pagination'
});

export { Pagination };
