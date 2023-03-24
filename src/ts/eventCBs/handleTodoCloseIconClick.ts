import { Div } from '../types';

const handleTodoCloseIconClick = function () {
	const todoModal: Div = document.querySelector('.todo-container');

	if (todoModal) todoModal.remove();
};
export { handleTodoCloseIconClick };
