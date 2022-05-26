import { ProjectAndTodosObj, Todos, TodosArr } from '../types'
import { addTodosToContent } from './addTodosToContent'

const archiveExpiredTodos = function () {
	const log = (i: unknown) => console.log('\n', i)

	if (!localStorage.getItem('archived')) {
		localStorage.setItem('archived', JSON.stringify([]))
	}

	const projectArr: ProjectAndTodosObj[] = []

	Object.keys(localStorage).forEach((key) => {
		if (key !== 'projectNames' && key !== 'archived') {
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

	//grab previously stored expired/archived projects from localstorage
	const expiredProjectsArr: ProjectAndTodosObj[] = JSON.parse(
		localStorage.getItem('archived') ?? ''
	)

	const todosNotExpiredArr: ProjectAndTodosObj[] = []

	projectArr.forEach((project) => {
		project.todos.forEach((todo) => {
			const tempArr = todo.todoDueDate.split('-')
			const todoYear = Number(tempArr[0])
			const todoMonth = Number(tempArr[1])
			const todoDate = Number(tempArr[2])

			//grab each todo with dueDate earlier than today and store corresponding project into temp object and store in ...Arr
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
			} else {
				//grab projects and todos that are not expired and store them into ...Arr
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
				todosNotExpiredArr.push(temp)
			}
		})
	})

	//store expired projects and todos that have new expired todos added
	localStorage.setItem('archived', JSON.stringify(expiredProjectsArr))

	log(expiredProjectsArr)
	log(todosNotExpiredArr)
	log(projectArr)

	//the todos that share a project name are consolidated under one project
	const unExpiredProjectsMap: Map<string, ProjectAndTodosObj | undefined> =
		todosNotExpiredArr.reduce(
			(acc: Map<string, ProjectAndTodosObj | undefined>, curr: ProjectAndTodosObj) => {
				if (!acc.has(curr.project.projectName)) {
					acc.set(curr.project.projectName, curr)
				} else {
					const temp = acc.get(curr.project.projectName)
					temp?.todos.push(curr.todos[0])
					acc.set(curr.project.projectName, temp)
				}
				return acc
			},
			new Map()
		)

	log(unExpiredProjectsMap)

	//store modified projects without the expired todos back into localstorage
	unExpiredProjectsMap.forEach((val, key) => {
		localStorage.setItem(key, JSON.stringify(val))
	})

	//render the todos while disabling the checkbox
	expiredProjectsArr.forEach((project) => {
		addTodosToContent(project, true)
	})
}
export { archiveExpiredTodos }
