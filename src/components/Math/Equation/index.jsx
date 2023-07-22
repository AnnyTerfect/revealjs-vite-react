import React from "react";
import { renderToString } from "react-dom/server";
import decodeHtmlEntities from "../../../utils";
import "mathjax-full/es5/tex-svg-full";

function Equation({ children, ...props }) {
  return window.MathJax.tex2svg ? (
    <div
      className="text-center my-2 mx-0"
      dangerouslySetInnerHTML={{
        __html: window.MathJax.tex2svg(
          decodeHtmlEntities(
            renderToString(children)
          )
        ).innerHTML,
      }}
      {...props}
    />
  ) : (
    children
  );
}

export default Equation;
