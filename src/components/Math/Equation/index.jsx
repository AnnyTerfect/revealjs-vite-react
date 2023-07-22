import React from "react";
import { renderToString } from "react-dom/server";
import "mathjax-full/es5/tex-svg-full";

function decodeHtmlEntities(htmlString) {
  return htmlString
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&copy;/g, "©")
    .replace(/&reg;/g, "®")
    .replace(/&euro;/g, "€")
    .replace(/<!--.*?-->/g, "")
    .replace(/<\?.*?\?>/g, "")
    .replace(/<!.*?>/g, "");
}

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
