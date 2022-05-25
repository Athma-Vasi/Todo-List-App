import { ProjectAndTodosObj } from '../types'
import { addTodosToContent } from './addTodosToContent'

const archiveExpiredTodos = function () {
	const log = (i: unknown) => console.log('\n', i)

	if (!localStorage.getItem('archived')) {
		localStorage.setItem('archived', JSON.stringify([]))
	}

	const projectArr: ProjectAndTodosObj[] = []

	Object.keys(localStorage).forEach((key) => {
		if (
			key !== 'projectNames' &&
			key !== 'today' &&
			key !== 'upcoming' &&
			key !== 'archived'
		) {
			projectArr.push(JSON.parse(localStorage.getItem(key) ?? ''))
		}
	})

	const now = new Date()
	const date = now.getDate()
	const month = now.getMonth() + 1
	const year = now.getFullYear()
	const today = `${year}-${month < 10 ? '0' + month : month}-${
		date < 10 ? '0' + date : date
	}`

	const expiredProjectsArr: ProjectAndTodosObj[] = []

	//grab each todo with dueDate earlier than today and store corresponding project into temp object and push it into arr
	projectArr.forEach((project) => {
		project.todos.forEach((todo) => {
			const tempArr = todo.todoDueDate.split('-')
			const todoYear = Number(tempArr[0])
			const todoMonth = Number(tempArr[1])
			const todoDate = Number(tempArr[2])

			if (todoDate < date || todoMonth < month || todoYear < year) {
				const temp = {
					project: {
						projectName: project.project.projectName,
						projectColour: project.project.projectColour,
					},
					todos: [
						{
							todoName: todo.todoName,
							todoDescription: todo.todoDescription,
							todoDueDate: todo.todoDueDate,
							todoPriority: todo.todoPriority,
						},
					],
				}
				expiredProjectsArr.push(temp)
			}
		})
	})

	//render the todos
	expiredProjectsArr.forEach((project) => {
		addTodosToContent(project, true)
	})
}
export { archiveExpiredTodos }
