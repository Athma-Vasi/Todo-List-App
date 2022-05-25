import { content } from '../content/content'
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

const handleCreatedTabsClick = function (this: HTMLHeadingElement) {
	const log = (i: unknown) => console.log('\n', i)
	//remove content section's previous contents
	const content: Div = document.querySelector('.content')
	const contentBottomPrev = document.querySelector('.content-bottom')
	contentBottomPrev?.remove()

	const contentBottom = elemCreator('div')(['content-bottom'])
	appendElemToParent(content)(contentBottom)

	const thisProjectName = this.textContent

	const projectAndTodosObjArr: ProjectAndTodosObj[] = []

	Object.keys(localStorage).forEach((key) => {
		if (key === thisProjectName) {
			projectAndTodosObjArr.push(JSON.parse(localStorage.getItem(thisProjectName) ?? ''))
		}
	})

	projectAndTodosObjArr.forEach((project) => {
		addTodosToContent(project)
	})
}
export { handleCreatedTabsClick }
