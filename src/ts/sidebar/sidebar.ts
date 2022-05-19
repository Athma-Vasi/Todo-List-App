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
import { handleProjectCloseIconClick } from '../eventCBs/handleProjectCloseIconClick'
import { handleProjectFormSubmit } from '../eventCBs/handleProjectFormSubmit'
import { Div } from '../types'

const sidebar = function () {
	const log = (i: unknown) => console.log('\n', i)
	const root: Div = document.querySelector('#root')

	const sidebar = elemCreator('div')(['sidebar'])
	appendElemToParent(root)(sidebar)

	const todayContainer = elemCreator('div')(['sidebar-tab', 'container-today'])
	appendElemToParent(sidebar)(todayContainer)

	pipe(appendElemToParent(todayContainer))(
		createImage('../../src/assets/icons/aperture.svg')(['icon', 'icon-today'])(
			`icon representing today's events`
		)('Today')
	)

	pipe(
		addTextToElem('Today'),
		appendElemToParent(todayContainer)
	)(elemCreator('h4')(['tab-text', 'today-tab']))

	const upcomingContainer = elemCreator('div')(['sidebar-tab', 'container-upcoming'])
	appendElemToParent(sidebar)(upcomingContainer)

	pipe(appendElemToParent(upcomingContainer))(
		createImage('../../src/assets/icons/calendar.svg')(['icon', 'upcoming-icon'])(
			'icon representing upcoming events'
		)('Upcoming')
	)

	pipe(
		addTextToElem('Upcoming'),
		appendElemToParent(upcomingContainer)
	)(elemCreator('h4')(['tab-text', 'tab-upcoming']))

	const archivedContainer = elemCreator('div')(['sidebar-tab', 'container-archived'])
	appendElemToParent(sidebar)(archivedContainer)

	pipe(appendElemToParent(archivedContainer))(
		createImage('../../src/assets/icons/archive.svg')(['icon', 'archived-icon'])(
			'icon representing archived events'
		)('Archived')
	)

	pipe(
		addTextToElem('Archived'),
		appendElemToParent(archivedContainer)
	)(elemCreator('h4')(['tab-text', 'tab-archived']))

	const projectsContainer = elemCreator('div')(['sidebar-heading', 'container-projects'])
	appendElemToParent(sidebar)(projectsContainer)

	const projectsHeading = elemCreator('div')(['projectsHeading-container'])
	appendElemToParent(projectsContainer)(projectsHeading)

	pipe(
		addTextToElem('Projects'),
		appendElemToParent(projectsHeading)
	)(elemCreator('h3')(['heading-text', 'text-projects']))

	pipe(
		addEvtListener('click')(handleAddNewProjectIconClick),
		appendElemToParent(projectsHeading)
	)(
		createImage('../../../src/assets/icons/plus.svg')(['icon', 'icon-plus'])(
			'icon of plus symbol'
		)('Add New Project')
	)

	const sampleProjectContainer = elemCreator('div')(['sidebar-project', 'project'])
	appendElemToParent(projectsContainer)(sampleProjectContainer)

	pipe(
		addTextToElem('Sample Project'),
		appendElemToParent(sampleProjectContainer)
	)(elemCreator('h4')(['project-text', 'text-sampleProject']))

	pipe(
		addAttributeToElem([['data-name', `sample-project`]]),
		addEvtListener('click')(handleAddNewTodoIconClick),
		appendElemToParent(sampleProjectContainer)
	)(
		createImage('../../../src/assets/icons/plus.svg')(['icon', 'icon-plus'])(
			'icon of plus symbol'
		)('Add New Todo')
	)

	//
	//
	//
}

export { sidebar }