import { useState } from "react"

function TodoForm({ addTodo }) {
	const [newItem, setNewItem] = useState("")

	function handleSubmit(e) {
		e.preventDefault()
		addTodo(newItem)
		setNewItem("")
	}

	return (
		<>
			<form onSubmit={handleSubmit} className="flex space-x-2">
				<label htmlFor="todoInput"></label>
				<input 
				className="text-black"
				type="text"
				name="todoInput"
				placeholder="Enter your todo"
				value={newItem}
				onChange={e => setNewItem(e.target.value)}
				/>
				<button 
				className="py-3 px-5 rounded-md font-bold"
				>Add</button>
			</form>
		</>
	);
}

export default TodoForm;
