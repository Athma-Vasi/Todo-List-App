import { projectModal } from '../modals/projectModal'
import { Div } from '../types'

const handleAddNewProjectIconClick = function (this: HTMLImageElement, ev: MouseEvent) {
	projectModal()

	const addProjectModal: Div = document.querySelector('.addProject-container')

	if (addProjectModal) {
		addProjectModal.style.visibility =
			addProjectModal?.style.visibility === 'visible' ? 'hidden' : 'visible'
		addProjectModal.style.boxShadow =
			'1px 1px 1.6px 1.6px #63526f61, 1.6px 1.6px 2.6px 2.6px #63526f61'
	}
}

export { handleAddNewProjectIconClick }
