import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './Components/Blog';
import Cart from './Components/Cart';
import Products from './Components/Products';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Profile from './Components/Profile';
import Details from './Components/Details';
import Product from './Components/Product';
import Confirm from './Components/Confirm';
import PayPalBtns from './Components/PayPalBtns';

const RootComponent = () => {
  const [cartItem, setCartItem] = useState([]);

  const addtocart = (product) => {
    const exsit = cartItem.find((x) => {
      return x.id === product.id;
    });

    if (exsit) {
      alert("This Product has Already been Added to Cart");
    } else {
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
    }
    console.log(setCartItem);
  };

  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/cart"
            element={<Cart addtocart={addtocart} cartItem={cartItem} setCartItem={setCartItem} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/details" element={<Details />} />
          <Route path="/product" element={<Product addtocart={addtocart} />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/paypalbtns" element={<PayPalBtns />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootComponent />);