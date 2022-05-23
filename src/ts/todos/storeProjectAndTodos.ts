import { ProjectAndTodosObj, State, TodosArr } from '../types'

const storeProjectAndTodos = function ({ projects }: State) {
	const log = (i: unknown) => console.log('\n', i)
	//the first project is the sample project, so we check the last one, which will always be the current project since only sample + current project comes in at a time(2 projects total)

	const currentProjName = projects[1].project.projectName
	const currentTodoName = projects[1].todos[0].todoName
	const currentTodos = projects[1].todos

	Object.keys(localStorage).forEach((key) => {
		if (key === 'projectAndTodos') {
			const storageArr: State = JSON.parse(localStorage.getItem(key) ?? '')

			const projectNamesSet: Set<string> = new Set()
			const todoNamesSet: Set<string> = new Set()

			storageArr.projects.forEach((projectArr) => {
				projectNamesSet.add(projectArr.project.projectName)
				projectArr.todos.forEach((todo) => todoNamesSet.add(todo.todoName))
			})

			log({ storageArr })
			log({ projectNamesSet })
			log({ todoNamesSet })

			//
			//
			//
		}
	})
}
export { storeProjectAndTodos }
// //if incoming project is already present in storage arr
// 			if (projectNamesArr.includes(currentProjName ?? '')) {
// 				storageArr.projects.forEach((projectArr) => {
// 					//if project in storage matches incoming project
// 					if (projectArr.project.projectName === currentProjName) {
// 						//check if incoming todo is already present
// 						if (todoNamesArr.includes(currentTodoName ?? '')) {
// 							alert(
// 								`${currentTodoName} already exists as a project (｡•́︿•̀｡)  Please choose another name.`
// 							)
// 						} else {
// 							//incoming todo is new and not a duplicate
// 							if (currentTodos) {
// 								projectArr.todos.push(currentTodos)
// 							}
// 						}
// 					}
// 				})

// 				localStorage.setItem(key, JSON.stringify(storageArr))
// 			} else {
// 				//if incoming project is new
// 				storageArr.projects.push(projects[1])
// 				localStorage.setItem(key, JSON.stringify(storageArr))
// 			}
