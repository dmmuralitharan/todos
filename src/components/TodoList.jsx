import PropTypes from "prop-types";
import { useTodos }  from '../hooks/useTodos'

function TodoList() {

    const { todos, handleComplete, handleDelete } = useTodos()


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
                            key={todo._id}
                            className={index % 2 === 0 ? "bg-slate-100" : "bg-slate-200"}
                        >
                            <td className="border border-slate-400 px-4 py-2 text-center">{index + 1}</td>
                            <td className="border border-slate-400 px-4 py-2">{todo.title}</td>
                            <td className="border border-slate-400 px-4 py-2 text-center">
                                {todo.completed ? "Completed" : "Pending"}
                            </td>
                            <td className="border border-slate-400 px-4 py-2 text-center">
                                <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => handleComplete(todo._id)}>
                                    Change Status
                                </button>{" "}
                                <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600" onClick={() => handleDelete(todo._id)}>
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


TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            todoTask: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
        })
    ).isRequired,
    onComplete: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default TodoList;
