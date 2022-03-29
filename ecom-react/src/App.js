import { Route,Routes } from "react-router-dom";
import React from 'react'
import "./App.css";
import logo from "./logo.png";
import { Home } from "./pages/home/home";
import {ProductPage} from "./pages/productPage/productPage"
import CartPage from "./pages/cartPage/cartPage";
import { WishlistPage } from "./pages/wishlistPage/wishlistPage";
import { LoginPage } from "./pages/loginPage/loginPage";
import SingupPage from "./pages/signupPage/signupPage";
import { LogoutPage } from "./pages/logoutPage/logoutPage";
import { Login } from "./components/allComponents";


function App() {
  return (
    <div className="App">
       
        <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/ProductPage"  element={<ProductPage />} />
            <Route path="/cartPage"  element={<CartPage />} />
            <Route path="/wishlistPage"  element={<WishlistPage />} />
            <Route path="/loginPage"  element={<LoginPage />} />
            <Route path="/signupPage"  element={<SingupPage />} />
            <Route path="/logoutPage"  element={<LogoutPage />} />
       </Routes> 

     
       
      </div>
  );
}

export default App;
