import React, { useState, useEffect } from "react";
import Reveal from "reveal.js";
import PageNumberContext from "../../context/PageNumber";

function PageNumberProvider({ children }) {
  const [page, setPage] = useState(0);

  useEffect(() => {
    Reveal.on("slidechanged", (event) => {
      setPage(event.indexh);
    });
  }, []);

  return (
    <PageNumberContext.Provider value={page}>
      {children}
    </PageNumberContext.Provider>
  )
}

export default PageNumberProvider;
