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
// const addAttributeToElem =
// 	(attribute_: string) => (value_: string) => (elem_: HTMLElement | null) => {
// 		elem_?.setAttribute(attribute_, value_)
// 		return elem_
// 	}
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
const pipe = (...funcs) => (v) => funcs.reduce((res, func) => func(res), v);
exports.pipe = pipe;


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
};
exports.header = header;


/***/ }),

/***/ "./src/ts/projects/storeProjects.ts":
/*!******************************************!*\
  !*** ./src/ts/projects/storeProjects.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeProjects = void 0;
//needs to be a factory function
const storeProjects = function (formName_, formColour_) {
    localStorage.setItem(formName_, JSON.stringify([formName_, formColour_]));
};
exports.storeProjects = storeProjects;
// const projectContainer = elemCreator('div')(['sidebar-project', 'project'])
// 	appendElemToParent(projectsContainer)(projectContainer)
// 	pipe(
// 		addTextToElem(`${JSON.parse(localStorage.getItem(formName_) ?? '')[0]}`),
// 		appendElemToParent(projectContainer)
// 	)(elemCreator('h3')(['heading-text', 'text-projects']))
// 	pipe(
// 		addEvtListener('click')(handleAddNewProjectIconClick),
// 		appendElemToParent(projectContainer)
// 	)(
// 		createImage('../../../src/assets/icons/plus.svg')(['icon', 'icon-plus'])(
// 			'icon of plus symbol'
// 		)('Add New Project')
// 	)
// function handleAddNewProjectIconClick(this: HTMLImageElement, ev: MouseEvent) {
// 	const addProjectModal: Div = document.querySelector('.addProject-container')
// 	if (addProjectModal)
// 		addProjectModal.style.visibility =
// 			addProjectModal?.style.visibility === 'visible' ? 'hidden' : 'visible'
// }


/***/ }),

/***/ "./src/ts/sidebar/sidebar.ts":
/*!***********************************!*\
  !*** ./src/ts/sidebar/sidebar.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sidebar = void 0;
const element_creators_1 = __webpack_require__(/*! ../element-creators */ "./src/ts/element-creators.ts");
const storeProjects_1 = __webpack_require__(/*! ../projects/storeProjects */ "./src/ts/projects/storeProjects.ts");
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
    const expiredContainer = (0, element_creators_1.elemCreator)('div')(['sidebar-tab', 'container-expired']);
    (0, element_creators_1.appendElemToParent)(sidebar)(expiredContainer);
    (0, element_creators_1.pipe)((0, element_creators_1.appendElemToParent)(expiredContainer))((0, element_creators_1.createImage)('../../src/assets/icons/archive.svg')(['icon', 'expired-icon'])('icon representing expired events')('Expired'));
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('Expired'), (0, element_creators_1.appendElemToParent)(expiredContainer))((0, element_creators_1.elemCreator)('h4')(['tab-text', 'tab-expired']));
    const projectsContainer = (0, element_creators_1.elemCreator)('div')(['sidebar-heading', 'container-projects']);
    (0, element_creators_1.appendElemToParent)(sidebar)(projectsContainer);
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('Projects'), (0, element_creators_1.appendElemToParent)(projectsContainer))((0, element_creators_1.elemCreator)('h3')(['heading-text', 'text-projects']));
    const sampleProjectContainer = (0, element_creators_1.elemCreator)('div')(['sidebar-project', 'project']);
    (0, element_creators_1.appendElemToParent)(projectsContainer)(sampleProjectContainer);
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('Sample Project'), (0, element_creators_1.appendElemToParent)(sampleProjectContainer))((0, element_creators_1.elemCreator)('h4')(['project-text', 'text-sampleProject']));
    (0, element_creators_1.pipe)((0, element_creators_1.addEvtListener)('click')(handleAddNewProjectIconClick), (0, element_creators_1.appendElemToParent)(sampleProjectContainer))((0, element_creators_1.createImage)('../../../src/assets/icons/plus.svg')(['icon', 'icon-plus'])('icon of plus symbol')('Add New Project'));
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
    ]), (0, element_creators_1.addEvtListener)('submit')(handleFormSubmit), (0, element_creators_1.appendElemToParent)(addProjectContainer))(addProjectForm);
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
    (0, element_creators_1.pipe)((0, element_creators_1.addEvtListener)('click')(handleCloseIconClick), (0, element_creators_1.appendElemToParent)(addProjectIconsContainer))((0, element_creators_1.createImage)('../../src/assets/icons/x.svg')(['icon', 'icon-x'])(`icon of symbol 'x' representing cancel or close`)('Cancel'));
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
    function handleAddNewProjectIconClick(ev) {
        const addProjectModal = document.querySelector('.addProject-container');
        if (addProjectModal)
            addProjectModal.style.visibility =
                (addProjectModal === null || addProjectModal === void 0 ? void 0 : addProjectModal.style.visibility) === 'visible' ? 'hidden' : 'visible';
    }
    function handleCloseIconClick(ev) {
        const addProjectModal = document.querySelector('.addProject-container');
        if (addProjectModal)
            addProjectModal.style.visibility =
                (addProjectModal === null || addProjectModal === void 0 ? void 0 : addProjectModal.style.visibility) === 'visible' ? 'hidden' : 'visible';
    }
    function handleFormSubmit(ev) {
        var _a, _b, _c, _d;
        ev.preventDefault();
        const formData = new FormData(this);
        const formName = (_b = (_a = formData.get('addProject-name')) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '';
        const formColour = (_d = (_c = formData.get('addProject-colour')) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : '';
        (0, storeProjects_1.storeProjects)(formName, formColour);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7O0FDTmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUJBQU8sQ0FBQyxvQ0FBYTtBQUNyQixrQkFBa0IsbUJBQU8sQ0FBQyx5REFBc0I7QUFDaEQsaUJBQWlCLG1CQUFPLENBQUMscURBQW9CO0FBQzdDLGtCQUFrQixtQkFBTyxDQUFDLHlEQUFzQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvY29udGVudC9jb250ZW50LnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZWxlbWVudC1jcmVhdG9ycy50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2hlYWRlci9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9wcm9qZWN0cy9zdG9yZVByb2plY3RzLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvc2lkZWJhci9zaWRlYmFyLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNvbnRlbnQgPSB2b2lkIDA7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IGNvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbG9nID0gKGkpID0+IGNvbnNvbGUubG9nKCdcXG4nLCBpKTtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKTtcbiAgICBjb25zdCB0b3AgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydjb250ZW50LXRvcCddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkocm9vdCkodG9wKTtcbiAgICBjb25zdCBmb3JtID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2Zvcm0nKShbJ2Zvcm0nXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ2FjdGlvbicsICcjJ10sXG4gICAgICAgIFsnbWV0aG9kJywgJ3Bvc3QnXSxcbiAgICAgICAgWydpZCcsICdmb3JtLXNlYXJjaCddLFxuICAgICAgICBbJ25hbWUnLCAnc2VhcmNoLXRvZG8nXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvcCkpKGZvcm0pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ2ZvcicsICdzZWFyY2gnXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoZm9ybSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdsYWJlbCcpKFsnbGFiZWwtc2VhcmNoJ10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsndHlwZScsICdzZWFyY2gnXSxcbiAgICAgICAgWydwbGFjZWhvbGRlcicsICdzZWFyY2ggZm9yIGEgdG9kbyBpbiBzZWxlY3RlZCBwcm9qZWN0J10sXG4gICAgICAgIFsnaWQnLCAnc2VhcmNoJ10sXG4gICAgICAgIFsnbmFtZScsICdzZWFyY2gtdG9kbyddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoZm9ybSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdpbnB1dCcpKFsnc2VhcmNoJ10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdjbGljaycpKGhhbmRsZVRoZW1lSWNvbkNsaWNrKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvcCkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuY3JlYXRlSW1hZ2UpKCcuLi8uLi9zcmMvYXNzZXRzL2ljb25zL21vb24uc3ZnJykoWydpY29uJywgJ2ljb24tbW9vbiddKSgnaWNvbiBvZiBtb29uIHJlcHJlc2VudGluZyBkYXJrIG1vZGUnKSgnRGFyayBNb2RlJykpO1xuICAgIGZ1bmN0aW9uIGhhbmRsZVRoZW1lSWNvbkNsaWNrKGV2KSB7XG4gICAgICAgIGxvZyh0aGlzKTtcbiAgICAgICAgbG9nKGV2KTtcbiAgICB9XG59O1xuZXhwb3J0cy5jb250ZW50ID0gY29udGVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5waXBlID0gZXhwb3J0cy5hZGRFdnRMaXN0ZW5lciA9IGV4cG9ydHMuY3JlYXRlSW1hZ2UgPSBleHBvcnRzLmFkZEF0dHJpYnV0ZVRvRWxlbSA9IGV4cG9ydHMuYWRkVGV4dFRvRWxlbSA9IGV4cG9ydHMuYXBwZW5kRWxlbVRvUGFyZW50ID0gZXhwb3J0cy5lbGVtQ3JlYXRvciA9IHZvaWQgMDtcbmNvbnN0IGVsZW1DcmVhdG9yID0gKGVsZW1fKSA9PiAoY2xhc3NfKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbV8pO1xuICAgIHJldHVybiBjbGFzc18ucmVkdWNlKChlbGVtLCBjdXJyQ2xhc3MpID0+IHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKGN1cnJDbGFzcyk7XG4gICAgICAgIHJldHVybiBlbGVtO1xuICAgIH0sIGVsZW1lbnQpO1xufTtcbmV4cG9ydHMuZWxlbUNyZWF0b3IgPSBlbGVtQ3JlYXRvcjtcbi8vIGNvbnN0IGFkZEF0dHJpYnV0ZVRvRWxlbSA9XG4vLyBcdChhdHRyaWJ1dGVfOiBzdHJpbmcpID0+ICh2YWx1ZV86IHN0cmluZykgPT4gKGVsZW1fOiBIVE1MRWxlbWVudCB8IG51bGwpID0+IHtcbi8vIFx0XHRlbGVtXz8uc2V0QXR0cmlidXRlKGF0dHJpYnV0ZV8sIHZhbHVlXylcbi8vIFx0XHRyZXR1cm4gZWxlbV9cbi8vIFx0fVxuY29uc3QgYWRkQXR0cmlidXRlVG9FbGVtID0gKGF0dHJWYWxzXykgPT4gKGVsZW1fKSA9PiB7XG4gICAgcmV0dXJuIGF0dHJWYWxzXy5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xuICAgICAgICBpZiAoY3Vyci5sZW5ndGggPiAyKVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgYWNjID09PSBudWxsIHx8IGFjYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWNjLnNldEF0dHJpYnV0ZShjdXJyWzBdLCBjdXJyWzFdKTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBlbGVtXyk7XG59O1xuZXhwb3J0cy5hZGRBdHRyaWJ1dGVUb0VsZW0gPSBhZGRBdHRyaWJ1dGVUb0VsZW07XG5jb25zdCBhZGRUZXh0VG9FbGVtID0gKHRleHRfKSA9PiAoZWxlbV8pID0+IHtcbiAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHRfKTtcbiAgICBlbGVtXyA9PT0gbnVsbCB8fCBlbGVtXyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWxlbV8uYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuICAgIHJldHVybiBlbGVtXztcbn07XG5leHBvcnRzLmFkZFRleHRUb0VsZW0gPSBhZGRUZXh0VG9FbGVtO1xuY29uc3QgYXBwZW5kRWxlbVRvUGFyZW50ID0gKHBhcmVudF8pID0+IChjaGlsZF8pID0+IHtcbiAgICBpZiAoY2hpbGRfKVxuICAgICAgICBwYXJlbnRfID09PSBudWxsIHx8IHBhcmVudF8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmVudF8uYXBwZW5kQ2hpbGQoY2hpbGRfKTtcbn07XG5leHBvcnRzLmFwcGVuZEVsZW1Ub1BhcmVudCA9IGFwcGVuZEVsZW1Ub1BhcmVudDtcbmNvbnN0IGNyZWF0ZUltYWdlID0gKHNvdXJjZV8pID0+IChjbGFzc18pID0+IChhbHRfKSA9PiAodGl0bGVfKSA9PiB7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBzb3VyY2VfO1xuICAgIGltYWdlLmFsdCA9IGFsdF87XG4gICAgaW1hZ2UudGl0bGUgPSB0aXRsZV87XG4gICAgcmV0dXJuIGNsYXNzXy5yZWR1Y2UoKGVsZW0sIGN1cnJDbGFzcykgPT4ge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY3VyckNsYXNzKTtcbiAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgfSwgaW1hZ2UpO1xufTtcbmV4cG9ydHMuY3JlYXRlSW1hZ2UgPSBjcmVhdGVJbWFnZTtcbmNvbnN0IGFkZEV2dExpc3RlbmVyID0gKGV2dF8pID0+IChoYW5kbGVFdnRfKSA9PiAoZWxlbV8pID0+IHtcbiAgICBlbGVtXyA9PT0gbnVsbCB8fCBlbGVtXyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWxlbV8uYWRkRXZlbnRMaXN0ZW5lcihldnRfLCBoYW5kbGVFdnRfKTtcbiAgICByZXR1cm4gZWxlbV87XG59O1xuZXhwb3J0cy5hZGRFdnRMaXN0ZW5lciA9IGFkZEV2dExpc3RlbmVyO1xuLy8gY29uc3QgcGlwZSA9XG4vLyBcdCguLi5mdW5jczogQXJyYXk8KF86IHVua25vd24gfCBudWxsKSA9PiB1bmtub3duPikgPT5cbi8vIFx0KHY6IHVua25vd24gfCBudWxsKSA9PiB7XG4vLyBcdFx0cmV0dXJuIGZ1bmNzLnJlZHVjZSgocmVzdWx0LCBmdW5jKSA9PiB7XG4vLyBcdFx0XHRpZiAocmVzdWx0KSByZXR1cm4gZnVuYyhyZXN1bHQpXG4vLyBcdFx0fSwgdilcbi8vIFx0fVxuY29uc3QgcGlwZSA9ICguLi5mdW5jcykgPT4gKHYpID0+IGZ1bmNzLnJlZHVjZSgocmVzLCBmdW5jKSA9PiBmdW5jKHJlcyksIHYpO1xuZXhwb3J0cy5waXBlID0gcGlwZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oZWFkZXIgPSB2b2lkIDA7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IGhlYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBsb2cgPSAoaSkgPT4gY29uc29sZS5sb2coJ1xcbicsIGkpO1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpO1xuICAgIGNvbnN0IGhlYWRlciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2hlYWRlciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkocm9vdCkoaGVhZGVyKTtcbn07XG5leHBvcnRzLmhlYWRlciA9IGhlYWRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zdG9yZVByb2plY3RzID0gdm9pZCAwO1xuLy9uZWVkcyB0byBiZSBhIGZhY3RvcnkgZnVuY3Rpb25cbmNvbnN0IHN0b3JlUHJvamVjdHMgPSBmdW5jdGlvbiAoZm9ybU5hbWVfLCBmb3JtQ29sb3VyXykge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGZvcm1OYW1lXywgSlNPTi5zdHJpbmdpZnkoW2Zvcm1OYW1lXywgZm9ybUNvbG91cl9dKSk7XG59O1xuZXhwb3J0cy5zdG9yZVByb2plY3RzID0gc3RvcmVQcm9qZWN0cztcbi8vIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBlbGVtQ3JlYXRvcignZGl2JykoWydzaWRlYmFyLXByb2plY3QnLCAncHJvamVjdCddKVxuLy8gXHRhcHBlbmRFbGVtVG9QYXJlbnQocHJvamVjdHNDb250YWluZXIpKHByb2plY3RDb250YWluZXIpXG4vLyBcdHBpcGUoXG4vLyBcdFx0YWRkVGV4dFRvRWxlbShgJHtKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGZvcm1OYW1lXykgPz8gJycpWzBdfWApLFxuLy8gXHRcdGFwcGVuZEVsZW1Ub1BhcmVudChwcm9qZWN0Q29udGFpbmVyKVxuLy8gXHQpKGVsZW1DcmVhdG9yKCdoMycpKFsnaGVhZGluZy10ZXh0JywgJ3RleHQtcHJvamVjdHMnXSkpXG4vLyBcdHBpcGUoXG4vLyBcdFx0YWRkRXZ0TGlzdGVuZXIoJ2NsaWNrJykoaGFuZGxlQWRkTmV3UHJvamVjdEljb25DbGljayksXG4vLyBcdFx0YXBwZW5kRWxlbVRvUGFyZW50KHByb2plY3RDb250YWluZXIpXG4vLyBcdCkoXG4vLyBcdFx0Y3JlYXRlSW1hZ2UoJy4uLy4uLy4uL3NyYy9hc3NldHMvaWNvbnMvcGx1cy5zdmcnKShbJ2ljb24nLCAnaWNvbi1wbHVzJ10pKFxuLy8gXHRcdFx0J2ljb24gb2YgcGx1cyBzeW1ib2wnXG4vLyBcdFx0KSgnQWRkIE5ldyBQcm9qZWN0Jylcbi8vIFx0KVxuLy8gZnVuY3Rpb24gaGFuZGxlQWRkTmV3UHJvamVjdEljb25DbGljayh0aGlzOiBIVE1MSW1hZ2VFbGVtZW50LCBldjogTW91c2VFdmVudCkge1xuLy8gXHRjb25zdCBhZGRQcm9qZWN0TW9kYWw6IERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0LWNvbnRhaW5lcicpXG4vLyBcdGlmIChhZGRQcm9qZWN0TW9kYWwpXG4vLyBcdFx0YWRkUHJvamVjdE1vZGFsLnN0eWxlLnZpc2liaWxpdHkgPVxuLy8gXHRcdFx0YWRkUHJvamVjdE1vZGFsPy5zdHlsZS52aXNpYmlsaXR5ID09PSAndmlzaWJsZScgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJ1xuLy8gfVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNpZGViYXIgPSB2b2lkIDA7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IHN0b3JlUHJvamVjdHNfMSA9IHJlcXVpcmUoXCIuLi9wcm9qZWN0cy9zdG9yZVByb2plY3RzXCIpO1xuY29uc3Qgc2lkZWJhciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBsb2cgPSAoaSkgPT4gY29uc29sZS5sb2coJ1xcbicsIGkpO1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpO1xuICAgIGNvbnN0IHNpZGViYXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydzaWRlYmFyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShyb290KShzaWRlYmFyKTtcbiAgICBjb25zdCB0b2RheUNvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3NpZGViYXItdGFiJywgJ2NvbnRhaW5lci10b2RheSddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2lkZWJhcikodG9kYXlDb250YWluZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZGF5Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5jcmVhdGVJbWFnZSkoJy4uLy4uL3NyYy9hc3NldHMvaWNvbnMvYXBlcnR1cmUuc3ZnJykoWydpY29uJywgJ2ljb24tdG9kYXknXSkoYGljb24gcmVwcmVzZW50aW5nIHRvZGF5J3MgZXZlbnRzYCkoJ1RvZGF5JykpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnVG9kYXknKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZGF5Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2g0JykoWyd0YWItdGV4dCcsICd0b2RheS10YWInXSkpO1xuICAgIGNvbnN0IHVwY29taW5nQ29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnc2lkZWJhci10YWInLCAnY29udGFpbmVyLXVwY29taW5nJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzaWRlYmFyKSh1cGNvbWluZ0NvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodXBjb21pbmdDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmNyZWF0ZUltYWdlKSgnLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy9jYWxlbmRhci5zdmcnKShbJ2ljb24nLCAndXBjb21pbmctaWNvbiddKSgnaWNvbiByZXByZXNlbnRpbmcgdXBjb21pbmcgZXZlbnRzJykoJ1VwY29taW5nJykpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnVXBjb21pbmcnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHVwY29taW5nQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2g0JykoWyd0YWItdGV4dCcsICd0YWItdXBjb21pbmcnXSkpO1xuICAgIGNvbnN0IGV4cGlyZWRDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydzaWRlYmFyLXRhYicsICdjb250YWluZXItZXhwaXJlZCddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2lkZWJhcikoZXhwaXJlZENvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoZXhwaXJlZENvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuY3JlYXRlSW1hZ2UpKCcuLi8uLi9zcmMvYXNzZXRzL2ljb25zL2FyY2hpdmUuc3ZnJykoWydpY29uJywgJ2V4cGlyZWQtaWNvbiddKSgnaWNvbiByZXByZXNlbnRpbmcgZXhwaXJlZCBldmVudHMnKSgnRXhwaXJlZCcpKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ0V4cGlyZWQnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGV4cGlyZWRDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaDQnKShbJ3RhYi10ZXh0JywgJ3RhYi1leHBpcmVkJ10pKTtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3NpZGViYXItaGVhZGluZycsICdjb250YWluZXItcHJvamVjdHMnXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNpZGViYXIpKHByb2plY3RzQ29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ1Byb2plY3RzJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShwcm9qZWN0c0NvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdoMycpKFsnaGVhZGluZy10ZXh0JywgJ3RleHQtcHJvamVjdHMnXSkpO1xuICAgIGNvbnN0IHNhbXBsZVByb2plY3RDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydzaWRlYmFyLXByb2plY3QnLCAncHJvamVjdCddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkocHJvamVjdHNDb250YWluZXIpKHNhbXBsZVByb2plY3RDb250YWluZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnU2FtcGxlIFByb2plY3QnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNhbXBsZVByb2plY3RDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaDQnKShbJ3Byb2plY3QtdGV4dCcsICd0ZXh0LXNhbXBsZVByb2plY3QnXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ2NsaWNrJykoaGFuZGxlQWRkTmV3UHJvamVjdEljb25DbGljayksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzYW1wbGVQcm9qZWN0Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5jcmVhdGVJbWFnZSkoJy4uLy4uLy4uL3NyYy9hc3NldHMvaWNvbnMvcGx1cy5zdmcnKShbJ2ljb24nLCAnaWNvbi1wbHVzJ10pKCdpY29uIG9mIHBsdXMgc3ltYm9sJykoJ0FkZCBOZXcgUHJvamVjdCcpKTtcbiAgICAvL2FkZFByb2plY3QgbW9kYWxcbiAgICBjb25zdCBhZGRQcm9qZWN0Q29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnYWRkUHJvamVjdC1jb250YWluZXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNpZGViYXIpKGFkZFByb2plY3RDb250YWluZXIpO1xuICAgIGNvbnN0IGFkZFByb2plY3RIZWFkaW5nQ29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnYWRkUHJvamVjdEhlYWRpbmctY29udGFpbmVyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0Q29udGFpbmVyKShhZGRQcm9qZWN0SGVhZGluZ0NvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdBZGQgcHJvamVjdCcpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdENvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdoMycpKFsnaGVhZGluZy10ZXh0JywgJ3RleHQtYWRkUHJvamVjdCddKSk7XG4gICAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZm9ybScpKFsnZm9ybS1hZGRQcm9qZWN0J10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWydhY3Rpb24nLCAnIyddLFxuICAgICAgICBbJ21ldGhvZCcsICdwb3N0J10sXG4gICAgICAgIFsnaWQnLCAnZm9ybS1hZGRQcm9qZWN0J10sXG4gICAgICAgIFsnbmFtZScsICdmb3JtLWFkZFByb2plY3QnXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ3N1Ym1pdCcpKGhhbmRsZUZvcm1TdWJtaXQpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdENvbnRhaW5lcikpKGFkZFByb2plY3RGb3JtKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydmb3InLCAnYWRkUHJvamVjdC1uYW1lJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnTmFtZScpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdEZvcm0pKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnbGFiZWwnKShbJ2xhYmVsLW5hbWUnXSkpO1xuICAgIC8vaW5wdXQgbmFtZVxuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWydpZCcsICdhZGRQcm9qZWN0LW5hbWUnXSxcbiAgICAgICAgWyd0eXBlJywgJ3RleHQnXSxcbiAgICAgICAgWydwbGFjZWhvbGRlcicsICdFbnRlciBuYW1lIG9mIHByb2plY3QnXSxcbiAgICAgICAgWyduYW1lJywgJ2FkZFByb2plY3QtbmFtZSddLFxuICAgICAgICBbJ3JlcXVpcmVkJywgJyddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdEZvcm0pKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaW5wdXQnKShbJ2FkZFByb2plY3QtbmFtZSddKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1snZm9yJywgJ2FkZFByb2plY3QtY29sb3VyJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnQ29sb3VyJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0Rm9ybSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdsYWJlbCcpKFsnbGFiZWwtY29sb3VyJ10pKTtcbiAgICAvL2lucHV0IGNvbG91clxuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWyd0eXBlJywgJ2NvbG9yJ10sXG4gICAgICAgIFsnaWQnLCAnYWRkUHJvamVjdC1jb2xvdXInXSxcbiAgICAgICAgWyduYW1lJywgJ2FkZFByb2plY3QtY29sb3VyJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0Rm9ybSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdpbnB1dCcpKFsnYWRkUHJvamVjdC1jb2xvdXInXSkpO1xuICAgIGNvbnN0IGFkZFByb2plY3RJY29uc0NvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2FkZFByb2plY3RJY29ucy1jb250YWluZXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFByb2plY3RGb3JtKShhZGRQcm9qZWN0SWNvbnNDb250YWluZXIpO1xuICAgIC8vIGNvbnN0IGJ0dG5DYW5jZWwgPSBlbGVtQ3JlYXRvcignYnV0dG9uJykoWydidHRuJywgJ2J0dG4tY2FuY2VsJ10pXG4gICAgLy8gcGlwZShcbiAgICAvLyBcdGFkZEF0dHJpYnV0ZVRvRWxlbShbXG4gICAgLy8gXHRcdFsndHlwZScsICdidXR0b24nXSxcbiAgICAvLyBcdFx0WyduYW1lJywgJ2J0dG4tY2FuY2VsJ10sXG4gICAgLy8gXHRdKSxcbiAgICAvLyBcdGFwcGVuZEVsZW1Ub1BhcmVudChhZGRQcm9qZWN0SWNvbnNDb250YWluZXIpXG4gICAgLy8gKShidHRuQ2FuY2VsKVxuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ2NsaWNrJykoaGFuZGxlQ2xvc2VJY29uQ2xpY2spLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdEljb25zQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5jcmVhdGVJbWFnZSkoJy4uLy4uL3NyYy9hc3NldHMvaWNvbnMveC5zdmcnKShbJ2ljb24nLCAnaWNvbi14J10pKGBpY29uIG9mIHN5bWJvbCAneCcgcmVwcmVzZW50aW5nIGNhbmNlbCBvciBjbG9zZWApKCdDYW5jZWwnKSk7XG4gICAgY29uc3QgYnR0bkFkZCA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdidXR0b24nKShbJ2J0dG4nLCAnYnR0bi1hZGQnXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ3R5cGUnLCAnc3VibWl0J10sXG4gICAgICAgIFsnbmFtZScsICdidHRuLWFkZCddLFxuICAgICAgICBbJ2Zvcm0nLCAnZm9ybS1hZGRQcm9qZWN0J10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0SWNvbnNDb250YWluZXIpKShidHRuQWRkKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbW11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGJ0dG5BZGQpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmNyZWF0ZUltYWdlKSgnLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy9jaGVjay5zdmcnKShbJ2ljb24nLCAnaWNvbi1hZGQnXSkoYGljb24gb2Ygc3ltYm9sICdjaGVjaycgcmVwcmVzZW50aW5nIGFkZGApKCdBZGQnKSk7XG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG4gICAgZnVuY3Rpb24gaGFuZGxlQWRkTmV3UHJvamVjdEljb25DbGljayhldikge1xuICAgICAgICBjb25zdCBhZGRQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdC1jb250YWluZXInKTtcbiAgICAgICAgaWYgKGFkZFByb2plY3RNb2RhbClcbiAgICAgICAgICAgIGFkZFByb2plY3RNb2RhbC5zdHlsZS52aXNpYmlsaXR5ID1cbiAgICAgICAgICAgICAgICAoYWRkUHJvamVjdE1vZGFsID09PSBudWxsIHx8IGFkZFByb2plY3RNb2RhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWRkUHJvamVjdE1vZGFsLnN0eWxlLnZpc2liaWxpdHkpID09PSAndmlzaWJsZScgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJztcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xvc2VJY29uQ2xpY2soZXYpIHtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3QtY29udGFpbmVyJyk7XG4gICAgICAgIGlmIChhZGRQcm9qZWN0TW9kYWwpXG4gICAgICAgICAgICBhZGRQcm9qZWN0TW9kYWwuc3R5bGUudmlzaWJpbGl0eSA9XG4gICAgICAgICAgICAgICAgKGFkZFByb2plY3RNb2RhbCA9PT0gbnVsbCB8fCBhZGRQcm9qZWN0TW9kYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFkZFByb2plY3RNb2RhbC5zdHlsZS52aXNpYmlsaXR5KSA9PT0gJ3Zpc2libGUnID8gJ2hpZGRlbicgOiAndmlzaWJsZSc7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZUZvcm1TdWJtaXQoZXYpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcbiAgICAgICAgY29uc3QgZm9ybU5hbWUgPSAoX2IgPSAoX2EgPSBmb3JtRGF0YS5nZXQoJ2FkZFByb2plY3QtbmFtZScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9TdHJpbmcoKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJyc7XG4gICAgICAgIGNvbnN0IGZvcm1Db2xvdXIgPSAoX2QgPSAoX2MgPSBmb3JtRGF0YS5nZXQoJ2FkZFByb2plY3QtY29sb3VyJykpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy50b1N0cmluZygpKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiAnJztcbiAgICAgICAgKDAsIHN0b3JlUHJvamVjdHNfMS5zdG9yZVByb2plY3RzKShmb3JtTmFtZSwgZm9ybUNvbG91cik7XG4gICAgfVxufTtcbmV4cG9ydHMuc2lkZWJhciA9IHNpZGViYXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5yZXF1aXJlKFwiLi9pbmRleC5jc3NcIik7XG5jb25zdCBjb250ZW50XzEgPSByZXF1aXJlKFwiLi90cy9jb250ZW50L2NvbnRlbnRcIik7XG5jb25zdCBoZWFkZXJfMSA9IHJlcXVpcmUoXCIuL3RzL2hlYWRlci9oZWFkZXJcIik7XG5jb25zdCBzaWRlYmFyXzEgPSByZXF1aXJlKFwiLi90cy9zaWRlYmFyL3NpZGViYXJcIik7XG5jb25zdCBtYWluQXBwID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGxvZyA9IChpKSA9PiBjb25zb2xlLmxvZygnXFxuJywgaSk7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290Jyk7XG4gICAgKDAsIGhlYWRlcl8xLmhlYWRlcikoKTtcbiAgICAoMCwgc2lkZWJhcl8xLnNpZGViYXIpKCk7XG4gICAgKDAsIGNvbnRlbnRfMS5jb250ZW50KSgpO1xufTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBtYWluQXBwKTtcbi8vIHBpcGUoXG4vLyBcdGFkZFRleHRUb0VsZW0oJ0hpIEF0aG1hISEnKSxcbi8vIFx0YWRkQXR0cmlidXRlVG9FbGVtKCdkYXRhLWtleScpKCdzb21ldGhpbmcnKSxcbi8vIFx0YXBwZW5kRWxlbVRvUGFyZW50KG1haW5Db250ZW50KVxuLy8gKShlbGVtQ3JlYXRvcigncCcpKFsncGFyYSddKSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==