import {
	addAttributeToElem,
	addTextToElem,
	appendElemToParent,
	createImage,
	elemCreator,
	addEvtListener,
	pipe,
} from '../element-creators'
import { handleAddNewProjectIconClick } from '../eventCBs/handleAddNewProjectIconClick'
import { handleAddNewTodoIconClick } from '../eventCBs/handleAddNewTodoIconClick'
import { Div } from '../types'

const addProjectToSidebar = function (formName_: string) {
	const log = (i: unknown) => console.log('\n', i)

	const projectsContainer: Div = document.querySelector('.container-projects')

	const projectContainer = elemCreator('div')(['sidebar-project', 'project'])
	appendElemToParent(projectsContainer)(projectContainer)

	const projectNameColour = JSON.parse(localStorage.getItem(formName_) ?? '')
	log(projectNameColour)

	pipe(
		addAttributeToElem([['data-name', `${projectNameColour[0]}`]]),
		addTextToElem(`${projectNameColour[0]}`),
		appendElemToParent(projectContainer)
	)(elemCreator('h4')(['project-text', `text-${projectNameColour[0]}`]))

	pipe(
		addAttributeToElem([['data-name', `${projectNameColour[0]}`]]),
		addEvtListener('click')(handleAddNewTodoIconClick),
		appendElemToParent(projectContainer)
	)(
		createImage('../../../src/assets/icons/plus.svg')(['icon', 'icon-plus'])(
			'icon of plus symbol'
		)('Add New Todo')
	)
}

export { addProjectToSidebar }
