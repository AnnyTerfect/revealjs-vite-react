import React from "react";
import "mathjax-full/es5/tex-svg-full";

function Equation({ children }) {
  return window.MathJax.tex2svg ? (
    <div className="text-center my-2 mx-0"
      dangerouslySetInnerHTML={{
        __html: window.MathJax.tex2svg(children).innerHTML,
      }}
    />
  ) : (
    children
  );
}

export default Equation;
