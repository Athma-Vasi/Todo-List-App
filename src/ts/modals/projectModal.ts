import {
	addAttributeToElem,
	addTextToElem,
	appendElemToParent,
	createImage,
	elemCreator,
	addEvtListener,
	pipe,
} from '../element-creators';
import { handleInvalidProjName } from '../eventCBs/handleInvalidProjName';
import { handleProjectCloseIconClick } from '../eventCBs/handleProjectCloseIconClick';
import { handleProjectFormSubmit } from '../eventCBs/handleProjectFormSubmit';
import { handleProjNameValidation } from '../eventCBs/handleProjNameValidation';
import { Div } from '../types';

const projectModal = function () {
	const sidebar: Div = document.querySelector('.sidebar');

	//addProject modal
	const addProjectContainer = elemCreator('div')(['addProject-container']);
	appendElemToParent(sidebar)(addProjectContainer);

	const addProjectHeadingContainer = elemCreator('div')(['addProjectHeading-container']);
	appendElemToParent(addProjectContainer)(addProjectHeadingContainer);

	pipe(
		addTextToElem('Add project'),
		appendElemToParent(addProjectHeadingContainer)
	)(elemCreator('h3')(['heading-text', 'text-addProject']));

	const addProjectForm = elemCreator('form')(['form-addProject']);
	pipe(
		addAttributeToElem([
			['action', '#'],
			['method', 'post'],
			['id', 'form-addProject'],
			['name', 'form-addProject'],
		]),
		addEvtListener('submit')(handleProjectFormSubmit),
		appendElemToParent(addProjectContainer)
	)(addProjectForm);

	const addProjectNameContainer = elemCreator('div')(['addProject-name-container']);
	appendElemToParent(addProjectForm)(addProjectNameContainer);

	pipe(
		addAttributeToElem([['for', 'addProject-name']]),
		addTextToElem('Name'),
		appendElemToParent(addProjectNameContainer)
	)(elemCreator('label')(['label-name']));

	//input name
	pipe(
		addEvtListener('input')(handleProjNameValidation),
		addEvtListener('invalid')(handleInvalidProjName),
		addAttributeToElem([
			['id', 'addProject-name'],
			['type', 'text'],
			['minlength', '2'],
			['maxlength', '17'],
			['pattern', '[a-zA-Z]+'],
			['placeholder', 'Enter name of project'],
			['name', 'addProject-name'],
			['required', ''],
		]),
		appendElemToParent(addProjectNameContainer)
	)(elemCreator('input')(['addProject-name']));

	const addProjectColourContainer = elemCreator('div')(['addProject-colour-container']);
	appendElemToParent(addProjectForm)(addProjectColourContainer);

	pipe(
		addAttributeToElem([['for', 'addProject-colour']]),
		addTextToElem('Colour'),
		appendElemToParent(addProjectColourContainer)
	)(elemCreator('label')(['label-colour']));

	//input colour
	pipe(
		addAttributeToElem([
			['type', 'color'],
			['id', 'addProject-colour'],
			['name', 'addProject-colour'],
			['value', '#1e1e1e'],
		]),
		appendElemToParent(addProjectColourContainer)
	)(elemCreator('input')(['addProject-colour']));

	const addProjectIconsContainer = elemCreator('div')(['addProjectIcons-container']);
	appendElemToParent(addProjectForm)(addProjectIconsContainer);

	const bttnCancelProject = elemCreator('button')(['bttn', 'bttn-cancelProject']);
	pipe(
		addTextToElem('Cancel'),
		addEvtListener('click')(handleProjectCloseIconClick),
		addAttributeToElem([
			['type', 'button'],
			['name', 'bttn-cancel'],
		]),
		appendElemToParent(addProjectIconsContainer)
	)(bttnCancelProject);

	const bttnAddProject = elemCreator('button')(['bttn', 'bttn-addProject']);
	pipe(
		addTextToElem('Add'),
		addAttributeToElem([
			['type', 'submit'],
			['name', 'bttn-addProject'],
			['form', 'form-addProject'],
		]),
		appendElemToParent(addProjectIconsContainer)
	)(bttnAddProject);
};

export { projectModal };
