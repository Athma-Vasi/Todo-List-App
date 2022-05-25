import { Div, ProjectAndTodosObj, Todos, TodosArr } from '../types'
import {
	addAttributeToElem,
	addEvtListener,
	addTextToElem,
	appendElemToParent,
	createImage,
	elemCreator,
	pipe,
} from '../element-creators'
import { addTodosToContent } from '../projectsAndTodos/addTodosToContent'

const handleTodayTabClick = function () {
	const log = (i: unknown) => console.log('\n', i)
	//remove content section's previous contents
	const content: Div = document.querySelector('.content')
	const contentBottomPrev = document.querySelector('.content-bottom')
	contentBottomPrev?.remove()

	//render new content and append to this
	const contentBottom = elemCreator('div')(['content-bottom'])
	appendElemToParent(content)(contentBottom)

	if (!localStorage.getItem('today')) {
		localStorage.setItem('today', JSON.stringify([]))
	}

	const projectArr: ProjectAndTodosObj[] = []

	Object.keys(localStorage).forEach((key) => {
		if (
			key !== 'projectNames' &&
			key !== 'archived' &&
			key !== 'upcoming' &&
			key !== 'today'
		) {
			projectArr.push(JSON.parse(localStorage.getItem(key) ?? ''))
		}
	})

	log(projectArr)

	const now = new Date()
	const date = now.getDate()
	const month = now.getMonth() + 1
	const year = now.getFullYear()
	const today = `${year}-${month < 10 ? '0' + month : month}-${
		date < 10 ? '0' + date : date
	}`
	log(today)

	const projAndTodosFiltered: ProjectAndTodosObj[] = []

	projectArr.forEach((project) => {
		project.todos.forEach((todo) => {
			if (todo.todoDueDate === today) {
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
				projAndTodosFiltered.push(temp)
			}
		})
	})

	log(projAndTodosFiltered)

	projAndTodosFiltered.forEach((project) => {
		addTodosToContent(project)
	})
}
export { handleTodayTabClick }
