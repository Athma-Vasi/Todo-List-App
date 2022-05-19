import { Div } from '../types'

const handleCloseIconClick = function (this: HTMLImageElement, ev: MouseEvent) {
	const addProjectModal: Div = document.querySelector('.addProject-container')
	if (addProjectModal)
		addProjectModal.style.visibility =
			addProjectModal?.style.visibility === 'visible' ? 'hidden' : 'visible'
}

export { handleCloseIconClick }
