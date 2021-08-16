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
import { L as breakpoint, J as space, k as theme } from './getCSSFromStyleObject.js';
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

var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var Level = function Level(styleProps) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  &&& {\n    ", ";\n  }\n\n\n  & {\n    ", ";\n  }\n"])), breakpoint(styleProps.orientation === 'horizontal' && styleProps.verticalBelow ? "max-" + styleProps.verticalBelow : null, css$1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n        flex-direction: column;\n\n        & > *:not(:last-child) {\n          margin-bottom: ", "rem;\n        }\n\n        ", "\n      "])), space(styleProps.spacing)(styleProps), getAlignmentAttributes(styleProps)), {
    else: css$1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n          justify-content: space-between;\n\n          ", "\n        "])), styleProps.orientation === 'vertical' && css$1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n            flex-direction: column;\n          "]))))
  })(styleProps), theme(styleProps.themeKey, "styles.base")(styleProps));
};

var Level_styles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Level: Level
});

export { Level_styles as L, Level as a };
