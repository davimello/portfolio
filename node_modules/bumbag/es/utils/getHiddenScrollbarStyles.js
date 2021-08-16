import 'classnames';
import '@emotion/css';
import { css } from '@emotion/react';
import '@emotion/styled';
import { a as _taggedTemplateLiteralLoose } from '../_rollupPluginBabelHelpers.js';

var _templateObject;
function getHiddenScrollbarStyles() {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n    &::-webkit-scrollbar {\n      width: 0px;\n      background: transparent;\n    }\n    & {\n      scrollbar-width: none;\n      -ms-overflow-style: none;\n    }\n  "])));
}

export { getHiddenScrollbarStyles };
