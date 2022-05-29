import {
	addAttributeToElem,
	addTextToElem,
	addStyleToElem,
	appendElemToParent,
	elemCreator,
	addEvtListener,
	pipe,
} from '../element-creators'
import { handleAddNewTodoIconClick } from '../eventCBs/handleAddNewTodoIconClick'
import { handleCreatedTabsClick } from '../eventCBs/handleCreatedTabsClick'
import { Div } from '../types'

const addProjectToSidebar = function (formName_: string, formColour_: string) {
	const projectsContainer: Div = document.querySelector('.container-projects')

	const projectContainer = elemCreator('div')(['sidebar-project', 'project'])
	appendElemToParent(projectsContainer)(projectContainer)

	pipe(
		addEvtListener('click')(handleCreatedTabsClick),
		addAttributeToElem([
			['data-name', `${formName_}`],
			['data-colour', `${formColour_}`],
		]),
		addStyleToElem([['color', `${formColour_}`]]),
		addTextToElem(`${formName_}`),
		appendElemToParent(projectContainer)
	)(elemCreator('h4')(['project-text']))

	pipe(
		addStyleToElem([['color', `${formColour_}`]]),
		addTextToElem('+'),
		addAttributeToElem([
			['data-name', `${formName_}`],
			['data-colour', `${formColour_}`],
		]),
		addEvtListener('click')(handleAddNewTodoIconClick),
		appendElemToParent(projectContainer)
	)(elemCreator('button')(['bttn', 'bttn-todoModal']))
}

export { addProjectToSidebar }
