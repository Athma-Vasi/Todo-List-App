import { ProjectAndTodosObj } from '../types'

const storeSampleProject = function () {
	const now = new Date()
	//returns date one year from current
	const sampleLowDueDate = (now: Date) => {
		let day = now.getDate()
		let month = now.getMonth() + 1
		const year = now.getFullYear() + 1

		return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`
	}
	//returns date one month from current
	const sampleMedDueDate = (now: Date) => {
		let month = now.getMonth()
		month = month <= 10 ? month + 1 : month
		month = month + 1
		return `${now.getFullYear()}-${month < 10 ? '0' + month : month}-${
			now.getDate() < 10 ? '0' + now.getDate() : now.getDate()
		}`
	}
	//returns date one day from current
	const sampleUrgentDueDate = (now: Date) => {
		let day = now.getDate()
		day = day < 26 ? day + 2 : day

		let month = now.getMonth() + 1
		return `${now.getFullYear()}-${month < 10 ? '0' + month : month}-${
			day < 10 ? '0' + day : day
		}`
	}

	const sampleProject: ProjectAndTodosObj = {
		project:
			//sample project to display initially
			{ projectName: 'Sample Project', projectColour: '#48d1cc' },
		todos: [
			{
				todoName: `Finish 'The Faded Sun: Kesrith'`,
				todoDescription: 'Finish reading the book - return soon!',
				todoDueDate: `${sampleUrgentDueDate(now)}`,
				todoPriority: 'urgent',
			},
			{
				todoName: 'Vet Appointment',
				todoDescription: 'Take Nighteyes to the vet for routine checkup',
				todoDueDate: `${sampleMedDueDate(now)}`,
				todoPriority: 'medium',
			},
			{
				todoName: 'Backpacking trip to Nepal',
				todoDescription: 'Plan route, supplies and apply for visa',
				todoDueDate: `${sampleLowDueDate(now)}`,
				todoPriority: 'low',
			},
		],
	}

	//on first load only
	if (!localStorage.getItem(sampleProject.project.projectName)) {
		localStorage.setItem(sampleProject.project.projectName, JSON.stringify(sampleProject))
	}
}
export { storeSampleProject }
