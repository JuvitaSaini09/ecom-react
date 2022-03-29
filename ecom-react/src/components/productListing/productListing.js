import React from 'react'
import {products} from "./../../backend/db/products"



function ProductListing() {
  return (
    <section className="product-page">

    {
      products.map(({src,title,author,price,oldPrice,categoryName,rating,details})=>{
  return(
   <div className="card-featured">
     <div className="card6 card">
       <div className="card-badge">
         <button className="heart-badge "><span className="heart">♡</span></button>
         <a href="#">
           <img className="card-image" alt="card-image" src={src} />
           <div className="card-text card6-text">
             <header>
               <h3>{title}</h3><button className="rate-btn"><span>★</span>{rating}</button>
             </header>
             <div className="card-info">
               <p>{categoryName},{author}</p>
               <div className="price">₹. {price}
                 <span className="price-old">₹ {oldPrice}</span>
               </div>
             </div>
           </div>
         </a>
         <footer>
           <button className="btn-cart">Add to cart</button>
         </footer>
       </div>
     </div>
   </div>
  )
  }
  )
  }
  </section>
 
  )
}

export { ProductListing };