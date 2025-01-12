
function TodoForm() {
  return (
    <>

      <form className="mx-3 mt-10 w-full flex flex-col gap-y-5">
        <input type="text" className="flex-1 px-2.5 py-2 rounded-md"  />
        <button className="bg-slate-900 text-slate-100 py-2.5 rounded-md font-semibold">Add Todo</button>
      </form>
      
    </>
  )
}

export default TodoForm
