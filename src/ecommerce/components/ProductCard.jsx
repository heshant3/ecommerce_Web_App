import React from "react";
import styles from "./ProductCard.module.css";
import { IoMdHeart } from "react-icons/io";
import { TiStar } from "react-icons/ti";

export const ProductCard = ({ imageUrl, rating, title, price }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <div className={styles.hertIcon}>
          <IoMdHeart size={20} color="#43555e" />
        </div>
        <div className={styles.ratingContainer}>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <TiStar size={20} color="#43555e" />
            ))}
        </div>
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productTitle}>{title}</div>
        <div className={styles.productPrice}>{price}</div>
      </div>
    </div>
  );
};
