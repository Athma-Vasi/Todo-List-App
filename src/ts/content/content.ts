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
import { handleSortByPriorityClick } from '../eventCBs/handleSortByPriorityClick'

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
		createImage('../../dist/assets/icons/search.svg')(['icon', 'icon-search'])(
			'icon of magnifying glass representing search'
		)('Search')
	)

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
			['id', 'select-filterByPriority'],
			['title', 'select-filterByPriority'],
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

	const selectSortByPriority = elemCreator('select')(['select-sortByPriority'])
	pipe(
		addEvtListener('click')(handleSortByPriorityClick),
		addAttributeToElem([
			['id', 'select-sortByPriority'],
			['name', 'select-sortByPriority'],
			['title', 'select-sortByPriority'],
		]),
		appendElemToParent(top)
	)(selectSortByPriority)

	pipe(
		addTextToElem('--Sort by priority--'),
		addAttributeToElem([['value', '']]),
		appendElemToParent(selectSortByPriority)
	)(elemCreator('option')(['option-sortByPriority']))

	pipe(
		addTextToElem('low to immediate'),
		addAttributeToElem([['value', 'lowToImmediate']]),
		appendElemToParent(selectSortByPriority)
	)(elemCreator('option')(['option-sortByPriority']))

	pipe(
		addTextToElem('immediate to low'),
		addAttributeToElem([['value', 'immediateToLow']]),
		appendElemToParent(selectSortByPriority)
	)(elemCreator('option')(['option-sortByPriority']))

	const contentBottom = elemCreator('div')(['content-bottom'])
	appendElemToParent(content)(contentBottom)
}

export { content }
