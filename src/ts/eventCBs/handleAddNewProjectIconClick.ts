import { projectModal } from '../modals/projectModal'
import { Div } from '../types'

const handleAddNewProjectIconClick = function (this: HTMLImageElement, ev: MouseEvent) {
	projectModal()

	const addProjectModal: Div = document.querySelector('.addProject-container')

	if (addProjectModal) {
		addProjectModal.style.visibility =
			addProjectModal?.style.visibility === 'visible' ? 'hidden' : 'visible'
	}
}

export { handleAddNewProjectIconClick }
