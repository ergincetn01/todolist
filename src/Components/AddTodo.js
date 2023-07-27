import { useState } from "react";

function AddTodo({addTodo}) {

    const [title, setTitle]= useState("")

    const handleChange=(e)=> {
        setTitle(e.target.value)
    }
    const handleSubmit=(e)=> {
        e.preventDefault()
        addTodo(title)
        setTitle("")
    }
    return (
        <div className="add-todo">
             <h3>Add to do</h3>
            <form onSubmit={handleSubmit}>
                <input className="input" value={title} onChange={handleChange} placeholder="Add to do..."/>
                <label>Title</label>
            <button className="button" disabled={title===""} >Add To do</button>
            </form>            
        </div>
    );
}

export default AddTodo;