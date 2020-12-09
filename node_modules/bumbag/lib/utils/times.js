'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var times = function times(n, func) {
  if (func === void 0) {
    func = function func(i) {
      return i;
    };
  }

  return Array.from({
    length: n
  }).map(function (_, i) {
    return func(i);
  });
};

exports.times = times;
