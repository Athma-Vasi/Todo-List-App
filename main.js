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
const handleFilterByPriorityClick_1 = __webpack_require__(/*! ../eventCBs/handleFilterByPriorityClick */ "./src/ts/eventCBs/handleFilterByPriorityClick.ts");
const handleSearchFormSubmit_1 = __webpack_require__(/*! ../eventCBs/handleSearchFormSubmit */ "./src/ts/eventCBs/handleSearchFormSubmit.ts");
const handleSortByPriorityClick_1 = __webpack_require__(/*! ../eventCBs/handleSortByPriorityClick */ "./src/ts/eventCBs/handleSortByPriorityClick.ts");
const handleThemeIconToggle_1 = __webpack_require__(/*! ../eventCBs/handleThemeIconToggle */ "./src/ts/eventCBs/handleThemeIconToggle.ts");
const content = function () {
    const log = (i) => console.log('\n', i);
    const root = document.querySelector('#root');
    const content = (0, element_creators_1.elemCreator)('div')(['content']);
    (0, element_creators_1.appendElemToParent)(root)(content);
    const top = (0, element_creators_1.elemCreator)('div')(['content-top']);
    (0, element_creators_1.appendElemToParent)(content)(top);
    const form = (0, element_creators_1.elemCreator)('form')(['form-searchTodo']);
    (0, element_creators_1.pipe)((0, element_creators_1.addEvtListener)('submit')(handleSearchFormSubmit_1.handleSearchFormSubmit), (0, element_creators_1.addAttributeToElem)([
        ['action', '#'],
        ['method', 'post'],
        ['id', 'form-searchTodo'],
        ['name', 'search-todo'],
    ]), (0, element_creators_1.appendElemToParent)(top))(form);
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([['for', 'searchTodo']]), (0, element_creators_1.appendElemToParent)(form))((0, element_creators_1.elemCreator)('label')(['label-search']));
    const searchTodo = (0, element_creators_1.elemCreator)('input')(['searchTodo']);
    (0, element_creators_1.addAttributeToElem)([
        ['type', 'search'],
        ['placeholder', 'search for a todo'],
        ['id', 'searchTodo'],
        ['name', 'search-todo'],
    ])(searchTodo);
    (0, element_creators_1.appendElemToParent)(form)(searchTodo);
    (0, element_creators_1.pipe)((0, element_creators_1.appendElemToParent)(form))((0, element_creators_1.createImage)('../../src/assets/icons/search.svg')(['icon', 'icon-search'])('icon of magnifying glass representing search')('Search'));
    (0, element_creators_1.pipe)((0, element_creators_1.addEvtListener)('click')(handleThemeIconToggle_1.handleThemeIconToggle), (0, element_creators_1.appendElemToParent)(top))((0, element_creators_1.createImage)('../../src/assets/icons/moon.svg')(['icon', 'icon-moon'])('icon of moon representing dark mode')('Dark Mode'));
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([
        ['for', 'select-filterByPriority'],
        ['name', 'select-filterByPriority'],
    ]), (0, element_creators_1.appendElemToParent)(top))((0, element_creators_1.elemCreator)('label')(['label', 'label-filterByPriority']));
    const selectFilterByPriority = (0, element_creators_1.elemCreator)('select')(['select-filterByPriority']);
    (0, element_creators_1.pipe)((0, element_creators_1.addEvtListener)('click')(handleFilterByPriorityClick_1.handleFilterByPriorityClick), (0, element_creators_1.addAttributeToElem)([
        ['name', 'select-filterByPriority'],
        ['id', 'select-filterByPriority'],
        ['title', 'select-filterByPriority'],
    ]), (0, element_creators_1.appendElemToParent)(top))(selectFilterByPriority);
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('--Filter by priority--'), (0, element_creators_1.addAttributeToElem)([['value', '']]), (0, element_creators_1.appendElemToParent)(selectFilterByPriority))((0, element_creators_1.elemCreator)('option')(['option-filterByPriority']));
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('immediate'), (0, element_creators_1.addAttributeToElem)([['value', 'immediate']]), (0, element_creators_1.appendElemToParent)(selectFilterByPriority))((0, element_creators_1.elemCreator)('option')(['option-filterByPriority']));
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('urgent'), (0, element_creators_1.addAttributeToElem)([['value', 'urgent']]), (0, element_creators_1.appendElemToParent)(selectFilterByPriority))((0, element_creators_1.elemCreator)('option')(['option-filterByPriority']));
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('high'), (0, element_creators_1.addAttributeToElem)([['value', 'high']]), (0, element_creators_1.appendElemToParent)(selectFilterByPriority))((0, element_creators_1.elemCreator)('option')(['option-filterByPriority']));
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('medium'), (0, element_creators_1.addAttributeToElem)([['value', 'medium']]), (0, element_creators_1.appendElemToParent)(selectFilterByPriority))((0, element_creators_1.elemCreator)('option')(['option-filterByPriority']));
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('low'), (0, element_creators_1.addAttributeToElem)([['value', 'low']]), (0, element_creators_1.appendElemToParent)(selectFilterByPriority))((0, element_creators_1.elemCreator)('option')(['option-filterByPriority']));
    const selectSortByPriority = (0, element_creators_1.elemCreator)('select')(['select-sortByPriority']);
    (0, element_creators_1.pipe)((0, element_creators_1.addEvtListener)('click')(handleSortByPriorityClick_1.handleSortByPriorityClick), (0, element_creators_1.addAttributeToElem)([
        ['id', 'select-sortByPriority'],
        ['name', 'select-sortByPriority'],
        ['title', 'select-sortByPriority'],
    ]), (0, element_creators_1.appendElemToParent)(top))(selectSortByPriority);
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('--Sort by priority--'), (0, element_creators_1.addAttributeToElem)([['value', '']]), (0, element_creators_1.appendElemToParent)(selectSortByPriority))((0, element_creators_1.elemCreator)('option')(['option-sortByPriority']));
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('low to immediate'), (0, element_creators_1.addAttributeToElem)([['value', 'lowToImmediate']]), (0, element_creators_1.appendElemToParent)(selectSortByPriority))((0, element_creators_1.elemCreator)('option')(['option-sortByPriority']));
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('immediate to low'), (0, element_creators_1.addAttributeToElem)([['value', 'immediateToLow']]), (0, element_creators_1.appendElemToParent)(selectSortByPriority))((0, element_creators_1.elemCreator)('option')(['option-sortByPriority']));
    const contentBottom = (0, element_creators_1.elemCreator)('div')(['content-bottom']);
    (0, element_creators_1.appendElemToParent)(content)(contentBottom);
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

/***/ "./src/ts/eventCBs/handleArchivedTabClick.ts":
/*!***************************************************!*\
  !*** ./src/ts/eventCBs/handleArchivedTabClick.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleArchivedTabClick = void 0;
const addTodosToContent_1 = __webpack_require__(/*! ../projectsAndTodos/addTodosToContent */ "./src/ts/projectsAndTodos/addTodosToContent.ts");
const element_creators_1 = __webpack_require__(/*! ../element-creators */ "./src/ts/element-creators.ts");
const handleArchivedTabClick = function () {
    var _a;
    const log = (i) => console.log('\n', i);
    //remove content section's previous contents
    const content = document.querySelector('.content');
    const contentBottomPrev = document.querySelector('.content-bottom');
    contentBottomPrev === null || contentBottomPrev === void 0 ? void 0 : contentBottomPrev.remove();
    //render new content
    const contentBottom = (0, element_creators_1.elemCreator)('div')(['content-bottom']);
    (0, element_creators_1.appendElemToParent)(content)(contentBottom);
    const archivedStorageArr = JSON.parse((_a = localStorage.getItem('archived')) !== null && _a !== void 0 ? _a : '');
    archivedStorageArr.forEach((project) => {
        (0, addTodosToContent_1.addTodosToContent)(project, true);
    });
};
exports.handleArchivedTabClick = handleArchivedTabClick;


/***/ }),

/***/ "./src/ts/eventCBs/handleCreatedTabsClick.ts":
/*!***************************************************!*\
  !*** ./src/ts/eventCBs/handleCreatedTabsClick.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleCreatedTabsClick = void 0;
const addTodosToContent_1 = __webpack_require__(/*! ../projectsAndTodos/addTodosToContent */ "./src/ts/projectsAndTodos/addTodosToContent.ts");
const element_creators_1 = __webpack_require__(/*! ../element-creators */ "./src/ts/element-creators.ts");
const handleCreatedTabsClick = function () {
    const log = (i) => console.log('\n', i);
    //remove content section's previous contents
    const content = document.querySelector('.content');
    const contentBottomPrev = document.querySelector('.content-bottom');
    contentBottomPrev === null || contentBottomPrev === void 0 ? void 0 : contentBottomPrev.remove();
    const contentBottom = (0, element_creators_1.elemCreator)('div')(['content-bottom']);
    (0, element_creators_1.appendElemToParent)(content)(contentBottom);
    const thisProjectName = this.textContent;
    const projectAndTodosObjArr = [];
    Object.keys(localStorage).forEach((key) => {
        var _a;
        if (key === thisProjectName) {
            projectAndTodosObjArr.push(JSON.parse((_a = localStorage.getItem(thisProjectName)) !== null && _a !== void 0 ? _a : ''));
        }
    });
    projectAndTodosObjArr.forEach((project) => {
        (0, addTodosToContent_1.addTodosToContent)(project);
    });
};
exports.handleCreatedTabsClick = handleCreatedTabsClick;


/***/ }),

/***/ "./src/ts/eventCBs/handleFilterByPriorityClick.ts":
/*!********************************************************!*\
  !*** ./src/ts/eventCBs/handleFilterByPriorityClick.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleFilterByPriorityClick = void 0;
const element_creators_1 = __webpack_require__(/*! ../element-creators */ "./src/ts/element-creators.ts");
const addTodosToContent_1 = __webpack_require__(/*! ../projectsAndTodos/addTodosToContent */ "./src/ts/projectsAndTodos/addTodosToContent.ts");
const handleFilterByPriorityClick = function (ev) {
    const log = (i) => console.log('\n', i);
    //remove content section's previous contents
    const content = document.querySelector('.content');
    const contentBottomPrev = document.querySelector('.content-bottom');
    contentBottomPrev === null || contentBottomPrev === void 0 ? void 0 : contentBottomPrev.remove();
    //render new content
    const contentBottom = (0, element_creators_1.elemCreator)('div')(['content-bottom']);
    (0, element_creators_1.appendElemToParent)(content)(contentBottom);
    const selectedPriority = this.value;
    const projectArr = [];
    Object.keys(localStorage).forEach((key) => {
        var _a;
        if (key !== 'projectNames' && key !== 'archived') {
            projectArr.push(JSON.parse((_a = localStorage.getItem(key)) !== null && _a !== void 0 ? _a : ''));
        }
    });
    const filteredPriorityArr = [];
    projectArr.forEach((project) => {
        project.todos.forEach((todo) => {
            if (todo.todoPriority === selectedPriority) {
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
                filteredPriorityArr.push(temp);
            }
        });
    });
    filteredPriorityArr.forEach((project) => {
        (0, addTodosToContent_1.addTodosToContent)(project);
    });
};
exports.handleFilterByPriorityClick = handleFilterByPriorityClick;


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
const addProjectToSidebar_1 = __webpack_require__(/*! ../projectsAndTodos/addProjectToSidebar */ "./src/ts/projectsAndTodos/addProjectToSidebar.ts");
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
                ['today', 'upcoming', 'archived', 'projects'].forEach((name) => keysSet.add(name));
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

/***/ "./src/ts/eventCBs/handleProjectsTabClick.ts":
/*!***************************************************!*\
  !*** ./src/ts/eventCBs/handleProjectsTabClick.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleProjectsTabClick = void 0;
const addTodosToContent_1 = __webpack_require__(/*! ../projectsAndTodos/addTodosToContent */ "./src/ts/projectsAndTodos/addTodosToContent.ts");
const element_creators_1 = __webpack_require__(/*! ../element-creators */ "./src/ts/element-creators.ts");
const handleProjectsTabClick = function () {
    const log = (i) => console.log('\n', i);
    //remove content section's previous contents
    const content = document.querySelector('.content');
    const contentBottomPrev = document.querySelector('.content-bottom');
    contentBottomPrev === null || contentBottomPrev === void 0 ? void 0 : contentBottomPrev.remove();
    //render new content
    const contentBottom = (0, element_creators_1.elemCreator)('div')(['content-bottom']);
    (0, element_creators_1.appendElemToParent)(content)(contentBottom);
    const projectsAndTodosArr = [];
    Object.keys(localStorage).forEach((key) => {
        var _a;
        if (key !== 'projectNames' &&
            key !== 'archived' &&
            key !== 'upcoming' &&
            key !== 'today') {
            projectsAndTodosArr.push(JSON.parse((_a = localStorage.getItem(key)) !== null && _a !== void 0 ? _a : ''));
        }
    });
    projectsAndTodosArr.forEach((project) => {
        (0, addTodosToContent_1.addTodosToContent)(project);
    });
};
exports.handleProjectsTabClick = handleProjectsTabClick;


/***/ }),

/***/ "./src/ts/eventCBs/handleSearchFormSubmit.ts":
/*!***************************************************!*\
  !*** ./src/ts/eventCBs/handleSearchFormSubmit.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleSearchFormSubmit = void 0;
const addTodosToContent_1 = __webpack_require__(/*! ../projectsAndTodos/addTodosToContent */ "./src/ts/projectsAndTodos/addTodosToContent.ts");
const element_creators_1 = __webpack_require__(/*! ../element-creators */ "./src/ts/element-creators.ts");
const handleSearchFormSubmit = function (ev) {
    var _a;
    const log = (i) => console.log('\n', i);
    ev.preventDefault();
    //remove content section's previous contents
    const content = document.querySelector('.content');
    const contentBottomPrev = document.querySelector('.content-bottom');
    contentBottomPrev === null || contentBottomPrev === void 0 ? void 0 : contentBottomPrev.remove();
    //render new content and append to this
    const contentBottom = (0, element_creators_1.elemCreator)('div')(['content-bottom']);
    (0, element_creators_1.appendElemToParent)(content)(contentBottom);
    const formData = new FormData(this);
    const searchTerm = (_a = formData.get('search-todo')) === null || _a === void 0 ? void 0 : _a.toString();
    const projectArr = [];
    Object.keys(localStorage).forEach((key) => {
        var _a;
        if (key !== 'projectNames' &&
            key !== 'archived' &&
            key !== 'today' &&
            key !== 'upcoming') {
            projectArr.push(JSON.parse((_a = localStorage.getItem(key)) !== null && _a !== void 0 ? _a : ''));
        }
    });
    const matchedProjAndTodosArr = [];
    projectArr.forEach((project) => {
        project.todos.forEach((todo) => {
            if (todo.todoName === searchTerm) {
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
                matchedProjAndTodosArr.push(temp);
            }
        });
    });
    matchedProjAndTodosArr.forEach((project) => {
        (0, addTodosToContent_1.addTodosToContent)(project);
    });
};
exports.handleSearchFormSubmit = handleSearchFormSubmit;


/***/ }),

/***/ "./src/ts/eventCBs/handleSortByPriorityClick.ts":
/*!******************************************************!*\
  !*** ./src/ts/eventCBs/handleSortByPriorityClick.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleSortByPriorityClick = void 0;
const element_creators_1 = __webpack_require__(/*! ../element-creators */ "./src/ts/element-creators.ts");
const addTodosToContent_1 = __webpack_require__(/*! ../projectsAndTodos/addTodosToContent */ "./src/ts/projectsAndTodos/addTodosToContent.ts");
const handleSortByPriorityClick = function (ev) {
    const log = (i) => console.log('\n', i);
    //remove content section's previous contents
    const content = document.querySelector('.content');
    const contentBottomPrev = document.querySelector('.content-bottom');
    contentBottomPrev === null || contentBottomPrev === void 0 ? void 0 : contentBottomPrev.remove();
    //render new content
    const contentBottom = (0, element_creators_1.elemCreator)('div')(['content-bottom']);
    (0, element_creators_1.appendElemToParent)(content)(contentBottom);
    const selectedSortValue = this.value;
    const projectArr = [];
    Object.keys(localStorage).forEach((key) => {
        var _a;
        if (key !== 'projectNames' && key !== 'archived') {
            projectArr.push(JSON.parse((_a = localStorage.getItem(key)) !== null && _a !== void 0 ? _a : ''));
        }
    });
    //assigns a key to each project based on its todo; map used because TSC complains with object[property] method. Also easier to turn into array
    const projectMap = projectArr.reduce((acc, curr) => {
        curr.todos.forEach((todo) => {
            if (todo.todoPriority === 'immediate') {
                acc.set(5, {
                    project: {
                        projectName: curr.project.projectName,
                        projectColour: curr.project.projectColour,
                    },
                    todos: [todo],
                });
            }
            else if (todo.todoPriority === 'urgent') {
                acc.set(4, {
                    project: {
                        projectName: curr.project.projectName,
                        projectColour: curr.project.projectColour,
                    },
                    todos: [todo],
                });
            }
            else if (todo.todoPriority === 'high') {
                acc.set(3, {
                    project: {
                        projectName: curr.project.projectName,
                        projectColour: curr.project.projectColour,
                    },
                    todos: [todo],
                });
            }
            else if (todo.todoPriority === 'medium') {
                acc.set(2, {
                    project: {
                        projectName: curr.project.projectName,
                        projectColour: curr.project.projectColour,
                    },
                    todos: [todo],
                });
            }
            else if (todo.todoPriority === 'low') {
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
    }, new Map());
    log(projectMap);
    //can use the sort method now
    const projectMapArr = Array.from(projectMap);
    if (selectedSortValue === 'lowToImmediate') {
        projectMapArr.sort((a, b) => a[0] - b[0]);
    }
    if (selectedSortValue === 'immediateToLow') {
        projectMapArr.sort((a, b) => b[0] - a[0]);
    }
    //render the todos
    projectMapArr.forEach((numProject) => {
        (0, addTodosToContent_1.addTodosToContent)(numProject[1]);
    });
};
exports.handleSortByPriorityClick = handleSortByPriorityClick;


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

/***/ "./src/ts/eventCBs/handleTodayTabClick.ts":
/*!************************************************!*\
  !*** ./src/ts/eventCBs/handleTodayTabClick.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleTodayTabClick = void 0;
const element_creators_1 = __webpack_require__(/*! ../element-creators */ "./src/ts/element-creators.ts");
const addTodosToContent_1 = __webpack_require__(/*! ../projectsAndTodos/addTodosToContent */ "./src/ts/projectsAndTodos/addTodosToContent.ts");
const handleTodayTabClick = function () {
    const log = (i) => console.log('\n', i);
    //remove content section's previous contents
    const content = document.querySelector('.content');
    const contentBottomPrev = document.querySelector('.content-bottom');
    contentBottomPrev === null || contentBottomPrev === void 0 ? void 0 : contentBottomPrev.remove();
    //render new content and append to this
    const contentBottom = (0, element_creators_1.elemCreator)('div')(['content-bottom']);
    (0, element_creators_1.appendElemToParent)(content)(contentBottom);
    const projectArr = [];
    //grab all the projects except ones specified
    Object.keys(localStorage).forEach((key) => {
        var _a;
        if (key !== 'projectNames' && key !== 'archived') {
            projectArr.push(JSON.parse((_a = localStorage.getItem(key)) !== null && _a !== void 0 ? _a : ''));
        }
    });
    const now = new Date();
    const date = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const today = `${year}-${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date}`;
    const projAndTodosFiltered = [];
    //grab each todo due today and put into created temp project and push project into filtered array
    projectArr.forEach((project) => {
        project.todos.forEach((todo) => {
            if (todo.todoDueDate === today) {
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
        (0, addTodosToContent_1.addTodosToContent)(project);
    });
};
exports.handleTodayTabClick = handleTodayTabClick;


/***/ }),

/***/ "./src/ts/eventCBs/handleTodoCheckboxComplete.ts":
/*!*******************************************************!*\
  !*** ./src/ts/eventCBs/handleTodoCheckboxComplete.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleTodoCheckboxComplete = void 0;
const handleTodoCheckboxComplete = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const log = (i) => console.log('\n', i);
    if (!localStorage.getItem('archived')) {
        localStorage.setItem('archived', JSON.stringify([]));
    }
    const thisProjectName = (_b = (_a = this.previousSibling) === null || _a === void 0 ? void 0 : _a.textContent) !== null && _b !== void 0 ? _b : '';
    const thisProjectColour = this.value;
    const thisTodoName = (_g = (_f = (_e = (_d = (_c = this.parentElement) === null || _c === void 0 ? void 0 : _c.parentElement) === null || _d === void 0 ? void 0 : _d.firstChild) === null || _e === void 0 ? void 0 : _e.nextSibling) === null || _f === void 0 ? void 0 : _f.textContent) !== null && _g !== void 0 ? _g : '';
    const projectArr = [];
    //grab the entire project belonging to currently checked todo
    Object.keys(localStorage).forEach((key) => {
        var _a;
        if (key !== 'projectNames' && key !== 'archived') {
            if (key === thisProjectName) {
                projectArr.push(JSON.parse((_a = localStorage.getItem(key)) !== null && _a !== void 0 ? _a : ''));
            }
        }
    });
    const archivedTodos = JSON.parse((_h = localStorage.getItem('archived')) !== null && _h !== void 0 ? _h : '');
    const todoToBeArchived = [];
    //grab remaining todos that are not current todo
    const todosArrFiltered = [];
    projectArr[0].todos.forEach((todo) => {
        if (todo.todoName !== thisTodoName) {
            todosArrFiltered.push(todo);
        }
        else {
            todoToBeArchived.push(todo);
        }
    });
    //replace the todos of project from storage with filtered todos which do not have the currently checked off todo
    projectArr[0].todos = todosArrFiltered;
    //put the remaining todos back into project and into storage
    localStorage.setItem(thisProjectName, JSON.stringify(projectArr[0]));
    const projectAndTodoToBeArchived = {
        project: { projectName: thisProjectName, projectColour: thisProjectColour },
        todos: [todoToBeArchived[0]],
    };
    //store the removed todo under 'archived'
    archivedTodos.push(projectAndTodoToBeArchived);
    localStorage.setItem('archived', JSON.stringify(archivedTodos));
    //remove the current todo whose checkbox is clicked
    (_k = (_j = this.parentElement) === null || _j === void 0 ? void 0 : _j.parentElement) === null || _k === void 0 ? void 0 : _k.remove();
};
exports.handleTodoCheckboxComplete = handleTodoCheckboxComplete;


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
const storeProjectAndTodosFull_1 = __webpack_require__(/*! ../projectsAndTodos/storeProjectAndTodosFull */ "./src/ts/projectsAndTodos/storeProjectAndTodosFull.ts");
const addTodosToContent_1 = __webpack_require__(/*! ../projectsAndTodos/addTodosToContent */ "./src/ts/projectsAndTodos/addTodosToContent.ts");
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
    const projectsAndTodosFactory = function (projectName, projectColour, todoName, todoDescription, todoDueDate, todoPriority) {
        return {
            project: { projectName, projectColour },
            todos: [{ todoName, todoDescription, todoDueDate, todoPriority }],
        };
    };
    const projectAndTodos = projectsAndTodosFactory(todoFormProjectName, todoFormProjectColour, todoFormName, todoFormDescription, todoFormDueDate, todoFormSelectPriority);
    const todoExists = (0, storeProjectAndTodosFull_1.storeProjectAndTodosFull)(projectAndTodos);
    if (!todoExists) {
        (0, addTodosToContent_1.addTodosToContent)(projectAndTodos);
    }
    todoContainer === null || todoContainer === void 0 ? void 0 : todoContainer.remove();
};
exports.handleTodoFormSubmit = handleTodoFormSubmit;


/***/ }),

/***/ "./src/ts/eventCBs/handleUpcomingTabClick.ts":
/*!***************************************************!*\
  !*** ./src/ts/eventCBs/handleUpcomingTabClick.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleUpcomingTabClick = void 0;
const element_creators_1 = __webpack_require__(/*! ../element-creators */ "./src/ts/element-creators.ts");
const addTodosToContent_1 = __webpack_require__(/*! ../projectsAndTodos/addTodosToContent */ "./src/ts/projectsAndTodos/addTodosToContent.ts");
const handleUpcomingTabClick = function () {
    const log = (i) => console.log('\n', i);
    //remove content section's previous contents
    const content = document.querySelector('.content');
    const contentBottomPrev = document.querySelector('.content-bottom');
    contentBottomPrev === null || contentBottomPrev === void 0 ? void 0 : contentBottomPrev.remove();
    //render new content and append to this
    const contentBottom = (0, element_creators_1.elemCreator)('div')(['content-bottom']);
    (0, element_creators_1.appendElemToParent)(content)(contentBottom);
    const projectArr = [];
    //grab all the projects except ones specified
    Object.keys(localStorage).forEach((key) => {
        var _a;
        if (key !== 'projectNames' && key !== 'archived') {
            projectArr.push(JSON.parse((_a = localStorage.getItem(key)) !== null && _a !== void 0 ? _a : ''));
        }
    });
    const now = new Date();
    const date = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const today = `${year}-${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date}`;
    const projAndTodosFiltered = [];
    //grab each todo not due today and put into created temp project and push project into filtered array
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
        (0, addTodosToContent_1.addTodosToContent)(project);
    });
};
exports.handleUpcomingTabClick = handleUpcomingTabClick;


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
        ['maxlength', '17'],
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
        ['value', '#1e1e1e'],
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
            `${now.getFullYear() + 100}-${now.getMonth() < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1}-${now.getDate() < 10 ? '0' + now.getDate() : now.getDate()}`,
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
        ['title', 'addTodo-selectPriority'],
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

/***/ "./src/ts/projectsAndTodos/addProjectToSidebar.ts":
/*!********************************************************!*\
  !*** ./src/ts/projectsAndTodos/addProjectToSidebar.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addProjectToSidebar = void 0;
const element_creators_1 = __webpack_require__(/*! ../element-creators */ "./src/ts/element-creators.ts");
const handleAddNewTodoIconClick_1 = __webpack_require__(/*! ../eventCBs/handleAddNewTodoIconClick */ "./src/ts/eventCBs/handleAddNewTodoIconClick.ts");
const handleCreatedTabsClick_1 = __webpack_require__(/*! ../eventCBs/handleCreatedTabsClick */ "./src/ts/eventCBs/handleCreatedTabsClick.ts");
const addProjectToSidebar = function (formName_, formColour_) {
    const log = (i) => console.log('\n', i);
    const projectsContainer = document.querySelector('.container-projects');
    const projectContainer = (0, element_creators_1.elemCreator)('div')(['sidebar-project', 'project']);
    (0, element_creators_1.appendElemToParent)(projectsContainer)(projectContainer);
    (0, element_creators_1.pipe)((0, element_creators_1.addEvtListener)('click')(handleCreatedTabsClick_1.handleCreatedTabsClick), (0, element_creators_1.addAttributeToElem)([['data-name', `${formName_}`]]), (0, element_creators_1.addStyleToElem)([['color', `${formColour_}`]]), (0, element_creators_1.addTextToElem)(`${formName_}`), (0, element_creators_1.appendElemToParent)(projectContainer))((0, element_creators_1.elemCreator)('h4')(['project-text']));
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([
        ['data-name', `${formName_}`],
        ['data-colour', `${formColour_}`],
    ]), 
    // addStyleToElem('background-color')(`${formColour_}`),
    (0, element_creators_1.addEvtListener)('click')(handleAddNewTodoIconClick_1.handleAddNewTodoIconClick), (0, element_creators_1.appendElemToParent)(projectContainer))((0, element_creators_1.createImage)('../../../src/assets/icons/plus.svg')(['icon', 'icon-plus'])('icon of plus symbol')('Add New Todo'));
};
exports.addProjectToSidebar = addProjectToSidebar;


/***/ }),

/***/ "./src/ts/projectsAndTodos/addTodosToContent.ts":
/*!******************************************************!*\
  !*** ./src/ts/projectsAndTodos/addTodosToContent.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addTodosToContent = void 0;
const element_creators_1 = __webpack_require__(/*! ../element-creators */ "./src/ts/element-creators.ts");
const handleTodoCheckboxComplete_1 = __webpack_require__(/*! ../eventCBs/handleTodoCheckboxComplete */ "./src/ts/eventCBs/handleTodoCheckboxComplete.ts");
const addTodosToContent = function ({ project, todos }, disableCheckbox = false) {
    const { projectName, projectColour } = project;
    todos.forEach((todo, i) => {
        const { todoName, todoDescription, todoDueDate, todoPriority } = todos[i];
        const contentBottom = document.querySelector('.content-bottom');
        const todoContentContainer = (0, element_creators_1.elemCreator)('div')(['todoContent-container']);
        (0, element_creators_1.appendElemToParent)(contentBottom)(todoContentContainer);
        const headingContainer = (0, element_creators_1.elemCreator)('div')(['todoContent-heading-container']);
        (0, element_creators_1.appendElemToParent)(todoContentContainer)(headingContainer);
        (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([['data-colour', `${projectColour}`]]), (0, element_creators_1.addTextToElem)(`${projectName}`), (0, element_creators_1.addStyleToElem)([['color', `${projectColour}`]]), (0, element_creators_1.appendElemToParent)(headingContainer))((0, element_creators_1.elemCreator)('h3')(['heading-text', 'todoContent-projectName']));
        (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([['for', 'complete']]))((0, element_creators_1.elemCreator)('label')(['label', 'todoContent-label']));
        const checkbox = (0, element_creators_1.elemCreator)('input')(['todoContent-checkbox']);
        (0, element_creators_1.pipe)((0, element_creators_1.addEvtListener)('click')(handleTodoCheckboxComplete_1.handleTodoCheckboxComplete), (0, element_creators_1.addAttributeToElem)([
            ['type', 'checkbox'],
            ['id', 'complete'],
            ['name', 'complete'],
            ['value', `${projectColour}`],
        ]), (0, element_creators_1.appendElemToParent)(headingContainer))(checkbox);
        //to prevent clicking checkbox after it has been archived
        if (disableCheckbox) {
            (0, element_creators_1.addAttributeToElem)([['disabled', 'true']])(checkbox);
        }
        (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)(`${todoName}`), (0, element_creators_1.appendElemToParent)(todoContentContainer))((0, element_creators_1.elemCreator)('h4')(['todoContent-name']));
        (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)(`${todoDescription}`), (0, element_creators_1.appendElemToParent)(todoContentContainer))((0, element_creators_1.elemCreator)('p')(['todoContent-description']));
        const dateAndPriorityContainer = (0, element_creators_1.elemCreator)('div')(['dateAndPriority-container']);
        (0, element_creators_1.appendElemToParent)(todoContentContainer)(dateAndPriorityContainer);
        (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)(`Due: ${todoDueDate}`), (0, element_creators_1.appendElemToParent)(dateAndPriorityContainer))((0, element_creators_1.elemCreator)('p')(['todoContent-dueDate']));
        const priorityContainer = (0, element_creators_1.elemCreator)('div')(['priority-container']);
        (0, element_creators_1.appendElemToParent)(dateAndPriorityContainer)(priorityContainer);
        (0, element_creators_1.addStyleToElem)([
            [
                'background-color',
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
        ])(priorityContainer);
        (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)(`${todoPriority}`), (0, element_creators_1.appendElemToParent)(priorityContainer))((0, element_creators_1.elemCreator)('p')(['todoContent-priority']));
    });
};
exports.addTodosToContent = addTodosToContent;
// <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
// <label for="vehicle1"> I have a bike</label><br>
// <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
// <label for="vehicle2"> I have a car</label><br>
// <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
// <label for="vehicle3"> I have a boat</label><br>


/***/ }),

/***/ "./src/ts/projectsAndTodos/archiveExpiredTodos.ts":
/*!********************************************************!*\
  !*** ./src/ts/projectsAndTodos/archiveExpiredTodos.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.archiveExpiredTodos = void 0;
const archiveExpiredTodos = function () {
    var _a;
    const log = (i) => console.log('\n', i);
    if (!localStorage.getItem('archived')) {
        localStorage.setItem('archived', JSON.stringify([]));
    }
    const projectArr = [];
    Object.keys(localStorage).forEach((key) => {
        var _a;
        if (key !== 'projectNames' && key !== 'archived') {
            projectArr.push(JSON.parse((_a = localStorage.getItem(key)) !== null && _a !== void 0 ? _a : ''));
        }
    });
    const now = new Date();
    const date = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const today = `${year}-${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date}`;
    //grab previously stored expired/archived projects from localstorage
    const expiredProjectsArr = JSON.parse((_a = localStorage.getItem('archived')) !== null && _a !== void 0 ? _a : '');
    const todosNotExpiredArr = [];
    projectArr.forEach((project) => {
        project.todos.forEach((todo) => {
            const tempArr = todo.todoDueDate.split('-');
            const todoYear = Number(tempArr[0]);
            const todoMonth = Number(tempArr[1]);
            const todoDate = Number(tempArr[2]);
            //grab each todo with dueDate earlier than today and store corresponding project into temp object and store in ...Arr
            if (todoDate < date || todoMonth < month || todoYear < year) {
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
                expiredProjectsArr.push(temp);
            }
            else {
                //grab projects and todos that are not expired and store them into ...Arr
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
                todosNotExpiredArr.push(temp);
            }
        });
    });
    //store expired projects and todos that have new expired todos added
    localStorage.setItem('archived', JSON.stringify(expiredProjectsArr));
    //log(expiredProjectsArr)
    //log(todosNotExpiredArr)
    //log(projectArr)
    //the todos that share a project name are consolidated under one project
    const unexpiredProjectsMap = todosNotExpiredArr.reduce((acc, curr) => {
        if (!acc.has(curr.project.projectName)) {
            acc.set(curr.project.projectName, curr);
        }
        else {
            const temp = acc.get(curr.project.projectName);
            temp === null || temp === void 0 ? void 0 : temp.todos.push(curr.todos[0]);
            acc.set(curr.project.projectName, temp);
        }
        return acc;
    }, new Map());
    //log(unexpiredProjectsMap)
    //store modified projects without the expired todos back into localstorage
    unexpiredProjectsMap.forEach((val, key) => {
        localStorage.setItem(key, JSON.stringify(val));
    });
    // //render the todos while disabling the checkbox
    // expiredProjectsArr.forEach((project) => {
    // 	addTodosToContent(project, true)
    // })
};
exports.archiveExpiredTodos = archiveExpiredTodos;


/***/ }),

/***/ "./src/ts/projectsAndTodos/projectsAndTodosOnload.ts":
/*!***********************************************************!*\
  !*** ./src/ts/projectsAndTodos/projectsAndTodosOnload.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.projectsAndTodosOnload = void 0;
const addProjectToSidebar_1 = __webpack_require__(/*! ./addProjectToSidebar */ "./src/ts/projectsAndTodos/addProjectToSidebar.ts");
const addTodosToContent_1 = __webpack_require__(/*! ./addTodosToContent */ "./src/ts/projectsAndTodos/addTodosToContent.ts");
const projectsAndTodosOnload = function () {
    const log = (i) => console.log('\n', i);
    const projects = [];
    Object.keys(localStorage).forEach((key) => {
        var _a;
        if (key !== 'Sample Project' && key !== 'projectNames' && key !== 'archived') {
            projects.push(JSON.parse((_a = localStorage.getItem(key)) !== null && _a !== void 0 ? _a : ''));
        }
    });
    log(projects);
    const displaySampleProjectOnload = (function () {
        var _a;
        //display sample todos
        const sampleProject = JSON.parse((_a = localStorage.getItem('Sample Project')) !== null && _a !== void 0 ? _a : '');
        (0, addTodosToContent_1.addTodosToContent)(sampleProject);
    })();
    //display rest of projects in storage
    projects.forEach((project) => {
        (0, addProjectToSidebar_1.addProjectToSidebar)(project.project.projectName, project.project.projectColour);
        (0, addTodosToContent_1.addTodosToContent)(project);
    });
};
exports.projectsAndTodosOnload = projectsAndTodosOnload;


/***/ }),

/***/ "./src/ts/projectsAndTodos/storeProjectAndTodosFull.ts":
/*!*************************************************************!*\
  !*** ./src/ts/projectsAndTodos/storeProjectAndTodosFull.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeProjectAndTodosFull = void 0;
const storeProjectAndTodosFull = function (projectAndTodos_) {
    var _a;
    let todoExistsFlag = false;
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
            todoExistsFlag = false;
            return todoExistsFlag;
        }
        else {
            //todoName taken
            alert(`${currentTodoName} already exists as a todo (｡•́︿•̀｡)  Please choose another name or consider editing an existing todo.`);
            todoExistsFlag = true;
            return todoExistsFlag;
        }
    }
    //
    //
};
exports.storeProjectAndTodosFull = storeProjectAndTodosFull;


/***/ }),

/***/ "./src/ts/projectsAndTodos/storeSampleProject.ts":
/*!*******************************************************!*\
  !*** ./src/ts/projectsAndTodos/storeSampleProject.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeSampleProject = void 0;
const storeSampleProject = function () {
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
    //on first load only
    if (!localStorage.getItem(sampleProject.project.projectName)) {
        localStorage.setItem(sampleProject.project.projectName, JSON.stringify(sampleProject));
    }
};
exports.storeSampleProject = storeSampleProject;


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
const handleArchivedTabClick_1 = __webpack_require__(/*! ../eventCBs/handleArchivedTabClick */ "./src/ts/eventCBs/handleArchivedTabClick.ts");
const handleUpcomingTabClick_1 = __webpack_require__(/*! ../eventCBs/handleUpcomingTabClick */ "./src/ts/eventCBs/handleUpcomingTabClick.ts");
const handleTodayTabClick_1 = __webpack_require__(/*! ../eventCBs/handleTodayTabClick */ "./src/ts/eventCBs/handleTodayTabClick.ts");
const handleProjectsTabClick_1 = __webpack_require__(/*! ../eventCBs/handleProjectsTabClick */ "./src/ts/eventCBs/handleProjectsTabClick.ts");
const handleCreatedTabsClick_1 = __webpack_require__(/*! ../eventCBs/handleCreatedTabsClick */ "./src/ts/eventCBs/handleCreatedTabsClick.ts");
const sidebar = function () {
    const log = (i) => console.log('\n', i);
    const root = document.querySelector('#root');
    const sidebar = (0, element_creators_1.elemCreator)('div')(['sidebar']);
    (0, element_creators_1.appendElemToParent)(root)(sidebar);
    const todayContainer = (0, element_creators_1.elemCreator)('div')(['sidebar-tab', 'container-today']);
    (0, element_creators_1.addEvtListener)('click')(handleTodayTabClick_1.handleTodayTabClick)(todayContainer);
    (0, element_creators_1.appendElemToParent)(sidebar)(todayContainer);
    (0, element_creators_1.pipe)((0, element_creators_1.appendElemToParent)(todayContainer))((0, element_creators_1.createImage)('../../src/assets/icons/aperture.svg')(['icon', 'icon-today'])(`icon representing today's events`)('Today'));
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('Today'), (0, element_creators_1.appendElemToParent)(todayContainer))((0, element_creators_1.elemCreator)('h4')(['tab-text', 'today-tab']));
    const upcomingContainer = (0, element_creators_1.elemCreator)('div')(['sidebar-tab', 'container-upcoming']);
    (0, element_creators_1.addEvtListener)('click')(handleUpcomingTabClick_1.handleUpcomingTabClick)(upcomingContainer);
    (0, element_creators_1.appendElemToParent)(sidebar)(upcomingContainer);
    (0, element_creators_1.pipe)((0, element_creators_1.appendElemToParent)(upcomingContainer))((0, element_creators_1.createImage)('../../src/assets/icons/calendar.svg')(['icon', 'upcoming-icon'])('icon representing upcoming events')('Upcoming'));
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('Upcoming'), (0, element_creators_1.appendElemToParent)(upcomingContainer))((0, element_creators_1.elemCreator)('h4')(['tab-text', 'tab-upcoming']));
    const archivedContainer = (0, element_creators_1.elemCreator)('div')(['sidebar-tab', 'container-archived']);
    (0, element_creators_1.addEvtListener)('click')(handleArchivedTabClick_1.handleArchivedTabClick)(archivedContainer);
    (0, element_creators_1.appendElemToParent)(sidebar)(archivedContainer);
    (0, element_creators_1.pipe)((0, element_creators_1.appendElemToParent)(archivedContainer))((0, element_creators_1.createImage)('../../src/assets/icons/archive.svg')(['icon', 'archived-icon'])('icon representing archived events')('Archived'));
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('Archived'), (0, element_creators_1.appendElemToParent)(archivedContainer))((0, element_creators_1.elemCreator)('h4')(['tab-text', 'tab-archived']));
    const projectsContainer = (0, element_creators_1.elemCreator)('div')(['sidebar-heading', 'container-projects']);
    (0, element_creators_1.appendElemToParent)(sidebar)(projectsContainer);
    const projectsHeading = (0, element_creators_1.elemCreator)('div')(['projectHeading-wrapper']);
    (0, element_creators_1.appendElemToParent)(projectsContainer)(projectsHeading);
    (0, element_creators_1.pipe)((0, element_creators_1.addEvtListener)('click')(handleProjectsTabClick_1.handleProjectsTabClick), (0, element_creators_1.addTextToElem)('Projects'), (0, element_creators_1.appendElemToParent)(projectsHeading))((0, element_creators_1.elemCreator)('h3')(['heading-text', 'text-projects']));
    (0, element_creators_1.pipe)((0, element_creators_1.addEvtListener)('click')(handleAddNewProjectIconClick_1.handleAddNewProjectIconClick), (0, element_creators_1.appendElemToParent)(projectsHeading))((0, element_creators_1.createImage)('../../../src/assets/icons/plus.svg')(['icon', 'icon-plus'])('icon of plus symbol')('Add New Project'));
    const sampleProjectContainer = (0, element_creators_1.elemCreator)('div')(['sidebar-project', 'project']);
    (0, element_creators_1.appendElemToParent)(projectsContainer)(sampleProjectContainer);
    (0, element_creators_1.pipe)((0, element_creators_1.addStyleToElem)([['color', '#48d1cc']]), (0, element_creators_1.addEvtListener)('click')(handleCreatedTabsClick_1.handleCreatedTabsClick), (0, element_creators_1.addTextToElem)('Sample Project'), (0, element_creators_1.appendElemToParent)(sampleProjectContainer))((0, element_creators_1.elemCreator)('h4')(['project-text', 'text-sampleProject']));
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([
        ['data-name', `Sample Project`],
        ['data-colour', '#48d1cc'],
    ]), (0, element_creators_1.addEvtListener)('click')(handleAddNewTodoIconClick_1.handleAddNewTodoIconClick), (0, element_creators_1.appendElemToParent)(sampleProjectContainer))((0, element_creators_1.createImage)('../../../src/assets/icons/plus.svg')(['icon', 'icon-plus'])('icon of plus symbol')('Add New Todo'));
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
const projectsAndTodosOnload_1 = __webpack_require__(/*! ./ts/projectsAndTodos/projectsAndTodosOnload */ "./src/ts/projectsAndTodos/projectsAndTodosOnload.ts");
const storeSampleProject_1 = __webpack_require__(/*! ./ts/projectsAndTodos/storeSampleProject */ "./src/ts/projectsAndTodos/storeSampleProject.ts");
const archiveExpiredTodos_1 = __webpack_require__(/*! ./ts/projectsAndTodos/archiveExpiredTodos */ "./src/ts/projectsAndTodos/archiveExpiredTodos.ts");
const mainApp = function () {
    const log = (i) => console.log('\n', i);
    //TODO: change min validation in month in todoModal
    //TODO: add required to todoModal entries
    //TODO: add editing the todos functionality
    //TODO: add sortBy select input
    //TODO: add filterBy priority select input
    const root = document.querySelector('#root');
    (0, header_1.header)();
    (0, sidebar_1.sidebar)();
    (0, content_1.content)();
    (0, storeSampleProject_1.storeSampleProject)();
    (0, archiveExpiredTodos_1.archiveExpiredTodos)();
    //runs on every refresh
    self.onload = projectsAndTodosOnload_1.projectsAndTodosOnload;
};
document.addEventListener('DOMContentLoaded', mainApp);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUM3RSxpQ0FBaUMsbUJBQU8sQ0FBQyx1RkFBb0M7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlOzs7Ozs7O1VDaERmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7QUNOYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBTyxDQUFDLG9DQUFhO0FBQ3JCLGtCQUFrQixtQkFBTyxDQUFDLHlEQUFzQjtBQUNoRCxpQkFBaUIsbUJBQU8sQ0FBQyxxREFBb0I7QUFDN0Msa0JBQWtCLG1CQUFPLENBQUMseURBQXNCO0FBQ2hELGlDQUFpQyxtQkFBTyxDQUFDLHlHQUE4QztBQUN2Riw2QkFBNkIsbUJBQU8sQ0FBQyxpR0FBMEM7QUFDL0UsOEJBQThCLG1CQUFPLENBQUMsbUdBQTJDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2NvbnRlbnQvY29udGVudC50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2VsZW1lbnQtY3JlYXRvcnMudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVBZGROZXdQcm9qZWN0SWNvbkNsaWNrLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZXZlbnRDQnMvaGFuZGxlQWRkTmV3VG9kb0ljb25DbGljay50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2V2ZW50Q0JzL2hhbmRsZUFyY2hpdmVkVGFiQ2xpY2sudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVDcmVhdGVkVGFic0NsaWNrLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZXZlbnRDQnMvaGFuZGxlRmlsdGVyQnlQcmlvcml0eUNsaWNrLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZXZlbnRDQnMvaGFuZGxlUHJvamVjdENsb3NlSWNvbkNsaWNrLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZXZlbnRDQnMvaGFuZGxlUHJvamVjdEZvcm1TdWJtaXQudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVQcm9qZWN0c1RhYkNsaWNrLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZXZlbnRDQnMvaGFuZGxlU2VhcmNoRm9ybVN1Ym1pdC50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2V2ZW50Q0JzL2hhbmRsZVNvcnRCeVByaW9yaXR5Q2xpY2sudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVUaGVtZUljb25Ub2dnbGUudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVUb2RheVRhYkNsaWNrLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZXZlbnRDQnMvaGFuZGxlVG9kb0NoZWNrYm94Q29tcGxldGUudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVUb2RvQ2xvc2VJY29uQ2xpY2sudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVUb2RvRm9ybVN1Ym1pdC50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2V2ZW50Q0JzL2hhbmRsZVVwY29taW5nVGFiQ2xpY2sudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9oZWFkZXIvaGVhZGVyLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvbW9kYWxzL3Byb2plY3RNb2RhbC50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL21vZGFscy90b2RvTW9kYWwudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9wcm9qZWN0c0FuZFRvZG9zL2FkZFByb2plY3RUb1NpZGViYXIudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9wcm9qZWN0c0FuZFRvZG9zL2FkZFRvZG9zVG9Db250ZW50LnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvcHJvamVjdHNBbmRUb2Rvcy9hcmNoaXZlRXhwaXJlZFRvZG9zLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvcHJvamVjdHNBbmRUb2Rvcy9wcm9qZWN0c0FuZFRvZG9zT25sb2FkLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvcHJvamVjdHNBbmRUb2Rvcy9zdG9yZVByb2plY3RBbmRUb2Rvc0Z1bGwudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9wcm9qZWN0c0FuZFRvZG9zL3N0b3JlU2FtcGxlUHJvamVjdC50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL3NpZGViYXIvc2lkZWJhci50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jb250ZW50ID0gdm9pZCAwO1xuY29uc3QgZWxlbWVudF9jcmVhdG9yc18xID0gcmVxdWlyZShcIi4uL2VsZW1lbnQtY3JlYXRvcnNcIik7XG5jb25zdCBoYW5kbGVGaWx0ZXJCeVByaW9yaXR5Q2xpY2tfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVGaWx0ZXJCeVByaW9yaXR5Q2xpY2tcIik7XG5jb25zdCBoYW5kbGVTZWFyY2hGb3JtU3VibWl0XzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlU2VhcmNoRm9ybVN1Ym1pdFwiKTtcbmNvbnN0IGhhbmRsZVNvcnRCeVByaW9yaXR5Q2xpY2tfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVTb3J0QnlQcmlvcml0eUNsaWNrXCIpO1xuY29uc3QgaGFuZGxlVGhlbWVJY29uVG9nZ2xlXzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlVGhlbWVJY29uVG9nZ2xlXCIpO1xuY29uc3QgY29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBsb2cgPSAoaSkgPT4gY29uc29sZS5sb2coJ1xcbicsIGkpO1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydjb250ZW50J10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShyb290KShjb250ZW50KTtcbiAgICBjb25zdCB0b3AgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydjb250ZW50LXRvcCddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoY29udGVudCkodG9wKTtcbiAgICBjb25zdCBmb3JtID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2Zvcm0nKShbJ2Zvcm0tc2VhcmNoVG9kbyddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdzdWJtaXQnKShoYW5kbGVTZWFyY2hGb3JtU3VibWl0XzEuaGFuZGxlU2VhcmNoRm9ybVN1Ym1pdCksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsnYWN0aW9uJywgJyMnXSxcbiAgICAgICAgWydtZXRob2QnLCAncG9zdCddLFxuICAgICAgICBbJ2lkJywgJ2Zvcm0tc2VhcmNoVG9kbyddLFxuICAgICAgICBbJ25hbWUnLCAnc2VhcmNoLXRvZG8nXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvcCkpKGZvcm0pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ2ZvcicsICdzZWFyY2hUb2RvJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGZvcm0pKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnbGFiZWwnKShbJ2xhYmVsLXNlYXJjaCddKSk7XG4gICAgY29uc3Qgc2VhcmNoVG9kbyA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdpbnB1dCcpKFsnc2VhcmNoVG9kbyddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ3R5cGUnLCAnc2VhcmNoJ10sXG4gICAgICAgIFsncGxhY2Vob2xkZXInLCAnc2VhcmNoIGZvciBhIHRvZG8nXSxcbiAgICAgICAgWydpZCcsICdzZWFyY2hUb2RvJ10sXG4gICAgICAgIFsnbmFtZScsICdzZWFyY2gtdG9kbyddLFxuICAgIF0pKHNlYXJjaFRvZG8pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShmb3JtKShzZWFyY2hUb2RvKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShmb3JtKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5jcmVhdGVJbWFnZSkoJy4uLy4uL3NyYy9hc3NldHMvaWNvbnMvc2VhcmNoLnN2ZycpKFsnaWNvbicsICdpY29uLXNlYXJjaCddKSgnaWNvbiBvZiBtYWduaWZ5aW5nIGdsYXNzIHJlcHJlc2VudGluZyBzZWFyY2gnKSgnU2VhcmNoJykpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ2NsaWNrJykoaGFuZGxlVGhlbWVJY29uVG9nZ2xlXzEuaGFuZGxlVGhlbWVJY29uVG9nZ2xlKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvcCkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuY3JlYXRlSW1hZ2UpKCcuLi8uLi9zcmMvYXNzZXRzL2ljb25zL21vb24uc3ZnJykoWydpY29uJywgJ2ljb24tbW9vbiddKSgnaWNvbiBvZiBtb29uIHJlcHJlc2VudGluZyBkYXJrIG1vZGUnKSgnRGFyayBNb2RlJykpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWydmb3InLCAnc2VsZWN0LWZpbHRlckJ5UHJpb3JpdHknXSxcbiAgICAgICAgWyduYW1lJywgJ3NlbGVjdC1maWx0ZXJCeVByaW9yaXR5J10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b3ApKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnbGFiZWwnKShbJ2xhYmVsJywgJ2xhYmVsLWZpbHRlckJ5UHJpb3JpdHknXSkpO1xuICAgIGNvbnN0IHNlbGVjdEZpbHRlckJ5UHJpb3JpdHkgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnc2VsZWN0JykoWydzZWxlY3QtZmlsdGVyQnlQcmlvcml0eSddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdjbGljaycpKGhhbmRsZUZpbHRlckJ5UHJpb3JpdHlDbGlja18xLmhhbmRsZUZpbHRlckJ5UHJpb3JpdHlDbGljayksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsnbmFtZScsICdzZWxlY3QtZmlsdGVyQnlQcmlvcml0eSddLFxuICAgICAgICBbJ2lkJywgJ3NlbGVjdC1maWx0ZXJCeVByaW9yaXR5J10sXG4gICAgICAgIFsndGl0bGUnLCAnc2VsZWN0LWZpbHRlckJ5UHJpb3JpdHknXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvcCkpKHNlbGVjdEZpbHRlckJ5UHJpb3JpdHkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnLS1GaWx0ZXIgYnkgcHJpb3JpdHktLScpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1sndmFsdWUnLCAnJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNlbGVjdEZpbHRlckJ5UHJpb3JpdHkpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnb3B0aW9uJykoWydvcHRpb24tZmlsdGVyQnlQcmlvcml0eSddKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdpbW1lZGlhdGUnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ3ZhbHVlJywgJ2ltbWVkaWF0ZSddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzZWxlY3RGaWx0ZXJCeVByaW9yaXR5KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ29wdGlvbicpKFsnb3B0aW9uLWZpbHRlckJ5UHJpb3JpdHknXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgndXJnZW50JyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWyd2YWx1ZScsICd1cmdlbnQnXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2VsZWN0RmlsdGVyQnlQcmlvcml0eSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdvcHRpb24nKShbJ29wdGlvbi1maWx0ZXJCeVByaW9yaXR5J10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ2hpZ2gnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ3ZhbHVlJywgJ2hpZ2gnXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2VsZWN0RmlsdGVyQnlQcmlvcml0eSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdvcHRpb24nKShbJ29wdGlvbi1maWx0ZXJCeVByaW9yaXR5J10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ21lZGl1bScpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1sndmFsdWUnLCAnbWVkaXVtJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNlbGVjdEZpbHRlckJ5UHJpb3JpdHkpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnb3B0aW9uJykoWydvcHRpb24tZmlsdGVyQnlQcmlvcml0eSddKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdsb3cnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ3ZhbHVlJywgJ2xvdyddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzZWxlY3RGaWx0ZXJCeVByaW9yaXR5KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ29wdGlvbicpKFsnb3B0aW9uLWZpbHRlckJ5UHJpb3JpdHknXSkpO1xuICAgIGNvbnN0IHNlbGVjdFNvcnRCeVByaW9yaXR5ID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ3NlbGVjdCcpKFsnc2VsZWN0LXNvcnRCeVByaW9yaXR5J10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ2NsaWNrJykoaGFuZGxlU29ydEJ5UHJpb3JpdHlDbGlja18xLmhhbmRsZVNvcnRCeVByaW9yaXR5Q2xpY2spLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ2lkJywgJ3NlbGVjdC1zb3J0QnlQcmlvcml0eSddLFxuICAgICAgICBbJ25hbWUnLCAnc2VsZWN0LXNvcnRCeVByaW9yaXR5J10sXG4gICAgICAgIFsndGl0bGUnLCAnc2VsZWN0LXNvcnRCeVByaW9yaXR5J10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b3ApKShzZWxlY3RTb3J0QnlQcmlvcml0eSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCctLVNvcnQgYnkgcHJpb3JpdHktLScpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1sndmFsdWUnLCAnJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNlbGVjdFNvcnRCeVByaW9yaXR5KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ29wdGlvbicpKFsnb3B0aW9uLXNvcnRCeVByaW9yaXR5J10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ2xvdyB0byBpbW1lZGlhdGUnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ3ZhbHVlJywgJ2xvd1RvSW1tZWRpYXRlJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNlbGVjdFNvcnRCeVByaW9yaXR5KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ29wdGlvbicpKFsnb3B0aW9uLXNvcnRCeVByaW9yaXR5J10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ2ltbWVkaWF0ZSB0byBsb3cnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ3ZhbHVlJywgJ2ltbWVkaWF0ZVRvTG93J11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNlbGVjdFNvcnRCeVByaW9yaXR5KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ29wdGlvbicpKFsnb3B0aW9uLXNvcnRCeVByaW9yaXR5J10pKTtcbiAgICBjb25zdCBjb250ZW50Qm90dG9tID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnY29udGVudC1ib3R0b20nXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGNvbnRlbnQpKGNvbnRlbnRCb3R0b20pO1xufTtcbmV4cG9ydHMuY29udGVudCA9IGNvbnRlbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucGlwZSA9IGV4cG9ydHMuYWRkU3R5bGVUb0VsZW0gPSBleHBvcnRzLmFkZEV2dExpc3RlbmVyID0gZXhwb3J0cy5jcmVhdGVJbWFnZSA9IGV4cG9ydHMuYWRkQXR0cmlidXRlVG9FbGVtID0gZXhwb3J0cy5hZGRUZXh0VG9FbGVtID0gZXhwb3J0cy5hcHBlbmRFbGVtVG9QYXJlbnQgPSBleHBvcnRzLmVsZW1DcmVhdG9yID0gdm9pZCAwO1xuY29uc3QgZWxlbUNyZWF0b3IgPSAoZWxlbV8pID0+IChjbGFzc18pID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtXyk7XG4gICAgcmV0dXJuIGNsYXNzXy5yZWR1Y2UoKGVsZW0sIGN1cnJDbGFzcykgPT4ge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY3VyckNsYXNzKTtcbiAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgfSwgZWxlbWVudCk7XG59O1xuZXhwb3J0cy5lbGVtQ3JlYXRvciA9IGVsZW1DcmVhdG9yO1xuY29uc3QgYWRkQXR0cmlidXRlVG9FbGVtID0gKGF0dHJWYWxzXykgPT4gKGVsZW1fKSA9PiB7XG4gICAgcmV0dXJuIGF0dHJWYWxzXy5yZWR1Y2UoKGVsZW1lbnQsIGN1cnIpID0+IHtcbiAgICAgICAgaWYgKGN1cnIubGVuZ3RoID4gMilcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWxlbWVudC5zZXRBdHRyaWJ1dGUoY3VyclswXSwgY3VyclsxXSk7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0sIGVsZW1fKTtcbn07XG5leHBvcnRzLmFkZEF0dHJpYnV0ZVRvRWxlbSA9IGFkZEF0dHJpYnV0ZVRvRWxlbTtcbmNvbnN0IGFkZFN0eWxlVG9FbGVtID0gKHN0eWxlUHJvcFZhbHNfKSA9PiAoZWxlbV8pID0+IHtcbiAgICByZXR1cm4gc3R5bGVQcm9wVmFsc18ucmVkdWNlKChlbGVtZW50LCBjdXJyKSA9PiB7XG4gICAgICAgIGlmIChjdXJyLmxlbmd0aCA+IDIpXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoY3VyclswXSwgY3VyclsxXSk7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0sIGVsZW1fKTtcbn07XG5leHBvcnRzLmFkZFN0eWxlVG9FbGVtID0gYWRkU3R5bGVUb0VsZW07XG5jb25zdCBhZGRUZXh0VG9FbGVtID0gKHRleHRfKSA9PiAoZWxlbV8pID0+IHtcbiAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHRfKTtcbiAgICBlbGVtXyA9PT0gbnVsbCB8fCBlbGVtXyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWxlbV8uYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuICAgIHJldHVybiBlbGVtXztcbn07XG5leHBvcnRzLmFkZFRleHRUb0VsZW0gPSBhZGRUZXh0VG9FbGVtO1xuY29uc3QgYXBwZW5kRWxlbVRvUGFyZW50ID0gKHBhcmVudF8pID0+IChjaGlsZF8pID0+IHtcbiAgICBpZiAoY2hpbGRfKVxuICAgICAgICBwYXJlbnRfID09PSBudWxsIHx8IHBhcmVudF8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmVudF8uYXBwZW5kQ2hpbGQoY2hpbGRfKTtcbn07XG5leHBvcnRzLmFwcGVuZEVsZW1Ub1BhcmVudCA9IGFwcGVuZEVsZW1Ub1BhcmVudDtcbmNvbnN0IGNyZWF0ZUltYWdlID0gKHNvdXJjZV8pID0+IChjbGFzc18pID0+IChhbHRfKSA9PiAodGl0bGVfKSA9PiB7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBzb3VyY2VfO1xuICAgIGltYWdlLmFsdCA9IGFsdF87XG4gICAgaW1hZ2UudGl0bGUgPSB0aXRsZV87XG4gICAgcmV0dXJuIGNsYXNzXy5yZWR1Y2UoKGVsZW0sIGN1cnJDbGFzcykgPT4ge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY3VyckNsYXNzKTtcbiAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgfSwgaW1hZ2UpO1xufTtcbmV4cG9ydHMuY3JlYXRlSW1hZ2UgPSBjcmVhdGVJbWFnZTtcbmNvbnN0IGFkZEV2dExpc3RlbmVyID0gKGV2dF8pID0+IChoYW5kbGVFdnRfKSA9PiAoZWxlbV8pID0+IHtcbiAgICBlbGVtXyA9PT0gbnVsbCB8fCBlbGVtXyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWxlbV8uYWRkRXZlbnRMaXN0ZW5lcihldnRfLCBoYW5kbGVFdnRfKTtcbiAgICByZXR1cm4gZWxlbV87XG59O1xuZXhwb3J0cy5hZGRFdnRMaXN0ZW5lciA9IGFkZEV2dExpc3RlbmVyO1xuLy8gZnVuY3Rpb24gcGlwZTxWPiguLi5mdW5jczogQXJyYXk8KF86IFYpID0+IFY+KTogKF86IFYpID0+IFYgfCBudWxsIHwgdm9pZCB7XG4vLyBcdHJldHVybiBmdW5jdGlvbiAodmFsdWU6IFYpIHtcbi8vIFx0XHRyZXR1cm4gZnVuY3MucmVkdWNlKCh2YWwsIGZ1bmMpID0+IHtcbi8vIFx0XHRcdHJldHVybiBmdW5jKHZhbClcbi8vIFx0XHR9LCB2YWx1ZSlcbi8vIFx0fVxuLy8gfVxuY29uc3QgcGlwZSA9ICguLi5mdW5jcykgPT4gKHZhbHVlKSA9PiBmdW5jcy5yZWR1Y2UoKHJlcywgZnVuYykgPT4gZnVuYyhyZXMpLCB2YWx1ZSk7XG5leHBvcnRzLnBpcGUgPSBwaXBlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZUFkZE5ld1Byb2plY3RJY29uQ2xpY2sgPSB2b2lkIDA7XG5jb25zdCBwcm9qZWN0TW9kYWxfMSA9IHJlcXVpcmUoXCIuLi9tb2RhbHMvcHJvamVjdE1vZGFsXCIpO1xuY29uc3QgaGFuZGxlQWRkTmV3UHJvamVjdEljb25DbGljayA9IGZ1bmN0aW9uIChldikge1xuICAgICgwLCBwcm9qZWN0TW9kYWxfMS5wcm9qZWN0TW9kYWwpKCk7XG4gICAgY29uc3QgYWRkUHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3QtY29udGFpbmVyJyk7XG4gICAgaWYgKGFkZFByb2plY3RNb2RhbCkge1xuICAgICAgICBhZGRQcm9qZWN0TW9kYWwuc3R5bGUudmlzaWJpbGl0eSA9XG4gICAgICAgICAgICAoYWRkUHJvamVjdE1vZGFsID09PSBudWxsIHx8IGFkZFByb2plY3RNb2RhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWRkUHJvamVjdE1vZGFsLnN0eWxlLnZpc2liaWxpdHkpID09PSAndmlzaWJsZScgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJztcbiAgICB9XG59O1xuZXhwb3J0cy5oYW5kbGVBZGROZXdQcm9qZWN0SWNvbkNsaWNrID0gaGFuZGxlQWRkTmV3UHJvamVjdEljb25DbGljaztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrID0gdm9pZCAwO1xuY29uc3QgdG9kb01vZGFsXzEgPSByZXF1aXJlKFwiLi4vbW9kYWxzL3RvZG9Nb2RhbFwiKTtcbmNvbnN0IGhhbmRsZUFkZE5ld1RvZG9JY29uQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBjb25zdCBwcm9qZWN0RGF0YU5hbWUgPSAoX2EgPSB0aGlzLmRhdGFzZXQubmFtZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJyc7XG4gICAgY29uc3QgcHJvamVjdERhdGFDb2xvdXIgPSAoX2IgPSB0aGlzLmRhdGFzZXQuY29sb3VyKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnJztcbiAgICAoMCwgdG9kb01vZGFsXzEudG9kb01vZGFsKShwcm9qZWN0RGF0YU5hbWUsIHByb2plY3REYXRhQ29sb3VyKTtcbiAgICBjb25zdCBhZGRUb2RvTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jb250YWluZXInKTtcbiAgICBpZiAoYWRkVG9kb01vZGFsKVxuICAgICAgICBhZGRUb2RvTW9kYWwuc3R5bGUudmlzaWJpbGl0eSA9XG4gICAgICAgICAgICAoYWRkVG9kb01vZGFsID09PSBudWxsIHx8IGFkZFRvZG9Nb2RhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWRkVG9kb01vZGFsLnN0eWxlLnZpc2liaWxpdHkpID09PSAndmlzaWJsZScgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJztcbn07XG5leHBvcnRzLmhhbmRsZUFkZE5ld1RvZG9JY29uQ2xpY2sgPSBoYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZUFyY2hpdmVkVGFiQ2xpY2sgPSB2b2lkIDA7XG5jb25zdCBhZGRUb2Rvc1RvQ29udGVudF8xID0gcmVxdWlyZShcIi4uL3Byb2plY3RzQW5kVG9kb3MvYWRkVG9kb3NUb0NvbnRlbnRcIik7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IGhhbmRsZUFyY2hpdmVkVGFiQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IGxvZyA9IChpKSA9PiBjb25zb2xlLmxvZygnXFxuJywgaSk7XG4gICAgLy9yZW1vdmUgY29udGVudCBzZWN0aW9uJ3MgcHJldmlvdXMgY29udGVudHNcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBjb250ZW50Qm90dG9tUHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWJvdHRvbScpO1xuICAgIGNvbnRlbnRCb3R0b21QcmV2ID09PSBudWxsIHx8IGNvbnRlbnRCb3R0b21QcmV2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250ZW50Qm90dG9tUHJldi5yZW1vdmUoKTtcbiAgICAvL3JlbmRlciBuZXcgY29udGVudFxuICAgIGNvbnN0IGNvbnRlbnRCb3R0b20gPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydjb250ZW50LWJvdHRvbSddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoY29udGVudCkoY29udGVudEJvdHRvbSk7XG4gICAgY29uc3QgYXJjaGl2ZWRTdG9yYWdlQXJyID0gSlNPTi5wYXJzZSgoX2EgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJjaGl2ZWQnKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycpO1xuICAgIGFyY2hpdmVkU3RvcmFnZUFyci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICgwLCBhZGRUb2Rvc1RvQ29udGVudF8xLmFkZFRvZG9zVG9Db250ZW50KShwcm9qZWN0LCB0cnVlKTtcbiAgICB9KTtcbn07XG5leHBvcnRzLmhhbmRsZUFyY2hpdmVkVGFiQ2xpY2sgPSBoYW5kbGVBcmNoaXZlZFRhYkNsaWNrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZUNyZWF0ZWRUYWJzQ2xpY2sgPSB2b2lkIDA7XG5jb25zdCBhZGRUb2Rvc1RvQ29udGVudF8xID0gcmVxdWlyZShcIi4uL3Byb2plY3RzQW5kVG9kb3MvYWRkVG9kb3NUb0NvbnRlbnRcIik7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IGhhbmRsZUNyZWF0ZWRUYWJzQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbG9nID0gKGkpID0+IGNvbnNvbGUubG9nKCdcXG4nLCBpKTtcbiAgICAvL3JlbW92ZSBjb250ZW50IHNlY3Rpb24ncyBwcmV2aW91cyBjb250ZW50c1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IGNvbnRlbnRCb3R0b21QcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYm90dG9tJyk7XG4gICAgY29udGVudEJvdHRvbVByZXYgPT09IG51bGwgfHwgY29udGVudEJvdHRvbVByZXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRlbnRCb3R0b21QcmV2LnJlbW92ZSgpO1xuICAgIGNvbnN0IGNvbnRlbnRCb3R0b20gPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydjb250ZW50LWJvdHRvbSddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoY29udGVudCkoY29udGVudEJvdHRvbSk7XG4gICAgY29uc3QgdGhpc1Byb2plY3ROYW1lID0gdGhpcy50ZXh0Q29udGVudDtcbiAgICBjb25zdCBwcm9qZWN0QW5kVG9kb3NPYmpBcnIgPSBbXTtcbiAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmIChrZXkgPT09IHRoaXNQcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgcHJvamVjdEFuZFRvZG9zT2JqQXJyLnB1c2goSlNPTi5wYXJzZSgoX2EgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzUHJvamVjdE5hbWUpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcHJvamVjdEFuZFRvZG9zT2JqQXJyLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgKDAsIGFkZFRvZG9zVG9Db250ZW50XzEuYWRkVG9kb3NUb0NvbnRlbnQpKHByb2plY3QpO1xuICAgIH0pO1xufTtcbmV4cG9ydHMuaGFuZGxlQ3JlYXRlZFRhYnNDbGljayA9IGhhbmRsZUNyZWF0ZWRUYWJzQ2xpY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlRmlsdGVyQnlQcmlvcml0eUNsaWNrID0gdm9pZCAwO1xuY29uc3QgZWxlbWVudF9jcmVhdG9yc18xID0gcmVxdWlyZShcIi4uL2VsZW1lbnQtY3JlYXRvcnNcIik7XG5jb25zdCBhZGRUb2Rvc1RvQ29udGVudF8xID0gcmVxdWlyZShcIi4uL3Byb2plY3RzQW5kVG9kb3MvYWRkVG9kb3NUb0NvbnRlbnRcIik7XG5jb25zdCBoYW5kbGVGaWx0ZXJCeVByaW9yaXR5Q2xpY2sgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICBjb25zdCBsb2cgPSAoaSkgPT4gY29uc29sZS5sb2coJ1xcbicsIGkpO1xuICAgIC8vcmVtb3ZlIGNvbnRlbnQgc2VjdGlvbidzIHByZXZpb3VzIGNvbnRlbnRzXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3QgY29udGVudEJvdHRvbVByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1ib3R0b20nKTtcbiAgICBjb250ZW50Qm90dG9tUHJldiA9PT0gbnVsbCB8fCBjb250ZW50Qm90dG9tUHJldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGVudEJvdHRvbVByZXYucmVtb3ZlKCk7XG4gICAgLy9yZW5kZXIgbmV3IGNvbnRlbnRcbiAgICBjb25zdCBjb250ZW50Qm90dG9tID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnY29udGVudC1ib3R0b20nXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGNvbnRlbnQpKGNvbnRlbnRCb3R0b20pO1xuICAgIGNvbnN0IHNlbGVjdGVkUHJpb3JpdHkgPSB0aGlzLnZhbHVlO1xuICAgIGNvbnN0IHByb2plY3RBcnIgPSBbXTtcbiAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmIChrZXkgIT09ICdwcm9qZWN0TmFtZXMnICYmIGtleSAhPT0gJ2FyY2hpdmVkJykge1xuICAgICAgICAgICAgcHJvamVjdEFyci5wdXNoKEpTT04ucGFyc2UoKF9hID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGZpbHRlcmVkUHJpb3JpdHlBcnIgPSBbXTtcbiAgICBwcm9qZWN0QXJyLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICBpZiAodG9kby50b2RvUHJpb3JpdHkgPT09IHNlbGVjdGVkUHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0ge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZTogcHJvamVjdC5wcm9qZWN0LnByb2plY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbG91cjogcHJvamVjdC5wcm9qZWN0LnByb2plY3RDb2xvdXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb05hbWU6IHRvZG8udG9kb05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uOiB0b2RvLnRvZG9EZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRHVlRGF0ZTogdG9kby50b2RvRHVlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHk6IHRvZG8udG9kb1ByaW9yaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZpbHRlcmVkUHJpb3JpdHlBcnIucHVzaCh0ZW1wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgZmlsdGVyZWRQcmlvcml0eUFyci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICgwLCBhZGRUb2Rvc1RvQ29udGVudF8xLmFkZFRvZG9zVG9Db250ZW50KShwcm9qZWN0KTtcbiAgICB9KTtcbn07XG5leHBvcnRzLmhhbmRsZUZpbHRlckJ5UHJpb3JpdHlDbGljayA9IGhhbmRsZUZpbHRlckJ5UHJpb3JpdHlDbGljaztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVQcm9qZWN0Q2xvc2VJY29uQ2xpY2sgPSB2b2lkIDA7XG5jb25zdCBoYW5kbGVQcm9qZWN0Q2xvc2VJY29uQ2xpY2sgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICBjb25zdCBhZGRQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdC1jb250YWluZXInKTtcbiAgICAvLyBpZiAoYWRkUHJvamVjdE1vZGFsKVxuICAgIC8vIFx0YWRkUHJvamVjdE1vZGFsLnN0eWxlLnZpc2liaWxpdHkgPVxuICAgIC8vIFx0XHRhZGRQcm9qZWN0TW9kYWw/LnN0eWxlLnZpc2liaWxpdHkgPT09ICd2aXNpYmxlJyA/ICdoaWRkZW4nIDogJ3Zpc2libGUnXG4gICAgaWYgKGFkZFByb2plY3RNb2RhbClcbiAgICAgICAgYWRkUHJvamVjdE1vZGFsLnJlbW92ZSgpO1xufTtcbmV4cG9ydHMuaGFuZGxlUHJvamVjdENsb3NlSWNvbkNsaWNrID0gaGFuZGxlUHJvamVjdENsb3NlSWNvbkNsaWNrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZVByb2plY3RGb3JtU3VibWl0ID0gdm9pZCAwO1xuY29uc3QgYWRkUHJvamVjdFRvU2lkZWJhcl8xID0gcmVxdWlyZShcIi4uL3Byb2plY3RzQW5kVG9kb3MvYWRkUHJvamVjdFRvU2lkZWJhclwiKTtcbmNvbnN0IGhhbmRsZVByb2plY3RGb3JtU3VibWl0ID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgYWRkUHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3QtY29udGFpbmVyJyk7XG4gICAgY29uc3QgcHJvamVjdEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xuICAgIGNvbnN0IHByb2plY3RGb3JtTmFtZSA9IChfYiA9IChfYSA9IHByb2plY3RGb3JtRGF0YS5nZXQoJ2FkZFByb2plY3QtbmFtZScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9TdHJpbmcoKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJyc7XG4gICAgY29uc3QgcHJvamVjdEZvcm1Db2xvdXIgPSAoX2QgPSAoX2MgPSBwcm9qZWN0Rm9ybURhdGEuZ2V0KCdhZGRQcm9qZWN0LWNvbG91cicpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MudG9TdHJpbmcoKSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogJyc7XG4gICAgLy9pZiAncHJvamVjdE5hbWVzJyBkb2Vzbid0IGV4aXN0LCBjcmVhdGUgaXQsIG90aGVyd2lzZSBkbyBub3RoaW5nXG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdE5hbWVzJykpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3ROYW1lcycsIEpTT04uc3RyaW5naWZ5KFtdKSk7XG4gICAgfVxuICAgIGNvbnN0IHN0b3JlUHJvamVjdCA9IChmdW5jdGlvbiAocHJvamVjdEZvcm1OYW1lXykge1xuICAgICAgICAvL2lmIGtleSBpbiBsb2NhbHN0b3JhZ2UgaXMgcHJvamVjdE5hbWVzLCB0aGVuIGdldCB0aGUgdmFsdWVzIGFzXG4gICAgICAgIC8vYW4gYXJyYXlcbiAgICAgICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdwcm9qZWN0TmFtZXMnKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5c1NldCA9IG5ldyBTZXQoSlNPTi5wYXJzZSgoX2EgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJykpO1xuICAgICAgICAgICAgICAgIFsndG9kYXknLCAndXBjb21pbmcnLCAnYXJjaGl2ZWQnLCAncHJvamVjdHMnXS5mb3JFYWNoKChuYW1lKSA9PiBrZXlzU2V0LmFkZChuYW1lKSk7XG4gICAgICAgICAgICAgICAgLy9pZiBuYW1lIGFscmVhZHkgcHJlc2VudFxuICAgICAgICAgICAgICAgIGlmIChrZXlzU2V0Lmhhcyhwcm9qZWN0Rm9ybU5hbWVfKSkge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChgJHtwcm9qZWN0Rm9ybU5hbWVffSBhbHJlYWR5IGV4aXN0cyBhcyBhIHByb2plY3QgKO+9oeKAosyB77i/4oCizIDvvaEpICBQbGVhc2UgY2hvb3NlIGFub3RoZXIgbmFtZS5gKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy9pZiBuZXcgbmFtZSwgcHVzaCB0byBhcnIgYW5kIHRoZW4gc3RvcmUgYXJyYXkgaW4gbG9jYWxTdG9yYWdlXG4gICAgICAgICAgICAgICAgICAgIGtleXNTZXQuYWRkKHByb2plY3RGb3JtTmFtZV8pO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KEFycmF5LmZyb20oa2V5c1NldCkpKTtcbiAgICAgICAgICAgICAgICAgICAgKDAsIGFkZFByb2plY3RUb1NpZGViYXJfMS5hZGRQcm9qZWN0VG9TaWRlYmFyKShwcm9qZWN0Rm9ybU5hbWUsIHByb2plY3RGb3JtQ29sb3VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pKHByb2plY3RGb3JtTmFtZSk7XG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG4gICAgLy8gaWYgKGFkZFByb2plY3RNb2RhbClcbiAgICAvLyBcdGFkZFByb2plY3RNb2RhbC5zdHlsZS52aXNpYmlsaXR5ID1cbiAgICAvLyBcdFx0YWRkUHJvamVjdE1vZGFsLnN0eWxlLnZpc2liaWxpdHkgPT09ICdoaWRkZW4nID8gJ3Zpc2libGUnIDogJ2hpZGRlbidcbiAgICBhZGRQcm9qZWN0TW9kYWwgPT09IG51bGwgfHwgYWRkUHJvamVjdE1vZGFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhZGRQcm9qZWN0TW9kYWwucmVtb3ZlKCk7XG59O1xuZXhwb3J0cy5oYW5kbGVQcm9qZWN0Rm9ybVN1Ym1pdCA9IGhhbmRsZVByb2plY3RGb3JtU3VibWl0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZVByb2plY3RzVGFiQ2xpY2sgPSB2b2lkIDA7XG5jb25zdCBhZGRUb2Rvc1RvQ29udGVudF8xID0gcmVxdWlyZShcIi4uL3Byb2plY3RzQW5kVG9kb3MvYWRkVG9kb3NUb0NvbnRlbnRcIik7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IGhhbmRsZVByb2plY3RzVGFiQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbG9nID0gKGkpID0+IGNvbnNvbGUubG9nKCdcXG4nLCBpKTtcbiAgICAvL3JlbW92ZSBjb250ZW50IHNlY3Rpb24ncyBwcmV2aW91cyBjb250ZW50c1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IGNvbnRlbnRCb3R0b21QcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYm90dG9tJyk7XG4gICAgY29udGVudEJvdHRvbVByZXYgPT09IG51bGwgfHwgY29udGVudEJvdHRvbVByZXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRlbnRCb3R0b21QcmV2LnJlbW92ZSgpO1xuICAgIC8vcmVuZGVyIG5ldyBjb250ZW50XG4gICAgY29uc3QgY29udGVudEJvdHRvbSA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2NvbnRlbnQtYm90dG9tJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShjb250ZW50KShjb250ZW50Qm90dG9tKTtcbiAgICBjb25zdCBwcm9qZWN0c0FuZFRvZG9zQXJyID0gW107XG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoa2V5ICE9PSAncHJvamVjdE5hbWVzJyAmJlxuICAgICAgICAgICAga2V5ICE9PSAnYXJjaGl2ZWQnICYmXG4gICAgICAgICAgICBrZXkgIT09ICd1cGNvbWluZycgJiZcbiAgICAgICAgICAgIGtleSAhPT0gJ3RvZGF5Jykge1xuICAgICAgICAgICAgcHJvamVjdHNBbmRUb2Rvc0Fyci5wdXNoKEpTT04ucGFyc2UoKF9hID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHByb2plY3RzQW5kVG9kb3NBcnIuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAoMCwgYWRkVG9kb3NUb0NvbnRlbnRfMS5hZGRUb2Rvc1RvQ29udGVudCkocHJvamVjdCk7XG4gICAgfSk7XG59O1xuZXhwb3J0cy5oYW5kbGVQcm9qZWN0c1RhYkNsaWNrID0gaGFuZGxlUHJvamVjdHNUYWJDbGljaztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVTZWFyY2hGb3JtU3VibWl0ID0gdm9pZCAwO1xuY29uc3QgYWRkVG9kb3NUb0NvbnRlbnRfMSA9IHJlcXVpcmUoXCIuLi9wcm9qZWN0c0FuZFRvZG9zL2FkZFRvZG9zVG9Db250ZW50XCIpO1xuY29uc3QgZWxlbWVudF9jcmVhdG9yc18xID0gcmVxdWlyZShcIi4uL2VsZW1lbnQtY3JlYXRvcnNcIik7XG5jb25zdCBoYW5kbGVTZWFyY2hGb3JtU3VibWl0ID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IGxvZyA9IChpKSA9PiBjb25zb2xlLmxvZygnXFxuJywgaSk7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAvL3JlbW92ZSBjb250ZW50IHNlY3Rpb24ncyBwcmV2aW91cyBjb250ZW50c1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IGNvbnRlbnRCb3R0b21QcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYm90dG9tJyk7XG4gICAgY29udGVudEJvdHRvbVByZXYgPT09IG51bGwgfHwgY29udGVudEJvdHRvbVByZXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRlbnRCb3R0b21QcmV2LnJlbW92ZSgpO1xuICAgIC8vcmVuZGVyIG5ldyBjb250ZW50IGFuZCBhcHBlbmQgdG8gdGhpc1xuICAgIGNvbnN0IGNvbnRlbnRCb3R0b20gPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydjb250ZW50LWJvdHRvbSddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoY29udGVudCkoY29udGVudEJvdHRvbSk7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XG4gICAgY29uc3Qgc2VhcmNoVGVybSA9IChfYSA9IGZvcm1EYXRhLmdldCgnc2VhcmNoLXRvZG8nKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgcHJvamVjdEFyciA9IFtdO1xuICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKGtleSAhPT0gJ3Byb2plY3ROYW1lcycgJiZcbiAgICAgICAgICAgIGtleSAhPT0gJ2FyY2hpdmVkJyAmJlxuICAgICAgICAgICAga2V5ICE9PSAndG9kYXknICYmXG4gICAgICAgICAgICBrZXkgIT09ICd1cGNvbWluZycpIHtcbiAgICAgICAgICAgIHByb2plY3RBcnIucHVzaChKU09OLnBhcnNlKChfYSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBtYXRjaGVkUHJvakFuZFRvZG9zQXJyID0gW107XG4gICAgcHJvamVjdEFyci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICAgICAgaWYgKHRvZG8udG9kb05hbWUgPT09IHNlYXJjaFRlcm0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0ge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZTogcHJvamVjdC5wcm9qZWN0LnByb2plY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbG91cjogcHJvamVjdC5wcm9qZWN0LnByb2plY3RDb2xvdXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb05hbWU6IHRvZG8udG9kb05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uOiB0b2RvLnRvZG9EZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRHVlRGF0ZTogdG9kby50b2RvRHVlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHk6IHRvZG8udG9kb1ByaW9yaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG1hdGNoZWRQcm9qQW5kVG9kb3NBcnIucHVzaCh0ZW1wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgbWF0Y2hlZFByb2pBbmRUb2Rvc0Fyci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICgwLCBhZGRUb2Rvc1RvQ29udGVudF8xLmFkZFRvZG9zVG9Db250ZW50KShwcm9qZWN0KTtcbiAgICB9KTtcbn07XG5leHBvcnRzLmhhbmRsZVNlYXJjaEZvcm1TdWJtaXQgPSBoYW5kbGVTZWFyY2hGb3JtU3VibWl0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZVNvcnRCeVByaW9yaXR5Q2xpY2sgPSB2b2lkIDA7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IGFkZFRvZG9zVG9Db250ZW50XzEgPSByZXF1aXJlKFwiLi4vcHJvamVjdHNBbmRUb2Rvcy9hZGRUb2Rvc1RvQ29udGVudFwiKTtcbmNvbnN0IGhhbmRsZVNvcnRCeVByaW9yaXR5Q2xpY2sgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICBjb25zdCBsb2cgPSAoaSkgPT4gY29uc29sZS5sb2coJ1xcbicsIGkpO1xuICAgIC8vcmVtb3ZlIGNvbnRlbnQgc2VjdGlvbidzIHByZXZpb3VzIGNvbnRlbnRzXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3QgY29udGVudEJvdHRvbVByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1ib3R0b20nKTtcbiAgICBjb250ZW50Qm90dG9tUHJldiA9PT0gbnVsbCB8fCBjb250ZW50Qm90dG9tUHJldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGVudEJvdHRvbVByZXYucmVtb3ZlKCk7XG4gICAgLy9yZW5kZXIgbmV3IGNvbnRlbnRcbiAgICBjb25zdCBjb250ZW50Qm90dG9tID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnY29udGVudC1ib3R0b20nXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGNvbnRlbnQpKGNvbnRlbnRCb3R0b20pO1xuICAgIGNvbnN0IHNlbGVjdGVkU29ydFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICBjb25zdCBwcm9qZWN0QXJyID0gW107XG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoa2V5ICE9PSAncHJvamVjdE5hbWVzJyAmJiBrZXkgIT09ICdhcmNoaXZlZCcpIHtcbiAgICAgICAgICAgIHByb2plY3RBcnIucHVzaChKU09OLnBhcnNlKChfYSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvL2Fzc2lnbnMgYSBrZXkgdG8gZWFjaCBwcm9qZWN0IGJhc2VkIG9uIGl0cyB0b2RvOyBtYXAgdXNlZCBiZWNhdXNlIFRTQyBjb21wbGFpbnMgd2l0aCBvYmplY3RbcHJvcGVydHldIG1ldGhvZC4gQWxzbyBlYXNpZXIgdG8gdHVybiBpbnRvIGFycmF5XG4gICAgY29uc3QgcHJvamVjdE1hcCA9IHByb2plY3RBcnIucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcbiAgICAgICAgY3Vyci50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICBpZiAodG9kby50b2RvUHJpb3JpdHkgPT09ICdpbW1lZGlhdGUnKSB7XG4gICAgICAgICAgICAgICAgYWNjLnNldCg1LCB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3ROYW1lOiBjdXJyLnByb2plY3QucHJvamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q29sb3VyOiBjdXJyLnByb2plY3QucHJvamVjdENvbG91cixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9kb3M6IFt0b2RvXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRvZG8udG9kb1ByaW9yaXR5ID09PSAndXJnZW50Jykge1xuICAgICAgICAgICAgICAgIGFjYy5zZXQoNCwge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZTogY3Vyci5wcm9qZWN0LnByb2plY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbG91cjogY3Vyci5wcm9qZWN0LnByb2plY3RDb2xvdXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zOiBbdG9kb10sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2RvLnRvZG9Qcmlvcml0eSA9PT0gJ2hpZ2gnKSB7XG4gICAgICAgICAgICAgICAgYWNjLnNldCgzLCB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3ROYW1lOiBjdXJyLnByb2plY3QucHJvamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q29sb3VyOiBjdXJyLnByb2plY3QucHJvamVjdENvbG91cixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9kb3M6IFt0b2RvXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRvZG8udG9kb1ByaW9yaXR5ID09PSAnbWVkaXVtJykge1xuICAgICAgICAgICAgICAgIGFjYy5zZXQoMiwge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZTogY3Vyci5wcm9qZWN0LnByb2plY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbG91cjogY3Vyci5wcm9qZWN0LnByb2plY3RDb2xvdXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zOiBbdG9kb10sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2RvLnRvZG9Qcmlvcml0eSA9PT0gJ2xvdycpIHtcbiAgICAgICAgICAgICAgICBhY2Muc2V0KDEsIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE5hbWU6IGN1cnIucHJvamVjdC5wcm9qZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDb2xvdXI6IGN1cnIucHJvamVjdC5wcm9qZWN0Q29sb3VyLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b2RvczogW3RvZG9dLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBuZXcgTWFwKCkpO1xuICAgIGxvZyhwcm9qZWN0TWFwKTtcbiAgICAvL2NhbiB1c2UgdGhlIHNvcnQgbWV0aG9kIG5vd1xuICAgIGNvbnN0IHByb2plY3RNYXBBcnIgPSBBcnJheS5mcm9tKHByb2plY3RNYXApO1xuICAgIGlmIChzZWxlY3RlZFNvcnRWYWx1ZSA9PT0gJ2xvd1RvSW1tZWRpYXRlJykge1xuICAgICAgICBwcm9qZWN0TWFwQXJyLnNvcnQoKGEsIGIpID0+IGFbMF0gLSBiWzBdKTtcbiAgICB9XG4gICAgaWYgKHNlbGVjdGVkU29ydFZhbHVlID09PSAnaW1tZWRpYXRlVG9Mb3cnKSB7XG4gICAgICAgIHByb2plY3RNYXBBcnIuc29ydCgoYSwgYikgPT4gYlswXSAtIGFbMF0pO1xuICAgIH1cbiAgICAvL3JlbmRlciB0aGUgdG9kb3NcbiAgICBwcm9qZWN0TWFwQXJyLmZvckVhY2goKG51bVByb2plY3QpID0+IHtcbiAgICAgICAgKDAsIGFkZFRvZG9zVG9Db250ZW50XzEuYWRkVG9kb3NUb0NvbnRlbnQpKG51bVByb2plY3RbMV0pO1xuICAgIH0pO1xufTtcbmV4cG9ydHMuaGFuZGxlU29ydEJ5UHJpb3JpdHlDbGljayA9IGhhbmRsZVNvcnRCeVByaW9yaXR5Q2xpY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlVGhlbWVJY29uVG9nZ2xlID0gdm9pZCAwO1xuY29uc3QgaGFuZGxlVGhlbWVJY29uVG9nZ2xlID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgY29uc29sZS5sb2coZXYpO1xufTtcbmV4cG9ydHMuaGFuZGxlVGhlbWVJY29uVG9nZ2xlID0gaGFuZGxlVGhlbWVJY29uVG9nZ2xlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZVRvZGF5VGFiQ2xpY2sgPSB2b2lkIDA7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IGFkZFRvZG9zVG9Db250ZW50XzEgPSByZXF1aXJlKFwiLi4vcHJvamVjdHNBbmRUb2Rvcy9hZGRUb2Rvc1RvQ29udGVudFwiKTtcbmNvbnN0IGhhbmRsZVRvZGF5VGFiQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbG9nID0gKGkpID0+IGNvbnNvbGUubG9nKCdcXG4nLCBpKTtcbiAgICAvL3JlbW92ZSBjb250ZW50IHNlY3Rpb24ncyBwcmV2aW91cyBjb250ZW50c1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IGNvbnRlbnRCb3R0b21QcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYm90dG9tJyk7XG4gICAgY29udGVudEJvdHRvbVByZXYgPT09IG51bGwgfHwgY29udGVudEJvdHRvbVByZXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRlbnRCb3R0b21QcmV2LnJlbW92ZSgpO1xuICAgIC8vcmVuZGVyIG5ldyBjb250ZW50IGFuZCBhcHBlbmQgdG8gdGhpc1xuICAgIGNvbnN0IGNvbnRlbnRCb3R0b20gPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydjb250ZW50LWJvdHRvbSddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoY29udGVudCkoY29udGVudEJvdHRvbSk7XG4gICAgY29uc3QgcHJvamVjdEFyciA9IFtdO1xuICAgIC8vZ3JhYiBhbGwgdGhlIHByb2plY3RzIGV4Y2VwdCBvbmVzIHNwZWNpZmllZFxuICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKGtleSAhPT0gJ3Byb2plY3ROYW1lcycgJiYga2V5ICE9PSAnYXJjaGl2ZWQnKSB7XG4gICAgICAgICAgICBwcm9qZWN0QXJyLnB1c2goSlNPTi5wYXJzZSgoX2EgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBkYXRlID0gbm93LmdldERhdGUoKTtcbiAgICBjb25zdCBtb250aCA9IG5vdy5nZXRNb250aCgpICsgMTtcbiAgICBjb25zdCB5ZWFyID0gbm93LmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgdG9kYXkgPSBgJHt5ZWFyfS0ke21vbnRoIDwgMTAgPyAnMCcgKyBtb250aCA6IG1vbnRofS0ke2RhdGUgPCAxMCA/ICcwJyArIGRhdGUgOiBkYXRlfWA7XG4gICAgY29uc3QgcHJvakFuZFRvZG9zRmlsdGVyZWQgPSBbXTtcbiAgICAvL2dyYWIgZWFjaCB0b2RvIGR1ZSB0b2RheSBhbmQgcHV0IGludG8gY3JlYXRlZCB0ZW1wIHByb2plY3QgYW5kIHB1c2ggcHJvamVjdCBpbnRvIGZpbHRlcmVkIGFycmF5XG4gICAgcHJvamVjdEFyci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICAgICAgaWYgKHRvZG8udG9kb0R1ZURhdGUgPT09IHRvZGF5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcCA9IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE5hbWU6IHByb2plY3QucHJvamVjdC5wcm9qZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDb2xvdXI6IHByb2plY3QucHJvamVjdC5wcm9qZWN0Q29sb3VyLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b2RvczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9OYW1lOiB0b2RvLnRvZG9OYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbjogdG9kby50b2RvRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0R1ZURhdGU6IHRvZG8udG9kb0R1ZURhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5OiB0b2RvLnRvZG9Qcmlvcml0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBwcm9qQW5kVG9kb3NGaWx0ZXJlZC5wdXNoKHRlbXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICAvL3JlbmRlciB0aGUgdG9kb3NcbiAgICBwcm9qQW5kVG9kb3NGaWx0ZXJlZC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICgwLCBhZGRUb2Rvc1RvQ29udGVudF8xLmFkZFRvZG9zVG9Db250ZW50KShwcm9qZWN0KTtcbiAgICB9KTtcbn07XG5leHBvcnRzLmhhbmRsZVRvZGF5VGFiQ2xpY2sgPSBoYW5kbGVUb2RheVRhYkNsaWNrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZVRvZG9DaGVja2JveENvbXBsZXRlID0gdm9pZCAwO1xuY29uc3QgaGFuZGxlVG9kb0NoZWNrYm94Q29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2YsIF9nLCBfaCwgX2osIF9rO1xuICAgIGNvbnN0IGxvZyA9IChpKSA9PiBjb25zb2xlLmxvZygnXFxuJywgaSk7XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJjaGl2ZWQnKSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXJjaGl2ZWQnLCBKU09OLnN0cmluZ2lmeShbXSkpO1xuICAgIH1cbiAgICBjb25zdCB0aGlzUHJvamVjdE5hbWUgPSAoX2IgPSAoX2EgPSB0aGlzLnByZXZpb3VzU2libGluZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRleHRDb250ZW50KSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnJztcbiAgICBjb25zdCB0aGlzUHJvamVjdENvbG91ciA9IHRoaXMudmFsdWU7XG4gICAgY29uc3QgdGhpc1RvZG9OYW1lID0gKF9nID0gKF9mID0gKF9lID0gKF9kID0gKF9jID0gdGhpcy5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmZpcnN0Q2hpbGQpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5uZXh0U2libGluZykgPT09IG51bGwgfHwgX2YgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9mLnRleHRDb250ZW50KSAhPT0gbnVsbCAmJiBfZyAhPT0gdm9pZCAwID8gX2cgOiAnJztcbiAgICBjb25zdCBwcm9qZWN0QXJyID0gW107XG4gICAgLy9ncmFiIHRoZSBlbnRpcmUgcHJvamVjdCBiZWxvbmdpbmcgdG8gY3VycmVudGx5IGNoZWNrZWQgdG9kb1xuICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKGtleSAhPT0gJ3Byb2plY3ROYW1lcycgJiYga2V5ICE9PSAnYXJjaGl2ZWQnKSB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSB0aGlzUHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0QXJyLnB1c2goSlNPTi5wYXJzZSgoX2EgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgYXJjaGl2ZWRUb2RvcyA9IEpTT04ucGFyc2UoKF9oID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FyY2hpdmVkJykpICE9PSBudWxsICYmIF9oICE9PSB2b2lkIDAgPyBfaCA6ICcnKTtcbiAgICBjb25zdCB0b2RvVG9CZUFyY2hpdmVkID0gW107XG4gICAgLy9ncmFiIHJlbWFpbmluZyB0b2RvcyB0aGF0IGFyZSBub3QgY3VycmVudCB0b2RvXG4gICAgY29uc3QgdG9kb3NBcnJGaWx0ZXJlZCA9IFtdO1xuICAgIHByb2plY3RBcnJbMF0udG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICBpZiAodG9kby50b2RvTmFtZSAhPT0gdGhpc1RvZG9OYW1lKSB7XG4gICAgICAgICAgICB0b2Rvc0FyckZpbHRlcmVkLnB1c2godG9kbyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0b2RvVG9CZUFyY2hpdmVkLnB1c2godG9kbyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvL3JlcGxhY2UgdGhlIHRvZG9zIG9mIHByb2plY3QgZnJvbSBzdG9yYWdlIHdpdGggZmlsdGVyZWQgdG9kb3Mgd2hpY2ggZG8gbm90IGhhdmUgdGhlIGN1cnJlbnRseSBjaGVja2VkIG9mZiB0b2RvXG4gICAgcHJvamVjdEFyclswXS50b2RvcyA9IHRvZG9zQXJyRmlsdGVyZWQ7XG4gICAgLy9wdXQgdGhlIHJlbWFpbmluZyB0b2RvcyBiYWNrIGludG8gcHJvamVjdCBhbmQgaW50byBzdG9yYWdlXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpc1Byb2plY3ROYW1lLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0QXJyWzBdKSk7XG4gICAgY29uc3QgcHJvamVjdEFuZFRvZG9Ub0JlQXJjaGl2ZWQgPSB7XG4gICAgICAgIHByb2plY3Q6IHsgcHJvamVjdE5hbWU6IHRoaXNQcm9qZWN0TmFtZSwgcHJvamVjdENvbG91cjogdGhpc1Byb2plY3RDb2xvdXIgfSxcbiAgICAgICAgdG9kb3M6IFt0b2RvVG9CZUFyY2hpdmVkWzBdXSxcbiAgICB9O1xuICAgIC8vc3RvcmUgdGhlIHJlbW92ZWQgdG9kbyB1bmRlciAnYXJjaGl2ZWQnXG4gICAgYXJjaGl2ZWRUb2Rvcy5wdXNoKHByb2plY3RBbmRUb2RvVG9CZUFyY2hpdmVkKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXJjaGl2ZWQnLCBKU09OLnN0cmluZ2lmeShhcmNoaXZlZFRvZG9zKSk7XG4gICAgLy9yZW1vdmUgdGhlIGN1cnJlbnQgdG9kbyB3aG9zZSBjaGVja2JveCBpcyBjbGlja2VkXG4gICAgKF9rID0gKF9qID0gdGhpcy5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfaiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2oucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgX2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9rLnJlbW92ZSgpO1xufTtcbmV4cG9ydHMuaGFuZGxlVG9kb0NoZWNrYm94Q29tcGxldGUgPSBoYW5kbGVUb2RvQ2hlY2tib3hDb21wbGV0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVUb2RvQ2xvc2VJY29uQ2xpY2sgPSB2b2lkIDA7XG5jb25zdCBoYW5kbGVUb2RvQ2xvc2VJY29uQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdG9kb01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJyk7XG4gICAgLy8gaWYgKHRvZG9Nb2RhbClcbiAgICAvLyBcdHRvZG9Nb2RhbC5zdHlsZS52aXNpYmlsaXR5ID0gdG9kb01vZGFsLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcbiAgICAvLyBcdFx0PyAnaGlkZGVuJ1xuICAgIC8vIFx0XHQ6ICd2aXNpYmxlJ1xuICAgIGlmICh0b2RvTW9kYWwpXG4gICAgICAgIHRvZG9Nb2RhbC5yZW1vdmUoKTtcbn07XG5leHBvcnRzLmhhbmRsZVRvZG9DbG9zZUljb25DbGljayA9IGhhbmRsZVRvZG9DbG9zZUljb25DbGljaztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVUb2RvRm9ybVN1Ym1pdCA9IHZvaWQgMDtcbmNvbnN0IHN0b3JlUHJvamVjdEFuZFRvZG9zRnVsbF8xID0gcmVxdWlyZShcIi4uL3Byb2plY3RzQW5kVG9kb3Mvc3RvcmVQcm9qZWN0QW5kVG9kb3NGdWxsXCIpO1xuY29uc3QgYWRkVG9kb3NUb0NvbnRlbnRfMSA9IHJlcXVpcmUoXCIuLi9wcm9qZWN0c0FuZFRvZG9zL2FkZFRvZG9zVG9Db250ZW50XCIpO1xuY29uc3QgaGFuZGxlVG9kb0Zvcm1TdWJtaXQgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZiwgX2csIF9oLCBfaiwgX2ssIF9sLCBfbTtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGxvZyA9IChpKSA9PiBjb25zb2xlLmxvZygnXFxuJywgaSk7XG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHRvZG9Gb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcbiAgICBjb25zdCB0b2RvRm9ybVByb2plY3ROYW1lID0gKF9iID0gKF9hID0gdG9kb0Zvcm1EYXRhLmdldCgnYWRkVG9kby1wcm9qZWN0TmFtZScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9TdHJpbmcoKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJyc7XG4gICAgY29uc3QgdG9kb0Zvcm1Qcm9qZWN0Q29sb3VyID0gKF9kID0gKF9jID0gdG9kb0Zvcm1EYXRhLmdldCgnYWRkVG9kby1wcm9qZWN0Q29sb3VyJykpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy50b1N0cmluZygpKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiAnJztcbiAgICBjb25zdCB0b2RvRm9ybU5hbWUgPSAoX2YgPSAoX2UgPSB0b2RvRm9ybURhdGEuZ2V0KCdhZGRUb2RvLW5hbWUnKSkgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLnRvU3RyaW5nKCkpICE9PSBudWxsICYmIF9mICE9PSB2b2lkIDAgPyBfZiA6ICcnO1xuICAgIGNvbnN0IHRvZG9Gb3JtRGVzY3JpcHRpb24gPSAoX2ggPSAoX2cgPSB0b2RvRm9ybURhdGEuZ2V0KCdhZGRUb2RvLWRlc2NyaXB0aW9uJykpID09PSBudWxsIHx8IF9nID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZy50b1N0cmluZygpKSAhPT0gbnVsbCAmJiBfaCAhPT0gdm9pZCAwID8gX2ggOiAnJztcbiAgICBjb25zdCB0b2RvRm9ybUR1ZURhdGUgPSAoX2sgPSAoX2ogPSB0b2RvRm9ybURhdGEuZ2V0KCdhZGRUb2RvLWR1ZURhdGUnKSkgPT09IG51bGwgfHwgX2ogPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9qLnRvU3RyaW5nKCkpICE9PSBudWxsICYmIF9rICE9PSB2b2lkIDAgPyBfayA6ICcnO1xuICAgIGNvbnN0IHRvZG9Gb3JtU2VsZWN0UHJpb3JpdHkgPSAoX20gPSAoX2wgPSB0b2RvRm9ybURhdGEuZ2V0KCdhZGRUb2RvLXNlbGVjdFByaW9yaXR5JykpID09PSBudWxsIHx8IF9sID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbC50b1N0cmluZygpKSAhPT0gbnVsbCAmJiBfbSAhPT0gdm9pZCAwID8gX20gOiAnJztcbiAgICBjb25zdCBwcm9qZWN0c0FuZFRvZG9zRmFjdG9yeSA9IGZ1bmN0aW9uIChwcm9qZWN0TmFtZSwgcHJvamVjdENvbG91ciwgdG9kb05hbWUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvamVjdDogeyBwcm9qZWN0TmFtZSwgcHJvamVjdENvbG91ciB9LFxuICAgICAgICAgICAgdG9kb3M6IFt7IHRvZG9OYW1lLCB0b2RvRGVzY3JpcHRpb24sIHRvZG9EdWVEYXRlLCB0b2RvUHJpb3JpdHkgfV0sXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBjb25zdCBwcm9qZWN0QW5kVG9kb3MgPSBwcm9qZWN0c0FuZFRvZG9zRmFjdG9yeSh0b2RvRm9ybVByb2plY3ROYW1lLCB0b2RvRm9ybVByb2plY3RDb2xvdXIsIHRvZG9Gb3JtTmFtZSwgdG9kb0Zvcm1EZXNjcmlwdGlvbiwgdG9kb0Zvcm1EdWVEYXRlLCB0b2RvRm9ybVNlbGVjdFByaW9yaXR5KTtcbiAgICBjb25zdCB0b2RvRXhpc3RzID0gKDAsIHN0b3JlUHJvamVjdEFuZFRvZG9zRnVsbF8xLnN0b3JlUHJvamVjdEFuZFRvZG9zRnVsbCkocHJvamVjdEFuZFRvZG9zKTtcbiAgICBpZiAoIXRvZG9FeGlzdHMpIHtcbiAgICAgICAgKDAsIGFkZFRvZG9zVG9Db250ZW50XzEuYWRkVG9kb3NUb0NvbnRlbnQpKHByb2plY3RBbmRUb2Rvcyk7XG4gICAgfVxuICAgIHRvZG9Db250YWluZXIgPT09IG51bGwgfHwgdG9kb0NvbnRhaW5lciA9PT0gdm9pZCAwID8gdm9pZCAwIDogdG9kb0NvbnRhaW5lci5yZW1vdmUoKTtcbn07XG5leHBvcnRzLmhhbmRsZVRvZG9Gb3JtU3VibWl0ID0gaGFuZGxlVG9kb0Zvcm1TdWJtaXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlVXBjb21pbmdUYWJDbGljayA9IHZvaWQgMDtcbmNvbnN0IGVsZW1lbnRfY3JlYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50LWNyZWF0b3JzXCIpO1xuY29uc3QgYWRkVG9kb3NUb0NvbnRlbnRfMSA9IHJlcXVpcmUoXCIuLi9wcm9qZWN0c0FuZFRvZG9zL2FkZFRvZG9zVG9Db250ZW50XCIpO1xuY29uc3QgaGFuZGxlVXBjb21pbmdUYWJDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBsb2cgPSAoaSkgPT4gY29uc29sZS5sb2coJ1xcbicsIGkpO1xuICAgIC8vcmVtb3ZlIGNvbnRlbnQgc2VjdGlvbidzIHByZXZpb3VzIGNvbnRlbnRzXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3QgY29udGVudEJvdHRvbVByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1ib3R0b20nKTtcbiAgICBjb250ZW50Qm90dG9tUHJldiA9PT0gbnVsbCB8fCBjb250ZW50Qm90dG9tUHJldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGVudEJvdHRvbVByZXYucmVtb3ZlKCk7XG4gICAgLy9yZW5kZXIgbmV3IGNvbnRlbnQgYW5kIGFwcGVuZCB0byB0aGlzXG4gICAgY29uc3QgY29udGVudEJvdHRvbSA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2NvbnRlbnQtYm90dG9tJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShjb250ZW50KShjb250ZW50Qm90dG9tKTtcbiAgICBjb25zdCBwcm9qZWN0QXJyID0gW107XG4gICAgLy9ncmFiIGFsbCB0aGUgcHJvamVjdHMgZXhjZXB0IG9uZXMgc3BlY2lmaWVkXG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoa2V5ICE9PSAncHJvamVjdE5hbWVzJyAmJiBrZXkgIT09ICdhcmNoaXZlZCcpIHtcbiAgICAgICAgICAgIHByb2plY3RBcnIucHVzaChKU09OLnBhcnNlKChfYSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGRhdGUgPSBub3cuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IG1vbnRoID0gbm93LmdldE1vbnRoKCkgKyAxO1xuICAgIGNvbnN0IHllYXIgPSBub3cuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCB0b2RheSA9IGAke3llYXJ9LSR7bW9udGggPCAxMCA/ICcwJyArIG1vbnRoIDogbW9udGh9LSR7ZGF0ZSA8IDEwID8gJzAnICsgZGF0ZSA6IGRhdGV9YDtcbiAgICBjb25zdCBwcm9qQW5kVG9kb3NGaWx0ZXJlZCA9IFtdO1xuICAgIC8vZ3JhYiBlYWNoIHRvZG8gbm90IGR1ZSB0b2RheSBhbmQgcHV0IGludG8gY3JlYXRlZCB0ZW1wIHByb2plY3QgYW5kIHB1c2ggcHJvamVjdCBpbnRvIGZpbHRlcmVkIGFycmF5XG4gICAgcHJvamVjdEFyci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICAgICAgaWYgKHRvZG8udG9kb0R1ZURhdGUgIT09IHRvZGF5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcCA9IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE5hbWU6IHByb2plY3QucHJvamVjdC5wcm9qZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDb2xvdXI6IHByb2plY3QucHJvamVjdC5wcm9qZWN0Q29sb3VyLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b2RvczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9OYW1lOiB0b2RvLnRvZG9OYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbjogdG9kby50b2RvRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0R1ZURhdGU6IHRvZG8udG9kb0R1ZURhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5OiB0b2RvLnRvZG9Qcmlvcml0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBwcm9qQW5kVG9kb3NGaWx0ZXJlZC5wdXNoKHRlbXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICAvL3JlbmRlciB0aGUgdG9kb3NcbiAgICBwcm9qQW5kVG9kb3NGaWx0ZXJlZC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICgwLCBhZGRUb2Rvc1RvQ29udGVudF8xLmFkZFRvZG9zVG9Db250ZW50KShwcm9qZWN0KTtcbiAgICB9KTtcbn07XG5leHBvcnRzLmhhbmRsZVVwY29taW5nVGFiQ2xpY2sgPSBoYW5kbGVVcGNvbWluZ1RhYkNsaWNrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhlYWRlciA9IHZvaWQgMDtcbmNvbnN0IGVsZW1lbnRfY3JlYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50LWNyZWF0b3JzXCIpO1xuY29uc3QgaGVhZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGxvZyA9IChpKSA9PiBjb25zb2xlLmxvZygnXFxuJywgaSk7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnaGVhZGVyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShyb290KShoZWFkZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnVG9kbyBMaXN0IEFwcCcpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoaGVhZGVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2gxJykoWyd0aXRsZScsICdoZWFkZXItdGl0bGUnXSkpO1xufTtcbmV4cG9ydHMuaGVhZGVyID0gaGVhZGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnByb2plY3RNb2RhbCA9IHZvaWQgMDtcbmNvbnN0IGVsZW1lbnRfY3JlYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50LWNyZWF0b3JzXCIpO1xuY29uc3QgaGFuZGxlUHJvamVjdENsb3NlSWNvbkNsaWNrXzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlUHJvamVjdENsb3NlSWNvbkNsaWNrXCIpO1xuY29uc3QgaGFuZGxlUHJvamVjdEZvcm1TdWJtaXRfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVQcm9qZWN0Rm9ybVN1Ym1pdFwiKTtcbmNvbnN0IHByb2plY3RNb2RhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgICAvL2FkZFByb2plY3QgbW9kYWxcbiAgICBjb25zdCBhZGRQcm9qZWN0Q29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnYWRkUHJvamVjdC1jb250YWluZXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNpZGViYXIpKGFkZFByb2plY3RDb250YWluZXIpO1xuICAgIGNvbnN0IGFkZFByb2plY3RIZWFkaW5nQ29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnYWRkUHJvamVjdEhlYWRpbmctY29udGFpbmVyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0Q29udGFpbmVyKShhZGRQcm9qZWN0SGVhZGluZ0NvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdBZGQgcHJvamVjdCcpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdEhlYWRpbmdDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaDMnKShbJ2hlYWRpbmctdGV4dCcsICd0ZXh0LWFkZFByb2plY3QnXSkpO1xuICAgIGNvbnN0IGFkZFByb2plY3RGb3JtID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2Zvcm0nKShbJ2Zvcm0tYWRkUHJvamVjdCddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsnYWN0aW9uJywgJyMnXSxcbiAgICAgICAgWydtZXRob2QnLCAncG9zdCddLFxuICAgICAgICBbJ2lkJywgJ2Zvcm0tYWRkUHJvamVjdCddLFxuICAgICAgICBbJ25hbWUnLCAnZm9ybS1hZGRQcm9qZWN0J10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdzdWJtaXQnKShoYW5kbGVQcm9qZWN0Rm9ybVN1Ym1pdF8xLmhhbmRsZVByb2plY3RGb3JtU3VibWl0KSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFByb2plY3RDb250YWluZXIpKShhZGRQcm9qZWN0Rm9ybSk7XG4gICAgY29uc3QgYWRkUHJvamVjdE5hbWVDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydhZGRQcm9qZWN0LW5hbWUtY29udGFpbmVyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0Rm9ybSkoYWRkUHJvamVjdE5hbWVDb250YWluZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ2ZvcicsICdhZGRQcm9qZWN0LW5hbWUnXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdOYW1lJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0TmFtZUNvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdsYWJlbCcpKFsnbGFiZWwtbmFtZSddKSk7XG4gICAgLy9pbnB1dCBuYW1lXG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ2lkJywgJ2FkZFByb2plY3QtbmFtZSddLFxuICAgICAgICBbJ3R5cGUnLCAndGV4dCddLFxuICAgICAgICBbJ21pbmxlbmd0aCcsICcyJ10sXG4gICAgICAgIFsnbWF4bGVuZ3RoJywgJzE3J10sXG4gICAgICAgIFsncGF0dGVybicsICdeW2EtekEtWl1bYS16QS1aMC05LV8uXXsxLDIwfSQnXSxcbiAgICAgICAgWydwbGFjZWhvbGRlcicsICdFbnRlciBuYW1lIG9mIHByb2plY3QnXSxcbiAgICAgICAgWyduYW1lJywgJ2FkZFByb2plY3QtbmFtZSddLFxuICAgICAgICBbJ3JlcXVpcmVkJywgJyddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdE5hbWVDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaW5wdXQnKShbJ2FkZFByb2plY3QtbmFtZSddKSk7XG4gICAgY29uc3QgYWRkUHJvamVjdENvbG91ckNvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2FkZFByb2plY3QtY29sb3VyLWNvbnRhaW5lciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdEZvcm0pKGFkZFByb2plY3RDb2xvdXJDb250YWluZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ2ZvcicsICdhZGRQcm9qZWN0LWNvbG91ciddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ0NvbG91cicpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdENvbG91ckNvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdsYWJlbCcpKFsnbGFiZWwtY29sb3VyJ10pKTtcbiAgICAvL2lucHV0IGNvbG91clxuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWyd0eXBlJywgJ2NvbG9yJ10sXG4gICAgICAgIFsnaWQnLCAnYWRkUHJvamVjdC1jb2xvdXInXSxcbiAgICAgICAgWyduYW1lJywgJ2FkZFByb2plY3QtY29sb3VyJ10sXG4gICAgICAgIFsndmFsdWUnLCAnIzFlMWUxZSddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdENvbG91ckNvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdpbnB1dCcpKFsnYWRkUHJvamVjdC1jb2xvdXInXSkpO1xuICAgIGNvbnN0IGFkZFByb2plY3RJY29uc0NvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2FkZFByb2plY3RJY29ucy1jb250YWluZXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFByb2plY3RGb3JtKShhZGRQcm9qZWN0SWNvbnNDb250YWluZXIpO1xuICAgIGNvbnN0IGJ0dG5DYW5jZWxQcm9qZWN0ID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2J1dHRvbicpKFsnYnR0bicsICdidHRuLWNhbmNlbFByb2plY3QnXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVQcm9qZWN0Q2xvc2VJY29uQ2xpY2tfMS5oYW5kbGVQcm9qZWN0Q2xvc2VJY29uQ2xpY2spLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ3R5cGUnLCAnYnV0dG9uJ10sXG4gICAgICAgIFsnbmFtZScsICdidHRuLWNhbmNlbCddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdEljb25zQ29udGFpbmVyKSkoYnR0bkNhbmNlbFByb2plY3QpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGJ0dG5DYW5jZWxQcm9qZWN0KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5jcmVhdGVJbWFnZSkoJy4uLy4uL3NyYy9hc3NldHMvaWNvbnMveCgxKS5zdmcnKShbJ2ljb24nLCAnaWNvbi1jYW5jZWxQcm9qZWN0J10pKGBpY29uIG9mIHN5bWJvbCAneCcgcmVwcmVzZW50aW5nIGNhbmNlbCBvciBjbG9zZWApKCdDYW5jZWwnKSk7XG4gICAgY29uc3QgYnR0bkFkZFByb2plY3QgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnYnV0dG9uJykoWydidHRuJywgJ2J0dG4tYWRkUHJvamVjdCddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsndHlwZScsICdzdWJtaXQnXSxcbiAgICAgICAgWyduYW1lJywgJ2J0dG4tYWRkUHJvamVjdCddLFxuICAgICAgICBbJ2Zvcm0nLCAnZm9ybS1hZGRQcm9qZWN0J10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0SWNvbnNDb250YWluZXIpKShidHRuQWRkUHJvamVjdCk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYnR0bkFkZFByb2plY3QpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmNyZWF0ZUltYWdlKSgnLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy9jaGVjaygxKS5zdmcnKShbJ2ljb24nLCAnaWNvbi1hZGRQcm9qZWN0J10pKGBpY29uIG9mIHN5bWJvbCAnY2hlY2snIHJlcHJlc2VudGluZyBhZGRgKSgnQWRkIFByb2plY3QnKSk7XG59O1xuZXhwb3J0cy5wcm9qZWN0TW9kYWwgPSBwcm9qZWN0TW9kYWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudG9kb01vZGFsID0gdm9pZCAwO1xuY29uc3QgZWxlbWVudF9jcmVhdG9yc18xID0gcmVxdWlyZShcIi4uL2VsZW1lbnQtY3JlYXRvcnNcIik7XG5jb25zdCBoYW5kbGVUb2RvQ2xvc2VJY29uQ2xpY2tfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVUb2RvQ2xvc2VJY29uQ2xpY2tcIik7XG5jb25zdCBoYW5kbGVUb2RvRm9ybVN1Ym1pdF8xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZVRvZG9Gb3JtU3VibWl0XCIpO1xuY29uc3QgdG9kb01vZGFsID0gZnVuY3Rpb24gKHByb2plY3REYXRhTmFtZV8sIHByb2plY3REYXRhQ29sb3VyXykge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpO1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3RvZG8tY29udGFpbmVyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShyb290KSh0b2RvQ29udGFpbmVyKTtcbiAgICBjb25zdCB0b2RvRm9ybSA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdmb3JtJykoWydmb3JtJywgJ2Zvcm0tYWRkVG9kbyddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdzdWJtaXQnKShoYW5kbGVUb2RvRm9ybVN1Ym1pdF8xLmhhbmRsZVRvZG9Gb3JtU3VibWl0KSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWydhY3Rpb24nLCAnIyddLFxuICAgICAgICBbJ21ldGhvZCcsICdwb3N0J10sXG4gICAgICAgIFsnaWQnLCAnZm9ybS1hZGRUb2RvJ10sXG4gICAgICAgIFsnbmFtZScsICdmb3JtLWFkZFRvZG8nXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZG9Db250YWluZXIpKSh0b2RvRm9ybSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdBZGQgdGFzayB0b2RvJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b2RvRm9ybSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdoMycpKFsnaGVhZGluZy10ZXh0JywgJ3RleHQtYWRkVG9kbyddKSk7XG4gICAgY29uc3QgYWRkVG9kb05hbWVDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydhZGRUb2RvLW5hbWUtY29udGFpbmVyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b2RvRm9ybSkoYWRkVG9kb05hbWVDb250YWluZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ2ZvcicsICdhZGRUb2RvLW5hbWUnXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdOYW1lJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRUb2RvTmFtZUNvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdsYWJlbCcpKFsnbGFiZWwtbmFtZSddKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ3R5cGUnLCAndGV4dCddLFxuICAgICAgICBbJ2Zvcm0nLCAnZm9ybS1hZGRUb2RvJ10sXG4gICAgICAgIFsnaWQnLCAnYWRkVG9kby1uYW1lJ10sXG4gICAgICAgIFsnbmFtZScsICdhZGRUb2RvLW5hbWUnXSxcbiAgICAgICAgWydtaW5sZW5ndGgnLCAnMiddLFxuICAgICAgICBbJ21heGxlbmd0aCcsICcyMCddLFxuICAgICAgICBbJ3BhdHRlcm4nLCAnXlthLXpBLVpdW2EtekEtWjAtOS1fLl17MSwyMH0kJ10sXG4gICAgICAgIFsncGxhY2Vob2xkZXInLCAnRW50ZXIgbmFtZSBmb3IgdGFzayB0b2RvJ10sXG4gICAgICAgIFsncmVxdWlyZWQnLCAnJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRUb2RvTmFtZUNvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdpbnB1dCcpKFsnYWRkVG9kby1uYW1lJ10pKTtcbiAgICBjb25zdCBhZGRUb2RvRGVzY0NvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2FkZFRvZG8tZGVzYy1jb250YWluZXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZG9Gb3JtKShhZGRUb2RvRGVzY0NvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1snZm9yJywgJ2FkZFRvZG8tZGVzY3JpcHRpb24nXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdEZXNjcmlwdGlvbicpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkVG9kb0Rlc2NDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnbGFiZWwnKShbJ2xhYmVsLWRlc2NyaXB0aW9uJ10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsnaWQnLCAnYWRkVG9kby1kZXNjcmlwdGlvbiddLFxuICAgICAgICBbJ2F1dG9jb21wbGV0ZScsICdvbiddLFxuICAgICAgICBbJ2Zvcm0nLCAnZm9ybS1hZGRUb2RvJ10sXG4gICAgICAgIFsnbWF4bGVuZ3RoJywgJzI1MCddLFxuICAgICAgICBbJ25hbWUnLCAnYWRkVG9kby1kZXNjcmlwdGlvbiddLFxuICAgICAgICBbJ3NwZWxsY2hlY2snLCAndHJ1ZSddLFxuICAgICAgICBbJ3dyYXAnLCAnaGFyZCddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkVG9kb0Rlc2NDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgndGV4dGFyZWEnKShbJ2FkZFRvZG8tZGVzY3JpcHRpb24nXSkpO1xuICAgIGNvbnN0IGFkZFRvZG9EYXRlQ29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnYWRkVG9kby1kYXRlLWNvbnRhaW5lciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0Zvcm0pKGFkZFRvZG9EYXRlQ29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ0R1ZSBkYXRlJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydmb3InLCAnYWRkVG9kby1kdWVEYXRlJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFRvZG9EYXRlQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2xhYmVsJykoWydsYWJlbC1kdWVEYXRlJ10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsndHlwZScsICdkYXRlJ10sXG4gICAgICAgIFsnaWQnLCAnYWRkVG9kby1kdWVEYXRlJ10sXG4gICAgICAgIFtcbiAgICAgICAgICAgICdtaW4nLFxuICAgICAgICAgICAgYCR7bm93LmdldEZ1bGxZZWFyKCl9LSR7bm93LmdldE1vbnRoKCkgPCAxMCA/ICcwJyArIG5vdy5nZXRNb250aCgpIDogbm93LmdldE1vbnRoKCl9LSR7bm93LmdldERhdGUoKSA8IDEwID8gJzAnICsgbm93LmdldERhdGUoKSA6IG5vdy5nZXREYXRlKCl9YCxcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgICAgJ21heCcsXG4gICAgICAgICAgICBgJHtub3cuZ2V0RnVsbFllYXIoKSArIDEwMH0tJHtub3cuZ2V0TW9udGgoKSA8IDEwID8gJzAnICsgKG5vdy5nZXRNb250aCgpICsgMSkgOiBub3cuZ2V0TW9udGgoKSArIDF9LSR7bm93LmdldERhdGUoKSA8IDEwID8gJzAnICsgbm93LmdldERhdGUoKSA6IG5vdy5nZXREYXRlKCl9YCxcbiAgICAgICAgXSxcbiAgICAgICAgWyduYW1lJywgJ2FkZFRvZG8tZHVlRGF0ZSddLFxuICAgICAgICBbJ3BsYWNlaG9sZGVyJywgJ3l5eXktbW0tZGQnXSxcbiAgICAgICAgWydwYXR0ZXJuJywgJygwWzEtOV18MVswLTldfDJbMC05XXwzWzAxXSktKDBbMS05XXwxWzAxMl0pLVswLTldezR9J10sXG4gICAgICAgIC8vIFsncmVxdWlyZWQnLCAnJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRUb2RvRGF0ZUNvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdpbnB1dCcpKFsnYWRkVG9kby1kdWVEYXRlJ10pKTtcbiAgICBjb25zdCBhZGRUb2RvUHJpb3JpdHlDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydhZGRUb2RvLXByaW9yaXR5LWNvbnRhaW5lciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0Zvcm0pKGFkZFRvZG9Qcmlvcml0eUNvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdQcmlvcml0eSBsZXZlbCcpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1snZm9yJywgJ2FkZFRvZG8tc2VsZWN0UHJpb3JpdHknXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkVG9kb1ByaW9yaXR5Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2xhYmVsJykoWydsYWJlbC1zZWxlY3RQcmlvcml0eSddKSk7XG4gICAgY29uc3Qgc2VsZWN0UHJpb3JpdHkgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnc2VsZWN0JykoWydhZGRUb2RvLXNlbGVjdFByaW9yaXR5J10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWyduYW1lJywgJ2FkZFRvZG8tc2VsZWN0UHJpb3JpdHknXSxcbiAgICAgICAgWydpZCcsICdhZGRUb2RvLXNlbGVjdFByaW9yaXR5J10sXG4gICAgICAgIFsnZm9ybScsICdmb3JtLWFkZFRvZG8nXSxcbiAgICAgICAgWyd0aXRsZScsICdhZGRUb2RvLXNlbGVjdFByaW9yaXR5J10sXG4gICAgICAgIC8vIFsncmVxdWlyZWQnLCAnJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRUb2RvUHJpb3JpdHlDb250YWluZXIpKShzZWxlY3RQcmlvcml0eSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCctLVBsZWFzZSBhc3NpZ24gYSBwcmlvcml0eS0tJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWyd2YWx1ZScsICcnXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2VsZWN0UHJpb3JpdHkpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnb3B0aW9uJykoWydvcHRpb24tc2VsZWN0UHJpb3JpdHknXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ3ZhbHVlJywgJ2xvdyddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ0xvdycpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2VsZWN0UHJpb3JpdHkpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnb3B0aW9uJykoWydvcHRpb24tc2VsZWN0UHJpb3JpdHknXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ3ZhbHVlJywgJ21lZGl1bSddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ01lZGl1bScpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2VsZWN0UHJpb3JpdHkpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnb3B0aW9uJykoWydvcHRpb24tc2VsZWN0UHJpb3JpdHknXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ3ZhbHVlJywgJ2hpZ2gnXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdIaWdoJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzZWxlY3RQcmlvcml0eSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdvcHRpb24nKShbJ29wdGlvbi1zZWxlY3RQcmlvcml0eSddKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1sndmFsdWUnLCAndXJnZW50J11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnVXJnZW50JyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzZWxlY3RQcmlvcml0eSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdvcHRpb24nKShbJ29wdGlvbi1zZWxlY3RQcmlvcml0eSddKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1sndmFsdWUnLCAnaW1tZWRpYXRlJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnSW1tZWRpYXRlJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzZWxlY3RQcmlvcml0eSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdvcHRpb24nKShbJ29wdGlvbi1zZWxlY3RQcmlvcml0eSddKSk7XG4gICAgLy9oaWRkZW4gZWxlbWVudCB0byBmdW5uZWwgcHJvamVjdCBuYW1lIHRvIHRvZG9mb3JtXG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ2hpZGRlbicsICcnXSxcbiAgICAgICAgWyd2YWx1ZScsIGAke3Byb2plY3REYXRhTmFtZV99YF0sXG4gICAgICAgIFsnbmFtZScsICdhZGRUb2RvLXByb2plY3ROYW1lJ10sXG4gICAgICAgIFsndHlwZScsICd0ZXh0J10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b2RvRm9ybSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdpbnB1dCcpKFsnYWRkVG9kby1wcm9qZWN0TmFtZV9faGlkZGVuJ10pKTtcbiAgICAvL2hpZGRlbiBlbGVtZW50IHRvIGZ1bm5lbCBwcm9qZWN0IGNvbG91ciB0byB0b2RvZm9ybVxuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWydoaWRkZW4nLCAnJ10sXG4gICAgICAgIFsndmFsdWUnLCBgJHtwcm9qZWN0RGF0YUNvbG91cl99YF0sXG4gICAgICAgIFsnbmFtZScsICdhZGRUb2RvLXByb2plY3RDb2xvdXInXSxcbiAgICAgICAgWyd0eXBlJywgJ3RleHQnXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZG9Gb3JtKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2lucHV0JykoWydhZGRUb2RvLXByb2plY3RDb2xvdXJfX2hpZGRlbiddKSk7XG4gICAgLy9cbiAgICAvL1xuICAgIGNvbnN0IGFkZFRvZG9JY29uc0NvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2FkZFRvZG8taWNvbnMtY29udGFpbmVyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b2RvRm9ybSkoYWRkVG9kb0ljb25zQ29udGFpbmVyKTtcbiAgICBjb25zdCBidHRuQ2FuY2VsVG9kbyA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdidXR0b24nKShbJ2J0dG4nLCAnYnR0bi1jYW5jZWxUb2RvJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWyd0eXBlJywgJ2NsaWNrJ10sXG4gICAgICAgIFsnbmFtZScsICdidHRuLWNhbmNlbFRvZG8nXSxcbiAgICAgICAgWydmb3JtJywgJ2Zvcm0tYWRkVG9kbyddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkVG9kb0ljb25zQ29udGFpbmVyKSkoYnR0bkNhbmNlbFRvZG8pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ2NsaWNrJykoaGFuZGxlVG9kb0Nsb3NlSWNvbkNsaWNrXzEuaGFuZGxlVG9kb0Nsb3NlSWNvbkNsaWNrKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGJ0dG5DYW5jZWxUb2RvKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5jcmVhdGVJbWFnZSkoJy4uLy4uL3NyYy9hc3NldHMvaWNvbnMveCgxKS5zdmcnKShbJ2ljb24nLCAnaWNvbi1jYW5jZWxUb2RvJ10pKGBpY29uIG9mIHN5bWJvbCAneCcgcmVwcmVzZW50aW5nIGNsb3NlIG9yIGNhbmNlbGApKCdDYW5jZWwnKSk7XG4gICAgY29uc3QgYnR0bkFkZFRvZG8gPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnYnV0dG9uJykoWydidHRuJywgJ2J0dG4tYWRkVG9kbyddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsndHlwZScsICdzdWJtaXQnXSxcbiAgICAgICAgWyduYW1lJywgJ2J0dG4tYWRkVG9kbyddLFxuICAgICAgICBbJ2Zvcm0nLCAnZm9ybS1hZGRUb2RvJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRUb2RvSWNvbnNDb250YWluZXIpKShidHRuQWRkVG9kbyk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYnR0bkFkZFRvZG8pKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmNyZWF0ZUltYWdlKSgnLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy9jaGVjaygxKS5zdmcnKShbJ2ljb24nLCAnaWNvbi1hZGRUb2RvJ10pKGBpY29uIG9mIGEgY2hlY2ttYXJrIHJlcHJlc2VudGluZyBhZGRgKSgnQWRkIFRvZG8nKSk7XG59O1xuZXhwb3J0cy50b2RvTW9kYWwgPSB0b2RvTW9kYWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuYWRkUHJvamVjdFRvU2lkZWJhciA9IHZvaWQgMDtcbmNvbnN0IGVsZW1lbnRfY3JlYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50LWNyZWF0b3JzXCIpO1xuY29uc3QgaGFuZGxlQWRkTmV3VG9kb0ljb25DbGlja18xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZUFkZE5ld1RvZG9JY29uQ2xpY2tcIik7XG5jb25zdCBoYW5kbGVDcmVhdGVkVGFic0NsaWNrXzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlQ3JlYXRlZFRhYnNDbGlja1wiKTtcbmNvbnN0IGFkZFByb2plY3RUb1NpZGViYXIgPSBmdW5jdGlvbiAoZm9ybU5hbWVfLCBmb3JtQ29sb3VyXykge1xuICAgIGNvbnN0IGxvZyA9IChpKSA9PiBjb25zb2xlLmxvZygnXFxuJywgaSk7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLXByb2plY3RzJyk7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3NpZGViYXItcHJvamVjdCcsICdwcm9qZWN0J10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShwcm9qZWN0c0NvbnRhaW5lcikocHJvamVjdENvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVDcmVhdGVkVGFic0NsaWNrXzEuaGFuZGxlQ3JlYXRlZFRhYnNDbGljayksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydkYXRhLW5hbWUnLCBgJHtmb3JtTmFtZV99YF1dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRTdHlsZVRvRWxlbSkoW1snY29sb3InLCBgJHtmb3JtQ29sb3VyX31gXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKGAke2Zvcm1OYW1lX31gKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHByb2plY3RDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaDQnKShbJ3Byb2plY3QtdGV4dCddKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ2RhdGEtbmFtZScsIGAke2Zvcm1OYW1lX31gXSxcbiAgICAgICAgWydkYXRhLWNvbG91cicsIGAke2Zvcm1Db2xvdXJffWBdLFxuICAgIF0pLCBcbiAgICAvLyBhZGRTdHlsZVRvRWxlbSgnYmFja2dyb3VuZC1jb2xvcicpKGAke2Zvcm1Db2xvdXJffWApLFxuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdjbGljaycpKGhhbmRsZUFkZE5ld1RvZG9JY29uQ2xpY2tfMS5oYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHByb2plY3RDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmNyZWF0ZUltYWdlKSgnLi4vLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy9wbHVzLnN2ZycpKFsnaWNvbicsICdpY29uLXBsdXMnXSkoJ2ljb24gb2YgcGx1cyBzeW1ib2wnKSgnQWRkIE5ldyBUb2RvJykpO1xufTtcbmV4cG9ydHMuYWRkUHJvamVjdFRvU2lkZWJhciA9IGFkZFByb2plY3RUb1NpZGViYXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuYWRkVG9kb3NUb0NvbnRlbnQgPSB2b2lkIDA7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IGhhbmRsZVRvZG9DaGVja2JveENvbXBsZXRlXzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlVG9kb0NoZWNrYm94Q29tcGxldGVcIik7XG5jb25zdCBhZGRUb2Rvc1RvQ29udGVudCA9IGZ1bmN0aW9uICh7IHByb2plY3QsIHRvZG9zIH0sIGRpc2FibGVDaGVja2JveCA9IGZhbHNlKSB7XG4gICAgY29uc3QgeyBwcm9qZWN0TmFtZSwgcHJvamVjdENvbG91ciB9ID0gcHJvamVjdDtcbiAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdG9kb05hbWUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eSB9ID0gdG9kb3NbaV07XG4gICAgICAgIGNvbnN0IGNvbnRlbnRCb3R0b20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1ib3R0b20nKTtcbiAgICAgICAgY29uc3QgdG9kb0NvbnRlbnRDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWyd0b2RvQ29udGVudC1jb250YWluZXInXSk7XG4gICAgICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShjb250ZW50Qm90dG9tKSh0b2RvQ29udGVudENvbnRhaW5lcik7XG4gICAgICAgIGNvbnN0IGhlYWRpbmdDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWyd0b2RvQ29udGVudC1oZWFkaW5nLWNvbnRhaW5lciddKTtcbiAgICAgICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZG9Db250ZW50Q29udGFpbmVyKShoZWFkaW5nQ29udGFpbmVyKTtcbiAgICAgICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1snZGF0YS1jb2xvdXInLCBgJHtwcm9qZWN0Q29sb3VyfWBdXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoYCR7cHJvamVjdE5hbWV9YCksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkU3R5bGVUb0VsZW0pKFtbJ2NvbG9yJywgYCR7cHJvamVjdENvbG91cn1gXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoaGVhZGluZ0NvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdoMycpKFsnaGVhZGluZy10ZXh0JywgJ3RvZG9Db250ZW50LXByb2plY3ROYW1lJ10pKTtcbiAgICAgICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1snZm9yJywgJ2NvbXBsZXRlJ11dKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2xhYmVsJykoWydsYWJlbCcsICd0b2RvQ29udGVudC1sYWJlbCddKSk7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2lucHV0JykoWyd0b2RvQ29udGVudC1jaGVja2JveCddKTtcbiAgICAgICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVUb2RvQ2hlY2tib3hDb21wbGV0ZV8xLmhhbmRsZVRvZG9DaGVja2JveENvbXBsZXRlKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgICAgIFsndHlwZScsICdjaGVja2JveCddLFxuICAgICAgICAgICAgWydpZCcsICdjb21wbGV0ZSddLFxuICAgICAgICAgICAgWyduYW1lJywgJ2NvbXBsZXRlJ10sXG4gICAgICAgICAgICBbJ3ZhbHVlJywgYCR7cHJvamVjdENvbG91cn1gXSxcbiAgICAgICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShoZWFkaW5nQ29udGFpbmVyKSkoY2hlY2tib3gpO1xuICAgICAgICAvL3RvIHByZXZlbnQgY2xpY2tpbmcgY2hlY2tib3ggYWZ0ZXIgaXQgaGFzIGJlZW4gYXJjaGl2ZWRcbiAgICAgICAgaWYgKGRpc2FibGVDaGVja2JveCkge1xuICAgICAgICAgICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ2Rpc2FibGVkJywgJ3RydWUnXV0pKGNoZWNrYm94KTtcbiAgICAgICAgfVxuICAgICAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoYCR7dG9kb05hbWV9YCksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b2RvQ29udGVudENvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdoNCcpKFsndG9kb0NvbnRlbnQtbmFtZSddKSk7XG4gICAgICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKShgJHt0b2RvRGVzY3JpcHRpb259YCksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b2RvQ29udGVudENvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdwJykoWyd0b2RvQ29udGVudC1kZXNjcmlwdGlvbiddKSk7XG4gICAgICAgIGNvbnN0IGRhdGVBbmRQcmlvcml0eUNvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2RhdGVBbmRQcmlvcml0eS1jb250YWluZXInXSk7XG4gICAgICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b2RvQ29udGVudENvbnRhaW5lcikoZGF0ZUFuZFByaW9yaXR5Q29udGFpbmVyKTtcbiAgICAgICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKGBEdWU6ICR7dG9kb0R1ZURhdGV9YCksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShkYXRlQW5kUHJpb3JpdHlDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgncCcpKFsndG9kb0NvbnRlbnQtZHVlRGF0ZSddKSk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5Q29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsncHJpb3JpdHktY29udGFpbmVyJ10pO1xuICAgICAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoZGF0ZUFuZFByaW9yaXR5Q29udGFpbmVyKShwcmlvcml0eUNvbnRhaW5lcik7XG4gICAgICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkU3R5bGVUb0VsZW0pKFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcicsXG4gICAgICAgICAgICAgICAgYCR7dG9kb1ByaW9yaXR5ID09PSAnaW1tZWRpYXRlJ1xuICAgICAgICAgICAgICAgICAgICA/ICdoc2woMCwgMTAwJSwgMzUlKSdcbiAgICAgICAgICAgICAgICAgICAgOiB0b2RvUHJpb3JpdHkgPT09ICd1cmdlbnQnXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdoc2woNDAsIDEwMCUsIDY1JSknXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRvZG9Qcmlvcml0eSA9PT0gJ2hpZ2gnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnaHNsKDkwLCAxMDAlLCA1MCUpJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdG9kb1ByaW9yaXR5ID09PSAnbWVkaXVtJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdoc2woMjAwLCAxMDAlLCA1MCUpJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdoc2woMjUwLCAxMDAlLCA3MCUpJ31gLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgXSkocHJpb3JpdHlDb250YWluZXIpO1xuICAgICAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoYCR7dG9kb1ByaW9yaXR5fWApLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkocHJpb3JpdHlDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgncCcpKFsndG9kb0NvbnRlbnQtcHJpb3JpdHknXSkpO1xuICAgIH0pO1xufTtcbmV4cG9ydHMuYWRkVG9kb3NUb0NvbnRlbnQgPSBhZGRUb2Rvc1RvQ29udGVudDtcbi8vIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInZlaGljbGUxXCIgbmFtZT1cInZlaGljbGUxXCIgdmFsdWU9XCJCaWtlXCI+XG4vLyA8bGFiZWwgZm9yPVwidmVoaWNsZTFcIj4gSSBoYXZlIGEgYmlrZTwvbGFiZWw+PGJyPlxuLy8gPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwidmVoaWNsZTJcIiBuYW1lPVwidmVoaWNsZTJcIiB2YWx1ZT1cIkNhclwiPlxuLy8gPGxhYmVsIGZvcj1cInZlaGljbGUyXCI+IEkgaGF2ZSBhIGNhcjwvbGFiZWw+PGJyPlxuLy8gPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwidmVoaWNsZTNcIiBuYW1lPVwidmVoaWNsZTNcIiB2YWx1ZT1cIkJvYXRcIj5cbi8vIDxsYWJlbCBmb3I9XCJ2ZWhpY2xlM1wiPiBJIGhhdmUgYSBib2F0PC9sYWJlbD48YnI+XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuYXJjaGl2ZUV4cGlyZWRUb2RvcyA9IHZvaWQgMDtcbmNvbnN0IGFyY2hpdmVFeHBpcmVkVG9kb3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IGxvZyA9IChpKSA9PiBjb25zb2xlLmxvZygnXFxuJywgaSk7XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJjaGl2ZWQnKSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXJjaGl2ZWQnLCBKU09OLnN0cmluZ2lmeShbXSkpO1xuICAgIH1cbiAgICBjb25zdCBwcm9qZWN0QXJyID0gW107XG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoa2V5ICE9PSAncHJvamVjdE5hbWVzJyAmJiBrZXkgIT09ICdhcmNoaXZlZCcpIHtcbiAgICAgICAgICAgIHByb2plY3RBcnIucHVzaChKU09OLnBhcnNlKChfYSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGRhdGUgPSBub3cuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IG1vbnRoID0gbm93LmdldE1vbnRoKCkgKyAxO1xuICAgIGNvbnN0IHllYXIgPSBub3cuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCB0b2RheSA9IGAke3llYXJ9LSR7bW9udGggPCAxMCA/ICcwJyArIG1vbnRoIDogbW9udGh9LSR7ZGF0ZSA8IDEwID8gJzAnICsgZGF0ZSA6IGRhdGV9YDtcbiAgICAvL2dyYWIgcHJldmlvdXNseSBzdG9yZWQgZXhwaXJlZC9hcmNoaXZlZCBwcm9qZWN0cyBmcm9tIGxvY2Fsc3RvcmFnZVxuICAgIGNvbnN0IGV4cGlyZWRQcm9qZWN0c0FyciA9IEpTT04ucGFyc2UoKF9hID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FyY2hpdmVkJykpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnKTtcbiAgICBjb25zdCB0b2Rvc05vdEV4cGlyZWRBcnIgPSBbXTtcbiAgICBwcm9qZWN0QXJyLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wQXJyID0gdG9kby50b2RvRHVlRGF0ZS5zcGxpdCgnLScpO1xuICAgICAgICAgICAgY29uc3QgdG9kb1llYXIgPSBOdW1iZXIodGVtcEFyclswXSk7XG4gICAgICAgICAgICBjb25zdCB0b2RvTW9udGggPSBOdW1iZXIodGVtcEFyclsxXSk7XG4gICAgICAgICAgICBjb25zdCB0b2RvRGF0ZSA9IE51bWJlcih0ZW1wQXJyWzJdKTtcbiAgICAgICAgICAgIC8vZ3JhYiBlYWNoIHRvZG8gd2l0aCBkdWVEYXRlIGVhcmxpZXIgdGhhbiB0b2RheSBhbmQgc3RvcmUgY29ycmVzcG9uZGluZyBwcm9qZWN0IGludG8gdGVtcCBvYmplY3QgYW5kIHN0b3JlIGluIC4uLkFyclxuICAgICAgICAgICAgaWYgKHRvZG9EYXRlIDwgZGF0ZSB8fCB0b2RvTW9udGggPCBtb250aCB8fCB0b2RvWWVhciA8IHllYXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0ge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZTogcHJvamVjdC5wcm9qZWN0LnByb2plY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbG91cjogcHJvamVjdC5wcm9qZWN0LnByb2plY3RDb2xvdXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb05hbWU6IHRvZG8udG9kb05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uOiB0b2RvLnRvZG9EZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRHVlRGF0ZTogdG9kby50b2RvRHVlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHk6IHRvZG8udG9kb1ByaW9yaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGV4cGlyZWRQcm9qZWN0c0Fyci5wdXNoKHRlbXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9ncmFiIHByb2plY3RzIGFuZCB0b2RvcyB0aGF0IGFyZSBub3QgZXhwaXJlZCBhbmQgc3RvcmUgdGhlbSBpbnRvIC4uLkFyclxuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXAgPSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3ROYW1lOiBwcm9qZWN0LnByb2plY3QucHJvamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q29sb3VyOiBwcm9qZWN0LnByb2plY3QucHJvamVjdENvbG91cixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9kb3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvTmFtZTogdG9kby50b2RvTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb246IHRvZG8udG9kb0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EdWVEYXRlOiB0b2RvLnRvZG9EdWVEYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eTogdG9kby50b2RvUHJpb3JpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdG9kb3NOb3RFeHBpcmVkQXJyLnB1c2godGVtcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vc3RvcmUgZXhwaXJlZCBwcm9qZWN0cyBhbmQgdG9kb3MgdGhhdCBoYXZlIG5ldyBleHBpcmVkIHRvZG9zIGFkZGVkXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FyY2hpdmVkJywgSlNPTi5zdHJpbmdpZnkoZXhwaXJlZFByb2plY3RzQXJyKSk7XG4gICAgLy9sb2coZXhwaXJlZFByb2plY3RzQXJyKVxuICAgIC8vbG9nKHRvZG9zTm90RXhwaXJlZEFycilcbiAgICAvL2xvZyhwcm9qZWN0QXJyKVxuICAgIC8vdGhlIHRvZG9zIHRoYXQgc2hhcmUgYSBwcm9qZWN0IG5hbWUgYXJlIGNvbnNvbGlkYXRlZCB1bmRlciBvbmUgcHJvamVjdFxuICAgIGNvbnN0IHVuZXhwaXJlZFByb2plY3RzTWFwID0gdG9kb3NOb3RFeHBpcmVkQXJyLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG4gICAgICAgIGlmICghYWNjLmhhcyhjdXJyLnByb2plY3QucHJvamVjdE5hbWUpKSB7XG4gICAgICAgICAgICBhY2Muc2V0KGN1cnIucHJvamVjdC5wcm9qZWN0TmFtZSwgY3Vycik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gYWNjLmdldChjdXJyLnByb2plY3QucHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgdGVtcCA9PT0gbnVsbCB8fCB0ZW1wID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0ZW1wLnRvZG9zLnB1c2goY3Vyci50b2Rvc1swXSk7XG4gICAgICAgICAgICBhY2Muc2V0KGN1cnIucHJvamVjdC5wcm9qZWN0TmFtZSwgdGVtcCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBuZXcgTWFwKCkpO1xuICAgIC8vbG9nKHVuZXhwaXJlZFByb2plY3RzTWFwKVxuICAgIC8vc3RvcmUgbW9kaWZpZWQgcHJvamVjdHMgd2l0aG91dCB0aGUgZXhwaXJlZCB0b2RvcyBiYWNrIGludG8gbG9jYWxzdG9yYWdlXG4gICAgdW5leHBpcmVkUHJvamVjdHNNYXAuZm9yRWFjaCgodmFsLCBrZXkpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWwpKTtcbiAgICB9KTtcbiAgICAvLyAvL3JlbmRlciB0aGUgdG9kb3Mgd2hpbGUgZGlzYWJsaW5nIHRoZSBjaGVja2JveFxuICAgIC8vIGV4cGlyZWRQcm9qZWN0c0Fyci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgLy8gXHRhZGRUb2Rvc1RvQ29udGVudChwcm9qZWN0LCB0cnVlKVxuICAgIC8vIH0pXG59O1xuZXhwb3J0cy5hcmNoaXZlRXhwaXJlZFRvZG9zID0gYXJjaGl2ZUV4cGlyZWRUb2RvcztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wcm9qZWN0c0FuZFRvZG9zT25sb2FkID0gdm9pZCAwO1xuY29uc3QgYWRkUHJvamVjdFRvU2lkZWJhcl8xID0gcmVxdWlyZShcIi4vYWRkUHJvamVjdFRvU2lkZWJhclwiKTtcbmNvbnN0IGFkZFRvZG9zVG9Db250ZW50XzEgPSByZXF1aXJlKFwiLi9hZGRUb2Rvc1RvQ29udGVudFwiKTtcbmNvbnN0IHByb2plY3RzQW5kVG9kb3NPbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbG9nID0gKGkpID0+IGNvbnNvbGUubG9nKCdcXG4nLCBpKTtcbiAgICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKGtleSAhPT0gJ1NhbXBsZSBQcm9qZWN0JyAmJiBrZXkgIT09ICdwcm9qZWN0TmFtZXMnICYmIGtleSAhPT0gJ2FyY2hpdmVkJykge1xuICAgICAgICAgICAgcHJvamVjdHMucHVzaChKU09OLnBhcnNlKChfYSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBsb2cocHJvamVjdHMpO1xuICAgIGNvbnN0IGRpc3BsYXlTYW1wbGVQcm9qZWN0T25sb2FkID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvL2Rpc3BsYXkgc2FtcGxlIHRvZG9zXG4gICAgICAgIGNvbnN0IHNhbXBsZVByb2plY3QgPSBKU09OLnBhcnNlKChfYSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdTYW1wbGUgUHJvamVjdCcpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJyk7XG4gICAgICAgICgwLCBhZGRUb2Rvc1RvQ29udGVudF8xLmFkZFRvZG9zVG9Db250ZW50KShzYW1wbGVQcm9qZWN0KTtcbiAgICB9KSgpO1xuICAgIC8vZGlzcGxheSByZXN0IG9mIHByb2plY3RzIGluIHN0b3JhZ2VcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICgwLCBhZGRQcm9qZWN0VG9TaWRlYmFyXzEuYWRkUHJvamVjdFRvU2lkZWJhcikocHJvamVjdC5wcm9qZWN0LnByb2plY3ROYW1lLCBwcm9qZWN0LnByb2plY3QucHJvamVjdENvbG91cik7XG4gICAgICAgICgwLCBhZGRUb2Rvc1RvQ29udGVudF8xLmFkZFRvZG9zVG9Db250ZW50KShwcm9qZWN0KTtcbiAgICB9KTtcbn07XG5leHBvcnRzLnByb2plY3RzQW5kVG9kb3NPbmxvYWQgPSBwcm9qZWN0c0FuZFRvZG9zT25sb2FkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0b3JlUHJvamVjdEFuZFRvZG9zRnVsbCA9IHZvaWQgMDtcbmNvbnN0IHN0b3JlUHJvamVjdEFuZFRvZG9zRnVsbCA9IGZ1bmN0aW9uIChwcm9qZWN0QW5kVG9kb3NfKSB7XG4gICAgdmFyIF9hO1xuICAgIGxldCB0b2RvRXhpc3RzRmxhZyA9IGZhbHNlO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qTmFtZSA9IHByb2plY3RBbmRUb2Rvc18ucHJvamVjdC5wcm9qZWN0TmFtZTtcbiAgICBjb25zdCBjdXJyZW50VG9kb05hbWUgPSBwcm9qZWN0QW5kVG9kb3NfLnRvZG9zWzBdLnRvZG9OYW1lO1xuICAgIGNvbnN0IGN1cnJlbnRUb2RvcyA9IHByb2plY3RBbmRUb2Rvc18udG9kb3NbMF07XG4gICAgY29uc3Qgc3RvcmFnZUtleXMgPSBuZXcgU2V0KCk7XG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgc3RvcmFnZUtleXMuYWRkKGtleSk7XG4gICAgfSk7XG4gICAgLy9uZXcgcHJvamVjdFxuICAgIGlmICghc3RvcmFnZUtleXMuaGFzKGN1cnJlbnRQcm9qTmFtZSkpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY3VycmVudFByb2pOYW1lLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0QW5kVG9kb3NfKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvL3Byb2plY3QgYWxyZWFkeSBleGlzdHNcbiAgICAgICAgY29uc3QgY3VycmVudFByb2pTdG9yYWdlID0gSlNPTi5wYXJzZSgoX2EgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50UHJvak5hbWUpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJyk7XG4gICAgICAgIGNvbnN0IHRvZG9OYW1lc1NldCA9IG5ldyBTZXQoKTtcbiAgICAgICAgY3VycmVudFByb2pTdG9yYWdlLnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHRvZG9OYW1lc1NldC5hZGQodG9kby50b2RvTmFtZSkpO1xuICAgICAgICAvL25ldyB0b2RvTmFtZVxuICAgICAgICBpZiAoIXRvZG9OYW1lc1NldC5oYXMoY3VycmVudFRvZG9OYW1lKSkge1xuICAgICAgICAgICAgY3VycmVudFByb2pTdG9yYWdlLnRvZG9zLnB1c2goY3VycmVudFRvZG9zKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGN1cnJlbnRQcm9qTmFtZSwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFByb2pTdG9yYWdlKSk7XG4gICAgICAgICAgICB0b2RvRXhpc3RzRmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHRvZG9FeGlzdHNGbGFnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy90b2RvTmFtZSB0YWtlblxuICAgICAgICAgICAgYWxlcnQoYCR7Y3VycmVudFRvZG9OYW1lfSBhbHJlYWR5IGV4aXN0cyBhcyBhIHRvZG8gKO+9oeKAosyB77i/4oCizIDvvaEpICBQbGVhc2UgY2hvb3NlIGFub3RoZXIgbmFtZSBvciBjb25zaWRlciBlZGl0aW5nIGFuIGV4aXN0aW5nIHRvZG8uYCk7XG4gICAgICAgICAgICB0b2RvRXhpc3RzRmxhZyA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdG9kb0V4aXN0c0ZsYWc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9cbiAgICAvL1xufTtcbmV4cG9ydHMuc3RvcmVQcm9qZWN0QW5kVG9kb3NGdWxsID0gc3RvcmVQcm9qZWN0QW5kVG9kb3NGdWxsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0b3JlU2FtcGxlUHJvamVjdCA9IHZvaWQgMDtcbmNvbnN0IHN0b3JlU2FtcGxlUHJvamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIC8vcmV0dXJucyBkYXRlIG9uZSB5ZWFyIGZyb20gY3VycmVudFxuICAgIGNvbnN0IHNhbXBsZUxvd0R1ZURhdGUgPSAobm93KSA9PiB7XG4gICAgICAgIGxldCBkYXkgPSBub3cuZ2V0RGF0ZSgpO1xuICAgICAgICBsZXQgbW9udGggPSBub3cuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgIGNvbnN0IHllYXIgPSBub3cuZ2V0RnVsbFllYXIoKSArIDE7XG4gICAgICAgIHJldHVybiBgJHt5ZWFyfS0ke21vbnRoIDwgMTAgPyAnMCcgKyBtb250aCA6IG1vbnRofS0ke2RheSA8IDEwID8gJzAnICsgZGF5IDogZGF5fWA7XG4gICAgfTtcbiAgICAvL3JldHVybnMgZGF0ZSBvbmUgbW9udGggZnJvbSBjdXJyZW50XG4gICAgY29uc3Qgc2FtcGxlTWVkRHVlRGF0ZSA9IChub3cpID0+IHtcbiAgICAgICAgbGV0IG1vbnRoID0gbm93LmdldE1vbnRoKCk7XG4gICAgICAgIG1vbnRoID0gbW9udGggPD0gMTAgPyBtb250aCArIDEgOiBtb250aDtcbiAgICAgICAgbW9udGggPSBtb250aCArIDE7XG4gICAgICAgIHJldHVybiBgJHtub3cuZ2V0RnVsbFllYXIoKX0tJHttb250aCA8IDEwID8gJzAnICsgbW9udGggOiBtb250aH0tJHtub3cuZ2V0RGF0ZSgpIDwgMTAgPyAnMCcgKyBub3cuZ2V0RGF0ZSgpIDogbm93LmdldERhdGUoKX1gO1xuICAgIH07XG4gICAgLy9yZXR1cm5zIGRhdGUgb25lIGRheSBmcm9tIGN1cnJlbnRcbiAgICBjb25zdCBzYW1wbGVVcmdlbnREdWVEYXRlID0gKG5vdykgPT4ge1xuICAgICAgICBsZXQgZGF5ID0gbm93LmdldERhdGUoKTtcbiAgICAgICAgZGF5ID0gZGF5IDwgMjYgPyBkYXkgKyAyIDogZGF5O1xuICAgICAgICBsZXQgbW9udGggPSBub3cuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgIHJldHVybiBgJHtub3cuZ2V0RnVsbFllYXIoKX0tJHttb250aCA8IDEwID8gJzAnICsgbW9udGggOiBtb250aH0tJHtkYXkgPCAxMCA/ICcwJyArIGRheSA6IGRheX1gO1xuICAgIH07XG4gICAgY29uc3Qgc2FtcGxlUHJvamVjdCA9IHtcbiAgICAgICAgcHJvamVjdDogXG4gICAgICAgIC8vc2FtcGxlIHByb2plY3QgdG8gZGlzcGxheSBpbml0aWFsbHlcbiAgICAgICAgeyBwcm9qZWN0TmFtZTogJ1NhbXBsZSBQcm9qZWN0JywgcHJvamVjdENvbG91cjogJyM0OGQxY2MnIH0sXG4gICAgICAgIHRvZG9zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdG9kb05hbWU6IGBGaW5pc2ggJ1RoZSBGYWRlZCBTdW46IEtlc3JpdGgnYCxcbiAgICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb246ICdGaW5pc2ggcmVhZGluZyB0aGUgYm9vayAtIHJldHVybiBzb29uIScsXG4gICAgICAgICAgICAgICAgdG9kb0R1ZURhdGU6IGAke3NhbXBsZVVyZ2VudER1ZURhdGUobm93KX1gLFxuICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eTogJ3VyZ2VudCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRvZG9OYW1lOiAnVmV0IEFwcG9pbnRtZW50JyxcbiAgICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb246ICdUYWtlIE5pZ2h0ZXllcyB0byB0aGUgdmV0IGZvciByb3V0aW5lIGNoZWNrdXAnLFxuICAgICAgICAgICAgICAgIHRvZG9EdWVEYXRlOiBgJHtzYW1wbGVNZWREdWVEYXRlKG5vdyl9YCxcbiAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHk6ICdtZWRpdW0nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0b2RvTmFtZTogJ0JhY2twYWNraW5nIHRyaXAgdG8gTmVwYWwnLFxuICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbjogJ1BsYW4gcm91dGUsIHN1cHBsaWVzIGFuZCBhcHBseSBmb3IgdmlzYScsXG4gICAgICAgICAgICAgICAgdG9kb0R1ZURhdGU6IGAke3NhbXBsZUxvd0R1ZURhdGUobm93KX1gLFxuICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eTogJ2xvdycsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH07XG4gICAgLy9vbiBmaXJzdCBsb2FkIG9ubHlcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKHNhbXBsZVByb2plY3QucHJvamVjdC5wcm9qZWN0TmFtZSkpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc2FtcGxlUHJvamVjdC5wcm9qZWN0LnByb2plY3ROYW1lLCBKU09OLnN0cmluZ2lmeShzYW1wbGVQcm9qZWN0KSk7XG4gICAgfVxufTtcbmV4cG9ydHMuc3RvcmVTYW1wbGVQcm9qZWN0ID0gc3RvcmVTYW1wbGVQcm9qZWN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNpZGViYXIgPSB2b2lkIDA7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IGhhbmRsZUFkZE5ld1Byb2plY3RJY29uQ2xpY2tfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVBZGROZXdQcm9qZWN0SWNvbkNsaWNrXCIpO1xuY29uc3QgaGFuZGxlQWRkTmV3VG9kb0ljb25DbGlja18xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZUFkZE5ld1RvZG9JY29uQ2xpY2tcIik7XG5jb25zdCBoYW5kbGVBcmNoaXZlZFRhYkNsaWNrXzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlQXJjaGl2ZWRUYWJDbGlja1wiKTtcbmNvbnN0IGhhbmRsZVVwY29taW5nVGFiQ2xpY2tfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVVcGNvbWluZ1RhYkNsaWNrXCIpO1xuY29uc3QgaGFuZGxlVG9kYXlUYWJDbGlja18xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZVRvZGF5VGFiQ2xpY2tcIik7XG5jb25zdCBoYW5kbGVQcm9qZWN0c1RhYkNsaWNrXzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlUHJvamVjdHNUYWJDbGlja1wiKTtcbmNvbnN0IGhhbmRsZUNyZWF0ZWRUYWJzQ2xpY2tfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVDcmVhdGVkVGFic0NsaWNrXCIpO1xuY29uc3Qgc2lkZWJhciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBsb2cgPSAoaSkgPT4gY29uc29sZS5sb2coJ1xcbicsIGkpO1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpO1xuICAgIGNvbnN0IHNpZGViYXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydzaWRlYmFyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShyb290KShzaWRlYmFyKTtcbiAgICBjb25zdCB0b2RheUNvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3NpZGViYXItdGFiJywgJ2NvbnRhaW5lci10b2RheSddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVUb2RheVRhYkNsaWNrXzEuaGFuZGxlVG9kYXlUYWJDbGljaykodG9kYXlDb250YWluZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzaWRlYmFyKSh0b2RheUNvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kYXlDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmNyZWF0ZUltYWdlKSgnLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy9hcGVydHVyZS5zdmcnKShbJ2ljb24nLCAnaWNvbi10b2RheSddKShgaWNvbiByZXByZXNlbnRpbmcgdG9kYXkncyBldmVudHNgKSgnVG9kYXknKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdUb2RheScpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kYXlDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaDQnKShbJ3RhYi10ZXh0JywgJ3RvZGF5LXRhYiddKSk7XG4gICAgY29uc3QgdXBjb21pbmdDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydzaWRlYmFyLXRhYicsICdjb250YWluZXItdXBjb21pbmcnXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ2NsaWNrJykoaGFuZGxlVXBjb21pbmdUYWJDbGlja18xLmhhbmRsZVVwY29taW5nVGFiQ2xpY2spKHVwY29taW5nQ29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2lkZWJhcikodXBjb21pbmdDb250YWluZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHVwY29taW5nQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5jcmVhdGVJbWFnZSkoJy4uLy4uL3NyYy9hc3NldHMvaWNvbnMvY2FsZW5kYXIuc3ZnJykoWydpY29uJywgJ3VwY29taW5nLWljb24nXSkoJ2ljb24gcmVwcmVzZW50aW5nIHVwY29taW5nIGV2ZW50cycpKCdVcGNvbWluZycpKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ1VwY29taW5nJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh1cGNvbWluZ0NvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdoNCcpKFsndGFiLXRleHQnLCAndGFiLXVwY29taW5nJ10pKTtcbiAgICBjb25zdCBhcmNoaXZlZENvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3NpZGViYXItdGFiJywgJ2NvbnRhaW5lci1hcmNoaXZlZCddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVBcmNoaXZlZFRhYkNsaWNrXzEuaGFuZGxlQXJjaGl2ZWRUYWJDbGljaykoYXJjaGl2ZWRDb250YWluZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzaWRlYmFyKShhcmNoaXZlZENvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYXJjaGl2ZWRDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmNyZWF0ZUltYWdlKSgnLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy9hcmNoaXZlLnN2ZycpKFsnaWNvbicsICdhcmNoaXZlZC1pY29uJ10pKCdpY29uIHJlcHJlc2VudGluZyBhcmNoaXZlZCBldmVudHMnKSgnQXJjaGl2ZWQnKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdBcmNoaXZlZCcpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYXJjaGl2ZWRDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaDQnKShbJ3RhYi10ZXh0JywgJ3RhYi1hcmNoaXZlZCddKSk7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydzaWRlYmFyLWhlYWRpbmcnLCAnY29udGFpbmVyLXByb2plY3RzJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzaWRlYmFyKShwcm9qZWN0c0NvbnRhaW5lcik7XG4gICAgY29uc3QgcHJvamVjdHNIZWFkaW5nID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsncHJvamVjdEhlYWRpbmctd3JhcHBlciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkocHJvamVjdHNDb250YWluZXIpKHByb2plY3RzSGVhZGluZyk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVQcm9qZWN0c1RhYkNsaWNrXzEuaGFuZGxlUHJvamVjdHNUYWJDbGljayksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ1Byb2plY3RzJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShwcm9qZWN0c0hlYWRpbmcpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaDMnKShbJ2hlYWRpbmctdGV4dCcsICd0ZXh0LXByb2plY3RzJ10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdjbGljaycpKGhhbmRsZUFkZE5ld1Byb2plY3RJY29uQ2xpY2tfMS5oYW5kbGVBZGROZXdQcm9qZWN0SWNvbkNsaWNrKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHByb2plY3RzSGVhZGluZykpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuY3JlYXRlSW1hZ2UpKCcuLi8uLi8uLi9zcmMvYXNzZXRzL2ljb25zL3BsdXMuc3ZnJykoWydpY29uJywgJ2ljb24tcGx1cyddKSgnaWNvbiBvZiBwbHVzIHN5bWJvbCcpKCdBZGQgTmV3IFByb2plY3QnKSk7XG4gICAgY29uc3Qgc2FtcGxlUHJvamVjdENvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3NpZGViYXItcHJvamVjdCcsICdwcm9qZWN0J10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShwcm9qZWN0c0NvbnRhaW5lcikoc2FtcGxlUHJvamVjdENvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFN0eWxlVG9FbGVtKShbWydjb2xvcicsICcjNDhkMWNjJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ2NsaWNrJykoaGFuZGxlQ3JlYXRlZFRhYnNDbGlja18xLmhhbmRsZUNyZWF0ZWRUYWJzQ2xpY2spLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdTYW1wbGUgUHJvamVjdCcpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2FtcGxlUHJvamVjdENvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdoNCcpKFsncHJvamVjdC10ZXh0JywgJ3RleHQtc2FtcGxlUHJvamVjdCddKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ2RhdGEtbmFtZScsIGBTYW1wbGUgUHJvamVjdGBdLFxuICAgICAgICBbJ2RhdGEtY29sb3VyJywgJyM0OGQxY2MnXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ2NsaWNrJykoaGFuZGxlQWRkTmV3VG9kb0ljb25DbGlja18xLmhhbmRsZUFkZE5ld1RvZG9JY29uQ2xpY2spLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2FtcGxlUHJvamVjdENvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuY3JlYXRlSW1hZ2UpKCcuLi8uLi8uLi9zcmMvYXNzZXRzL2ljb25zL3BsdXMuc3ZnJykoWydpY29uJywgJ2ljb24tcGx1cyddKSgnaWNvbiBvZiBwbHVzIHN5bWJvbCcpKCdBZGQgTmV3IFRvZG8nKSk7XG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG59O1xuZXhwb3J0cy5zaWRlYmFyID0gc2lkZWJhcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCIuL2luZGV4LmNzc1wiKTtcbmNvbnN0IGNvbnRlbnRfMSA9IHJlcXVpcmUoXCIuL3RzL2NvbnRlbnQvY29udGVudFwiKTtcbmNvbnN0IGhlYWRlcl8xID0gcmVxdWlyZShcIi4vdHMvaGVhZGVyL2hlYWRlclwiKTtcbmNvbnN0IHNpZGViYXJfMSA9IHJlcXVpcmUoXCIuL3RzL3NpZGViYXIvc2lkZWJhclwiKTtcbmNvbnN0IHByb2plY3RzQW5kVG9kb3NPbmxvYWRfMSA9IHJlcXVpcmUoXCIuL3RzL3Byb2plY3RzQW5kVG9kb3MvcHJvamVjdHNBbmRUb2Rvc09ubG9hZFwiKTtcbmNvbnN0IHN0b3JlU2FtcGxlUHJvamVjdF8xID0gcmVxdWlyZShcIi4vdHMvcHJvamVjdHNBbmRUb2Rvcy9zdG9yZVNhbXBsZVByb2plY3RcIik7XG5jb25zdCBhcmNoaXZlRXhwaXJlZFRvZG9zXzEgPSByZXF1aXJlKFwiLi90cy9wcm9qZWN0c0FuZFRvZG9zL2FyY2hpdmVFeHBpcmVkVG9kb3NcIik7XG5jb25zdCBtYWluQXBwID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGxvZyA9IChpKSA9PiBjb25zb2xlLmxvZygnXFxuJywgaSk7XG4gICAgLy9UT0RPOiBjaGFuZ2UgbWluIHZhbGlkYXRpb24gaW4gbW9udGggaW4gdG9kb01vZGFsXG4gICAgLy9UT0RPOiBhZGQgcmVxdWlyZWQgdG8gdG9kb01vZGFsIGVudHJpZXNcbiAgICAvL1RPRE86IGFkZCBlZGl0aW5nIHRoZSB0b2RvcyBmdW5jdGlvbmFsaXR5XG4gICAgLy9UT0RPOiBhZGQgc29ydEJ5IHNlbGVjdCBpbnB1dFxuICAgIC8vVE9ETzogYWRkIGZpbHRlckJ5IHByaW9yaXR5IHNlbGVjdCBpbnB1dFxuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpO1xuICAgICgwLCBoZWFkZXJfMS5oZWFkZXIpKCk7XG4gICAgKDAsIHNpZGViYXJfMS5zaWRlYmFyKSgpO1xuICAgICgwLCBjb250ZW50XzEuY29udGVudCkoKTtcbiAgICAoMCwgc3RvcmVTYW1wbGVQcm9qZWN0XzEuc3RvcmVTYW1wbGVQcm9qZWN0KSgpO1xuICAgICgwLCBhcmNoaXZlRXhwaXJlZFRvZG9zXzEuYXJjaGl2ZUV4cGlyZWRUb2RvcykoKTtcbiAgICAvL3J1bnMgb24gZXZlcnkgcmVmcmVzaFxuICAgIHNlbGYub25sb2FkID0gcHJvamVjdHNBbmRUb2Rvc09ubG9hZF8xLnByb2plY3RzQW5kVG9kb3NPbmxvYWQ7XG59O1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIG1haW5BcHApO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9