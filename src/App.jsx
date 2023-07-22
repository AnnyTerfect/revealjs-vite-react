import React from "react";
import RevealContainer from "./components/Slides/RevealContainer";
import PageNumberProvider from "./components/Provider/PageNumber";
import CoverPage from "./meta/CoverPage";
import Slides from "./Slides";
import Pagination from "./components/Slides/Pagination";

function App() {
  return (
    <RevealContainer>
      <PageNumberProvider>
        <CoverPage title="This Is a Test Title" author="Qin-Cheng Zheng" />
        <Slides />
        <Pagination />
      </PageNumberProvider>
    </RevealContainer>
  );
}

export default App;
