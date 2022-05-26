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
import { addTodosToContent } from '../projectsAndTodos/addTodosToContent'
import { Div, ProjectAndTodosObj } from '../types'

const handleSortByPriorityClick = function (this: HTMLSelectElement, ev: MouseEvent) {
	const log = (i: unknown) => console.log('\n', i)
	//remove content section's previous contents
	const content: Div = document.querySelector('.content')
	const contentBottomPrev = document.querySelector('.content-bottom')
	contentBottomPrev?.remove()

	//render new content
	const contentBottom = elemCreator('div')(['content-bottom'])
	appendElemToParent(content)(contentBottom)

	const selectedSortValue = this.value

	const projectArr: ProjectAndTodosObj[] = []

	Object.keys(localStorage).forEach((key) => {
		if (key !== 'projectNames' && key !== 'archived') {
			projectArr.push(JSON.parse(localStorage.getItem(key) ?? ''))
		}
	})

	//assigns a key to each project based on its todo; map used because TSC complains with object[property] method
	const projectMap: Map<number, ProjectAndTodosObj> = projectArr.reduce(
		(acc: Map<number, ProjectAndTodosObj>, curr: ProjectAndTodosObj) => {
			curr.todos.forEach((todo) => {
				if (todo.todoPriority === 'immediate') {
					acc.set(5, {
						project: {
							projectName: curr.project.projectName,
							projectColour: curr.project.projectColour,
						},
						todos: [todo],
					})
				} else if (todo.todoPriority === 'urgent') {
					acc.set(4, {
						project: {
							projectName: curr.project.projectName,
							projectColour: curr.project.projectColour,
						},
						todos: [todo],
					})
				} else if (todo.todoPriority === 'high') {
					acc.set(3, {
						project: {
							projectName: curr.project.projectName,
							projectColour: curr.project.projectColour,
						},
						todos: [todo],
					})
				} else if (todo.todoPriority === 'medium') {
					acc.set(2, {
						project: {
							projectName: curr.project.projectName,
							projectColour: curr.project.projectColour,
						},
						todos: [todo],
					})
				} else if (todo.todoPriority === 'low') {
					acc.set(1, {
						project: {
							projectName: curr.project.projectName,
							projectColour: curr.project.projectColour,
						},
						todos: [todo],
					})
				}
			})
			return acc
		},
		new Map()
	)

	//can use the sort method now
	const projectMapArr: [number, ProjectAndTodosObj][] = Array.from(projectMap)

	if (selectedSortValue === 'lowToImmediate') {
		projectMapArr.sort((a, b) => a[0] - b[0])
	}

	if (selectedSortValue === 'immediateToLow') {
		projectMapArr.sort((a, b) => b[0] - a[0])
	}

	//if select input text is clicked, all 'live' projects displayed
	if (selectedSortValue === '') {
		projectArr.forEach((project) => addTodosToContent(project))
	}

	//render the todos
	projectMapArr.forEach((numProject) => {
		addTodosToContent(numProject[1])
	})
}
export { handleSortByPriorityClick }
