import "./App.css";
import { TodoProvider } from "./contexts/TodoContext";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center text-white mb-12">
            Todo App
          </h1>
          <div className="max-w-2xl mx-auto bg-gray-800 rounded-xl shadow-2xl p-8">
            <TodoForm />
            <TodoList />
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
