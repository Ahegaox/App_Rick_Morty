import React, {useState} from 'react';
import bootstrap from 'bootstrap';
import './App.css';
//import '../bootstrap-5.1.3-dist/css/bootstrap.css';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-5.1.3-dist/css/bootstrap.min.css"></link>

// const CARDS = [
//   'https://rickandmortyapi.com/api/character/avatar/580.jpeg',
//   'https://rickandmortyapi.com/api/character/avatar/347.jpeg'
// ]

function App() {
  const [cards, setCards] = useState(['https://rickandmortyapi.com/api/character/avatar/580.jpeg'])
  const apiURL = ''

  return (
    <div class="card">
      <img class="card-img-top" src={cards} alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}

export default App;
