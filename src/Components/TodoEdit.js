import { useState } from "react";

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
        <label>Title</label>
        <input className="input" onChange={handleChange} value={todo.title} />
        <button className="btn-edit">Save Changes</button>
      </form>
    </div>
  );
}

export default TodoEdit;
