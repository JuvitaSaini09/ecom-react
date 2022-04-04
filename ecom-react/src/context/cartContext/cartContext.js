import React, { createContext, useContext, useReducer } from 'react'

const cartContext=createContext(null);

                //item       //[]
const addToCart=(clickedItem,cart)=>{
    const isItemInCart = cart.find((cartItem) => clickedItem._id === cartItem._id);
  //clicked item is present in cart
  if(isItemInCart){
   return(
     cart.map((element) =>
         element._id === clickedItem._id
           ? { ...isItemInCart, count: isItemInCart.count + 1 }
           : element ));
         }
  //if clicked item is not present in cart
  else{ 
   return([...cart, { ...clickedItem, count: 1 }]);
  }
 }


const CartProvider=({ children}) =>{
    const cartReducer=(state,action)=>{
        switch(action.type){
            case "ADD_TO_CART" :
                const newState=addToCart(action.book,state)
                 return newState;
            case "REMOVE_FROM_CART" :
                //ADD TO CART LOGIC
                 return state;
            default: return state;
        }
    }
    const [state,dispatch]=useReducer(cartReducer,[])
    return(
        <cartContext.Provider value={{state,dispatch}}>
            {children}
        </cartContext.Provider>
    )
}
const useCart=()=>useContext(cartContext);

export {CartProvider,useCart}
