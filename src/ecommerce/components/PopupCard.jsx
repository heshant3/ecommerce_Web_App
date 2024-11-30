import React, { useState } from "react";
import "./PopupCard.css";

const PopupCard = ({ isOpen, product, onClose, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState("S"); // Default selected size
  const [quantity, setQuantity] = useState(1); // Default quantity is 1

  if (!isOpen || !product) return null; // Don't render if popup is closed or no product is selected

  const { imageUrl, title, price } = product;

  // Function to handle quantity change
  const increaseQuantity = () => setQuantity(quantity + 1); // Increase quantity
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1); // Decrease quantity, but not below 1
  };


  const handleAddToCart = () => {
    onAddToCart(product, quantity, selectedSize); // Pass all product details to addToCart
  };

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="popup-content">
          <img className="popup-image" src={imageUrl} alt={title} />
          <div className="popup-details">
            <h2>{title}</h2>
            <p className="price">
              <span className="sale-price">{price}</span>{" "}
              <span className="original-price">{price}</span>
            </p>
            <div className="sizes">
              {["XS", "S", "M", "L", "XL", "XXL", "3XL"].map((size, index) => (
                <button
                  key={index}
                  className={`size-button ${
                    size === selectedSize ? "active" : ""
                  }`}
                  onClick={() => setSelectedSize(size)} // Update the selected size
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="quantity">
              <button className="quantity-button" onClick={decreaseQuantity}>
                -
              </button>
              <span className="quantity-value">{quantity}</span>
              <button className="quantity-button" onClick={increaseQuantity}>
                +
              </button>
            </div>
            <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button>

            <span className="Bottom-Text">See full details</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupCard;
