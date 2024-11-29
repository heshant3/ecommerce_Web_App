import React from "react";
import styles from "./HomePage.module.css";
import { ProductCard } from "./components/ProductCard";
import { CategoryItem } from "./components/CategoryItem";
import { Footer } from "./components/Footer";

const products = [
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/2570cc01a2d54370b17b865e3b47fdd6/8856d86241a2f4c5a83cd15cc6cc64123056b57da80d1a4b4bcfe52321dd9b25?apiKey=2570cc01a2d54370b17b865e3b47fdd6&",
    rating: 4,
    title: "UrbanEdge Men's Jeans Collection",
    price: "RS: 2500.00",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/2570cc01a2d54370b17b865e3b47fdd6/7a035c920079424e47fc5e8c1358d871a8189258e237fc72cb8434ee68b8b26e?apiKey=2570cc01a2d54370b17b865e3b47fdd6&",
    rating: 4,
    title: "UrbanEdge Men's Jeans Collection",
    price: "RS: 2500.00",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/2570cc01a2d54370b17b865e3b47fdd6/2df9f3ed35b6d4bc052ce4af3f63b4aa9a3bcf1fd44f95c01e1edf83f68f7799?apiKey=2570cc01a2d54370b17b865e3b47fdd6&",
    rating: 4,
    title: "UrbanEdge Men's Jeans Collection",
    price: "RS: 2500.00",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/2570cc01a2d54370b17b865e3b47fdd6/3887035e1fa5fb9fb92141359a0fc0edabde161459140b5dafd143597e7eef4b?apiKey=2570cc01a2d54370b17b865e3b47fdd6&",
    rating: 4,
    title: "UrbanEdge Men's Jeans Collection",
    price: "RS: 2500.00",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/2570cc01a2d54370b17b865e3b47fdd6/5eabdd60b44784ed508745099419cd552fd84313200bb2fc6036a1597578f69f?apiKey=2570cc01a2d54370b17b865e3b47fdd6&",
    rating: 4,
    title: "UrbanEdge Men's Jeans Collection",
    price: "RS: 2500.00",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/2570cc01a2d54370b17b865e3b47fdd6/0f257d289ec1c3cf3e71bf344c469bc32d20b58cb50c99f0c5bbe0cc52b9f9e5?apiKey=2570cc01a2d54370b17b865e3b47fdd6&",
    rating: 4,
    title: "UrbanEdge Men's Jeans Collection",
    price: "RS: 2500.00",
  },
];

const categories = ["T-Shirt", "T-Shirt", "T-Shirt", "T-Shirt", "T-Shirt"];

export const HomePage = () => {
  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <form className={styles.searchForm} role="search">
          <label htmlFor="searchInput" className={styles.visuallyHidden}>
            Search Product or Brand
          </label>
          <input
            id="searchInput"
            type="search"
            className={styles.searchInput}
            placeholder="Search Product or Brand here ...."
          />
        </form>
        <div className={styles.authButtons}>
          <button className={styles.authButton}>Sign Up</button>
          <button className={styles.authButton}>Login</button>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/2570cc01a2d54370b17b865e3b47fdd6/433beefcd8b58388812f0fb902ee7e483afabb6201fb215f0edc32bd3714cc04?apiKey=2570cc01a2d54370b17b865e3b47fdd6&"
          alt="Cart"
          className={styles.cartIcon}
        />
      </header>

      <div className={styles.heroBanner} role="banner" />

      <section className={styles.categories} aria-label="Product Categories">
        {categories.map((category, index) => (
          <CategoryItem key={index} title={category} />
        ))}
      </section>

      <h1 className={styles.sectionTitle}>Today For You!</h1>

      <section className={styles.productGrid} aria-label="Featured Products">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </section>

      <button className={styles.seeAllButton}>See All</button>

      <div className={styles.promotionBanner} role="banner" />

      <Footer />
    </div>
  );
};
