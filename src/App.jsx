import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
function App() {
  return (<>
    <main className="h-screen flex flex-col">
      <h2 className="text-center p-5 font-semibold text-2xl bg-slate-800 text-slate-200">Todos</h2>
      
      <div className="flex-grow flex">

        <div className="w-3/4 bg-slate-100 flex justify-center items-start">
          <TodoList />
        </div>

        <div className="w-1/4 bg-slate-300 flex justify-center items-start">
          <TodoForm />
        </div>

      </div>

    </main>
  </>);
}



export default App;
