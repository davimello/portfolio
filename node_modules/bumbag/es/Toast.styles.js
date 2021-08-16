import 'react';
import './Provider/ThemeContext.js';
import 'classnames';
import { css } from '@emotion/css';
import { keyframes, css as css$1 } from '@emotion/react';
import '@emotion/styled';
import { a as _taggedTemplateLiteralLoose } from './_rollupPluginBabelHelpers.js';
import './ColorMode/ColorModeContext.js';
import './utils/cssProps.js';
import 'lodash/kebabCase';
import 'tinycolor2';
import { k as theme } from './getCSSFromStyleObject.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
var Toast = function Toast(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var ToastOverlay = function ToastOverlay(styleProps) {
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  && {\n    min-width: 350px;\n    z-index: 19900411;\n  }\n\n  & .bb-Toast {\n    animation: ", " 250ms ease-in-out forwards;\n  }\n\n  & {\n    ", ";\n  }\n"])), getAnimation(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};

var getAnimation = function getAnimation(styleProps) {
  return keyframes(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  from {\n    ", "\n\n    ", "\n  }\n\n  to {\n    ", "\n\n    ", "\n  }\n"])), styleProps.fade && css$1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n        opacity: 0;\n      "]))), styleProps.slide && css$1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n        ", "\n        ", "\n        ", "\n        ", "\n      "])), ['top-end', 'right', 'bottom-end'].includes(styleProps.placement) && css$1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n            transform: translateX(", ");\n          "])), styleProps.fade ? '10%' : '130%'), ['bottom'].includes(styleProps.placement) && css$1(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n            transform: translateY(", ");\n          "])), styleProps.fade ? '10%' : '130%'), ['top-start', 'left', 'bottom-start'].includes(styleProps.placement) && css$1(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n            transform: translateX(", ");\n          "])), styleProps.fade ? '-10%' : '-130%'), ['top'].includes(styleProps.placement) && css$1(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n            transform: translateY(", ");\n          "])), styleProps.fade ? '-10%' : '-130%')), styleProps.fade && css$1(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n        opacity: 1;\n      "]))), styleProps.slide && css$1(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n        ", " ", ";\n      "])), ['top-end', 'right', 'bottom-end', 'top-start', 'left', 'bottom-start'].includes(styleProps.placement) && css$1(_templateObject12 || (_templateObject12 = _taggedTemplateLiteralLoose(["\n          transform: translateX(0);\n        "]))), ['bottom', 'top'].includes(styleProps.placement) && css$1(_templateObject13 || (_templateObject13 = _taggedTemplateLiteralLoose(["\n          transform: translateY(0);\n        "])))));
};

var Toast_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Toast: Toast,
  ToastOverlay: ToastOverlay
});

export { Toast_styles as T, Toast as a, ToastOverlay as b };
