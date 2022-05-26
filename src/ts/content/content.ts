import {
	addAttributeToElem,
	addEvtListener,
	addTextToElem,
	appendElemToParent,
	createImage,
	elemCreator,
	pipe,
} from '../element-creators'
import { handleFilterByPriorityClick } from '../eventCBs/handleFilterByPriorityClick'
import { handleSearchFormSubmit } from '../eventCBs/handleSearchFormSubmit'
import { handleThemeIconToggle } from '../eventCBs/handleThemeIconToggle'
import { Div } from '../types'

const content = function () {
	const log = (i: unknown) => console.log('\n', i)
	const root: Div = document.querySelector('#root')

	const content = elemCreator('div')(['content'])
	appendElemToParent(root)(content)

	const top = elemCreator('div')(['content-top'])
	appendElemToParent(content)(top)

	const form = elemCreator('form')(['form-searchTodo'])
	pipe(
		addEvtListener('submit')(handleSearchFormSubmit),
		addAttributeToElem([
			['action', '#'],
			['method', 'post'],
			['id', 'form-searchTodo'],
			['name', 'search-todo'],
		]),
		appendElemToParent(top)
	)(form)

	pipe(
		addAttributeToElem([['for', 'searchTodo']]),
		appendElemToParent(form)
	)(elemCreator('label')(['label-search']))

	const searchTodo = elemCreator('input')(['searchTodo'])
	addAttributeToElem([
		['type', 'search'],
		['placeholder', 'search for a todo'],
		['id', 'searchTodo'],
		['name', 'search-todo'],
	])(searchTodo)
	appendElemToParent(form)(searchTodo)

	pipe(appendElemToParent(form))(
		createImage('../../src/assets/icons/search.svg')(['icon', 'icon-search'])(
			'icon of magnifying glass representing search'
		)('Search')
	)

	pipe(
		addEvtListener('click')(handleThemeIconToggle),
		appendElemToParent(top)
	)(
		createImage('../../src/assets/icons/moon.svg')(['icon', 'icon-moon'])(
			'icon of moon representing dark mode'
		)('Dark Mode')
	)

	// const formFilterByPriority = elemCreator('form')(['form-filterByPriority'])
	// pipe(
	// 	addAttributeToElem([
	// 		['action', '#'],
	// 		['method', 'post'],
	// 		['id', 'form-filterByPriority'],
	// 		['name', 'form-filterByPriority'],
	// 	]),
	// 	appendElemToParent(top)
	// )(formFilterByPriority)

	pipe(
		addAttributeToElem([
			['for', 'select-filterByPriority'],
			['name', 'select-filterByPriority'],
		]),
		appendElemToParent(top)
	)(elemCreator('label')(['label', 'label-filterByPriority']))

	const selectFilterByPriority = elemCreator('select')(['select-filterByPriority'])
	pipe(
		addEvtListener('click')(handleFilterByPriorityClick),
		addAttributeToElem([
			['name', 'select-filterByPriority'],
			// ['form', 'form-filterByPriority'],
			['id', 'select-filterByPriority'],
		]),
		appendElemToParent(top)
	)(selectFilterByPriority)

	pipe(
		addTextToElem('--Filter by priority--'),
		addAttributeToElem([['value', '']]),
		appendElemToParent(selectFilterByPriority)
	)(elemCreator('option')(['option-filterByPriority']))

	pipe(
		addTextToElem('immediate'),
		addAttributeToElem([['value', 'immediate']]),
		appendElemToParent(selectFilterByPriority)
	)(elemCreator('option')(['option-filterByPriority']))

	pipe(
		addTextToElem('urgent'),
		addAttributeToElem([['value', 'urgent']]),
		appendElemToParent(selectFilterByPriority)
	)(elemCreator('option')(['option-filterByPriority']))

	pipe(
		addTextToElem('high'),
		addAttributeToElem([['value', 'high']]),
		appendElemToParent(selectFilterByPriority)
	)(elemCreator('option')(['option-filterByPriority']))

	pipe(
		addTextToElem('medium'),
		addAttributeToElem([['value', 'medium']]),
		appendElemToParent(selectFilterByPriority)
	)(elemCreator('option')(['option-filterByPriority']))

	pipe(
		addTextToElem('low'),
		addAttributeToElem([['value', 'low']]),
		appendElemToParent(selectFilterByPriority)
	)(elemCreator('option')(['option-filterByPriority']))

	const contentBottom = elemCreator('div')(['content-bottom'])
	appendElemToParent(content)(contentBottom)
}

export { content }
