import { useState } from "react";
import "../Style/TodoEdit.css"

function TodoEdit({ onSubmit, todo }) {
  const [title, newTitle] = useState(todo.title);

  const handleChange = (e) => {
    newTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(todo.id, title);
  };

  return (
    <div>
      <form className="todo-edit" onSubmit={handleSubmit}>
        <textarea className="input" onChange={handleChange} value={todo.title} />
        <button className="btn-edit"><p>Save Changes</p></button>
      </form>
    </div>
  );
}

export default TodoEdit;
