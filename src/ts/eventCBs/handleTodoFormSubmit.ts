import { storeProjectAndTodosFull } from '../todos/storeProjectAndTodosFull'
import { addTodosToContent } from '../todos/addTodosToContent'
import { Div, ProjAndTodoNames, ProjectAndTodosObj, Todos, TodosArr } from '../types'

const handleTodoFormSubmit = function (this: HTMLFormElement, ev: SubmitEvent) {
	ev.preventDefault()
	const log = (i: unknown) => console.log('\n', i)

	const todoContainer: Div = document.querySelector('.todo-container')

	const todoFormData = new FormData(this)
	const todoFormProjectName = todoFormData.get('addTodo-projectName')?.toString() ?? ''
	const todoFormProjectColour =
		todoFormData.get('addTodo-projectColour')?.toString() ?? ''
	const todoFormName = todoFormData.get('addTodo-name')?.toString() ?? ''
	const todoFormDescription = todoFormData.get('addTodo-description')?.toString() ?? ''
	const todoFormDueDate = todoFormData.get('addTodo-dueDate')?.toString() ?? ''
	const todoFormSelectPriority =
		todoFormData.get('addTodo-selectPriority')?.toString() ?? ''

	const now = new Date()
	//returns date one year from current
	const sampleLowDueDate = (now: Date) => {
		let day = now.getDate()
		let month = now.getMonth() + 1
		const year = now.getFullYear() + 1

		return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`
	}
	//returns date one month from current
	const sampleMedDueDate = (now: Date) => {
		let month = now.getMonth()
		month = month <= 10 ? month + 1 : month
		month = month + 1
		return `${now.getFullYear()}-${month < 10 ? '0' + month : month}-${
			now.getDate() < 10 ? '0' + now.getDate() : now.getDate()
		}`
	}
	//returns date one day from current
	const sampleUrgentDueDate = (now: Date) => {
		let day = now.getDate()
		day = day < 26 ? day + 2 : day

		let month = now.getMonth() + 1
		return `${now.getFullYear()}-${month < 10 ? '0' + month : month}-${
			day < 10 ? '0' + day : day
		}`
	}

	const sampleProject: ProjectAndTodosObj = {
		project:
			//sample project to display initially
			{ projectName: 'Sample Project', projectColour: '#48d1cc' },
		todos: [
			{
				todoName: `Finish 'The Faded Sun: Kesrith'`,
				todoDescription: 'Finish reading the book - return soon!',
				todoDueDate: `${sampleUrgentDueDate(now)}`,
				todoPriority: 'urgent',
			},
			{
				todoName: 'Vet Appointment',
				todoDescription: 'Take Nighteyes to the vet for routine checkup',
				todoDueDate: `${sampleMedDueDate(now)}`,
				todoPriority: 'medium',
			},
			{
				todoName: 'Backpacking trip to Nepal',
				todoDescription: 'Plan route, supplies and apply for visa',
				todoDueDate: `${sampleLowDueDate(now)}`,
				todoPriority: 'low',
			},
		],
	}

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
		}
	}

	const storeSampleProject = (function (sampleProject_: ProjectAndTodosObj) {
		localStorage.setItem(
			sampleProject_.project.projectName,
			JSON.stringify(sampleProject_)
		)
	})(sampleProject)

	const projectAndTodos = projectsAndTodosFactory(
		todoFormProjectName,
		todoFormProjectColour,
		todoFormName,
		todoFormDescription,
		todoFormDueDate,
		todoFormSelectPriority
	)

	const todoExists = storeProjectAndTodosFull(projectAndTodos)

	if (!todoExists) {
		addTodosToContent(projectAndTodos)
	}

	todoContainer?.remove()
}

export { handleTodoFormSubmit }
