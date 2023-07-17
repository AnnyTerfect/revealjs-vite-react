import React from "react";
import "mathjax-full/es5/tex-svg-full";
import styles from "./index.module.scss";

function InlineEquation({ children }) {
  return window.MathJax.tex2svg ? (
    <span
      className={styles.equation}
      dangerouslySetInnerHTML={{
        __html: window.MathJax.tex2svg(children).innerHTML,
      }}
    />
  ) : (
    children
  );
}

export default InlineEquation;
