import './index.css'
import { content } from './ts/content/content'
import { header } from './ts/header/header'
import { sidebar } from './ts/sidebar/sidebar'
import { projectsAndTodosOnload } from './ts/projectsAndTodos/projectsAndTodosOnload'
import { storeSampleProject } from './ts/projectsAndTodos/storeSampleProject'
import { archiveExpiredTodos } from './ts/projectsAndTodos/archiveExpiredTodos'

const mainApp = function () {
	header()
	sidebar()
	content()
	storeSampleProject()
	archiveExpiredTodos()

	//runs on every refresh
	self.onload = projectsAndTodosOnload
}

document.addEventListener('DOMContentLoaded', mainApp)
