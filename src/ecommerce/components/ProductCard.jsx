import React, { useState } from "react";
import styles from "./ProductCard.module.css";
import { GoHeart, GoHeartFill } from "react-icons/go"; // Import filled heart icon
import { TiStar } from "react-icons/ti";







export const ProductCard = ({ imageUrl, rating, title, price, onClick }) => {
  // State to track whether the heart is clicked (favorited)
  const [isFavorited, setIsFavorited] = useState(false);

  // Handle heart icon click
  const handleHeartClick = () => {
    setIsFavorited(!isFavorited); // Toggle the state
  };

  return (
    <div className={styles.productCard} onClick={onClick}>
      {/* Image Section */}
      <div
        className={styles.imageContainer}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className={styles.heartIcon} onClick={handleHeartClick}>
          {isFavorited ? (
            <GoHeartFill size={20} color="#EB8883" /> // Filled heart when favorited
          ) : (
            <GoHeart size={20} color="#43555e" /> // Unfilled heart when not favorited
          )}
        </div>
        <div className={styles.ratingContainer}>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <TiStar
                key={index}
                size={16}
                color={index < rating ? "#ffa41b" : "#ccc"}
              />
            ))}
        </div>
      </div>

      {/* Product Information Section */}
      <div className={styles.productInfo}>
        <div className={styles.productTitle}>{title}</div>
        <div className={styles.productPrice}>{price}</div>
      </div>
    </div>
  );
};
