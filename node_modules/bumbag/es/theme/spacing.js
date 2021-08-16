import 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import 'conditional-wrap';
import '../utils/useLocalStorage.js';
import { _ as _objectSpread2 } from '../_rollupPluginBabelHelpers.js';
import '../utils/omit.js';
import '../ColorMode/utils.js';
import '../ColorMode/ColorModeContext.js';
import '../utils/pick.js';
import '../utils/cssProps.js';
import 'lodash/kebabCase';
import 'tinycolor2';
import { J as space } from '../getCSSFromStyleObject.js';
import '../utils/isFunction.js';
import '../utils/get.js';
import 'lodash/uniq';
import 'reakit/Id';
import 'deepmerge';
import 'lodash/set';
import 'lodash/get';
import 'capsize';
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/OutsideClickHandler.js';

var spacing = (function (overrides) {
  return _objectSpread2({
    minorUnit: 4,
    majorUnit: 8,
    xs: space(1, 'major'),
    sm: space(2, 'major'),
    md: space(4, 'major'),
    lg: space(6, 'major'),
    xl: space(8, 'major'),
    '2xl': space(12, 'major'),
    '3xl': space(16, 'major'),
    '4xl': space(20, 'major'),
    '5xl': space(24, 'major'),
    '6xl': space(28, 'major')
  }, overrides);
});

export default spacing;
