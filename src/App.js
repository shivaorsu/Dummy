import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

// import Cart from "./Compontents/Cart/Cart";
// // import Footer from "./components/Layout/Footer";
import Header from "./Compontents/Layout/Header";
import Cart from "./Compontents/Cart/Cart";
import Products from "./Compontents/Products/Products";
import Home from "./Compontents/Homee/Home";
import About from "./Compontents/About/About";
import CartProvider from "./Compontents/Store/CartProvider";
import Contact from "./Compontents/Contact/Contact";

function App() {
  const[cartIsShown,setCartIsShown]=useState(false)
  const showCartHandler=()=>{
    setCartIsShown(true);
  }
  const HideCartHandler=()=>{
    setCartIsShown(false)
  }
  return (
    <CartProvider>
       {cartIsShown && <Cart onClose={HideCartHandler}/>}
      <Header  onShowCart={showCartHandler}/>
      <main>
        <Routes>
          <Route path="/store" element={<Products />} />

          <Route path="/about" element={<About />} />

          <Route path="/" element={<Home />} exast />

          <Route path="/contact_us" element={<Contact />} />
        </Routes>
      </main>
    </CartProvider>
  );
}
export default App;
