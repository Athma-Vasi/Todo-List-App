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
import { Div, ProjectAndTodosObj } from '../types'

const addProjectToSidebar = function (formName_: string, formColour_: string) {
	const log = (i: unknown) => console.log('\n', i)

	const projectsContainer: Div = document.querySelector('.container-projects')

	const projectContainer = elemCreator('div')(['sidebar-project', 'project'])
	appendElemToParent(projectsContainer)(projectContainer)

	const projectNamesArr: string[] = JSON.parse(localStorage.getItem('projectNames') ?? '')

	pipe(
		addAttributeToElem([['data-name', `${projectNamesArr.at(-1)}`]]),
		addStyleToElem([['color', `${formColour_}`]]),
		addTextToElem(`${projectNamesArr.at(-1)}`),
		appendElemToParent(projectContainer)
	)(elemCreator('h4')(['project-text', `text-${projectNamesArr.at(-1)}`]))

	pipe(
		addAttributeToElem([
			['data-name', `${projectNamesArr.at(-1)}`],
			['data-colour', `${formColour_}`],
		]),
		// addStyleToElem('background-color')(`${formColour_}`),
		addEvtListener('click')(handleAddNewTodoIconClick),
		appendElemToParent(projectContainer)
	)(
		createImage('../../../src/assets/icons/plus.svg')(['icon', 'icon-plus'])(
			'icon of plus symbol'
		)('Add New Todo')
	)
}

export { addProjectToSidebar }
