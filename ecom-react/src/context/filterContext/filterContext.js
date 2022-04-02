import React, { createContext, useContext, useReducer,useState } from 'react'
import { products as data } from '../../backend/db/products';

const filterContext=createContext(null);





const FilterProvider=({children})=>{


  const [isDataSorted, setIsDataSorted] = useState({
    IsSorted: false,
    Sort: ""
  });

  //function fro sorting low to high
const lowToHigh = (state) => {
  return [...state].sort((a, b) => a.price - b.price);
};

//function fro sorting high to low
const highToLow = (state) => {
  return [...state].sort((a, b) => b.price - a.price);
};


const filterReducer = (state, action) => {
  switch (action.type){

  case "LOW_TO_HIGH":{
    setIsDataSorted({ IsSorted: true, Sort: "LOW_TO_HIGH" });
    return lowToHigh(state);
  }

  case "HIGH_TO_LOW": {
    setIsDataSorted({ IsSorted: true, Sort: "HIGH_TO_LOW" });
    return highToLow(state);
  }

    default: return state;
  }
}

const [state,dispatch]=useReducer(filterReducer,data);
    

    return(
        <filterContext.Provider value={{state,dispatch}}>
            {children}
        </filterContext.Provider>
    )
}

const useFilter=()=>useContext(filterContext);

export {useFilter,FilterProvider}