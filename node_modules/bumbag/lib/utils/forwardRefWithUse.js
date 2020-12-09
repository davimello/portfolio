'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

// I have no idea how any of this works. But it works. Thanks Jared. https://gist.github.com/jaredpalmer/80982b3d787359762506fce578108358
function forwardRefWithUse(comp) {
  return React.forwardRef(comp);
}

exports.forwardRefWithUse = forwardRefWithUse;
