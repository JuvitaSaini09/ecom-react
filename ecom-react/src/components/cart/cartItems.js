import React from 'react'
import { useCart } from '../../context/cartContext/cartContext';


function CartItems() {

  // _id: uuid(),
  // src:atomicHabits,
  // title: "Atomic Habits",
  // author: "James Clear",
  // price: "300",
  // oldPrice:"600", 
  // categoryName: "Self-help",
  // rating : 4.5,
  // details

  const {state}=useCart();
  return (
    <>
      <section className="col-1"> 

       {
         state.map(item=>{
           return(
             <>
             <div className="cart-item"> 
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
            <p>item.categoryName},{item.author}</p>
            <div className="price">Rs. {item.price}
              <span className="price-old">RS. {item.oldPrice}</span>
            </div>
          </div>
        </div>
        <div className="cart-click-btns">  
          <button className="btn-cart">Remove from cart</button><br />
          <button className="btn-cart">Add to wishlist</button>
        </div> 
        <div className="cart-quantity-btns">
          <button className="cart-quantity">-</button>
          <span className="cart-quantity">{item.count}</span><button className="cart-quantity">+</button><br />
        </div>
      </section>
    </div> </div></>
           )
         })
       }
      
  {/* <div className="cart-item"> 
  <div className="card card5 card7">
      <section className="img-container">
        <img className="card-image" alt="card-image" src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" />
      </section>
      <section className="text-container">
        <div className="card-text card8-text">
          <header>
            <h3>T-shirt</h3><button className="rate-btn"><span>★</span>4.5</button>
          </header>
          <div className="card-info">
            <p>High comfort cotton</p>
            <div className="price">Rs. 300
              <span className="price-old">RS. 600</span>
            </div>
          </div>
        </div>
        <div className="cart-click-btns">  
          <button className="btn-cart">Remove from cart</button><br />
          <button className="btn-cart">Add to wishlist</button>
        </div> 
        <div className="cart-quantity-btns">
          <button className="cart-quantity">-</button>
          <span className="cart-quantity">2</span><button className="cart-quantity">+</button><br />
        </div>
      </section>
    </div> </div>
  <div className="cart-item"> <div className="card card5 card7">
      <section className="img-container">
        <img className="card-image" alt="card-image" src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" />
      </section>
      <section className="text-container">
        <div className="card-text card8-text">
          <header>
            <h3>T-shirt</h3><button className="rate-btn"><span>★</span>4.5</button>
          </header>
          <div className="card-info">
            <p>High comfort cotton</p>
            <div className="price">Rs. 300
              <span className="price-old">RS. 600</span>
            </div>
          </div>
        </div>
        <div className="cart-click-btns">  
          <button className="btn-cart">Remove from cart</button><br />
          <button className="btn-cart">Add to wishlist</button>
        </div> 
        <div className="cart-quantity-btns">
          <button className="cart-quantity">-</button>
          <span className="cart-quantity">2</span><button className="cart-quantity">+</button><br />
        </div>
      </section>
    </div> </div>
  <div className="cart-item"> <div className="card card5 card7">
      <section className="img-container">
        <img className="card-image" alt="card-image" src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" />
      </section>
      <section className="text-container">
        <div className="card-text card8-text">
          <header>
            <h3>T-shirt</h3><button className="rate-btn"><span>★</span>4.5</button>
          </header>
          <div className="card-info">
            <p>High comfort cotton</p>
            <div className="price">Rs. 300
              <span className="price-old">RS. 600</span>
            </div>
          </div>
        </div>
        <div className="cart-click-btns">  
          <button className="btn-cart">Remove from cart</button><br />
          <button className="btn-cart">Add to wishlist</button>
        </div> 
        <div className="cart-quantity-btns">
          <button className="cart-quantity">-</button>
          <span className="cart-quantity">2</span><button className="cart-quantity">+</button><br />
        </div>
      </section>
    </div> </div> */}
</section>

    </>
  )
}

export { CartItems }