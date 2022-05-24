import { addProjectToSidebar } from './addProjectToSidebar'
import { ProjectAndTodosObj, TodosArr } from '../types'
import { addTodosToContent } from './addTodosToContent'

const storeProjectAndTodosFull = function (projectAndTodos_: ProjectAndTodosObj) {
	let todoExistsFlag = false

	const currentProjName = projectAndTodos_.project.projectName
	const currentTodoName = projectAndTodos_.todos[0].todoName
	const currentTodos = projectAndTodos_.todos[0]

	const storageKeys: Set<string> = new Set()

	Object.keys(localStorage).forEach((key) => {
		storageKeys.add(key)
	})

	//new project
	if (!storageKeys.has(currentProjName)) {
		localStorage.setItem(currentProjName, JSON.stringify(projectAndTodos_))
	} else {
		//project already exists
		const currentProjStorage: ProjectAndTodosObj = JSON.parse(
			localStorage.getItem(currentProjName) ?? ''
		)

		const todoNamesSet: Set<string> = new Set()
		currentProjStorage.todos.forEach((todo) => todoNamesSet.add(todo.todoName))

		//new todoName
		if (!todoNamesSet.has(currentTodoName)) {
			currentProjStorage.todos.push(currentTodos)
			localStorage.setItem(currentProjName, JSON.stringify(currentProjStorage))
			todoExistsFlag = false
			return todoExistsFlag
		} else {
			//todoName taken
			alert(
				`${currentTodoName} already exists as a todo (｡•́︿•̀｡)  Please choose another name or consider editing an existing todo.`
			)
			todoExistsFlag = true
			return todoExistsFlag
		}
	}

	//
	//
}
export { storeProjectAndTodosFull }
