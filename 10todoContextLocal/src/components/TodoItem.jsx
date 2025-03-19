import { useTodo } from "../contexts/TodoContext";

function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo } = useTodo();

  return (
    <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg mb-3 group hover:bg-gray-600 transition-colors duration-200">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="w-5 h-5 rounded border-gray-500 text-blue-600 focus:ring-blue-500 bg-gray-600"
        />
        <span
          className={`${
            todo.completed ? "line-through text-gray-400" : "text-white"
          } text-lg`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-gray-400 hover:text-red-500 transition-colors duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}

export default TodoItem;
