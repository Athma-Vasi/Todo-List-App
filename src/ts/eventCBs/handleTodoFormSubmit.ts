import { storeProjectAndTodosFull } from '../projectsAndTodos/storeProjectAndTodosFull';
import { addTodosToContent } from '../projectsAndTodos/addTodosToContent';
import { Div, ProjectAndTodosObj } from '../types';

const handleTodoFormSubmit = function (this: HTMLFormElement, ev: SubmitEvent) {
	ev.preventDefault();

	const todoContainer: Div = document.querySelector('.todo-container');

	const todoFormData = new FormData(this);
	const todoFormProjectName = todoFormData.get('addTodo-projectName')?.toString() ?? '';
	const todoFormProjectColour =
		todoFormData.get('addTodo-projectColour')?.toString() ?? '';
	const todoFormName = todoFormData.get('addTodo-name')?.toString() ?? '';
	const todoFormDescription = todoFormData.get('addTodo-description')?.toString() ?? '';
	const todoFormDueDate = todoFormData.get('addTodo-dueDate')?.toString() ?? '';
	const todoFormSelectPriority =
		todoFormData.get('addTodo-selectPriority')?.toString() ?? '';

	const projectsAndTodosFactory = function (
		projectName: string,
		projectColour: string,
		todoName: string,
		todoDescription: string,
		todoDueDate: string,
		todoPriority: string
	): ProjectAndTodosObj {
		return {
			project: { projectName, projectColour },
			todos: [{ todoName, todoDescription, todoDueDate, todoPriority }],
		};
	};

	const projectAndTodos = projectsAndTodosFactory(
		todoFormProjectName,
		todoFormProjectColour,
		todoFormName,
		todoFormDescription,
		todoFormDueDate,
		todoFormSelectPriority
	);

	//checks if todoExists and returns true if todoName is present
	const todoExists = storeProjectAndTodosFull(projectAndTodos);

	if (!todoExists) {
		addTodosToContent(projectAndTodos);
	}

	todoContainer?.remove();
};

export { handleTodoFormSubmit };
