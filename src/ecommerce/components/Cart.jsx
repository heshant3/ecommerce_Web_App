import React, { useState } from "react";
import styles from "./Cart.module.css";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Cart = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Mid grey shark skin suit",
      price: 1000.0,
      size: "M",
      color: "Gray",
      quantity: 3,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "jrfrfergrgrthtyhtyjuju",
      price: 1030.0,
      size: "M",
      color: "Gray",
      quantity: 2,
      image: "https://via.placeholder.com/150",
    },
  ]);

  const handleQuantityChange = (id, operation) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity:
            operation === "increase"
              ? item.quantity + 1
              : item.quantity > 1
              ? item.quantity - 1
              : item.quantity,
        };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const postage = 20.0;
  const total = subtotal + postage;

  return (
    <div className={styles.cart}>
      <h1 className={styles.title}>Shopping Bag</h1>
      <div className={styles.backButton} onClick={() => navigate(-1)}>
        <IoIosArrowBack size={30} color="#000" />
      </div>

      <div className={styles.cartContent}>
        <div className={styles.cartItems}>
          {items.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.name} />
              <div className={styles.itemDetails}>
                <h3 className={styles.nameText}>{item.name}</h3>
                <p className={styles.priceText}>${item.price.toFixed(2)}</p>
                <p className={styles.iteamText}>Size: {item.size}</p>
                <p className={styles.iteamText}>Color: {item.color}</p>
                <div className={styles.quantityControl}>
                  <button
                    className={styles.quantityButton}
                    onClick={() => handleQuantityChange(item.id, "decrease")}
                  >
                    -
                  </button>
                  <span className={styles.quantityDisplay}>
                    {item.quantity}
                  </span>
                  <button
                    className={styles.quantityButton}
                    onClick={() => handleQuantityChange(item.id, "increase")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.orderSummary}>
          <h3 className={styles.orderSummaryTitle}>Order Summary</h3>
          <p className={styles.orderSummaryItem}>
            Subtotal: <span>${subtotal.toFixed(2)}</span>
          </p>
          <p className={styles.orderSummaryItem}>
            Shopping: <span>Free</span>
          </p>
          <p className={styles.orderSummaryItem}>
            Postage: <span>${postage.toFixed(2)}</span>
          </p>
          <p
            className={`${styles.orderSummaryItem} ${styles.orderSummaryTotal}`}
          >
            Total: <span>${total.toFixed(2)}</span>
          </p>
          <button className={styles.checkoutButton}>Check Out</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
