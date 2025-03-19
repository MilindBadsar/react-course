import { useTodo } from "../contexts/TodoContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos } = useTodo();

  return (
    <div className="space-y-2">
      {todos.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">No todos yet!</p>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
}

export default TodoList;
