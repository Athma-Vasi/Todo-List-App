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
const handleThemeIconToggle_1 = __webpack_require__(/*! ../eventCBs/handleThemeIconToggle */ "./src/ts/eventCBs/handleThemeIconToggle.ts");
const content = function () {
    const log = (i) => console.log('\n', i);
    const root = document.querySelector('#root');
    const content = (0, element_creators_1.elemCreator)('div')(['content']);
    (0, element_creators_1.appendElemToParent)(root)(content);
    const top = (0, element_creators_1.elemCreator)('div')(['content-top']);
    (0, element_creators_1.appendElemToParent)(content)(top);
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
    (0, element_creators_1.pipe)((0, element_creators_1.addEvtListener)('click')(handleThemeIconToggle_1.handleThemeIconToggle), (0, element_creators_1.appendElemToParent)(top))((0, element_creators_1.createImage)('../../src/assets/icons/moon.svg')(['icon', 'icon-moon'])('icon of moon representing dark mode')('Dark Mode'));
};
exports.content = content;


/***/ }),

/***/ "./src/ts/element-creators.ts":
/*!************************************!*\
  !*** ./src/ts/element-creators.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pipe = exports.addStyleToElem = exports.addEvtListener = exports.createImage = exports.addAttributeToElem = exports.addTextToElem = exports.appendElemToParent = exports.elemCreator = void 0;
const elemCreator = (elem_) => (class_) => {
    const element = document.createElement(elem_);
    return class_.reduce((elem, currClass) => {
        elem.classList.add(currClass);
        return elem;
    }, element);
};
exports.elemCreator = elemCreator;
const addAttributeToElem = (attrVals_) => (elem_) => {
    return attrVals_.reduce((element, curr) => {
        if (curr.length > 2)
            return undefined;
        element === null || element === void 0 ? void 0 : element.setAttribute(curr[0], curr[1]);
        return element;
    }, elem_);
};
exports.addAttributeToElem = addAttributeToElem;
const addStyleToElem = (stylePropVals_) => (elem_) => {
    return stylePropVals_.reduce((element, curr) => {
        if (curr.length > 2)
            return undefined;
        element === null || element === void 0 ? void 0 : element.style.setProperty(curr[0], curr[1]);
        return element;
    }, elem_);
};
exports.addStyleToElem = addStyleToElem;
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
// function pipe<V>(...funcs: Array<(_: V) => V>): (_: V) => V | null | void {
// 	return function (value: V) {
// 		return funcs.reduce((val, func) => {
// 			return func(val)
// 		}, value)
// 	}
// }
const pipe = (...funcs) => (value) => funcs.reduce((res, func) => func(res), value);
exports.pipe = pipe;


/***/ }),

/***/ "./src/ts/eventCBs/handleAddNewProjectIconClick.ts":
/*!*********************************************************!*\
  !*** ./src/ts/eventCBs/handleAddNewProjectIconClick.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleAddNewProjectIconClick = void 0;
const projectModal_1 = __webpack_require__(/*! ../modals/projectModal */ "./src/ts/modals/projectModal.ts");
const handleAddNewProjectIconClick = function (ev) {
    (0, projectModal_1.projectModal)();
    const addProjectModal = document.querySelector('.addProject-container');
    if (addProjectModal) {
        addProjectModal.style.visibility =
            (addProjectModal === null || addProjectModal === void 0 ? void 0 : addProjectModal.style.visibility) === 'visible' ? 'hidden' : 'visible';
    }
};
exports.handleAddNewProjectIconClick = handleAddNewProjectIconClick;


/***/ }),

/***/ "./src/ts/eventCBs/handleAddNewTodoIconClick.ts":
/*!******************************************************!*\
  !*** ./src/ts/eventCBs/handleAddNewTodoIconClick.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleAddNewTodoIconClick = void 0;
const todoModal_1 = __webpack_require__(/*! ../modals/todoModal */ "./src/ts/modals/todoModal.ts");
const handleAddNewTodoIconClick = function () {
    var _a, _b;
    const projectDataName = (_a = this.dataset.name) !== null && _a !== void 0 ? _a : '';
    const projectDataColour = (_b = this.dataset.colour) !== null && _b !== void 0 ? _b : '';
    (0, todoModal_1.todoModal)(projectDataName, projectDataColour);
    const addTodoModal = document.querySelector('.todo-container');
    if (addTodoModal)
        addTodoModal.style.visibility =
            (addTodoModal === null || addTodoModal === void 0 ? void 0 : addTodoModal.style.visibility) === 'visible' ? 'hidden' : 'visible';
};
exports.handleAddNewTodoIconClick = handleAddNewTodoIconClick;


/***/ }),

/***/ "./src/ts/eventCBs/handleProjectCloseIconClick.ts":
/*!********************************************************!*\
  !*** ./src/ts/eventCBs/handleProjectCloseIconClick.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleProjectCloseIconClick = void 0;
const handleProjectCloseIconClick = function (ev) {
    const addProjectModal = document.querySelector('.addProject-container');
    // if (addProjectModal)
    // 	addProjectModal.style.visibility =
    // 		addProjectModal?.style.visibility === 'visible' ? 'hidden' : 'visible'
    if (addProjectModal)
        addProjectModal.remove();
};
exports.handleProjectCloseIconClick = handleProjectCloseIconClick;


/***/ }),

/***/ "./src/ts/eventCBs/handleProjectFormSubmit.ts":
/*!****************************************************!*\
  !*** ./src/ts/eventCBs/handleProjectFormSubmit.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleProjectFormSubmit = void 0;
const addProjectToSidebar_1 = __webpack_require__(/*! ../projects/addProjectToSidebar */ "./src/ts/projects/addProjectToSidebar.ts");
const handleProjectFormSubmit = function (ev) {
    var _a, _b, _c, _d;
    ev.preventDefault();
    const addProjectModal = document.querySelector('.addProject-container');
    const projectFormData = new FormData(this);
    const projectFormName = (_b = (_a = projectFormData.get('addProject-name')) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '';
    const projectFormColour = (_d = (_c = projectFormData.get('addProject-colour')) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : '';
    //if 'projectNames' doesn't exist, create it, otherwise do nothing
    if (!localStorage.getItem('projectNames')) {
        localStorage.setItem('projectNames', JSON.stringify([]));
    }
    const storeProject = (function (projectFormName_) {
        //if key in localstorage is projectNames, then get the values as
        //an array
        Object.keys(localStorage).forEach((key) => {
            var _a;
            if (key === 'projectNames') {
                const keysSet = new Set(JSON.parse((_a = localStorage.getItem(key)) !== null && _a !== void 0 ? _a : ''));
                //if name already present
                if (keysSet.has(projectFormName_)) {
                    alert(`${projectFormName_} already exists as a project (｡•́︿•̀｡)  Please choose another name.`);
                    return;
                }
                else {
                    //if new name, push to arr and then store array in localStorage
                    keysSet.add(projectFormName_);
                    localStorage.setItem(key, JSON.stringify(Array.from(keysSet)));
                    (0, addProjectToSidebar_1.addProjectToSidebar)(projectFormName, projectFormColour);
                }
            }
        });
    })(projectFormName);
    //
    //
    //
    // if (addProjectModal)
    // 	addProjectModal.style.visibility =
    // 		addProjectModal.style.visibility === 'hidden' ? 'visible' : 'hidden'
    addProjectModal === null || addProjectModal === void 0 ? void 0 : addProjectModal.remove();
};
exports.handleProjectFormSubmit = handleProjectFormSubmit;


/***/ }),

/***/ "./src/ts/eventCBs/handleThemeIconToggle.ts":
/*!**************************************************!*\
  !*** ./src/ts/eventCBs/handleThemeIconToggle.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleThemeIconToggle = void 0;
const handleThemeIconToggle = function (ev) {
    console.log(this);
    console.log(ev);
};
exports.handleThemeIconToggle = handleThemeIconToggle;


/***/ }),

/***/ "./src/ts/eventCBs/handleTodoCloseIconClick.ts":
/*!*****************************************************!*\
  !*** ./src/ts/eventCBs/handleTodoCloseIconClick.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleTodoCloseIconClick = void 0;
const handleTodoCloseIconClick = function () {
    const todoModal = document.querySelector('.todo-container');
    // if (todoModal)
    // 	todoModal.style.visibility = todoModal.style.visibility = 'visible'
    // 		? 'hidden'
    // 		: 'visible'
    if (todoModal)
        todoModal.remove();
};
exports.handleTodoCloseIconClick = handleTodoCloseIconClick;


/***/ }),

/***/ "./src/ts/eventCBs/handleTodoFormSubmit.ts":
/*!*************************************************!*\
  !*** ./src/ts/eventCBs/handleTodoFormSubmit.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleTodoFormSubmit = void 0;
const storeProjectAndTodosFull_1 = __webpack_require__(/*! ../todos/storeProjectAndTodosFull */ "./src/ts/todos/storeProjectAndTodosFull.ts");
const addTodosToContent_1 = __webpack_require__(/*! ../todos/addTodosToContent */ "./src/ts/todos/addTodosToContent.ts");
const handleTodoFormSubmit = function (ev) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    ev.preventDefault();
    const log = (i) => console.log('\n', i);
    const todoContainer = document.querySelector('.todo-container');
    const todoFormData = new FormData(this);
    const todoFormProjectName = (_b = (_a = todoFormData.get('addTodo-projectName')) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '';
    const todoFormProjectColour = (_d = (_c = todoFormData.get('addTodo-projectColour')) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : '';
    const todoFormName = (_f = (_e = todoFormData.get('addTodo-name')) === null || _e === void 0 ? void 0 : _e.toString()) !== null && _f !== void 0 ? _f : '';
    const todoFormDescription = (_h = (_g = todoFormData.get('addTodo-description')) === null || _g === void 0 ? void 0 : _g.toString()) !== null && _h !== void 0 ? _h : '';
    const todoFormDueDate = (_k = (_j = todoFormData.get('addTodo-dueDate')) === null || _j === void 0 ? void 0 : _j.toString()) !== null && _k !== void 0 ? _k : '';
    const todoFormSelectPriority = (_m = (_l = todoFormData.get('addTodo-selectPriority')) === null || _l === void 0 ? void 0 : _l.toString()) !== null && _m !== void 0 ? _m : '';
    const now = new Date();
    //returns date one year from current
    const sampleLowDueDate = (now) => {
        let day = now.getDate();
        let month = now.getMonth() + 1;
        const year = now.getFullYear() + 1;
        return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    };
    //returns date one month from current
    const sampleMedDueDate = (now) => {
        let month = now.getMonth();
        month = month <= 10 ? month + 1 : month;
        month = month + 1;
        return `${now.getFullYear()}-${month < 10 ? '0' + month : month}-${now.getDate() < 10 ? '0' + now.getDate() : now.getDate()}`;
    };
    //returns date one day from current
    const sampleUrgentDueDate = (now) => {
        let day = now.getDate();
        day = day < 26 ? day + 2 : day;
        let month = now.getMonth() + 1;
        return `${now.getFullYear()}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    };
    const sampleProject = {
        project: 
        //sample project to display initially
        { projectName: 'Sample Project', projectColour: '#48d1cc' },
        todos: [
            {
                todoName: `Finish 'The Faded Sun: Kesrith'`,
                todoDescription: 'Finish reading the book - return soon!',
                todoDueDate: `${sampleUrgentDueDate(now)}`,
                todoPriority: 'urgent',
            },
            {
                todoName: 'Vet Appointment',
                todoDescription: 'Take Nighteyes to the vet for routine checkup',
                todoDueDate: `${sampleMedDueDate(now)}`,
                todoPriority: 'medium',
            },
            {
                todoName: 'Backpacking trip to Nepal',
                todoDescription: 'Plan route, supplies and apply for visa',
                todoDueDate: `${sampleLowDueDate(now)}`,
                todoPriority: 'low',
            },
        ],
    };
    const projectsAndTodosFactory = function (projectName, projectColour, todoName, todoDescription, todoDueDate, todoPriority) {
        return {
            project: { projectName, projectColour },
            todos: [{ todoName, todoDescription, todoDueDate, todoPriority }],
        };
    };
    const storeSampleProject = (function (sampleProject_) {
        localStorage.setItem(sampleProject_.project.projectName, JSON.stringify(sampleProject_));
    })(sampleProject);
    const projectAndTodos = projectsAndTodosFactory(todoFormProjectName, todoFormProjectColour, todoFormName, todoFormDescription, todoFormDueDate, todoFormSelectPriority);
    (0, storeProjectAndTodosFull_1.storeProjectAndTodosFull)(projectAndTodos);
    (0, addTodosToContent_1.addTodosToContent)(projectAndTodos);
    todoContainer === null || todoContainer === void 0 ? void 0 : todoContainer.remove();
};
exports.handleTodoFormSubmit = handleTodoFormSubmit;


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

/***/ "./src/ts/modals/projectModal.ts":
/*!***************************************!*\
  !*** ./src/ts/modals/projectModal.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.projectModal = void 0;
const element_creators_1 = __webpack_require__(/*! ../element-creators */ "./src/ts/element-creators.ts");
const handleProjectCloseIconClick_1 = __webpack_require__(/*! ../eventCBs/handleProjectCloseIconClick */ "./src/ts/eventCBs/handleProjectCloseIconClick.ts");
const handleProjectFormSubmit_1 = __webpack_require__(/*! ../eventCBs/handleProjectFormSubmit */ "./src/ts/eventCBs/handleProjectFormSubmit.ts");
const projectModal = function () {
    const sidebar = document.querySelector('.sidebar');
    //addProject modal
    const addProjectContainer = (0, element_creators_1.elemCreator)('div')(['addProject-container']);
    (0, element_creators_1.appendElemToParent)(sidebar)(addProjectContainer);
    const addProjectHeadingContainer = (0, element_creators_1.elemCreator)('div')(['addProjectHeading-container']);
    (0, element_creators_1.appendElemToParent)(addProjectContainer)(addProjectHeadingContainer);
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('Add project'), (0, element_creators_1.appendElemToParent)(addProjectHeadingContainer))((0, element_creators_1.elemCreator)('h3')(['heading-text', 'text-addProject']));
    const addProjectForm = (0, element_creators_1.elemCreator)('form')(['form-addProject']);
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([
        ['action', '#'],
        ['method', 'post'],
        ['id', 'form-addProject'],
        ['name', 'form-addProject'],
    ]), (0, element_creators_1.addEvtListener)('submit')(handleProjectFormSubmit_1.handleProjectFormSubmit), (0, element_creators_1.appendElemToParent)(addProjectContainer))(addProjectForm);
    const addProjectNameContainer = (0, element_creators_1.elemCreator)('div')(['addProject-name-container']);
    (0, element_creators_1.appendElemToParent)(addProjectForm)(addProjectNameContainer);
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([['for', 'addProject-name']]), (0, element_creators_1.addTextToElem)('Name'), (0, element_creators_1.appendElemToParent)(addProjectNameContainer))((0, element_creators_1.elemCreator)('label')(['label-name']));
    //input name
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([
        ['id', 'addProject-name'],
        ['type', 'text'],
        ['minlength', '2'],
        ['maxlength', '20'],
        ['pattern', '^[a-zA-Z][a-zA-Z0-9-_.]{1,20}$'],
        ['placeholder', 'Enter name of project'],
        ['name', 'addProject-name'],
        ['required', ''],
    ]), (0, element_creators_1.appendElemToParent)(addProjectNameContainer))((0, element_creators_1.elemCreator)('input')(['addProject-name']));
    const addProjectColourContainer = (0, element_creators_1.elemCreator)('div')(['addProject-colour-container']);
    (0, element_creators_1.appendElemToParent)(addProjectForm)(addProjectColourContainer);
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([['for', 'addProject-colour']]), (0, element_creators_1.addTextToElem)('Colour'), (0, element_creators_1.appendElemToParent)(addProjectColourContainer))((0, element_creators_1.elemCreator)('label')(['label-colour']));
    //input colour
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([
        ['type', 'color'],
        ['id', 'addProject-colour'],
        ['name', 'addProject-colour'],
    ]), (0, element_creators_1.appendElemToParent)(addProjectColourContainer))((0, element_creators_1.elemCreator)('input')(['addProject-colour']));
    const addProjectIconsContainer = (0, element_creators_1.elemCreator)('div')(['addProjectIcons-container']);
    (0, element_creators_1.appendElemToParent)(addProjectForm)(addProjectIconsContainer);
    const bttnCancelProject = (0, element_creators_1.elemCreator)('button')(['bttn', 'bttn-cancelProject']);
    (0, element_creators_1.pipe)((0, element_creators_1.addEvtListener)('click')(handleProjectCloseIconClick_1.handleProjectCloseIconClick), (0, element_creators_1.addAttributeToElem)([
        ['type', 'button'],
        ['name', 'bttn-cancel'],
    ]), (0, element_creators_1.appendElemToParent)(addProjectIconsContainer))(bttnCancelProject);
    (0, element_creators_1.pipe)((0, element_creators_1.appendElemToParent)(bttnCancelProject))((0, element_creators_1.createImage)('../../src/assets/icons/x(1).svg')(['icon', 'icon-cancelProject'])(`icon of symbol 'x' representing cancel or close`)('Cancel'));
    const bttnAddProject = (0, element_creators_1.elemCreator)('button')(['bttn', 'bttn-addProject']);
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([
        ['type', 'submit'],
        ['name', 'bttn-addProject'],
        ['form', 'form-addProject'],
    ]), (0, element_creators_1.appendElemToParent)(addProjectIconsContainer))(bttnAddProject);
    (0, element_creators_1.pipe)((0, element_creators_1.appendElemToParent)(bttnAddProject))((0, element_creators_1.createImage)('../../src/assets/icons/check(1).svg')(['icon', 'icon-addProject'])(`icon of symbol 'check' representing add`)('Add Project'));
};
exports.projectModal = projectModal;


/***/ }),

/***/ "./src/ts/modals/todoModal.ts":
/*!************************************!*\
  !*** ./src/ts/modals/todoModal.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.todoModal = void 0;
const element_creators_1 = __webpack_require__(/*! ../element-creators */ "./src/ts/element-creators.ts");
const handleTodoCloseIconClick_1 = __webpack_require__(/*! ../eventCBs/handleTodoCloseIconClick */ "./src/ts/eventCBs/handleTodoCloseIconClick.ts");
const handleTodoFormSubmit_1 = __webpack_require__(/*! ../eventCBs/handleTodoFormSubmit */ "./src/ts/eventCBs/handleTodoFormSubmit.ts");
const todoModal = function (projectDataName_, projectDataColour_) {
    const root = document.querySelector('#root');
    const now = new Date();
    const todoContainer = (0, element_creators_1.elemCreator)('div')(['todo-container']);
    (0, element_creators_1.appendElemToParent)(root)(todoContainer);
    const todoForm = (0, element_creators_1.elemCreator)('form')(['form', 'form-addTodo']);
    (0, element_creators_1.pipe)((0, element_creators_1.addEvtListener)('submit')(handleTodoFormSubmit_1.handleTodoFormSubmit), (0, element_creators_1.addAttributeToElem)([
        ['action', '#'],
        ['method', 'post'],
        ['id', 'form-addTodo'],
        ['name', 'form-addTodo'],
    ]), (0, element_creators_1.appendElemToParent)(todoContainer))(todoForm);
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('Add task todo'), (0, element_creators_1.appendElemToParent)(todoForm))((0, element_creators_1.elemCreator)('h3')(['heading-text', 'text-addTodo']));
    const addTodoNameContainer = (0, element_creators_1.elemCreator)('div')(['addTodo-name-container']);
    (0, element_creators_1.appendElemToParent)(todoForm)(addTodoNameContainer);
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([['for', 'addTodo-name']]), (0, element_creators_1.addTextToElem)('Name'), (0, element_creators_1.appendElemToParent)(addTodoNameContainer))((0, element_creators_1.elemCreator)('label')(['label-name']));
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([
        ['type', 'text'],
        ['form', 'form-addTodo'],
        ['id', 'addTodo-name'],
        ['name', 'addTodo-name'],
        ['minlength', '2'],
        ['maxlength', '20'],
        ['pattern', '^[a-zA-Z][a-zA-Z0-9-_.]{1,20}$'],
        ['placeholder', 'Enter name for task todo'],
        ['required', ''],
    ]), (0, element_creators_1.appendElemToParent)(addTodoNameContainer))((0, element_creators_1.elemCreator)('input')(['addTodo-name']));
    const addTodoDescContainer = (0, element_creators_1.elemCreator)('div')(['addTodo-desc-container']);
    (0, element_creators_1.appendElemToParent)(todoForm)(addTodoDescContainer);
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([['for', 'addTodo-description']]), (0, element_creators_1.addTextToElem)('Description'), (0, element_creators_1.appendElemToParent)(addTodoDescContainer))((0, element_creators_1.elemCreator)('label')(['label-description']));
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([
        ['id', 'addTodo-description'],
        ['autocomplete', 'on'],
        ['form', 'form-addTodo'],
        ['maxlength', '250'],
        ['name', 'addTodo-description'],
        ['spellcheck', 'true'],
        ['wrap', 'hard'],
    ]), (0, element_creators_1.appendElemToParent)(addTodoDescContainer))((0, element_creators_1.elemCreator)('textarea')(['addTodo-description']));
    const addTodoDateContainer = (0, element_creators_1.elemCreator)('div')(['addTodo-date-container']);
    (0, element_creators_1.appendElemToParent)(todoForm)(addTodoDateContainer);
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('Due date'), (0, element_creators_1.addAttributeToElem)([['for', 'addTodo-dueDate']]), (0, element_creators_1.appendElemToParent)(addTodoDateContainer))((0, element_creators_1.elemCreator)('label')(['label-dueDate']));
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([
        ['type', 'date'],
        ['id', 'addTodo-dueDate'],
        [
            'min',
            `${now.getFullYear()}-${now.getMonth() < 10 ? '0' + now.getMonth() : now.getMonth()}-${now.getDate() < 10 ? '0' + now.getDate() : now.getDate()}`,
        ],
        [
            'max',
            `${now.getFullYear() + 100}-${now.getMonth() < 10 ? '0' + now.getMonth() : now.getMonth()}-${now.getDate() < 10 ? '0' + now.getDate() : now.getDate()}`,
        ],
        ['name', 'addTodo-dueDate'],
        ['placeholder', 'yyyy-mm-dd'],
        ['pattern', '(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}'],
        // ['required', ''],
    ]), (0, element_creators_1.appendElemToParent)(addTodoDateContainer))((0, element_creators_1.elemCreator)('input')(['addTodo-dueDate']));
    const addTodoPriorityContainer = (0, element_creators_1.elemCreator)('div')(['addTodo-priority-container']);
    (0, element_creators_1.appendElemToParent)(todoForm)(addTodoPriorityContainer);
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('Priority level'), (0, element_creators_1.addAttributeToElem)([['for', 'addTodo-selectPriority']]), (0, element_creators_1.appendElemToParent)(addTodoPriorityContainer))((0, element_creators_1.elemCreator)('label')(['label-selectPriority']));
    const selectPriority = (0, element_creators_1.elemCreator)('select')(['addTodo-selectPriority']);
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([
        ['name', 'addTodo-selectPriority'],
        ['id', 'addTodo-selectPriority'],
        ['form', 'form-addTodo'],
        // ['required', ''],
    ]), (0, element_creators_1.appendElemToParent)(addTodoPriorityContainer))(selectPriority);
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('--Please assign a priority--'), (0, element_creators_1.addAttributeToElem)([['value', '']]), (0, element_creators_1.appendElemToParent)(selectPriority))((0, element_creators_1.elemCreator)('option')(['option-selectPriority']));
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([['value', 'low']]), (0, element_creators_1.addTextToElem)('Low'), (0, element_creators_1.appendElemToParent)(selectPriority))((0, element_creators_1.elemCreator)('option')(['option-selectPriority']));
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([['value', 'medium']]), (0, element_creators_1.addTextToElem)('Medium'), (0, element_creators_1.appendElemToParent)(selectPriority))((0, element_creators_1.elemCreator)('option')(['option-selectPriority']));
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([['value', 'high']]), (0, element_creators_1.addTextToElem)('High'), (0, element_creators_1.appendElemToParent)(selectPriority))((0, element_creators_1.elemCreator)('option')(['option-selectPriority']));
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([['value', 'urgent']]), (0, element_creators_1.addTextToElem)('Urgent'), (0, element_creators_1.appendElemToParent)(selectPriority))((0, element_creators_1.elemCreator)('option')(['option-selectPriority']));
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([['value', 'immediate']]), (0, element_creators_1.addTextToElem)('Immediate'), (0, element_creators_1.appendElemToParent)(selectPriority))((0, element_creators_1.elemCreator)('option')(['option-selectPriority']));
    //hidden element to funnel project name to todoform
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([
        ['hidden', ''],
        ['value', `${projectDataName_}`],
        ['name', 'addTodo-projectName'],
        ['type', 'text'],
    ]), (0, element_creators_1.appendElemToParent)(todoForm))((0, element_creators_1.elemCreator)('input')(['addTodo-projectName__hidden']));
    //hidden element to funnel project colour to todoform
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([
        ['hidden', ''],
        ['value', `${projectDataColour_}`],
        ['name', 'addTodo-projectColour'],
        ['type', 'text'],
    ]), (0, element_creators_1.appendElemToParent)(todoForm))((0, element_creators_1.elemCreator)('input')(['addTodo-projectColour__hidden']));
    //
    //
    const addTodoIconsContainer = (0, element_creators_1.elemCreator)('div')(['addTodo-icons-container']);
    (0, element_creators_1.appendElemToParent)(todoForm)(addTodoIconsContainer);
    const bttnCancelTodo = (0, element_creators_1.elemCreator)('button')(['bttn', 'bttn-cancelTodo']);
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([
        ['type', 'click'],
        ['name', 'bttn-cancelTodo'],
        ['form', 'form-addTodo'],
    ]), (0, element_creators_1.appendElemToParent)(addTodoIconsContainer))(bttnCancelTodo);
    (0, element_creators_1.pipe)((0, element_creators_1.addEvtListener)('click')(handleTodoCloseIconClick_1.handleTodoCloseIconClick), (0, element_creators_1.appendElemToParent)(bttnCancelTodo))((0, element_creators_1.createImage)('../../src/assets/icons/x(1).svg')(['icon', 'icon-cancelTodo'])(`icon of symbol 'x' representing close or cancel`)('Cancel'));
    const bttnAddTodo = (0, element_creators_1.elemCreator)('button')(['bttn', 'bttn-addTodo']);
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([
        ['type', 'submit'],
        ['name', 'bttn-addTodo'],
        ['form', 'form-addTodo'],
    ]), (0, element_creators_1.appendElemToParent)(addTodoIconsContainer))(bttnAddTodo);
    (0, element_creators_1.pipe)((0, element_creators_1.appendElemToParent)(bttnAddTodo))((0, element_creators_1.createImage)('../../src/assets/icons/check(1).svg')(['icon', 'icon-addTodo'])(`icon of a checkmark representing add`)('Add Todo'));
};
exports.todoModal = todoModal;


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
const addProjectToSidebar = function (formName_, formColour_) {
    var _a;
    const log = (i) => console.log('\n', i);
    const projectsContainer = document.querySelector('.container-projects');
    const projectContainer = (0, element_creators_1.elemCreator)('div')(['sidebar-project', 'project']);
    (0, element_creators_1.appendElemToParent)(projectsContainer)(projectContainer);
    const projectNamesArr = JSON.parse((_a = localStorage.getItem('projectNames')) !== null && _a !== void 0 ? _a : '');
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([['data-name', `${projectNamesArr.at(-1)}`]]), (0, element_creators_1.addStyleToElem)([['color', `${formColour_}`]]), (0, element_creators_1.addTextToElem)(`${projectNamesArr.at(-1)}`), (0, element_creators_1.appendElemToParent)(projectContainer))((0, element_creators_1.elemCreator)('h4')(['project-text', `text-${projectNamesArr.at(-1)}`]));
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([
        ['data-name', `${projectNamesArr.at(-1)}`],
        ['data-colour', `${formColour_}`],
    ]), 
    // addStyleToElem('background-color')(`${formColour_}`),
    (0, element_creators_1.addEvtListener)('click')(handleAddNewTodoIconClick_1.handleAddNewTodoIconClick), (0, element_creators_1.appendElemToParent)(projectContainer))((0, element_creators_1.createImage)('../../../src/assets/icons/plus.svg')(['icon', 'icon-plus'])('icon of plus symbol')('Add New Todo'));
};
exports.addProjectToSidebar = addProjectToSidebar;


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
    //
    //
    //
};
exports.sidebar = sidebar;


/***/ }),

/***/ "./src/ts/todos/addTodosToContent.ts":
/*!*******************************************!*\
  !*** ./src/ts/todos/addTodosToContent.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addTodosToContent = void 0;
const element_creators_1 = __webpack_require__(/*! ../element-creators */ "./src/ts/element-creators.ts");
const addTodosToContent = function ({ project, todos }) {
    const { projectName, projectColour } = project;
    const { todoName, todoDescription, todoDueDate, todoPriority } = todos[0];
    const content = document.querySelector('.content');
    const todoContentContainer = (0, element_creators_1.elemCreator)('div')(['todoContent-container']);
    (0, element_creators_1.appendElemToParent)(content)(todoContentContainer);
    (0, element_creators_1.pipe)((0, element_creators_1.appendElemToParent)(todoContentContainer))((0, element_creators_1.elemCreator)('div')(['projectName-container']));
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)(`${projectName}`), (0, element_creators_1.addStyleToElem)([['color', `${projectColour}`]]), (0, element_creators_1.appendElemToParent)(todoContentContainer))((0, element_creators_1.elemCreator)('h3')(['heading-text', 'todoContent-projectName']));
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([['for', 'complete']]))((0, element_creators_1.elemCreator)('label')(['label', 'todoContent-label']));
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([
        ['type', 'checkbox'],
        ['id', 'complete'],
        ['name', 'complete'],
        ['value', 'todoContent'],
    ]))((0, element_creators_1.elemCreator)('input')(['todoContent-checkbox']));
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)(`${todoName}`), (0, element_creators_1.appendElemToParent)(todoContentContainer))((0, element_creators_1.elemCreator)('h4')(['todoContent-name']));
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)(`${todoDescription}`), (0, element_creators_1.appendElemToParent)(todoContentContainer))((0, element_creators_1.elemCreator)('p')(['todoContent-description']));
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)(`${todoDueDate}`), (0, element_creators_1.appendElemToParent)(todoContentContainer))((0, element_creators_1.elemCreator)('p')(['todoContent-dueDate']));
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)(`${todoPriority}`), (0, element_creators_1.addStyleToElem)([
        [
            'color',
            `${todoPriority === 'immediate'
                ? 'hsl(0, 100%, 35%)'
                : todoPriority === 'urgent'
                    ? 'hsl(40, 100%, 65%)'
                    : todoPriority === 'high'
                        ? 'hsl(90, 100%, 50%)'
                        : todoPriority === 'medium'
                            ? 'hsl(200, 100%, 50%)'
                            : 'hsl(250, 100%, 70%)'}`,
        ],
    ]), (0, element_creators_1.appendElemToParent)(todoContentContainer))((0, element_creators_1.elemCreator)('p')(['todoContent-priority']));
};
exports.addTodosToContent = addTodosToContent;
// <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
// <label for="vehicle1"> I have a bike</label><br>
// <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
// <label for="vehicle2"> I have a car</label><br>
// <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
// <label for="vehicle3"> I have a boat</label><br>


/***/ }),

/***/ "./src/ts/todos/storeProjectAndTodosFull.ts":
/*!**************************************************!*\
  !*** ./src/ts/todos/storeProjectAndTodosFull.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeProjectAndTodosFull = void 0;
const storeProjectAndTodosFull = function (projectAndTodos_) {
    var _a;
    const currentProjName = projectAndTodos_.project.projectName;
    const currentTodoName = projectAndTodos_.todos[0].todoName;
    const currentTodos = projectAndTodos_.todos[0];
    const storageKeys = new Set();
    Object.keys(localStorage).forEach((key) => {
        storageKeys.add(key);
    });
    //new project
    if (!storageKeys.has(currentProjName)) {
        localStorage.setItem(currentProjName, JSON.stringify(projectAndTodos_));
    }
    else {
        //project already exists
        const currentProjStorage = JSON.parse((_a = localStorage.getItem(currentProjName)) !== null && _a !== void 0 ? _a : '');
        const todoNamesSet = new Set();
        currentProjStorage.todos.forEach((todo) => todoNamesSet.add(todo.todoName));
        //new todoName
        if (!todoNamesSet.has(currentTodoName)) {
            currentProjStorage.todos.push(currentTodos);
            localStorage.setItem(currentProjName, JSON.stringify(currentProjStorage));
        }
        else {
            //todoName taken
            alert(`${currentTodoName} already exists as a project (｡•́︿•̀｡)  Please choose another name or consider editing an existing todo.`);
            return;
        }
    }
    //
    //
};
exports.storeProjectAndTodosFull = storeProjectAndTodosFull;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUJBQU8sQ0FBQyxvQ0FBYTtBQUNyQixrQkFBa0IsbUJBQU8sQ0FBQyx5REFBc0I7QUFDaEQsaUJBQWlCLG1CQUFPLENBQUMscURBQW9CO0FBQzdDLGtCQUFrQixtQkFBTyxDQUFDLHlEQUFzQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvY29udGVudC9jb250ZW50LnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZWxlbWVudC1jcmVhdG9ycy50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2V2ZW50Q0JzL2hhbmRsZUFkZE5ld1Byb2plY3RJY29uQ2xpY2sudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZXZlbnRDQnMvaGFuZGxlUHJvamVjdENsb3NlSWNvbkNsaWNrLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZXZlbnRDQnMvaGFuZGxlUHJvamVjdEZvcm1TdWJtaXQudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVUaGVtZUljb25Ub2dnbGUudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVUb2RvQ2xvc2VJY29uQ2xpY2sudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVUb2RvRm9ybVN1Ym1pdC50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2hlYWRlci9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9tb2RhbHMvcHJvamVjdE1vZGFsLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvbW9kYWxzL3RvZG9Nb2RhbC50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL3Byb2plY3RzL2FkZFByb2plY3RUb1NpZGViYXIudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9zaWRlYmFyL3NpZGViYXIudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy90b2Rvcy9hZGRUb2Rvc1RvQ29udGVudC50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL3RvZG9zL3N0b3JlUHJvamVjdEFuZFRvZG9zRnVsbC50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jb250ZW50ID0gdm9pZCAwO1xuY29uc3QgZWxlbWVudF9jcmVhdG9yc18xID0gcmVxdWlyZShcIi4uL2VsZW1lbnQtY3JlYXRvcnNcIik7XG5jb25zdCBoYW5kbGVUaGVtZUljb25Ub2dnbGVfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVUaGVtZUljb25Ub2dnbGVcIik7XG5jb25zdCBjb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGxvZyA9IChpKSA9PiBjb25zb2xlLmxvZygnXFxuJywgaSk7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290Jyk7XG4gICAgY29uc3QgY29udGVudCA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2NvbnRlbnQnXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHJvb3QpKGNvbnRlbnQpO1xuICAgIGNvbnN0IHRvcCA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2NvbnRlbnQtdG9wJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShjb250ZW50KSh0b3ApO1xuICAgIGNvbnN0IGZvcm0gPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZm9ybScpKFsnZm9ybSddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsnYWN0aW9uJywgJyMnXSxcbiAgICAgICAgWydtZXRob2QnLCAncG9zdCddLFxuICAgICAgICBbJ2lkJywgJ2Zvcm0tc2VhcmNoJ10sXG4gICAgICAgIFsnbmFtZScsICdzZWFyY2gtdG9kbyddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9wKSkoZm9ybSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1snZm9yJywgJ3NlYXJjaCddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShmb3JtKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2xhYmVsJykoWydsYWJlbC1zZWFyY2gnXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWyd0eXBlJywgJ3NlYXJjaCddLFxuICAgICAgICBbJ3BsYWNlaG9sZGVyJywgJ3NlYXJjaCBmb3IgYSB0b2RvIGluIHNlbGVjdGVkIHByb2plY3QnXSxcbiAgICAgICAgWydpZCcsICdzZWFyY2gnXSxcbiAgICAgICAgWyduYW1lJywgJ3NlYXJjaC10b2RvJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShmb3JtKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2lucHV0JykoWydzZWFyY2gnXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ2NsaWNrJykoaGFuZGxlVGhlbWVJY29uVG9nZ2xlXzEuaGFuZGxlVGhlbWVJY29uVG9nZ2xlKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvcCkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuY3JlYXRlSW1hZ2UpKCcuLi8uLi9zcmMvYXNzZXRzL2ljb25zL21vb24uc3ZnJykoWydpY29uJywgJ2ljb24tbW9vbiddKSgnaWNvbiBvZiBtb29uIHJlcHJlc2VudGluZyBkYXJrIG1vZGUnKSgnRGFyayBNb2RlJykpO1xufTtcbmV4cG9ydHMuY29udGVudCA9IGNvbnRlbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucGlwZSA9IGV4cG9ydHMuYWRkU3R5bGVUb0VsZW0gPSBleHBvcnRzLmFkZEV2dExpc3RlbmVyID0gZXhwb3J0cy5jcmVhdGVJbWFnZSA9IGV4cG9ydHMuYWRkQXR0cmlidXRlVG9FbGVtID0gZXhwb3J0cy5hZGRUZXh0VG9FbGVtID0gZXhwb3J0cy5hcHBlbmRFbGVtVG9QYXJlbnQgPSBleHBvcnRzLmVsZW1DcmVhdG9yID0gdm9pZCAwO1xuY29uc3QgZWxlbUNyZWF0b3IgPSAoZWxlbV8pID0+IChjbGFzc18pID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtXyk7XG4gICAgcmV0dXJuIGNsYXNzXy5yZWR1Y2UoKGVsZW0sIGN1cnJDbGFzcykgPT4ge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY3VyckNsYXNzKTtcbiAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgfSwgZWxlbWVudCk7XG59O1xuZXhwb3J0cy5lbGVtQ3JlYXRvciA9IGVsZW1DcmVhdG9yO1xuY29uc3QgYWRkQXR0cmlidXRlVG9FbGVtID0gKGF0dHJWYWxzXykgPT4gKGVsZW1fKSA9PiB7XG4gICAgcmV0dXJuIGF0dHJWYWxzXy5yZWR1Y2UoKGVsZW1lbnQsIGN1cnIpID0+IHtcbiAgICAgICAgaWYgKGN1cnIubGVuZ3RoID4gMilcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWxlbWVudC5zZXRBdHRyaWJ1dGUoY3VyclswXSwgY3VyclsxXSk7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0sIGVsZW1fKTtcbn07XG5leHBvcnRzLmFkZEF0dHJpYnV0ZVRvRWxlbSA9IGFkZEF0dHJpYnV0ZVRvRWxlbTtcbmNvbnN0IGFkZFN0eWxlVG9FbGVtID0gKHN0eWxlUHJvcFZhbHNfKSA9PiAoZWxlbV8pID0+IHtcbiAgICByZXR1cm4gc3R5bGVQcm9wVmFsc18ucmVkdWNlKChlbGVtZW50LCBjdXJyKSA9PiB7XG4gICAgICAgIGlmIChjdXJyLmxlbmd0aCA+IDIpXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoY3VyclswXSwgY3VyclsxXSk7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0sIGVsZW1fKTtcbn07XG5leHBvcnRzLmFkZFN0eWxlVG9FbGVtID0gYWRkU3R5bGVUb0VsZW07XG5jb25zdCBhZGRUZXh0VG9FbGVtID0gKHRleHRfKSA9PiAoZWxlbV8pID0+IHtcbiAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHRfKTtcbiAgICBlbGVtXyA9PT0gbnVsbCB8fCBlbGVtXyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWxlbV8uYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuICAgIHJldHVybiBlbGVtXztcbn07XG5leHBvcnRzLmFkZFRleHRUb0VsZW0gPSBhZGRUZXh0VG9FbGVtO1xuY29uc3QgYXBwZW5kRWxlbVRvUGFyZW50ID0gKHBhcmVudF8pID0+IChjaGlsZF8pID0+IHtcbiAgICBpZiAoY2hpbGRfKVxuICAgICAgICBwYXJlbnRfID09PSBudWxsIHx8IHBhcmVudF8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmVudF8uYXBwZW5kQ2hpbGQoY2hpbGRfKTtcbn07XG5leHBvcnRzLmFwcGVuZEVsZW1Ub1BhcmVudCA9IGFwcGVuZEVsZW1Ub1BhcmVudDtcbmNvbnN0IGNyZWF0ZUltYWdlID0gKHNvdXJjZV8pID0+IChjbGFzc18pID0+IChhbHRfKSA9PiAodGl0bGVfKSA9PiB7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBzb3VyY2VfO1xuICAgIGltYWdlLmFsdCA9IGFsdF87XG4gICAgaW1hZ2UudGl0bGUgPSB0aXRsZV87XG4gICAgcmV0dXJuIGNsYXNzXy5yZWR1Y2UoKGVsZW0sIGN1cnJDbGFzcykgPT4ge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY3VyckNsYXNzKTtcbiAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgfSwgaW1hZ2UpO1xufTtcbmV4cG9ydHMuY3JlYXRlSW1hZ2UgPSBjcmVhdGVJbWFnZTtcbmNvbnN0IGFkZEV2dExpc3RlbmVyID0gKGV2dF8pID0+IChoYW5kbGVFdnRfKSA9PiAoZWxlbV8pID0+IHtcbiAgICBlbGVtXyA9PT0gbnVsbCB8fCBlbGVtXyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWxlbV8uYWRkRXZlbnRMaXN0ZW5lcihldnRfLCBoYW5kbGVFdnRfKTtcbiAgICByZXR1cm4gZWxlbV87XG59O1xuZXhwb3J0cy5hZGRFdnRMaXN0ZW5lciA9IGFkZEV2dExpc3RlbmVyO1xuLy8gZnVuY3Rpb24gcGlwZTxWPiguLi5mdW5jczogQXJyYXk8KF86IFYpID0+IFY+KTogKF86IFYpID0+IFYgfCBudWxsIHwgdm9pZCB7XG4vLyBcdHJldHVybiBmdW5jdGlvbiAodmFsdWU6IFYpIHtcbi8vIFx0XHRyZXR1cm4gZnVuY3MucmVkdWNlKCh2YWwsIGZ1bmMpID0+IHtcbi8vIFx0XHRcdHJldHVybiBmdW5jKHZhbClcbi8vIFx0XHR9LCB2YWx1ZSlcbi8vIFx0fVxuLy8gfVxuY29uc3QgcGlwZSA9ICguLi5mdW5jcykgPT4gKHZhbHVlKSA9PiBmdW5jcy5yZWR1Y2UoKHJlcywgZnVuYykgPT4gZnVuYyhyZXMpLCB2YWx1ZSk7XG5leHBvcnRzLnBpcGUgPSBwaXBlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZUFkZE5ld1Byb2plY3RJY29uQ2xpY2sgPSB2b2lkIDA7XG5jb25zdCBwcm9qZWN0TW9kYWxfMSA9IHJlcXVpcmUoXCIuLi9tb2RhbHMvcHJvamVjdE1vZGFsXCIpO1xuY29uc3QgaGFuZGxlQWRkTmV3UHJvamVjdEljb25DbGljayA9IGZ1bmN0aW9uIChldikge1xuICAgICgwLCBwcm9qZWN0TW9kYWxfMS5wcm9qZWN0TW9kYWwpKCk7XG4gICAgY29uc3QgYWRkUHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3QtY29udGFpbmVyJyk7XG4gICAgaWYgKGFkZFByb2plY3RNb2RhbCkge1xuICAgICAgICBhZGRQcm9qZWN0TW9kYWwuc3R5bGUudmlzaWJpbGl0eSA9XG4gICAgICAgICAgICAoYWRkUHJvamVjdE1vZGFsID09PSBudWxsIHx8IGFkZFByb2plY3RNb2RhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWRkUHJvamVjdE1vZGFsLnN0eWxlLnZpc2liaWxpdHkpID09PSAndmlzaWJsZScgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJztcbiAgICB9XG59O1xuZXhwb3J0cy5oYW5kbGVBZGROZXdQcm9qZWN0SWNvbkNsaWNrID0gaGFuZGxlQWRkTmV3UHJvamVjdEljb25DbGljaztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrID0gdm9pZCAwO1xuY29uc3QgdG9kb01vZGFsXzEgPSByZXF1aXJlKFwiLi4vbW9kYWxzL3RvZG9Nb2RhbFwiKTtcbmNvbnN0IGhhbmRsZUFkZE5ld1RvZG9JY29uQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBjb25zdCBwcm9qZWN0RGF0YU5hbWUgPSAoX2EgPSB0aGlzLmRhdGFzZXQubmFtZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJyc7XG4gICAgY29uc3QgcHJvamVjdERhdGFDb2xvdXIgPSAoX2IgPSB0aGlzLmRhdGFzZXQuY29sb3VyKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnJztcbiAgICAoMCwgdG9kb01vZGFsXzEudG9kb01vZGFsKShwcm9qZWN0RGF0YU5hbWUsIHByb2plY3REYXRhQ29sb3VyKTtcbiAgICBjb25zdCBhZGRUb2RvTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jb250YWluZXInKTtcbiAgICBpZiAoYWRkVG9kb01vZGFsKVxuICAgICAgICBhZGRUb2RvTW9kYWwuc3R5bGUudmlzaWJpbGl0eSA9XG4gICAgICAgICAgICAoYWRkVG9kb01vZGFsID09PSBudWxsIHx8IGFkZFRvZG9Nb2RhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWRkVG9kb01vZGFsLnN0eWxlLnZpc2liaWxpdHkpID09PSAndmlzaWJsZScgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJztcbn07XG5leHBvcnRzLmhhbmRsZUFkZE5ld1RvZG9JY29uQ2xpY2sgPSBoYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZVByb2plY3RDbG9zZUljb25DbGljayA9IHZvaWQgMDtcbmNvbnN0IGhhbmRsZVByb2plY3RDbG9zZUljb25DbGljayA9IGZ1bmN0aW9uIChldikge1xuICAgIGNvbnN0IGFkZFByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgIC8vIGlmIChhZGRQcm9qZWN0TW9kYWwpXG4gICAgLy8gXHRhZGRQcm9qZWN0TW9kYWwuc3R5bGUudmlzaWJpbGl0eSA9XG4gICAgLy8gXHRcdGFkZFByb2plY3RNb2RhbD8uc3R5bGUudmlzaWJpbGl0eSA9PT0gJ3Zpc2libGUnID8gJ2hpZGRlbicgOiAndmlzaWJsZSdcbiAgICBpZiAoYWRkUHJvamVjdE1vZGFsKVxuICAgICAgICBhZGRQcm9qZWN0TW9kYWwucmVtb3ZlKCk7XG59O1xuZXhwb3J0cy5oYW5kbGVQcm9qZWN0Q2xvc2VJY29uQ2xpY2sgPSBoYW5kbGVQcm9qZWN0Q2xvc2VJY29uQ2xpY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlUHJvamVjdEZvcm1TdWJtaXQgPSB2b2lkIDA7XG5jb25zdCBhZGRQcm9qZWN0VG9TaWRlYmFyXzEgPSByZXF1aXJlKFwiLi4vcHJvamVjdHMvYWRkUHJvamVjdFRvU2lkZWJhclwiKTtcbmNvbnN0IGhhbmRsZVByb2plY3RGb3JtU3VibWl0ID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgYWRkUHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3QtY29udGFpbmVyJyk7XG4gICAgY29uc3QgcHJvamVjdEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xuICAgIGNvbnN0IHByb2plY3RGb3JtTmFtZSA9IChfYiA9IChfYSA9IHByb2plY3RGb3JtRGF0YS5nZXQoJ2FkZFByb2plY3QtbmFtZScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9TdHJpbmcoKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJyc7XG4gICAgY29uc3QgcHJvamVjdEZvcm1Db2xvdXIgPSAoX2QgPSAoX2MgPSBwcm9qZWN0Rm9ybURhdGEuZ2V0KCdhZGRQcm9qZWN0LWNvbG91cicpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MudG9TdHJpbmcoKSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogJyc7XG4gICAgLy9pZiAncHJvamVjdE5hbWVzJyBkb2Vzbid0IGV4aXN0LCBjcmVhdGUgaXQsIG90aGVyd2lzZSBkbyBub3RoaW5nXG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdE5hbWVzJykpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3ROYW1lcycsIEpTT04uc3RyaW5naWZ5KFtdKSk7XG4gICAgfVxuICAgIGNvbnN0IHN0b3JlUHJvamVjdCA9IChmdW5jdGlvbiAocHJvamVjdEZvcm1OYW1lXykge1xuICAgICAgICAvL2lmIGtleSBpbiBsb2NhbHN0b3JhZ2UgaXMgcHJvamVjdE5hbWVzLCB0aGVuIGdldCB0aGUgdmFsdWVzIGFzXG4gICAgICAgIC8vYW4gYXJyYXlcbiAgICAgICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdwcm9qZWN0TmFtZXMnKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5c1NldCA9IG5ldyBTZXQoSlNPTi5wYXJzZSgoX2EgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJykpO1xuICAgICAgICAgICAgICAgIC8vaWYgbmFtZSBhbHJlYWR5IHByZXNlbnRcbiAgICAgICAgICAgICAgICBpZiAoa2V5c1NldC5oYXMocHJvamVjdEZvcm1OYW1lXykpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoYCR7cHJvamVjdEZvcm1OYW1lX30gYWxyZWFkeSBleGlzdHMgYXMgYSBwcm9qZWN0ICjvvaHigKLMge+4v+KAosyA772hKSAgUGxlYXNlIGNob29zZSBhbm90aGVyIG5hbWUuYCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vaWYgbmV3IG5hbWUsIHB1c2ggdG8gYXJyIGFuZCB0aGVuIHN0b3JlIGFycmF5IGluIGxvY2FsU3RvcmFnZVxuICAgICAgICAgICAgICAgICAgICBrZXlzU2V0LmFkZChwcm9qZWN0Rm9ybU5hbWVfKTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShBcnJheS5mcm9tKGtleXNTZXQpKSk7XG4gICAgICAgICAgICAgICAgICAgICgwLCBhZGRQcm9qZWN0VG9TaWRlYmFyXzEuYWRkUHJvamVjdFRvU2lkZWJhcikocHJvamVjdEZvcm1OYW1lLCBwcm9qZWN0Rm9ybUNvbG91cik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KShwcm9qZWN0Rm9ybU5hbWUpO1xuICAgIC8vXG4gICAgLy9cbiAgICAvL1xuICAgIC8vIGlmIChhZGRQcm9qZWN0TW9kYWwpXG4gICAgLy8gXHRhZGRQcm9qZWN0TW9kYWwuc3R5bGUudmlzaWJpbGl0eSA9XG4gICAgLy8gXHRcdGFkZFByb2plY3RNb2RhbC5zdHlsZS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJyA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nXG4gICAgYWRkUHJvamVjdE1vZGFsID09PSBudWxsIHx8IGFkZFByb2plY3RNb2RhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWRkUHJvamVjdE1vZGFsLnJlbW92ZSgpO1xufTtcbmV4cG9ydHMuaGFuZGxlUHJvamVjdEZvcm1TdWJtaXQgPSBoYW5kbGVQcm9qZWN0Rm9ybVN1Ym1pdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVUaGVtZUljb25Ub2dnbGUgPSB2b2lkIDA7XG5jb25zdCBoYW5kbGVUaGVtZUljb25Ub2dnbGUgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICBjb25zb2xlLmxvZyhldik7XG59O1xuZXhwb3J0cy5oYW5kbGVUaGVtZUljb25Ub2dnbGUgPSBoYW5kbGVUaGVtZUljb25Ub2dnbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlVG9kb0Nsb3NlSWNvbkNsaWNrID0gdm9pZCAwO1xuY29uc3QgaGFuZGxlVG9kb0Nsb3NlSWNvbkNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRvZG9Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lcicpO1xuICAgIC8vIGlmICh0b2RvTW9kYWwpXG4gICAgLy8gXHR0b2RvTW9kYWwuc3R5bGUudmlzaWJpbGl0eSA9IHRvZG9Nb2RhbC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG4gICAgLy8gXHRcdD8gJ2hpZGRlbidcbiAgICAvLyBcdFx0OiAndmlzaWJsZSdcbiAgICBpZiAodG9kb01vZGFsKVxuICAgICAgICB0b2RvTW9kYWwucmVtb3ZlKCk7XG59O1xuZXhwb3J0cy5oYW5kbGVUb2RvQ2xvc2VJY29uQ2xpY2sgPSBoYW5kbGVUb2RvQ2xvc2VJY29uQ2xpY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlVG9kb0Zvcm1TdWJtaXQgPSB2b2lkIDA7XG5jb25zdCBzdG9yZVByb2plY3RBbmRUb2Rvc0Z1bGxfMSA9IHJlcXVpcmUoXCIuLi90b2Rvcy9zdG9yZVByb2plY3RBbmRUb2Rvc0Z1bGxcIik7XG5jb25zdCBhZGRUb2Rvc1RvQ29udGVudF8xID0gcmVxdWlyZShcIi4uL3RvZG9zL2FkZFRvZG9zVG9Db250ZW50XCIpO1xuY29uc3QgaGFuZGxlVG9kb0Zvcm1TdWJtaXQgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZiwgX2csIF9oLCBfaiwgX2ssIF9sLCBfbTtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGxvZyA9IChpKSA9PiBjb25zb2xlLmxvZygnXFxuJywgaSk7XG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHRvZG9Gb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcbiAgICBjb25zdCB0b2RvRm9ybVByb2plY3ROYW1lID0gKF9iID0gKF9hID0gdG9kb0Zvcm1EYXRhLmdldCgnYWRkVG9kby1wcm9qZWN0TmFtZScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9TdHJpbmcoKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJyc7XG4gICAgY29uc3QgdG9kb0Zvcm1Qcm9qZWN0Q29sb3VyID0gKF9kID0gKF9jID0gdG9kb0Zvcm1EYXRhLmdldCgnYWRkVG9kby1wcm9qZWN0Q29sb3VyJykpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy50b1N0cmluZygpKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiAnJztcbiAgICBjb25zdCB0b2RvRm9ybU5hbWUgPSAoX2YgPSAoX2UgPSB0b2RvRm9ybURhdGEuZ2V0KCdhZGRUb2RvLW5hbWUnKSkgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLnRvU3RyaW5nKCkpICE9PSBudWxsICYmIF9mICE9PSB2b2lkIDAgPyBfZiA6ICcnO1xuICAgIGNvbnN0IHRvZG9Gb3JtRGVzY3JpcHRpb24gPSAoX2ggPSAoX2cgPSB0b2RvRm9ybURhdGEuZ2V0KCdhZGRUb2RvLWRlc2NyaXB0aW9uJykpID09PSBudWxsIHx8IF9nID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZy50b1N0cmluZygpKSAhPT0gbnVsbCAmJiBfaCAhPT0gdm9pZCAwID8gX2ggOiAnJztcbiAgICBjb25zdCB0b2RvRm9ybUR1ZURhdGUgPSAoX2sgPSAoX2ogPSB0b2RvRm9ybURhdGEuZ2V0KCdhZGRUb2RvLWR1ZURhdGUnKSkgPT09IG51bGwgfHwgX2ogPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9qLnRvU3RyaW5nKCkpICE9PSBudWxsICYmIF9rICE9PSB2b2lkIDAgPyBfayA6ICcnO1xuICAgIGNvbnN0IHRvZG9Gb3JtU2VsZWN0UHJpb3JpdHkgPSAoX20gPSAoX2wgPSB0b2RvRm9ybURhdGEuZ2V0KCdhZGRUb2RvLXNlbGVjdFByaW9yaXR5JykpID09PSBudWxsIHx8IF9sID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbC50b1N0cmluZygpKSAhPT0gbnVsbCAmJiBfbSAhPT0gdm9pZCAwID8gX20gOiAnJztcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIC8vcmV0dXJucyBkYXRlIG9uZSB5ZWFyIGZyb20gY3VycmVudFxuICAgIGNvbnN0IHNhbXBsZUxvd0R1ZURhdGUgPSAobm93KSA9PiB7XG4gICAgICAgIGxldCBkYXkgPSBub3cuZ2V0RGF0ZSgpO1xuICAgICAgICBsZXQgbW9udGggPSBub3cuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgIGNvbnN0IHllYXIgPSBub3cuZ2V0RnVsbFllYXIoKSArIDE7XG4gICAgICAgIHJldHVybiBgJHt5ZWFyfS0ke21vbnRoIDwgMTAgPyAnMCcgKyBtb250aCA6IG1vbnRofS0ke2RheSA8IDEwID8gJzAnICsgZGF5IDogZGF5fWA7XG4gICAgfTtcbiAgICAvL3JldHVybnMgZGF0ZSBvbmUgbW9udGggZnJvbSBjdXJyZW50XG4gICAgY29uc3Qgc2FtcGxlTWVkRHVlRGF0ZSA9IChub3cpID0+IHtcbiAgICAgICAgbGV0IG1vbnRoID0gbm93LmdldE1vbnRoKCk7XG4gICAgICAgIG1vbnRoID0gbW9udGggPD0gMTAgPyBtb250aCArIDEgOiBtb250aDtcbiAgICAgICAgbW9udGggPSBtb250aCArIDE7XG4gICAgICAgIHJldHVybiBgJHtub3cuZ2V0RnVsbFllYXIoKX0tJHttb250aCA8IDEwID8gJzAnICsgbW9udGggOiBtb250aH0tJHtub3cuZ2V0RGF0ZSgpIDwgMTAgPyAnMCcgKyBub3cuZ2V0RGF0ZSgpIDogbm93LmdldERhdGUoKX1gO1xuICAgIH07XG4gICAgLy9yZXR1cm5zIGRhdGUgb25lIGRheSBmcm9tIGN1cnJlbnRcbiAgICBjb25zdCBzYW1wbGVVcmdlbnREdWVEYXRlID0gKG5vdykgPT4ge1xuICAgICAgICBsZXQgZGF5ID0gbm93LmdldERhdGUoKTtcbiAgICAgICAgZGF5ID0gZGF5IDwgMjYgPyBkYXkgKyAyIDogZGF5O1xuICAgICAgICBsZXQgbW9udGggPSBub3cuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgIHJldHVybiBgJHtub3cuZ2V0RnVsbFllYXIoKX0tJHttb250aCA8IDEwID8gJzAnICsgbW9udGggOiBtb250aH0tJHtkYXkgPCAxMCA/ICcwJyArIGRheSA6IGRheX1gO1xuICAgIH07XG4gICAgY29uc3Qgc2FtcGxlUHJvamVjdCA9IHtcbiAgICAgICAgcHJvamVjdDogXG4gICAgICAgIC8vc2FtcGxlIHByb2plY3QgdG8gZGlzcGxheSBpbml0aWFsbHlcbiAgICAgICAgeyBwcm9qZWN0TmFtZTogJ1NhbXBsZSBQcm9qZWN0JywgcHJvamVjdENvbG91cjogJyM0OGQxY2MnIH0sXG4gICAgICAgIHRvZG9zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdG9kb05hbWU6IGBGaW5pc2ggJ1RoZSBGYWRlZCBTdW46IEtlc3JpdGgnYCxcbiAgICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb246ICdGaW5pc2ggcmVhZGluZyB0aGUgYm9vayAtIHJldHVybiBzb29uIScsXG4gICAgICAgICAgICAgICAgdG9kb0R1ZURhdGU6IGAke3NhbXBsZVVyZ2VudER1ZURhdGUobm93KX1gLFxuICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eTogJ3VyZ2VudCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRvZG9OYW1lOiAnVmV0IEFwcG9pbnRtZW50JyxcbiAgICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb246ICdUYWtlIE5pZ2h0ZXllcyB0byB0aGUgdmV0IGZvciByb3V0aW5lIGNoZWNrdXAnLFxuICAgICAgICAgICAgICAgIHRvZG9EdWVEYXRlOiBgJHtzYW1wbGVNZWREdWVEYXRlKG5vdyl9YCxcbiAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHk6ICdtZWRpdW0nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0b2RvTmFtZTogJ0JhY2twYWNraW5nIHRyaXAgdG8gTmVwYWwnLFxuICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbjogJ1BsYW4gcm91dGUsIHN1cHBsaWVzIGFuZCBhcHBseSBmb3IgdmlzYScsXG4gICAgICAgICAgICAgICAgdG9kb0R1ZURhdGU6IGAke3NhbXBsZUxvd0R1ZURhdGUobm93KX1gLFxuICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eTogJ2xvdycsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH07XG4gICAgY29uc3QgcHJvamVjdHNBbmRUb2Rvc0ZhY3RvcnkgPSBmdW5jdGlvbiAocHJvamVjdE5hbWUsIHByb2plY3RDb2xvdXIsIHRvZG9OYW1lLCB0b2RvRGVzY3JpcHRpb24sIHRvZG9EdWVEYXRlLCB0b2RvUHJpb3JpdHkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb2plY3Q6IHsgcHJvamVjdE5hbWUsIHByb2plY3RDb2xvdXIgfSxcbiAgICAgICAgICAgIHRvZG9zOiBbeyB0b2RvTmFtZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvRHVlRGF0ZSwgdG9kb1ByaW9yaXR5IH1dLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgY29uc3Qgc3RvcmVTYW1wbGVQcm9qZWN0ID0gKGZ1bmN0aW9uIChzYW1wbGVQcm9qZWN0Xykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzYW1wbGVQcm9qZWN0Xy5wcm9qZWN0LnByb2plY3ROYW1lLCBKU09OLnN0cmluZ2lmeShzYW1wbGVQcm9qZWN0XykpO1xuICAgIH0pKHNhbXBsZVByb2plY3QpO1xuICAgIGNvbnN0IHByb2plY3RBbmRUb2RvcyA9IHByb2plY3RzQW5kVG9kb3NGYWN0b3J5KHRvZG9Gb3JtUHJvamVjdE5hbWUsIHRvZG9Gb3JtUHJvamVjdENvbG91ciwgdG9kb0Zvcm1OYW1lLCB0b2RvRm9ybURlc2NyaXB0aW9uLCB0b2RvRm9ybUR1ZURhdGUsIHRvZG9Gb3JtU2VsZWN0UHJpb3JpdHkpO1xuICAgICgwLCBzdG9yZVByb2plY3RBbmRUb2Rvc0Z1bGxfMS5zdG9yZVByb2plY3RBbmRUb2Rvc0Z1bGwpKHByb2plY3RBbmRUb2Rvcyk7XG4gICAgKDAsIGFkZFRvZG9zVG9Db250ZW50XzEuYWRkVG9kb3NUb0NvbnRlbnQpKHByb2plY3RBbmRUb2Rvcyk7XG4gICAgdG9kb0NvbnRhaW5lciA9PT0gbnVsbCB8fCB0b2RvQ29udGFpbmVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0b2RvQ29udGFpbmVyLnJlbW92ZSgpO1xufTtcbmV4cG9ydHMuaGFuZGxlVG9kb0Zvcm1TdWJtaXQgPSBoYW5kbGVUb2RvRm9ybVN1Ym1pdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oZWFkZXIgPSB2b2lkIDA7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IGhlYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBsb2cgPSAoaSkgPT4gY29uc29sZS5sb2coJ1xcbicsIGkpO1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpO1xuICAgIGNvbnN0IGhlYWRlciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2hlYWRlciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkocm9vdCkoaGVhZGVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ1RvZG8gTGlzdCBBcHAnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGhlYWRlcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdoMScpKFsndGl0bGUnLCAnaGVhZGVyLXRpdGxlJ10pKTtcbn07XG5leHBvcnRzLmhlYWRlciA9IGhlYWRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wcm9qZWN0TW9kYWwgPSB2b2lkIDA7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IGhhbmRsZVByb2plY3RDbG9zZUljb25DbGlja18xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZVByb2plY3RDbG9zZUljb25DbGlja1wiKTtcbmNvbnN0IGhhbmRsZVByb2plY3RGb3JtU3VibWl0XzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlUHJvamVjdEZvcm1TdWJtaXRcIik7XG5jb25zdCBwcm9qZWN0TW9kYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gICAgLy9hZGRQcm9qZWN0IG1vZGFsXG4gICAgY29uc3QgYWRkUHJvamVjdENvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2FkZFByb2plY3QtY29udGFpbmVyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzaWRlYmFyKShhZGRQcm9qZWN0Q29udGFpbmVyKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0SGVhZGluZ0NvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2FkZFByb2plY3RIZWFkaW5nLWNvbnRhaW5lciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdENvbnRhaW5lcikoYWRkUHJvamVjdEhlYWRpbmdDb250YWluZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnQWRkIHByb2plY3QnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFByb2plY3RIZWFkaW5nQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2gzJykoWydoZWFkaW5nLXRleHQnLCAndGV4dC1hZGRQcm9qZWN0J10pKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdmb3JtJykoWydmb3JtLWFkZFByb2plY3QnXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ2FjdGlvbicsICcjJ10sXG4gICAgICAgIFsnbWV0aG9kJywgJ3Bvc3QnXSxcbiAgICAgICAgWydpZCcsICdmb3JtLWFkZFByb2plY3QnXSxcbiAgICAgICAgWyduYW1lJywgJ2Zvcm0tYWRkUHJvamVjdCddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnc3VibWl0JykoaGFuZGxlUHJvamVjdEZvcm1TdWJtaXRfMS5oYW5kbGVQcm9qZWN0Rm9ybVN1Ym1pdCksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0Q29udGFpbmVyKSkoYWRkUHJvamVjdEZvcm0pO1xuICAgIGNvbnN0IGFkZFByb2plY3ROYW1lQ29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnYWRkUHJvamVjdC1uYW1lLWNvbnRhaW5lciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdEZvcm0pKGFkZFByb2plY3ROYW1lQ29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydmb3InLCAnYWRkUHJvamVjdC1uYW1lJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnTmFtZScpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdE5hbWVDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnbGFiZWwnKShbJ2xhYmVsLW5hbWUnXSkpO1xuICAgIC8vaW5wdXQgbmFtZVxuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWydpZCcsICdhZGRQcm9qZWN0LW5hbWUnXSxcbiAgICAgICAgWyd0eXBlJywgJ3RleHQnXSxcbiAgICAgICAgWydtaW5sZW5ndGgnLCAnMiddLFxuICAgICAgICBbJ21heGxlbmd0aCcsICcyMCddLFxuICAgICAgICBbJ3BhdHRlcm4nLCAnXlthLXpBLVpdW2EtekEtWjAtOS1fLl17MSwyMH0kJ10sXG4gICAgICAgIFsncGxhY2Vob2xkZXInLCAnRW50ZXIgbmFtZSBvZiBwcm9qZWN0J10sXG4gICAgICAgIFsnbmFtZScsICdhZGRQcm9qZWN0LW5hbWUnXSxcbiAgICAgICAgWydyZXF1aXJlZCcsICcnXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFByb2plY3ROYW1lQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2lucHV0JykoWydhZGRQcm9qZWN0LW5hbWUnXSkpO1xuICAgIGNvbnN0IGFkZFByb2plY3RDb2xvdXJDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydhZGRQcm9qZWN0LWNvbG91ci1jb250YWluZXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFByb2plY3RGb3JtKShhZGRQcm9qZWN0Q29sb3VyQ29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydmb3InLCAnYWRkUHJvamVjdC1jb2xvdXInXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdDb2xvdXInKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFByb2plY3RDb2xvdXJDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnbGFiZWwnKShbJ2xhYmVsLWNvbG91ciddKSk7XG4gICAgLy9pbnB1dCBjb2xvdXJcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsndHlwZScsICdjb2xvciddLFxuICAgICAgICBbJ2lkJywgJ2FkZFByb2plY3QtY29sb3VyJ10sXG4gICAgICAgIFsnbmFtZScsICdhZGRQcm9qZWN0LWNvbG91ciddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdENvbG91ckNvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdpbnB1dCcpKFsnYWRkUHJvamVjdC1jb2xvdXInXSkpO1xuICAgIGNvbnN0IGFkZFByb2plY3RJY29uc0NvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2FkZFByb2plY3RJY29ucy1jb250YWluZXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFByb2plY3RGb3JtKShhZGRQcm9qZWN0SWNvbnNDb250YWluZXIpO1xuICAgIGNvbnN0IGJ0dG5DYW5jZWxQcm9qZWN0ID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2J1dHRvbicpKFsnYnR0bicsICdidHRuLWNhbmNlbFByb2plY3QnXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVQcm9qZWN0Q2xvc2VJY29uQ2xpY2tfMS5oYW5kbGVQcm9qZWN0Q2xvc2VJY29uQ2xpY2spLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ3R5cGUnLCAnYnV0dG9uJ10sXG4gICAgICAgIFsnbmFtZScsICdidHRuLWNhbmNlbCddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdEljb25zQ29udGFpbmVyKSkoYnR0bkNhbmNlbFByb2plY3QpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGJ0dG5DYW5jZWxQcm9qZWN0KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5jcmVhdGVJbWFnZSkoJy4uLy4uL3NyYy9hc3NldHMvaWNvbnMveCgxKS5zdmcnKShbJ2ljb24nLCAnaWNvbi1jYW5jZWxQcm9qZWN0J10pKGBpY29uIG9mIHN5bWJvbCAneCcgcmVwcmVzZW50aW5nIGNhbmNlbCBvciBjbG9zZWApKCdDYW5jZWwnKSk7XG4gICAgY29uc3QgYnR0bkFkZFByb2plY3QgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnYnV0dG9uJykoWydidHRuJywgJ2J0dG4tYWRkUHJvamVjdCddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsndHlwZScsICdzdWJtaXQnXSxcbiAgICAgICAgWyduYW1lJywgJ2J0dG4tYWRkUHJvamVjdCddLFxuICAgICAgICBbJ2Zvcm0nLCAnZm9ybS1hZGRQcm9qZWN0J10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0SWNvbnNDb250YWluZXIpKShidHRuQWRkUHJvamVjdCk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYnR0bkFkZFByb2plY3QpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmNyZWF0ZUltYWdlKSgnLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy9jaGVjaygxKS5zdmcnKShbJ2ljb24nLCAnaWNvbi1hZGRQcm9qZWN0J10pKGBpY29uIG9mIHN5bWJvbCAnY2hlY2snIHJlcHJlc2VudGluZyBhZGRgKSgnQWRkIFByb2plY3QnKSk7XG59O1xuZXhwb3J0cy5wcm9qZWN0TW9kYWwgPSBwcm9qZWN0TW9kYWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudG9kb01vZGFsID0gdm9pZCAwO1xuY29uc3QgZWxlbWVudF9jcmVhdG9yc18xID0gcmVxdWlyZShcIi4uL2VsZW1lbnQtY3JlYXRvcnNcIik7XG5jb25zdCBoYW5kbGVUb2RvQ2xvc2VJY29uQ2xpY2tfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVUb2RvQ2xvc2VJY29uQ2xpY2tcIik7XG5jb25zdCBoYW5kbGVUb2RvRm9ybVN1Ym1pdF8xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZVRvZG9Gb3JtU3VibWl0XCIpO1xuY29uc3QgdG9kb01vZGFsID0gZnVuY3Rpb24gKHByb2plY3REYXRhTmFtZV8sIHByb2plY3REYXRhQ29sb3VyXykge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpO1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3RvZG8tY29udGFpbmVyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShyb290KSh0b2RvQ29udGFpbmVyKTtcbiAgICBjb25zdCB0b2RvRm9ybSA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdmb3JtJykoWydmb3JtJywgJ2Zvcm0tYWRkVG9kbyddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdzdWJtaXQnKShoYW5kbGVUb2RvRm9ybVN1Ym1pdF8xLmhhbmRsZVRvZG9Gb3JtU3VibWl0KSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWydhY3Rpb24nLCAnIyddLFxuICAgICAgICBbJ21ldGhvZCcsICdwb3N0J10sXG4gICAgICAgIFsnaWQnLCAnZm9ybS1hZGRUb2RvJ10sXG4gICAgICAgIFsnbmFtZScsICdmb3JtLWFkZFRvZG8nXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZG9Db250YWluZXIpKSh0b2RvRm9ybSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdBZGQgdGFzayB0b2RvJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b2RvRm9ybSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdoMycpKFsnaGVhZGluZy10ZXh0JywgJ3RleHQtYWRkVG9kbyddKSk7XG4gICAgY29uc3QgYWRkVG9kb05hbWVDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydhZGRUb2RvLW5hbWUtY29udGFpbmVyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b2RvRm9ybSkoYWRkVG9kb05hbWVDb250YWluZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ2ZvcicsICdhZGRUb2RvLW5hbWUnXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdOYW1lJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRUb2RvTmFtZUNvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdsYWJlbCcpKFsnbGFiZWwtbmFtZSddKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ3R5cGUnLCAndGV4dCddLFxuICAgICAgICBbJ2Zvcm0nLCAnZm9ybS1hZGRUb2RvJ10sXG4gICAgICAgIFsnaWQnLCAnYWRkVG9kby1uYW1lJ10sXG4gICAgICAgIFsnbmFtZScsICdhZGRUb2RvLW5hbWUnXSxcbiAgICAgICAgWydtaW5sZW5ndGgnLCAnMiddLFxuICAgICAgICBbJ21heGxlbmd0aCcsICcyMCddLFxuICAgICAgICBbJ3BhdHRlcm4nLCAnXlthLXpBLVpdW2EtekEtWjAtOS1fLl17MSwyMH0kJ10sXG4gICAgICAgIFsncGxhY2Vob2xkZXInLCAnRW50ZXIgbmFtZSBmb3IgdGFzayB0b2RvJ10sXG4gICAgICAgIFsncmVxdWlyZWQnLCAnJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRUb2RvTmFtZUNvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdpbnB1dCcpKFsnYWRkVG9kby1uYW1lJ10pKTtcbiAgICBjb25zdCBhZGRUb2RvRGVzY0NvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2FkZFRvZG8tZGVzYy1jb250YWluZXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZG9Gb3JtKShhZGRUb2RvRGVzY0NvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1snZm9yJywgJ2FkZFRvZG8tZGVzY3JpcHRpb24nXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdEZXNjcmlwdGlvbicpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkVG9kb0Rlc2NDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnbGFiZWwnKShbJ2xhYmVsLWRlc2NyaXB0aW9uJ10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsnaWQnLCAnYWRkVG9kby1kZXNjcmlwdGlvbiddLFxuICAgICAgICBbJ2F1dG9jb21wbGV0ZScsICdvbiddLFxuICAgICAgICBbJ2Zvcm0nLCAnZm9ybS1hZGRUb2RvJ10sXG4gICAgICAgIFsnbWF4bGVuZ3RoJywgJzI1MCddLFxuICAgICAgICBbJ25hbWUnLCAnYWRkVG9kby1kZXNjcmlwdGlvbiddLFxuICAgICAgICBbJ3NwZWxsY2hlY2snLCAndHJ1ZSddLFxuICAgICAgICBbJ3dyYXAnLCAnaGFyZCddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkVG9kb0Rlc2NDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgndGV4dGFyZWEnKShbJ2FkZFRvZG8tZGVzY3JpcHRpb24nXSkpO1xuICAgIGNvbnN0IGFkZFRvZG9EYXRlQ29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnYWRkVG9kby1kYXRlLWNvbnRhaW5lciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0Zvcm0pKGFkZFRvZG9EYXRlQ29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ0R1ZSBkYXRlJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydmb3InLCAnYWRkVG9kby1kdWVEYXRlJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFRvZG9EYXRlQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2xhYmVsJykoWydsYWJlbC1kdWVEYXRlJ10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsndHlwZScsICdkYXRlJ10sXG4gICAgICAgIFsnaWQnLCAnYWRkVG9kby1kdWVEYXRlJ10sXG4gICAgICAgIFtcbiAgICAgICAgICAgICdtaW4nLFxuICAgICAgICAgICAgYCR7bm93LmdldEZ1bGxZZWFyKCl9LSR7bm93LmdldE1vbnRoKCkgPCAxMCA/ICcwJyArIG5vdy5nZXRNb250aCgpIDogbm93LmdldE1vbnRoKCl9LSR7bm93LmdldERhdGUoKSA8IDEwID8gJzAnICsgbm93LmdldERhdGUoKSA6IG5vdy5nZXREYXRlKCl9YCxcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgICAgJ21heCcsXG4gICAgICAgICAgICBgJHtub3cuZ2V0RnVsbFllYXIoKSArIDEwMH0tJHtub3cuZ2V0TW9udGgoKSA8IDEwID8gJzAnICsgbm93LmdldE1vbnRoKCkgOiBub3cuZ2V0TW9udGgoKX0tJHtub3cuZ2V0RGF0ZSgpIDwgMTAgPyAnMCcgKyBub3cuZ2V0RGF0ZSgpIDogbm93LmdldERhdGUoKX1gLFxuICAgICAgICBdLFxuICAgICAgICBbJ25hbWUnLCAnYWRkVG9kby1kdWVEYXRlJ10sXG4gICAgICAgIFsncGxhY2Vob2xkZXInLCAneXl5eS1tbS1kZCddLFxuICAgICAgICBbJ3BhdHRlcm4nLCAnKDBbMS05XXwxWzAtOV18MlswLTldfDNbMDFdKS0oMFsxLTldfDFbMDEyXSktWzAtOV17NH0nXSxcbiAgICAgICAgLy8gWydyZXF1aXJlZCcsICcnXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFRvZG9EYXRlQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2lucHV0JykoWydhZGRUb2RvLWR1ZURhdGUnXSkpO1xuICAgIGNvbnN0IGFkZFRvZG9Qcmlvcml0eUNvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2FkZFRvZG8tcHJpb3JpdHktY29udGFpbmVyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b2RvRm9ybSkoYWRkVG9kb1ByaW9yaXR5Q29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ1ByaW9yaXR5IGxldmVsJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydmb3InLCAnYWRkVG9kby1zZWxlY3RQcmlvcml0eSddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRUb2RvUHJpb3JpdHlDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnbGFiZWwnKShbJ2xhYmVsLXNlbGVjdFByaW9yaXR5J10pKTtcbiAgICBjb25zdCBzZWxlY3RQcmlvcml0eSA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdzZWxlY3QnKShbJ2FkZFRvZG8tc2VsZWN0UHJpb3JpdHknXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ25hbWUnLCAnYWRkVG9kby1zZWxlY3RQcmlvcml0eSddLFxuICAgICAgICBbJ2lkJywgJ2FkZFRvZG8tc2VsZWN0UHJpb3JpdHknXSxcbiAgICAgICAgWydmb3JtJywgJ2Zvcm0tYWRkVG9kbyddLFxuICAgICAgICAvLyBbJ3JlcXVpcmVkJywgJyddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkVG9kb1ByaW9yaXR5Q29udGFpbmVyKSkoc2VsZWN0UHJpb3JpdHkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnLS1QbGVhc2UgYXNzaWduIGEgcHJpb3JpdHktLScpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1sndmFsdWUnLCAnJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNlbGVjdFByaW9yaXR5KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ29wdGlvbicpKFsnb3B0aW9uLXNlbGVjdFByaW9yaXR5J10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWyd2YWx1ZScsICdsb3cnXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdMb3cnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNlbGVjdFByaW9yaXR5KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ29wdGlvbicpKFsnb3B0aW9uLXNlbGVjdFByaW9yaXR5J10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWyd2YWx1ZScsICdtZWRpdW0nXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdNZWRpdW0nKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNlbGVjdFByaW9yaXR5KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ29wdGlvbicpKFsnb3B0aW9uLXNlbGVjdFByaW9yaXR5J10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWyd2YWx1ZScsICdoaWdoJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnSGlnaCcpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2VsZWN0UHJpb3JpdHkpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnb3B0aW9uJykoWydvcHRpb24tc2VsZWN0UHJpb3JpdHknXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ3ZhbHVlJywgJ3VyZ2VudCddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ1VyZ2VudCcpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2VsZWN0UHJpb3JpdHkpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnb3B0aW9uJykoWydvcHRpb24tc2VsZWN0UHJpb3JpdHknXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ3ZhbHVlJywgJ2ltbWVkaWF0ZSddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ0ltbWVkaWF0ZScpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2VsZWN0UHJpb3JpdHkpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnb3B0aW9uJykoWydvcHRpb24tc2VsZWN0UHJpb3JpdHknXSkpO1xuICAgIC8vaGlkZGVuIGVsZW1lbnQgdG8gZnVubmVsIHByb2plY3QgbmFtZSB0byB0b2RvZm9ybVxuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWydoaWRkZW4nLCAnJ10sXG4gICAgICAgIFsndmFsdWUnLCBgJHtwcm9qZWN0RGF0YU5hbWVffWBdLFxuICAgICAgICBbJ25hbWUnLCAnYWRkVG9kby1wcm9qZWN0TmFtZSddLFxuICAgICAgICBbJ3R5cGUnLCAndGV4dCddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0Zvcm0pKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaW5wdXQnKShbJ2FkZFRvZG8tcHJvamVjdE5hbWVfX2hpZGRlbiddKSk7XG4gICAgLy9oaWRkZW4gZWxlbWVudCB0byBmdW5uZWwgcHJvamVjdCBjb2xvdXIgdG8gdG9kb2Zvcm1cbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsnaGlkZGVuJywgJyddLFxuICAgICAgICBbJ3ZhbHVlJywgYCR7cHJvamVjdERhdGFDb2xvdXJffWBdLFxuICAgICAgICBbJ25hbWUnLCAnYWRkVG9kby1wcm9qZWN0Q29sb3VyJ10sXG4gICAgICAgIFsndHlwZScsICd0ZXh0J10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b2RvRm9ybSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdpbnB1dCcpKFsnYWRkVG9kby1wcm9qZWN0Q29sb3VyX19oaWRkZW4nXSkpO1xuICAgIC8vXG4gICAgLy9cbiAgICBjb25zdCBhZGRUb2RvSWNvbnNDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydhZGRUb2RvLWljb25zLWNvbnRhaW5lciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0Zvcm0pKGFkZFRvZG9JY29uc0NvbnRhaW5lcik7XG4gICAgY29uc3QgYnR0bkNhbmNlbFRvZG8gPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnYnV0dG9uJykoWydidHRuJywgJ2J0dG4tY2FuY2VsVG9kbyddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsndHlwZScsICdjbGljayddLFxuICAgICAgICBbJ25hbWUnLCAnYnR0bi1jYW5jZWxUb2RvJ10sXG4gICAgICAgIFsnZm9ybScsICdmb3JtLWFkZFRvZG8nXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFRvZG9JY29uc0NvbnRhaW5lcikpKGJ0dG5DYW5jZWxUb2RvKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdjbGljaycpKGhhbmRsZVRvZG9DbG9zZUljb25DbGlja18xLmhhbmRsZVRvZG9DbG9zZUljb25DbGljayksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShidHRuQ2FuY2VsVG9kbykpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuY3JlYXRlSW1hZ2UpKCcuLi8uLi9zcmMvYXNzZXRzL2ljb25zL3goMSkuc3ZnJykoWydpY29uJywgJ2ljb24tY2FuY2VsVG9kbyddKShgaWNvbiBvZiBzeW1ib2wgJ3gnIHJlcHJlc2VudGluZyBjbG9zZSBvciBjYW5jZWxgKSgnQ2FuY2VsJykpO1xuICAgIGNvbnN0IGJ0dG5BZGRUb2RvID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2J1dHRvbicpKFsnYnR0bicsICdidHRuLWFkZFRvZG8nXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ3R5cGUnLCAnc3VibWl0J10sXG4gICAgICAgIFsnbmFtZScsICdidHRuLWFkZFRvZG8nXSxcbiAgICAgICAgWydmb3JtJywgJ2Zvcm0tYWRkVG9kbyddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkVG9kb0ljb25zQ29udGFpbmVyKSkoYnR0bkFkZFRvZG8pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGJ0dG5BZGRUb2RvKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5jcmVhdGVJbWFnZSkoJy4uLy4uL3NyYy9hc3NldHMvaWNvbnMvY2hlY2soMSkuc3ZnJykoWydpY29uJywgJ2ljb24tYWRkVG9kbyddKShgaWNvbiBvZiBhIGNoZWNrbWFyayByZXByZXNlbnRpbmcgYWRkYCkoJ0FkZCBUb2RvJykpO1xufTtcbmV4cG9ydHMudG9kb01vZGFsID0gdG9kb01vZGFsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmFkZFByb2plY3RUb1NpZGViYXIgPSB2b2lkIDA7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IGhhbmRsZUFkZE5ld1RvZG9JY29uQ2xpY2tfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrXCIpO1xuY29uc3QgYWRkUHJvamVjdFRvU2lkZWJhciA9IGZ1bmN0aW9uIChmb3JtTmFtZV8sIGZvcm1Db2xvdXJfKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IGxvZyA9IChpKSA9PiBjb25zb2xlLmxvZygnXFxuJywgaSk7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLXByb2plY3RzJyk7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3NpZGViYXItcHJvamVjdCcsICdwcm9qZWN0J10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShwcm9qZWN0c0NvbnRhaW5lcikocHJvamVjdENvbnRhaW5lcik7XG4gICAgY29uc3QgcHJvamVjdE5hbWVzQXJyID0gSlNPTi5wYXJzZSgoX2EgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdE5hbWVzJykpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydkYXRhLW5hbWUnLCBgJHtwcm9qZWN0TmFtZXNBcnIuYXQoLTEpfWBdXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkU3R5bGVUb0VsZW0pKFtbJ2NvbG9yJywgYCR7Zm9ybUNvbG91cl99YF1dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKShgJHtwcm9qZWN0TmFtZXNBcnIuYXQoLTEpfWApLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkocHJvamVjdENvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdoNCcpKFsncHJvamVjdC10ZXh0JywgYHRleHQtJHtwcm9qZWN0TmFtZXNBcnIuYXQoLTEpfWBdKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ2RhdGEtbmFtZScsIGAke3Byb2plY3ROYW1lc0Fyci5hdCgtMSl9YF0sXG4gICAgICAgIFsnZGF0YS1jb2xvdXInLCBgJHtmb3JtQ29sb3VyX31gXSxcbiAgICBdKSwgXG4gICAgLy8gYWRkU3R5bGVUb0VsZW0oJ2JhY2tncm91bmQtY29sb3InKShgJHtmb3JtQ29sb3VyX31gKSxcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrXzEuaGFuZGxlQWRkTmV3VG9kb0ljb25DbGljayksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShwcm9qZWN0Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5jcmVhdGVJbWFnZSkoJy4uLy4uLy4uL3NyYy9hc3NldHMvaWNvbnMvcGx1cy5zdmcnKShbJ2ljb24nLCAnaWNvbi1wbHVzJ10pKCdpY29uIG9mIHBsdXMgc3ltYm9sJykoJ0FkZCBOZXcgVG9kbycpKTtcbn07XG5leHBvcnRzLmFkZFByb2plY3RUb1NpZGViYXIgPSBhZGRQcm9qZWN0VG9TaWRlYmFyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNpZGViYXIgPSB2b2lkIDA7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IGhhbmRsZUFkZE5ld1Byb2plY3RJY29uQ2xpY2tfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVBZGROZXdQcm9qZWN0SWNvbkNsaWNrXCIpO1xuY29uc3QgaGFuZGxlQWRkTmV3VG9kb0ljb25DbGlja18xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZUFkZE5ld1RvZG9JY29uQ2xpY2tcIik7XG5jb25zdCBzaWRlYmFyID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGxvZyA9IChpKSA9PiBjb25zb2xlLmxvZygnXFxuJywgaSk7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290Jyk7XG4gICAgY29uc3Qgc2lkZWJhciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3NpZGViYXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHJvb3QpKHNpZGViYXIpO1xuICAgIGNvbnN0IHRvZGF5Q29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnc2lkZWJhci10YWInLCAnY29udGFpbmVyLXRvZGF5J10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzaWRlYmFyKSh0b2RheUNvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kYXlDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmNyZWF0ZUltYWdlKSgnLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy9hcGVydHVyZS5zdmcnKShbJ2ljb24nLCAnaWNvbi10b2RheSddKShgaWNvbiByZXByZXNlbnRpbmcgdG9kYXkncyBldmVudHNgKSgnVG9kYXknKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdUb2RheScpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kYXlDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaDQnKShbJ3RhYi10ZXh0JywgJ3RvZGF5LXRhYiddKSk7XG4gICAgY29uc3QgdXBjb21pbmdDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydzaWRlYmFyLXRhYicsICdjb250YWluZXItdXBjb21pbmcnXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNpZGViYXIpKHVwY29taW5nQ29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh1cGNvbWluZ0NvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuY3JlYXRlSW1hZ2UpKCcuLi8uLi9zcmMvYXNzZXRzL2ljb25zL2NhbGVuZGFyLnN2ZycpKFsnaWNvbicsICd1cGNvbWluZy1pY29uJ10pKCdpY29uIHJlcHJlc2VudGluZyB1cGNvbWluZyBldmVudHMnKSgnVXBjb21pbmcnKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdVcGNvbWluZycpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodXBjb21pbmdDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaDQnKShbJ3RhYi10ZXh0JywgJ3RhYi11cGNvbWluZyddKSk7XG4gICAgY29uc3QgYXJjaGl2ZWRDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydzaWRlYmFyLXRhYicsICdjb250YWluZXItYXJjaGl2ZWQnXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNpZGViYXIpKGFyY2hpdmVkQ29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhcmNoaXZlZENvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuY3JlYXRlSW1hZ2UpKCcuLi8uLi9zcmMvYXNzZXRzL2ljb25zL2FyY2hpdmUuc3ZnJykoWydpY29uJywgJ2FyY2hpdmVkLWljb24nXSkoJ2ljb24gcmVwcmVzZW50aW5nIGFyY2hpdmVkIGV2ZW50cycpKCdBcmNoaXZlZCcpKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ0FyY2hpdmVkJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhcmNoaXZlZENvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdoNCcpKFsndGFiLXRleHQnLCAndGFiLWFyY2hpdmVkJ10pKTtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3NpZGViYXItaGVhZGluZycsICdjb250YWluZXItcHJvamVjdHMnXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNpZGViYXIpKHByb2plY3RzQ29udGFpbmVyKTtcbiAgICBjb25zdCBwcm9qZWN0c0hlYWRpbmcgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydwcm9qZWN0c0hlYWRpbmctY29udGFpbmVyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShwcm9qZWN0c0NvbnRhaW5lcikocHJvamVjdHNIZWFkaW5nKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ1Byb2plY3RzJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShwcm9qZWN0c0hlYWRpbmcpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaDMnKShbJ2hlYWRpbmctdGV4dCcsICd0ZXh0LXByb2plY3RzJ10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdjbGljaycpKGhhbmRsZUFkZE5ld1Byb2plY3RJY29uQ2xpY2tfMS5oYW5kbGVBZGROZXdQcm9qZWN0SWNvbkNsaWNrKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHByb2plY3RzSGVhZGluZykpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuY3JlYXRlSW1hZ2UpKCcuLi8uLi8uLi9zcmMvYXNzZXRzL2ljb25zL3BsdXMuc3ZnJykoWydpY29uJywgJ2ljb24tcGx1cyddKSgnaWNvbiBvZiBwbHVzIHN5bWJvbCcpKCdBZGQgTmV3IFByb2plY3QnKSk7XG4gICAgY29uc3Qgc2FtcGxlUHJvamVjdENvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3NpZGViYXItcHJvamVjdCcsICdwcm9qZWN0J10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShwcm9qZWN0c0NvbnRhaW5lcikoc2FtcGxlUHJvamVjdENvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdTYW1wbGUgUHJvamVjdCcpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2FtcGxlUHJvamVjdENvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdoNCcpKFsncHJvamVjdC10ZXh0JywgJ3RleHQtc2FtcGxlUHJvamVjdCddKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1snZGF0YS1uYW1lJywgYHNhbXBsZS1wcm9qZWN0YF1dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ2NsaWNrJykoaGFuZGxlQWRkTmV3VG9kb0ljb25DbGlja18xLmhhbmRsZUFkZE5ld1RvZG9JY29uQ2xpY2spLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2FtcGxlUHJvamVjdENvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuY3JlYXRlSW1hZ2UpKCcuLi8uLi8uLi9zcmMvYXNzZXRzL2ljb25zL3BsdXMuc3ZnJykoWydpY29uJywgJ2ljb24tcGx1cyddKSgnaWNvbiBvZiBwbHVzIHN5bWJvbCcpKCdBZGQgTmV3IFRvZG8nKSk7XG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG59O1xuZXhwb3J0cy5zaWRlYmFyID0gc2lkZWJhcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5hZGRUb2Rvc1RvQ29udGVudCA9IHZvaWQgMDtcbmNvbnN0IGVsZW1lbnRfY3JlYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50LWNyZWF0b3JzXCIpO1xuY29uc3QgYWRkVG9kb3NUb0NvbnRlbnQgPSBmdW5jdGlvbiAoeyBwcm9qZWN0LCB0b2RvcyB9KSB7XG4gICAgY29uc3QgeyBwcm9qZWN0TmFtZSwgcHJvamVjdENvbG91ciB9ID0gcHJvamVjdDtcbiAgICBjb25zdCB7IHRvZG9OYW1lLCB0b2RvRGVzY3JpcHRpb24sIHRvZG9EdWVEYXRlLCB0b2RvUHJpb3JpdHkgfSA9IHRvZG9zWzBdO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IHRvZG9Db250ZW50Q29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsndG9kb0NvbnRlbnQtY29udGFpbmVyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShjb250ZW50KSh0b2RvQ29udGVudENvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0NvbnRlbnRDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydwcm9qZWN0TmFtZS1jb250YWluZXInXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKShgJHtwcm9qZWN0TmFtZX1gKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRTdHlsZVRvRWxlbSkoW1snY29sb3InLCBgJHtwcm9qZWN0Q29sb3VyfWBdXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b2RvQ29udGVudENvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdoMycpKFsnaGVhZGluZy10ZXh0JywgJ3RvZG9Db250ZW50LXByb2plY3ROYW1lJ10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydmb3InLCAnY29tcGxldGUnXV0pKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnbGFiZWwnKShbJ2xhYmVsJywgJ3RvZG9Db250ZW50LWxhYmVsJ10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsndHlwZScsICdjaGVja2JveCddLFxuICAgICAgICBbJ2lkJywgJ2NvbXBsZXRlJ10sXG4gICAgICAgIFsnbmFtZScsICdjb21wbGV0ZSddLFxuICAgICAgICBbJ3ZhbHVlJywgJ3RvZG9Db250ZW50J10sXG4gICAgXSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdpbnB1dCcpKFsndG9kb0NvbnRlbnQtY2hlY2tib3gnXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKShgJHt0b2RvTmFtZX1gKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZG9Db250ZW50Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2g0JykoWyd0b2RvQ29udGVudC1uYW1lJ10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoYCR7dG9kb0Rlc2NyaXB0aW9ufWApLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0NvbnRlbnRDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgncCcpKFsndG9kb0NvbnRlbnQtZGVzY3JpcHRpb24nXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKShgJHt0b2RvRHVlRGF0ZX1gKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZG9Db250ZW50Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ3AnKShbJ3RvZG9Db250ZW50LWR1ZURhdGUnXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKShgJHt0b2RvUHJpb3JpdHl9YCksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkU3R5bGVUb0VsZW0pKFtcbiAgICAgICAgW1xuICAgICAgICAgICAgJ2NvbG9yJyxcbiAgICAgICAgICAgIGAke3RvZG9Qcmlvcml0eSA9PT0gJ2ltbWVkaWF0ZSdcbiAgICAgICAgICAgICAgICA/ICdoc2woMCwgMTAwJSwgMzUlKSdcbiAgICAgICAgICAgICAgICA6IHRvZG9Qcmlvcml0eSA9PT0gJ3VyZ2VudCdcbiAgICAgICAgICAgICAgICAgICAgPyAnaHNsKDQwLCAxMDAlLCA2NSUpJ1xuICAgICAgICAgICAgICAgICAgICA6IHRvZG9Qcmlvcml0eSA9PT0gJ2hpZ2gnXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdoc2woOTAsIDEwMCUsIDUwJSknXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRvZG9Qcmlvcml0eSA9PT0gJ21lZGl1bSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdoc2woMjAwLCAxMDAlLCA1MCUpJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2hzbCgyNTAsIDEwMCUsIDcwJSknfWAsXG4gICAgICAgIF0sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b2RvQ29udGVudENvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdwJykoWyd0b2RvQ29udGVudC1wcmlvcml0eSddKSk7XG59O1xuZXhwb3J0cy5hZGRUb2Rvc1RvQ29udGVudCA9IGFkZFRvZG9zVG9Db250ZW50O1xuLy8gPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwidmVoaWNsZTFcIiBuYW1lPVwidmVoaWNsZTFcIiB2YWx1ZT1cIkJpa2VcIj5cbi8vIDxsYWJlbCBmb3I9XCJ2ZWhpY2xlMVwiPiBJIGhhdmUgYSBiaWtlPC9sYWJlbD48YnI+XG4vLyA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ2ZWhpY2xlMlwiIG5hbWU9XCJ2ZWhpY2xlMlwiIHZhbHVlPVwiQ2FyXCI+XG4vLyA8bGFiZWwgZm9yPVwidmVoaWNsZTJcIj4gSSBoYXZlIGEgY2FyPC9sYWJlbD48YnI+XG4vLyA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ2ZWhpY2xlM1wiIG5hbWU9XCJ2ZWhpY2xlM1wiIHZhbHVlPVwiQm9hdFwiPlxuLy8gPGxhYmVsIGZvcj1cInZlaGljbGUzXCI+IEkgaGF2ZSBhIGJvYXQ8L2xhYmVsPjxicj5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zdG9yZVByb2plY3RBbmRUb2Rvc0Z1bGwgPSB2b2lkIDA7XG5jb25zdCBzdG9yZVByb2plY3RBbmRUb2Rvc0Z1bGwgPSBmdW5jdGlvbiAocHJvamVjdEFuZFRvZG9zXykge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBjdXJyZW50UHJvak5hbWUgPSBwcm9qZWN0QW5kVG9kb3NfLnByb2plY3QucHJvamVjdE5hbWU7XG4gICAgY29uc3QgY3VycmVudFRvZG9OYW1lID0gcHJvamVjdEFuZFRvZG9zXy50b2Rvc1swXS50b2RvTmFtZTtcbiAgICBjb25zdCBjdXJyZW50VG9kb3MgPSBwcm9qZWN0QW5kVG9kb3NfLnRvZG9zWzBdO1xuICAgIGNvbnN0IHN0b3JhZ2VLZXlzID0gbmV3IFNldCgpO1xuICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHN0b3JhZ2VLZXlzLmFkZChrZXkpO1xuICAgIH0pO1xuICAgIC8vbmV3IHByb2plY3RcbiAgICBpZiAoIXN0b3JhZ2VLZXlzLmhhcyhjdXJyZW50UHJvak5hbWUpKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGN1cnJlbnRQcm9qTmFtZSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdEFuZFRvZG9zXykpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy9wcm9qZWN0IGFscmVhZHkgZXhpc3RzXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qU3RvcmFnZSA9IEpTT04ucGFyc2UoKF9hID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudFByb2pOYW1lKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycpO1xuICAgICAgICBjb25zdCB0b2RvTmFtZXNTZXQgPSBuZXcgU2V0KCk7XG4gICAgICAgIGN1cnJlbnRQcm9qU3RvcmFnZS50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB0b2RvTmFtZXNTZXQuYWRkKHRvZG8udG9kb05hbWUpKTtcbiAgICAgICAgLy9uZXcgdG9kb05hbWVcbiAgICAgICAgaWYgKCF0b2RvTmFtZXNTZXQuaGFzKGN1cnJlbnRUb2RvTmFtZSkpIHtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qU3RvcmFnZS50b2Rvcy5wdXNoKGN1cnJlbnRUb2Rvcyk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShjdXJyZW50UHJvak5hbWUsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRQcm9qU3RvcmFnZSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy90b2RvTmFtZSB0YWtlblxuICAgICAgICAgICAgYWxlcnQoYCR7Y3VycmVudFRvZG9OYW1lfSBhbHJlYWR5IGV4aXN0cyBhcyBhIHByb2plY3QgKO+9oeKAosyB77i/4oCizIDvvaEpICBQbGVhc2UgY2hvb3NlIGFub3RoZXIgbmFtZSBvciBjb25zaWRlciBlZGl0aW5nIGFuIGV4aXN0aW5nIHRvZG8uYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9cbiAgICAvL1xufTtcbmV4cG9ydHMuc3RvcmVQcm9qZWN0QW5kVG9kb3NGdWxsID0gc3RvcmVQcm9qZWN0QW5kVG9kb3NGdWxsO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xucmVxdWlyZShcIi4vaW5kZXguY3NzXCIpO1xuY29uc3QgY29udGVudF8xID0gcmVxdWlyZShcIi4vdHMvY29udGVudC9jb250ZW50XCIpO1xuY29uc3QgaGVhZGVyXzEgPSByZXF1aXJlKFwiLi90cy9oZWFkZXIvaGVhZGVyXCIpO1xuY29uc3Qgc2lkZWJhcl8xID0gcmVxdWlyZShcIi4vdHMvc2lkZWJhci9zaWRlYmFyXCIpO1xuY29uc3QgbWFpbkFwcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBsb2cgPSAoaSkgPT4gY29uc29sZS5sb2coJ1xcbicsIGkpO1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpO1xuICAgICgwLCBoZWFkZXJfMS5oZWFkZXIpKCk7XG4gICAgKDAsIHNpZGViYXJfMS5zaWRlYmFyKSgpO1xuICAgICgwLCBjb250ZW50XzEuY29udGVudCkoKTtcbn07XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbWFpbkFwcCk7XG4vLyBwaXBlKFxuLy8gXHRhZGRUZXh0VG9FbGVtKCdIaSBBdGhtYSEhJyksXG4vLyBcdGFkZEF0dHJpYnV0ZVRvRWxlbSgnZGF0YS1rZXknKSgnc29tZXRoaW5nJyksXG4vLyBcdGFwcGVuZEVsZW1Ub1BhcmVudChtYWluQ29udGVudClcbi8vICkoZWxlbUNyZWF0b3IoJ3AnKShbJ3BhcmEnXSkpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=