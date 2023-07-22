import { useContext } from "react";
import PageNumberContext from "../context/PageNumber";

function usePageNumber() {
  const context = useContext(PageNumberContext);
  if (context === undefined) {
    throw new Error("usePageNumber must be used within a PageNumberContext");
  }
  return context;
}

export default usePageNumber;
