import { useState } from "react";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
import "./Style/App.css"
function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const updatedTodos = [
      ...todos,
      {
        id: Math.round(Math.random() * 9999),
        title,
      },
    ];
    setTodos(updatedTodos);
    console.log(todos.length);
  };

  const deleteTodo = (i) => {
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== i;
    });
    setTodos(updatedTodos);
  };

  const editTodo = (i, newTitle) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== i) {
        return { ...todo, newTitle };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <div className="header">
        <h1>ToDo List</h1>
      </div>
        <AddTodo addTodo={addTodo} />
      <TodoList
        todos={todos}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
        addTodo={addTodo}
      />
    </div>
  );
}

export default App;
