import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
function App() {
  return (<>
    <main className="h-full flex">

      <div className="w-3/4 bg-slate-100">
        <TodoList />
      </div>
      <div className="w-1/4 bg-slate-300">
        <TodoForm />
      </div>


    </main>
  </>);
}



export default App;
