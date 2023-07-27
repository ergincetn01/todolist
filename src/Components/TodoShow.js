import { useState } from "react";
import TodoEdit from "./TodoEdit";
import "../Style/TodoShow.css"

function TodoShow({ todo, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false);
  
    const handleDeleteClick = () => {
      onDelete(todo.id);
    };
  
    const handleEditClick = () => {
      setShowEdit(!showEdit);
    };
  
    const handleSubmit = (id, newTitle) => {
      setShowEdit(false);
      onEdit(id, newTitle);
    };
  
    let content = <h3 className="todotitle">{todo.title}</h3>;
    if (showEdit) {
      content = <TodoEdit onSubmit={handleSubmit} todo={todo} />;
    }
  
    return (
      <div className="show-todo">
        <div className="content">{content}</div>
        <div className="actions">
          <button className="edit" onClick={handleEditClick}>
            Edit
          </button>
          <button className="delete" onClick={handleDeleteClick}>
            Delete
          </button>
        </div>
      </div>
    );
  }
  
  export default TodoShow;
  