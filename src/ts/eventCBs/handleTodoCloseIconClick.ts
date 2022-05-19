import { Div } from '../types'

const handleTodoCloseIconClick = function () {
	const todoModal: Div = document.querySelector('.todo-container')

	// if (todoModal)
	// 	todoModal.style.visibility = todoModal.style.visibility = 'visible'
	// 		? 'hidden'
	// 		: 'visible'

	if (todoModal) todoModal.remove()
}
export { handleTodoCloseIconClick }
