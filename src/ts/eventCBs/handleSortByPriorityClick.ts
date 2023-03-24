import { appendElemToParent, elemCreator } from '../element-creators';
import { addTodosToContent } from '../projectsAndTodos/addTodosToContent';
import { Div, ProjectAndTodosObj } from '../types';

const handleSortByPriorityClick = function (this: HTMLSelectElement, ev: MouseEvent) {
	//remove content section's previous contents
	const content: Div = document.querySelector('.content');
	const contentBottomPrev = document.querySelector('.content-bottom');
	contentBottomPrev?.remove();

	//render new content
	const contentBottom = elemCreator('div')(['content-bottom']);
	appendElemToParent(content)(contentBottom);

	const selectedSortValue = this.value;

	const projectArr: ProjectAndTodosObj[] = [];

	//grab all projects except specified
	Object.keys(localStorage).forEach((key) => {
		if (key !== 'projectNames' && key !== 'archived') {
			projectArr.push(JSON.parse(localStorage.getItem(key) ?? ''));
		}
	});

	console.log(projectArr);

	//assigns a key to each project based on its todo
	const projectMap: Map<number, ProjectAndTodosObj> = projectArr.reduce(
		(acc: Map<number, ProjectAndTodosObj>, curr: ProjectAndTodosObj) => {
			curr.todos.forEach((todo) => {
				if (todo.todoPriority === 'immediate') {
					acc.set(5, {
						project: {
							projectName: curr.project.projectName,
							projectColour: curr.project.projectColour,
						},
						todos: [todo],
					});
				} else if (todo.todoPriority === 'urgent') {
					acc.set(4, {
						project: {
							projectName: curr.project.projectName,
							projectColour: curr.project.projectColour,
						},
						todos: [todo],
					});
				} else if (todo.todoPriority === 'high') {
					acc.set(3, {
						project: {
							projectName: curr.project.projectName,
							projectColour: curr.project.projectColour,
						},
						todos: [todo],
					});
				} else if (todo.todoPriority === 'medium') {
					acc.set(2, {
						project: {
							projectName: curr.project.projectName,
							projectColour: curr.project.projectColour,
						},
						todos: [todo],
					});
				} else if (todo.todoPriority === 'low') {
					acc.set(1, {
						project: {
							projectName: curr.project.projectName,
							projectColour: curr.project.projectColour,
						},
						todos: [todo],
					});
				}
			});
			return acc;
		},
		new Map()
	);

	console.log(projectMap);

	//in order to use the sort method
	const projectMapArr: [number, ProjectAndTodosObj][] = Array.from(projectMap);

	if (selectedSortValue === 'lowToImmediate') {
		projectMapArr.sort((a, b) => a[0] - b[0]);
	}

	if (selectedSortValue === 'immediateToLow') {
		projectMapArr.sort((a, b) => b[0] - a[0]);
	}

	//render the todos
	projectMapArr.forEach((numProject) => {
		addTodosToContent(numProject[1]);
	});
};
export { handleSortByPriorityClick };
