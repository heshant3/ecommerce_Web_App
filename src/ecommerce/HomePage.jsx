import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";
import { ProductCard } from "./components/ProductCard";
import { CategoryItem } from "./components/CategoryItem";
import { Footer } from "./components/Footer";
import { CiShoppingCart, CiSearch } from "react-icons/ci";
import { FaTshirt } from "react-icons/fa";
import { GiShorts, GiTrousers } from "react-icons/gi";
import { PiShirtFoldedFill } from "react-icons/pi";
import { BiSolidCategory } from "react-icons/bi";
import slide1 from "./components/image/banner-1.png";
import slide2 from "./components/image/banner-2.png";
import footerBanner from "./components/image/FooterBanner.png";
import PopupCard from "./components/PopupCard";

import jeansCollectionImage from "./components/image/Product-1.png";
import product_1 from "./components/image/Iteam-1.png";
import product_2 from "./components/image/Iteam-2.png";
import product_3 from "./components/image/Iteam-3.png";
import product_4 from "./components/image/Iteam-4.png";
import product_5 from "./components/image/Iteam-5.png";
import product_7 from "./components/image/Iteam-7.png";
import product_8 from "./components/image/Iteam-8.png";
import product_9 from "./components/image/Iteam-9.png";
import product_10 from "./components/image/Iteam-10.png";

const sliderImages = [slide1, slide2];

// Product Items Data
const products = [
  {
    id: 1,
    imageUrl: jeansCollectionImage,
    rating: 3,
    title: " Women's Casual T-Shirt",
    price: "RS: 1500.00",
    category: "T-Shirt",
  },
  {
    id: 2,
    imageUrl: product_1,
    rating: 4,
    title: "Men's Casual T-Shirt",
    price: "RS: 2500.00",
    category: "T-Shirt",
  },
  {
    id: 3,
    imageUrl: product_2,
    rating: 4,
    title: "Women's Casual Pants",
    price: "RS: 2800.00",
    category: "Pants",
  },
  {
    id: 4,
    imageUrl: product_3,
    rating: 4,
    title: "Men's Formal Shirt",
    price: "RS: 1500.00",
    category: "Shirt",
  },
  {
    id: 5,
    imageUrl: product_4,
    rating: 4,
    title: "Men's Formal Shirt",
    price: "RS: 2000.00",
    category: "Shirt",
  },
  {
    id: 6,
    imageUrl: product_5,
    rating: 3,
    title: "Men's Casual Shirt",
    price: "RS: 1700.00",
    category: "Shirt",
  },
  {
    id: 7,
    imageUrl: product_7,
    rating: 4,
    title: "Women's Casual pant",
    price: "RS: 3200.00",
    category: "Pants",
  },
  {
    id: 8,
    imageUrl: product_8,
    rating: 2,
    title: "Boy's Shorts",
    price: "RS: 1200.00",
    category: "Short",
  },
  {
    id: 9,
    imageUrl: product_9,
    rating: 4,
    title: "Men's Summer Short",
    price: "RS: 1100.00",
    category: "Short",
  },
  {
    id: 10,
    imageUrl: product_10,
    rating: 1,
    title: "Men's Sport Short",
    price: "RS: 900.00",
    category: "Short",
  },
];

// Product categories List
const categories = [
  { title: "T-Shirt", icon: <FaTshirt /> },
  { title: "Shirt", icon: <PiShirtFoldedFill /> },
  { title: "Short", icon: <GiShorts /> },
  { title: "Pants", icon: <GiTrousers /> },
  { title: "All", icon: <BiSolidCategory /> },
];

export const HomePage = () => {
  const [cartItems, setCartItems] = useState([]); // Store cart items in state
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // State to track search suggestions
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [displayedProducts, setDisplayedProducts] = useState(8);
  const [allProductsLoaded, setAllProductsLoaded] = useState(false);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to handle adding item to the cart
  const addToCart = (product, quantity, size) => {
    const newItem = {
      id: product.id,
      name: product.title,
      price: parseFloat(product.price.replace("RS:", "").trim()),
      quantity: quantity,
      size: size,
      image: product.imageUrl,
    };

    // Retrieve existing cart items from localStorage or initialize as empty array
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if the item with the same ID and size already exists in the cart
    const existingIndex = existingCartItems.findIndex(
      (item) => item.id === product.id && item.size === size
    );

    // Update the quantity
    if (existingIndex !== -1) {
      existingCartItems[existingIndex].quantity += quantity;
    } else {
      existingCartItems.push(newItem);
    }

    // Update the state and localStorage
    setCartItems(existingCartItems);
    localStorage.setItem("cartItems", JSON.stringify(existingCartItems));

    setIsOpen(false);
  };

  // Handler to open popup and set product data
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  // Pass cartItems to Cart page using React Router state
  const handleCartClick = () => {
    navigate("/cart", { state: { cartItems } });
  };

  // Navigate to the login page
  const handleLoginClick = () => {
    navigate("/login");
  };

  // Navigate to the Sign In page
  const handleLoginClick2 = () => {
    navigate("/signin");
  };

  // Load cart items from localStorage when the component mounts
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCartItems);
  }, []);

  // Filter products based on selected category and search query
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearchQuery = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearchQuery;
  });

  // Handle search input change
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Show suggestions only if there is a search query
    if (query.length > 0) {
      setShowSuggestions(true);

      // Filter the product titles based on the search query
      const suggestions = products
        .filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        )
        .map((product) => product.title);

      setFilteredSuggestions(suggestions);
    } else {
      setShowSuggestions(false);
      setFilteredSuggestions([]);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  const handleShowAllClick = () => {
    if (displayedProducts < filteredProducts.length) {
      setDisplayedProducts(filteredProducts.length);
      setAllProductsLoaded(true);
    }
  };

  // Function to handle pagination
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.home}>
      <header className={styles.header}>
        {/* Hamburger Menu Icon */}
        <div
          className={styles.hamburgerMenu}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        {/* Navigation Menu */}
        <form className={styles.searchForm} role="search">
          <label htmlFor="searchInput" className={styles.visuallyHidden}>
            Search Product or Brand
          </label>
          <div className={styles.searchInputContainer}>
            <CiSearch className={styles.searchIcon} size={20} />
            <input
              id="searchInput"
              type="search"
              className={styles.searchInput}
              placeholder="Search Product or Brand here ...."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            {showSuggestions && searchQuery && (
              <ul className={styles.suggestionsDropdown}>
                {filteredSuggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className={styles.suggestionItem}
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </form>

        {/* Auth Buttons */}
        <div
          className={`${styles.authButtons} ${isMenuOpen ? styles.show : ""}`}
        >
          <button className={styles.authButton} onClick={handleLoginClick2}>
            Sign Up
          </button>
          <button className={styles.authButton} onClick={handleLoginClick}>
            Login
          </button>
        </div>

        {/* Cart Icon */}
        <div
          className={`${styles.cartContainer} ${isMenuOpen ? styles.show : ""}`}
        >
          <CiShoppingCart size={20} color="#43555e" onClick={handleCartClick} />
          {cartItems.length > 0 && (
            <span className={styles.cartCount}>
              {cartItems.reduce((total, item) => total + item.quantity, 0)}
            </span>
          )}
        </div>
      </header>

      {/* Menu Items */}
      {isMenuOpen && (
        <div ref={menuRef} className={styles.mobileMenu}>
          <form className={styles.searchForm} role="search">
            <input
              type="search"
              className={styles.searchInput}
              placeholder="Search"
            />
          </form>
          <button
            className={styles.mobileAthButton}
            onClick={handleLoginClick2}
          >
            Sign Up
          </button>
          <button className={styles.mobileAthButton} onClick={handleLoginClick}>
            Login
          </button>
        </div>
      )}

      {/* Hero Banner */}
      <div className={styles.heroBanner} role="banner">
        <div
          className={styles.slider}
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {sliderImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={styles.slideImage}
            />
          ))}
        </div>
        <div className={styles.dots}>
          {sliderImages.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                currentSlide === index ? styles.activeDot : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Categories */}
      <section className={styles.categories} aria-label="Product Categories">
        {categories.map((category, index) => (
          <CategoryItem
            key={index}
            title={category.title}
            icon={category.icon}
            onClick={() => setSelectedCategory(category.title)}
          />
        ))}
      </section>

      {/* Product Grid */}
      <PopupCard
        isOpen={isOpen}
        product={selectedProduct}
        onClose={() => setIsOpen(false)}
        onAddToCart={addToCart}
      />

      {/* See more button */}
      <h1 className={styles.sectionTitle}>
        {selectedCategory === "All" ? "All Items" : selectedCategory}
      </h1>

      <section
        onClick={() => setIsOpen(true)}
        className={styles.productGrid}
        aria-label="Featured Products"
      >
        {filteredProducts.slice(0, displayedProducts).map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onClick={() => handleProductClick(product)}
          />
        ))}
      </section>

      {filteredProducts.length > displayedProducts && (
        <button className={styles.seeAllButton} onClick={handleShowAllClick}>
          {allProductsLoaded ? "No More Products" : "Show All"}
        </button>
      )}

      {/* Footer */}
      <div className={styles.promotionBanner} role="banner">
        <img src={footerBanner} alt="Promotion Banner" />
      </div>

      <Footer />
    </div>
  );
};
