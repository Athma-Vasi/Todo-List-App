/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ts/content/content.ts":
/*!***********************************!*\
  !*** ./src/ts/content/content.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.content = void 0;
const element_creators_1 = __webpack_require__(/*! ../element-creators */ "./src/ts/element-creators.ts");
const content = function () {
    const log = (i) => console.log('\n', i);
    const root = document.querySelector('#root');
    const top = (0, element_creators_1.elemCreator)('div')(['content-top']);
    (0, element_creators_1.appendElemToParent)(root)(top);
    const form = (0, element_creators_1.elemCreator)('form')(['form']);
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([
        ['action', '#'],
        ['method', 'post'],
        ['id', 'form-search'],
        ['name', 'search-todo'],
    ]), (0, element_creators_1.appendElemToParent)(top))(form);
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([['for', 'search']]), (0, element_creators_1.appendElemToParent)(form))((0, element_creators_1.elemCreator)('label')(['label-search']));
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([
        ['type', 'search'],
        ['placeholder', 'search for a todo in selected project'],
        ['id', 'search'],
        ['name', 'search-todo'],
    ]), (0, element_creators_1.appendElemToParent)(form))((0, element_creators_1.elemCreator)('input')(['search']));
    (0, element_creators_1.pipe)((0, element_creators_1.addEvtListener)('click')(handleThemeIconClick), (0, element_creators_1.appendElemToParent)(top))((0, element_creators_1.createImage)('../../src/assets/icons/moon.svg')(['icon', 'icon-moon'])('icon of moon representing dark mode')('Dark Mode'));
    function handleThemeIconClick(ev) {
        log(this);
        log(ev);
    }
};
exports.content = content;


/***/ }),

/***/ "./src/ts/element-creators.ts":
/*!************************************!*\
  !*** ./src/ts/element-creators.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pipe = exports.addEvtListener = exports.createImage = exports.addAttributeToElem = exports.addTextToElem = exports.appendElemToParent = exports.elemCreator = void 0;
const elemCreator = (elem_) => (class_) => {
    const element = document.createElement(elem_);
    return class_.reduce((elem, currClass) => {
        elem.classList.add(currClass);
        return elem;
    }, element);
};
exports.elemCreator = elemCreator;
const addAttributeToElem = (attrVals_) => (elem_) => {
    return attrVals_.reduce((acc, curr) => {
        if (curr.length > 2)
            return undefined;
        acc === null || acc === void 0 ? void 0 : acc.setAttribute(curr[0], curr[1]);
        return acc;
    }, elem_);
};
exports.addAttributeToElem = addAttributeToElem;
const addTextToElem = (text_) => (elem_) => {
    const textNode = document.createTextNode(text_);
    elem_ === null || elem_ === void 0 ? void 0 : elem_.appendChild(textNode);
    return elem_;
};
exports.addTextToElem = addTextToElem;
const appendElemToParent = (parent_) => (child_) => {
    if (child_)
        parent_ === null || parent_ === void 0 ? void 0 : parent_.appendChild(child_);
};
exports.appendElemToParent = appendElemToParent;
const createImage = (source_) => (class_) => (alt_) => (title_) => {
    const image = new Image();
    image.src = source_;
    image.alt = alt_;
    image.title = title_;
    return class_.reduce((elem, currClass) => {
        elem.classList.add(currClass);
        return elem;
    }, image);
};
exports.createImage = createImage;
const addEvtListener = (evt_) => (handleEvt_) => (elem_) => {
    elem_ === null || elem_ === void 0 ? void 0 : elem_.addEventListener(evt_, handleEvt_);
    return elem_;
};
exports.addEvtListener = addEvtListener;
// const pipe =
// 	(...funcs: Array<(_: unknown | null) => unknown>) =>
// 	(v: unknown | null) => {
// 		return funcs.reduce((result, func) => {
// 			if (result) return func(result)
// 		}, v)
// 	}
const pipe = (...funcs) => (value) => funcs.reduce((res, func) => func(res), value);
exports.pipe = pipe;


/***/ }),

/***/ "./src/ts/eventCBs/handleAddNewProjectIconClick.ts":
/*!*********************************************************!*\
  !*** ./src/ts/eventCBs/handleAddNewProjectIconClick.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleAddNewProjectIconClick = void 0;
const handleAddNewProjectIconClick = function (ev) {
    const addProjectModal = document.querySelector('.addProject-container');
    if (addProjectModal)
        addProjectModal.style.visibility =
            (addProjectModal === null || addProjectModal === void 0 ? void 0 : addProjectModal.style.visibility) === 'visible' ? 'hidden' : 'visible';
};
exports.handleAddNewProjectIconClick = handleAddNewProjectIconClick;


/***/ }),

/***/ "./src/ts/eventCBs/handleAddNewTodoIconClick.ts":
/*!******************************************************!*\
  !*** ./src/ts/eventCBs/handleAddNewTodoIconClick.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleAddNewTodoIconClick = void 0;
const handleAddNewTodoIconClick = function () { };
exports.handleAddNewTodoIconClick = handleAddNewTodoIconClick;


/***/ }),

/***/ "./src/ts/eventCBs/handleCloseIconClick.ts":
/*!*************************************************!*\
  !*** ./src/ts/eventCBs/handleCloseIconClick.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleCloseIconClick = void 0;
const handleCloseIconClick = function (ev) {
    const addProjectModal = document.querySelector('.addProject-container');
    if (addProjectModal)
        addProjectModal.style.visibility =
            (addProjectModal === null || addProjectModal === void 0 ? void 0 : addProjectModal.style.visibility) === 'visible' ? 'hidden' : 'visible';
};
exports.handleCloseIconClick = handleCloseIconClick;


/***/ }),

/***/ "./src/ts/eventCBs/handleFormSubmit.ts":
/*!*********************************************!*\
  !*** ./src/ts/eventCBs/handleFormSubmit.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleFormSubmit = void 0;
const addProjectToSidebar_1 = __webpack_require__(/*! ../projects/addProjectToSidebar */ "./src/ts/projects/addProjectToSidebar.ts");
const storeProjects_1 = __webpack_require__(/*! ../projects/storeProjects */ "./src/ts/projects/storeProjects.ts");
const handleFormSubmit = function (ev) {
    var _a, _b, _c, _d;
    ev.preventDefault();
    const formData = new FormData(this);
    const formName = (_b = (_a = formData.get('addProject-name')) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '';
    const formColour = (_d = (_c = formData.get('addProject-colour')) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : '';
    (0, storeProjects_1.storeProjects)(formName, formColour);
    (0, addProjectToSidebar_1.addProjectToSidebar)(formName);
};
exports.handleFormSubmit = handleFormSubmit;


/***/ }),

/***/ "./src/ts/header/header.ts":
/*!*********************************!*\
  !*** ./src/ts/header/header.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.header = void 0;
const element_creators_1 = __webpack_require__(/*! ../element-creators */ "./src/ts/element-creators.ts");
const header = function () {
    const log = (i) => console.log('\n', i);
    const root = document.querySelector('#root');
    const header = (0, element_creators_1.elemCreator)('div')(['header']);
    (0, element_creators_1.appendElemToParent)(root)(header);
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('Todo List App'), (0, element_creators_1.appendElemToParent)(header))((0, element_creators_1.elemCreator)('h1')(['title', 'header-title']));
};
exports.header = header;


/***/ }),

/***/ "./src/ts/projects/addProjectToSidebar.ts":
/*!************************************************!*\
  !*** ./src/ts/projects/addProjectToSidebar.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addProjectToSidebar = void 0;
const element_creators_1 = __webpack_require__(/*! ../element-creators */ "./src/ts/element-creators.ts");
const handleAddNewTodoIconClick_1 = __webpack_require__(/*! ../eventCBs/handleAddNewTodoIconClick */ "./src/ts/eventCBs/handleAddNewTodoIconClick.ts");
const addProjectToSidebar = function (formName_) {
    var _a;
    const log = (i) => console.log('\n', i);
    const projectsContainer = document.querySelector('.container-projects');
    const projectContainer = (0, element_creators_1.elemCreator)('div')(['sidebar-project', 'project']);
    (0, element_creators_1.appendElemToParent)(projectsContainer)(projectContainer);
    const projectNameColour = JSON.parse((_a = localStorage.getItem(formName_)) !== null && _a !== void 0 ? _a : '');
    log(projectNameColour);
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([['data-name', `${projectNameColour[0]}`]]), (0, element_creators_1.addTextToElem)(`${projectNameColour[0]}`), (0, element_creators_1.appendElemToParent)(projectContainer))((0, element_creators_1.elemCreator)('h4')(['project-text', `text-${projectNameColour[0]}`]));
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([['data-name', `${projectNameColour[0]}`]]), (0, element_creators_1.addEvtListener)('click')(handleAddNewTodoIconClick_1.handleAddNewTodoIconClick), (0, element_creators_1.appendElemToParent)(projectContainer))((0, element_creators_1.createImage)('../../../src/assets/icons/plus.svg')(['icon', 'icon-plus'])('icon of plus symbol')('Add New Todo'));
};
exports.addProjectToSidebar = addProjectToSidebar;


/***/ }),

/***/ "./src/ts/projects/storeProjects.ts":
/*!******************************************!*\
  !*** ./src/ts/projects/storeProjects.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeProjects = void 0;
const storeProjects = function (formName_, formColour_) {
    localStorage.setItem(formName_, JSON.stringify([formName_, formColour_]));
};
exports.storeProjects = storeProjects;


/***/ }),

/***/ "./src/ts/sidebar/sidebar.ts":
/*!***********************************!*\
  !*** ./src/ts/sidebar/sidebar.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sidebar = void 0;
const element_creators_1 = __webpack_require__(/*! ../element-creators */ "./src/ts/element-creators.ts");
const handleAddNewProjectIconClick_1 = __webpack_require__(/*! ../eventCBs/handleAddNewProjectIconClick */ "./src/ts/eventCBs/handleAddNewProjectIconClick.ts");
const handleAddNewTodoIconClick_1 = __webpack_require__(/*! ../eventCBs/handleAddNewTodoIconClick */ "./src/ts/eventCBs/handleAddNewTodoIconClick.ts");
const handleCloseIconClick_1 = __webpack_require__(/*! ../eventCBs/handleCloseIconClick */ "./src/ts/eventCBs/handleCloseIconClick.ts");
const handleFormSubmit_1 = __webpack_require__(/*! ../eventCBs/handleFormSubmit */ "./src/ts/eventCBs/handleFormSubmit.ts");
const sidebar = function () {
    const log = (i) => console.log('\n', i);
    const root = document.querySelector('#root');
    const sidebar = (0, element_creators_1.elemCreator)('div')(['sidebar']);
    (0, element_creators_1.appendElemToParent)(root)(sidebar);
    const todayContainer = (0, element_creators_1.elemCreator)('div')(['sidebar-tab', 'container-today']);
    (0, element_creators_1.appendElemToParent)(sidebar)(todayContainer);
    (0, element_creators_1.pipe)((0, element_creators_1.appendElemToParent)(todayContainer))((0, element_creators_1.createImage)('../../src/assets/icons/aperture.svg')(['icon', 'icon-today'])(`icon representing today's events`)('Today'));
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('Today'), (0, element_creators_1.appendElemToParent)(todayContainer))((0, element_creators_1.elemCreator)('h4')(['tab-text', 'today-tab']));
    const upcomingContainer = (0, element_creators_1.elemCreator)('div')(['sidebar-tab', 'container-upcoming']);
    (0, element_creators_1.appendElemToParent)(sidebar)(upcomingContainer);
    (0, element_creators_1.pipe)((0, element_creators_1.appendElemToParent)(upcomingContainer))((0, element_creators_1.createImage)('../../src/assets/icons/calendar.svg')(['icon', 'upcoming-icon'])('icon representing upcoming events')('Upcoming'));
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('Upcoming'), (0, element_creators_1.appendElemToParent)(upcomingContainer))((0, element_creators_1.elemCreator)('h4')(['tab-text', 'tab-upcoming']));
    const archivedContainer = (0, element_creators_1.elemCreator)('div')(['sidebar-tab', 'container-archived']);
    (0, element_creators_1.appendElemToParent)(sidebar)(archivedContainer);
    (0, element_creators_1.pipe)((0, element_creators_1.appendElemToParent)(archivedContainer))((0, element_creators_1.createImage)('../../src/assets/icons/archive.svg')(['icon', 'archived-icon'])('icon representing archived events')('Archived'));
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('Archived'), (0, element_creators_1.appendElemToParent)(archivedContainer))((0, element_creators_1.elemCreator)('h4')(['tab-text', 'tab-archived']));
    const projectsContainer = (0, element_creators_1.elemCreator)('div')(['sidebar-heading', 'container-projects']);
    (0, element_creators_1.appendElemToParent)(sidebar)(projectsContainer);
    const projectsHeading = (0, element_creators_1.elemCreator)('div')(['projectsHeading-container']);
    (0, element_creators_1.appendElemToParent)(projectsContainer)(projectsHeading);
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('Projects'), (0, element_creators_1.appendElemToParent)(projectsHeading))((0, element_creators_1.elemCreator)('h3')(['heading-text', 'text-projects']));
    (0, element_creators_1.pipe)((0, element_creators_1.addEvtListener)('click')(handleAddNewProjectIconClick_1.handleAddNewProjectIconClick), (0, element_creators_1.appendElemToParent)(projectsHeading))((0, element_creators_1.createImage)('../../../src/assets/icons/plus.svg')(['icon', 'icon-plus'])('icon of plus symbol')('Add New Project'));
    const sampleProjectContainer = (0, element_creators_1.elemCreator)('div')(['sidebar-project', 'project']);
    (0, element_creators_1.appendElemToParent)(projectsContainer)(sampleProjectContainer);
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('Sample Project'), (0, element_creators_1.appendElemToParent)(sampleProjectContainer))((0, element_creators_1.elemCreator)('h4')(['project-text', 'text-sampleProject']));
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([['data-name', `sample-project`]]), (0, element_creators_1.addEvtListener)('click')(handleAddNewTodoIconClick_1.handleAddNewTodoIconClick), (0, element_creators_1.appendElemToParent)(sampleProjectContainer))((0, element_creators_1.createImage)('../../../src/assets/icons/plus.svg')(['icon', 'icon-plus'])('icon of plus symbol')('Add New Todo'));
    //addProject modal
    const addProjectContainer = (0, element_creators_1.elemCreator)('div')(['addProject-container']);
    (0, element_creators_1.appendElemToParent)(sidebar)(addProjectContainer);
    const addProjectHeadingContainer = (0, element_creators_1.elemCreator)('div')(['addProjectHeading-container']);
    (0, element_creators_1.appendElemToParent)(addProjectContainer)(addProjectHeadingContainer);
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('Add project'), (0, element_creators_1.appendElemToParent)(addProjectContainer))((0, element_creators_1.elemCreator)('h3')(['heading-text', 'text-addProject']));
    const addProjectForm = (0, element_creators_1.elemCreator)('form')(['form-addProject']);
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([
        ['action', '#'],
        ['method', 'post'],
        ['id', 'form-addProject'],
        ['name', 'form-addProject'],
    ]), (0, element_creators_1.addEvtListener)('submit')(handleFormSubmit_1.handleFormSubmit), (0, element_creators_1.appendElemToParent)(addProjectContainer))(addProjectForm);
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([['for', 'addProject-name']]), (0, element_creators_1.addTextToElem)('Name'), (0, element_creators_1.appendElemToParent)(addProjectForm))((0, element_creators_1.elemCreator)('label')(['label-name']));
    //input name
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([
        ['id', 'addProject-name'],
        ['type', 'text'],
        ['placeholder', 'Enter name of project'],
        ['name', 'addProject-name'],
        ['required', ''],
    ]), (0, element_creators_1.appendElemToParent)(addProjectForm))((0, element_creators_1.elemCreator)('input')(['addProject-name']));
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([['for', 'addProject-colour']]), (0, element_creators_1.addTextToElem)('Colour'), (0, element_creators_1.appendElemToParent)(addProjectForm))((0, element_creators_1.elemCreator)('label')(['label-colour']));
    //input colour
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([
        ['type', 'color'],
        ['id', 'addProject-colour'],
        ['name', 'addProject-colour'],
    ]), (0, element_creators_1.appendElemToParent)(addProjectForm))((0, element_creators_1.elemCreator)('input')(['addProject-colour']));
    const addProjectIconsContainer = (0, element_creators_1.elemCreator)('div')(['addProjectIcons-container']);
    (0, element_creators_1.appendElemToParent)(addProjectForm)(addProjectIconsContainer);
    // const bttnCancel = elemCreator('button')(['bttn', 'bttn-cancel'])
    // pipe(
    // 	addAttributeToElem([
    // 		['type', 'button'],
    // 		['name', 'bttn-cancel'],
    // 	]),
    // 	appendElemToParent(addProjectIconsContainer)
    // )(bttnCancel)
    (0, element_creators_1.pipe)((0, element_creators_1.addEvtListener)('click')(handleCloseIconClick_1.handleCloseIconClick), (0, element_creators_1.appendElemToParent)(addProjectIconsContainer))((0, element_creators_1.createImage)('../../src/assets/icons/x.svg')(['icon', 'icon-x'])(`icon of symbol 'x' representing cancel or close`)('Cancel'));
    const bttnAdd = (0, element_creators_1.elemCreator)('button')(['bttn', 'bttn-add']);
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([
        ['type', 'submit'],
        ['name', 'bttn-add'],
        ['form', 'form-addProject'],
    ]), (0, element_creators_1.appendElemToParent)(addProjectIconsContainer))(bttnAdd);
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([[]]), (0, element_creators_1.appendElemToParent)(bttnAdd))((0, element_creators_1.createImage)('../../src/assets/icons/check.svg')(['icon', 'icon-add'])(`icon of symbol 'check' representing add`)('Add'));
    //
    //
    //
};
exports.sidebar = sidebar;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./index.css */ "./src/index.css");
const content_1 = __webpack_require__(/*! ./ts/content/content */ "./src/ts/content/content.ts");
const header_1 = __webpack_require__(/*! ./ts/header/header */ "./src/ts/header/header.ts");
const sidebar_1 = __webpack_require__(/*! ./ts/sidebar/sidebar */ "./src/ts/sidebar/sidebar.ts");
const mainApp = function () {
    const log = (i) => console.log('\n', i);
    const root = document.querySelector('#root');
    (0, header_1.header)();
    (0, sidebar_1.sidebar)();
    (0, content_1.content)();
};
document.addEventListener('DOMContentLoaded', mainApp);
// pipe(
// 	addTextToElem('Hi Athma!!'),
// 	addAttributeToElem('data-key')('something'),
// 	appendElemToParent(mainContent)
// )(elemCreator('p')(['para']))

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZGV4LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2NvbnRlbnQvY29udGVudC50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2VsZW1lbnQtY3JlYXRvcnMudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVBZGROZXdQcm9qZWN0SWNvbkNsaWNrLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZXZlbnRDQnMvaGFuZGxlQWRkTmV3VG9kb0ljb25DbGljay50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2V2ZW50Q0JzL2hhbmRsZUNsb3NlSWNvbkNsaWNrLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZXZlbnRDQnMvaGFuZGxlRm9ybVN1Ym1pdC50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2hlYWRlci9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9wcm9qZWN0cy9hZGRQcm9qZWN0VG9TaWRlYmFyLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvcHJvamVjdHMvc3RvcmVQcm9qZWN0cy50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL3NpZGViYXIvc2lkZWJhci50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jb250ZW50ID0gdm9pZCAwO1xuY29uc3QgZWxlbWVudF9jcmVhdG9yc18xID0gcmVxdWlyZShcIi4uL2VsZW1lbnQtY3JlYXRvcnNcIik7XG5jb25zdCBjb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGxvZyA9IChpKSA9PiBjb25zb2xlLmxvZygnXFxuJywgaSk7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290Jyk7XG4gICAgY29uc3QgdG9wID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnY29udGVudC10b3AnXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHJvb3QpKHRvcCk7XG4gICAgY29uc3QgZm9ybSA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdmb3JtJykoWydmb3JtJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWydhY3Rpb24nLCAnIyddLFxuICAgICAgICBbJ21ldGhvZCcsICdwb3N0J10sXG4gICAgICAgIFsnaWQnLCAnZm9ybS1zZWFyY2gnXSxcbiAgICAgICAgWyduYW1lJywgJ3NlYXJjaC10b2RvJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b3ApKShmb3JtKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydmb3InLCAnc2VhcmNoJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGZvcm0pKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnbGFiZWwnKShbJ2xhYmVsLXNlYXJjaCddKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ3R5cGUnLCAnc2VhcmNoJ10sXG4gICAgICAgIFsncGxhY2Vob2xkZXInLCAnc2VhcmNoIGZvciBhIHRvZG8gaW4gc2VsZWN0ZWQgcHJvamVjdCddLFxuICAgICAgICBbJ2lkJywgJ3NlYXJjaCddLFxuICAgICAgICBbJ25hbWUnLCAnc2VhcmNoLXRvZG8nXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGZvcm0pKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaW5wdXQnKShbJ3NlYXJjaCddKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVUaGVtZUljb25DbGljayksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b3ApKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmNyZWF0ZUltYWdlKSgnLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy9tb29uLnN2ZycpKFsnaWNvbicsICdpY29uLW1vb24nXSkoJ2ljb24gb2YgbW9vbiByZXByZXNlbnRpbmcgZGFyayBtb2RlJykoJ0RhcmsgTW9kZScpKTtcbiAgICBmdW5jdGlvbiBoYW5kbGVUaGVtZUljb25DbGljayhldikge1xuICAgICAgICBsb2codGhpcyk7XG4gICAgICAgIGxvZyhldik7XG4gICAgfVxufTtcbmV4cG9ydHMuY29udGVudCA9IGNvbnRlbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucGlwZSA9IGV4cG9ydHMuYWRkRXZ0TGlzdGVuZXIgPSBleHBvcnRzLmNyZWF0ZUltYWdlID0gZXhwb3J0cy5hZGRBdHRyaWJ1dGVUb0VsZW0gPSBleHBvcnRzLmFkZFRleHRUb0VsZW0gPSBleHBvcnRzLmFwcGVuZEVsZW1Ub1BhcmVudCA9IGV4cG9ydHMuZWxlbUNyZWF0b3IgPSB2b2lkIDA7XG5jb25zdCBlbGVtQ3JlYXRvciA9IChlbGVtXykgPT4gKGNsYXNzXykgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1fKTtcbiAgICByZXR1cm4gY2xhc3NfLnJlZHVjZSgoZWxlbSwgY3VyckNsYXNzKSA9PiB7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjdXJyQ2xhc3MpO1xuICAgICAgICByZXR1cm4gZWxlbTtcbiAgICB9LCBlbGVtZW50KTtcbn07XG5leHBvcnRzLmVsZW1DcmVhdG9yID0gZWxlbUNyZWF0b3I7XG5jb25zdCBhZGRBdHRyaWJ1dGVUb0VsZW0gPSAoYXR0clZhbHNfKSA9PiAoZWxlbV8pID0+IHtcbiAgICByZXR1cm4gYXR0clZhbHNfLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG4gICAgICAgIGlmIChjdXJyLmxlbmd0aCA+IDIpXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBhY2MgPT09IG51bGwgfHwgYWNjID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhY2Muc2V0QXR0cmlidXRlKGN1cnJbMF0sIGN1cnJbMV0pO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIGVsZW1fKTtcbn07XG5leHBvcnRzLmFkZEF0dHJpYnV0ZVRvRWxlbSA9IGFkZEF0dHJpYnV0ZVRvRWxlbTtcbmNvbnN0IGFkZFRleHRUb0VsZW0gPSAodGV4dF8pID0+IChlbGVtXykgPT4ge1xuICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dF8pO1xuICAgIGVsZW1fID09PSBudWxsIHx8IGVsZW1fID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbGVtXy5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG4gICAgcmV0dXJuIGVsZW1fO1xufTtcbmV4cG9ydHMuYWRkVGV4dFRvRWxlbSA9IGFkZFRleHRUb0VsZW07XG5jb25zdCBhcHBlbmRFbGVtVG9QYXJlbnQgPSAocGFyZW50XykgPT4gKGNoaWxkXykgPT4ge1xuICAgIGlmIChjaGlsZF8pXG4gICAgICAgIHBhcmVudF8gPT09IG51bGwgfHwgcGFyZW50XyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyZW50Xy5hcHBlbmRDaGlsZChjaGlsZF8pO1xufTtcbmV4cG9ydHMuYXBwZW5kRWxlbVRvUGFyZW50ID0gYXBwZW5kRWxlbVRvUGFyZW50O1xuY29uc3QgY3JlYXRlSW1hZ2UgPSAoc291cmNlXykgPT4gKGNsYXNzXykgPT4gKGFsdF8pID0+ICh0aXRsZV8pID0+IHtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9IHNvdXJjZV87XG4gICAgaW1hZ2UuYWx0ID0gYWx0XztcbiAgICBpbWFnZS50aXRsZSA9IHRpdGxlXztcbiAgICByZXR1cm4gY2xhc3NfLnJlZHVjZSgoZWxlbSwgY3VyckNsYXNzKSA9PiB7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjdXJyQ2xhc3MpO1xuICAgICAgICByZXR1cm4gZWxlbTtcbiAgICB9LCBpbWFnZSk7XG59O1xuZXhwb3J0cy5jcmVhdGVJbWFnZSA9IGNyZWF0ZUltYWdlO1xuY29uc3QgYWRkRXZ0TGlzdGVuZXIgPSAoZXZ0XykgPT4gKGhhbmRsZUV2dF8pID0+IChlbGVtXykgPT4ge1xuICAgIGVsZW1fID09PSBudWxsIHx8IGVsZW1fID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbGVtXy5hZGRFdmVudExpc3RlbmVyKGV2dF8sIGhhbmRsZUV2dF8pO1xuICAgIHJldHVybiBlbGVtXztcbn07XG5leHBvcnRzLmFkZEV2dExpc3RlbmVyID0gYWRkRXZ0TGlzdGVuZXI7XG4vLyBjb25zdCBwaXBlID1cbi8vIFx0KC4uLmZ1bmNzOiBBcnJheTwoXzogdW5rbm93biB8IG51bGwpID0+IHVua25vd24+KSA9PlxuLy8gXHQodjogdW5rbm93biB8IG51bGwpID0+IHtcbi8vIFx0XHRyZXR1cm4gZnVuY3MucmVkdWNlKChyZXN1bHQsIGZ1bmMpID0+IHtcbi8vIFx0XHRcdGlmIChyZXN1bHQpIHJldHVybiBmdW5jKHJlc3VsdClcbi8vIFx0XHR9LCB2KVxuLy8gXHR9XG5jb25zdCBwaXBlID0gKC4uLmZ1bmNzKSA9PiAodmFsdWUpID0+IGZ1bmNzLnJlZHVjZSgocmVzLCBmdW5jKSA9PiBmdW5jKHJlcyksIHZhbHVlKTtcbmV4cG9ydHMucGlwZSA9IHBpcGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlQWRkTmV3UHJvamVjdEljb25DbGljayA9IHZvaWQgMDtcbmNvbnN0IGhhbmRsZUFkZE5ld1Byb2plY3RJY29uQ2xpY2sgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICBjb25zdCBhZGRQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdC1jb250YWluZXInKTtcbiAgICBpZiAoYWRkUHJvamVjdE1vZGFsKVxuICAgICAgICBhZGRQcm9qZWN0TW9kYWwuc3R5bGUudmlzaWJpbGl0eSA9XG4gICAgICAgICAgICAoYWRkUHJvamVjdE1vZGFsID09PSBudWxsIHx8IGFkZFByb2plY3RNb2RhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWRkUHJvamVjdE1vZGFsLnN0eWxlLnZpc2liaWxpdHkpID09PSAndmlzaWJsZScgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJztcbn07XG5leHBvcnRzLmhhbmRsZUFkZE5ld1Byb2plY3RJY29uQ2xpY2sgPSBoYW5kbGVBZGROZXdQcm9qZWN0SWNvbkNsaWNrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZUFkZE5ld1RvZG9JY29uQ2xpY2sgPSB2b2lkIDA7XG5jb25zdCBoYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrID0gZnVuY3Rpb24gKCkgeyB9O1xuZXhwb3J0cy5oYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrID0gaGFuZGxlQWRkTmV3VG9kb0ljb25DbGljaztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVDbG9zZUljb25DbGljayA9IHZvaWQgMDtcbmNvbnN0IGhhbmRsZUNsb3NlSWNvbkNsaWNrID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgY29uc3QgYWRkUHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3QtY29udGFpbmVyJyk7XG4gICAgaWYgKGFkZFByb2plY3RNb2RhbClcbiAgICAgICAgYWRkUHJvamVjdE1vZGFsLnN0eWxlLnZpc2liaWxpdHkgPVxuICAgICAgICAgICAgKGFkZFByb2plY3RNb2RhbCA9PT0gbnVsbCB8fCBhZGRQcm9qZWN0TW9kYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFkZFByb2plY3RNb2RhbC5zdHlsZS52aXNpYmlsaXR5KSA9PT0gJ3Zpc2libGUnID8gJ2hpZGRlbicgOiAndmlzaWJsZSc7XG59O1xuZXhwb3J0cy5oYW5kbGVDbG9zZUljb25DbGljayA9IGhhbmRsZUNsb3NlSWNvbkNsaWNrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZUZvcm1TdWJtaXQgPSB2b2lkIDA7XG5jb25zdCBhZGRQcm9qZWN0VG9TaWRlYmFyXzEgPSByZXF1aXJlKFwiLi4vcHJvamVjdHMvYWRkUHJvamVjdFRvU2lkZWJhclwiKTtcbmNvbnN0IHN0b3JlUHJvamVjdHNfMSA9IHJlcXVpcmUoXCIuLi9wcm9qZWN0cy9zdG9yZVByb2plY3RzXCIpO1xuY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IGZ1bmN0aW9uIChldikge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xuICAgIGNvbnN0IGZvcm1OYW1lID0gKF9iID0gKF9hID0gZm9ybURhdGEuZ2V0KCdhZGRQcm9qZWN0LW5hbWUnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICcnO1xuICAgIGNvbnN0IGZvcm1Db2xvdXIgPSAoX2QgPSAoX2MgPSBmb3JtRGF0YS5nZXQoJ2FkZFByb2plY3QtY29sb3VyJykpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy50b1N0cmluZygpKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiAnJztcbiAgICAoMCwgc3RvcmVQcm9qZWN0c18xLnN0b3JlUHJvamVjdHMpKGZvcm1OYW1lLCBmb3JtQ29sb3VyKTtcbiAgICAoMCwgYWRkUHJvamVjdFRvU2lkZWJhcl8xLmFkZFByb2plY3RUb1NpZGViYXIpKGZvcm1OYW1lKTtcbn07XG5leHBvcnRzLmhhbmRsZUZvcm1TdWJtaXQgPSBoYW5kbGVGb3JtU3VibWl0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhlYWRlciA9IHZvaWQgMDtcbmNvbnN0IGVsZW1lbnRfY3JlYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50LWNyZWF0b3JzXCIpO1xuY29uc3QgaGVhZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGxvZyA9IChpKSA9PiBjb25zb2xlLmxvZygnXFxuJywgaSk7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnaGVhZGVyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShyb290KShoZWFkZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnVG9kbyBMaXN0IEFwcCcpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoaGVhZGVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2gxJykoWyd0aXRsZScsICdoZWFkZXItdGl0bGUnXSkpO1xufTtcbmV4cG9ydHMuaGVhZGVyID0gaGVhZGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmFkZFByb2plY3RUb1NpZGViYXIgPSB2b2lkIDA7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IGhhbmRsZUFkZE5ld1RvZG9JY29uQ2xpY2tfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrXCIpO1xuY29uc3QgYWRkUHJvamVjdFRvU2lkZWJhciA9IGZ1bmN0aW9uIChmb3JtTmFtZV8pIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgbG9nID0gKGkpID0+IGNvbnNvbGUubG9nKCdcXG4nLCBpKTtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItcHJvamVjdHMnKTtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnc2lkZWJhci1wcm9qZWN0JywgJ3Byb2plY3QnXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHByb2plY3RzQ29udGFpbmVyKShwcm9qZWN0Q29udGFpbmVyKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZUNvbG91ciA9IEpTT04ucGFyc2UoKF9hID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oZm9ybU5hbWVfKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycpO1xuICAgIGxvZyhwcm9qZWN0TmFtZUNvbG91cik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1snZGF0YS1uYW1lJywgYCR7cHJvamVjdE5hbWVDb2xvdXJbMF19YF1dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKShgJHtwcm9qZWN0TmFtZUNvbG91clswXX1gKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHByb2plY3RDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaDQnKShbJ3Byb2plY3QtdGV4dCcsIGB0ZXh0LSR7cHJvamVjdE5hbWVDb2xvdXJbMF19YF0pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydkYXRhLW5hbWUnLCBgJHtwcm9qZWN0TmFtZUNvbG91clswXX1gXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrXzEuaGFuZGxlQWRkTmV3VG9kb0ljb25DbGljayksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShwcm9qZWN0Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5jcmVhdGVJbWFnZSkoJy4uLy4uLy4uL3NyYy9hc3NldHMvaWNvbnMvcGx1cy5zdmcnKShbJ2ljb24nLCAnaWNvbi1wbHVzJ10pKCdpY29uIG9mIHBsdXMgc3ltYm9sJykoJ0FkZCBOZXcgVG9kbycpKTtcbn07XG5leHBvcnRzLmFkZFByb2plY3RUb1NpZGViYXIgPSBhZGRQcm9qZWN0VG9TaWRlYmFyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0b3JlUHJvamVjdHMgPSB2b2lkIDA7XG5jb25zdCBzdG9yZVByb2plY3RzID0gZnVuY3Rpb24gKGZvcm1OYW1lXywgZm9ybUNvbG91cl8pIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShmb3JtTmFtZV8sIEpTT04uc3RyaW5naWZ5KFtmb3JtTmFtZV8sIGZvcm1Db2xvdXJfXSkpO1xufTtcbmV4cG9ydHMuc3RvcmVQcm9qZWN0cyA9IHN0b3JlUHJvamVjdHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2lkZWJhciA9IHZvaWQgMDtcbmNvbnN0IGVsZW1lbnRfY3JlYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50LWNyZWF0b3JzXCIpO1xuY29uc3QgaGFuZGxlQWRkTmV3UHJvamVjdEljb25DbGlja18xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZUFkZE5ld1Byb2plY3RJY29uQ2xpY2tcIik7XG5jb25zdCBoYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrXzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlQWRkTmV3VG9kb0ljb25DbGlja1wiKTtcbmNvbnN0IGhhbmRsZUNsb3NlSWNvbkNsaWNrXzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlQ2xvc2VJY29uQ2xpY2tcIik7XG5jb25zdCBoYW5kbGVGb3JtU3VibWl0XzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlRm9ybVN1Ym1pdFwiKTtcbmNvbnN0IHNpZGViYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbG9nID0gKGkpID0+IGNvbnNvbGUubG9nKCdcXG4nLCBpKTtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKTtcbiAgICBjb25zdCBzaWRlYmFyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnc2lkZWJhciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkocm9vdCkoc2lkZWJhcik7XG4gICAgY29uc3QgdG9kYXlDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydzaWRlYmFyLXRhYicsICdjb250YWluZXItdG9kYXknXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNpZGViYXIpKHRvZGF5Q29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b2RheUNvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuY3JlYXRlSW1hZ2UpKCcuLi8uLi9zcmMvYXNzZXRzL2ljb25zL2FwZXJ0dXJlLnN2ZycpKFsnaWNvbicsICdpY29uLXRvZGF5J10pKGBpY29uIHJlcHJlc2VudGluZyB0b2RheSdzIGV2ZW50c2ApKCdUb2RheScpKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ1RvZGF5JyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b2RheUNvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdoNCcpKFsndGFiLXRleHQnLCAndG9kYXktdGFiJ10pKTtcbiAgICBjb25zdCB1cGNvbWluZ0NvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3NpZGViYXItdGFiJywgJ2NvbnRhaW5lci11cGNvbWluZyddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2lkZWJhcikodXBjb21pbmdDb250YWluZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHVwY29taW5nQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5jcmVhdGVJbWFnZSkoJy4uLy4uL3NyYy9hc3NldHMvaWNvbnMvY2FsZW5kYXIuc3ZnJykoWydpY29uJywgJ3VwY29taW5nLWljb24nXSkoJ2ljb24gcmVwcmVzZW50aW5nIHVwY29taW5nIGV2ZW50cycpKCdVcGNvbWluZycpKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ1VwY29taW5nJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh1cGNvbWluZ0NvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdoNCcpKFsndGFiLXRleHQnLCAndGFiLXVwY29taW5nJ10pKTtcbiAgICBjb25zdCBhcmNoaXZlZENvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3NpZGViYXItdGFiJywgJ2NvbnRhaW5lci1hcmNoaXZlZCddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2lkZWJhcikoYXJjaGl2ZWRDb250YWluZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFyY2hpdmVkQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5jcmVhdGVJbWFnZSkoJy4uLy4uL3NyYy9hc3NldHMvaWNvbnMvYXJjaGl2ZS5zdmcnKShbJ2ljb24nLCAnYXJjaGl2ZWQtaWNvbiddKSgnaWNvbiByZXByZXNlbnRpbmcgYXJjaGl2ZWQgZXZlbnRzJykoJ0FyY2hpdmVkJykpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnQXJjaGl2ZWQnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFyY2hpdmVkQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2g0JykoWyd0YWItdGV4dCcsICd0YWItYXJjaGl2ZWQnXSkpO1xuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnc2lkZWJhci1oZWFkaW5nJywgJ2NvbnRhaW5lci1wcm9qZWN0cyddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2lkZWJhcikocHJvamVjdHNDb250YWluZXIpO1xuICAgIGNvbnN0IHByb2plY3RzSGVhZGluZyA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3Byb2plY3RzSGVhZGluZy1jb250YWluZXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHByb2plY3RzQ29udGFpbmVyKShwcm9qZWN0c0hlYWRpbmcpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnUHJvamVjdHMnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHByb2plY3RzSGVhZGluZykpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdoMycpKFsnaGVhZGluZy10ZXh0JywgJ3RleHQtcHJvamVjdHMnXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ2NsaWNrJykoaGFuZGxlQWRkTmV3UHJvamVjdEljb25DbGlja18xLmhhbmRsZUFkZE5ld1Byb2plY3RJY29uQ2xpY2spLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkocHJvamVjdHNIZWFkaW5nKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5jcmVhdGVJbWFnZSkoJy4uLy4uLy4uL3NyYy9hc3NldHMvaWNvbnMvcGx1cy5zdmcnKShbJ2ljb24nLCAnaWNvbi1wbHVzJ10pKCdpY29uIG9mIHBsdXMgc3ltYm9sJykoJ0FkZCBOZXcgUHJvamVjdCcpKTtcbiAgICBjb25zdCBzYW1wbGVQcm9qZWN0Q29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnc2lkZWJhci1wcm9qZWN0JywgJ3Byb2plY3QnXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHByb2plY3RzQ29udGFpbmVyKShzYW1wbGVQcm9qZWN0Q29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ1NhbXBsZSBQcm9qZWN0JyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzYW1wbGVQcm9qZWN0Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2g0JykoWydwcm9qZWN0LXRleHQnLCAndGV4dC1zYW1wbGVQcm9qZWN0J10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydkYXRhLW5hbWUnLCBgc2FtcGxlLXByb2plY3RgXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrXzEuaGFuZGxlQWRkTmV3VG9kb0ljb25DbGljayksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzYW1wbGVQcm9qZWN0Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5jcmVhdGVJbWFnZSkoJy4uLy4uLy4uL3NyYy9hc3NldHMvaWNvbnMvcGx1cy5zdmcnKShbJ2ljb24nLCAnaWNvbi1wbHVzJ10pKCdpY29uIG9mIHBsdXMgc3ltYm9sJykoJ0FkZCBOZXcgVG9kbycpKTtcbiAgICAvL2FkZFByb2plY3QgbW9kYWxcbiAgICBjb25zdCBhZGRQcm9qZWN0Q29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnYWRkUHJvamVjdC1jb250YWluZXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNpZGViYXIpKGFkZFByb2plY3RDb250YWluZXIpO1xuICAgIGNvbnN0IGFkZFByb2plY3RIZWFkaW5nQ29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnYWRkUHJvamVjdEhlYWRpbmctY29udGFpbmVyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0Q29udGFpbmVyKShhZGRQcm9qZWN0SGVhZGluZ0NvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdBZGQgcHJvamVjdCcpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdENvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdoMycpKFsnaGVhZGluZy10ZXh0JywgJ3RleHQtYWRkUHJvamVjdCddKSk7XG4gICAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZm9ybScpKFsnZm9ybS1hZGRQcm9qZWN0J10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWydhY3Rpb24nLCAnIyddLFxuICAgICAgICBbJ21ldGhvZCcsICdwb3N0J10sXG4gICAgICAgIFsnaWQnLCAnZm9ybS1hZGRQcm9qZWN0J10sXG4gICAgICAgIFsnbmFtZScsICdmb3JtLWFkZFByb2plY3QnXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ3N1Ym1pdCcpKGhhbmRsZUZvcm1TdWJtaXRfMS5oYW5kbGVGb3JtU3VibWl0KSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFByb2plY3RDb250YWluZXIpKShhZGRQcm9qZWN0Rm9ybSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1snZm9yJywgJ2FkZFByb2plY3QtbmFtZSddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ05hbWUnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFByb2plY3RGb3JtKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2xhYmVsJykoWydsYWJlbC1uYW1lJ10pKTtcbiAgICAvL2lucHV0IG5hbWVcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsnaWQnLCAnYWRkUHJvamVjdC1uYW1lJ10sXG4gICAgICAgIFsndHlwZScsICd0ZXh0J10sXG4gICAgICAgIFsncGxhY2Vob2xkZXInLCAnRW50ZXIgbmFtZSBvZiBwcm9qZWN0J10sXG4gICAgICAgIFsnbmFtZScsICdhZGRQcm9qZWN0LW5hbWUnXSxcbiAgICAgICAgWydyZXF1aXJlZCcsICcnXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFByb2plY3RGb3JtKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2lucHV0JykoWydhZGRQcm9qZWN0LW5hbWUnXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ2ZvcicsICdhZGRQcm9qZWN0LWNvbG91ciddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ0NvbG91cicpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdEZvcm0pKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnbGFiZWwnKShbJ2xhYmVsLWNvbG91ciddKSk7XG4gICAgLy9pbnB1dCBjb2xvdXJcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsndHlwZScsICdjb2xvciddLFxuICAgICAgICBbJ2lkJywgJ2FkZFByb2plY3QtY29sb3VyJ10sXG4gICAgICAgIFsnbmFtZScsICdhZGRQcm9qZWN0LWNvbG91ciddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdEZvcm0pKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaW5wdXQnKShbJ2FkZFByb2plY3QtY29sb3VyJ10pKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0SWNvbnNDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydhZGRQcm9qZWN0SWNvbnMtY29udGFpbmVyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0Rm9ybSkoYWRkUHJvamVjdEljb25zQ29udGFpbmVyKTtcbiAgICAvLyBjb25zdCBidHRuQ2FuY2VsID0gZWxlbUNyZWF0b3IoJ2J1dHRvbicpKFsnYnR0bicsICdidHRuLWNhbmNlbCddKVxuICAgIC8vIHBpcGUoXG4gICAgLy8gXHRhZGRBdHRyaWJ1dGVUb0VsZW0oW1xuICAgIC8vIFx0XHRbJ3R5cGUnLCAnYnV0dG9uJ10sXG4gICAgLy8gXHRcdFsnbmFtZScsICdidHRuLWNhbmNlbCddLFxuICAgIC8vIFx0XSksXG4gICAgLy8gXHRhcHBlbmRFbGVtVG9QYXJlbnQoYWRkUHJvamVjdEljb25zQ29udGFpbmVyKVxuICAgIC8vICkoYnR0bkNhbmNlbClcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdjbGljaycpKGhhbmRsZUNsb3NlSWNvbkNsaWNrXzEuaGFuZGxlQ2xvc2VJY29uQ2xpY2spLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdEljb25zQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5jcmVhdGVJbWFnZSkoJy4uLy4uL3NyYy9hc3NldHMvaWNvbnMveC5zdmcnKShbJ2ljb24nLCAnaWNvbi14J10pKGBpY29uIG9mIHN5bWJvbCAneCcgcmVwcmVzZW50aW5nIGNhbmNlbCBvciBjbG9zZWApKCdDYW5jZWwnKSk7XG4gICAgY29uc3QgYnR0bkFkZCA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdidXR0b24nKShbJ2J0dG4nLCAnYnR0bi1hZGQnXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ3R5cGUnLCAnc3VibWl0J10sXG4gICAgICAgIFsnbmFtZScsICdidHRuLWFkZCddLFxuICAgICAgICBbJ2Zvcm0nLCAnZm9ybS1hZGRQcm9qZWN0J10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0SWNvbnNDb250YWluZXIpKShidHRuQWRkKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbW11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGJ0dG5BZGQpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmNyZWF0ZUltYWdlKSgnLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy9jaGVjay5zdmcnKShbJ2ljb24nLCAnaWNvbi1hZGQnXSkoYGljb24gb2Ygc3ltYm9sICdjaGVjaycgcmVwcmVzZW50aW5nIGFkZGApKCdBZGQnKSk7XG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG59O1xuZXhwb3J0cy5zaWRlYmFyID0gc2lkZWJhcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCIuL2luZGV4LmNzc1wiKTtcbmNvbnN0IGNvbnRlbnRfMSA9IHJlcXVpcmUoXCIuL3RzL2NvbnRlbnQvY29udGVudFwiKTtcbmNvbnN0IGhlYWRlcl8xID0gcmVxdWlyZShcIi4vdHMvaGVhZGVyL2hlYWRlclwiKTtcbmNvbnN0IHNpZGViYXJfMSA9IHJlcXVpcmUoXCIuL3RzL3NpZGViYXIvc2lkZWJhclwiKTtcbmNvbnN0IG1haW5BcHAgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbG9nID0gKGkpID0+IGNvbnNvbGUubG9nKCdcXG4nLCBpKTtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKTtcbiAgICAoMCwgaGVhZGVyXzEuaGVhZGVyKSgpO1xuICAgICgwLCBzaWRlYmFyXzEuc2lkZWJhcikoKTtcbiAgICAoMCwgY29udGVudF8xLmNvbnRlbnQpKCk7XG59O1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIG1haW5BcHApO1xuLy8gcGlwZShcbi8vIFx0YWRkVGV4dFRvRWxlbSgnSGkgQXRobWEhIScpLFxuLy8gXHRhZGRBdHRyaWJ1dGVUb0VsZW0oJ2RhdGEta2V5JykoJ3NvbWV0aGluZycpLFxuLy8gXHRhcHBlbmRFbGVtVG9QYXJlbnQobWFpbkNvbnRlbnQpXG4vLyApKGVsZW1DcmVhdG9yKCdwJykoWydwYXJhJ10pKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9