import React, {useState} from "react";

const Inicio = () => {
    const random = Math.floor(Math.random() * 826);
    const [cards, setCards] = useState(['https://rickandmortyapi.com/api/character/avatar/' + random + '.jpeg'])
    return (
        <div class="card">
          <img class="imagen" src={cards} alt="Card image cap"/>
          <div class="body">
            <h5 class="titulo">App Rick and Morty</h5>
            <p class="texto">En la primera pantalla tendremos un Home donde habrá un botón el <br/>
            cual nos redirigirá a un listado de episodios de rick y morty. Una vez allí<br/>
            podremos buscar y marcar nuestros episodios favoritos.</p>
          </div>
        </div>
    )
}

export default Inicio
