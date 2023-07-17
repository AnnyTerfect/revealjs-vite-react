import React from "react";

function Transition({ children, type = "fade" }) {
  const transitionChildren = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      'data-transition': type,
    })
  );

  return transitionChildren;
}

export default Transition;
