import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import { BrowserRouter, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import RecommendDetail from "./components/RecommendDetail";
import PrivateDetail from "./components/PrivateDetail";
import AirportTransfer from "./Airport/AirportTransfer";
import PrivateTours2 from "./CategoryTours/PrivateTours2";
import RentHouses from "./components/RentHouses";
import RecommendedTours2 from "./CategoryTours/RecommendedTours2";
import ProductTours2 from "./CategoryTours/ProductTours2";
import Contact from "./components/Contact";

function App() {
 
  return (
    <>
        <BrowserRouter>
          <div className="App">
        
            <Route path="/renthouse" component={RentHouses} />
            <Route path="/product/:id" component={ProductDetail} />
            <Route path="/priv/:id" component={PrivateDetail} />
            <Route path="/recommend/:id" component={RecommendDetail} />
            <Route path="/transfer" component={AirportTransfer} />
            <Route path="/priv" component={PrivateTours2} />
            <Route path="/recommend" component={RecommendedTours2} />
            <Route path="/product" component={ProductTours2} />
            <Route path="/contact" component={Contact} />
            <Route path="/" exact={true} component={Home} />
          </div>
        </BrowserRouter>
    
    </>
  );
}

export default App;
