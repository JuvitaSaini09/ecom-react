import React from 'react'
import { useWishlist } from '../../context/wishlistContext/wishlistContext'

function Wishlist() {

  const  {stateWishlist}=useWishlist();
  return (
    <>
  <div>
  <h1 className="heading-my-wishlist">My Wishlist ❤</h1>
  <section className="wishlist-card-container">
    <>
  {stateWishlist[0] === undefined ?<h1>Wishlist is empty</h1>:<> { 
        stateWishlist.map(item=>{
          return(
            <div className="wishlist-card">
      <div className="card card5 card7">
        <section className="img-container">
          <img className="card-image" alt="card-image" src={item.src} />
        </section>
        <section className="text-container">
          <div className="card-text card8-text">
            <header>
              <h3>{item.title}</h3><button className="rate-btn"><span>★</span>{item.rating}</button>
            </header>
            <div className="card-info">
              <p>{item.categoryName},{item.author}</p>
              <div className="price">Rs. {item.price}
                <span className="price-old">RS. {item.oldPrice}</span>
              </div>
            </div>
          </div>
          <div className="cart-click-btns">
            <button className="btn-cart">Remove from wishlist</button><br />
            <button className="btn-cart">Add to cart</button>
          </div>
        </section>
      </div>
    </div>
          )
        })
      }</>}
  </>
      

   
  </section>
</div>

    </>
  )
}

export { Wishlist }