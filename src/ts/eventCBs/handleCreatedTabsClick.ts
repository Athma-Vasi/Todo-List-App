import { addTodosToContent } from '../projectsAndTodos/addTodosToContent'
import { Div, ProjectAndTodosObj } from '../types'

const handleCreatedTabsClick = function (this: HTMLHeadingElement) {
	const log = (i: unknown) => console.log('\n', i)
	//remove content section's previous contents
	const content: Div = document.querySelector('.content')
	const contentTop: Div = document.querySelector('.content-top')

	content?.childNodes.forEach((child) => {
		if (!child.contains(contentTop)) {
			child.remove()
		}
	})
	//NEED TO ADD ANOTHER CONTAINER HOLDING CREATED PROJECTS TO EASILY REMOVE

	const thisProjectName = this.textContent

	const projectAndTodosObjArr: ProjectAndTodosObj[] = []

	Object.keys(localStorage).forEach((key) => {
		if (key === thisProjectName) {
			projectAndTodosObjArr.push(JSON.parse(localStorage.getItem(thisProjectName) ?? ''))
		}
	})

	projectAndTodosObjArr.forEach((project) => {
		addTodosToContent(project)
	})
}
export { handleCreatedTabsClick }
