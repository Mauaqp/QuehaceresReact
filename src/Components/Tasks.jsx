import React from "react";

const Tasks = (props) => {
    const {task, index, setList, list} = props;

    const onChange = () => {
        list[index].isComplete = !list[index].isComplete;
        setList([...list]);
    }

    const onClick = () => {
        setList(() => {
            return list.filter(task => list.indexOf(task) !== index)
        })
    }

    return (
        <div>

                <h3 style={{textDecorationLine: task.isComplete ? "line-through" : "none"}} htmlFor="checkbox">
                    {task.name}
                </h3>
            
            <input type="checkbox" onChange={onChange} checked={task.isComplete}></input>
            <button onClick={onClick}>Eliminar</button>
        </div>
    );
}

export default Tasks;