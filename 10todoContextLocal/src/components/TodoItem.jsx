import { useTodo } from "../context/TodoContext";

function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo } = useTodo();

  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="w-5 h-5 rounded border-gray-300 focus:ring-blue-500"
        />
        <span
          className={`${
            todo.completed ? "line-through text-gray-500" : "text-gray-800"
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-600"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
