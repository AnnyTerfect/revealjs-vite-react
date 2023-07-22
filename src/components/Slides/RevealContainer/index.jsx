import React, { useEffect } from "react";
import Reveal from "reveal.js";

function RevealContainer({ children }) {
  useEffect(() => {
    window.Reveal = Reveal;
    Reveal.initialize({
      width: 1920,
      height: 1080,
      margin: 0,
      center: false,
      controls: false,
      progress: false,
    });
  }, []);

  return (
    <div className="reveal">
      <div className="slides !text-left">
        {children}
      </div>
    </div>
  );
}

export default RevealContainer;
