import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { useState } from "react";
function App() {

  const [todos, setTodos] = useState([
    { id: 1, todoTask: "Learn React", status: "Pending" },
    { id: 2, todoTask: "Build a Todo App", status: "Completed" },
    { id: 3, todoTask: "Master Tailwind CSS", status: "Completed" },
  ]);


  function handleAddTodo(newTodo) {
    setTodos([...todos, { id: todos.length + 1, ...newTodo }]);
  }

  function handleComplete(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, status: "Completed" } : todo
      )
    );
  }

  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }


  return (<>
    <main className="h-screen flex flex-col">
      <h2 className="text-center p-5 font-semibold text-2xl bg-slate-800 text-slate-200">Todos</h2>
      
      <div className="flex-grow flex">

        <div className="w-3/4 bg-slate-100 flex justify-center items-start">
          <TodoList todos={todos} onComplete={handleComplete} onDelete={handleDelete} />
        </div>

        <div className="w-1/4 bg-slate-300 flex justify-center items-start">
          <TodoForm onAddTodo={handleAddTodo}  />
        </div>

      </div>

    </main>
  </>);
}



export default App;
