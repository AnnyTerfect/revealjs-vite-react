import React, { useEffect } from "react";
import Reveal from "reveal.js";
import PageNumberProvider from "./components/Provider/PageNumber";
import CoverPage from "./meta/CoverPage";
import Slides from "./Slides";
import Pagination from "./components/Slides/Pagination";

function App() {
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
        <PageNumberProvider>
          <CoverPage title="This Is a Test Title" author="Qin-Cheng Zheng" />
          <Slides />
          <Pagination />
        </PageNumberProvider>
      </div>
    </div>
  );
}

export default App;
