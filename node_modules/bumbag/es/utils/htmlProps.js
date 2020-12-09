import isPropValid from '@emotion/is-prop-valid';

var omitProps = ['focusable', 'spacing', 'size', 'kind', 'variant', 'orientation', 'wrap', 'colorMode', 'title'];
function pickHTMLProps(props) {
  var filteredProps = {};

  for (var prop in props) {
    if (isPropValid(prop) && !omitProps.includes(prop)) {
      filteredProps[prop] = props[prop];
    }
  }

  return filteredProps;
}

export { pickHTMLProps };
