import React from 'react';

function TextFrame({ children, border = true, className, ...props }) {
  return (
    <div className={`${border ? 'border-2 border-black' : ''} ${className} p-3`} {...props}>
      {children}
    </div>
  )
};

export default TextFrame;
