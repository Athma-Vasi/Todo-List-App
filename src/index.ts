import './index.css'
import { content } from './ts/content/content'
import { contentsTodosOnload } from './ts/content/contentsTodosOnload'
import {
	addAttributeToElem,
	addTextToElem,
	appendElemToParent,
	elemCreator,
	pipe,
} from './ts/element-creators'
import { header } from './ts/header/header'
import { sidebar } from './ts/sidebar/sidebar'
import { sidebarProjectsOnload } from './ts/sidebar/sidebarProjectsOnload'
import { Div } from './ts/types'

const mainApp = function () {
	const log = (i: unknown) => console.log('\n', i)

	const root: Div = document.querySelector('#root')
	header()
	sidebar()
	content()
	//runs on every refresh
	self.onload = sidebarProjectsOnload
	// self.onload = contentsTodosOnload
}

document.addEventListener('DOMContentLoaded', mainApp)

// pipe(
// 	addTextToElem('Hi Athma!!'),
// 	addAttributeToElem('data-key')('something'),
// 	appendElemToParent(mainContent)
// )(elemCreator('p')(['para']))
