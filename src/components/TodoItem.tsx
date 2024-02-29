import React, { useState } from "react";

type PropTypes = {
	title: string;
	id: string;
	completed: boolean;
	deleteTodo: (id: string) => void;
	toggleTodo: (id: string) => void;
	updateTodoTitle: (id: string, newTitle: string) => void;
	provided: unknown;
};

function TodoItem({
	title,
	deleteTodo,
	id,
	toggleTodo,
	completed,
	updateTodoTitle,
	provided,
}: PropTypes) {
	const [isEditing, setIsEditing] = useState(false);
	const [editedTitle, setEditedTitle] = useState(title); // Initialize editedTitle with the current title

	const handleTitleClick = () => {
		setIsEditing(true);
	};

	const handleTitleBlur = () => {
		setIsEditing(false);
		if (editedTitle !== title) {
			// Call the callback function to update the title in the parent component
			updateTodoTitle(id, editedTitle);
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditedTitle(e.target.value);
	};

	return (
		<li
			ref={provided.innerRef}
			{...provided.draggableProps}
			{...provided.dragHandleProps}
			className={`w-full flex justify-center items-center mb-5 rounded-full border-2 border-sky-900 px-5 py-3 ${
				completed ? "bg-green-800 border-0" : ""
			}`}
			id={id}
		>
			{isEditing ? (
				<input
					className="text-black"
					type="text"
					value={editedTitle}
					onBlur={handleTitleBlur}
					onChange={handleInputChange}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							handleTitleBlur();
						}
					}}
				/>
			) : (
				<h2 className="w-full" onClick={handleTitleClick}>
					{title}
				</h2>
			)}
			<div className="flex space-x-6">
				<button
					className="px-4 py-3 rounded-full "
					onClick={() => toggleTodo(id)}
				>
					Toggle
				</button>
				<button
					className="px-4 py-3 rounded-full "
					onClick={() => deleteTodo(id)}
				>
					Delete
				</button>
			</div>
		</li>
	);
}

export default TodoItem;
