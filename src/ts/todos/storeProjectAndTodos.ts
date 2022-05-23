import { ProjectAndTodosObj, TodosArr } from '../types'

const storeProjectAndTodos = function () {}
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
