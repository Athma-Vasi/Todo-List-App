import { addProjectToSidebar } from '../projects/addProjectToSidebar'
import { ProjectAndTodosObj } from '../types'

const sidebarProjectsOnload = function () {
	const log = (i: unknown) => console.log('\n', i)

	const projects: ProjectAndTodosObj[] = []

	Object.keys(localStorage).forEach((key) => {
		if (key !== 'Sample Project' && key !== 'projectNames') {
			projects.push(JSON.parse(localStorage.getItem(key) ?? ''))
		}
	})

	log(projects)

	projects.forEach((project) => {
		addProjectToSidebar(project.project.projectName, project.project.projectColour)
	})
}
export { sidebarProjectsOnload }
