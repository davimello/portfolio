import { unstable_useId } from 'reakit/Id';

var defaultPrefix = 'id-';
var generateId = function generateId(prefix) {
  if (prefix === void 0) {
    prefix = defaultPrefix;
  }

  return process.env.BUMBAG_ENV === 'test' ? '' : "" + prefix + Math.random().toString(32).substr(2, 6);
};
function useUniqueId() {
  var _unstable_useId = unstable_useId(),
      id = _unstable_useId.id;

  return process.env.BUMBAG_ENV === 'test' ? 'id-test' : id;
}

export { generateId, useUniqueId };
