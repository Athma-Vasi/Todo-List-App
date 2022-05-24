import { ProjectAndTodosObj } from '../types'

const contentsTodosOnload = function () {
	const projects: ProjectAndTodosObj[] = []

	Object.keys(localStorage).forEach((key) => {
		if (key !== 'Sample Project' && key !== 'projectNames') {
			projects.push(JSON.parse(localStorage.getItem(key) ?? ''))
		}
	})
}
export { contentsTodosOnload }
