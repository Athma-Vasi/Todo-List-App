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
import { archiveExpiredTodos } from './ts/projectsAndTodos/archiveExpiredTodos'

const mainApp = function () {
	const log = (i: unknown) => console.log('\n', i)
	//TODO: change min validation in month in todoModal
	//TODO: add required to todoModal entries
	//TODO: add editing the todos functionality

	const root: Div = document.querySelector('#root')
	header()
	sidebar()
	content()
	storeSampleProject()
	archiveExpiredTodos()
	//runs on every refresh
	self.onload = projectsAndTodosOnload
}

document.addEventListener('DOMContentLoaded', mainApp)
