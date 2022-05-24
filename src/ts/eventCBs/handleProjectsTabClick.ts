import { addTodosToContent } from '../projectsAndTodos/addTodosToContent'
import { Div, ProjectAndTodosObj } from '../types'

const handleProjectsTabClick = function () {
	const log = (i: unknown) => console.log('\n', i)

	//remove content section's previous contents
	const contentTop: Div = document.querySelector('.content-top')
	contentTop?.nextSibling?.remove()

	//render new content
	const projectsAndTodosArr: ProjectAndTodosObj[] = []

	Object.keys(localStorage).forEach((key) => {
		if (
			key !== 'Sample Project' &&
			key !== 'projectNames' &&
			key !== 'archived' &&
			key !== 'upcoming' &&
			key !== 'today'
		) {
			projectsAndTodosArr.push(JSON.parse(localStorage.getItem(key) ?? ''))
		}
	})
	log(projectsAndTodosArr)

	projectsAndTodosArr.forEach((project) => {
		addTodosToContent(project)
	})
}
export { handleProjectsTabClick }
