function TodoList() {
    const todos = [
      { id: 1, task: "Learn React", status: "Pending" },
      { id: 2, task: "Build a Todo App", status: "Completed" },
      { id: 3, task: "Master Tailwind CSS", status: "In Progress" },
    ];
  
    return (
      <div className="w-full mt-10 mx-3">
        <table className="table-auto w-full border-collapse border border-slate-400">
          <thead className="bg-slate-800 text-slate-200">
            <tr>
              <th className="border border-slate-400 px-4 py-2">#</th>
              <th className="border border-slate-400 px-4 py-2">Task</th>
              <th className="border border-slate-400 px-4 py-2">Status</th>
              <th className="border border-slate-400 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr
                key={todo.id}
                className={index % 2 === 0 ? "bg-slate-100" : "bg-slate-200"}
              >
                <td className="border border-slate-400 px-4 py-2 text-center">{index + 1}</td>
                <td className="border border-slate-400 px-4 py-2">{todo.task}</td>
                <td className="border border-slate-400 px-4 py-2 text-center">
                  {todo.status}
                </td>
                <td className="border border-slate-400 px-4 py-2 text-center">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                    completed
                  </button>{" "}
                  <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default TodoList;
  