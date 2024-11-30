import React from "react";
import styles from "./CategoryItem.module.css";

export const CategoryItem = ({ title, icon }) => {
  return (
    <div className={styles.categoryItem}>
      <div className={styles.categoryIcon}>{icon}</div>
      <div className={styles.categoryTitle}>{title}</div>
    </div>
  );
};