import React from "react";
import ReactDom from "react-dom";
import Form from "react-jsonschema-form/lib/components/Form";

const nameSchema ={
    "title": "Registration Form",
    "description": "Please enter your name",
    "type": "object",
    "required": [
        "name"
    ],
    "properties": {
        "name": {
            "type": "string",
            "title": "Name",
            "default": "Jon"
        },
        "surname": {
            "type": "string",
            "title": "Last Name",
            "default": "Smith"
        }
    }
};

const NameForm = () => ( <Form schema={nameSchema} />);

function Search() {
    return (
        <div>
            <h1>My First JSON FORM</h1>
            <div />
            <h2>Here is our form</h2>
            <NameForm />
        </div>
    )
}

export default Search;