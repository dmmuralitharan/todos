import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import api from "./api";
import { useState, useEffect } from "react";
function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await api.get("/");
        console.log(response);

        setTodos(response.data);
      } catch (error) {
        console.error("There was an error fetching the todos!", error);
      }
    };

    fetchTodos();


  }, []);

  console.log(JSON.stringify(todos));

  function handleAddTodo(newTodo) {
    api.post("/", newTodo)
      .then((response) => {
        setTodos([...todos, response.data]);
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
      });
  }


  function handleComplete(_id) {
    const todoToUpdate = todos.find((todo) => todo._id === _id);

    setTodos(
      todos.map((todo) =>
        todo._id === _id ? { ...todo, completed: !todo.completed } : todo
      )
    );

    api.put(`/${_id}`, {
      completed: !todoToUpdate.completed,
    })
      .then((response) => {
        console.log("Todo updated:", response.data);
      })
      .catch((error) => {
        console.error("Error updating todo:", error);

        setTodos(todos);
      });
  }

  function handleDelete(_id) {
    const updatedTodos = todos.filter((todo) => todo._id !== _id);
    setTodos(updatedTodos);

    api.delete(`${_id}`)
      .then((response) => {
        console.log("Todo deleted:", response.data);
      })
      .catch((error) => {
        console.error("Error deleting todo:", error);

        setTodos(todos);
      });
  }



  return (<>
    <main className="h-screen flex flex-col">
      <h2 className="text-center p-5 font-semibold text-2xl bg-slate-800 text-slate-200">Todos</h2>

      <div className="flex-grow flex">

        <div className="w-3/4 bg-slate-100 flex justify-center items-start">
          <TodoList todos={todos} onComplete={handleComplete} onDelete={handleDelete} />
        </div>

        <div className="w-1/4 bg-slate-300 flex justify-center items-start">
          <TodoForm onAddTodo={handleAddTodo} />
        </div>

      </div>

    </main>
  </>);
}



export default App;
