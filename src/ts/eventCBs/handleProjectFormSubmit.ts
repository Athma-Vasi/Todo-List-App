import { addProjectToSidebar } from '../projectsAndTodos/addProjectToSidebar'
import { Div } from '../types'

const handleProjectFormSubmit = function (this: HTMLFormElement, ev: SubmitEvent) {
	ev.preventDefault()

	const addProjectModal: Div = document.querySelector('.addProject-container')

	const projectFormData = new FormData(this)
	const projectFormName = projectFormData.get('addProject-name')?.toString() ?? ''
	const projectFormColour = projectFormData.get('addProject-colour')?.toString() ?? ''

	//if 'projectNames' doesn't exist, create it, otherwise do nothing
	if (!localStorage.getItem('projectNames')) {
		localStorage.setItem('projectNames', JSON.stringify([]))
	}

	const storeProject = (function (projectFormName_: string) {
		//if key in localstorage is projectNames, then get the values as
		//an array
		Object.keys(localStorage).forEach((key) => {
			if (key === 'projectNames') {
				const keysSet = new Set(JSON.parse(localStorage.getItem(key) ?? ''))

				//to prevent sidebar tab names used as project names
				;['Sample Project', 'archived', 'projects'].forEach((name) => keysSet.add(name))

				//if name already present
				if (keysSet.has(projectFormName_)) {
					alert(
						`${projectFormName_} already exists as a project (｡•́︿•̀｡)  Please choose another name.`
					)
					return
				} else {
					//if new name, push to arr and then store array in localStorage
					keysSet.add(projectFormName_)
					localStorage.setItem(key, JSON.stringify(Array.from(keysSet)))

					//render projects with name,colour & icon under sidebar
					addProjectToSidebar(projectFormName, projectFormColour)
				}
			}
		})
	})(projectFormName)

	addProjectModal?.remove()
}

export { handleProjectFormSubmit }
