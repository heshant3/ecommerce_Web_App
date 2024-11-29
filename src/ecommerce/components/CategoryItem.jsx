import React from "react";
import styles from "./CategoryItem.module.css";

export const CategoryItem = ({ title }) => {
  return (
    <div className={styles.categoryItem}>
      <div className={styles.categoryImage} />
      <div className={styles.categoryTitle}>{title}</div>
    </div>
  );
};
