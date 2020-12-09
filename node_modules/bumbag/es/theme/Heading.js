import { _ as _objectSpread2 } from '../_rollupPluginBabelHelpers.js';

var Heading = (function (overrides) {
  return _objectSpread2(_objectSpread2({}, overrides), {}, {
    h1: _objectSpread2({
      fontSize: '700',
      shrinkScale: 0.75
    }, overrides.h1),
    h2: _objectSpread2({
      fontSize: '600',
      shrinkScale: 0.75
    }, overrides.h2),
    h3: _objectSpread2({
      fontSize: '500',
      shrinkScale: 0.75
    }, overrides.h3),
    h4: _objectSpread2({
      fontSize: '400',
      shrinkScale: 0.75
    }, overrides.h4),
    h5: _objectSpread2({
      fontSize: '300',
      shrinkScale: 0.875
    }, overrides.h5),
    h6: _objectSpread2({
      fontSize: '200',
      shrinkScale: 1
    }, overrides.h6),
    defaultProps: _objectSpread2({
      shrinkBelow: 'tablet'
    }, overrides.defaultProps)
  });
});

export default Heading;
