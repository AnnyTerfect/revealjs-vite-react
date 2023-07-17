import React from "react";

function Conclusion({ children, size=5, className }) {
  return (
    <div className={`${className} text-center text-red-500`} style={{
      fontSize: `${size / 2}rem`,
      lineHeight: `${size / 2}rem`,
    }}>
      {children}
    </div>
  )
}

export default Conclusion;
