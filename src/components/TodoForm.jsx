import { useState } from "react"

function TodoForm({ onAddTodo }) {

  const [todoFormData, setTodoFormData] = useState({
    todoTask: ''
  })

  function handleTodoInputChange(event) {

    const { value } = event.target

    setTodoFormData({
      ...todoFormData,
      todoTask: value
    })

  }


  function handleTodoFormSubmit(event) {

    event.preventDefault()

    console.log(todoFormData);

    if (todoFormData.todoTask.trim() !== "") {
      onAddTodo({ todoTask: todoFormData.todoTask, status: "Pending" });
      setTodoFormData({ todoTask: "" }); 
    }
    
  }

  return (
    <>

      <form className="mx-3 mt-10 w-full flex flex-col gap-y-5" onSubmit={handleTodoFormSubmit}>
        <input type="text" id="todoTask" name="todoTask" placeholder="Hello world" className="flex-1 px-2.5 py-2 rounded-md" value={todoFormData.todoTask} onChange={handleTodoInputChange} />
        <button type="submit" className="bg-slate-900 text-slate-100 py-2.5 rounded-md font-semibold">Add Todo</button>
      </form>

    </>
  )
}

export default TodoForm
