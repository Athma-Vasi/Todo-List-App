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
import { handleCloseIconClick } from '../eventCBs/handleCloseIconClick'
import { handleFormSubmit } from '../eventCBs/handleFormSubmit'
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

	//addProject modal
	const addProjectContainer = elemCreator('div')(['addProject-container'])
	appendElemToParent(sidebar)(addProjectContainer)

	const addProjectHeadingContainer = elemCreator('div')(['addProjectHeading-container'])
	appendElemToParent(addProjectContainer)(addProjectHeadingContainer)

	pipe(
		addTextToElem('Add project'),
		appendElemToParent(addProjectContainer)
	)(elemCreator('h3')(['heading-text', 'text-addProject']))

	const addProjectForm = elemCreator('form')(['form-addProject'])
	pipe(
		addAttributeToElem([
			['action', '#'],
			['method', 'post'],
			['id', 'form-addProject'],
			['name', 'form-addProject'],
		]),
		addEvtListener('submit')(handleFormSubmit),
		appendElemToParent(addProjectContainer)
	)(addProjectForm)

	pipe(
		addAttributeToElem([['for', 'addProject-name']]),
		addTextToElem('Name'),
		appendElemToParent(addProjectForm)
	)(elemCreator('label')(['label-name']))

	//input name
	pipe(
		addAttributeToElem([
			['id', 'addProject-name'],
			['type', 'text'],
			['placeholder', 'Enter name of project'],
			['name', 'addProject-name'],
			['required', ''],
		]),
		appendElemToParent(addProjectForm)
	)(elemCreator('input')(['addProject-name']))

	pipe(
		addAttributeToElem([['for', 'addProject-colour']]),
		addTextToElem('Colour'),
		appendElemToParent(addProjectForm)
	)(elemCreator('label')(['label-colour']))

	//input colour
	pipe(
		addAttributeToElem([
			['type', 'color'],
			['id', 'addProject-colour'],
			['name', 'addProject-colour'],
		]),
		appendElemToParent(addProjectForm)
	)(elemCreator('input')(['addProject-colour']))

	const addProjectIconsContainer = elemCreator('div')(['addProjectIcons-container'])
	appendElemToParent(addProjectForm)(addProjectIconsContainer)

	// const bttnCancel = elemCreator('button')(['bttn', 'bttn-cancel'])
	// pipe(
	// 	addAttributeToElem([
	// 		['type', 'button'],
	// 		['name', 'bttn-cancel'],
	// 	]),
	// 	appendElemToParent(addProjectIconsContainer)
	// )(bttnCancel)

	pipe(
		addEvtListener('click')(handleCloseIconClick),
		appendElemToParent(addProjectIconsContainer)
	)(
		createImage('../../src/assets/icons/x.svg')(['icon', 'icon-x'])(
			`icon of symbol 'x' representing cancel or close`
		)('Cancel')
	)

	const bttnAdd = elemCreator('button')(['bttn', 'bttn-add'])
	pipe(
		addAttributeToElem([
			['type', 'submit'],
			['name', 'bttn-add'],
			['form', 'form-addProject'],
		]),
		appendElemToParent(addProjectIconsContainer)
	)(bttnAdd)

	pipe(
		addAttributeToElem([[]]),
		appendElemToParent(bttnAdd)
	)(
		createImage('../../src/assets/icons/check.svg')(['icon', 'icon-add'])(
			`icon of symbol 'check' representing add`
		)('Add')
	)

	//
	//
	//
}

export { sidebar }
