import React, {useEffect, useState} from 'react'
import Episodes from './Episodes'
import Pagination from './Pagination'
import Search from './Search'

export const Episodios = () => { 
    const apiURL = 'https://rickandmortyapi.com/api/episode'
    const [episodes, setEpisodes] = useState([])
    const [info, setInfo] = useState({})
    const fetchApi = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setEpisodes(data.results) 
                setInfo(data.info)
            })
            .catch(error => console.log(error))
    }

    const onPrevious = () => {
        fetchApi(info.prev);
    }

    const onNext = () => {
        fetchApi(info.next);
    }

    useEffect(() => {
        fetchApi(apiURL)
    }, [])

    return (
        <div className="container">
            <Episodes episodes={episodes} />
            <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
            <Search />
        </div>
    )
}
