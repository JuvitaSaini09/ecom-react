import React from 'react'
const Navbar=()=>{
    return(
        <>
        <header className="header-nav">
  <div className="navbar">
    <div className="logo">
      <h1><i className="fab fa-artstation" />Quartz</h1>
    </div>
    <nav className="nav">
      <ul className="nav-links">
        <li><a href="/index.html">HOME</a></li>
        <li><a href="/components/product-page/product-page.html">PRODUCTS</a></li>
        <li><a href="/components/authentication-page/login-page.html" /></li>
        <li><a href="/components/wishlist-page/wishlist-page.html"> <i className="fas fa-heart" /></a></li>
        <li><a href="/components/cart-page/cart-page.html"><i className="fas fa-shopping-bag" /></a></li>
      </ul>
    </nav>
  </div>
</header>

   </>
    )
}

export {Navbar};