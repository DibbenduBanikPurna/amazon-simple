import React from 'react'
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Header/Shop/Shop';
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
import Review from './Components/Review/Review';
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Components/NotFound/NotFound';
import ProductDetail from './Components/ProductDetail/ProductDetail';
function App() {
  return (
    <div>
      <Header/>
    
    <Router>
      <Switch>
        <Route exact path="/"><Shop/></Route>
        <Route path="/shop"><Shop/></Route>
        <Route  path="/review"><Review/> </Route>
        <Route path="/manage"><Inventory/> </Route>
        <Route path="/product/:productKey">
          <ProductDetail/>

        </Route>
        <Route path="*"><NotFound/></Route>
      </Switch>
    </Router>
         
     
     
    </div>
  );
}

export default App;
