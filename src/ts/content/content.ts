import {
	addAttributeToElem,
	addEvtListener,
	addTextToElem,
	appendElemToParent,
	createImage,
	elemCreator,
	pipe,
} from '../element-creators'
import { Div } from '../types'

const content = function () {
	const log = (i: unknown) => console.log('\n', i)
	const root: Div = document.querySelector('#root')

	const top = elemCreator('div')(['content-top'])
	appendElemToParent(root)(top)

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
		addEvtListener('click')(handleThemeIconClick),
		appendElemToParent(top)
	)(
		createImage('../../src/assets/icons/moon.svg')(['icon', 'icon-moon'])(
			'icon of moon representing dark mode'
		)('Dark Mode')
	)

	function handleThemeIconClick(this: HTMLImageElement, ev: MouseEvent) {
		log(this)
		log(ev)
	}
}

export { content }
