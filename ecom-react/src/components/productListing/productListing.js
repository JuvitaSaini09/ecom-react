import React, { useReducer, useState } from 'react'
import { useCart } from '../../context/cartContext/cartContext';
import { useFilter } from '../../context/filterContext/filterContext'


function ProductListing() {
  const {state}=useFilter();
 const {dispatch}=useCart();
 const [heartColor,setHeartColor]=useState("grey");

 const removeFromCart=(clickedItem,cart)=>{
  const isItemInWishlist = cart.find((cartItem) => clickedItem._id === cartItem._id);
   if(isItemInWishlist){
    setHeartColor("grey")
    return cart.filter(item=>item._id!==clickedItem._id)
   }
   else{
    setHeartColor("red")
    return [...cart,{...clickedItem}] 
   }

}

 
 const wishlistReducer=(stateWishlist,action)=>{
 
  switch(action.type){
    case "ADD_TO_WISHLIST" :
        const newState=removeFromCart(action.book,stateWishlist)
        console.log("new array",newState);
         return newState;
    case "REMOVE_FROM_WISHLIST" :
        //REMOVE FROM WISHLIST LOGIC
         return state;
    default: return state;
}
}
const [stateWishlist,dispatchWishList]=useReducer(wishlistReducer,[])
  
  
  return (
    <section className="product-page">

    {
      state.map((item)=>{
  return(
   <div className="card-featured">
     <div className="card6 card">
       <div className="card-badge">
         <button className="heart-badge "><span onClick={()=>{dispatchWishList({type:"ADD_TO_WISHLIST",book:item})}}><i className="fas fa-heart fa-2x" style={{color:{heartColor}}}></i></span></button>
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
           <button className="btn-cart" onClick={()=>{dispatch({type:"ADD_TO_CART",book:item})}}>Add to cart</button>
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