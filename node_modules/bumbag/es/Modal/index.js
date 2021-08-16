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
import '../utils/omitBy.js';
import '../utils/useDefaultProps.js';
import 'lodash/uniq';
import '../utils/useClassName.js';
import 'reakit/Id';
import '../utils/mergeRefs.js';
import 'deepmerge';
import 'lodash/set';
import '../utils/createComponent.js';
import '../utils/createElement.js';
import '../utils/createHook.js';
import 'lodash/get';
import 'capsize';
import '../utils/getHiddenScrollbarStyles.js';
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/htmlProps.js';
import '../utils/OutsideClickHandler.js';
import 'reakit';
import '../Box.styles.js';
import '../Box/Box.js';
export { M as modalStyles } from '../Modal.styles.js';
import { useModalContext, useModalState, ModalState } from './ModalState.js';
export { ModalContext, ModalState, useModalContext, useModalState } from './ModalState.js';
import { ModalBackdrop } from './ModalBackdrop.js';
export { ModalBackdrop } from './ModalBackdrop.js';
import { Modal as Modal$1 } from './Modal.js';
import { ModalDisclosure } from './ModalDisclosure.js';
export { ModalDisclosure } from './ModalDisclosure.js';

var Modal = Object.assign(Modal$1, {
  Backdrop: ModalBackdrop,
  Disclosure: ModalDisclosure,
  useContext: useModalContext,
  useState: useModalState,
  State: ModalState
});

export { Modal };
