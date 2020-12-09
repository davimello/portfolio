'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var omit = function omit(obj) {
  for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  return Object.keys(obj).reduce(function (newObject, key) {
    if (keys.indexOf(key) === -1) newObject[key] = obj[key];
    return newObject;
  }, {});
};

exports.omit = omit;
