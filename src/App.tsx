import { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export type Todo = {
	id: string;
	title: string;
	completed: boolean;
};

function App() {
	// State to store all todos
	const [todos, setTodos] = useState<Todo[]>([]);

	// Function to generate a UUID
	function generateUUID() {
		return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
			/[xy]/g,
			function (c) {
				const r = (Math.random() * 16) | 0,
					v = c === "x" ? r : (r & 0x3) | 0x8;
				return v.toString(16);
			}
		);
	}

	const addTodo = (title: string) => {
		// Create a new todo object with a unique ID
		const newTodo = {
			id: generateUUID(),
			title: title,
			completed: false,
		};

		setTodos([...todos, newTodo]);
	};

	const deleteTodo = (id: string) => {
		// Update the state to add the new todo to the array
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
	};

	const toggleTodo = (id: string) => {
		setTodos((prevTodos) =>
			prevTodos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	const updateTodoTitle = (id: string, newTitle: string) => {
		setTodos((prevTodos) =>
			prevTodos.map((todo) =>
				todo.id === id ? { ...todo, title: newTitle } : todo
			)
		);
	};

	return (
		<div className="text-white flex flex-col items-center h-screen space-y-6">
			<Header />
			<TodoForm addTodo={addTodo} />
			<TodoList
				todos={todos}
				deleteTodo={deleteTodo}
				toggleTodo={toggleTodo}
				updateTodoTitle={updateTodoTitle}
			/>
		</div>
	);
}

export default App;
