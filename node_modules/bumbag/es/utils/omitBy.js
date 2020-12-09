import { _ as _objectSpread2 } from '../_rollupPluginBabelHelpers.js';

var omitBy = function omitBy(obj, check) {
  obj = _objectSpread2({}, obj);
  Object.entries(obj).forEach(function (_ref) {
    var key = _ref[0],
        value = _ref[1];
    return check(value) && delete obj[key];
  });
  return obj;
};

export { omitBy };
