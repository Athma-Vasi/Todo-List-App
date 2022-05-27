import { addTodosToContent } from '../projectsAndTodos/addTodosToContent'
import { Div, ProjectAndTodosObj } from '../types'
import { appendElemToParent, elemCreator } from '../element-creators'

const handleArchivedTabClick = function (this: HTMLDivElement) {
	//remove content section's previous contents
	const content: Div = document.querySelector('.content')
	const contentBottomPrev: Div = document.querySelector('.content-bottom')
	contentBottomPrev?.remove()

	//render new content
	const contentBottom = elemCreator('div')(['content-bottom'])
	appendElemToParent(content)(contentBottom)

	const archivedStorageArr: ProjectAndTodosObj[] = JSON.parse(
		localStorage.getItem('archived') ?? ''
	)
	//render todos with checkbox disabled
	archivedStorageArr.forEach((project) => {
		addTodosToContent(project, true)
	})
}
export { handleArchivedTabClick }
