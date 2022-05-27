import { ProjectAndTodosObj, Todos } from '../types'

const handleTodoCheckboxComplete = function (this: HTMLInputElement) {
	if (!localStorage.getItem('archived')) {
		localStorage.setItem('archived', JSON.stringify([]))
	}

	const thisProjectName = this.previousSibling?.textContent ?? ''
	const thisProjectColour = this.value
	const thisTodoName =
		this.parentElement?.parentElement?.firstChild?.nextSibling?.textContent ?? ''

	const projectArr: ProjectAndTodosObj[] = []
	//grab the entire project belonging to currently checked todo
	Object.keys(localStorage).forEach((key) => {
		if (key !== 'projectNames' && key !== 'archived') {
			if (key === thisProjectName) {
				projectArr.push(JSON.parse(localStorage.getItem(key) ?? ''))
			}
		}
	})

	const archivedTodos = JSON.parse(localStorage.getItem('archived') ?? '')

	const todoToBeArchived: Todos[] = []

	//grab remaining todos that are not current todo
	const todosArrFiltered: Todos[] = []
	projectArr[0].todos.forEach((todo) => {
		if (todo.todoName !== thisTodoName) {
			todosArrFiltered.push(todo)
		} else {
			todoToBeArchived.push(todo)
		}
	})

	//replace the todos of project from storage with filtered todos which do not have the currently checked off todo
	projectArr[0].todos = todosArrFiltered

	//put the remaining todos back into project and into storage
	localStorage.setItem(thisProjectName, JSON.stringify(projectArr[0]))

	const projectAndTodoToBeArchived = {
		project: { projectName: thisProjectName, projectColour: thisProjectColour },
		todos: [todoToBeArchived[0]],
	}
	//store the removed todo under 'archived'
	archivedTodos.push(projectAndTodoToBeArchived)
	localStorage.setItem('archived', JSON.stringify(archivedTodos))

	//remove the current todo whose checkbox is clicked
	this.parentElement?.parentElement?.remove()
}
export { handleTodoCheckboxComplete }
