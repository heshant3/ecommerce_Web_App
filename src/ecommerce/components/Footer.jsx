import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  const socialIcons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/2570cc01a2d54370b17b865e3b47fdd6/2538177721aae66392f0b1e53c6bc155e4d6e6d672d400e7d98391f47fe20959?apiKey=2570cc01a2d54370b17b865e3b47fdd6&",
      alt: "Social media icon",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/2570cc01a2d54370b17b865e3b47fdd6/1eeff271a754d13e2d4635fad34e2dc91475d1eebd6740b6711fae18c3d2f0b3?apiKey=2570cc01a2d54370b17b865e3b47fdd6&",
      alt: "Social media icon",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/2570cc01a2d54370b17b865e3b47fdd6/9723671c3772b3e5087fa61330b454b2e95ecdcb6762fec2fd1d610d6fd1c686?apiKey=2570cc01a2d54370b17b865e3b47fdd6&",
      alt: "Social media icon",
    },
  ];

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
        </nav>
        <div className={styles.copyright}>C 2024 All Right Reserved</div>
      </div>
      <div className={styles.socialIcons}>
        {socialIcons.map((icon, index) => (
          <img
            key={index}
            loading="lazy"
            src={icon.src}
            alt={icon.alt}
            className={styles.socialIcon}
          />
        ))}
      </div>
    </footer>
  );
};
