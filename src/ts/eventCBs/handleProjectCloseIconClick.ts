import { Div } from '../types'

const handleProjectCloseIconClick = function (this: HTMLImageElement, ev: MouseEvent) {
	const addProjectModal: Div = document.querySelector('.addProject-container')

	// if (addProjectModal)
	// 	addProjectModal.style.visibility =
	// 		addProjectModal?.style.visibility === 'visible' ? 'hidden' : 'visible'

	if (addProjectModal) addProjectModal.remove()
}

export { handleProjectCloseIconClick }
