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
		if (
			key !== 'projectNames' &&
			key !== 'archived' &&
			key !== 'today' &&
			key !== 'upcoming'
		) {
			projectArr.push(JSON.parse(localStorage.getItem(key) ?? ''))
		}
	})

	const matchedProjAndTodosArr: ProjectAndTodosObj[] = []

	//if exact search term is matched
	projectArr.forEach((project) => {
		project.todos.forEach((todo) => {
			if (todo.todoName.toLowerCase() === searchTerm) {
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

	const todoNamesSplitMap: Map<string, string[]> = new Map()
	//more flexible search where substring of todoNames are matched
	projectArr.forEach((project) => {
		project.todos.forEach((todo) => {
			todoNamesSplitMap.set(todo.todoName, todo.todoName.toLowerCase().split(' '))
		})
	})
	log(todoNamesSplitMap)

	//if searchTerm is included in the value, then project arr is looped over and corresponding todoName and projectName is grabbed and pushed into matched...Arr
	todoNamesSplitMap.forEach((val: string[], key: string) => {
		if (val.includes(searchTerm)) {
			projectArr.forEach((project) => {
				project.todos.forEach((todo) => {
					if (key === todo.todoName) {
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
		}
	})
	log(matchedProjAndTodosArr)

	matchedProjAndTodosArr.forEach((project) => {
		addTodosToContent(project)
	})
}
export { handleSearchFormSubmit }
