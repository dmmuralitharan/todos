import { useState } from 'react';
import api from "../api";
import { TodoContext } from './todoContext';
import PropTypes from 'prop-types';

function TodoContextProvider({ children }) {

  const [todos, setTodos] = useState([]);


  const fetchTodos = async () => {
    try {
      const response = await api.get("/");
      console.log(response);

      setTodos(response.data);
    } catch (error) {
      console.error("There was an error fetching the todos!", error);
    }
  };


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


  return (
    <TodoContext.Provider value={{ todos, fetchTodos, handleAddTodo, handleComplete, handleDelete }}>
      {children}
    </TodoContext.Provider>
  )
}

TodoContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TodoContextProvider
