import TodoItem  from "./TodoItem"
import { Todo } from "../App"

type PropTypes = {
	todos: Todo[];
	deleteTodo: (id: string) => void;
	toggleTodo: (id: string) => void;
	updateTodoTitle: (id: string, newTitle: string) => void;
}

export default function TodoList({ todos, deleteTodo, toggleTodo, updateTodoTitle }: PropTypes) {

  return (
    <ul className="w-screen max-w-4xl flex flex-col justify-center items-center">
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
			deleteTodo={deleteTodo}
			toggleTodo={toggleTodo}
			updateTodoTitle={updateTodoTitle}
          />
        )
      })}
    </ul>
  )
}