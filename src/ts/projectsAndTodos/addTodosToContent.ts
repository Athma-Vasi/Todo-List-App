import {
	addAttributeToElem,
	addEvtListener,
	addStyleToElem,
	addTextToElem,
	appendElemToParent,
	elemCreator,
	pipe,
} from '../element-creators'
import { handleTodoCheckboxComplete } from '../eventCBs/handleTodoCheckboxComplete'
import { Div, ProjectAndTodosObj, Todos } from '../types'

const addTodosToContent = function ({ project, todos }: ProjectAndTodosObj) {
	const { projectName, projectColour } = project

	todos.forEach((todo, i) => {
		const { todoName, todoDescription, todoDueDate, todoPriority } = todos[i]
		const content: Div = document.querySelector('.content')

		const todoContentContainer = elemCreator('div')(['todoContent-container'])
		appendElemToParent(content)(todoContentContainer)

		const headingContainer = elemCreator('div')(['todoContent-heading-container'])
		appendElemToParent(todoContentContainer)(headingContainer)

		pipe(
			addTextToElem(`${projectName}`),
			addStyleToElem([['color', `${projectColour}`]]),
			appendElemToParent(headingContainer)
		)(elemCreator('h3')(['heading-text', 'todoContent-projectName']))

		pipe(addAttributeToElem([['for', 'complete']]))(
			elemCreator('label')(['label', 'todoContent-label'])
		)

		pipe(
			addEvtListener('click')(handleTodoCheckboxComplete),
			addAttributeToElem([
				['type', 'checkbox'],
				['id', 'complete'],
				['name', 'complete'],
				['value', 'todoContent'],
			]),
			appendElemToParent(headingContainer)
		)(elemCreator('input')(['todoContent-checkbox']))

		pipe(
			addTextToElem(`${todoName}`),
			appendElemToParent(todoContentContainer)
		)(elemCreator('h4')(['todoContent-name']))

		pipe(
			addTextToElem(`${todoDescription}`),
			appendElemToParent(todoContentContainer)
		)(elemCreator('p')(['todoContent-description']))

		pipe(
			addTextToElem(`${todoDueDate}`),
			appendElemToParent(todoContentContainer)
		)(elemCreator('p')(['todoContent-dueDate']))

		const priorityContainer = elemCreator('div')(['priority-container'])
		appendElemToParent(todoContentContainer)(priorityContainer)
		addStyleToElem([
			[
				'background-color',
				`${
					todoPriority === 'immediate'
						? 'hsl(0, 100%, 35%)'
						: todoPriority === 'urgent'
						? 'hsl(40, 100%, 65%)'
						: todoPriority === 'high'
						? 'hsl(90, 100%, 50%)'
						: todoPriority === 'medium'
						? 'hsl(200, 100%, 50%)'
						: 'hsl(250, 100%, 70%)'
				}`,
			],
		])(priorityContainer)

		pipe(
			addTextToElem(`${todoPriority}`),
			appendElemToParent(priorityContainer)
		)(elemCreator('p')(['todoContent-priority']))
	})
}
export { addTodosToContent }

// <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
// <label for="vehicle1"> I have a bike</label><br>
// <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
// <label for="vehicle2"> I have a car</label><br>
// <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
// <label for="vehicle3"> I have a boat</label><br>
