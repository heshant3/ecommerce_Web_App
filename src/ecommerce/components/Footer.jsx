import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.brandSection}>
          <div className={styles.brandName}>T-shop</div>
          <div className={styles.brandDescription}>
            sodales. Ut in laoreet luctus sit tincidunt nulla, diam laoreet non.
            ex. Nunc quam maximus Ut sapien maximus felis, sit quis amet, Morbi
            Donec nulla, amet, Ut
          </div>
        </div>

        {/*Categories Link*/}
        <nav className={styles.footerNav}>
          <div className={styles.navColumn}>
            <h3 className={styles.columnTitle}>Categories</h3>
            <a href="#" className={styles.navLink}>
              Shirt
            </a>
            <a href="#" className={styles.navLink}>
              T-shirt
            </a>
            <a href="#" className={styles.navLink}>
              Jacket
            </a>
            <a href="#" className={styles.navLink}>
              Bottoms
            </a>
          </div>

          {/*Customer Care Link*/}
          <div className={styles.navColumn}>
            <h3 className={styles.columnTitle}>Customer Care</h3>
            <a href="#" className={styles.navLink}>
              FAQ
            </a>
            <a href="#" className={styles.navLink}>
              Shipping
            </a>
            <a href="#" className={styles.navLink}>
              Order Status
            </a>
            <a href="#" className={styles.navLink}>
              Return & Exchange
            </a>
          </div>

          {/*Company Link*/}
          <div className={styles.navColumn}>
            <h3 className={styles.columnTitle}>Company</h3>
            <a href="#" className={styles.navLink}>
              Privacy
            </a>
            <a href="#" className={styles.navLink}>
              Guides
            </a>
            <a href="#" className={styles.navLink}>
              Term of Conditions
            </a>
          </div>

          {/*socialIcons Link*/}
          <div className={styles.navColumn}>
            <div className={styles.socialIcons}>
              <FaFacebookSquare size={20} color="#fff" />
              <FaYoutube size={20} color="#fff" />
              <FiInstagram size={20} color="#fff" />
            </div>
          </div>
        </nav>

        {/*Copyright*/}
        <div className={styles.copyright}>
          © 2024 Heshan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
