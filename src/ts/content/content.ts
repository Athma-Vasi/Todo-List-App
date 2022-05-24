import {
	addAttributeToElem,
	addEvtListener,
	addTextToElem,
	appendElemToParent,
	createImage,
	elemCreator,
	pipe,
} from '../element-creators'
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
		['placeholder', 'search for a todo in selected project'],
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
}

export { content }
