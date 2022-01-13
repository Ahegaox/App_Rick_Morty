import React from 'react'
import '../App.css';
import Fav from './Fav';

const Episodes = ({episodes = []}) => {
    return (
        <div className="row">
            {episodes.map((item, index) => (
                    <div key={index}>
                        <ul className="episodio">
                            <li>
                                {item.episode}: {item.name} - {item.air_date}
                                <Fav id={item.id} />
                            </li>
                        </ul>
                    </div>
                ))}
        </div>
    )
}

export default Episodes
