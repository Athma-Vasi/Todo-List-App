import { todoModal } from '../modals/todoModal'
import { Div } from '../types'

const handleAddNewTodoIconClick = function (this: HTMLImageElement) {
	const projectDataName = this.dataset.name ?? ''
	const projectDataColour = this.dataset.colour ?? ''

	todoModal(projectDataName, projectDataColour)

	const addTodoModal: Div = document.querySelector('.todo-container')

	if (addTodoModal)
		addTodoModal.style.visibility =
			addTodoModal?.style.visibility === 'visible' ? 'hidden' : 'visible'
}

export { handleAddNewTodoIconClick }
