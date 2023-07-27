import TodoShow from "./TodoShow";
import "../Style/TodoList.css"

function TodoList({editTodo, deleteTodo, addTodo, todos}) {
   
    const renderedTodos = todos.map((todo) => {
        return (
          <TodoShow onEdit={editTodo} onDelete={deleteTodo} key={todo.id} todo={todo} />
        );
      });
    return (
        <div className="todo-list">
             {renderedTodos}
        </div>
       
    );
}

export default TodoList;