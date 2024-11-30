import React from "react";
import styles from "./CategoryItem.module.css";

export const CategoryItem = ({ title, icon, onClick }) => {
  return (
    <div className={styles.categoryItem} onClick={onClick}>
      <div className={styles.categoryIcon}>{icon}</div>
      <div className={styles.categoryTitle}>{title}</div>
    </div>
  );
};




