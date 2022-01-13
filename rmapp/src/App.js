import React from 'react';
import bootstrap from 'bootstrap';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inicio from './components/Inicio';
import { Episodios } from './components/Episodios';

function App() {

  return (
    <Router>
      <div class = "App-content">
        <Switch>
          <Route path="/" exact>
            <Inicio/>
            <Link to="/Episodios" class="boton">
              Lista de episodios
            </Link>
          </Route>
          <Route path="/Episodios">
            <div className="titulo_lista">Episodios</div>
            <Episodios/>
            <Link to="/" class="boton">
              Home
            </Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
