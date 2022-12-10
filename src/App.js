import React, { useState,useContext, useEffect } from "react";
import { Redirect,Route, Switch } from "react-router-dom";

// import Cart from "./Compontents/Cart/Cart";
import Footer from "./Compontents/Layout/Footer";
import Header from "./Compontents/Layout/Header";
import Cart from "./Compontents/Cart/Cart";
import Products from "./Compontents/Products/Products";
import Home from "./Compontents/Homee/Home";
import About from "./Compontents/About/About";
import CartProvider from "./Compontents/Store/CartProvider";
import Contact from "./Compontents/Contact/Contact";
import classes from "./Compontents/Layout/Header.module.css";
import ProductDetail from "./Compontents/Products/ProductDetails";
import AuthContext from "./Compontents/Store/AuthContext";
import AuthForm from "./Compontents/Authentication/authForm";
import CartContext from "./Compontents/Store/cart-context";

function App() {
  if(localStorage.getItem('email')){
    localStorage.getItem("email","")
  }
  const authCtx = useContext(AuthContext);
  const cartCtx=useContext(CartContext)
  let email = localStorage.getItem("email").replace(".", "").replace("@", "");


  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const HideCartHandler = () => {
    setCartIsShown(false);
  };
  useEffect(()=>{
    cartCtx.emptyCart();
    axios.get(`https://crudcrud.com/api/7259e54426de4ccf8de2c77cbc9765c2/cart${email}`).then((res)=>{
      console.log(res.data)
      res.data.forEach((item)=>{
        cartCtx.addItem(item);
      })
    })
    .catch((error)=>{
      alert(error)
    })
  },[email])
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={HideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <h1 className={classes.h1}> The Generics </h1>
      <main>
        <Switch>
        {authCtx.isLoggedIn &&(<Route path="/" exact>
            <Home/>
          </Route>)}
          <Route path="/auth">
            <AuthForm />
          </Route>
          {!authCtx.isLoggedIn && (
            <Route path="/auth">
              <AuthForm />
            </Route>
          )}
          {authCtx.isLoggedIn &&(<Route path="/store" exact>
            <Products />
          </Route>
          )}

          {authCtx.isLoggedIn &&(<Route path="/about">
            <About />
          </Route>)}

          {/* {authCtx.isLoggedIn &&(<Route path="/" exact>
            <Home />
          </Route>
          )} */}

          {authCtx.isLoggedIn &&(<Route path="/contact_us">
            <Contact />
          </Route>
          )}
         

          <Route path="/store/:productDetails">
            <ProductDetail />
            </Route>
            <Route path = "*">
            <Redirect to='/'></Redirect>
          
          </Route>
        </Switch>
      </main>
      <Footer />
      </CartProvider>
  );
}
export default App;