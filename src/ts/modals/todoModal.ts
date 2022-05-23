import {
	addAttributeToElem,
	addTextToElem,
	appendElemToParent,
	createImage,
	elemCreator,
	addEvtListener,
	pipe,
} from '../element-creators'
import { handleAddNewTodoIconClick } from '../eventCBs/handleAddNewTodoIconClick'
import { handleTodoCloseIconClick } from '../eventCBs/handleTodoCloseIconClick'
import { handleTodoFormSubmit } from '../eventCBs/handleTodoFormSubmit'
import { Div } from '../types'

const todoModal = function (projectDataName_: string, projectDataColour_: string) {
	const root: Div = document.querySelector('#root')

	const now = new Date()

	const todoContainer = elemCreator('div')(['todo-container'])
	appendElemToParent(root)(todoContainer)

	const todoForm = elemCreator('form')(['form', 'form-addTodo'])

	pipe(
		addEvtListener('submit')(handleTodoFormSubmit),
		addAttributeToElem([
			['action', '#'],
			['method', 'post'],
			['id', 'form-addTodo'],
			['name', 'form-addTodo'],
		]),
		appendElemToParent(todoContainer)
	)(todoForm)

	pipe(
		addTextToElem('Add task todo'),
		appendElemToParent(todoForm)
	)(elemCreator('h3')(['heading-text', 'text-addTodo']))

	pipe(
		addAttributeToElem([['for', 'addTodo-name']]),
		addTextToElem('Name'),
		appendElemToParent(todoForm)
	)(elemCreator('label')(['label-name']))

	pipe(
		addAttributeToElem([
			['type', 'text'],
			['form', 'form-addTodo'],
			['id', 'addTodo-name'],
			['name', 'addTodo-name'],
			['minlength', '2'],
			['maxlength', '20'],
			['pattern', '^[a-zA-Z][a-zA-Z0-9-_.]{1,20}$'],
			['placeholder', 'enter name for task todo'],
			['required', ''],
		]),
		appendElemToParent(todoForm)
	)(elemCreator('input')(['addTodo-name']))

	pipe(
		addAttributeToElem([['for', 'addTodo-description']]),
		addTextToElem('Description'),
		appendElemToParent(todoForm)
	)(elemCreator('label')(['label-description']))

	pipe(
		addAttributeToElem([
			['id', 'addTodo-description'],
			['autocomplete', 'on'],
			['form', 'form-addTodo'],
			['max-length', '500'],
			['name', 'addTodo-description'],
			['spellcheck', 'true'],
			['wrap', 'hard'],
		]),
		appendElemToParent(todoForm)
	)(elemCreator('textarea')(['addTodo-description']))

	pipe(
		addAttributeToElem([['for', 'addTodo-dueDate']]),
		appendElemToParent(todoForm)
	)(elemCreator('label')(['label-dueDate']))

	pipe(
		addAttributeToElem([
			['type', 'date'],
			['id', 'addTodo-dueDate'],
			[
				'min',
				`${now.getFullYear()}-${
					now.getMonth() < 10 ? '0' + now.getMonth() : now.getMonth()
				}-${now.getDate() < 10 ? '0' + now.getDate() : now.getDate()}`,
			],
			[
				'max',
				`${now.getFullYear() + 100}-${
					now.getMonth() < 10 ? '0' + now.getMonth() : now.getMonth()
				}-${now.getDate() < 10 ? '0' + now.getDate() : now.getDate()}`,
			],
			['name', 'addTodo-dueDate'],
			['placeholder', 'yyyy-mm-dd'],
			['pattern', '(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}'],
			// ['required', ''],
		]),
		appendElemToParent(todoForm)
	)(elemCreator('input')(['addTodo-dueDate']))

	pipe(
		addAttributeToElem([['for', 'addTodo-selectPriority']]),
		appendElemToParent(todoForm)
	)(elemCreator('label')(['label-selectPriority']))

	const selectPriority = elemCreator('select')(['addTodo-selectPriority'])
	pipe(
		addAttributeToElem([
			['name', 'addTodo-selectPriority'],
			['id', 'addTodo-selectPriority'],
			['form', 'form-addTodo'],
			// ['required', ''],
		]),
		appendElemToParent(todoForm)
	)(selectPriority)

	pipe(
		addTextToElem('--Please choose a priority--'),
		addAttributeToElem([['value', '']]),
		appendElemToParent(selectPriority)
	)(elemCreator('option')(['option-selectPriority']))

	pipe(
		addAttributeToElem([['value', 'low']]),
		addTextToElem('Low'),
		appendElemToParent(selectPriority)
	)(elemCreator('option')(['option-selectPriority']))

	pipe(
		addAttributeToElem([['value', 'medium']]),
		addTextToElem('Medium'),
		appendElemToParent(selectPriority)
	)(elemCreator('option')(['option-selectPriority']))

	pipe(
		addAttributeToElem([['value', 'high']]),
		addTextToElem('High'),
		appendElemToParent(selectPriority)
	)(elemCreator('option')(['option-selectPriority']))

	pipe(
		addAttributeToElem([['value', 'urgent']]),
		addTextToElem('Urgent'),
		appendElemToParent(selectPriority)
	)(elemCreator('option')(['option-selectPriority']))

	pipe(
		addAttributeToElem([['value', 'immediate']]),
		addTextToElem('Immediate'),
		appendElemToParent(selectPriority)
	)(elemCreator('option')(['option-selectPriority']))

	//hidden element to funnel project name to todoform
	pipe(
		addAttributeToElem([
			['hidden', ''],
			['value', `${projectDataName_}`],
			['name', 'addTodo-projectName'],
			['type', 'text'],
		]),
		appendElemToParent(todoForm)
	)(elemCreator('input')(['addTodo-projectName__hidden']))

	//hidden element to funnel project colour to todoform
	pipe(
		addAttributeToElem([
			['hidden', ''],
			['value', `${projectDataColour_}`],
			['name', 'addTodo-projectColour'],
			['type', 'text'],
		]),
		appendElemToParent(todoForm)
	)(elemCreator('input')(['addTodo-projectColour__hidden']))

	//
	//
	const todoIconsContainer = elemCreator('div')(['addTodoIcons-container'])
	appendElemToParent(todoForm)(todoIconsContainer)

	pipe(
		addEvtListener('click')(handleTodoCloseIconClick),
		appendElemToParent(todoIconsContainer)
	)(
		createImage('../../src/assets/icons/x.svg')(['icon', 'icon-cancelTodo'])(
			`icon of symbol 'x' representing close or cancel`
		)('Cancel')
	)

	const bttnAddTodo = elemCreator('button')(['bttn', 'bttn-addTodo'])
	pipe(
		addAttributeToElem([
			['type', 'submit'],
			['name', 'bttn-addTodo'],
			['form', 'form-addTodo'],
		]),
		appendElemToParent(todoForm)
	)(bttnAddTodo)

	pipe(appendElemToParent(bttnAddTodo))(
		createImage('../../src/assets/icons/check.svg')(['icon', 'icon-addTodo'])(
			`icon of a checkmark representing add`
		)('Add Todo')
	)
}

export { todoModal }
