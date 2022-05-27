import { addTodosToContent } from '../projectsAndTodos/addTodosToContent'
import { Div, ProjectAndTodosObj } from '../types'
import {
	addAttributeToElem,
	addTextToElem,
	appendElemToParent,
	createImage,
	elemCreator,
	addEvtListener,
	pipe,
	addStyleToElem,
} from '../element-creators'

const handleSearchFormSubmit = function (this: HTMLFormElement, ev: SubmitEvent) {
	const log = (i: unknown) => console.log('\n', i)
	ev.preventDefault()

	//remove content section's previous contents
	const content: Div = document.querySelector('.content')
	const contentBottomPrev = document.querySelector('.content-bottom')
	contentBottomPrev?.remove()

	//render new content and append to this
	const contentBottom = elemCreator('div')(['content-bottom'])
	appendElemToParent(content)(contentBottom)

	const formData = new FormData(this)
	const searchTerm = formData.get('search-todo')?.toString().toLowerCase() ?? ''

	const projectArr: ProjectAndTodosObj[] = []

	Object.keys(localStorage).forEach((key) => {
		if (key !== 'projectNames' && key !== 'archived') {
			projectArr.push(JSON.parse(localStorage.getItem(key) ?? ''))
		}
	})

	const searchRegEx = new RegExp(`${searchTerm}`)
	log(searchRegEx)

	const matchedProjAndTodosArr: ProjectAndTodosObj[] = []

	projectArr.forEach((project) => {
		project.todos.forEach((todo) => {
			// if it matches todoName
			if (searchRegEx.test(todo.todoName.toLowerCase())) {
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
				matchedProjAndTodosArr.push(temp)
			}
			// else it matches description text
			else if (searchRegEx.test(todo.todoDescription.toLowerCase())) {
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
				matchedProjAndTodosArr.push(temp)
			}
			//else it matches dueDate
			else if (searchRegEx.test(todo.todoDueDate.toString())) {
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
				matchedProjAndTodosArr.push(temp)
			}
			//else it matches priority
			else if (searchRegEx.test(todo.todoPriority.toString())) {
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
				matchedProjAndTodosArr.push(temp)
			}
		})
	})

	matchedProjAndTodosArr.forEach((project) => {
		addTodosToContent(project)
	})
}
export { handleSearchFormSubmit }
