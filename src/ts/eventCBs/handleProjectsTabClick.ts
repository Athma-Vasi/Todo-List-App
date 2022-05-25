import { addTodosToContent } from '../projectsAndTodos/addTodosToContent'
import { Div, ProjectAndTodosObj } from '../types'
import {
	addAttributeToElem,
	addEvtListener,
	addTextToElem,
	appendElemToParent,
	createImage,
	elemCreator,
	pipe,
} from '../element-creators'

const handleProjectsTabClick = function () {
	const log = (i: unknown) => console.log('\n', i)

	//remove content section's previous contents
	const content: Div = document.querySelector('.content')
	const contentBottomPrev = document.querySelector('.content-bottom')
	contentBottomPrev?.remove()

	//render new content
	const contentBottom = elemCreator('div')(['content-bottom'])
	appendElemToParent(content)(contentBottom)

	const projectsAndTodosArr: ProjectAndTodosObj[] = []

	Object.keys(localStorage).forEach((key) => {
		if (
			key !== 'Sample Project' &&
			key !== 'projectNames' &&
			key !== 'archived' &&
			key !== 'upcoming' &&
			key !== 'today'
		) {
			projectsAndTodosArr.push(JSON.parse(localStorage.getItem(key) ?? ''))
		}
	})
	log(projectsAndTodosArr)

	projectsAndTodosArr.forEach((project) => {
		addTodosToContent(project)
	})
}
export { handleProjectsTabClick }
