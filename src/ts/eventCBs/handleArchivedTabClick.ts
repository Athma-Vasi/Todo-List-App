import { addTodosToContent } from '../projectsAndTodos/addTodosToContent'
import { Div, ProjectAndTodosObj } from '../types'

const handleArchivedTabClick = function (this: HTMLDivElement) {
	const log = (i: unknown) => console.log('\n', i)
	//remove content section's previous contents
	const contentTop: Div = document.querySelector('.content-top')
	contentTop?.nextSibling?.remove()

	const archivedStorageArr: ProjectAndTodosObj[] = JSON.parse(
		localStorage.getItem('archived') ?? ''
	)

	console.log(archivedStorageArr)

	archivedStorageArr.forEach((project) => {
		addTodosToContent(project)
	})
}
export { handleArchivedTabClick }
