import { createElement as createElement$1, Fragment } from 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import ConditionalWrap from 'conditional-wrap';
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
import '../utils/useOptionsState.js';
import '../utils/useLabelPlaceholder.js';
import '../utils/parseIcons.js';
import '../utils/useIcon.js';
import '../utils/omitBy.js';
import '../utils/useDefaultProps.js';
import '../utils/useDebounce.js';
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
import '../utils/getHiddenScrollbarStyles.js';
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
import '../Button/index.js';
import '../Set.styles.js';
import '../Set/Set.js';
import 'react-loads-next';
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
import { FieldWrapper } from '../FieldWrapper/FieldWrapper.js';
import '../Group.styles.js';
import { Group } from '../Group/Group.js';
import '../Input/Input.js';
import '../Input/index.js';
import '../Menu.styles.js';
import '../DropdownMenu.styles.js';
import '../DropdownMenu/DropdownMenuButton.js';
import '../Modal.styles.js';
import '../Popover.styles.js';
import '../DropdownMenu/DropdownMenuPopover.js';
import '../DropdownMenu/DropdownMenuState.js';
import '../DropdownMenu/DropdownMenu.js';
import '../DropdownMenu/DropdownMenuItem.js';
import '../Divider.styles.js';
import '../Divider/Divider.js';
import '../DropdownMenu/DropdownMenuDivider.js';
import '../DropdownMenu/DropdownMenuGroup.js';
import '../DropdownMenu/DropdownMenuOptionGroup.js';
import '../DropdownMenu/DropdownMenuOptionItem.js';
import '../DropdownMenu/index.js';
import '../Rover.styles.js';
import '../Rover/RoverState.js';
import '../Rover/Rover.js';
import '../Rover/index.js';
import '../Menu/Menu.js';
import '../Menu/MenuGroup.js';
import '../Menu/MenuOptionGroup.js';
import '../Menu/MenuItem.js';
import '../Menu/MenuOptionItem.js';
import '../Menu/MenuDivider.js';
import '../Menu/index.js';
import '../Select.styles.js';
import { s as SelectMenuField$1 } from '../SelectMenu.styles.js';
import '../Tag.styles.js';
import '../Tag/Tag.js';
import './SelectMenuItem.js';
import './SelectMenuStaticItem.js';
import { SelectMenu } from './SelectMenu.js';

var useProps = createHook(function (props, _ref) {
  var themeKey = _ref.themeKey;

  var addonAfter = props.addonAfter,
      addonBefore = props.addonBefore,
      buttonProps = props.buttonProps,
      selectMenuProps = props.selectMenuProps,
      cacheKey = props.cacheKey,
      containLabel = props.containLabel,
      children = props.children,
      defaultValue = props.defaultValue,
      defer = props.defer,
      description = props.description,
      disabled = props.disabled,
      disableClear = props.disableClear,
      errorText = props.errorText,
      emptyText = props.emptyText,
      hasSearch = props.hasSearch,
      hasTags = props.hasTags,
      hint = props.hint,
      isDropdown = props.isDropdown,
      isLoading = props.isLoading,
      isMultiSelect = props.isMultiSelect,
      isOptional = props.isOptional,
      isRequired = props.isRequired,
      orientation = props.orientation,
      label = props.label,
      limit = props.limit,
      loadingText = props.loadingText,
      loadingMoreText = props.loadingMoreText,
      loadOptions = props.loadOptions,
      loadVariables = props.loadVariables,
      options = props.options,
      pagination = props.pagination,
      placeholder = props.placeholder,
      renderError = props.renderError,
      renderEmpty = props.renderEmpty,
      renderLoading = props.renderLoading,
      renderLoadingMore = props.renderLoadingMore,
      renderOption = props.renderOption,
      itemProps = props.itemProps,
      popoverProps = props.popoverProps,
      dropdownMenuInitialState = props.dropdownMenuInitialState,
      searchInputProps = props.searchInputProps,
      state = props.state,
      tagProps = props.tagProps,
      tooltip = props.tooltip,
      tooltipTriggerComponent = props.tooltipTriggerComponent,
      value = props.value,
      onChange = props.onChange,
      overrides = props.overrides,
      validationText = props.validationText,
      variant = props.variant,
      restProps = _objectWithoutPropertiesLoose(props, ["addonAfter", "addonBefore", "buttonProps", "selectMenuProps", "cacheKey", "containLabel", "children", "defaultValue", "defer", "description", "disabled", "disableClear", "errorText", "emptyText", "hasSearch", "hasTags", "hint", "isDropdown", "isLoading", "isMultiSelect", "isOptional", "isRequired", "orientation", "label", "limit", "loadingText", "loadingMoreText", "loadOptions", "loadVariables", "options", "pagination", "placeholder", "renderError", "renderEmpty", "renderLoading", "renderLoadingMore", "renderOption", "itemProps", "popoverProps", "dropdownMenuInitialState", "searchInputProps", "state", "tagProps", "tooltip", "tooltipTriggerComponent", "value", "onChange", "overrides", "validationText", "variant"]);

  var boxProps = Box$1.useProps(restProps);
  var className = useClassName({
    style: SelectMenuField$1,
    styleProps: props,
    themeKey: themeKey,
    prevClassName: boxProps.className
  });
  return _objectSpread2(_objectSpread2({}, boxProps), {}, {
    className: className,
    children: /*#__PURE__*/createElement$1(FieldWrapper, {
      description: description,
      hint: hint,
      isOptional: isOptional,
      isRequired: isRequired,
      label: label,
      overrides: overrides,
      state: state,
      tooltip: tooltip,
      tooltipTriggerComponent: tooltipTriggerComponent,
      validationText: validationText,
      variant: variant
    }, function (_ref2) {
      var elementProps = _ref2.elementProps;
      return /*#__PURE__*/createElement$1(ConditionalWrap, {
        condition: Boolean(addonBefore || addonAfter),
        wrap: function wrap(children) {
          return /*#__PURE__*/createElement$1(Group, {
            orientation: orientation,
            overrides: overrides
          }, children);
        }
      }, /*#__PURE__*/createElement$1(Fragment, null, addonBefore, /*#__PURE__*/createElement$1(SelectMenu, _extends({
        flex: addonBefore || addonAfter ? '1' : undefined,
        cacheKey: cacheKey,
        containLabel: containLabel,
        defer: defer,
        disabled: disabled,
        disableClear: disableClear,
        hasTags: hasTags,
        hasSearch: hasSearch,
        isDropdown: isDropdown,
        isLoading: isLoading,
        isMultiSelect: isMultiSelect,
        limit: limit,
        loadOptions: loadOptions,
        loadVariables: loadVariables,
        options: options,
        onChange: onChange,
        pagination: pagination,
        placeholder: placeholder,
        value: value,
        errorText: errorText,
        emptyText: emptyText,
        loadingText: loadingText,
        loadingMoreText: loadingMoreText,
        renderError: renderError,
        renderEmpty: renderEmpty,
        renderLoading: renderLoading,
        renderLoadingMore: renderLoadingMore,
        renderOption: renderOption,
        buttonProps: buttonProps,
        itemProps: itemProps,
        popoverProps: popoverProps,
        searchInputProps: searchInputProps,
        tagProps: tagProps,
        dropdownMenuInitialState: dropdownMenuInitialState,
        state: state,
        overrides: overrides,
        variant: variant
      }, elementProps, selectMenuProps)), addonAfter));
    })
  });
}, {
  themeKey: 'SelectMenuField'
});
var SelectMenuField = createComponent(function (props) {
  var SelectMenuFieldProps = useProps(props);
  return createElement({
    children: props.children,
    component: Box,
    use: props.use,
    htmlProps: SelectMenuFieldProps
  });
}, {
  attach: {
    useProps: useProps,
    displayName: 'SelectMenuField'
  },
  themeKey: 'SelectMenuField'
});

export { SelectMenuField };
