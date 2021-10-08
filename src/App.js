import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap';
import Componente from './components/Componente';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


const App = () => {
  return (
      <Router>
        <NavBar />
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
          <Componente texto="Tu carro" numero={1}/>
          <Componente texto="Tu carro" numero={0}/>
        </Switch>
      </Router>
    
  );
}


export default App;
