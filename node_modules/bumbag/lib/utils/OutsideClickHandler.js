'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

/* eslint-disable react/prop-types */
function OutsideClickHandler(props) {
  var children = props.children,
      onOutsideClick = props.onOutsideClick;
  var childNodeRef = React.useRef();
  var handleOutsideClick = React.useCallback(function (e) {
    // @ts-ignore
    var isDescendantOfRoot = childNodeRef.current && childNodeRef.current.contains(e.target);

    if (!isDescendantOfRoot) {
      onOutsideClick(e);
    }
  }, [onOutsideClick]);
  React.useEffect(function () {
    if (typeof window !== 'undefined') {
      window.addEventListener('click', handleOutsideClick);
    }

    return function () {
      window.removeEventListener('click', handleOutsideClick);
    };
  });
  return /*#__PURE__*/React.createElement("div", {
    ref: childNodeRef
  }, children);
}
OutsideClickHandler.defaultProps = {
  children: /*#__PURE__*/React.createElement("span", null),
  onOutsideClick: function onOutsideClick() {}
};

exports.OutsideClickHandler = OutsideClickHandler;
