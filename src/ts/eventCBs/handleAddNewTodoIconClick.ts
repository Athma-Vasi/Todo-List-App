import { todoModal } from '../modals/todoModal';
import { Div } from '../types';

const handleAddNewTodoIconClick = function (this: HTMLButtonElement) {
	const projectDataName = this.dataset.name ?? '';
	const projectDataColour = this.dataset.colour ?? '';

	todoModal(projectDataName, projectDataColour);

	const addTodoModal: Div = document.querySelector('.todo-container');

	if (addTodoModal) {
		addTodoModal.style.visibility =
			addTodoModal?.style.visibility === 'visible' ? 'hidden' : 'visible';
		addTodoModal.style.boxShadow =
			'1px 1px 1.6px 1.6px #63526f61, 1.6px 1.6px 2.6px 2.6px #63526f61';
	}
};

export { handleAddNewTodoIconClick };
