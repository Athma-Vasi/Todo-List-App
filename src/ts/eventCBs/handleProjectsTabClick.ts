import { addTodosToContent } from '../projectsAndTodos/addTodosToContent';
import { Div, ProjectAndTodosObj } from '../types';
import { appendElemToParent, elemCreator } from '../element-creators';

const handleProjectsTabClick = function () {
	//remove content section's previous contents
	const content: Div = document.querySelector('.content');
	const contentBottomPrev = document.querySelector('.content-bottom');
	contentBottomPrev?.remove();

	//render new content
	const contentBottom = elemCreator('div')(['content-bottom']);
	appendElemToParent(content)(contentBottom);

	const projectsAndTodosArr: ProjectAndTodosObj[] = [];

	//grab all the projects except specified
	Object.keys(localStorage).forEach((key) => {
		if (key !== 'projectNames' && key !== 'archived') {
			projectsAndTodosArr.push(JSON.parse(localStorage.getItem(key) ?? ''));
		}
	});

	//render todos
	projectsAndTodosArr.forEach((project) => {
		addTodosToContent(project);
	});
};
export { handleProjectsTabClick };
