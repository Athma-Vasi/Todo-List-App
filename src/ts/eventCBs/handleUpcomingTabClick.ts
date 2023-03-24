import { appendElemToParent, elemCreator } from '../element-creators';
import { addTodosToContent } from '../projectsAndTodos/addTodosToContent';
import { Div, ProjectAndTodosObj } from '../types';

const handleUpcomingTabClick = function () {
	//remove content section's previous contents
	const content: Div = document.querySelector('.content');
	const contentBottomPrev = document.querySelector('.content-bottom');
	contentBottomPrev?.remove();

	//render new content and append to this
	const contentBottom = elemCreator('div')(['content-bottom']);
	appendElemToParent(content)(contentBottom);

	const projectArr: ProjectAndTodosObj[] = [];
	//grab all the projects except ones specified
	Object.keys(localStorage).forEach((key) => {
		if (key !== 'projectNames' && key !== 'archived') {
			projectArr.push(JSON.parse(localStorage.getItem(key) ?? ''));
		}
	});

	const now = new Date();
	const date = now.getDate();
	const month = now.getMonth() + 1;
	const year = now.getFullYear();
	const today = `${year}-${month < 10 ? '0' + month : month}-${
		date < 10 ? '0' + date : date
	}`;

	const projAndTodosFiltered: ProjectAndTodosObj[] = [];
	//grab each todo not due today and put into temp project obj and push into ...Filtered
	projectArr.forEach((project) => {
		project.todos.forEach((todo) => {
			if (todo.todoDueDate !== today) {
				const temp = {
					project: {
						projectName: project.project.projectName,
						projectColour: project.project.projectColour,
					},
					todos: [
						{
							todoName: todo.todoName,
							todoDescription: todo.todoDescription,
							todoDueDate: todo.todoDueDate,
							todoPriority: todo.todoPriority,
						},
					],
				};
				projAndTodosFiltered.push(temp);
			}
		});
	});

	//render the todos
	projAndTodosFiltered.forEach((project) => {
		addTodosToContent(project);
	});
};
export { handleUpcomingTabClick };
