import {
	addAttributeToElem,
	addTextToElem,
	appendElemToParent,
	createImage,
	elemCreator,
	addEvtListener,
	pipe,
} from '../element-creators'
import { Div } from '../types'

//needs to be a factory function

const storeProjects = function (formName_: string, formColour_: string) {
	localStorage.setItem(formName_, JSON.stringify([formName_, formColour_]))
}

export { storeProjects }
// const projectContainer = elemCreator('div')(['sidebar-project', 'project'])
// 	appendElemToParent(projectsContainer)(projectContainer)

// 	pipe(
// 		addTextToElem(`${JSON.parse(localStorage.getItem(formName_) ?? '')[0]}`),
// 		appendElemToParent(projectContainer)
// 	)(elemCreator('h3')(['heading-text', 'text-projects']))

// 	pipe(
// 		addEvtListener('click')(handleAddNewProjectIconClick),
// 		appendElemToParent(projectContainer)
// 	)(
// 		createImage('../../../src/assets/icons/plus.svg')(['icon', 'icon-plus'])(
// 			'icon of plus symbol'
// 		)('Add New Project')
// 	)

// function handleAddNewProjectIconClick(this: HTMLImageElement, ev: MouseEvent) {
// 	const addProjectModal: Div = document.querySelector('.addProject-container')
// 	if (addProjectModal)
// 		addProjectModal.style.visibility =
// 			addProjectModal?.style.visibility === 'visible' ? 'hidden' : 'visible'
// }
