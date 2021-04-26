import React, { createContext, useState } from 'react'
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Header/Shop/Shop';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Review from './Components/Review/Review';
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Components/NotFound/NotFound';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Shipment from './Components/Shipment/Shipment';
import LogIn from './Components/LogIn/LogIn';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
export const userContext=createContext()
function App() {
  const [loggedInUser,setLoggedInUser]=useState({})
  
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <h2>Email:{loggedInUser.email}</h2>
    
    
    <Router>
    <Header/>
      <Switch>
        <Route exact path="/"><Shop/></Route>
        <Route path="/shop"><Shop/></Route>
        <Route  path="/review"><Review/> </Route>
        <PrivateRoute path="/manage"><Inventory/> </PrivateRoute>
        <Route path="/product/:productKey">
          <ProductDetail/>

        </Route>
        <PrivateRoute path="/shipment">
          <Shipment/>
        </PrivateRoute>
        <Route path="/login">
          <LogIn/>
        </Route>
        <Route path="*"><NotFound/></Route>
      </Switch>
    </Router>
         
     
     
    </userContext.Provider>
  );
}

export default App;
