import 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import 'conditional-wrap';
import '../utils/useLocalStorage.js';
import '../_rollupPluginBabelHelpers.js';
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
import '../utils/useIcon.js';
import '../utils/omitBy.js';
import '../utils/useDefaultProps.js';
import 'lodash/uniq';
import '../utils/useClassName.js';
import 'reakit/Id';
import '../utils/uniqueId.js';
import '../utils/palette.js';
import '../utils/mergeRefs.js';
import 'deepmerge';
import 'lodash/set';
import '../utils/createComponent.js';
import '../utils/createElement.js';
import '../utils/createHook.js';
import 'lodash/get';
import 'capsize';
import '../utils/getCapsizeStyles.js';
import '../utils/getHiddenScrollbarStyles.js';
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/htmlProps.js';
import '../utils/OutsideClickHandler.js';
import '../theme/palette.js';
import '../ActionButtons.styles.js';
import 'reakit';
import '../Button.styles.js';
import '../Box.styles.js';
import '../Box/Box.js';
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
import '../ActionButtons/ActionButtons.js';
import '../Modal.styles.js';
export { P as popoverStyles } from '../Popover.styles.js';
import { usePopoverContext, usePopoverState, PopoverState } from './PopoverState.js';
export { PopoverState, PopoverStateContext, usePopoverContext, usePopoverState } from './PopoverState.js';
import { Popover as Popover$1, PopoverArrow, PopoverContent, PopoverFooter, PopoverHeader, PopoverTitle } from './Popover.js';
export { PopoverArrow, PopoverContent, PopoverContext, PopoverFooter, PopoverHeader, PopoverTitle } from './Popover.js';
import { PopoverBackdrop } from './PopoverBackdrop.js';
export { PopoverBackdrop } from './PopoverBackdrop.js';
import { PopoverDisclosure } from './PopoverDisclosure.js';
export { PopoverDisclosure } from './PopoverDisclosure.js';

var Popover = Object.assign(Popover$1, {
  Arrow: PopoverArrow,
  Backdrop: PopoverBackdrop,
  Content: PopoverContent,
  Disclosure: PopoverDisclosure,
  Footer: PopoverFooter,
  Header: PopoverHeader,
  Title: PopoverTitle,
  useContext: usePopoverContext,
  useState: usePopoverState,
  State: PopoverState
});

export { Popover };
