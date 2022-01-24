import React, { useMemo } from 'react'
import { useStore } from 'react-hookstore';
import '../App.css';
import { favStore } from '../stores/fav.stores';

export default function Fav ({id}) {
    const [favState, favDispatch] = useStore(favStore);
    const isFaved = useMemo(() => favState?.episodes?.includes((x) => x === id), [favState, id]);

    const addFav = () =>{
        favDispatch({ type: "add", payload: id });
    };

    const removeFav = () =>{
        favDispatch({ type: "remove", payload: id });
    };

    const [
        label,
        icono,
        action
    ] = isFaved
    ? [
        "Remove Gif from favorites",
        "❌",
        removeFav
    ] : [
        "Add Gif to favorites",
        "⭐",
        addFav
    ];

    return (
        <button className='Fav' onClick={action}>
            <span aria-label={label} role="img">
                {icono}
            </span>
        </button>
    )
}
