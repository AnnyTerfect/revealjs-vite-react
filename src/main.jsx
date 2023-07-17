import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "mathjax-full/es5/tex-svg-full";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
