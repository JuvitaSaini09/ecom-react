import React, { createContext, useContext, useReducer } from 'react'

const cartContext=createContext(null);


// const incrementCount=(clickedItem,cart)=>{
//     return cart.map(item=>{
//         // console.log(clickedItem._id===cart._id)
//         if(clickedItem._id===cart._id) return { ...item, count: item.count + 1 }
//         else return item;
//     })
// }

// const decrementCount=(clickedItem,cart)=>{
//     return cart.map(item=>{
//         if(clickedItem._id===cart._id) return { ...item, count: item.count - 1 }
//         else return item;
//     })
// }


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

 const removeFromCart=(clickedItem,cart)=>{
    
        if(clickedItem.count===1){
           return cart.filter(item=>item._id!==clickedItem._id)
        }
        if(clickedItem.count>1){
            return cart.map(item=>{
                if(item._id===clickedItem._id){
                    return {...item,count:clickedItem.count-1};
                }else{
                    return item;
                }
            })
        }  
 }


const CartProvider=({ children}) =>{

    const cartReducer=(state,action)=>{
        switch(action.type){
            case "ADD_TO_CART" :
                const newState=addToCart(action.book,state)
                 return newState;
             case "REMOVE_FROM_CART" :
                 return removeFromCart(action.book,state);

            // case "INCREMENT_COUNT":
            //     return incrementCount(action.book,state);
                

            // case "DECREMENT_COUNT":
            //     return decrementCount(action.book,state);

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
