import { todoFactoryFunction } from '../todos/todoFactoryFunction'

const handleTodoFormSubmit = function (this: HTMLFormElement, ev: SubmitEvent) {
	ev.preventDefault()
	const log = (...i: unknown[]) => console.log('\n', i)
	log(this)
	log(ev)

	const todoFormData = new FormData(this)

	const todoFormName = todoFormData.get('addTodo-name')?.toString() ?? ''
	const todoFormDescription = todoFormData.get('addTodo-description')?.toString() ?? ''
	const todoFormDueDate = todoFormData.get('addTodo-dueDate')?.toString() ?? ''
	const todoFormSelectPriority =
		todoFormData.get('addTodo-selectPriority')?.toString() ?? ''

	const todoFormProjectName = todoFormData.get('addTodo-projectName')?.toString() ?? ''

	const todoFormProjectColour =
		todoFormData.get('addTodo-projectColour')?.toString() ?? ''

	todoFactoryFunction(
		todoFormProjectName,
		todoFormProjectColour,
		todoFormName,
		todoFormDescription,
		todoFormDueDate,
		todoFormSelectPriority
	)
}

export { handleTodoFormSubmit }
