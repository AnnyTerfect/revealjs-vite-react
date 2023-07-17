import React, { useState, useEffect } from "react";
import Reveal from "reveal.js";
import CoverPage from "./meta/CoverPage";
import Slides from "./Slides";

function App() {
  const [page, setPage] = useState(0);

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
    Reveal.on("slidechanged", (event) => {
      setPage(event.indexh);
    });
  }, []);

  return (
    <div className="reveal">
      <div className="slides !text-left">
        <CoverPage title="This Is a Test Title" author="Qin-Cheng Zheng" />
        <Slides />
        {page > 0 && (
          <div className="absolute right-4 bottom-4 z-50">
            {page} / {Reveal.getTotalSlides() - 1}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
