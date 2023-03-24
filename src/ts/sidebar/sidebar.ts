import {
	addAttributeToElem,
	addTextToElem,
	appendElemToParent,
	createImage,
	elemCreator,
	addEvtListener,
	pipe,
	addStyleToElem,
} from '../element-creators';
import { handleAddNewProjectIconClick } from '../eventCBs/handleAddNewProjectIconClick';
import { handleAddNewTodoIconClick } from '../eventCBs/handleAddNewTodoIconClick';
import { Div } from '../types';
import { handleArchivedTabClick } from '../eventCBs/handleArchivedTabClick';
import { handleUpcomingTabClick } from '../eventCBs/handleUpcomingTabClick';
import { handleTodayTabClick } from '../eventCBs/handleTodayTabClick';
import { handleProjectsTabClick } from '../eventCBs/handleProjectsTabClick';
import { handleCreatedTabsClick } from '../eventCBs/handleCreatedTabsClick';

const sidebar = function () {
	const root: Div = document.querySelector('#root');

	const sidebar = elemCreator('div')(['sidebar']);
	appendElemToParent(root)(sidebar);

	const todayContainer = elemCreator('div')(['sidebar-tab', 'container-today']);
	addEvtListener('click')(handleTodayTabClick)(todayContainer);
	appendElemToParent(sidebar)(todayContainer);

	pipe(
		addTextToElem('Today'),
		appendElemToParent(todayContainer)
	)(elemCreator('h4')(['tab-text', 'today-tab']));

	const upcomingContainer = elemCreator('div')(['sidebar-tab', 'container-upcoming']);
	addEvtListener('click')(handleUpcomingTabClick)(upcomingContainer);
	appendElemToParent(sidebar)(upcomingContainer);

	pipe(
		addTextToElem('Upcoming'),
		appendElemToParent(upcomingContainer)
	)(elemCreator('h4')(['tab-text', 'tab-upcoming']));

	const archivedContainer = elemCreator('div')(['sidebar-tab', 'container-archived']);
	addEvtListener('click')(handleArchivedTabClick)(archivedContainer);
	appendElemToParent(sidebar)(archivedContainer);

	pipe(
		addTextToElem('Archived'),
		appendElemToParent(archivedContainer)
	)(elemCreator('h4')(['tab-text', 'tab-archived']));

	const projectsContainer = elemCreator('div')(['sidebar-heading', 'container-projects']);
	appendElemToParent(sidebar)(projectsContainer);

	const projectsHeading = elemCreator('div')(['projectHeading-wrapper']);
	appendElemToParent(projectsContainer)(projectsHeading);

	pipe(
		addEvtListener('click')(handleProjectsTabClick),
		addTextToElem('Projects'),
		appendElemToParent(projectsHeading)
	)(elemCreator('h3')(['heading-text', 'text-projects']));

	pipe(
		addTextToElem('+'),
		addEvtListener('click')(handleAddNewProjectIconClick),
		appendElemToParent(projectsHeading)
	)(elemCreator('button')(['bttn', 'bttn-projectModal']));

	const sampleProjectContainer = elemCreator('div')(['sidebar-project', 'project']);
	appendElemToParent(projectsContainer)(sampleProjectContainer);

	pipe(
		addStyleToElem([['color', '#48d1cc']]),
		addEvtListener('click')(handleCreatedTabsClick),
		addTextToElem('Sample Project'),
		appendElemToParent(sampleProjectContainer)
	)(elemCreator('h4')(['project-text', 'text-sampleProject']));

	pipe(
		addStyleToElem([['color', '#48d1cc']]),
		addTextToElem('+'),
		addAttributeToElem([
			['data-name', `Sample Project`],
			['data-colour', '#48d1cc'],
		]),
		addEvtListener('click')(handleAddNewTodoIconClick),
		appendElemToParent(sampleProjectContainer)
	)(elemCreator('button')(['bttn', 'bttn-todoModal']));
};

export { sidebar };
