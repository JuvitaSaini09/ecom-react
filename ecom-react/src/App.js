// import { Route,Routes } from "react-router-dom";
import "./App.css";
import logo from "./logo.png";
import { Home } from "./pages/home/home";
import {ProductPage} from "./pages/productPage/productPage"


function App() {
  return (
    <div className="App">
       {/* <Home /> */}
       <ProductPage />
      </div>
  );
}

export default App;
