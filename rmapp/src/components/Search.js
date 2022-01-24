import React from "react";
import ReactDom from "react-dom";
import Form from "react-jsonschema-form/lib/components/Form";

const episodeSchema ={
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

const EpisodeForm = () => ( <Form schema={episodeSchema} />);

const sendData = () => {
    console.log('enviando datos...' + episodeSchema)
}

function Search() {
    return (
        <div>
            <form onSubmit={sendData}/>
            <h2>Search:</h2>
            <EpisodeForm />
        </div>
    )
}

export default Search;