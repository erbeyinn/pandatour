import React from 'react';
import Home from "./components/Home";
import {BrowserRouter, Route} from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import RecommendDetail from './components/RecommendDetail';
import PrivateDetail from './components/PrivateDetail';
import Footer from './components/Footer';
import AirportTransfer from './Airport/AirportTransfer';
import RentHouses from './components/RentHouses';




function App() {


   
   
  return (

    <BrowserRouter>
    
       <div className="App">
       
        
      <Route path="/renthouse" component={RentHouses}/> 
      <Route path="/product/:id" component={ProductDetail}/>
      <Route path="/priv/:id" component={PrivateDetail}/>
      <Route path="/recommend/:id" component={RecommendDetail}/> 
      <Route path="/transfer" component={AirportTransfer}/> 
      <Route path="/" exact={true} component={Home}/>
     <Footer/>

    </div>
   

        
   
   
    </BrowserRouter>
     
  );
}

export default App;
