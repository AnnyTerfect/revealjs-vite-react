import React from "react";
import styles from "./index.module.scss";

function Theorem({ type, name, number, children, className }) {
  return (
    <div
      className={`${className} ${styles.theorem} my-1 p-3 border-2 border-gray-600 rounded-md text-3xl bg-white`}
    >
      <b>
        {type || "Theorem"}
        {number ? ` ${number}` : ""}
      </b>
      <span>{name ? ` (${name})` : ""}</span>
      <b>.</b>
      &nbsp;
      <i>
        {children}
      </i>
    </div>
  );
}

export default Theorem;
