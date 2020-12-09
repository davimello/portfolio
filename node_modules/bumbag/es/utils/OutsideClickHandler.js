import { useRef, useCallback, useEffect, createElement } from 'react';

/* eslint-disable react/prop-types */
function OutsideClickHandler(props) {
  var children = props.children,
      onOutsideClick = props.onOutsideClick;
  var childNodeRef = useRef();
  var handleOutsideClick = useCallback(function (e) {
    // @ts-ignore
    var isDescendantOfRoot = childNodeRef.current && childNodeRef.current.contains(e.target);

    if (!isDescendantOfRoot) {
      onOutsideClick(e);
    }
  }, [onOutsideClick]);
  useEffect(function () {
    if (typeof window !== 'undefined') {
      window.addEventListener('click', handleOutsideClick);
    }

    return function () {
      window.removeEventListener('click', handleOutsideClick);
    };
  });
  return /*#__PURE__*/createElement("div", {
    ref: childNodeRef
  }, children);
}
OutsideClickHandler.defaultProps = {
  children: /*#__PURE__*/createElement("span", null),
  onOutsideClick: function onOutsideClick() {}
};

export { OutsideClickHandler };
