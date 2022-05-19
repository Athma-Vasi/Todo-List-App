const todoFactoryFunction = function (
	projectName: string,
	projectColour: string,
	todoName: string,
	todoDescription: string,
	todoDueDate: string,
	todoPriority: string
) {
	const state = {
		project: { projectName, projectColour },
		todos: { todoName, todoDescription, todoDueDate, todoPriority },
	}

	return {
		...state,
	}
}

export { todoFactoryFunction }
