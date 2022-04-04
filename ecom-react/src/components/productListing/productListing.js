import React, { useState } from 'react'
import { useFilter } from '../../context/filterContext/filterContext'


function ProductListing() {
  const {state}=useFilter();
  const [cart,setCart]=useState([]);
  //<--------- copy paste below funciton in cartContext page ---------->
  const cartReducer=(state,action)=>{
    
  }

  //this function to be added in useContext in future
  const addToCart=(clickedItem)=>{
     const isItemInCart = cart.find((cartItem) => clickedItem._id === cartItem._id);

    console.log("kya ha pehly sy present ?",isItemInCart)

     console.log("id of clicked item",clickedItem._id, "is item in cart",isItemInCart)

    //clciked item is present in cart
   if(isItemInCart){
    setCart(
      cart.map((element) =>
          element._id === clickedItem._id
            ? { ...isItemInCart, count: isItemInCart.count + 1 }
            : element
        )
    );
   }
   //if clicked item is not present in cart
   else{ 
    setCart([...cart, { ...clickedItem, count: 1 }]);
   }

  }
  //<--------- copy paste above funciton in cartContext page ---------->


  //below line to be removed after testing 
  console.log("cart data :----> ",cart,"<---")
  return (
    <section className="product-page">

    {
      state.map((item)=>{
  return(
   <div className="card-featured">
     <div className="card6 card">
       <div className="card-badge">
         <button className="heart-badge "><span className="heart">♡</span></button>
         <a href="#">
           <img className="card-image" alt="card-image" src={item.src} />
           <div className="card-text card6-text">
             <header>
               <h3>{item.title}</h3><button className="rate-btn"><span>★</span>{item.rating}</button>
             </header>
             <div className="card-info">
               <p>{item.categoryName},{item.author}</p>
               <div className="price">₹. {item.price}
                 <span className="price-old">₹ {item.oldPrice}</span>
               </div>
             </div>
           </div>
         </a>
         <footer>
           <button className="btn-cart" onClick={()=>{addToCart(item)}}>Add to cart</button>
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