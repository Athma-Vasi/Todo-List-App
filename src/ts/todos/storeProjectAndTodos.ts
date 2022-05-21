import { ProjectAndTodosObj, State, TodosArr } from '../types'

const storeProjectAndTodos = function ({ projects }: State) {
	const log = (i: unknown) => console.log('\n', i)
	//the first project is the sample project, so we check the last one, which will always be the current project since only sample + current project comes in at a time(2 projects total)
	const currentProjName = projects.at(-1)?.project.projectName
	const currentTodoName = projects.at(-1)?.todos[0].todoName
	//only one todo if a new project, 3(usually) or 4(max) from sample project
	const currentTodos = projects.at(-1)?.todos[0]

	log({ currentProjName })
	log({ currentTodoName })
	log({ currentTodos })

	Object.keys(localStorage).forEach((key) => {
		if (key === 'projectAndTodos') {
			//confirmed its of type State
			const storageArr: State = JSON.parse(localStorage.getItem(key) ?? '')
			log({ storageArr })
			const todoNamesArr: string[] = []
		}
	})
}
export { storeProjectAndTodos }
// const projectsFromStorageArr: Array<ProjectAndTodosObj> = JSON.parse(
//   localStorage.getItem(key) ?? ''
// )
// log({ projectsFromStorageArr })
// //loop through projects from storage to match name of incoming project
// projectsFromStorageArr.forEach((projectObj) => {
//   if (projectObj.project.projectName === currentProjName) {
//     //grab names of todos that match similar project name
//     projectObj.todos.forEach((todo) => todosNamesArr.push(todo.todoName))
//     log({ todosNamesArr })

//     //check if incoming todoName is already present
//     if (currentTodoName) {
//       if (todosNamesArr.includes(currentTodoName)) {
//         alert(
//           `${currentTodoName} already exists as a todo (｡•́︿•̀｡)  Please choose another name.`
//         )
//       } else {
//         if (currentTodos) {
//           projectObj.todos.push(currentTodos)
//         }
//         localStorage.setItem(key, JSON.stringify(projectsFromStorageArr))
//       }
//     }
//   }
// })
