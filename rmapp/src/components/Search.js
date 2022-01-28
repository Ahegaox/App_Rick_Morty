import React from "react";
import ReactDom from "react-dom";
import Form from "react-jsonschema-form/lib/components/Form";
import '../App.css';
import EpSearch from "./EpSearch";

const episodeSchema = {
    "title": "Please enter your episode",
    "type": "object",
    "required": [
        "episode"
    ],
    "properties": {
        "episode": {
            "type": "string",
            "title": "Episode",
            "default": "S01E01"
        },
    }
};

const EpisodeForm = ({}) => ( <Form schema={episodeSchema} onSubmit={sendData} />);

const sendData = () => {
    console.log('enviando datos...' + episodeSchema.properties.episode.default)
}

function Search({episodes = []}) {
    return (
        <div className="formSearch">
            <h2>Search:</h2>
            <EpisodeForm />
            <EpSearch episodes={episodes} EPS={episodeSchema.properties.episode.default}/>
        </div>
    )
}

export default Search;