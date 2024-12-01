import React from "react";
import styles from "./Button.module.css";

export const Button = ({
  children,
  variant = "primary",
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[variant]} ${className}`}
      tabIndex="0"
    >
      {children}
    </button>
  );
};
