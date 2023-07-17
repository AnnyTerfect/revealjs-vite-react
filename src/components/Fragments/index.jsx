import React from "react";

function Fragments({ children, transitionClass = "fade-in" }) {
  const fragmentedChildren = React.Children.map(children, child => React.cloneElement(child, {
    className: `fragment ${transitionClass} ${ child.props.className || ''}`
  }));

  return fragmentedChildren;
}

export default Fragments;
