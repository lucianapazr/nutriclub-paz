import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import ProviderCustomizado from './components/CartContext';


const App = () => {
  return (
    <ProviderCustomizado>
      <Router>
        <NavBar/>
          <Switch>
            <Route exact path='/'>
              <ItemListContainer />
            </Route>
            <Route exact path='/categoria/:id'>
              <ItemListContainer />
            </Route>
            <Route exact path='/item/:id'>
              <ItemDetailContainer />
            </Route>
            <Route exact path='/cart'>
                <Cart />
            </Route>
          </Switch>
      </Router>
    </ProviderCustomizado>
    
  );
}

export default App;
