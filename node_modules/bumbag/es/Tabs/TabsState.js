import { b as _objectWithoutPropertiesLoose } from '../_rollupPluginBabelHelpers.js';
import { useTabState as useTabState$1 } from 'reakit';

function useTabState(initialState) {
  return useTabState$1(initialState);
}
function TabState(props) {
  var children = props.children,
      restProps = _objectWithoutPropertiesLoose(props, ["children"]);

  var state = useTabState(restProps);
  return props.children(state);
}

export { TabState, useTabState };
