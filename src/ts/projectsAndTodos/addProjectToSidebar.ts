import {
	addAttributeToElem,
	addTextToElem,
	addStyleToElem,
	appendElemToParent,
	createImage,
	elemCreator,
	addEvtListener,
	pipe,
} from '../element-creators'
import { handleAddNewProjectIconClick } from '../eventCBs/handleAddNewProjectIconClick'
import { handleAddNewTodoIconClick } from '../eventCBs/handleAddNewTodoIconClick'
import { handleCreatedTabsClick } from '../eventCBs/handleCreatedTabsClick'
import { Div, ProjectAndTodosObj } from '../types'

const addProjectToSidebar = function (formName_: string, formColour_: string) {
	const log = (i: unknown) => console.log('\n', i)

	const projectsContainer: Div = document.querySelector('.container-projects')

	const projectContainer = elemCreator('div')(['sidebar-project', 'project'])
	appendElemToParent(projectsContainer)(projectContainer)

	pipe(
		addEvtListener('click')(handleCreatedTabsClick),
		addAttributeToElem([['data-name', `${formName_}`]]),
		addStyleToElem([['color', `${formColour_}`]]),
		addTextToElem(`${formName_}`),
		appendElemToParent(projectContainer)
	)(elemCreator('h4')(['project-text']))

	pipe(
		addAttributeToElem([
			['data-name', `${formName_}`],
			['data-colour', `${formColour_}`],
		]),
		// addStyleToElem('background-color')(`${formColour_}`),
		addEvtListener('click')(handleAddNewTodoIconClick),
		appendElemToParent(projectContainer)
	)(
		createImage('../../../dist/assets/icons/plus.svg')(['icon', 'icon-plus'])(
			'icon of plus symbol'
		)('Add New Todo')
	)
}

export { addProjectToSidebar }
