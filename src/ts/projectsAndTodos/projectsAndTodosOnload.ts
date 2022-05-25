import { addProjectToSidebar } from './addProjectToSidebar'
import { ProjectAndTodosObj } from '../types'
import { addTodosToContent } from './addTodosToContent'

const projectsAndTodosOnload = function () {
	const log = (i: unknown) => console.log('\n', i)

	const projects: ProjectAndTodosObj[] = []

	Object.keys(localStorage).forEach((key) => {
		if (
			key !== 'Sample Project' &&
			key !== 'projectNames' &&
			key !== 'archived' &&
			key !== 'upcoming' &&
			key !== 'today'
		) {
			projects.push(JSON.parse(localStorage.getItem(key) ?? ''))
		}
	})

	//display sample todos
	const sampleProject = JSON.parse(localStorage.getItem('Sample Project') ?? '')
	addTodosToContent(sampleProject)

	//display rest of projects in storage
	projects.forEach((project) => {
		addProjectToSidebar(project.project.projectName, project.project.projectColour)
		addTodosToContent(project)
	})
}
export { projectsAndTodosOnload }
