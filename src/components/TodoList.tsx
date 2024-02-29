import TodoItem from "./TodoItem";
import { Todo } from "../App";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

type PropTypes = {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
	deleteTodo: (id: string) => void;
	toggleTodo: (id: string) => void;
	updateTodoTitle: (id: string, newTitle: string) => void;
};

export default function TodoList({
	todos,
	setTodos,
	deleteTodo,
	toggleTodo,
	updateTodoTitle,
}: PropTypes) {

	const handleOnDragEnd = (result: { source: { index: number; }; destination: { index: number; }; }) => {
		const items = Array.from(todos);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem)

		setTodos(items)
	}

	return (
		<DragDropContext onDragEnd={handleOnDragEnd}>
			<Droppable droppableId="todos-list">
				{(provided) => (
					<ul
						className="todos-list w-screen max-w-4xl flex flex-col justify-center items-center"
						{...provided.droppableProps}
						ref={provided.innerRef}
					>
						{todos.length === 0 && "No Todos"}
						{todos.map((todo, index) => {
							return (
								<Draggable
									key={todo.id}
									draggableId={todo.id}
									index={index}
								>
									{(provided: unknown) => (
										<TodoItem
											{...todo}
											provided={provided}
											deleteTodo={deleteTodo}
											toggleTodo={toggleTodo}
											updateTodoTitle={updateTodoTitle}
										/>
									)}
								</Draggable>
							);
						})}
					</ul>
				)}
			</Droppable>
		</DragDropContext>
	);
}
