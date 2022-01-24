import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inicio from './components/Inicio';
import { Episodios } from './components/Episodios';
import { favStore } from './stores/fav.stores';

function App() {
  console.log(favStore);

  return (
    <Router>
      <div className = "App-content">
        <Switch>
          <Route path="/" exact>
            <Inicio/>
            <Link to="/Episodios" className="boton">
              Lista de episodios
            </Link>
          </Route>
          <Route path="/Episodios">
            <div className="titulo_lista">Episodios</div>
            <Episodios/>
            <Link to="/" className="boton">
              Home
            </Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
