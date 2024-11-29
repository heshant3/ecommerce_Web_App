import React from "react";
import styles from "./ProductCard.module.css";

export const ProductCard = ({ imageUrl, rating, title, price }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img
          loading="lazy"
          src={imageUrl}
          alt=""
          className={styles.wishlistIcon}
        />
        <div className={styles.ratingContainer}>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <img
                key={index}
                loading="lazy"
                src={`http://b.io/ext_${index < rating ? "3" : "4"}-`}
                alt=""
                className={styles.ratingIcon}
              />
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
