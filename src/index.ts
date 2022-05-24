import './index.css'
import { content } from './ts/content/content'
import {
	addAttributeToElem,
	addTextToElem,
	appendElemToParent,
	elemCreator,
	pipe,
} from './ts/element-creators'
import { header } from './ts/header/header'
import { sidebar } from './ts/sidebar/sidebar'
import { projectsAndTodosOnload } from './ts/projectsAndTodos/projectsAndTodosOnload'
import { Div } from './ts/types'

const mainApp = function () {
	const log = (i: unknown) => console.log('\n', i)

	const root: Div = document.querySelector('#root')
	header()
	sidebar()
	content()
	//runs on every refresh
	self.onload = projectsAndTodosOnload
	// self.onload = contentsTodosOnload
}

document.addEventListener('DOMContentLoaded', mainApp)

// pipe(
// 	addTextToElem('Hi Athma!!'),
// 	addAttributeToElem('data-key')('something'),
// 	appendElemToParent(mainContent)
// )(elemCreator('p')(['para']))
