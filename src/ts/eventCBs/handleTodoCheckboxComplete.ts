import { ProjectAndTodosObj, Todos } from '../types'

const handleTodoCheckboxComplete = function (this: HTMLInputElement) {
	const log = (i: unknown) => console.log('\n', i)

	if (!localStorage.getItem('archived')) {
		localStorage.setItem('archived', JSON.stringify([]))
	}

	const thisProjectName = this.previousSibling?.textContent
	const thisTodoName =
		this.parentElement?.parentElement?.firstChild?.nextSibling?.textContent

	const projectArr: ProjectAndTodosObj[] = []
	//grab the entire project belonging to currently checked todo
	Object.keys(localStorage).forEach((key) => {
		if (key !== 'Sample Project' && key !== 'projectNames' && key !== 'archived') {
			if (key === thisProjectName) {
				projectArr.push(JSON.parse(localStorage.getItem(key) ?? ''))
			}
		}
	})

	const todoIndex = projectArr[0].todos.reduce((acc, curr, index) => {
		if (curr.todoName === thisTodoName) {
			acc = index
		}
		return acc
	}, 0)

	const todosArrFiltered: Todos[] = []
	projectArr[0].todos.forEach((todo) => {
		if (todo.todoName !== thisTodoName) {
			todosArrFiltered.push(todo)
		}
	})

	log(todosArrFiltered)

	this.parentElement?.parentElement?.remove()
}
export { handleTodoCheckboxComplete }
