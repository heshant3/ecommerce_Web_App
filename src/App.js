import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './ecommerce/HomePage'; 
import Cart from './ecommerce/components/Cart';
import { LoginPage } from './ecommerce/login/auth/LoginPage'; 
import { SignUpPage } from "./ecommerce/login/auth/SignUpPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signin" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
};

export default App;
