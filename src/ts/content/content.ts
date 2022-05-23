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

	const form = elemCreator('form')(['form'])
	pipe(
		addAttributeToElem([
			['action', '#'],
			['method', 'post'],
			['id', 'form-search'],
			['name', 'search-todo'],
		]),
		appendElemToParent(top)
	)(form)

	pipe(
		addAttributeToElem([['for', 'search']]),
		appendElemToParent(form)
	)(elemCreator('label')(['label-search']))

	pipe(
		addAttributeToElem([
			['type', 'search'],
			['placeholder', 'search for a todo in selected project'],
			['id', 'search'],
			['name', 'search-todo'],
		]),
		appendElemToParent(form)
	)(elemCreator('input')(['search']))

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
