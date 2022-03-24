import React from "react";

const Input = (props) => {
    const {list, setList} = props;

    let task = {
        name :"",
        isComplete: false
    };

    const onChange = (e) => {
        task.name = e.target.value;
    }

    const onClick =(e) => {
        setList([...list,task]);
    }

    return (
        <div>
            <h1>Quehaceres</h1>
            <input
                type="text"
                name ="task"
                onChange ={onChange}
            >
            </input>
            <button
                onClick ={onClick}
            >Añadir Quehacer</button>
        </div>
    );

}

export default Input;