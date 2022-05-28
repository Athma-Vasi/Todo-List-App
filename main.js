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
const content = function () {
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
    //remove content section's previous contents
    const content = document.querySelector('.content');
    const contentBottomPrev = document.querySelector('.content-bottom');
    contentBottomPrev === null || contentBottomPrev === void 0 ? void 0 : contentBottomPrev.remove();
    //render new content
    const contentBottom = (0, element_creators_1.elemCreator)('div')(['content-bottom']);
    (0, element_creators_1.appendElemToParent)(content)(contentBottom);
    const archivedStorageArr = JSON.parse((_a = localStorage.getItem('archived')) !== null && _a !== void 0 ? _a : '');
    //render todos with checkbox disabled
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
    //render todos
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
    //if select input text is clicked, all 'live' projects displayed
    if (selectedPriority === '') {
        projectArr.forEach((project) => (0, addTodosToContent_1.addTodosToContent)(project));
    }
    //render todos
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
        if (key !== 'projectNames' && key !== 'archived') {
            projectsAndTodosArr.push(JSON.parse((_a = localStorage.getItem(key)) !== null && _a !== void 0 ? _a : ''));
        }
    });
    //render todos
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
    var _a, _b;
    ev.preventDefault();
    //remove content section's previous contents
    const content = document.querySelector('.content');
    const contentBottomPrev = document.querySelector('.content-bottom');
    contentBottomPrev === null || contentBottomPrev === void 0 ? void 0 : contentBottomPrev.remove();
    //render new content and append to this
    const contentBottom = (0, element_creators_1.elemCreator)('div')(['content-bottom']);
    (0, element_creators_1.appendElemToParent)(content)(contentBottom);
    const formData = new FormData(this);
    const searchTerm = (_b = (_a = formData.get('search-todo')) === null || _a === void 0 ? void 0 : _a.toString().toLowerCase()) !== null && _b !== void 0 ? _b : '';
    const projectArr = [];
    Object.keys(localStorage).forEach((key) => {
        var _a;
        if (key !== 'projectNames' && key !== 'archived') {
            projectArr.push(JSON.parse((_a = localStorage.getItem(key)) !== null && _a !== void 0 ? _a : ''));
        }
    });
    const searchRegEx = new RegExp(`${searchTerm}`);
    const matchedProjAndTodosArr = [];
    projectArr.forEach((project) => {
        project.todos.forEach((todo) => {
            // if it matches todoName
            if (searchRegEx.test(todo.todoName.toLowerCase())) {
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
            // else it matches description text
            else if (searchRegEx.test(todo.todoDescription.toLowerCase())) {
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
            //else it matches dueDate
            else if (searchRegEx.test(todo.todoDueDate.toString())) {
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
            //else it matches priority
            else if (searchRegEx.test(todo.todoPriority.toString())) {
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
    //render todos
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
    //assigns a key to each project based on its todo
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
    //in order to use the sort method
    const projectMapArr = Array.from(projectMap);
    if (selectedSortValue === 'lowToImmediate') {
        projectMapArr.sort((a, b) => a[0] - b[0]);
    }
    if (selectedSortValue === 'immediateToLow') {
        projectMapArr.sort((a, b) => b[0] - a[0]);
    }
    //if select input text is clicked, all 'live' projects displayed
    if (selectedSortValue === '') {
        projectArr.forEach((project) => (0, addTodosToContent_1.addTodosToContent)(project));
    }
    //render the todos
    projectMapArr.forEach((numProject) => {
        (0, addTodosToContent_1.addTodosToContent)(numProject[1]);
    });
};
exports.handleSortByPriorityClick = handleSortByPriorityClick;


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
    (0, element_creators_1.pipe)((0, element_creators_1.appendElemToParent)(bttnAddProject))((0, element_creators_1.createImage)('../../dist/assets/icons/check(1).svg')(['icon', 'icon-addProject'])(`icon of symbol 'check' representing add`)('Add Project'));
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
        ['maxlength', '31'],
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
            `${now.getFullYear()}-${now.getMonth() < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1}-${now.getDate() < 10 ? '0' + now.getDate() : now.getDate()}`,
        ],
        [
            'max',
            `${now.getFullYear() + 100}-${now.getMonth() < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1}-${now.getDate() < 10 ? '0' + now.getDate() : now.getDate()}`,
        ],
        ['name', 'addTodo-dueDate'],
        ['placeholder', 'yyyy-mm-dd'],
        ['pattern', '(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}'],
        ['required', ''],
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
        ['required', ''],
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
    const projectsContainer = document.querySelector('.container-projects');
    const projectContainer = (0, element_creators_1.elemCreator)('div')(['sidebar-project', 'project']);
    (0, element_creators_1.appendElemToParent)(projectsContainer)(projectContainer);
    (0, element_creators_1.pipe)((0, element_creators_1.addEvtListener)('click')(handleCreatedTabsClick_1.handleCreatedTabsClick), (0, element_creators_1.addAttributeToElem)([['data-name', `${formName_}`]]), (0, element_creators_1.addStyleToElem)([['color', `${formColour_}`]]), (0, element_creators_1.addTextToElem)(`${formName_}`), (0, element_creators_1.appendElemToParent)(projectContainer))((0, element_creators_1.elemCreator)('h4')(['project-text']));
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([
        ['data-name', `${formName_}`],
        ['data-colour', `${formColour_}`],
    ]), (0, element_creators_1.addEvtListener)('click')(handleAddNewTodoIconClick_1.handleAddNewTodoIconClick), (0, element_creators_1.appendElemToParent)(projectContainer))((0, element_creators_1.createImage)('../../../dist/assets/icons/plus.svg')(['icon', 'icon-plus'])('icon of plus symbol')('Add New Todo'));
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
    //store modified projects without the expired todos back into localstorage
    unexpiredProjectsMap.forEach((val, key) => {
        localStorage.setItem(key, JSON.stringify(val));
    });
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
    var _a;
    const projects = [];
    Object.keys(localStorage).forEach((key) => {
        var _a;
        if (key !== 'Sample Project' && key !== 'projectNames' && key !== 'archived') {
            projects.push(JSON.parse((_a = localStorage.getItem(key)) !== null && _a !== void 0 ? _a : ''));
        }
    });
    //display sample todos
    const sampleProject = JSON.parse((_a = localStorage.getItem('Sample Project')) !== null && _a !== void 0 ? _a : '');
    (0, addTodosToContent_1.addTodosToContent)(sampleProject);
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
    (0, element_creators_1.pipe)((0, element_creators_1.addEvtListener)('click')(handleAddNewProjectIconClick_1.handleAddNewProjectIconClick), (0, element_creators_1.appendElemToParent)(projectsHeading))((0, element_creators_1.createImage)('../../src/assets/icons/plus.svg')(['icon', 'icon-plus'])('icon of plus symbol')('Add New Project'));
    const sampleProjectContainer = (0, element_creators_1.elemCreator)('div')(['sidebar-project', 'project']);
    (0, element_creators_1.appendElemToParent)(projectsContainer)(sampleProjectContainer);
    (0, element_creators_1.pipe)((0, element_creators_1.addStyleToElem)([['color', '#48d1cc']]), (0, element_creators_1.addEvtListener)('click')(handleCreatedTabsClick_1.handleCreatedTabsClick), (0, element_creators_1.addTextToElem)('Sample Project'), (0, element_creators_1.appendElemToParent)(sampleProjectContainer))((0, element_creators_1.elemCreator)('h4')(['project-text', 'text-sampleProject']));
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([
        ['data-name', `Sample Project`],
        ['data-colour', '#48d1cc'],
    ]), (0, element_creators_1.addEvtListener)('click')(handleAddNewTodoIconClick_1.handleAddNewTodoIconClick), (0, element_creators_1.appendElemToParent)(sampleProjectContainer))((0, element_creators_1.createImage)('../../src/assets/icons/plus.svg')(['icon', 'icon-plus'])('icon of plus symbol')('Add New Todo'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGVBQWU7QUFDZiwyQkFBMkIsbUJBQU8sQ0FBQyx5REFBcUI7QUFDeEQsc0NBQXNDLG1CQUFPLENBQUMsaUdBQXlDO0FBQ3ZGLGlDQUFpQyxtQkFBTyxDQUFDLHVGQUFvQztBQUM3RSxvQ0FBb0MsbUJBQU8sQ0FBQyw2RkFBdUM7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTs7Ozs7Ozs7Ozs7QUMxREY7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsWUFBWSxHQUFHLHNCQUFzQixHQUFHLHNCQUFzQixHQUFHLG1CQUFtQixHQUFHLDBCQUEwQixHQUFHLHFCQUFxQixHQUFHLDBCQUEwQixHQUFHLG1CQUFtQjtBQUM1TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFlBQVk7Ozs7Ozs7Ozs7O0FDaEVDO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9DQUFvQztBQUNwQyx1QkFBdUIsbUJBQU8sQ0FBQywrREFBd0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQzs7Ozs7Ozs7Ozs7QUNadkI7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsaUNBQWlDO0FBQ2pDLG9CQUFvQixtQkFBTyxDQUFDLHlEQUFxQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQzs7Ozs7Ozs7Ozs7QUNkcEI7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsOEJBQThCO0FBQzlCLDRCQUE0QixtQkFBTyxDQUFDLDZGQUF1QztBQUMzRSwyQkFBMkIsbUJBQU8sQ0FBQyx5REFBcUI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSw4QkFBOEI7Ozs7Ozs7Ozs7O0FDcEJqQjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCw4QkFBOEI7QUFDOUIsNEJBQTRCLG1CQUFPLENBQUMsNkZBQXVDO0FBQzNFLDJCQUEyQixtQkFBTyxDQUFDLHlEQUFxQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDhCQUE4Qjs7Ozs7Ozs7Ozs7QUN6QmpCO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG1DQUFtQztBQUNuQywyQkFBMkIsbUJBQU8sQ0FBQyx5REFBcUI7QUFDeEQsNEJBQTRCLG1CQUFPLENBQUMsNkZBQXVDO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxtQ0FBbUM7Ozs7Ozs7Ozs7O0FDcER0QjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQzs7Ozs7Ozs7Ozs7QUNSdEI7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsK0JBQStCO0FBQy9CLDhCQUE4QixtQkFBTyxDQUFDLGlHQUF5QztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsa0JBQWtCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBLCtCQUErQjs7Ozs7Ozs7Ozs7QUN2Q2xCO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDhCQUE4QjtBQUM5Qiw0QkFBNEIsbUJBQU8sQ0FBQyw2RkFBdUM7QUFDM0UsMkJBQTJCLG1CQUFPLENBQUMseURBQXFCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsOEJBQThCOzs7Ozs7Ozs7OztBQ3pCakI7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsOEJBQThCO0FBQzlCLDRCQUE0QixtQkFBTyxDQUFDLDZGQUF1QztBQUMzRSwyQkFBMkIsbUJBQU8sQ0FBQyx5REFBcUI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHNDQUFzQyxXQUFXO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDhCQUE4Qjs7Ozs7Ozs7Ozs7QUMzR2pCO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlDQUFpQztBQUNqQywyQkFBMkIsbUJBQU8sQ0FBQyx5REFBcUI7QUFDeEQsNEJBQTRCLG1CQUFPLENBQUMsNkZBQXVDO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxpQ0FBaUM7Ozs7Ozs7Ozs7O0FDekZwQjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCwyQkFBMkI7QUFDM0IsMkJBQTJCLG1CQUFPLENBQUMseURBQXFCO0FBQ3hELDRCQUE0QixtQkFBTyxDQUFDLDZGQUF1QztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsS0FBSyxHQUFHLGlDQUFpQyxHQUFHLDhCQUE4QjtBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwyQkFBMkI7Ozs7Ozs7Ozs7O0FDdERkO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnRUFBZ0U7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQzs7Ozs7Ozs7Ozs7QUMvQ3JCO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDOzs7Ozs7Ozs7OztBQ1JuQjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCw0QkFBNEI7QUFDNUIsbUNBQW1DLG1CQUFPLENBQUMsMkdBQThDO0FBQ3pGLDRCQUE0QixtQkFBTyxDQUFDLDZGQUF1QztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw0QkFBNEI7QUFDbkQsc0JBQXNCLHNEQUFzRDtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7Ozs7Ozs7Ozs7O0FDN0JmO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDhCQUE4QjtBQUM5QiwyQkFBMkIsbUJBQU8sQ0FBQyx5REFBcUI7QUFDeEQsNEJBQTRCLG1CQUFPLENBQUMsNkZBQXVDO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixLQUFLLEdBQUcsaUNBQWlDLEdBQUcsOEJBQThCO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDhCQUE4Qjs7Ozs7Ozs7Ozs7QUN0RGpCO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGNBQWM7QUFDZCwyQkFBMkIsbUJBQU8sQ0FBQyx5REFBcUI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7Ozs7Ozs7Ozs7QUNWRDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxvQkFBb0I7QUFDcEIsMkJBQTJCLG1CQUFPLENBQUMseURBQXFCO0FBQ3hELHNDQUFzQyxtQkFBTyxDQUFDLGlHQUF5QztBQUN2RixrQ0FBa0MsbUJBQU8sQ0FBQyx5RkFBcUM7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLEtBQUs7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9COzs7Ozs7Ozs7OztBQzdEUDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxpQkFBaUI7QUFDakIsMkJBQTJCLG1CQUFPLENBQUMseURBQXFCO0FBQ3hELG1DQUFtQyxtQkFBTyxDQUFDLDJGQUFzQztBQUNqRiwrQkFBK0IsbUJBQU8sQ0FBQyxtRkFBa0M7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGtCQUFrQixHQUFHLHNFQUFzRSxHQUFHLHlEQUF5RDtBQUN0SztBQUNBO0FBQ0E7QUFDQSxlQUFlLHdCQUF3QixHQUFHLHNFQUFzRSxHQUFHLHlEQUF5RDtBQUM1SztBQUNBO0FBQ0E7QUFDQSx3RUFBd0UsRUFBRTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1CQUFtQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOzs7Ozs7Ozs7OztBQy9HSjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCwyQkFBMkI7QUFDM0IsMkJBQTJCLG1CQUFPLENBQUMseURBQXFCO0FBQ3hELG9DQUFvQyxtQkFBTyxDQUFDLDZGQUF1QztBQUNuRixpQ0FBaUMsbUJBQU8sQ0FBQyx1RkFBb0M7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnTUFBZ00sVUFBVSwyREFBMkQsWUFBWSwrQ0FBK0MsVUFBVTtBQUMxVTtBQUNBLHlCQUF5QixVQUFVO0FBQ25DLDJCQUEyQixZQUFZO0FBQ3ZDO0FBQ0E7QUFDQSwyQkFBMkI7Ozs7Ozs7Ozs7O0FDaEJkO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHlCQUF5QjtBQUN6QiwyQkFBMkIsbUJBQU8sQ0FBQyx5REFBcUI7QUFDeEQscUNBQXFDLG1CQUFPLENBQUMsK0ZBQXdDO0FBQ3JGLHNDQUFzQyxnQkFBZ0I7QUFDdEQsWUFBWSw2QkFBNkI7QUFDekM7QUFDQSxnQkFBZ0IsdURBQXVEO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvR0FBb0csY0FBYywrQ0FBK0MsWUFBWSx5REFBeUQsY0FBYztBQUNwUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsY0FBYztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLFNBQVM7QUFDdkYsOEVBQThFLGdCQUFnQjtBQUM5RjtBQUNBO0FBQ0EsbUZBQW1GLFlBQVk7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0EsOEVBQThFLGFBQWE7QUFDM0YsS0FBSztBQUNMO0FBQ0EseUJBQXlCOzs7Ozs7Ozs7OztBQ25EWjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwyQkFBMkI7Ozs7Ozs7Ozs7O0FDckZkO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDhCQUE4QjtBQUM5Qiw4QkFBOEIsbUJBQU8sQ0FBQywrRUFBdUI7QUFDN0QsNEJBQTRCLG1CQUFPLENBQUMsMkVBQXFCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSw4QkFBOEI7Ozs7Ozs7Ozs7O0FDdkJqQjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQzs7Ozs7Ozs7Ozs7QUNyQ25CO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixLQUFLLEdBQUcsaUNBQWlDLEdBQUcsMkJBQTJCO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrQkFBa0IsR0FBRyxpQ0FBaUMsR0FBRyx5REFBeUQ7QUFDcEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQixHQUFHLGlDQUFpQyxHQUFHLDJCQUEyQjtBQUN0RztBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUseURBQXlEO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHlCQUF5QjtBQUN6RDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msc0JBQXNCO0FBQ3REO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxzQkFBc0I7QUFDdEQ7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7Ozs7Ozs7Ozs7O0FDeERiO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGVBQWU7QUFDZiwyQkFBMkIsbUJBQU8sQ0FBQyx5REFBcUI7QUFDeEQsdUNBQXVDLG1CQUFPLENBQUMsbUdBQTBDO0FBQ3pGLG9DQUFvQyxtQkFBTyxDQUFDLDZGQUF1QztBQUNuRixpQ0FBaUMsbUJBQU8sQ0FBQyx1RkFBb0M7QUFDN0UsaUNBQWlDLG1CQUFPLENBQUMsdUZBQW9DO0FBQzdFLDhCQUE4QixtQkFBTyxDQUFDLGlGQUFpQztBQUN2RSxpQ0FBaUMsbUJBQU8sQ0FBQyx1RkFBb0M7QUFDN0UsaUNBQWlDLG1CQUFPLENBQUMsdUZBQW9DO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7Ozs7Ozs7VUM1Q2Y7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7OztBQ05hO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG1CQUFPLENBQUMsb0NBQWE7QUFDckIsa0JBQWtCLG1CQUFPLENBQUMseURBQXNCO0FBQ2hELGlCQUFpQixtQkFBTyxDQUFDLHFEQUFvQjtBQUM3QyxrQkFBa0IsbUJBQU8sQ0FBQyx5REFBc0I7QUFDaEQsaUNBQWlDLG1CQUFPLENBQUMseUdBQThDO0FBQ3ZGLDZCQUE2QixtQkFBTyxDQUFDLGlHQUEwQztBQUMvRSw4QkFBOEIsbUJBQU8sQ0FBQyxtR0FBMkM7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2luZGV4LmNzcz9jNDBkIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvY29udGVudC9jb250ZW50LnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZWxlbWVudC1jcmVhdG9ycy50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2V2ZW50Q0JzL2hhbmRsZUFkZE5ld1Byb2plY3RJY29uQ2xpY2sudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZXZlbnRDQnMvaGFuZGxlQXJjaGl2ZWRUYWJDbGljay50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2V2ZW50Q0JzL2hhbmRsZUNyZWF0ZWRUYWJzQ2xpY2sudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVGaWx0ZXJCeVByaW9yaXR5Q2xpY2sudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVQcm9qZWN0Q2xvc2VJY29uQ2xpY2sudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVQcm9qZWN0Rm9ybVN1Ym1pdC50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2V2ZW50Q0JzL2hhbmRsZVByb2plY3RzVGFiQ2xpY2sudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVTZWFyY2hGb3JtU3VibWl0LnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZXZlbnRDQnMvaGFuZGxlU29ydEJ5UHJpb3JpdHlDbGljay50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2V2ZW50Q0JzL2hhbmRsZVRvZGF5VGFiQ2xpY2sudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVUb2RvQ2hlY2tib3hDb21wbGV0ZS50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2V2ZW50Q0JzL2hhbmRsZVRvZG9DbG9zZUljb25DbGljay50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2V2ZW50Q0JzL2hhbmRsZVRvZG9Gb3JtU3VibWl0LnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZXZlbnRDQnMvaGFuZGxlVXBjb21pbmdUYWJDbGljay50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2hlYWRlci9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9tb2RhbHMvcHJvamVjdE1vZGFsLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvbW9kYWxzL3RvZG9Nb2RhbC50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL3Byb2plY3RzQW5kVG9kb3MvYWRkUHJvamVjdFRvU2lkZWJhci50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL3Byb2plY3RzQW5kVG9kb3MvYWRkVG9kb3NUb0NvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9wcm9qZWN0c0FuZFRvZG9zL2FyY2hpdmVFeHBpcmVkVG9kb3MudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9wcm9qZWN0c0FuZFRvZG9zL3Byb2plY3RzQW5kVG9kb3NPbmxvYWQudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9wcm9qZWN0c0FuZFRvZG9zL3N0b3JlUHJvamVjdEFuZFRvZG9zRnVsbC50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL3Byb2plY3RzQW5kVG9kb3Mvc3RvcmVTYW1wbGVQcm9qZWN0LnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvc2lkZWJhci9zaWRlYmFyLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNvbnRlbnQgPSB2b2lkIDA7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IGhhbmRsZUZpbHRlckJ5UHJpb3JpdHlDbGlja18xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZUZpbHRlckJ5UHJpb3JpdHlDbGlja1wiKTtcbmNvbnN0IGhhbmRsZVNlYXJjaEZvcm1TdWJtaXRfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVTZWFyY2hGb3JtU3VibWl0XCIpO1xuY29uc3QgaGFuZGxlU29ydEJ5UHJpb3JpdHlDbGlja18xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZVNvcnRCeVByaW9yaXR5Q2xpY2tcIik7XG5jb25zdCBjb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydjb250ZW50J10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShyb290KShjb250ZW50KTtcbiAgICBjb25zdCB0b3AgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydjb250ZW50LXRvcCddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoY29udGVudCkodG9wKTtcbiAgICBjb25zdCBmb3JtID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2Zvcm0nKShbJ2Zvcm0tc2VhcmNoVG9kbyddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdzdWJtaXQnKShoYW5kbGVTZWFyY2hGb3JtU3VibWl0XzEuaGFuZGxlU2VhcmNoRm9ybVN1Ym1pdCksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsnYWN0aW9uJywgJyMnXSxcbiAgICAgICAgWydtZXRob2QnLCAncG9zdCddLFxuICAgICAgICBbJ2lkJywgJ2Zvcm0tc2VhcmNoVG9kbyddLFxuICAgICAgICBbJ25hbWUnLCAnc2VhcmNoLXRvZG8nXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvcCkpKGZvcm0pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ2ZvcicsICdzZWFyY2hUb2RvJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGZvcm0pKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnbGFiZWwnKShbJ2xhYmVsLXNlYXJjaCddKSk7XG4gICAgY29uc3Qgc2VhcmNoVG9kbyA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdpbnB1dCcpKFsnc2VhcmNoVG9kbyddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ3R5cGUnLCAnc2VhcmNoJ10sXG4gICAgICAgIFsncGxhY2Vob2xkZXInLCAnc2VhcmNoIGZvciBhIHRvZG8nXSxcbiAgICAgICAgWydpZCcsICdzZWFyY2hUb2RvJ10sXG4gICAgICAgIFsnbmFtZScsICdzZWFyY2gtdG9kbyddLFxuICAgIF0pKHNlYXJjaFRvZG8pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShmb3JtKShzZWFyY2hUb2RvKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShmb3JtKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5jcmVhdGVJbWFnZSkoJy4uLy4uL3NyYy9hc3NldHMvaWNvbnMvc2VhcmNoLnN2ZycpKFsnaWNvbicsICdpY29uLXNlYXJjaCddKSgnaWNvbiBvZiBtYWduaWZ5aW5nIGdsYXNzIHJlcHJlc2VudGluZyBzZWFyY2gnKSgnU2VhcmNoJykpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWydmb3InLCAnc2VsZWN0LWZpbHRlckJ5UHJpb3JpdHknXSxcbiAgICAgICAgWyduYW1lJywgJ3NlbGVjdC1maWx0ZXJCeVByaW9yaXR5J10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b3ApKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnbGFiZWwnKShbJ2xhYmVsJywgJ2xhYmVsLWZpbHRlckJ5UHJpb3JpdHknXSkpO1xuICAgIGNvbnN0IHNlbGVjdEZpbHRlckJ5UHJpb3JpdHkgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnc2VsZWN0JykoWydzZWxlY3QtZmlsdGVyQnlQcmlvcml0eSddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdjbGljaycpKGhhbmRsZUZpbHRlckJ5UHJpb3JpdHlDbGlja18xLmhhbmRsZUZpbHRlckJ5UHJpb3JpdHlDbGljayksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsnbmFtZScsICdzZWxlY3QtZmlsdGVyQnlQcmlvcml0eSddLFxuICAgICAgICBbJ2lkJywgJ3NlbGVjdC1maWx0ZXJCeVByaW9yaXR5J10sXG4gICAgICAgIFsndGl0bGUnLCAnc2VsZWN0LWZpbHRlckJ5UHJpb3JpdHknXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvcCkpKHNlbGVjdEZpbHRlckJ5UHJpb3JpdHkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnLS1GaWx0ZXIgYnkgcHJpb3JpdHktLScpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1sndmFsdWUnLCAnJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNlbGVjdEZpbHRlckJ5UHJpb3JpdHkpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnb3B0aW9uJykoWydvcHRpb24tZmlsdGVyQnlQcmlvcml0eSddKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdpbW1lZGlhdGUnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ3ZhbHVlJywgJ2ltbWVkaWF0ZSddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzZWxlY3RGaWx0ZXJCeVByaW9yaXR5KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ29wdGlvbicpKFsnb3B0aW9uLWZpbHRlckJ5UHJpb3JpdHknXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgndXJnZW50JyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWyd2YWx1ZScsICd1cmdlbnQnXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2VsZWN0RmlsdGVyQnlQcmlvcml0eSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdvcHRpb24nKShbJ29wdGlvbi1maWx0ZXJCeVByaW9yaXR5J10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ2hpZ2gnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ3ZhbHVlJywgJ2hpZ2gnXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2VsZWN0RmlsdGVyQnlQcmlvcml0eSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdvcHRpb24nKShbJ29wdGlvbi1maWx0ZXJCeVByaW9yaXR5J10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ21lZGl1bScpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1sndmFsdWUnLCAnbWVkaXVtJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNlbGVjdEZpbHRlckJ5UHJpb3JpdHkpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnb3B0aW9uJykoWydvcHRpb24tZmlsdGVyQnlQcmlvcml0eSddKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdsb3cnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ3ZhbHVlJywgJ2xvdyddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzZWxlY3RGaWx0ZXJCeVByaW9yaXR5KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ29wdGlvbicpKFsnb3B0aW9uLWZpbHRlckJ5UHJpb3JpdHknXSkpO1xuICAgIGNvbnN0IHNlbGVjdFNvcnRCeVByaW9yaXR5ID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ3NlbGVjdCcpKFsnc2VsZWN0LXNvcnRCeVByaW9yaXR5J10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ2NsaWNrJykoaGFuZGxlU29ydEJ5UHJpb3JpdHlDbGlja18xLmhhbmRsZVNvcnRCeVByaW9yaXR5Q2xpY2spLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ2lkJywgJ3NlbGVjdC1zb3J0QnlQcmlvcml0eSddLFxuICAgICAgICBbJ25hbWUnLCAnc2VsZWN0LXNvcnRCeVByaW9yaXR5J10sXG4gICAgICAgIFsndGl0bGUnLCAnc2VsZWN0LXNvcnRCeVByaW9yaXR5J10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b3ApKShzZWxlY3RTb3J0QnlQcmlvcml0eSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCctLVNvcnQgYnkgcHJpb3JpdHktLScpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1sndmFsdWUnLCAnJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNlbGVjdFNvcnRCeVByaW9yaXR5KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ29wdGlvbicpKFsnb3B0aW9uLXNvcnRCeVByaW9yaXR5J10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ2xvdyB0byBpbW1lZGlhdGUnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ3ZhbHVlJywgJ2xvd1RvSW1tZWRpYXRlJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNlbGVjdFNvcnRCeVByaW9yaXR5KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ29wdGlvbicpKFsnb3B0aW9uLXNvcnRCeVByaW9yaXR5J10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ2ltbWVkaWF0ZSB0byBsb3cnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ3ZhbHVlJywgJ2ltbWVkaWF0ZVRvTG93J11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNlbGVjdFNvcnRCeVByaW9yaXR5KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ29wdGlvbicpKFsnb3B0aW9uLXNvcnRCeVByaW9yaXR5J10pKTtcbiAgICBjb25zdCBjb250ZW50Qm90dG9tID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnY29udGVudC1ib3R0b20nXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGNvbnRlbnQpKGNvbnRlbnRCb3R0b20pO1xufTtcbmV4cG9ydHMuY29udGVudCA9IGNvbnRlbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucGlwZSA9IGV4cG9ydHMuYWRkU3R5bGVUb0VsZW0gPSBleHBvcnRzLmFkZEV2dExpc3RlbmVyID0gZXhwb3J0cy5jcmVhdGVJbWFnZSA9IGV4cG9ydHMuYWRkQXR0cmlidXRlVG9FbGVtID0gZXhwb3J0cy5hZGRUZXh0VG9FbGVtID0gZXhwb3J0cy5hcHBlbmRFbGVtVG9QYXJlbnQgPSBleHBvcnRzLmVsZW1DcmVhdG9yID0gdm9pZCAwO1xuY29uc3QgZWxlbUNyZWF0b3IgPSAoZWxlbV8pID0+IChjbGFzc18pID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtXyk7XG4gICAgcmV0dXJuIGNsYXNzXy5yZWR1Y2UoKGVsZW0sIGN1cnJDbGFzcykgPT4ge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY3VyckNsYXNzKTtcbiAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgfSwgZWxlbWVudCk7XG59O1xuZXhwb3J0cy5lbGVtQ3JlYXRvciA9IGVsZW1DcmVhdG9yO1xuY29uc3QgYWRkQXR0cmlidXRlVG9FbGVtID0gKGF0dHJWYWxzXykgPT4gKGVsZW1fKSA9PiB7XG4gICAgcmV0dXJuIGF0dHJWYWxzXy5yZWR1Y2UoKGVsZW1lbnQsIGN1cnIpID0+IHtcbiAgICAgICAgaWYgKGN1cnIubGVuZ3RoID4gMilcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWxlbWVudC5zZXRBdHRyaWJ1dGUoY3VyclswXSwgY3VyclsxXSk7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0sIGVsZW1fKTtcbn07XG5leHBvcnRzLmFkZEF0dHJpYnV0ZVRvRWxlbSA9IGFkZEF0dHJpYnV0ZVRvRWxlbTtcbmNvbnN0IGFkZFN0eWxlVG9FbGVtID0gKHN0eWxlUHJvcFZhbHNfKSA9PiAoZWxlbV8pID0+IHtcbiAgICByZXR1cm4gc3R5bGVQcm9wVmFsc18ucmVkdWNlKChlbGVtZW50LCBjdXJyKSA9PiB7XG4gICAgICAgIGlmIChjdXJyLmxlbmd0aCA+IDIpXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoY3VyclswXSwgY3VyclsxXSk7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0sIGVsZW1fKTtcbn07XG5leHBvcnRzLmFkZFN0eWxlVG9FbGVtID0gYWRkU3R5bGVUb0VsZW07XG5jb25zdCBhZGRUZXh0VG9FbGVtID0gKHRleHRfKSA9PiAoZWxlbV8pID0+IHtcbiAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHRfKTtcbiAgICBlbGVtXyA9PT0gbnVsbCB8fCBlbGVtXyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWxlbV8uYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuICAgIHJldHVybiBlbGVtXztcbn07XG5leHBvcnRzLmFkZFRleHRUb0VsZW0gPSBhZGRUZXh0VG9FbGVtO1xuY29uc3QgYXBwZW5kRWxlbVRvUGFyZW50ID0gKHBhcmVudF8pID0+IChjaGlsZF8pID0+IHtcbiAgICBpZiAoY2hpbGRfKVxuICAgICAgICBwYXJlbnRfID09PSBudWxsIHx8IHBhcmVudF8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmVudF8uYXBwZW5kQ2hpbGQoY2hpbGRfKTtcbn07XG5leHBvcnRzLmFwcGVuZEVsZW1Ub1BhcmVudCA9IGFwcGVuZEVsZW1Ub1BhcmVudDtcbmNvbnN0IGNyZWF0ZUltYWdlID0gKHNvdXJjZV8pID0+IChjbGFzc18pID0+IChhbHRfKSA9PiAodGl0bGVfKSA9PiB7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBzb3VyY2VfO1xuICAgIGltYWdlLmFsdCA9IGFsdF87XG4gICAgaW1hZ2UudGl0bGUgPSB0aXRsZV87XG4gICAgcmV0dXJuIGNsYXNzXy5yZWR1Y2UoKGVsZW0sIGN1cnJDbGFzcykgPT4ge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY3VyckNsYXNzKTtcbiAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgfSwgaW1hZ2UpO1xufTtcbmV4cG9ydHMuY3JlYXRlSW1hZ2UgPSBjcmVhdGVJbWFnZTtcbmNvbnN0IGFkZEV2dExpc3RlbmVyID0gKGV2dF8pID0+IChoYW5kbGVFdnRfKSA9PiAoZWxlbV8pID0+IHtcbiAgICBlbGVtXyA9PT0gbnVsbCB8fCBlbGVtXyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWxlbV8uYWRkRXZlbnRMaXN0ZW5lcihldnRfLCBoYW5kbGVFdnRfKTtcbiAgICByZXR1cm4gZWxlbV87XG59O1xuZXhwb3J0cy5hZGRFdnRMaXN0ZW5lciA9IGFkZEV2dExpc3RlbmVyO1xuLy8gZnVuY3Rpb24gcGlwZTxWPiguLi5mdW5jczogQXJyYXk8KF86IFYpID0+IFY+KTogKF86IFYpID0+IFYgfCBudWxsIHwgdm9pZCB7XG4vLyBcdHJldHVybiBmdW5jdGlvbiAodmFsdWU6IFYpIHtcbi8vIFx0XHRyZXR1cm4gZnVuY3MucmVkdWNlKCh2YWwsIGZ1bmMpID0+IHtcbi8vIFx0XHRcdHJldHVybiBmdW5jKHZhbClcbi8vIFx0XHR9LCB2YWx1ZSlcbi8vIFx0fVxuLy8gfVxuY29uc3QgcGlwZSA9ICguLi5mdW5jcykgPT4gKHZhbHVlKSA9PiBmdW5jcy5yZWR1Y2UoKHJlcywgZnVuYykgPT4gZnVuYyhyZXMpLCB2YWx1ZSk7XG5leHBvcnRzLnBpcGUgPSBwaXBlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZUFkZE5ld1Byb2plY3RJY29uQ2xpY2sgPSB2b2lkIDA7XG5jb25zdCBwcm9qZWN0TW9kYWxfMSA9IHJlcXVpcmUoXCIuLi9tb2RhbHMvcHJvamVjdE1vZGFsXCIpO1xuY29uc3QgaGFuZGxlQWRkTmV3UHJvamVjdEljb25DbGljayA9IGZ1bmN0aW9uIChldikge1xuICAgICgwLCBwcm9qZWN0TW9kYWxfMS5wcm9qZWN0TW9kYWwpKCk7XG4gICAgY29uc3QgYWRkUHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3QtY29udGFpbmVyJyk7XG4gICAgaWYgKGFkZFByb2plY3RNb2RhbCkge1xuICAgICAgICBhZGRQcm9qZWN0TW9kYWwuc3R5bGUudmlzaWJpbGl0eSA9XG4gICAgICAgICAgICAoYWRkUHJvamVjdE1vZGFsID09PSBudWxsIHx8IGFkZFByb2plY3RNb2RhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWRkUHJvamVjdE1vZGFsLnN0eWxlLnZpc2liaWxpdHkpID09PSAndmlzaWJsZScgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJztcbiAgICB9XG59O1xuZXhwb3J0cy5oYW5kbGVBZGROZXdQcm9qZWN0SWNvbkNsaWNrID0gaGFuZGxlQWRkTmV3UHJvamVjdEljb25DbGljaztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrID0gdm9pZCAwO1xuY29uc3QgdG9kb01vZGFsXzEgPSByZXF1aXJlKFwiLi4vbW9kYWxzL3RvZG9Nb2RhbFwiKTtcbmNvbnN0IGhhbmRsZUFkZE5ld1RvZG9JY29uQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBjb25zdCBwcm9qZWN0RGF0YU5hbWUgPSAoX2EgPSB0aGlzLmRhdGFzZXQubmFtZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJyc7XG4gICAgY29uc3QgcHJvamVjdERhdGFDb2xvdXIgPSAoX2IgPSB0aGlzLmRhdGFzZXQuY29sb3VyKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnJztcbiAgICAoMCwgdG9kb01vZGFsXzEudG9kb01vZGFsKShwcm9qZWN0RGF0YU5hbWUsIHByb2plY3REYXRhQ29sb3VyKTtcbiAgICBjb25zdCBhZGRUb2RvTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jb250YWluZXInKTtcbiAgICBpZiAoYWRkVG9kb01vZGFsKVxuICAgICAgICBhZGRUb2RvTW9kYWwuc3R5bGUudmlzaWJpbGl0eSA9XG4gICAgICAgICAgICAoYWRkVG9kb01vZGFsID09PSBudWxsIHx8IGFkZFRvZG9Nb2RhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWRkVG9kb01vZGFsLnN0eWxlLnZpc2liaWxpdHkpID09PSAndmlzaWJsZScgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJztcbn07XG5leHBvcnRzLmhhbmRsZUFkZE5ld1RvZG9JY29uQ2xpY2sgPSBoYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZUFyY2hpdmVkVGFiQ2xpY2sgPSB2b2lkIDA7XG5jb25zdCBhZGRUb2Rvc1RvQ29udGVudF8xID0gcmVxdWlyZShcIi4uL3Byb2plY3RzQW5kVG9kb3MvYWRkVG9kb3NUb0NvbnRlbnRcIik7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IGhhbmRsZUFyY2hpdmVkVGFiQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hO1xuICAgIC8vcmVtb3ZlIGNvbnRlbnQgc2VjdGlvbidzIHByZXZpb3VzIGNvbnRlbnRzXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3QgY29udGVudEJvdHRvbVByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1ib3R0b20nKTtcbiAgICBjb250ZW50Qm90dG9tUHJldiA9PT0gbnVsbCB8fCBjb250ZW50Qm90dG9tUHJldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGVudEJvdHRvbVByZXYucmVtb3ZlKCk7XG4gICAgLy9yZW5kZXIgbmV3IGNvbnRlbnRcbiAgICBjb25zdCBjb250ZW50Qm90dG9tID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnY29udGVudC1ib3R0b20nXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGNvbnRlbnQpKGNvbnRlbnRCb3R0b20pO1xuICAgIGNvbnN0IGFyY2hpdmVkU3RvcmFnZUFyciA9IEpTT04ucGFyc2UoKF9hID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FyY2hpdmVkJykpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnKTtcbiAgICAvL3JlbmRlciB0b2RvcyB3aXRoIGNoZWNrYm94IGRpc2FibGVkXG4gICAgYXJjaGl2ZWRTdG9yYWdlQXJyLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgKDAsIGFkZFRvZG9zVG9Db250ZW50XzEuYWRkVG9kb3NUb0NvbnRlbnQpKHByb2plY3QsIHRydWUpO1xuICAgIH0pO1xufTtcbmV4cG9ydHMuaGFuZGxlQXJjaGl2ZWRUYWJDbGljayA9IGhhbmRsZUFyY2hpdmVkVGFiQ2xpY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlQ3JlYXRlZFRhYnNDbGljayA9IHZvaWQgMDtcbmNvbnN0IGFkZFRvZG9zVG9Db250ZW50XzEgPSByZXF1aXJlKFwiLi4vcHJvamVjdHNBbmRUb2Rvcy9hZGRUb2Rvc1RvQ29udGVudFwiKTtcbmNvbnN0IGVsZW1lbnRfY3JlYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50LWNyZWF0b3JzXCIpO1xuY29uc3QgaGFuZGxlQ3JlYXRlZFRhYnNDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAvL3JlbW92ZSBjb250ZW50IHNlY3Rpb24ncyBwcmV2aW91cyBjb250ZW50c1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IGNvbnRlbnRCb3R0b21QcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYm90dG9tJyk7XG4gICAgY29udGVudEJvdHRvbVByZXYgPT09IG51bGwgfHwgY29udGVudEJvdHRvbVByZXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRlbnRCb3R0b21QcmV2LnJlbW92ZSgpO1xuICAgIGNvbnN0IGNvbnRlbnRCb3R0b20gPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydjb250ZW50LWJvdHRvbSddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoY29udGVudCkoY29udGVudEJvdHRvbSk7XG4gICAgY29uc3QgdGhpc1Byb2plY3ROYW1lID0gdGhpcy50ZXh0Q29udGVudDtcbiAgICBjb25zdCBwcm9qZWN0QW5kVG9kb3NPYmpBcnIgPSBbXTtcbiAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmIChrZXkgPT09IHRoaXNQcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgcHJvamVjdEFuZFRvZG9zT2JqQXJyLnB1c2goSlNPTi5wYXJzZSgoX2EgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzUHJvamVjdE5hbWUpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy9yZW5kZXIgdG9kb3NcbiAgICBwcm9qZWN0QW5kVG9kb3NPYmpBcnIuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAoMCwgYWRkVG9kb3NUb0NvbnRlbnRfMS5hZGRUb2Rvc1RvQ29udGVudCkocHJvamVjdCk7XG4gICAgfSk7XG59O1xuZXhwb3J0cy5oYW5kbGVDcmVhdGVkVGFic0NsaWNrID0gaGFuZGxlQ3JlYXRlZFRhYnNDbGljaztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVGaWx0ZXJCeVByaW9yaXR5Q2xpY2sgPSB2b2lkIDA7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IGFkZFRvZG9zVG9Db250ZW50XzEgPSByZXF1aXJlKFwiLi4vcHJvamVjdHNBbmRUb2Rvcy9hZGRUb2Rvc1RvQ29udGVudFwiKTtcbmNvbnN0IGhhbmRsZUZpbHRlckJ5UHJpb3JpdHlDbGljayA9IGZ1bmN0aW9uIChldikge1xuICAgIC8vcmVtb3ZlIGNvbnRlbnQgc2VjdGlvbidzIHByZXZpb3VzIGNvbnRlbnRzXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3QgY29udGVudEJvdHRvbVByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1ib3R0b20nKTtcbiAgICBjb250ZW50Qm90dG9tUHJldiA9PT0gbnVsbCB8fCBjb250ZW50Qm90dG9tUHJldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGVudEJvdHRvbVByZXYucmVtb3ZlKCk7XG4gICAgLy9yZW5kZXIgbmV3IGNvbnRlbnRcbiAgICBjb25zdCBjb250ZW50Qm90dG9tID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnY29udGVudC1ib3R0b20nXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGNvbnRlbnQpKGNvbnRlbnRCb3R0b20pO1xuICAgIGNvbnN0IHNlbGVjdGVkUHJpb3JpdHkgPSB0aGlzLnZhbHVlO1xuICAgIGNvbnN0IHByb2plY3RBcnIgPSBbXTtcbiAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmIChrZXkgIT09ICdwcm9qZWN0TmFtZXMnICYmIGtleSAhPT0gJ2FyY2hpdmVkJykge1xuICAgICAgICAgICAgcHJvamVjdEFyci5wdXNoKEpTT04ucGFyc2UoKF9hID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGZpbHRlcmVkUHJpb3JpdHlBcnIgPSBbXTtcbiAgICBwcm9qZWN0QXJyLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICBpZiAodG9kby50b2RvUHJpb3JpdHkgPT09IHNlbGVjdGVkUHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0ge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZTogcHJvamVjdC5wcm9qZWN0LnByb2plY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbG91cjogcHJvamVjdC5wcm9qZWN0LnByb2plY3RDb2xvdXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb05hbWU6IHRvZG8udG9kb05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uOiB0b2RvLnRvZG9EZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRHVlRGF0ZTogdG9kby50b2RvRHVlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHk6IHRvZG8udG9kb1ByaW9yaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZpbHRlcmVkUHJpb3JpdHlBcnIucHVzaCh0ZW1wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy9pZiBzZWxlY3QgaW5wdXQgdGV4dCBpcyBjbGlja2VkLCBhbGwgJ2xpdmUnIHByb2plY3RzIGRpc3BsYXllZFxuICAgIGlmIChzZWxlY3RlZFByaW9yaXR5ID09PSAnJykge1xuICAgICAgICBwcm9qZWN0QXJyLmZvckVhY2goKHByb2plY3QpID0+ICgwLCBhZGRUb2Rvc1RvQ29udGVudF8xLmFkZFRvZG9zVG9Db250ZW50KShwcm9qZWN0KSk7XG4gICAgfVxuICAgIC8vcmVuZGVyIHRvZG9zXG4gICAgZmlsdGVyZWRQcmlvcml0eUFyci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICgwLCBhZGRUb2Rvc1RvQ29udGVudF8xLmFkZFRvZG9zVG9Db250ZW50KShwcm9qZWN0KTtcbiAgICB9KTtcbn07XG5leHBvcnRzLmhhbmRsZUZpbHRlckJ5UHJpb3JpdHlDbGljayA9IGhhbmRsZUZpbHRlckJ5UHJpb3JpdHlDbGljaztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVQcm9qZWN0Q2xvc2VJY29uQ2xpY2sgPSB2b2lkIDA7XG5jb25zdCBoYW5kbGVQcm9qZWN0Q2xvc2VJY29uQ2xpY2sgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICBjb25zdCBhZGRQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdC1jb250YWluZXInKTtcbiAgICBpZiAoYWRkUHJvamVjdE1vZGFsKVxuICAgICAgICBhZGRQcm9qZWN0TW9kYWwucmVtb3ZlKCk7XG59O1xuZXhwb3J0cy5oYW5kbGVQcm9qZWN0Q2xvc2VJY29uQ2xpY2sgPSBoYW5kbGVQcm9qZWN0Q2xvc2VJY29uQ2xpY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlUHJvamVjdEZvcm1TdWJtaXQgPSB2b2lkIDA7XG5jb25zdCBhZGRQcm9qZWN0VG9TaWRlYmFyXzEgPSByZXF1aXJlKFwiLi4vcHJvamVjdHNBbmRUb2Rvcy9hZGRQcm9qZWN0VG9TaWRlYmFyXCIpO1xuY29uc3QgaGFuZGxlUHJvamVjdEZvcm1TdWJtaXQgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdC1jb250YWluZXInKTtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XG4gICAgY29uc3QgcHJvamVjdEZvcm1OYW1lID0gKF9iID0gKF9hID0gcHJvamVjdEZvcm1EYXRhLmdldCgnYWRkUHJvamVjdC1uYW1lJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b1N0cmluZygpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnJztcbiAgICBjb25zdCBwcm9qZWN0Rm9ybUNvbG91ciA9IChfZCA9IChfYyA9IHByb2plY3RGb3JtRGF0YS5nZXQoJ2FkZFByb2plY3QtY29sb3VyJykpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy50b1N0cmluZygpKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiAnJztcbiAgICAvL2lmICdwcm9qZWN0TmFtZXMnIGRvZXNuJ3QgZXhpc3QsIGNyZWF0ZSBpdCwgb3RoZXJ3aXNlIGRvIG5vdGhpbmdcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0TmFtZXMnKSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdE5hbWVzJywgSlNPTi5zdHJpbmdpZnkoW10pKTtcbiAgICB9XG4gICAgY29uc3Qgc3RvcmVQcm9qZWN0ID0gKGZ1bmN0aW9uIChwcm9qZWN0Rm9ybU5hbWVfKSB7XG4gICAgICAgIC8vaWYga2V5IGluIGxvY2Fsc3RvcmFnZSBpcyBwcm9qZWN0TmFtZXMsIHRoZW4gZ2V0IHRoZSB2YWx1ZXMgYXNcbiAgICAgICAgLy9hbiBhcnJheVxuICAgICAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ3Byb2plY3ROYW1lcycpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzU2V0ID0gbmV3IFNldChKU09OLnBhcnNlKChfYSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnKSk7XG4gICAgICAgICAgICAgICAgWyd0b2RheScsICd1cGNvbWluZycsICdhcmNoaXZlZCcsICdwcm9qZWN0cyddLmZvckVhY2goKG5hbWUpID0+IGtleXNTZXQuYWRkKG5hbWUpKTtcbiAgICAgICAgICAgICAgICAvL2lmIG5hbWUgYWxyZWFkeSBwcmVzZW50XG4gICAgICAgICAgICAgICAgaWYgKGtleXNTZXQuaGFzKHByb2plY3RGb3JtTmFtZV8pKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGAke3Byb2plY3RGb3JtTmFtZV99IGFscmVhZHkgZXhpc3RzIGFzIGEgcHJvamVjdCAo772h4oCizIHvuL/igKLMgO+9oSkgIFBsZWFzZSBjaG9vc2UgYW5vdGhlciBuYW1lLmApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL2lmIG5ldyBuYW1lLCBwdXNoIHRvIGFyciBhbmQgdGhlbiBzdG9yZSBhcnJheSBpbiBsb2NhbFN0b3JhZ2VcbiAgICAgICAgICAgICAgICAgICAga2V5c1NldC5hZGQocHJvamVjdEZvcm1OYW1lXyk7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoQXJyYXkuZnJvbShrZXlzU2V0KSkpO1xuICAgICAgICAgICAgICAgICAgICAoMCwgYWRkUHJvamVjdFRvU2lkZWJhcl8xLmFkZFByb2plY3RUb1NpZGViYXIpKHByb2plY3RGb3JtTmFtZSwgcHJvamVjdEZvcm1Db2xvdXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSkocHJvamVjdEZvcm1OYW1lKTtcbiAgICBhZGRQcm9qZWN0TW9kYWwgPT09IG51bGwgfHwgYWRkUHJvamVjdE1vZGFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhZGRQcm9qZWN0TW9kYWwucmVtb3ZlKCk7XG59O1xuZXhwb3J0cy5oYW5kbGVQcm9qZWN0Rm9ybVN1Ym1pdCA9IGhhbmRsZVByb2plY3RGb3JtU3VibWl0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZVByb2plY3RzVGFiQ2xpY2sgPSB2b2lkIDA7XG5jb25zdCBhZGRUb2Rvc1RvQ29udGVudF8xID0gcmVxdWlyZShcIi4uL3Byb2plY3RzQW5kVG9kb3MvYWRkVG9kb3NUb0NvbnRlbnRcIik7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IGhhbmRsZVByb2plY3RzVGFiQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy9yZW1vdmUgY29udGVudCBzZWN0aW9uJ3MgcHJldmlvdXMgY29udGVudHNcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBjb250ZW50Qm90dG9tUHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWJvdHRvbScpO1xuICAgIGNvbnRlbnRCb3R0b21QcmV2ID09PSBudWxsIHx8IGNvbnRlbnRCb3R0b21QcmV2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250ZW50Qm90dG9tUHJldi5yZW1vdmUoKTtcbiAgICAvL3JlbmRlciBuZXcgY29udGVudFxuICAgIGNvbnN0IGNvbnRlbnRCb3R0b20gPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydjb250ZW50LWJvdHRvbSddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoY29udGVudCkoY29udGVudEJvdHRvbSk7XG4gICAgY29uc3QgcHJvamVjdHNBbmRUb2Rvc0FyciA9IFtdO1xuICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKGtleSAhPT0gJ3Byb2plY3ROYW1lcycgJiYga2V5ICE9PSAnYXJjaGl2ZWQnKSB7XG4gICAgICAgICAgICBwcm9qZWN0c0FuZFRvZG9zQXJyLnB1c2goSlNPTi5wYXJzZSgoX2EgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy9yZW5kZXIgdG9kb3NcbiAgICBwcm9qZWN0c0FuZFRvZG9zQXJyLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgKDAsIGFkZFRvZG9zVG9Db250ZW50XzEuYWRkVG9kb3NUb0NvbnRlbnQpKHByb2plY3QpO1xuICAgIH0pO1xufTtcbmV4cG9ydHMuaGFuZGxlUHJvamVjdHNUYWJDbGljayA9IGhhbmRsZVByb2plY3RzVGFiQ2xpY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlU2VhcmNoRm9ybVN1Ym1pdCA9IHZvaWQgMDtcbmNvbnN0IGFkZFRvZG9zVG9Db250ZW50XzEgPSByZXF1aXJlKFwiLi4vcHJvamVjdHNBbmRUb2Rvcy9hZGRUb2Rvc1RvQ29udGVudFwiKTtcbmNvbnN0IGVsZW1lbnRfY3JlYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50LWNyZWF0b3JzXCIpO1xuY29uc3QgaGFuZGxlU2VhcmNoRm9ybVN1Ym1pdCA9IGZ1bmN0aW9uIChldikge1xuICAgIHZhciBfYSwgX2I7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAvL3JlbW92ZSBjb250ZW50IHNlY3Rpb24ncyBwcmV2aW91cyBjb250ZW50c1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IGNvbnRlbnRCb3R0b21QcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYm90dG9tJyk7XG4gICAgY29udGVudEJvdHRvbVByZXYgPT09IG51bGwgfHwgY29udGVudEJvdHRvbVByZXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRlbnRCb3R0b21QcmV2LnJlbW92ZSgpO1xuICAgIC8vcmVuZGVyIG5ldyBjb250ZW50IGFuZCBhcHBlbmQgdG8gdGhpc1xuICAgIGNvbnN0IGNvbnRlbnRCb3R0b20gPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydjb250ZW50LWJvdHRvbSddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoY29udGVudCkoY29udGVudEJvdHRvbSk7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XG4gICAgY29uc3Qgc2VhcmNoVGVybSA9IChfYiA9IChfYSA9IGZvcm1EYXRhLmdldCgnc2VhcmNoLXRvZG8nKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJyc7XG4gICAgY29uc3QgcHJvamVjdEFyciA9IFtdO1xuICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKGtleSAhPT0gJ3Byb2plY3ROYW1lcycgJiYga2V5ICE9PSAnYXJjaGl2ZWQnKSB7XG4gICAgICAgICAgICBwcm9qZWN0QXJyLnB1c2goSlNPTi5wYXJzZSgoX2EgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3Qgc2VhcmNoUmVnRXggPSBuZXcgUmVnRXhwKGAke3NlYXJjaFRlcm19YCk7XG4gICAgY29uc3QgbWF0Y2hlZFByb2pBbmRUb2Rvc0FyciA9IFtdO1xuICAgIHByb2plY3RBcnIuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgICAgIC8vIGlmIGl0IG1hdGNoZXMgdG9kb05hbWVcbiAgICAgICAgICAgIGlmIChzZWFyY2hSZWdFeC50ZXN0KHRvZG8udG9kb05hbWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0ge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZTogcHJvamVjdC5wcm9qZWN0LnByb2plY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbG91cjogcHJvamVjdC5wcm9qZWN0LnByb2plY3RDb2xvdXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb05hbWU6IHRvZG8udG9kb05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uOiB0b2RvLnRvZG9EZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRHVlRGF0ZTogdG9kby50b2RvRHVlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHk6IHRvZG8udG9kb1ByaW9yaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG1hdGNoZWRQcm9qQW5kVG9kb3NBcnIucHVzaCh0ZW1wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGVsc2UgaXQgbWF0Y2hlcyBkZXNjcmlwdGlvbiB0ZXh0XG4gICAgICAgICAgICBlbHNlIGlmIChzZWFyY2hSZWdFeC50ZXN0KHRvZG8udG9kb0Rlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcCA9IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE5hbWU6IHByb2plY3QucHJvamVjdC5wcm9qZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDb2xvdXI6IHByb2plY3QucHJvamVjdC5wcm9qZWN0Q29sb3VyLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b2RvczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9OYW1lOiB0b2RvLnRvZG9OYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbjogdG9kby50b2RvRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0R1ZURhdGU6IHRvZG8udG9kb0R1ZURhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5OiB0b2RvLnRvZG9Qcmlvcml0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBtYXRjaGVkUHJvakFuZFRvZG9zQXJyLnB1c2godGVtcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2Vsc2UgaXQgbWF0Y2hlcyBkdWVEYXRlXG4gICAgICAgICAgICBlbHNlIGlmIChzZWFyY2hSZWdFeC50ZXN0KHRvZG8udG9kb0R1ZURhdGUudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0ge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZTogcHJvamVjdC5wcm9qZWN0LnByb2plY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbG91cjogcHJvamVjdC5wcm9qZWN0LnByb2plY3RDb2xvdXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb05hbWU6IHRvZG8udG9kb05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uOiB0b2RvLnRvZG9EZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRHVlRGF0ZTogdG9kby50b2RvRHVlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHk6IHRvZG8udG9kb1ByaW9yaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG1hdGNoZWRQcm9qQW5kVG9kb3NBcnIucHVzaCh0ZW1wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vZWxzZSBpdCBtYXRjaGVzIHByaW9yaXR5XG4gICAgICAgICAgICBlbHNlIGlmIChzZWFyY2hSZWdFeC50ZXN0KHRvZG8udG9kb1ByaW9yaXR5LnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcCA9IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE5hbWU6IHByb2plY3QucHJvamVjdC5wcm9qZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDb2xvdXI6IHByb2plY3QucHJvamVjdC5wcm9qZWN0Q29sb3VyLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b2RvczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9OYW1lOiB0b2RvLnRvZG9OYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbjogdG9kby50b2RvRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0R1ZURhdGU6IHRvZG8udG9kb0R1ZURhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5OiB0b2RvLnRvZG9Qcmlvcml0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBtYXRjaGVkUHJvakFuZFRvZG9zQXJyLnB1c2godGVtcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vcmVuZGVyIHRvZG9zXG4gICAgbWF0Y2hlZFByb2pBbmRUb2Rvc0Fyci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICgwLCBhZGRUb2Rvc1RvQ29udGVudF8xLmFkZFRvZG9zVG9Db250ZW50KShwcm9qZWN0KTtcbiAgICB9KTtcbn07XG5leHBvcnRzLmhhbmRsZVNlYXJjaEZvcm1TdWJtaXQgPSBoYW5kbGVTZWFyY2hGb3JtU3VibWl0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZVNvcnRCeVByaW9yaXR5Q2xpY2sgPSB2b2lkIDA7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IGFkZFRvZG9zVG9Db250ZW50XzEgPSByZXF1aXJlKFwiLi4vcHJvamVjdHNBbmRUb2Rvcy9hZGRUb2Rvc1RvQ29udGVudFwiKTtcbmNvbnN0IGhhbmRsZVNvcnRCeVByaW9yaXR5Q2xpY2sgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAvL3JlbW92ZSBjb250ZW50IHNlY3Rpb24ncyBwcmV2aW91cyBjb250ZW50c1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IGNvbnRlbnRCb3R0b21QcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYm90dG9tJyk7XG4gICAgY29udGVudEJvdHRvbVByZXYgPT09IG51bGwgfHwgY29udGVudEJvdHRvbVByZXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRlbnRCb3R0b21QcmV2LnJlbW92ZSgpO1xuICAgIC8vcmVuZGVyIG5ldyBjb250ZW50XG4gICAgY29uc3QgY29udGVudEJvdHRvbSA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2NvbnRlbnQtYm90dG9tJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShjb250ZW50KShjb250ZW50Qm90dG9tKTtcbiAgICBjb25zdCBzZWxlY3RlZFNvcnRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgY29uc3QgcHJvamVjdEFyciA9IFtdO1xuICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKGtleSAhPT0gJ3Byb2plY3ROYW1lcycgJiYga2V5ICE9PSAnYXJjaGl2ZWQnKSB7XG4gICAgICAgICAgICBwcm9qZWN0QXJyLnB1c2goSlNPTi5wYXJzZSgoX2EgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy9hc3NpZ25zIGEga2V5IHRvIGVhY2ggcHJvamVjdCBiYXNlZCBvbiBpdHMgdG9kb1xuICAgIGNvbnN0IHByb2plY3RNYXAgPSBwcm9qZWN0QXJyLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG4gICAgICAgIGN1cnIudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICAgICAgaWYgKHRvZG8udG9kb1ByaW9yaXR5ID09PSAnaW1tZWRpYXRlJykge1xuICAgICAgICAgICAgICAgIGFjYy5zZXQoNSwge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZTogY3Vyci5wcm9qZWN0LnByb2plY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbG91cjogY3Vyci5wcm9qZWN0LnByb2plY3RDb2xvdXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zOiBbdG9kb10sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2RvLnRvZG9Qcmlvcml0eSA9PT0gJ3VyZ2VudCcpIHtcbiAgICAgICAgICAgICAgICBhY2Muc2V0KDQsIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE5hbWU6IGN1cnIucHJvamVjdC5wcm9qZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDb2xvdXI6IGN1cnIucHJvamVjdC5wcm9qZWN0Q29sb3VyLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b2RvczogW3RvZG9dLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9kby50b2RvUHJpb3JpdHkgPT09ICdoaWdoJykge1xuICAgICAgICAgICAgICAgIGFjYy5zZXQoMywge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZTogY3Vyci5wcm9qZWN0LnByb2plY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbG91cjogY3Vyci5wcm9qZWN0LnByb2plY3RDb2xvdXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zOiBbdG9kb10sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2RvLnRvZG9Qcmlvcml0eSA9PT0gJ21lZGl1bScpIHtcbiAgICAgICAgICAgICAgICBhY2Muc2V0KDIsIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE5hbWU6IGN1cnIucHJvamVjdC5wcm9qZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDb2xvdXI6IGN1cnIucHJvamVjdC5wcm9qZWN0Q29sb3VyLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b2RvczogW3RvZG9dLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9kby50b2RvUHJpb3JpdHkgPT09ICdsb3cnKSB7XG4gICAgICAgICAgICAgICAgYWNjLnNldCgxLCB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3ROYW1lOiBjdXJyLnByb2plY3QucHJvamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q29sb3VyOiBjdXJyLnByb2plY3QucHJvamVjdENvbG91cixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9kb3M6IFt0b2RvXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgbmV3IE1hcCgpKTtcbiAgICAvL2luIG9yZGVyIHRvIHVzZSB0aGUgc29ydCBtZXRob2RcbiAgICBjb25zdCBwcm9qZWN0TWFwQXJyID0gQXJyYXkuZnJvbShwcm9qZWN0TWFwKTtcbiAgICBpZiAoc2VsZWN0ZWRTb3J0VmFsdWUgPT09ICdsb3dUb0ltbWVkaWF0ZScpIHtcbiAgICAgICAgcHJvamVjdE1hcEFyci5zb3J0KChhLCBiKSA9PiBhWzBdIC0gYlswXSk7XG4gICAgfVxuICAgIGlmIChzZWxlY3RlZFNvcnRWYWx1ZSA9PT0gJ2ltbWVkaWF0ZVRvTG93Jykge1xuICAgICAgICBwcm9qZWN0TWFwQXJyLnNvcnQoKGEsIGIpID0+IGJbMF0gLSBhWzBdKTtcbiAgICB9XG4gICAgLy9pZiBzZWxlY3QgaW5wdXQgdGV4dCBpcyBjbGlja2VkLCBhbGwgJ2xpdmUnIHByb2plY3RzIGRpc3BsYXllZFxuICAgIGlmIChzZWxlY3RlZFNvcnRWYWx1ZSA9PT0gJycpIHtcbiAgICAgICAgcHJvamVjdEFyci5mb3JFYWNoKChwcm9qZWN0KSA9PiAoMCwgYWRkVG9kb3NUb0NvbnRlbnRfMS5hZGRUb2Rvc1RvQ29udGVudCkocHJvamVjdCkpO1xuICAgIH1cbiAgICAvL3JlbmRlciB0aGUgdG9kb3NcbiAgICBwcm9qZWN0TWFwQXJyLmZvckVhY2goKG51bVByb2plY3QpID0+IHtcbiAgICAgICAgKDAsIGFkZFRvZG9zVG9Db250ZW50XzEuYWRkVG9kb3NUb0NvbnRlbnQpKG51bVByb2plY3RbMV0pO1xuICAgIH0pO1xufTtcbmV4cG9ydHMuaGFuZGxlU29ydEJ5UHJpb3JpdHlDbGljayA9IGhhbmRsZVNvcnRCeVByaW9yaXR5Q2xpY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlVG9kYXlUYWJDbGljayA9IHZvaWQgMDtcbmNvbnN0IGVsZW1lbnRfY3JlYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50LWNyZWF0b3JzXCIpO1xuY29uc3QgYWRkVG9kb3NUb0NvbnRlbnRfMSA9IHJlcXVpcmUoXCIuLi9wcm9qZWN0c0FuZFRvZG9zL2FkZFRvZG9zVG9Db250ZW50XCIpO1xuY29uc3QgaGFuZGxlVG9kYXlUYWJDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAvL3JlbW92ZSBjb250ZW50IHNlY3Rpb24ncyBwcmV2aW91cyBjb250ZW50c1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IGNvbnRlbnRCb3R0b21QcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYm90dG9tJyk7XG4gICAgY29udGVudEJvdHRvbVByZXYgPT09IG51bGwgfHwgY29udGVudEJvdHRvbVByZXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRlbnRCb3R0b21QcmV2LnJlbW92ZSgpO1xuICAgIC8vcmVuZGVyIG5ldyBjb250ZW50IGFuZCBhcHBlbmQgdG8gdGhpc1xuICAgIGNvbnN0IGNvbnRlbnRCb3R0b20gPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydjb250ZW50LWJvdHRvbSddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoY29udGVudCkoY29udGVudEJvdHRvbSk7XG4gICAgY29uc3QgcHJvamVjdEFyciA9IFtdO1xuICAgIC8vZ3JhYiBhbGwgdGhlIHByb2plY3RzIGV4Y2VwdCBvbmVzIHNwZWNpZmllZFxuICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKGtleSAhPT0gJ3Byb2plY3ROYW1lcycgJiYga2V5ICE9PSAnYXJjaGl2ZWQnKSB7XG4gICAgICAgICAgICBwcm9qZWN0QXJyLnB1c2goSlNPTi5wYXJzZSgoX2EgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBkYXRlID0gbm93LmdldERhdGUoKTtcbiAgICBjb25zdCBtb250aCA9IG5vdy5nZXRNb250aCgpICsgMTtcbiAgICBjb25zdCB5ZWFyID0gbm93LmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgdG9kYXkgPSBgJHt5ZWFyfS0ke21vbnRoIDwgMTAgPyAnMCcgKyBtb250aCA6IG1vbnRofS0ke2RhdGUgPCAxMCA/ICcwJyArIGRhdGUgOiBkYXRlfWA7XG4gICAgY29uc3QgcHJvakFuZFRvZG9zRmlsdGVyZWQgPSBbXTtcbiAgICAvL2dyYWIgZWFjaCB0b2RvIGR1ZSB0b2RheSBhbmQgcHV0IGludG8gY3JlYXRlZCB0ZW1wIHByb2plY3QgYW5kIHB1c2ggcHJvamVjdCBpbnRvIGZpbHRlcmVkIGFycmF5XG4gICAgcHJvamVjdEFyci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICAgICAgaWYgKHRvZG8udG9kb0R1ZURhdGUgPT09IHRvZGF5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcCA9IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE5hbWU6IHByb2plY3QucHJvamVjdC5wcm9qZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDb2xvdXI6IHByb2plY3QucHJvamVjdC5wcm9qZWN0Q29sb3VyLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b2RvczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9OYW1lOiB0b2RvLnRvZG9OYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbjogdG9kby50b2RvRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0R1ZURhdGU6IHRvZG8udG9kb0R1ZURhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5OiB0b2RvLnRvZG9Qcmlvcml0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBwcm9qQW5kVG9kb3NGaWx0ZXJlZC5wdXNoKHRlbXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICAvL3JlbmRlciB0aGUgdG9kb3NcbiAgICBwcm9qQW5kVG9kb3NGaWx0ZXJlZC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICgwLCBhZGRUb2Rvc1RvQ29udGVudF8xLmFkZFRvZG9zVG9Db250ZW50KShwcm9qZWN0KTtcbiAgICB9KTtcbn07XG5leHBvcnRzLmhhbmRsZVRvZGF5VGFiQ2xpY2sgPSBoYW5kbGVUb2RheVRhYkNsaWNrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZVRvZG9DaGVja2JveENvbXBsZXRlID0gdm9pZCAwO1xuY29uc3QgaGFuZGxlVG9kb0NoZWNrYm94Q29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2YsIF9nLCBfaCwgX2osIF9rO1xuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FyY2hpdmVkJykpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FyY2hpdmVkJywgSlNPTi5zdHJpbmdpZnkoW10pKTtcbiAgICB9XG4gICAgY29uc3QgdGhpc1Byb2plY3ROYW1lID0gKF9iID0gKF9hID0gdGhpcy5wcmV2aW91c1NpYmxpbmcpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50ZXh0Q29udGVudCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJyc7XG4gICAgY29uc3QgdGhpc1Byb2plY3RDb2xvdXIgPSB0aGlzLnZhbHVlO1xuICAgIGNvbnN0IHRoaXNUb2RvTmFtZSA9IChfZyA9IChfZiA9IChfZSA9IChfZCA9IChfYyA9IHRoaXMucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5maXJzdENoaWxkKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UubmV4dFNpYmxpbmcpID09PSBudWxsIHx8IF9mID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZi50ZXh0Q29udGVudCkgIT09IG51bGwgJiYgX2cgIT09IHZvaWQgMCA/IF9nIDogJyc7XG4gICAgY29uc3QgcHJvamVjdEFyciA9IFtdO1xuICAgIC8vZ3JhYiB0aGUgZW50aXJlIHByb2plY3QgYmVsb25naW5nIHRvIGN1cnJlbnRseSBjaGVja2VkIHRvZG9cbiAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmIChrZXkgIT09ICdwcm9qZWN0TmFtZXMnICYmIGtleSAhPT0gJ2FyY2hpdmVkJykge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gdGhpc1Byb2plY3ROYW1lKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdEFyci5wdXNoKEpTT04ucGFyc2UoKF9hID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGFyY2hpdmVkVG9kb3MgPSBKU09OLnBhcnNlKChfaCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcmNoaXZlZCcpKSAhPT0gbnVsbCAmJiBfaCAhPT0gdm9pZCAwID8gX2ggOiAnJyk7XG4gICAgY29uc3QgdG9kb1RvQmVBcmNoaXZlZCA9IFtdO1xuICAgIC8vZ3JhYiByZW1haW5pbmcgdG9kb3MgdGhhdCBhcmUgbm90IGN1cnJlbnQgdG9kb1xuICAgIGNvbnN0IHRvZG9zQXJyRmlsdGVyZWQgPSBbXTtcbiAgICBwcm9qZWN0QXJyWzBdLnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgaWYgKHRvZG8udG9kb05hbWUgIT09IHRoaXNUb2RvTmFtZSkge1xuICAgICAgICAgICAgdG9kb3NBcnJGaWx0ZXJlZC5wdXNoKHRvZG8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdG9kb1RvQmVBcmNoaXZlZC5wdXNoKHRvZG8pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy9yZXBsYWNlIHRoZSB0b2RvcyBvZiBwcm9qZWN0IGZyb20gc3RvcmFnZSB3aXRoIGZpbHRlcmVkIHRvZG9zIHdoaWNoIGRvIG5vdCBoYXZlIHRoZSBjdXJyZW50bHkgY2hlY2tlZCBvZmYgdG9kb1xuICAgIHByb2plY3RBcnJbMF0udG9kb3MgPSB0b2Rvc0FyckZpbHRlcmVkO1xuICAgIC8vcHV0IHRoZSByZW1haW5pbmcgdG9kb3MgYmFjayBpbnRvIHByb2plY3QgYW5kIGludG8gc3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXNQcm9qZWN0TmFtZSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdEFyclswXSkpO1xuICAgIGNvbnN0IHByb2plY3RBbmRUb2RvVG9CZUFyY2hpdmVkID0ge1xuICAgICAgICBwcm9qZWN0OiB7IHByb2plY3ROYW1lOiB0aGlzUHJvamVjdE5hbWUsIHByb2plY3RDb2xvdXI6IHRoaXNQcm9qZWN0Q29sb3VyIH0sXG4gICAgICAgIHRvZG9zOiBbdG9kb1RvQmVBcmNoaXZlZFswXV0sXG4gICAgfTtcbiAgICAvL3N0b3JlIHRoZSByZW1vdmVkIHRvZG8gdW5kZXIgJ2FyY2hpdmVkJ1xuICAgIGFyY2hpdmVkVG9kb3MucHVzaChwcm9qZWN0QW5kVG9kb1RvQmVBcmNoaXZlZCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FyY2hpdmVkJywgSlNPTi5zdHJpbmdpZnkoYXJjaGl2ZWRUb2RvcykpO1xuICAgIC8vcmVtb3ZlIHRoZSBjdXJyZW50IHRvZG8gd2hvc2UgY2hlY2tib3ggaXMgY2xpY2tlZFxuICAgIChfayA9IChfaiA9IHRoaXMucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgX2ogPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9qLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IF9rID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfay5yZW1vdmUoKTtcbn07XG5leHBvcnRzLmhhbmRsZVRvZG9DaGVja2JveENvbXBsZXRlID0gaGFuZGxlVG9kb0NoZWNrYm94Q29tcGxldGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlVG9kb0Nsb3NlSWNvbkNsaWNrID0gdm9pZCAwO1xuY29uc3QgaGFuZGxlVG9kb0Nsb3NlSWNvbkNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRvZG9Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lcicpO1xuICAgIGlmICh0b2RvTW9kYWwpXG4gICAgICAgIHRvZG9Nb2RhbC5yZW1vdmUoKTtcbn07XG5leHBvcnRzLmhhbmRsZVRvZG9DbG9zZUljb25DbGljayA9IGhhbmRsZVRvZG9DbG9zZUljb25DbGljaztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVUb2RvRm9ybVN1Ym1pdCA9IHZvaWQgMDtcbmNvbnN0IHN0b3JlUHJvamVjdEFuZFRvZG9zRnVsbF8xID0gcmVxdWlyZShcIi4uL3Byb2plY3RzQW5kVG9kb3Mvc3RvcmVQcm9qZWN0QW5kVG9kb3NGdWxsXCIpO1xuY29uc3QgYWRkVG9kb3NUb0NvbnRlbnRfMSA9IHJlcXVpcmUoXCIuLi9wcm9qZWN0c0FuZFRvZG9zL2FkZFRvZG9zVG9Db250ZW50XCIpO1xuY29uc3QgaGFuZGxlVG9kb0Zvcm1TdWJtaXQgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZiwgX2csIF9oLCBfaiwgX2ssIF9sLCBfbTtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jb250YWluZXInKTtcbiAgICBjb25zdCB0b2RvRm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XG4gICAgY29uc3QgdG9kb0Zvcm1Qcm9qZWN0TmFtZSA9IChfYiA9IChfYSA9IHRvZG9Gb3JtRGF0YS5nZXQoJ2FkZFRvZG8tcHJvamVjdE5hbWUnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICcnO1xuICAgIGNvbnN0IHRvZG9Gb3JtUHJvamVjdENvbG91ciA9IChfZCA9IChfYyA9IHRvZG9Gb3JtRGF0YS5nZXQoJ2FkZFRvZG8tcHJvamVjdENvbG91cicpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MudG9TdHJpbmcoKSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogJyc7XG4gICAgY29uc3QgdG9kb0Zvcm1OYW1lID0gKF9mID0gKF9lID0gdG9kb0Zvcm1EYXRhLmdldCgnYWRkVG9kby1uYW1lJykpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS50b1N0cmluZygpKSAhPT0gbnVsbCAmJiBfZiAhPT0gdm9pZCAwID8gX2YgOiAnJztcbiAgICBjb25zdCB0b2RvRm9ybURlc2NyaXB0aW9uID0gKF9oID0gKF9nID0gdG9kb0Zvcm1EYXRhLmdldCgnYWRkVG9kby1kZXNjcmlwdGlvbicpKSA9PT0gbnVsbCB8fCBfZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2cudG9TdHJpbmcoKSkgIT09IG51bGwgJiYgX2ggIT09IHZvaWQgMCA/IF9oIDogJyc7XG4gICAgY29uc3QgdG9kb0Zvcm1EdWVEYXRlID0gKF9rID0gKF9qID0gdG9kb0Zvcm1EYXRhLmdldCgnYWRkVG9kby1kdWVEYXRlJykpID09PSBudWxsIHx8IF9qID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfai50b1N0cmluZygpKSAhPT0gbnVsbCAmJiBfayAhPT0gdm9pZCAwID8gX2sgOiAnJztcbiAgICBjb25zdCB0b2RvRm9ybVNlbGVjdFByaW9yaXR5ID0gKF9tID0gKF9sID0gdG9kb0Zvcm1EYXRhLmdldCgnYWRkVG9kby1zZWxlY3RQcmlvcml0eScpKSA9PT0gbnVsbCB8fCBfbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2wudG9TdHJpbmcoKSkgIT09IG51bGwgJiYgX20gIT09IHZvaWQgMCA/IF9tIDogJyc7XG4gICAgY29uc3QgcHJvamVjdHNBbmRUb2Rvc0ZhY3RvcnkgPSBmdW5jdGlvbiAocHJvamVjdE5hbWUsIHByb2plY3RDb2xvdXIsIHRvZG9OYW1lLCB0b2RvRGVzY3JpcHRpb24sIHRvZG9EdWVEYXRlLCB0b2RvUHJpb3JpdHkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb2plY3Q6IHsgcHJvamVjdE5hbWUsIHByb2plY3RDb2xvdXIgfSxcbiAgICAgICAgICAgIHRvZG9zOiBbeyB0b2RvTmFtZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvRHVlRGF0ZSwgdG9kb1ByaW9yaXR5IH1dLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgY29uc3QgcHJvamVjdEFuZFRvZG9zID0gcHJvamVjdHNBbmRUb2Rvc0ZhY3RvcnkodG9kb0Zvcm1Qcm9qZWN0TmFtZSwgdG9kb0Zvcm1Qcm9qZWN0Q29sb3VyLCB0b2RvRm9ybU5hbWUsIHRvZG9Gb3JtRGVzY3JpcHRpb24sIHRvZG9Gb3JtRHVlRGF0ZSwgdG9kb0Zvcm1TZWxlY3RQcmlvcml0eSk7XG4gICAgY29uc3QgdG9kb0V4aXN0cyA9ICgwLCBzdG9yZVByb2plY3RBbmRUb2Rvc0Z1bGxfMS5zdG9yZVByb2plY3RBbmRUb2Rvc0Z1bGwpKHByb2plY3RBbmRUb2Rvcyk7XG4gICAgaWYgKCF0b2RvRXhpc3RzKSB7XG4gICAgICAgICgwLCBhZGRUb2Rvc1RvQ29udGVudF8xLmFkZFRvZG9zVG9Db250ZW50KShwcm9qZWN0QW5kVG9kb3MpO1xuICAgIH1cbiAgICB0b2RvQ29udGFpbmVyID09PSBudWxsIHx8IHRvZG9Db250YWluZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRvZG9Db250YWluZXIucmVtb3ZlKCk7XG59O1xuZXhwb3J0cy5oYW5kbGVUb2RvRm9ybVN1Ym1pdCA9IGhhbmRsZVRvZG9Gb3JtU3VibWl0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZVVwY29taW5nVGFiQ2xpY2sgPSB2b2lkIDA7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IGFkZFRvZG9zVG9Db250ZW50XzEgPSByZXF1aXJlKFwiLi4vcHJvamVjdHNBbmRUb2Rvcy9hZGRUb2Rvc1RvQ29udGVudFwiKTtcbmNvbnN0IGhhbmRsZVVwY29taW5nVGFiQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy9yZW1vdmUgY29udGVudCBzZWN0aW9uJ3MgcHJldmlvdXMgY29udGVudHNcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBjb250ZW50Qm90dG9tUHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWJvdHRvbScpO1xuICAgIGNvbnRlbnRCb3R0b21QcmV2ID09PSBudWxsIHx8IGNvbnRlbnRCb3R0b21QcmV2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250ZW50Qm90dG9tUHJldi5yZW1vdmUoKTtcbiAgICAvL3JlbmRlciBuZXcgY29udGVudCBhbmQgYXBwZW5kIHRvIHRoaXNcbiAgICBjb25zdCBjb250ZW50Qm90dG9tID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnY29udGVudC1ib3R0b20nXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGNvbnRlbnQpKGNvbnRlbnRCb3R0b20pO1xuICAgIGNvbnN0IHByb2plY3RBcnIgPSBbXTtcbiAgICAvL2dyYWIgYWxsIHRoZSBwcm9qZWN0cyBleGNlcHQgb25lcyBzcGVjaWZpZWRcbiAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmIChrZXkgIT09ICdwcm9qZWN0TmFtZXMnICYmIGtleSAhPT0gJ2FyY2hpdmVkJykge1xuICAgICAgICAgICAgcHJvamVjdEFyci5wdXNoKEpTT04ucGFyc2UoKF9hID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF0ZSA9IG5vdy5nZXREYXRlKCk7XG4gICAgY29uc3QgbW9udGggPSBub3cuZ2V0TW9udGgoKSArIDE7XG4gICAgY29uc3QgeWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IHRvZGF5ID0gYCR7eWVhcn0tJHttb250aCA8IDEwID8gJzAnICsgbW9udGggOiBtb250aH0tJHtkYXRlIDwgMTAgPyAnMCcgKyBkYXRlIDogZGF0ZX1gO1xuICAgIGNvbnN0IHByb2pBbmRUb2Rvc0ZpbHRlcmVkID0gW107XG4gICAgLy9ncmFiIGVhY2ggdG9kbyBub3QgZHVlIHRvZGF5IGFuZCBwdXQgaW50byBjcmVhdGVkIHRlbXAgcHJvamVjdCBhbmQgcHVzaCBwcm9qZWN0IGludG8gZmlsdGVyZWQgYXJyYXlcbiAgICBwcm9qZWN0QXJyLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICBpZiAodG9kby50b2RvRHVlRGF0ZSAhPT0gdG9kYXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0ge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZTogcHJvamVjdC5wcm9qZWN0LnByb2plY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbG91cjogcHJvamVjdC5wcm9qZWN0LnByb2plY3RDb2xvdXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb05hbWU6IHRvZG8udG9kb05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uOiB0b2RvLnRvZG9EZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRHVlRGF0ZTogdG9kby50b2RvRHVlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHk6IHRvZG8udG9kb1ByaW9yaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHByb2pBbmRUb2Rvc0ZpbHRlcmVkLnB1c2godGVtcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vcmVuZGVyIHRoZSB0b2Rvc1xuICAgIHByb2pBbmRUb2Rvc0ZpbHRlcmVkLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgKDAsIGFkZFRvZG9zVG9Db250ZW50XzEuYWRkVG9kb3NUb0NvbnRlbnQpKHByb2plY3QpO1xuICAgIH0pO1xufTtcbmV4cG9ydHMuaGFuZGxlVXBjb21pbmdUYWJDbGljayA9IGhhbmRsZVVwY29taW5nVGFiQ2xpY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGVhZGVyID0gdm9pZCAwO1xuY29uc3QgZWxlbWVudF9jcmVhdG9yc18xID0gcmVxdWlyZShcIi4uL2VsZW1lbnQtY3JlYXRvcnNcIik7XG5jb25zdCBoZWFkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290Jyk7XG4gICAgY29uc3QgaGVhZGVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnaGVhZGVyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShyb290KShoZWFkZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnVG9kbyBMaXN0IEFwcCcpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoaGVhZGVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2gxJykoWyd0aXRsZScsICdoZWFkZXItdGl0bGUnXSkpO1xufTtcbmV4cG9ydHMuaGVhZGVyID0gaGVhZGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnByb2plY3RNb2RhbCA9IHZvaWQgMDtcbmNvbnN0IGVsZW1lbnRfY3JlYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50LWNyZWF0b3JzXCIpO1xuY29uc3QgaGFuZGxlUHJvamVjdENsb3NlSWNvbkNsaWNrXzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlUHJvamVjdENsb3NlSWNvbkNsaWNrXCIpO1xuY29uc3QgaGFuZGxlUHJvamVjdEZvcm1TdWJtaXRfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVQcm9qZWN0Rm9ybVN1Ym1pdFwiKTtcbmNvbnN0IHByb2plY3RNb2RhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgICAvL2FkZFByb2plY3QgbW9kYWxcbiAgICBjb25zdCBhZGRQcm9qZWN0Q29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnYWRkUHJvamVjdC1jb250YWluZXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNpZGViYXIpKGFkZFByb2plY3RDb250YWluZXIpO1xuICAgIGNvbnN0IGFkZFByb2plY3RIZWFkaW5nQ29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnYWRkUHJvamVjdEhlYWRpbmctY29udGFpbmVyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0Q29udGFpbmVyKShhZGRQcm9qZWN0SGVhZGluZ0NvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdBZGQgcHJvamVjdCcpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdEhlYWRpbmdDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaDMnKShbJ2hlYWRpbmctdGV4dCcsICd0ZXh0LWFkZFByb2plY3QnXSkpO1xuICAgIGNvbnN0IGFkZFByb2plY3RGb3JtID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2Zvcm0nKShbJ2Zvcm0tYWRkUHJvamVjdCddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsnYWN0aW9uJywgJyMnXSxcbiAgICAgICAgWydtZXRob2QnLCAncG9zdCddLFxuICAgICAgICBbJ2lkJywgJ2Zvcm0tYWRkUHJvamVjdCddLFxuICAgICAgICBbJ25hbWUnLCAnZm9ybS1hZGRQcm9qZWN0J10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdzdWJtaXQnKShoYW5kbGVQcm9qZWN0Rm9ybVN1Ym1pdF8xLmhhbmRsZVByb2plY3RGb3JtU3VibWl0KSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFByb2plY3RDb250YWluZXIpKShhZGRQcm9qZWN0Rm9ybSk7XG4gICAgY29uc3QgYWRkUHJvamVjdE5hbWVDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydhZGRQcm9qZWN0LW5hbWUtY29udGFpbmVyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0Rm9ybSkoYWRkUHJvamVjdE5hbWVDb250YWluZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ2ZvcicsICdhZGRQcm9qZWN0LW5hbWUnXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdOYW1lJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0TmFtZUNvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdsYWJlbCcpKFsnbGFiZWwtbmFtZSddKSk7XG4gICAgLy9pbnB1dCBuYW1lXG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ2lkJywgJ2FkZFByb2plY3QtbmFtZSddLFxuICAgICAgICBbJ3R5cGUnLCAndGV4dCddLFxuICAgICAgICBbJ21pbmxlbmd0aCcsICcyJ10sXG4gICAgICAgIFsnbWF4bGVuZ3RoJywgJzE3J10sXG4gICAgICAgIFsncGF0dGVybicsICdeW2EtekEtWl1bYS16QS1aMC05LV8uXXsxLDIwfSQnXSxcbiAgICAgICAgWydwbGFjZWhvbGRlcicsICdFbnRlciBuYW1lIG9mIHByb2plY3QnXSxcbiAgICAgICAgWyduYW1lJywgJ2FkZFByb2plY3QtbmFtZSddLFxuICAgICAgICBbJ3JlcXVpcmVkJywgJyddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdE5hbWVDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaW5wdXQnKShbJ2FkZFByb2plY3QtbmFtZSddKSk7XG4gICAgY29uc3QgYWRkUHJvamVjdENvbG91ckNvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2FkZFByb2plY3QtY29sb3VyLWNvbnRhaW5lciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdEZvcm0pKGFkZFByb2plY3RDb2xvdXJDb250YWluZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ2ZvcicsICdhZGRQcm9qZWN0LWNvbG91ciddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ0NvbG91cicpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdENvbG91ckNvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdsYWJlbCcpKFsnbGFiZWwtY29sb3VyJ10pKTtcbiAgICAvL2lucHV0IGNvbG91clxuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWyd0eXBlJywgJ2NvbG9yJ10sXG4gICAgICAgIFsnaWQnLCAnYWRkUHJvamVjdC1jb2xvdXInXSxcbiAgICAgICAgWyduYW1lJywgJ2FkZFByb2plY3QtY29sb3VyJ10sXG4gICAgICAgIFsndmFsdWUnLCAnIzFlMWUxZSddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdENvbG91ckNvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdpbnB1dCcpKFsnYWRkUHJvamVjdC1jb2xvdXInXSkpO1xuICAgIGNvbnN0IGFkZFByb2plY3RJY29uc0NvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2FkZFByb2plY3RJY29ucy1jb250YWluZXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFByb2plY3RGb3JtKShhZGRQcm9qZWN0SWNvbnNDb250YWluZXIpO1xuICAgIGNvbnN0IGJ0dG5DYW5jZWxQcm9qZWN0ID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2J1dHRvbicpKFsnYnR0bicsICdidHRuLWNhbmNlbFByb2plY3QnXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVQcm9qZWN0Q2xvc2VJY29uQ2xpY2tfMS5oYW5kbGVQcm9qZWN0Q2xvc2VJY29uQ2xpY2spLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ3R5cGUnLCAnYnV0dG9uJ10sXG4gICAgICAgIFsnbmFtZScsICdidHRuLWNhbmNlbCddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdEljb25zQ29udGFpbmVyKSkoYnR0bkNhbmNlbFByb2plY3QpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGJ0dG5DYW5jZWxQcm9qZWN0KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5jcmVhdGVJbWFnZSkoJy4uLy4uL3NyYy9hc3NldHMvaWNvbnMveCgxKS5zdmcnKShbJ2ljb24nLCAnaWNvbi1jYW5jZWxQcm9qZWN0J10pKGBpY29uIG9mIHN5bWJvbCAneCcgcmVwcmVzZW50aW5nIGNhbmNlbCBvciBjbG9zZWApKCdDYW5jZWwnKSk7XG4gICAgY29uc3QgYnR0bkFkZFByb2plY3QgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnYnV0dG9uJykoWydidHRuJywgJ2J0dG4tYWRkUHJvamVjdCddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsndHlwZScsICdzdWJtaXQnXSxcbiAgICAgICAgWyduYW1lJywgJ2J0dG4tYWRkUHJvamVjdCddLFxuICAgICAgICBbJ2Zvcm0nLCAnZm9ybS1hZGRQcm9qZWN0J10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0SWNvbnNDb250YWluZXIpKShidHRuQWRkUHJvamVjdCk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYnR0bkFkZFByb2plY3QpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmNyZWF0ZUltYWdlKSgnLi4vLi4vZGlzdC9hc3NldHMvaWNvbnMvY2hlY2soMSkuc3ZnJykoWydpY29uJywgJ2ljb24tYWRkUHJvamVjdCddKShgaWNvbiBvZiBzeW1ib2wgJ2NoZWNrJyByZXByZXNlbnRpbmcgYWRkYCkoJ0FkZCBQcm9qZWN0JykpO1xufTtcbmV4cG9ydHMucHJvamVjdE1vZGFsID0gcHJvamVjdE1vZGFsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnRvZG9Nb2RhbCA9IHZvaWQgMDtcbmNvbnN0IGVsZW1lbnRfY3JlYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50LWNyZWF0b3JzXCIpO1xuY29uc3QgaGFuZGxlVG9kb0Nsb3NlSWNvbkNsaWNrXzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlVG9kb0Nsb3NlSWNvbkNsaWNrXCIpO1xuY29uc3QgaGFuZGxlVG9kb0Zvcm1TdWJtaXRfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVUb2RvRm9ybVN1Ym1pdFwiKTtcbmNvbnN0IHRvZG9Nb2RhbCA9IGZ1bmN0aW9uIChwcm9qZWN0RGF0YU5hbWVfLCBwcm9qZWN0RGF0YUNvbG91cl8pIHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKTtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWyd0b2RvLWNvbnRhaW5lciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkocm9vdCkodG9kb0NvbnRhaW5lcik7XG4gICAgY29uc3QgdG9kb0Zvcm0gPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZm9ybScpKFsnZm9ybScsICdmb3JtLWFkZFRvZG8nXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnc3VibWl0JykoaGFuZGxlVG9kb0Zvcm1TdWJtaXRfMS5oYW5kbGVUb2RvRm9ybVN1Ym1pdCksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsnYWN0aW9uJywgJyMnXSxcbiAgICAgICAgWydtZXRob2QnLCAncG9zdCddLFxuICAgICAgICBbJ2lkJywgJ2Zvcm0tYWRkVG9kbyddLFxuICAgICAgICBbJ25hbWUnLCAnZm9ybS1hZGRUb2RvJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b2RvQ29udGFpbmVyKSkodG9kb0Zvcm0pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnQWRkIHRhc2sgdG9kbycpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0Zvcm0pKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaDMnKShbJ2hlYWRpbmctdGV4dCcsICd0ZXh0LWFkZFRvZG8nXSkpO1xuICAgIGNvbnN0IGFkZFRvZG9OYW1lQ29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnYWRkVG9kby1uYW1lLWNvbnRhaW5lciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0Zvcm0pKGFkZFRvZG9OYW1lQ29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydmb3InLCAnYWRkVG9kby1uYW1lJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnTmFtZScpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkVG9kb05hbWVDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnbGFiZWwnKShbJ2xhYmVsLW5hbWUnXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWyd0eXBlJywgJ3RleHQnXSxcbiAgICAgICAgWydmb3JtJywgJ2Zvcm0tYWRkVG9kbyddLFxuICAgICAgICBbJ2lkJywgJ2FkZFRvZG8tbmFtZSddLFxuICAgICAgICBbJ25hbWUnLCAnYWRkVG9kby1uYW1lJ10sXG4gICAgICAgIFsnbWlubGVuZ3RoJywgJzInXSxcbiAgICAgICAgWydtYXhsZW5ndGgnLCAnMzEnXSxcbiAgICAgICAgWydwbGFjZWhvbGRlcicsICdFbnRlciBuYW1lIGZvciB0YXNrIHRvZG8nXSxcbiAgICAgICAgWydyZXF1aXJlZCcsICcnXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFRvZG9OYW1lQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2lucHV0JykoWydhZGRUb2RvLW5hbWUnXSkpO1xuICAgIGNvbnN0IGFkZFRvZG9EZXNjQ29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnYWRkVG9kby1kZXNjLWNvbnRhaW5lciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0Zvcm0pKGFkZFRvZG9EZXNjQ29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydmb3InLCAnYWRkVG9kby1kZXNjcmlwdGlvbiddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ0Rlc2NyaXB0aW9uJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRUb2RvRGVzY0NvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdsYWJlbCcpKFsnbGFiZWwtZGVzY3JpcHRpb24nXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWydpZCcsICdhZGRUb2RvLWRlc2NyaXB0aW9uJ10sXG4gICAgICAgIFsnYXV0b2NvbXBsZXRlJywgJ29uJ10sXG4gICAgICAgIFsnZm9ybScsICdmb3JtLWFkZFRvZG8nXSxcbiAgICAgICAgWydtYXhsZW5ndGgnLCAnMjUwJ10sXG4gICAgICAgIFsnbmFtZScsICdhZGRUb2RvLWRlc2NyaXB0aW9uJ10sXG4gICAgICAgIFsnc3BlbGxjaGVjaycsICd0cnVlJ10sXG4gICAgICAgIFsnd3JhcCcsICdoYXJkJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRUb2RvRGVzY0NvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCd0ZXh0YXJlYScpKFsnYWRkVG9kby1kZXNjcmlwdGlvbiddKSk7XG4gICAgY29uc3QgYWRkVG9kb0RhdGVDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydhZGRUb2RvLWRhdGUtY29udGFpbmVyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b2RvRm9ybSkoYWRkVG9kb0RhdGVDb250YWluZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnRHVlIGRhdGUnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ2ZvcicsICdhZGRUb2RvLWR1ZURhdGUnXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkVG9kb0RhdGVDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnbGFiZWwnKShbJ2xhYmVsLWR1ZURhdGUnXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWyd0eXBlJywgJ2RhdGUnXSxcbiAgICAgICAgWydpZCcsICdhZGRUb2RvLWR1ZURhdGUnXSxcbiAgICAgICAgW1xuICAgICAgICAgICAgJ21pbicsXG4gICAgICAgICAgICBgJHtub3cuZ2V0RnVsbFllYXIoKX0tJHtub3cuZ2V0TW9udGgoKSA8IDEwID8gJzAnICsgKG5vdy5nZXRNb250aCgpICsgMSkgOiBub3cuZ2V0TW9udGgoKSArIDF9LSR7bm93LmdldERhdGUoKSA8IDEwID8gJzAnICsgbm93LmdldERhdGUoKSA6IG5vdy5nZXREYXRlKCl9YCxcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgICAgJ21heCcsXG4gICAgICAgICAgICBgJHtub3cuZ2V0RnVsbFllYXIoKSArIDEwMH0tJHtub3cuZ2V0TW9udGgoKSA8IDEwID8gJzAnICsgKG5vdy5nZXRNb250aCgpICsgMSkgOiBub3cuZ2V0TW9udGgoKSArIDF9LSR7bm93LmdldERhdGUoKSA8IDEwID8gJzAnICsgbm93LmdldERhdGUoKSA6IG5vdy5nZXREYXRlKCl9YCxcbiAgICAgICAgXSxcbiAgICAgICAgWyduYW1lJywgJ2FkZFRvZG8tZHVlRGF0ZSddLFxuICAgICAgICBbJ3BsYWNlaG9sZGVyJywgJ3l5eXktbW0tZGQnXSxcbiAgICAgICAgWydwYXR0ZXJuJywgJygwWzEtOV18MVswLTldfDJbMC05XXwzWzAxXSktKDBbMS05XXwxWzAxMl0pLVswLTldezR9J10sXG4gICAgICAgIFsncmVxdWlyZWQnLCAnJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRUb2RvRGF0ZUNvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdpbnB1dCcpKFsnYWRkVG9kby1kdWVEYXRlJ10pKTtcbiAgICBjb25zdCBhZGRUb2RvUHJpb3JpdHlDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydhZGRUb2RvLXByaW9yaXR5LWNvbnRhaW5lciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0Zvcm0pKGFkZFRvZG9Qcmlvcml0eUNvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdQcmlvcml0eSBsZXZlbCcpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1snZm9yJywgJ2FkZFRvZG8tc2VsZWN0UHJpb3JpdHknXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkVG9kb1ByaW9yaXR5Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2xhYmVsJykoWydsYWJlbC1zZWxlY3RQcmlvcml0eSddKSk7XG4gICAgY29uc3Qgc2VsZWN0UHJpb3JpdHkgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnc2VsZWN0JykoWydhZGRUb2RvLXNlbGVjdFByaW9yaXR5J10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWyduYW1lJywgJ2FkZFRvZG8tc2VsZWN0UHJpb3JpdHknXSxcbiAgICAgICAgWydpZCcsICdhZGRUb2RvLXNlbGVjdFByaW9yaXR5J10sXG4gICAgICAgIFsnZm9ybScsICdmb3JtLWFkZFRvZG8nXSxcbiAgICAgICAgWyd0aXRsZScsICdhZGRUb2RvLXNlbGVjdFByaW9yaXR5J10sXG4gICAgICAgIFsncmVxdWlyZWQnLCAnJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRUb2RvUHJpb3JpdHlDb250YWluZXIpKShzZWxlY3RQcmlvcml0eSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCctLVBsZWFzZSBhc3NpZ24gYSBwcmlvcml0eS0tJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWyd2YWx1ZScsICcnXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2VsZWN0UHJpb3JpdHkpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnb3B0aW9uJykoWydvcHRpb24tc2VsZWN0UHJpb3JpdHknXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ3ZhbHVlJywgJ2xvdyddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ0xvdycpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2VsZWN0UHJpb3JpdHkpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnb3B0aW9uJykoWydvcHRpb24tc2VsZWN0UHJpb3JpdHknXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ3ZhbHVlJywgJ21lZGl1bSddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ01lZGl1bScpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2VsZWN0UHJpb3JpdHkpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnb3B0aW9uJykoWydvcHRpb24tc2VsZWN0UHJpb3JpdHknXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ3ZhbHVlJywgJ2hpZ2gnXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdIaWdoJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzZWxlY3RQcmlvcml0eSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdvcHRpb24nKShbJ29wdGlvbi1zZWxlY3RQcmlvcml0eSddKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1sndmFsdWUnLCAndXJnZW50J11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnVXJnZW50JyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzZWxlY3RQcmlvcml0eSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdvcHRpb24nKShbJ29wdGlvbi1zZWxlY3RQcmlvcml0eSddKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1sndmFsdWUnLCAnaW1tZWRpYXRlJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnSW1tZWRpYXRlJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzZWxlY3RQcmlvcml0eSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdvcHRpb24nKShbJ29wdGlvbi1zZWxlY3RQcmlvcml0eSddKSk7XG4gICAgLy9oaWRkZW4gZWxlbWVudCB0byBmdW5uZWwgcHJvamVjdCBuYW1lIHRvIHRvZG9mb3JtXG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ2hpZGRlbicsICcnXSxcbiAgICAgICAgWyd2YWx1ZScsIGAke3Byb2plY3REYXRhTmFtZV99YF0sXG4gICAgICAgIFsnbmFtZScsICdhZGRUb2RvLXByb2plY3ROYW1lJ10sXG4gICAgICAgIFsndHlwZScsICd0ZXh0J10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b2RvRm9ybSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdpbnB1dCcpKFsnYWRkVG9kby1wcm9qZWN0TmFtZV9faGlkZGVuJ10pKTtcbiAgICAvL2hpZGRlbiBlbGVtZW50IHRvIGZ1bm5lbCBwcm9qZWN0IGNvbG91ciB0byB0b2RvZm9ybVxuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWydoaWRkZW4nLCAnJ10sXG4gICAgICAgIFsndmFsdWUnLCBgJHtwcm9qZWN0RGF0YUNvbG91cl99YF0sXG4gICAgICAgIFsnbmFtZScsICdhZGRUb2RvLXByb2plY3RDb2xvdXInXSxcbiAgICAgICAgWyd0eXBlJywgJ3RleHQnXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZG9Gb3JtKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2lucHV0JykoWydhZGRUb2RvLXByb2plY3RDb2xvdXJfX2hpZGRlbiddKSk7XG4gICAgY29uc3QgYWRkVG9kb0ljb25zQ29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnYWRkVG9kby1pY29ucy1jb250YWluZXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZG9Gb3JtKShhZGRUb2RvSWNvbnNDb250YWluZXIpO1xuICAgIGNvbnN0IGJ0dG5DYW5jZWxUb2RvID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2J1dHRvbicpKFsnYnR0bicsICdidHRuLWNhbmNlbFRvZG8nXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ3R5cGUnLCAnY2xpY2snXSxcbiAgICAgICAgWyduYW1lJywgJ2J0dG4tY2FuY2VsVG9kbyddLFxuICAgICAgICBbJ2Zvcm0nLCAnZm9ybS1hZGRUb2RvJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRUb2RvSWNvbnNDb250YWluZXIpKShidHRuQ2FuY2VsVG9kbyk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVUb2RvQ2xvc2VJY29uQ2xpY2tfMS5oYW5kbGVUb2RvQ2xvc2VJY29uQ2xpY2spLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYnR0bkNhbmNlbFRvZG8pKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmNyZWF0ZUltYWdlKSgnLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy94KDEpLnN2ZycpKFsnaWNvbicsICdpY29uLWNhbmNlbFRvZG8nXSkoYGljb24gb2Ygc3ltYm9sICd4JyByZXByZXNlbnRpbmcgY2xvc2Ugb3IgY2FuY2VsYCkoJ0NhbmNlbCcpKTtcbiAgICBjb25zdCBidHRuQWRkVG9kbyA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdidXR0b24nKShbJ2J0dG4nLCAnYnR0bi1hZGRUb2RvJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWyd0eXBlJywgJ3N1Ym1pdCddLFxuICAgICAgICBbJ25hbWUnLCAnYnR0bi1hZGRUb2RvJ10sXG4gICAgICAgIFsnZm9ybScsICdmb3JtLWFkZFRvZG8nXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFRvZG9JY29uc0NvbnRhaW5lcikpKGJ0dG5BZGRUb2RvKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShidHRuQWRkVG9kbykpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuY3JlYXRlSW1hZ2UpKCcuLi8uLi9zcmMvYXNzZXRzL2ljb25zL2NoZWNrKDEpLnN2ZycpKFsnaWNvbicsICdpY29uLWFkZFRvZG8nXSkoYGljb24gb2YgYSBjaGVja21hcmsgcmVwcmVzZW50aW5nIGFkZGApKCdBZGQgVG9kbycpKTtcbn07XG5leHBvcnRzLnRvZG9Nb2RhbCA9IHRvZG9Nb2RhbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5hZGRQcm9qZWN0VG9TaWRlYmFyID0gdm9pZCAwO1xuY29uc3QgZWxlbWVudF9jcmVhdG9yc18xID0gcmVxdWlyZShcIi4uL2VsZW1lbnQtY3JlYXRvcnNcIik7XG5jb25zdCBoYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrXzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlQWRkTmV3VG9kb0ljb25DbGlja1wiKTtcbmNvbnN0IGhhbmRsZUNyZWF0ZWRUYWJzQ2xpY2tfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVDcmVhdGVkVGFic0NsaWNrXCIpO1xuY29uc3QgYWRkUHJvamVjdFRvU2lkZWJhciA9IGZ1bmN0aW9uIChmb3JtTmFtZV8sIGZvcm1Db2xvdXJfKSB7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLXByb2plY3RzJyk7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3NpZGViYXItcHJvamVjdCcsICdwcm9qZWN0J10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShwcm9qZWN0c0NvbnRhaW5lcikocHJvamVjdENvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVDcmVhdGVkVGFic0NsaWNrXzEuaGFuZGxlQ3JlYXRlZFRhYnNDbGljayksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydkYXRhLW5hbWUnLCBgJHtmb3JtTmFtZV99YF1dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRTdHlsZVRvRWxlbSkoW1snY29sb3InLCBgJHtmb3JtQ29sb3VyX31gXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKGAke2Zvcm1OYW1lX31gKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHByb2plY3RDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaDQnKShbJ3Byb2plY3QtdGV4dCddKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ2RhdGEtbmFtZScsIGAke2Zvcm1OYW1lX31gXSxcbiAgICAgICAgWydkYXRhLWNvbG91cicsIGAke2Zvcm1Db2xvdXJffWBdLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrXzEuaGFuZGxlQWRkTmV3VG9kb0ljb25DbGljayksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShwcm9qZWN0Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5jcmVhdGVJbWFnZSkoJy4uLy4uLy4uL2Rpc3QvYXNzZXRzL2ljb25zL3BsdXMuc3ZnJykoWydpY29uJywgJ2ljb24tcGx1cyddKSgnaWNvbiBvZiBwbHVzIHN5bWJvbCcpKCdBZGQgTmV3IFRvZG8nKSk7XG59O1xuZXhwb3J0cy5hZGRQcm9qZWN0VG9TaWRlYmFyID0gYWRkUHJvamVjdFRvU2lkZWJhcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5hZGRUb2Rvc1RvQ29udGVudCA9IHZvaWQgMDtcbmNvbnN0IGVsZW1lbnRfY3JlYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50LWNyZWF0b3JzXCIpO1xuY29uc3QgaGFuZGxlVG9kb0NoZWNrYm94Q29tcGxldGVfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVUb2RvQ2hlY2tib3hDb21wbGV0ZVwiKTtcbmNvbnN0IGFkZFRvZG9zVG9Db250ZW50ID0gZnVuY3Rpb24gKHsgcHJvamVjdCwgdG9kb3MgfSwgZGlzYWJsZUNoZWNrYm94ID0gZmFsc2UpIHtcbiAgICBjb25zdCB7IHByb2plY3ROYW1lLCBwcm9qZWN0Q29sb3VyIH0gPSBwcm9qZWN0O1xuICAgIHRvZG9zLmZvckVhY2goKHRvZG8sIGkpID0+IHtcbiAgICAgICAgY29uc3QgeyB0b2RvTmFtZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvRHVlRGF0ZSwgdG9kb1ByaW9yaXR5IH0gPSB0b2Rvc1tpXTtcbiAgICAgICAgY29uc3QgY29udGVudEJvdHRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWJvdHRvbScpO1xuICAgICAgICBjb25zdCB0b2RvQ29udGVudENvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3RvZG9Db250ZW50LWNvbnRhaW5lciddKTtcbiAgICAgICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGNvbnRlbnRCb3R0b20pKHRvZG9Db250ZW50Q29udGFpbmVyKTtcbiAgICAgICAgY29uc3QgaGVhZGluZ0NvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3RvZG9Db250ZW50LWhlYWRpbmctY29udGFpbmVyJ10pO1xuICAgICAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0NvbnRlbnRDb250YWluZXIpKGhlYWRpbmdDb250YWluZXIpO1xuICAgICAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydkYXRhLWNvbG91cicsIGAke3Byb2plY3RDb2xvdXJ9YF1dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKShgJHtwcm9qZWN0TmFtZX1gKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRTdHlsZVRvRWxlbSkoW1snY29sb3InLCBgJHtwcm9qZWN0Q29sb3VyfWBdXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShoZWFkaW5nQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2gzJykoWydoZWFkaW5nLXRleHQnLCAndG9kb0NvbnRlbnQtcHJvamVjdE5hbWUnXSkpO1xuICAgICAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydmb3InLCAnY29tcGxldGUnXV0pKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnbGFiZWwnKShbJ2xhYmVsJywgJ3RvZG9Db250ZW50LWxhYmVsJ10pKTtcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaW5wdXQnKShbJ3RvZG9Db250ZW50LWNoZWNrYm94J10pO1xuICAgICAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdjbGljaycpKGhhbmRsZVRvZG9DaGVja2JveENvbXBsZXRlXzEuaGFuZGxlVG9kb0NoZWNrYm94Q29tcGxldGUpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICAgICAgWyd0eXBlJywgJ2NoZWNrYm94J10sXG4gICAgICAgICAgICBbJ2lkJywgJ2NvbXBsZXRlJ10sXG4gICAgICAgICAgICBbJ25hbWUnLCAnY29tcGxldGUnXSxcbiAgICAgICAgICAgIFsndmFsdWUnLCBgJHtwcm9qZWN0Q29sb3VyfWBdLFxuICAgICAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGhlYWRpbmdDb250YWluZXIpKShjaGVja2JveCk7XG4gICAgICAgIC8vdG8gcHJldmVudCBjbGlja2luZyBjaGVja2JveCBhZnRlciBpdCBoYXMgYmVlbiBhcmNoaXZlZFxuICAgICAgICBpZiAoZGlzYWJsZUNoZWNrYm94KSB7XG4gICAgICAgICAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1snZGlzYWJsZWQnLCAndHJ1ZSddXSkoY2hlY2tib3gpO1xuICAgICAgICB9XG4gICAgICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKShgJHt0b2RvTmFtZX1gKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZG9Db250ZW50Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2g0JykoWyd0b2RvQ29udGVudC1uYW1lJ10pKTtcbiAgICAgICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKGAke3RvZG9EZXNjcmlwdGlvbn1gKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZG9Db250ZW50Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ3AnKShbJ3RvZG9Db250ZW50LWRlc2NyaXB0aW9uJ10pKTtcbiAgICAgICAgY29uc3QgZGF0ZUFuZFByaW9yaXR5Q29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnZGF0ZUFuZFByaW9yaXR5LWNvbnRhaW5lciddKTtcbiAgICAgICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZG9Db250ZW50Q29udGFpbmVyKShkYXRlQW5kUHJpb3JpdHlDb250YWluZXIpO1xuICAgICAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoYER1ZTogJHt0b2RvRHVlRGF0ZX1gKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGRhdGVBbmRQcmlvcml0eUNvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdwJykoWyd0b2RvQ29udGVudC1kdWVEYXRlJ10pKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydwcmlvcml0eS1jb250YWluZXInXSk7XG4gICAgICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShkYXRlQW5kUHJpb3JpdHlDb250YWluZXIpKHByaW9yaXR5Q29udGFpbmVyKTtcbiAgICAgICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRTdHlsZVRvRWxlbSkoW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJyxcbiAgICAgICAgICAgICAgICBgJHt0b2RvUHJpb3JpdHkgPT09ICdpbW1lZGlhdGUnXG4gICAgICAgICAgICAgICAgICAgID8gJ2hzbCgwLCAxMDAlLCAzNSUpJ1xuICAgICAgICAgICAgICAgICAgICA6IHRvZG9Qcmlvcml0eSA9PT0gJ3VyZ2VudCdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2hzbCg0MCwgMTAwJSwgNjUlKSdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdG9kb1ByaW9yaXR5ID09PSAnaGlnaCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdoc2woOTAsIDEwMCUsIDUwJSknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0b2RvUHJpb3JpdHkgPT09ICdtZWRpdW0nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2hzbCgyMDAsIDEwMCUsIDUwJSknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2hzbCgyNTAsIDEwMCUsIDcwJSknfWAsXG4gICAgICAgICAgICBdLFxuICAgICAgICBdKShwcmlvcml0eUNvbnRhaW5lcik7XG4gICAgICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKShgJHt0b2RvUHJpb3JpdHl9YCksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShwcmlvcml0eUNvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdwJykoWyd0b2RvQ29udGVudC1wcmlvcml0eSddKSk7XG4gICAgfSk7XG59O1xuZXhwb3J0cy5hZGRUb2Rvc1RvQ29udGVudCA9IGFkZFRvZG9zVG9Db250ZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmFyY2hpdmVFeHBpcmVkVG9kb3MgPSB2b2lkIDA7XG5jb25zdCBhcmNoaXZlRXhwaXJlZFRvZG9zID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcmNoaXZlZCcpKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcmNoaXZlZCcsIEpTT04uc3RyaW5naWZ5KFtdKSk7XG4gICAgfVxuICAgIGNvbnN0IHByb2plY3RBcnIgPSBbXTtcbiAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmIChrZXkgIT09ICdwcm9qZWN0TmFtZXMnICYmIGtleSAhPT0gJ2FyY2hpdmVkJykge1xuICAgICAgICAgICAgcHJvamVjdEFyci5wdXNoKEpTT04ucGFyc2UoKF9hID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF0ZSA9IG5vdy5nZXREYXRlKCk7XG4gICAgY29uc3QgbW9udGggPSBub3cuZ2V0TW9udGgoKSArIDE7XG4gICAgY29uc3QgeWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xuICAgIC8vZ3JhYiBwcmV2aW91c2x5IHN0b3JlZCBleHBpcmVkL2FyY2hpdmVkIHByb2plY3RzIGZyb20gbG9jYWxzdG9yYWdlXG4gICAgY29uc3QgZXhwaXJlZFByb2plY3RzQXJyID0gSlNPTi5wYXJzZSgoX2EgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJjaGl2ZWQnKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycpO1xuICAgIGNvbnN0IHRvZG9zTm90RXhwaXJlZEFyciA9IFtdO1xuICAgIHByb2plY3RBcnIuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBBcnIgPSB0b2RvLnRvZG9EdWVEYXRlLnNwbGl0KCctJyk7XG4gICAgICAgICAgICBjb25zdCB0b2RvWWVhciA9IE51bWJlcih0ZW1wQXJyWzBdKTtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9Nb250aCA9IE51bWJlcih0ZW1wQXJyWzFdKTtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRlID0gTnVtYmVyKHRlbXBBcnJbMl0pO1xuICAgICAgICAgICAgLy9ncmFiIGVhY2ggdG9kbyB3aXRoIGR1ZURhdGUgZWFybGllciB0aGFuIHRvZGF5IGFuZCBzdG9yZSBjb3JyZXNwb25kaW5nIHByb2plY3QgaW50byB0ZW1wIG9iamVjdCBhbmQgc3RvcmUgaW4gLi4uQXJyXG4gICAgICAgICAgICBpZiAodG9kb0RhdGUgPCBkYXRlIHx8IHRvZG9Nb250aCA8IG1vbnRoIHx8IHRvZG9ZZWFyIDwgeWVhcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXAgPSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3ROYW1lOiBwcm9qZWN0LnByb2plY3QucHJvamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q29sb3VyOiBwcm9qZWN0LnByb2plY3QucHJvamVjdENvbG91cixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9kb3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvTmFtZTogdG9kby50b2RvTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb246IHRvZG8udG9kb0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EdWVEYXRlOiB0b2RvLnRvZG9EdWVEYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eTogdG9kby50b2RvUHJpb3JpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZXhwaXJlZFByb2plY3RzQXJyLnB1c2godGVtcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL2dyYWIgcHJvamVjdHMgYW5kIHRvZG9zIHRoYXQgYXJlIG5vdCBleHBpcmVkIGFuZCBzdG9yZSB0aGVtIGludG8gLi4uQXJyXG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcCA9IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE5hbWU6IHByb2plY3QucHJvamVjdC5wcm9qZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDb2xvdXI6IHByb2plY3QucHJvamVjdC5wcm9qZWN0Q29sb3VyLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b2RvczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9OYW1lOiB0b2RvLnRvZG9OYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbjogdG9kby50b2RvRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0R1ZURhdGU6IHRvZG8udG9kb0R1ZURhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5OiB0b2RvLnRvZG9Qcmlvcml0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0b2Rvc05vdEV4cGlyZWRBcnIucHVzaCh0ZW1wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy9zdG9yZSBleHBpcmVkIHByb2plY3RzIGFuZCB0b2RvcyB0aGF0IGhhdmUgbmV3IGV4cGlyZWQgdG9kb3MgYWRkZWRcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXJjaGl2ZWQnLCBKU09OLnN0cmluZ2lmeShleHBpcmVkUHJvamVjdHNBcnIpKTtcbiAgICAvL3RoZSB0b2RvcyB0aGF0IHNoYXJlIGEgcHJvamVjdCBuYW1lIGFyZSBjb25zb2xpZGF0ZWQgdW5kZXIgb25lIHByb2plY3RcbiAgICBjb25zdCB1bmV4cGlyZWRQcm9qZWN0c01hcCA9IHRvZG9zTm90RXhwaXJlZEFyci5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xuICAgICAgICBpZiAoIWFjYy5oYXMoY3Vyci5wcm9qZWN0LnByb2plY3ROYW1lKSkge1xuICAgICAgICAgICAgYWNjLnNldChjdXJyLnByb2plY3QucHJvamVjdE5hbWUsIGN1cnIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IGFjYy5nZXQoY3Vyci5wcm9qZWN0LnByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIHRlbXAgPT09IG51bGwgfHwgdGVtcCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGVtcC50b2Rvcy5wdXNoKGN1cnIudG9kb3NbMF0pO1xuICAgICAgICAgICAgYWNjLnNldChjdXJyLnByb2plY3QucHJvamVjdE5hbWUsIHRlbXApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgbmV3IE1hcCgpKTtcbiAgICAvL3N0b3JlIG1vZGlmaWVkIHByb2plY3RzIHdpdGhvdXQgdGhlIGV4cGlyZWQgdG9kb3MgYmFjayBpbnRvIGxvY2Fsc3RvcmFnZVxuICAgIHVuZXhwaXJlZFByb2plY3RzTWFwLmZvckVhY2goKHZhbCwga2V5KSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsKSk7XG4gICAgfSk7XG59O1xuZXhwb3J0cy5hcmNoaXZlRXhwaXJlZFRvZG9zID0gYXJjaGl2ZUV4cGlyZWRUb2RvcztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wcm9qZWN0c0FuZFRvZG9zT25sb2FkID0gdm9pZCAwO1xuY29uc3QgYWRkUHJvamVjdFRvU2lkZWJhcl8xID0gcmVxdWlyZShcIi4vYWRkUHJvamVjdFRvU2lkZWJhclwiKTtcbmNvbnN0IGFkZFRvZG9zVG9Db250ZW50XzEgPSByZXF1aXJlKFwiLi9hZGRUb2Rvc1RvQ29udGVudFwiKTtcbmNvbnN0IHByb2plY3RzQW5kVG9kb3NPbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IHByb2plY3RzID0gW107XG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoa2V5ICE9PSAnU2FtcGxlIFByb2plY3QnICYmIGtleSAhPT0gJ3Byb2plY3ROYW1lcycgJiYga2V5ICE9PSAnYXJjaGl2ZWQnKSB7XG4gICAgICAgICAgICBwcm9qZWN0cy5wdXNoKEpTT04ucGFyc2UoKF9hID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vZGlzcGxheSBzYW1wbGUgdG9kb3NcbiAgICBjb25zdCBzYW1wbGVQcm9qZWN0ID0gSlNPTi5wYXJzZSgoX2EgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU2FtcGxlIFByb2plY3QnKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycpO1xuICAgICgwLCBhZGRUb2Rvc1RvQ29udGVudF8xLmFkZFRvZG9zVG9Db250ZW50KShzYW1wbGVQcm9qZWN0KTtcbiAgICAvL2Rpc3BsYXkgcmVzdCBvZiBwcm9qZWN0cyBpbiBzdG9yYWdlXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAoMCwgYWRkUHJvamVjdFRvU2lkZWJhcl8xLmFkZFByb2plY3RUb1NpZGViYXIpKHByb2plY3QucHJvamVjdC5wcm9qZWN0TmFtZSwgcHJvamVjdC5wcm9qZWN0LnByb2plY3RDb2xvdXIpO1xuICAgICAgICAoMCwgYWRkVG9kb3NUb0NvbnRlbnRfMS5hZGRUb2Rvc1RvQ29udGVudCkocHJvamVjdCk7XG4gICAgfSk7XG59O1xuZXhwb3J0cy5wcm9qZWN0c0FuZFRvZG9zT25sb2FkID0gcHJvamVjdHNBbmRUb2Rvc09ubG9hZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zdG9yZVByb2plY3RBbmRUb2Rvc0Z1bGwgPSB2b2lkIDA7XG5jb25zdCBzdG9yZVByb2plY3RBbmRUb2Rvc0Z1bGwgPSBmdW5jdGlvbiAocHJvamVjdEFuZFRvZG9zXykge1xuICAgIHZhciBfYTtcbiAgICBsZXQgdG9kb0V4aXN0c0ZsYWcgPSBmYWxzZTtcbiAgICBjb25zdCBjdXJyZW50UHJvak5hbWUgPSBwcm9qZWN0QW5kVG9kb3NfLnByb2plY3QucHJvamVjdE5hbWU7XG4gICAgY29uc3QgY3VycmVudFRvZG9OYW1lID0gcHJvamVjdEFuZFRvZG9zXy50b2Rvc1swXS50b2RvTmFtZTtcbiAgICBjb25zdCBjdXJyZW50VG9kb3MgPSBwcm9qZWN0QW5kVG9kb3NfLnRvZG9zWzBdO1xuICAgIGNvbnN0IHN0b3JhZ2VLZXlzID0gbmV3IFNldCgpO1xuICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHN0b3JhZ2VLZXlzLmFkZChrZXkpO1xuICAgIH0pO1xuICAgIC8vbmV3IHByb2plY3RcbiAgICBpZiAoIXN0b3JhZ2VLZXlzLmhhcyhjdXJyZW50UHJvak5hbWUpKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGN1cnJlbnRQcm9qTmFtZSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdEFuZFRvZG9zXykpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy9wcm9qZWN0IGFscmVhZHkgZXhpc3RzXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qU3RvcmFnZSA9IEpTT04ucGFyc2UoKF9hID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudFByb2pOYW1lKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycpO1xuICAgICAgICBjb25zdCB0b2RvTmFtZXNTZXQgPSBuZXcgU2V0KCk7XG4gICAgICAgIGN1cnJlbnRQcm9qU3RvcmFnZS50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB0b2RvTmFtZXNTZXQuYWRkKHRvZG8udG9kb05hbWUpKTtcbiAgICAgICAgLy9uZXcgdG9kb05hbWVcbiAgICAgICAgaWYgKCF0b2RvTmFtZXNTZXQuaGFzKGN1cnJlbnRUb2RvTmFtZSkpIHtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qU3RvcmFnZS50b2Rvcy5wdXNoKGN1cnJlbnRUb2Rvcyk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShjdXJyZW50UHJvak5hbWUsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRQcm9qU3RvcmFnZSkpO1xuICAgICAgICAgICAgdG9kb0V4aXN0c0ZsYWcgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiB0b2RvRXhpc3RzRmxhZztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vdG9kb05hbWUgdGFrZW5cbiAgICAgICAgICAgIGFsZXJ0KGAke2N1cnJlbnRUb2RvTmFtZX0gYWxyZWFkeSBleGlzdHMgYXMgYSB0b2RvICjvvaHigKLMge+4v+KAosyA772hKSAgUGxlYXNlIGNob29zZSBhbm90aGVyIG5hbWUgb3IgY29uc2lkZXIgZWRpdGluZyBhbiBleGlzdGluZyB0b2RvLmApO1xuICAgICAgICAgICAgdG9kb0V4aXN0c0ZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRvZG9FeGlzdHNGbGFnO1xuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydHMuc3RvcmVQcm9qZWN0QW5kVG9kb3NGdWxsID0gc3RvcmVQcm9qZWN0QW5kVG9kb3NGdWxsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0b3JlU2FtcGxlUHJvamVjdCA9IHZvaWQgMDtcbmNvbnN0IHN0b3JlU2FtcGxlUHJvamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIC8vcmV0dXJucyBkYXRlIG9uZSB5ZWFyIGZyb20gY3VycmVudFxuICAgIGNvbnN0IHNhbXBsZUxvd0R1ZURhdGUgPSAobm93KSA9PiB7XG4gICAgICAgIGxldCBkYXkgPSBub3cuZ2V0RGF0ZSgpO1xuICAgICAgICBsZXQgbW9udGggPSBub3cuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgIGNvbnN0IHllYXIgPSBub3cuZ2V0RnVsbFllYXIoKSArIDE7XG4gICAgICAgIHJldHVybiBgJHt5ZWFyfS0ke21vbnRoIDwgMTAgPyAnMCcgKyBtb250aCA6IG1vbnRofS0ke2RheSA8IDEwID8gJzAnICsgZGF5IDogZGF5fWA7XG4gICAgfTtcbiAgICAvL3JldHVybnMgZGF0ZSBvbmUgbW9udGggZnJvbSBjdXJyZW50XG4gICAgY29uc3Qgc2FtcGxlTWVkRHVlRGF0ZSA9IChub3cpID0+IHtcbiAgICAgICAgbGV0IG1vbnRoID0gbm93LmdldE1vbnRoKCk7XG4gICAgICAgIG1vbnRoID0gbW9udGggPD0gMTAgPyBtb250aCArIDEgOiBtb250aDtcbiAgICAgICAgbW9udGggPSBtb250aCArIDE7XG4gICAgICAgIHJldHVybiBgJHtub3cuZ2V0RnVsbFllYXIoKX0tJHttb250aCA8IDEwID8gJzAnICsgbW9udGggOiBtb250aH0tJHtub3cuZ2V0RGF0ZSgpIDwgMTAgPyAnMCcgKyBub3cuZ2V0RGF0ZSgpIDogbm93LmdldERhdGUoKX1gO1xuICAgIH07XG4gICAgLy9yZXR1cm5zIGRhdGUgb25lIGRheSBmcm9tIGN1cnJlbnRcbiAgICBjb25zdCBzYW1wbGVVcmdlbnREdWVEYXRlID0gKG5vdykgPT4ge1xuICAgICAgICBsZXQgZGF5ID0gbm93LmdldERhdGUoKTtcbiAgICAgICAgZGF5ID0gZGF5IDwgMjYgPyBkYXkgKyAyIDogZGF5O1xuICAgICAgICBsZXQgbW9udGggPSBub3cuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgIHJldHVybiBgJHtub3cuZ2V0RnVsbFllYXIoKX0tJHttb250aCA8IDEwID8gJzAnICsgbW9udGggOiBtb250aH0tJHtkYXkgPCAxMCA/ICcwJyArIGRheSA6IGRheX1gO1xuICAgIH07XG4gICAgY29uc3Qgc2FtcGxlUHJvamVjdCA9IHtcbiAgICAgICAgcHJvamVjdDogXG4gICAgICAgIC8vc2FtcGxlIHByb2plY3QgdG8gZGlzcGxheSBpbml0aWFsbHlcbiAgICAgICAgeyBwcm9qZWN0TmFtZTogJ1NhbXBsZSBQcm9qZWN0JywgcHJvamVjdENvbG91cjogJyM0OGQxY2MnIH0sXG4gICAgICAgIHRvZG9zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdG9kb05hbWU6IGBGaW5pc2ggJ1RoZSBGYWRlZCBTdW46IEtlc3JpdGgnYCxcbiAgICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb246ICdGaW5pc2ggcmVhZGluZyB0aGUgYm9vayAtIHJldHVybiBzb29uIScsXG4gICAgICAgICAgICAgICAgdG9kb0R1ZURhdGU6IGAke3NhbXBsZVVyZ2VudER1ZURhdGUobm93KX1gLFxuICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eTogJ3VyZ2VudCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRvZG9OYW1lOiAnVmV0IEFwcG9pbnRtZW50JyxcbiAgICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb246ICdUYWtlIE5pZ2h0ZXllcyB0byB0aGUgdmV0IGZvciByb3V0aW5lIGNoZWNrdXAnLFxuICAgICAgICAgICAgICAgIHRvZG9EdWVEYXRlOiBgJHtzYW1wbGVNZWREdWVEYXRlKG5vdyl9YCxcbiAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHk6ICdtZWRpdW0nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0b2RvTmFtZTogJ0JhY2twYWNraW5nIHRyaXAgdG8gTmVwYWwnLFxuICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbjogJ1BsYW4gcm91dGUsIHN1cHBsaWVzIGFuZCBhcHBseSBmb3IgdmlzYScsXG4gICAgICAgICAgICAgICAgdG9kb0R1ZURhdGU6IGAke3NhbXBsZUxvd0R1ZURhdGUobm93KX1gLFxuICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eTogJ2xvdycsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH07XG4gICAgLy9vbiBmaXJzdCBsb2FkIG9ubHlcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKHNhbXBsZVByb2plY3QucHJvamVjdC5wcm9qZWN0TmFtZSkpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc2FtcGxlUHJvamVjdC5wcm9qZWN0LnByb2plY3ROYW1lLCBKU09OLnN0cmluZ2lmeShzYW1wbGVQcm9qZWN0KSk7XG4gICAgfVxufTtcbmV4cG9ydHMuc3RvcmVTYW1wbGVQcm9qZWN0ID0gc3RvcmVTYW1wbGVQcm9qZWN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNpZGViYXIgPSB2b2lkIDA7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IGhhbmRsZUFkZE5ld1Byb2plY3RJY29uQ2xpY2tfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVBZGROZXdQcm9qZWN0SWNvbkNsaWNrXCIpO1xuY29uc3QgaGFuZGxlQWRkTmV3VG9kb0ljb25DbGlja18xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZUFkZE5ld1RvZG9JY29uQ2xpY2tcIik7XG5jb25zdCBoYW5kbGVBcmNoaXZlZFRhYkNsaWNrXzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlQXJjaGl2ZWRUYWJDbGlja1wiKTtcbmNvbnN0IGhhbmRsZVVwY29taW5nVGFiQ2xpY2tfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVVcGNvbWluZ1RhYkNsaWNrXCIpO1xuY29uc3QgaGFuZGxlVG9kYXlUYWJDbGlja18xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZVRvZGF5VGFiQ2xpY2tcIik7XG5jb25zdCBoYW5kbGVQcm9qZWN0c1RhYkNsaWNrXzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlUHJvamVjdHNUYWJDbGlja1wiKTtcbmNvbnN0IGhhbmRsZUNyZWF0ZWRUYWJzQ2xpY2tfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVDcmVhdGVkVGFic0NsaWNrXCIpO1xuY29uc3Qgc2lkZWJhciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKTtcbiAgICBjb25zdCBzaWRlYmFyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnc2lkZWJhciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkocm9vdCkoc2lkZWJhcik7XG4gICAgY29uc3QgdG9kYXlDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydzaWRlYmFyLXRhYicsICdjb250YWluZXItdG9kYXknXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ2NsaWNrJykoaGFuZGxlVG9kYXlUYWJDbGlja18xLmhhbmRsZVRvZGF5VGFiQ2xpY2spKHRvZGF5Q29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2lkZWJhcikodG9kYXlDb250YWluZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZGF5Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5jcmVhdGVJbWFnZSkoJy4uLy4uL3NyYy9hc3NldHMvaWNvbnMvYXBlcnR1cmUuc3ZnJykoWydpY29uJywgJ2ljb24tdG9kYXknXSkoYGljb24gcmVwcmVzZW50aW5nIHRvZGF5J3MgZXZlbnRzYCkoJ1RvZGF5JykpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnVG9kYXknKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZGF5Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2g0JykoWyd0YWItdGV4dCcsICd0b2RheS10YWInXSkpO1xuICAgIGNvbnN0IHVwY29taW5nQ29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnc2lkZWJhci10YWInLCAnY29udGFpbmVyLXVwY29taW5nJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdjbGljaycpKGhhbmRsZVVwY29taW5nVGFiQ2xpY2tfMS5oYW5kbGVVcGNvbWluZ1RhYkNsaWNrKSh1cGNvbWluZ0NvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNpZGViYXIpKHVwY29taW5nQ29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh1cGNvbWluZ0NvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuY3JlYXRlSW1hZ2UpKCcuLi8uLi9zcmMvYXNzZXRzL2ljb25zL2NhbGVuZGFyLnN2ZycpKFsnaWNvbicsICd1cGNvbWluZy1pY29uJ10pKCdpY29uIHJlcHJlc2VudGluZyB1cGNvbWluZyBldmVudHMnKSgnVXBjb21pbmcnKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdVcGNvbWluZycpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodXBjb21pbmdDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaDQnKShbJ3RhYi10ZXh0JywgJ3RhYi11cGNvbWluZyddKSk7XG4gICAgY29uc3QgYXJjaGl2ZWRDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydzaWRlYmFyLXRhYicsICdjb250YWluZXItYXJjaGl2ZWQnXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ2NsaWNrJykoaGFuZGxlQXJjaGl2ZWRUYWJDbGlja18xLmhhbmRsZUFyY2hpdmVkVGFiQ2xpY2spKGFyY2hpdmVkQ29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2lkZWJhcikoYXJjaGl2ZWRDb250YWluZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFyY2hpdmVkQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5jcmVhdGVJbWFnZSkoJy4uLy4uL3NyYy9hc3NldHMvaWNvbnMvYXJjaGl2ZS5zdmcnKShbJ2ljb24nLCAnYXJjaGl2ZWQtaWNvbiddKSgnaWNvbiByZXByZXNlbnRpbmcgYXJjaGl2ZWQgZXZlbnRzJykoJ0FyY2hpdmVkJykpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnQXJjaGl2ZWQnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFyY2hpdmVkQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2g0JykoWyd0YWItdGV4dCcsICd0YWItYXJjaGl2ZWQnXSkpO1xuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnc2lkZWJhci1oZWFkaW5nJywgJ2NvbnRhaW5lci1wcm9qZWN0cyddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2lkZWJhcikocHJvamVjdHNDb250YWluZXIpO1xuICAgIGNvbnN0IHByb2plY3RzSGVhZGluZyA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3Byb2plY3RIZWFkaW5nLXdyYXBwZXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHByb2plY3RzQ29udGFpbmVyKShwcm9qZWN0c0hlYWRpbmcpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ2NsaWNrJykoaGFuZGxlUHJvamVjdHNUYWJDbGlja18xLmhhbmRsZVByb2plY3RzVGFiQ2xpY2spLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdQcm9qZWN0cycpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkocHJvamVjdHNIZWFkaW5nKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2gzJykoWydoZWFkaW5nLXRleHQnLCAndGV4dC1wcm9qZWN0cyddKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVBZGROZXdQcm9qZWN0SWNvbkNsaWNrXzEuaGFuZGxlQWRkTmV3UHJvamVjdEljb25DbGljayksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShwcm9qZWN0c0hlYWRpbmcpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmNyZWF0ZUltYWdlKSgnLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy9wbHVzLnN2ZycpKFsnaWNvbicsICdpY29uLXBsdXMnXSkoJ2ljb24gb2YgcGx1cyBzeW1ib2wnKSgnQWRkIE5ldyBQcm9qZWN0JykpO1xuICAgIGNvbnN0IHNhbXBsZVByb2plY3RDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydzaWRlYmFyLXByb2plY3QnLCAncHJvamVjdCddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkocHJvamVjdHNDb250YWluZXIpKHNhbXBsZVByb2plY3RDb250YWluZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRTdHlsZVRvRWxlbSkoW1snY29sb3InLCAnIzQ4ZDFjYyddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdjbGljaycpKGhhbmRsZUNyZWF0ZWRUYWJzQ2xpY2tfMS5oYW5kbGVDcmVhdGVkVGFic0NsaWNrKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnU2FtcGxlIFByb2plY3QnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNhbXBsZVByb2plY3RDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaDQnKShbJ3Byb2plY3QtdGV4dCcsICd0ZXh0LXNhbXBsZVByb2plY3QnXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWydkYXRhLW5hbWUnLCBgU2FtcGxlIFByb2plY3RgXSxcbiAgICAgICAgWydkYXRhLWNvbG91cicsICcjNDhkMWNjJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdjbGljaycpKGhhbmRsZUFkZE5ld1RvZG9JY29uQ2xpY2tfMS5oYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNhbXBsZVByb2plY3RDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmNyZWF0ZUltYWdlKSgnLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy9wbHVzLnN2ZycpKFsnaWNvbicsICdpY29uLXBsdXMnXSkoJ2ljb24gb2YgcGx1cyBzeW1ib2wnKSgnQWRkIE5ldyBUb2RvJykpO1xufTtcbmV4cG9ydHMuc2lkZWJhciA9IHNpZGViYXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5yZXF1aXJlKFwiLi9pbmRleC5jc3NcIik7XG5jb25zdCBjb250ZW50XzEgPSByZXF1aXJlKFwiLi90cy9jb250ZW50L2NvbnRlbnRcIik7XG5jb25zdCBoZWFkZXJfMSA9IHJlcXVpcmUoXCIuL3RzL2hlYWRlci9oZWFkZXJcIik7XG5jb25zdCBzaWRlYmFyXzEgPSByZXF1aXJlKFwiLi90cy9zaWRlYmFyL3NpZGViYXJcIik7XG5jb25zdCBwcm9qZWN0c0FuZFRvZG9zT25sb2FkXzEgPSByZXF1aXJlKFwiLi90cy9wcm9qZWN0c0FuZFRvZG9zL3Byb2plY3RzQW5kVG9kb3NPbmxvYWRcIik7XG5jb25zdCBzdG9yZVNhbXBsZVByb2plY3RfMSA9IHJlcXVpcmUoXCIuL3RzL3Byb2plY3RzQW5kVG9kb3Mvc3RvcmVTYW1wbGVQcm9qZWN0XCIpO1xuY29uc3QgYXJjaGl2ZUV4cGlyZWRUb2Rvc18xID0gcmVxdWlyZShcIi4vdHMvcHJvamVjdHNBbmRUb2Rvcy9hcmNoaXZlRXhwaXJlZFRvZG9zXCIpO1xuY29uc3QgbWFpbkFwcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAoMCwgaGVhZGVyXzEuaGVhZGVyKSgpO1xuICAgICgwLCBzaWRlYmFyXzEuc2lkZWJhcikoKTtcbiAgICAoMCwgY29udGVudF8xLmNvbnRlbnQpKCk7XG4gICAgKDAsIHN0b3JlU2FtcGxlUHJvamVjdF8xLnN0b3JlU2FtcGxlUHJvamVjdCkoKTtcbiAgICAoMCwgYXJjaGl2ZUV4cGlyZWRUb2Rvc18xLmFyY2hpdmVFeHBpcmVkVG9kb3MpKCk7XG4gICAgLy9ydW5zIG9uIGV2ZXJ5IHJlZnJlc2hcbiAgICBzZWxmLm9ubG9hZCA9IHByb2plY3RzQW5kVG9kb3NPbmxvYWRfMS5wcm9qZWN0c0FuZFRvZG9zT25sb2FkO1xufTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBtYWluQXBwKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==