import React from "react";
import { renderToString } from "react-dom/server";
import { decodeHtmlEntities } from "../../../utils";
import "mathjax-full/es5/tex-svg-full";
import styles from "./index.module.scss";

function InlineEquation({ children }) {
  return window.MathJax.tex2svg ? (
    <span
      className={styles.equation}
      dangerouslySetInnerHTML={{
        __html: window.MathJax.tex2svg(
          decodeHtmlEntities(
            renderToString(children)
          )
        ).innerHTML,
      }}
    />
  ) : (
    children
  );
}

export default InlineEquation;
