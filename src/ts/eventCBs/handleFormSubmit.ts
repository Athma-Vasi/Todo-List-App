import { addProjectToSidebar } from '../projects/addProjectToSidebar'
import { storeProjects } from '../projects/storeProjects'

const handleFormSubmit = function (this: HTMLFormElement, ev: SubmitEvent) {
	ev.preventDefault()
	const formData = new FormData(this)

	const formName = formData.get('addProject-name')?.toString() ?? ''
	const formColour = formData.get('addProject-colour')?.toString() ?? ''

	storeProjects(formName, formColour)
	addProjectToSidebar(formName)
}

export { handleFormSubmit }
