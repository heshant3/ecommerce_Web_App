import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";
import { ProductCard } from "./components/ProductCard";
import { CategoryItem } from "./components/CategoryItem";
import { Footer } from "./components/Footer";
import { CiShoppingCart, CiSearch } from "react-icons/ci";
import { FaTshirt, FaShirtsinbulk } from "react-icons/fa";
import { GiShorts, GiTrousers } from "react-icons/gi";
import { MdOutlineCategory } from "react-icons/md";
import slide1 from "./components/image/banner-1.png";
import slide2 from "./components/image/banner-2.png";
import footerBanner from "./components/image/FooterBanner.png";
import jeansCollectionImage from "./components/image/Product-1.png";
import PopupCard from "./components/PopupCard";


const sliderImages = [slide1, slide2];

const products = [
  {
    id: 1,
    imageUrl: jeansCollectionImage,
    rating: 3,
    title: "UrbanEdge Men's Jeans Collection",
    price: "RS: 2500.00",
    category: "Jeans",
  },
  {
    id: 2,
    imageUrl: jeansCollectionImage,
    rating: 4,
    title: "UrbanEdge Men's Jeans Collection",
    price: "RS: 2500.00",
    category: "Jeans",
  },
  {
    id: 3,
    imageUrl: jeansCollectionImage,
    rating: 4,
    title: "deded",
    price: "RS: 500.00",
    category: "pants",
  },
  {
    id: 4,
    imageUrl: jeansCollectionImage,
    rating: 4,
    title: "Men's Casual T-Shirt",
    price: "RS: 1500.00",
    category: "T-Shirt",
  },
  {
    id: 5,
    imageUrl: jeansCollectionImage,
    rating: 4,
    title: "Men's Formal Shirt",
    price: "RS: 2000.00",
    category: "Shirt",
  },
  {
    id: 6,
    imageUrl: jeansCollectionImage,
    rating: 5,
    title: "Summer Men's Shorts",
    price: "RS: 1200.00",
    category: "Short",
  },
  {
    id: 7,
    imageUrl: jeansCollectionImage,
    rating: 5,
    title: "Summer Men's Shorts",
    price: "RS: 1200.00",
    category: "Short",
  },
  {
    id: 8,
    imageUrl: jeansCollectionImage,
    rating: 5,
    title: "Summer Men's Shorts",
    price: "RS: 1200.00",
    category: "Short",
  },
  {
    id: 9,
    imageUrl: jeansCollectionImage,
    rating: 4,
    title: "Men's Casual T-Shirt",
    price: "RS: 1500.00",
    category: "T-Shirt",
  },
  {
    id: 10,
    imageUrl: jeansCollectionImage,
    rating: 4,
    title: "Men's Formal Shirt",
    price: "RS: 2000.00",
    category: "Shirt",
  },
];

const categories = [
  { title: "T-Shirt", icon: <FaTshirt /> },
  { title: "Shirt", icon: <FaShirtsinbulk /> },
  { title: "Short", icon: <GiShorts /> },
  { title: "Pants", icon: <GiTrousers /> },
  { title: "All", icon: <MdOutlineCategory /> },
];

export const HomePage = () => {
  const [cartItems, setCartItems] = useState([]); // Store cart items in state
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();
  
 // Function to handle adding item to the cart
 const addToCart = (product, quantity, size) => {
  const newItem = {
    id: product.id,
    name: product.title,
    price: parseFloat(product.price.replace("RS:", "").trim()), // Parse price
    quantity: quantity,
    size: size,
    image: product.imageUrl,
  };

  setCartItems((prevItems) => {
    const existingItemIndex = prevItems.findIndex(
      (item) => item.id === product.id && item.size === size
    );

    if (existingItemIndex !== -1) {
      // Update quantity if item already exists
      const updatedItems = [...prevItems];
      updatedItems[existingItemIndex].quantity += quantity;
      return updatedItems;
    } else {
      // Add new item
      return [...prevItems, newItem];
    }
  });

  setIsOpen(false); // Close the popup after adding to cart
};

  // Handler to open popup and set product data
  const handleProductClick = (product) => {
    setSelectedProduct(product); 
    setIsOpen(true); 
  };

  const handleCartClick = () => {
    navigate("/cart", { state: { cartItems } }); // Pass cartItems to Cart page using React Router state
  };
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState(""); 
  const [filteredSuggestions, setFilteredSuggestions] = useState([]); 
  const [showSuggestions, setShowSuggestions] = useState(false); 
  const [displayedProducts, setDisplayedProducts] = useState(8); 
  const [allProductsLoaded, setAllProductsLoaded] = useState(false); 

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
    setShowSuggestions(false); // Hide suggestions after selection
  };

  const handleShowAllClick = () => {
    if (displayedProducts < filteredProducts.length) {
      setDisplayedProducts(filteredProducts.length);
      setAllProductsLoaded(true);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
    }, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.home}>
      <header className={styles.header}>
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
        <div className={styles.authButtons}>
          <button className={styles.authButton}>Sign Up</button>
          <button className={styles.authButton}>Login</button>
        </div>
        <CiShoppingCart size={20} color="#43555e" onClick={handleCartClick}/>
      </header>

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
      <PopupCard
  isOpen={isOpen}
  product={selectedProduct}
  onClose={() => setIsOpen(false)}
  onAddToCart={addToCart}
/>


      <h1 className={styles.sectionTitle}>
        {selectedCategory === "All" ? "Today For You!" : selectedCategory}
      </h1>



      <section
        onClick={() => setIsOpen(true)}
        className={styles.productGrid}
        aria-label="Featured Products"
      >
        {filteredProducts.slice(0, displayedProducts).map((product) => (
          <ProductCard key={product.id} {...product}  onClick={() => handleProductClick(product)}/>
        ))}
      </section>

      {filteredProducts.length > displayedProducts && (
        <button className={styles.seeAllButton} onClick={handleShowAllClick}>
          {allProductsLoaded ? "No More Products" : "Show All"}
        </button>
      )}

      <div className={styles.promotionBanner} role="banner">
        <img src={footerBanner} alt="Promotion Banner" />
      </div>

      <Footer />
    </div>
  );
};
