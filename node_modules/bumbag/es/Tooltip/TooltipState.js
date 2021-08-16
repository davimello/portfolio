import { b as _objectWithoutPropertiesLoose } from '../_rollupPluginBabelHelpers.js';
import { useTooltipState as useTooltipState$1 } from 'reakit';

function useTooltipState(initialState) {
  return useTooltipState$1(initialState);
}
function TooltipState(props) {
  var children = props.children,
      restProps = _objectWithoutPropertiesLoose(props, ["children"]);

  var state = useTooltipState(restProps);
  return props.children(state);
}

export { TooltipState, useTooltipState };
