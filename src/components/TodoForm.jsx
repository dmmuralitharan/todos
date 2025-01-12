import { useState } from "react"

function TodoForm({ onAddTodo }) {

  const [todoFormData, setTodoFormData] = useState({
    title: ''
  })

  function handleTodoInputChange(event) {

    const { value } = event.target

    setTodoFormData({
      ...todoFormData,
      title: value
    })

  }


  function handleTodoFormSubmit(event) {

    event.preventDefault()

    console.log(todoFormData);

    if (todoFormData.title.trim() !== "") {
      onAddTodo({ title: todoFormData.title });
      setTodoFormData({ title: "" }); 
    }
    
  }

  return (
    <>

      <form className="mx-3 mt-10 w-full flex flex-col gap-y-5" onSubmit={handleTodoFormSubmit}>
        <input type="text" id="title" name="title" placeholder="Hello world" className="flex-1 px-2.5 py-2 rounded-md" value={todoFormData.title} onChange={handleTodoInputChange} />
        <button type="submit" className="bg-slate-900 text-slate-100 py-2.5 rounded-md font-semibold">Add Todo</button>
      </form>

    </>
  )
}

export default TodoForm
