import React from 'react'
import { useState } from 'react/cjs/react.development';
import '../App.css';

export default function Fav ({id}) {
    const [favs, setFavs] = useState([]);
    const isFaved = favs.some(favId => favId === id)

    const addFav = () =>{
        setFavs([...favs, id])
    }

    const [
        label,
        icono
    ] = isFaved
    ? [
        'Remove Gif from favorites',
        '❌'
    ] : [
        'Add Gif to favorites',
        '⭐'
    ]

    return (
        <button className='Fav' onClick={addFav}>
            <span aria-label={label} role='img'>{icono}</span>
        </button>
    )
}
