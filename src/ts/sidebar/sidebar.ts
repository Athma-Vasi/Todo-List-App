import {
	addAttributeToElem,
	addTextToElem,
	appendElemToParent,
	createImage,
	elemCreator,
	addEvtListener,
	pipe,
} from '../element-creators'
import { storeProjects } from '../projects/storeProjects'
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

	const expiredContainer = elemCreator('div')(['sidebar-tab', 'container-expired'])
	appendElemToParent(sidebar)(expiredContainer)

	pipe(appendElemToParent(expiredContainer))(
		createImage('../../src/assets/icons/archive.svg')(['icon', 'expired-icon'])(
			'icon representing expired events'
		)('Expired')
	)

	pipe(
		addTextToElem('Expired'),
		appendElemToParent(expiredContainer)
	)(elemCreator('h4')(['tab-text', 'tab-expired']))

	const projectsContainer = elemCreator('div')(['sidebar-heading', 'container-projects'])
	appendElemToParent(sidebar)(projectsContainer)

	pipe(
		addTextToElem('Projects'),
		appendElemToParent(projectsContainer)
	)(elemCreator('h3')(['heading-text', 'text-projects']))

	const sampleProjectContainer = elemCreator('div')(['sidebar-project', 'project'])
	appendElemToParent(projectsContainer)(sampleProjectContainer)

	pipe(
		addTextToElem('Sample Project'),
		appendElemToParent(sampleProjectContainer)
	)(elemCreator('h4')(['project-text', 'text-sampleProject']))

	pipe(
		addEvtListener('click')(handleAddNewProjectIconClick),
		appendElemToParent(sampleProjectContainer)
	)(
		createImage('../../../src/assets/icons/plus.svg')(['icon', 'icon-plus'])(
			'icon of plus symbol'
		)('Add New Project')
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
	function handleAddNewProjectIconClick(this: HTMLImageElement, ev: MouseEvent) {
		const addProjectModal: Div = document.querySelector('.addProject-container')
		if (addProjectModal)
			addProjectModal.style.visibility =
				addProjectModal?.style.visibility === 'visible' ? 'hidden' : 'visible'
	}

	function handleCloseIconClick(this: HTMLImageElement, ev: MouseEvent) {
		const addProjectModal: Div = document.querySelector('.addProject-container')
		if (addProjectModal)
			addProjectModal.style.visibility =
				addProjectModal?.style.visibility === 'visible' ? 'hidden' : 'visible'
	}

	function handleFormSubmit(this: HTMLFormElement, ev: SubmitEvent) {
		ev.preventDefault()
		const formData = new FormData(this)

		const formName = formData.get('addProject-name')?.toString() ?? ''
		const formColour = formData.get('addProject-colour')?.toString() ?? ''

		storeProjects(formName, formColour)
	}
}

export { sidebar }
