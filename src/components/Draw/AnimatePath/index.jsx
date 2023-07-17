import React, { useRef, useEffect, useState } from "react";
import styles from "./index.module.scss";

function AnimatePath({
  d,
  className,
  arrowSize = 1.5,
  transitionDuration = 1000,
}) {
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);
  useEffect(() => {
    setPathLength(pathRef.current.getTotalLength());
  }, [d]);
  return (
    <g
      className={className}
      style={{
        opacity: 1,
        "--animate-path": `path("${d}")`,
        "--transition-duration": `${transitionDuration}ms`,
      }}
    >
      <path
        ref={pathRef}
        d={d}
        className={`fill-none stroke-1 stroke-current transition-all ease-in-out ${styles.path}`}
        style={{ strokeDasharray: pathLength, strokeDashoffset: pathLength }}
      />
      <polygon
        className={`${styles.arrow} stroke-1 stroke-none fill-current`}
        points={`-${arrowSize},-${arrowSize} ${arrowSize},0 -${arrowSize},${arrowSize}`}
      />
    </g>
  );
}

export default AnimatePath;
