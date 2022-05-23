import {
	addAttributeToElem,
	addStyleToElem,
	addTextToElem,
	appendElemToParent,
	elemCreator,
	pipe,
} from '../element-creators'
import { Div, ProjectAndTodosObj, Todos } from '../types'

const addTodosToContent = function ({ project, todos }: ProjectAndTodosObj) {
	const { projectName, projectColour } = project
	const { todoName, todoDescription, todoDueDate, todoPriority } = todos[0]

	const content: Div = document.querySelector('.content')

	const todoContentContainer = elemCreator('div')(['todoContent-container'])
	appendElemToParent(content)(todoContentContainer)

	pipe(appendElemToParent(todoContentContainer))(
		elemCreator('div')(['projectName-container'])
	)

	pipe(
		addTextToElem(`${projectName}`),
		addStyleToElem([['color', `${projectColour}`]]),
		appendElemToParent(todoContentContainer)
	)(elemCreator('h3')(['heading-text', 'todoContent-projectName']))

	pipe(addAttributeToElem([['for', 'complete']]))(
		elemCreator('label')(['label', 'todoContent-label'])
	)

	pipe(
		addAttributeToElem([
			['type', 'checkbox'],
			['id', 'complete'],
			['name', 'complete'],
			['value', 'todoContent'],
		])
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

	pipe(
		addTextToElem(`${todoPriority}`),
		addStyleToElem([
			[
				'color',
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
		]),
		appendElemToParent(todoContentContainer)
	)(elemCreator('p')(['todoContent-priority']))
}
export { addTodosToContent }

// <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
// <label for="vehicle1"> I have a bike</label><br>
// <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
// <label for="vehicle2"> I have a car</label><br>
// <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
// <label for="vehicle3"> I have a boat</label><br>
