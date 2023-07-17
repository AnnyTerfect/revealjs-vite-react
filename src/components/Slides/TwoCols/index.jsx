import React from "react";

function TwoCols({ left, right, className = "" }) {
  return (
    <div className={`${className} grid grid-cols-2 gap-4`}>
      <div className="col-span-1">{left}</div>
      <div className="col-span-1">{right}</div>
    </div>
  );
}


export default TwoCols;