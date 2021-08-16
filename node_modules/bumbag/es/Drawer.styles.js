import 'react';
import './Provider/ThemeContext.js';
import 'classnames';
import { css } from '@emotion/css';
import { css as css$1 } from '@emotion/react';
import '@emotion/styled';
import { a as _taggedTemplateLiteralLoose } from './_rollupPluginBabelHelpers.js';
import './ColorMode/ColorModeContext.js';
import './utils/cssProps.js';
import 'lodash/kebabCase';
import 'tinycolor2';
import { H as palette, m as altitude, k as theme } from './getCSSFromStyleObject.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
var Drawer = function Drawer(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  && {\n    position: fixed;\n    background-color: ", ";\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n  }\n\n  ", ";\n\n  & {\n    ", ";\n  }\n"])), palette('background')(styleProps), styleProps.placement === 'left' && css$1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n        left: 0;\n      "]))), styleProps.placement === 'right' && css$1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n        right: 0;\n      "]))), styleProps.placement === 'top' && css$1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n        top: 0;\n      "]))), styleProps.placement === 'bottom' && css$1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n        bottom: 0;\n      "]))), (styleProps.placement === 'left' || styleProps.placement === 'right' || styleProps.isFullScreen) && css$1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n        height: ", ";\n      "])), styleProps.viewportHeight), (styleProps.placement === 'top' || styleProps.placement === 'bottom' || styleProps.isFullScreen) && css$1(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n        width: 100%;\n      "]))), altitude('300')(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};
var DrawerDisclosure = function DrawerDisclosure(styleProps) {
  return css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  & {\n    ", ";\n  }\n"])), theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Drawer_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Drawer: Drawer,
  DrawerDisclosure: DrawerDisclosure
});

export { Drawer_styles as D, DrawerDisclosure as a, Drawer as b };
