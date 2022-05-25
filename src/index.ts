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
import { storeSampleProject } from './ts/projectsAndTodos/storeSampleProject'

const mainApp = function () {
	const log = (i: unknown) => console.log('\n', i)

	const root: Div = document.querySelector('#root')
	header()
	sidebar()
	content()
	storeSampleProject()

	//runs on every refresh
	self.onload = projectsAndTodosOnload
}

document.addEventListener('DOMContentLoaded', mainApp)
