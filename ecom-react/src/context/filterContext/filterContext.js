import React, { createContext, useContext, useReducer } from 'react'
import { products } from '../../backend/db/products';

const filterContext=createContext(null);

const FilterProvider=({children})=>{

    const filterReducer = (state, action) => {
        switch (action.type) {
          case "LOW_TO_HIGH":
            return [...state].sort((a, b) => a.price - b.price);
          case "HIGH_TO_LOW":
            return [...state].sort((a, b) => b.price - a.price);
          default:
            return state;
        }
    }

    const [state,dispatch]=useReducer(filterReducer,products);

    return(
        <filterContext.Provider value={{state,dispatch}}>
            {children}
        </filterContext.Provider>
    )
}

const useFilter=()=>useContext(filterContext);

export {useFilter,FilterProvider}