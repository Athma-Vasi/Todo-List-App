import { storeProjectAndTodos } from '../todos/storeProjectAndTodos'

import { Div, ProjAndTodoNames, ProjectAndTodosObj, State, TodosArr } from '../types'

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

	let state: State = {
		projects: [
			{
				//sample project to display initially
				project: { projectName: 'Sample Project', projectColour: '#48d1cc' },
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

	const projectAndTodos = projectsAndTodosFactory(
		todoFormProjectName,
		todoFormProjectColour,
		todoFormName,
		todoFormDescription,
		todoFormDueDate,
		todoFormSelectPriority
	)

	log(projectAndTodos)

	const createStorageKeys = (function () {
		//if not present, create a new keys
		if (!localStorage.getItem('projectsAndTodos')) {
			localStorage.setItem('projectAndTodos', JSON.stringify(state))
		}
		if (!localStorage.getItem('projAndTodosNames')) {
			localStorage.setItem('projAndTodosNames', JSON.stringify([]))
		}
	})()

	const storeProjectAndTodoNames = (function (
		currentProjName_: string,
		currentTodoName_: string
	) {
		const currentProjAndTodosNames = {
			projName: currentProjName_,
			todoNames: [currentTodoName_],
		}
		const projAndTodosNamesStorage: ProjAndTodoNames = JSON.parse(
			localStorage.getItem('projAndTodosNames') ?? ''
		)

		//to avoid duplicate project names
		const projNamesSet: Set<string> = new Set()
		projAndTodosNamesStorage.forEach((project) => {
			projNamesSet.add(project.projName)
		})

		if (projNamesSet.has(currentProjName_)) {
			projAndTodosNamesStorage.forEach((project) => {
				if (project.projName === currentProjName_) {
					project.todoNames.push(currentTodoName_)
				}
			})
		} else {
			projAndTodosNamesStorage.push(currentProjAndTodosNames)
		}

		localStorage.setItem('projAndTodosNames', JSON.stringify(projAndTodosNamesStorage))
	})(projectAndTodos.project.projectName, projectAndTodos.todos[0].todoName)

	const storeProjectAndTodosFull = (function (projectAndTodos_: ProjectAndTodosObj) {
		const currentProjName = projectAndTodos_.project.projectName
		const currentTodoName = projectAndTodos_.todos[0].todoName
		const currentTodos = projectAndTodos_.todos[0]

		let newTodoFlag = false
		let newProjectFlag = false

		log({ currentProjName })

		const storageKeys = ['projectNames', 'projectAndTodos', 'projAndTodosNames']

		const projNamesArr: string[] = JSON.parse(localStorage.getItem(storageKeys[0]) ?? '')
		log({ projNamesArr })

		const storageArr: State = JSON.parse(localStorage.getItem(storageKeys[1]) ?? '')
		log({ storageArr })

		const projAndTodosNamesArr: ProjAndTodoNames = JSON.parse(
			localStorage.getItem(storageKeys[2]) ?? ''
		)
		log({ projAndTodosNamesArr })

		const todoNamesSet: Set<string> = new Set()
		projAndTodosNamesArr.forEach((proj) => {
			if (proj.projName === currentProjName) {
				proj.todoNames.forEach((todoName) => {
					todoNamesSet.add(todoName)
				})
			}
		})

		log({ todoNamesSet })

		//
		//
	})(projectAndTodos)

	todoContainer?.remove()
}

export { handleTodoFormSubmit }

// //if currentProj is already present and todo is new
// if (projNamesArr.includes(currentProjName)) {
// 	projAndTodosNamesArr.forEach((proj) => {
// 		if (proj.projName === currentProjName) {
// 			if (!proj.todoNames.includes(currentTodoName)) {
// 				storageArr.projects.forEach((projectArr) => {
// 					if (projectArr.project.projectName === currentProjName) {
// 						projectArr.todos.push(currentTodos)
// 					}
// 				})
// 				localStorage.setItem(storageKeys[1], JSON.stringify(storageArr))
// 			} else {
// 				alert(
// 					`${currentTodoName} already exists as a project (｡•́︿•̀｡)  Please choose another name.`
// 				)
// 				return
// 			}
// 		}
// 	})
// }
