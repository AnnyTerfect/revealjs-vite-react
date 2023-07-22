import React from "react";
import Reveal from "reveal.js";
import usePageNumber from "../../../hooks/usePageNumber";

function Pagination() {
  const page = usePageNumber();
  
  return page > 0 && (
    <div className="absolute right-4 bottom-4 z-50 text-2xl">
      {page} / {Reveal.getTotalSlides() - 1}
    </div>
  )
}

export default Pagination;
