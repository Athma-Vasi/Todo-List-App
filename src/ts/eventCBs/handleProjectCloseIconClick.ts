import { Div } from '../types';

const handleProjectCloseIconClick = function (this: HTMLImageElement, ev: MouseEvent) {
	const addProjectModal: Div = document.querySelector('.addProject-container');

	if (addProjectModal) addProjectModal.remove();
};

export { handleProjectCloseIconClick };
