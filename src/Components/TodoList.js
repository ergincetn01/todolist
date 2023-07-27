import TodoShow from "./TodoShow";
import "../Style/TodoList.css";

function TodoList({ editTodo, deleteTodo, addTodo, todos }) {
  let noTodos = (
    <div className="noTodos">
      <h1>No todos created!</h1>
    </div>
  );
  const renderedTodos = todos.map((todo) => {
    return (
      <TodoShow
        onEdit={editTodo}
        onDelete={deleteTodo}
        key={todo.id}
        todo={todo}
      />
    );
  });

  return (
    <div className="todo-list">
      {todos.length === 0 ? noTodos : renderedTodos}
    </div>
  );
}

export default TodoList;
