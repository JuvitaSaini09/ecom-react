import React, { createContext, useReducer } from 'react'

const cartContext=createContext(null);


const CartProvider=({ children}) =>{
    const cartReducer=(state,action)=>{

    }
    const [state,dispatch]=useReducer(cartReducer,[])
    return(
        <CartProvider value={{state,dispatch}}>
            {children}
        </CartProvider>
    )
}
const useCart=()=>useCart(cartContext);

export {CartProvider}
