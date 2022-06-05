import { Div, ProjectAndTodosObj } from '../types'
import { appendElemToParent, elemCreator } from '../element-creators'
import { addTodosToContent } from '../projectsAndTodos/addTodosToContent'

const handleFilterByPriorityClick = function (this: HTMLSelectElement, ev: MouseEvent) {
	//remove content section's previous contents
	const content: Div = document.querySelector('.content')
	const contentBottomPrev = document.querySelector('.content-bottom')
	contentBottomPrev?.remove()

	//render new content
	const contentBottom = elemCreator('div')(['content-bottom'])
	appendElemToParent(content)(contentBottom)

	const selectedPriority = this.value

	const projectArr: ProjectAndTodosObj[] = []

	Object.keys(localStorage).forEach((key) => {
		if (key !== 'projectNames' && key !== 'archived') {
			projectArr.push(JSON.parse(localStorage.getItem(key) ?? ''))
		}
	})

	const filteredPriorityArr: ProjectAndTodosObj[] = []

	projectArr.forEach((project) => {
		project.todos.forEach((todo) => {
			if (todo.todoPriority === selectedPriority) {
				const temp = {
					project: {
						projectName: project.project.projectName,
						projectColour: project.project.projectColour,
					},
					todos: [
						{
							todoName: todo.todoName,
							todoDescription: todo.todoDescription,
							todoDueDate: todo.todoDueDate,
							todoPriority: todo.todoPriority,
						},
					],
				}
				filteredPriorityArr.push(temp)
			}
		})
	})

	//if select input default text is clicked, all 'live' projects displayed
	if (selectedPriority === ' ') {
		//remove content section's previous contents
		const content: Div = document.querySelector('.content')
		const contentBottomPrev = document.querySelector('.content-bottom')
		contentBottomPrev?.remove()

		//render new content
		const contentBottom = elemCreator('div')(['content-bottom'])
		appendElemToParent(content)(contentBottom)

		projectArr.forEach((project) => addTodosToContent(project))
	}

	//render todos
	filteredPriorityArr.forEach((project) => {
		addTodosToContent(project)
	})
}
export { handleFilterByPriorityClick }
