import React, { useEffect } from 'react'
import { useStore } from 'react-hookstore';
import '../App.css';
import Fav from './Fav';
import { favStore } from '../stores/fav.stores';

const Episodes = ({episodes = []}) => {
    const [favState, favDispatch] = useStore(favStore);

    useEffect(() => {
        console.log(favState.episodes);
    }, [favState.episodes]);

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
