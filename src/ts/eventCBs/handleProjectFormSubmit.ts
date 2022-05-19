import { addProjectToSidebar } from '../projects/addProjectToSidebar'
import { storeProjects } from '../projects/storeProjects'
import { Div } from '../types'

const handleProjectFormSubmit = function (this: HTMLFormElement, ev: SubmitEvent) {
	ev.preventDefault()

	const addProjectModal: Div = document.querySelector('.addProject-container')

	const projectFormData = new FormData(this)
	const projectFormName = projectFormData.get('addProject-name')?.toString() ?? ''
	const projectFormColour = projectFormData.get('addProject-colour')?.toString() ?? ''

	storeProjects(projectFormName, projectFormColour)
	addProjectToSidebar(projectFormName)

	//
	//
	//
	if (addProjectModal)
		addProjectModal.style.visibility =
			addProjectModal.style.visibility === 'hidden' ? 'visible' : 'hidden'
}

export { handleProjectFormSubmit }
