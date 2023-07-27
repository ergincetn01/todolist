import { useState } from "react";
import "../Style/AddTodo.css"

function AddTodo({ addTodo }) {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(title);
    setTitle("");
  };
  return (
    <div className="add-todo">
    
        <textarea
          className="todo-title"
          value={title}
          onChange={handleChange}
          placeholder="Add to do..."/>
       <button onClick={handleSubmit} className={title ==="" ? "btn-disabled" : "btn-add"} disabled={title === ""}>
          Add To do
        </button>
        <div className="btn-cnt">
            
        </div>
        
      
    </div>
  );
}

export default AddTodo;
