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
import { k as theme, L as breakpoint, J as space } from './getCSSFromStyleObject.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import './utils/gradient.js';
import '@emotion/is-prop-valid';
import './utils/OutsideClickHandler.js';
import { g as getAlignmentAttributes } from './Box.styles.js';
import { g as getFlexAlignmentAttributes } from './Flex.styles.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
var Set = function Set(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  display: flex;\n\n  ", ";\n\n  &&& > * {\n    ", ";\n\n    ", ";\n  }\n\n  &&& > *:first-child {\n    ", ";\n  }\n\n  &&& > *:not(:last-child):not(:first-child) {\n    ", ";\n  }\n\n  &&& > *:last-child {\n    ", ";\n  }\n\n  & {\n    ", ";\n  }\n"])), styleProps.orientation === 'vertical' ? css$1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n          flex-direction: column;\n\n          ", ";\n\n          ", "\n\n          & {\n            ", ";\n          }\n        "])), !styleProps.isFilled && css$1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n            align-items: flex-start;\n          "]))), getAlignmentAttributes(styleProps), theme(styleProps.themeKey, "styles.vertical")(styleProps)) : css$1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n          ", ";\n        "])), breakpoint(styleProps.verticalBelow ? "max-" + styleProps.verticalBelow : null, css$1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n              flex-direction: column;\n\n              ", ";\n\n              ", "\n\n              & {\n                ", ";\n              }\n            "])), !styleProps.isFilled && css$1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n                align-items: flex-start;\n              "]))), getAlignmentAttributes(styleProps), theme(styleProps.themeKey, "styles.vertical")(styleProps)), {
    else: css$1(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n                flex-wrap: wrap;\n                align-items: center;\n                justify-content: flex-start;\n                margin-left: -", "rem;\n                margin-top: -", "rem;\n\n                ", "\n\n                & {\n                  ", ";\n                }\n              "])), space(styleProps.spacing)(styleProps), space(styleProps.spacing)(styleProps), getFlexAlignmentAttributes(styleProps), theme(styleProps.themeKey, "styles.horizontal")(styleProps))
  })(styleProps)), styleProps.orientation === 'vertical' ? css$1(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n            &:not(:last-child) {\n              margin-bottom: ", "rem;\n            }\n\n            & {\n              ", ";\n            }\n          "])), space(styleProps.spacing)(styleProps), theme(styleProps.themeKey, "styles.child.vertical")(styleProps)) : css$1(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n            ", ";\n          "])), breakpoint(styleProps.verticalBelow ? "max-" + styleProps.verticalBelow : null, css$1(_templateObject10 || (_templateObject10 = _taggedTemplateLiteralLoose(["\n                &:not(:last-child) {\n                  margin-bottom: ", "rem;\n                }\n\n                & {\n                  ", ";\n                }\n              "])), space(styleProps.spacing)(styleProps), theme(styleProps.themeKey, "styles.child.vertical")(styleProps)), {
    else: css$1(_templateObject11 || (_templateObject11 = _taggedTemplateLiteralLoose(["\n                  margin-left: ", "rem;\n                  margin-top: ", "rem;\n\n                  & {\n                    ", ";\n                  }\n                "])), space(styleProps.spacing)(styleProps), space(styleProps.spacing)(styleProps), theme(styleProps.themeKey, "styles.child.horizontal")(styleProps))
  })(styleProps)), theme(styleProps.themeKey, "styles.child.base")(styleProps), theme(styleProps.themeKey, "styles.child.first")(styleProps), theme(styleProps.themeKey, "styles.child.middle")(styleProps), theme(styleProps.themeKey, "styles.child.last")(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Set_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Set: Set
});

export { Set_styles as S, Set as a };
