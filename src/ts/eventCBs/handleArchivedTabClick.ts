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

const handleArchivedTabClick = function (this: HTMLDivElement) {
	const log = (i: unknown) => console.log('\n', i)
	//remove content section's previous contents
	const content: Div = document.querySelector('.content')
	const contentBottomPrev = document.querySelector('.content-bottom')
	contentBottomPrev?.remove()

	//render new content
	const contentBottom = elemCreator('div')(['content-bottom'])
	appendElemToParent(content)(contentBottom)

	const archivedStorageArr: ProjectAndTodosObj[] = JSON.parse(
		localStorage.getItem('archived') ?? ''
	)

	archivedStorageArr.forEach((project) => {
		addTodosToContent(project, true)
	})
}
export { handleArchivedTabClick }
