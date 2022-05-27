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
    (0, element_creators_1.pipe)((0, element_creators_1.appendElemToParent)(form))((0, element_creators_1.createImage)('../../dist/assets/icons/search.svg')(['icon', 'icon-search'])('icon of magnifying glass representing search')('Search'));
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
    (0, element_creators_1.pipe)((0, element_creators_1.appendElemToParent)(bttnCancelProject))((0, element_creators_1.createImage)('../../dist/assets/icons/x(1).svg')(['icon', 'icon-cancelProject'])(`icon of symbol 'x' representing cancel or close`)('Cancel'));
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
    (0, element_creators_1.pipe)((0, element_creators_1.addEvtListener)('click')(handleTodoCloseIconClick_1.handleTodoCloseIconClick), (0, element_creators_1.appendElemToParent)(bttnCancelTodo))((0, element_creators_1.createImage)('../../dist/assets/icons/x(1).svg')(['icon', 'icon-cancelTodo'])(`icon of symbol 'x' representing close or cancel`)('Cancel'));
    const bttnAddTodo = (0, element_creators_1.elemCreator)('button')(['bttn', 'bttn-addTodo']);
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([
        ['type', 'submit'],
        ['name', 'bttn-addTodo'],
        ['form', 'form-addTodo'],
    ]), (0, element_creators_1.appendElemToParent)(addTodoIconsContainer))(bttnAddTodo);
    (0, element_creators_1.pipe)((0, element_creators_1.appendElemToParent)(bttnAddTodo))((0, element_creators_1.createImage)('../../dist/assets/icons/check(1).svg')(['icon', 'icon-addTodo'])(`icon of a checkmark representing add`)('Add Todo'));
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
    (0, element_creators_1.pipe)((0, element_creators_1.appendElemToParent)(todayContainer))((0, element_creators_1.createImage)('../../dist/assets/icons/aperture.svg')(['icon', 'icon-today'])(`icon representing today's events`)('Today'));
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('Today'), (0, element_creators_1.appendElemToParent)(todayContainer))((0, element_creators_1.elemCreator)('h4')(['tab-text', 'today-tab']));
    const upcomingContainer = (0, element_creators_1.elemCreator)('div')(['sidebar-tab', 'container-upcoming']);
    (0, element_creators_1.addEvtListener)('click')(handleUpcomingTabClick_1.handleUpcomingTabClick)(upcomingContainer);
    (0, element_creators_1.appendElemToParent)(sidebar)(upcomingContainer);
    (0, element_creators_1.pipe)((0, element_creators_1.appendElemToParent)(upcomingContainer))((0, element_creators_1.createImage)('../../dist/assets/icons/calendar.svg')(['icon', 'upcoming-icon'])('icon representing upcoming events')('Upcoming'));
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('Upcoming'), (0, element_creators_1.appendElemToParent)(upcomingContainer))((0, element_creators_1.elemCreator)('h4')(['tab-text', 'tab-upcoming']));
    const archivedContainer = (0, element_creators_1.elemCreator)('div')(['sidebar-tab', 'container-archived']);
    (0, element_creators_1.addEvtListener)('click')(handleArchivedTabClick_1.handleArchivedTabClick)(archivedContainer);
    (0, element_creators_1.appendElemToParent)(sidebar)(archivedContainer);
    (0, element_creators_1.pipe)((0, element_creators_1.appendElemToParent)(archivedContainer))((0, element_creators_1.createImage)('../../dist/assets/icons/archive.svg')(['icon', 'archived-icon'])('icon representing archived events')('Archived'));
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('Archived'), (0, element_creators_1.appendElemToParent)(archivedContainer))((0, element_creators_1.elemCreator)('h4')(['tab-text', 'tab-archived']));
    const projectsContainer = (0, element_creators_1.elemCreator)('div')(['sidebar-heading', 'container-projects']);
    (0, element_creators_1.appendElemToParent)(sidebar)(projectsContainer);
    const projectsHeading = (0, element_creators_1.elemCreator)('div')(['projectHeading-wrapper']);
    (0, element_creators_1.appendElemToParent)(projectsContainer)(projectsHeading);
    (0, element_creators_1.pipe)((0, element_creators_1.addEvtListener)('click')(handleProjectsTabClick_1.handleProjectsTabClick), (0, element_creators_1.addTextToElem)('Projects'), (0, element_creators_1.appendElemToParent)(projectsHeading))((0, element_creators_1.elemCreator)('h3')(['heading-text', 'text-projects']));
    (0, element_creators_1.pipe)((0, element_creators_1.addEvtListener)('click')(handleAddNewProjectIconClick_1.handleAddNewProjectIconClick), (0, element_creators_1.appendElemToParent)(projectsHeading))((0, element_creators_1.createImage)('../../dist/assets/icons/plus.svg')(['icon', 'icon-plus'])('icon of plus symbol')('Add New Project'));
    const sampleProjectContainer = (0, element_creators_1.elemCreator)('div')(['sidebar-project', 'project']);
    (0, element_creators_1.appendElemToParent)(projectsContainer)(sampleProjectContainer);
    (0, element_creators_1.pipe)((0, element_creators_1.addStyleToElem)([['color', '#48d1cc']]), (0, element_creators_1.addEvtListener)('click')(handleCreatedTabsClick_1.handleCreatedTabsClick), (0, element_creators_1.addTextToElem)('Sample Project'), (0, element_creators_1.appendElemToParent)(sampleProjectContainer))((0, element_creators_1.elemCreator)('h4')(['project-text', 'text-sampleProject']));
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([
        ['data-name', `Sample Project`],
        ['data-colour', '#48d1cc'],
    ]), (0, element_creators_1.addEvtListener)('click')(handleAddNewTodoIconClick_1.handleAddNewTodoIconClick), (0, element_creators_1.appendElemToParent)(sampleProjectContainer))((0, element_creators_1.createImage)('../../../dist/assets/icons/plus.svg')(['icon', 'icon-plus'])('icon of plus symbol')('Add New Todo'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7Ozs7Ozs7VUM1Q2Y7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7OztBQ05hO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG1CQUFPLENBQUMsb0NBQWE7QUFDckIsa0JBQWtCLG1CQUFPLENBQUMseURBQXNCO0FBQ2hELGlCQUFpQixtQkFBTyxDQUFDLHFEQUFvQjtBQUM3QyxrQkFBa0IsbUJBQU8sQ0FBQyx5REFBc0I7QUFDaEQsaUNBQWlDLG1CQUFPLENBQUMseUdBQThDO0FBQ3ZGLDZCQUE2QixtQkFBTyxDQUFDLGlHQUEwQztBQUMvRSw4QkFBOEIsbUJBQU8sQ0FBQyxtR0FBMkM7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2NvbnRlbnQvY29udGVudC50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2VsZW1lbnQtY3JlYXRvcnMudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVBZGROZXdQcm9qZWN0SWNvbkNsaWNrLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZXZlbnRDQnMvaGFuZGxlQWRkTmV3VG9kb0ljb25DbGljay50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2V2ZW50Q0JzL2hhbmRsZUFyY2hpdmVkVGFiQ2xpY2sudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVDcmVhdGVkVGFic0NsaWNrLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZXZlbnRDQnMvaGFuZGxlRmlsdGVyQnlQcmlvcml0eUNsaWNrLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZXZlbnRDQnMvaGFuZGxlUHJvamVjdENsb3NlSWNvbkNsaWNrLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZXZlbnRDQnMvaGFuZGxlUHJvamVjdEZvcm1TdWJtaXQudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVQcm9qZWN0c1RhYkNsaWNrLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZXZlbnRDQnMvaGFuZGxlU2VhcmNoRm9ybVN1Ym1pdC50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2V2ZW50Q0JzL2hhbmRsZVNvcnRCeVByaW9yaXR5Q2xpY2sudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVUb2RheVRhYkNsaWNrLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZXZlbnRDQnMvaGFuZGxlVG9kb0NoZWNrYm94Q29tcGxldGUudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVUb2RvQ2xvc2VJY29uQ2xpY2sudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVUb2RvRm9ybVN1Ym1pdC50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2V2ZW50Q0JzL2hhbmRsZVVwY29taW5nVGFiQ2xpY2sudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9oZWFkZXIvaGVhZGVyLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvbW9kYWxzL3Byb2plY3RNb2RhbC50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL21vZGFscy90b2RvTW9kYWwudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9wcm9qZWN0c0FuZFRvZG9zL2FkZFByb2plY3RUb1NpZGViYXIudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9wcm9qZWN0c0FuZFRvZG9zL2FkZFRvZG9zVG9Db250ZW50LnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvcHJvamVjdHNBbmRUb2Rvcy9hcmNoaXZlRXhwaXJlZFRvZG9zLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvcHJvamVjdHNBbmRUb2Rvcy9wcm9qZWN0c0FuZFRvZG9zT25sb2FkLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvcHJvamVjdHNBbmRUb2Rvcy9zdG9yZVByb2plY3RBbmRUb2Rvc0Z1bGwudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9wcm9qZWN0c0FuZFRvZG9zL3N0b3JlU2FtcGxlUHJvamVjdC50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL3NpZGViYXIvc2lkZWJhci50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jb250ZW50ID0gdm9pZCAwO1xuY29uc3QgZWxlbWVudF9jcmVhdG9yc18xID0gcmVxdWlyZShcIi4uL2VsZW1lbnQtY3JlYXRvcnNcIik7XG5jb25zdCBoYW5kbGVGaWx0ZXJCeVByaW9yaXR5Q2xpY2tfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVGaWx0ZXJCeVByaW9yaXR5Q2xpY2tcIik7XG5jb25zdCBoYW5kbGVTZWFyY2hGb3JtU3VibWl0XzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlU2VhcmNoRm9ybVN1Ym1pdFwiKTtcbmNvbnN0IGhhbmRsZVNvcnRCeVByaW9yaXR5Q2xpY2tfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVTb3J0QnlQcmlvcml0eUNsaWNrXCIpO1xuY29uc3QgY29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKTtcbiAgICBjb25zdCBjb250ZW50ID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnY29udGVudCddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkocm9vdCkoY29udGVudCk7XG4gICAgY29uc3QgdG9wID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnY29udGVudC10b3AnXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGNvbnRlbnQpKHRvcCk7XG4gICAgY29uc3QgZm9ybSA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdmb3JtJykoWydmb3JtLXNlYXJjaFRvZG8nXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnc3VibWl0JykoaGFuZGxlU2VhcmNoRm9ybVN1Ym1pdF8xLmhhbmRsZVNlYXJjaEZvcm1TdWJtaXQpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ2FjdGlvbicsICcjJ10sXG4gICAgICAgIFsnbWV0aG9kJywgJ3Bvc3QnXSxcbiAgICAgICAgWydpZCcsICdmb3JtLXNlYXJjaFRvZG8nXSxcbiAgICAgICAgWyduYW1lJywgJ3NlYXJjaC10b2RvJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b3ApKShmb3JtKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydmb3InLCAnc2VhcmNoVG9kbyddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShmb3JtKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2xhYmVsJykoWydsYWJlbC1zZWFyY2gnXSkpO1xuICAgIGNvbnN0IHNlYXJjaFRvZG8gPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaW5wdXQnKShbJ3NlYXJjaFRvZG8nXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWyd0eXBlJywgJ3NlYXJjaCddLFxuICAgICAgICBbJ3BsYWNlaG9sZGVyJywgJ3NlYXJjaCBmb3IgYSB0b2RvJ10sXG4gICAgICAgIFsnaWQnLCAnc2VhcmNoVG9kbyddLFxuICAgICAgICBbJ25hbWUnLCAnc2VhcmNoLXRvZG8nXSxcbiAgICBdKShzZWFyY2hUb2RvKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoZm9ybSkoc2VhcmNoVG9kbyk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoZm9ybSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuY3JlYXRlSW1hZ2UpKCcuLi8uLi9kaXN0L2Fzc2V0cy9pY29ucy9zZWFyY2guc3ZnJykoWydpY29uJywgJ2ljb24tc2VhcmNoJ10pKCdpY29uIG9mIG1hZ25pZnlpbmcgZ2xhc3MgcmVwcmVzZW50aW5nIHNlYXJjaCcpKCdTZWFyY2gnKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ2ZvcicsICdzZWxlY3QtZmlsdGVyQnlQcmlvcml0eSddLFxuICAgICAgICBbJ25hbWUnLCAnc2VsZWN0LWZpbHRlckJ5UHJpb3JpdHknXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvcCkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdsYWJlbCcpKFsnbGFiZWwnLCAnbGFiZWwtZmlsdGVyQnlQcmlvcml0eSddKSk7XG4gICAgY29uc3Qgc2VsZWN0RmlsdGVyQnlQcmlvcml0eSA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdzZWxlY3QnKShbJ3NlbGVjdC1maWx0ZXJCeVByaW9yaXR5J10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ2NsaWNrJykoaGFuZGxlRmlsdGVyQnlQcmlvcml0eUNsaWNrXzEuaGFuZGxlRmlsdGVyQnlQcmlvcml0eUNsaWNrKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWyduYW1lJywgJ3NlbGVjdC1maWx0ZXJCeVByaW9yaXR5J10sXG4gICAgICAgIFsnaWQnLCAnc2VsZWN0LWZpbHRlckJ5UHJpb3JpdHknXSxcbiAgICAgICAgWyd0aXRsZScsICdzZWxlY3QtZmlsdGVyQnlQcmlvcml0eSddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9wKSkoc2VsZWN0RmlsdGVyQnlQcmlvcml0eSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCctLUZpbHRlciBieSBwcmlvcml0eS0tJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWyd2YWx1ZScsICcnXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2VsZWN0RmlsdGVyQnlQcmlvcml0eSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdvcHRpb24nKShbJ29wdGlvbi1maWx0ZXJCeVByaW9yaXR5J10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ2ltbWVkaWF0ZScpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1sndmFsdWUnLCAnaW1tZWRpYXRlJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNlbGVjdEZpbHRlckJ5UHJpb3JpdHkpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnb3B0aW9uJykoWydvcHRpb24tZmlsdGVyQnlQcmlvcml0eSddKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCd1cmdlbnQnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ3ZhbHVlJywgJ3VyZ2VudCddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzZWxlY3RGaWx0ZXJCeVByaW9yaXR5KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ29wdGlvbicpKFsnb3B0aW9uLWZpbHRlckJ5UHJpb3JpdHknXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnaGlnaCcpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1sndmFsdWUnLCAnaGlnaCddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzZWxlY3RGaWx0ZXJCeVByaW9yaXR5KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ29wdGlvbicpKFsnb3B0aW9uLWZpbHRlckJ5UHJpb3JpdHknXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnbWVkaXVtJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWyd2YWx1ZScsICdtZWRpdW0nXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2VsZWN0RmlsdGVyQnlQcmlvcml0eSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdvcHRpb24nKShbJ29wdGlvbi1maWx0ZXJCeVByaW9yaXR5J10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ2xvdycpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1sndmFsdWUnLCAnbG93J11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNlbGVjdEZpbHRlckJ5UHJpb3JpdHkpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnb3B0aW9uJykoWydvcHRpb24tZmlsdGVyQnlQcmlvcml0eSddKSk7XG4gICAgY29uc3Qgc2VsZWN0U29ydEJ5UHJpb3JpdHkgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnc2VsZWN0JykoWydzZWxlY3Qtc29ydEJ5UHJpb3JpdHknXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVTb3J0QnlQcmlvcml0eUNsaWNrXzEuaGFuZGxlU29ydEJ5UHJpb3JpdHlDbGljayksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsnaWQnLCAnc2VsZWN0LXNvcnRCeVByaW9yaXR5J10sXG4gICAgICAgIFsnbmFtZScsICdzZWxlY3Qtc29ydEJ5UHJpb3JpdHknXSxcbiAgICAgICAgWyd0aXRsZScsICdzZWxlY3Qtc29ydEJ5UHJpb3JpdHknXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvcCkpKHNlbGVjdFNvcnRCeVByaW9yaXR5KTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJy0tU29ydCBieSBwcmlvcml0eS0tJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWyd2YWx1ZScsICcnXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2VsZWN0U29ydEJ5UHJpb3JpdHkpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnb3B0aW9uJykoWydvcHRpb24tc29ydEJ5UHJpb3JpdHknXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnbG93IHRvIGltbWVkaWF0ZScpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1sndmFsdWUnLCAnbG93VG9JbW1lZGlhdGUnXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2VsZWN0U29ydEJ5UHJpb3JpdHkpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnb3B0aW9uJykoWydvcHRpb24tc29ydEJ5UHJpb3JpdHknXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnaW1tZWRpYXRlIHRvIGxvdycpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1sndmFsdWUnLCAnaW1tZWRpYXRlVG9Mb3cnXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2VsZWN0U29ydEJ5UHJpb3JpdHkpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnb3B0aW9uJykoWydvcHRpb24tc29ydEJ5UHJpb3JpdHknXSkpO1xuICAgIGNvbnN0IGNvbnRlbnRCb3R0b20gPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydjb250ZW50LWJvdHRvbSddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoY29udGVudCkoY29udGVudEJvdHRvbSk7XG59O1xuZXhwb3J0cy5jb250ZW50ID0gY29udGVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5waXBlID0gZXhwb3J0cy5hZGRTdHlsZVRvRWxlbSA9IGV4cG9ydHMuYWRkRXZ0TGlzdGVuZXIgPSBleHBvcnRzLmNyZWF0ZUltYWdlID0gZXhwb3J0cy5hZGRBdHRyaWJ1dGVUb0VsZW0gPSBleHBvcnRzLmFkZFRleHRUb0VsZW0gPSBleHBvcnRzLmFwcGVuZEVsZW1Ub1BhcmVudCA9IGV4cG9ydHMuZWxlbUNyZWF0b3IgPSB2b2lkIDA7XG5jb25zdCBlbGVtQ3JlYXRvciA9IChlbGVtXykgPT4gKGNsYXNzXykgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1fKTtcbiAgICByZXR1cm4gY2xhc3NfLnJlZHVjZSgoZWxlbSwgY3VyckNsYXNzKSA9PiB7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjdXJyQ2xhc3MpO1xuICAgICAgICByZXR1cm4gZWxlbTtcbiAgICB9LCBlbGVtZW50KTtcbn07XG5leHBvcnRzLmVsZW1DcmVhdG9yID0gZWxlbUNyZWF0b3I7XG5jb25zdCBhZGRBdHRyaWJ1dGVUb0VsZW0gPSAoYXR0clZhbHNfKSA9PiAoZWxlbV8pID0+IHtcbiAgICByZXR1cm4gYXR0clZhbHNfLnJlZHVjZSgoZWxlbWVudCwgY3VycikgPT4ge1xuICAgICAgICBpZiAoY3Vyci5sZW5ndGggPiAyKVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbGVtZW50LnNldEF0dHJpYnV0ZShjdXJyWzBdLCBjdXJyWzFdKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSwgZWxlbV8pO1xufTtcbmV4cG9ydHMuYWRkQXR0cmlidXRlVG9FbGVtID0gYWRkQXR0cmlidXRlVG9FbGVtO1xuY29uc3QgYWRkU3R5bGVUb0VsZW0gPSAoc3R5bGVQcm9wVmFsc18pID0+IChlbGVtXykgPT4ge1xuICAgIHJldHVybiBzdHlsZVByb3BWYWxzXy5yZWR1Y2UoKGVsZW1lbnQsIGN1cnIpID0+IHtcbiAgICAgICAgaWYgKGN1cnIubGVuZ3RoID4gMilcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShjdXJyWzBdLCBjdXJyWzFdKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSwgZWxlbV8pO1xufTtcbmV4cG9ydHMuYWRkU3R5bGVUb0VsZW0gPSBhZGRTdHlsZVRvRWxlbTtcbmNvbnN0IGFkZFRleHRUb0VsZW0gPSAodGV4dF8pID0+IChlbGVtXykgPT4ge1xuICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dF8pO1xuICAgIGVsZW1fID09PSBudWxsIHx8IGVsZW1fID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbGVtXy5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG4gICAgcmV0dXJuIGVsZW1fO1xufTtcbmV4cG9ydHMuYWRkVGV4dFRvRWxlbSA9IGFkZFRleHRUb0VsZW07XG5jb25zdCBhcHBlbmRFbGVtVG9QYXJlbnQgPSAocGFyZW50XykgPT4gKGNoaWxkXykgPT4ge1xuICAgIGlmIChjaGlsZF8pXG4gICAgICAgIHBhcmVudF8gPT09IG51bGwgfHwgcGFyZW50XyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyZW50Xy5hcHBlbmRDaGlsZChjaGlsZF8pO1xufTtcbmV4cG9ydHMuYXBwZW5kRWxlbVRvUGFyZW50ID0gYXBwZW5kRWxlbVRvUGFyZW50O1xuY29uc3QgY3JlYXRlSW1hZ2UgPSAoc291cmNlXykgPT4gKGNsYXNzXykgPT4gKGFsdF8pID0+ICh0aXRsZV8pID0+IHtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9IHNvdXJjZV87XG4gICAgaW1hZ2UuYWx0ID0gYWx0XztcbiAgICBpbWFnZS50aXRsZSA9IHRpdGxlXztcbiAgICByZXR1cm4gY2xhc3NfLnJlZHVjZSgoZWxlbSwgY3VyckNsYXNzKSA9PiB7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjdXJyQ2xhc3MpO1xuICAgICAgICByZXR1cm4gZWxlbTtcbiAgICB9LCBpbWFnZSk7XG59O1xuZXhwb3J0cy5jcmVhdGVJbWFnZSA9IGNyZWF0ZUltYWdlO1xuY29uc3QgYWRkRXZ0TGlzdGVuZXIgPSAoZXZ0XykgPT4gKGhhbmRsZUV2dF8pID0+IChlbGVtXykgPT4ge1xuICAgIGVsZW1fID09PSBudWxsIHx8IGVsZW1fID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbGVtXy5hZGRFdmVudExpc3RlbmVyKGV2dF8sIGhhbmRsZUV2dF8pO1xuICAgIHJldHVybiBlbGVtXztcbn07XG5leHBvcnRzLmFkZEV2dExpc3RlbmVyID0gYWRkRXZ0TGlzdGVuZXI7XG4vLyBmdW5jdGlvbiBwaXBlPFY+KC4uLmZ1bmNzOiBBcnJheTwoXzogVikgPT4gVj4pOiAoXzogVikgPT4gViB8IG51bGwgfCB2b2lkIHtcbi8vIFx0cmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogVikge1xuLy8gXHRcdHJldHVybiBmdW5jcy5yZWR1Y2UoKHZhbCwgZnVuYykgPT4ge1xuLy8gXHRcdFx0cmV0dXJuIGZ1bmModmFsKVxuLy8gXHRcdH0sIHZhbHVlKVxuLy8gXHR9XG4vLyB9XG5jb25zdCBwaXBlID0gKC4uLmZ1bmNzKSA9PiAodmFsdWUpID0+IGZ1bmNzLnJlZHVjZSgocmVzLCBmdW5jKSA9PiBmdW5jKHJlcyksIHZhbHVlKTtcbmV4cG9ydHMucGlwZSA9IHBpcGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlQWRkTmV3UHJvamVjdEljb25DbGljayA9IHZvaWQgMDtcbmNvbnN0IHByb2plY3RNb2RhbF8xID0gcmVxdWlyZShcIi4uL21vZGFscy9wcm9qZWN0TW9kYWxcIik7XG5jb25zdCBoYW5kbGVBZGROZXdQcm9qZWN0SWNvbkNsaWNrID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgKDAsIHByb2plY3RNb2RhbF8xLnByb2plY3RNb2RhbCkoKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdC1jb250YWluZXInKTtcbiAgICBpZiAoYWRkUHJvamVjdE1vZGFsKSB7XG4gICAgICAgIGFkZFByb2plY3RNb2RhbC5zdHlsZS52aXNpYmlsaXR5ID1cbiAgICAgICAgICAgIChhZGRQcm9qZWN0TW9kYWwgPT09IG51bGwgfHwgYWRkUHJvamVjdE1vZGFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhZGRQcm9qZWN0TW9kYWwuc3R5bGUudmlzaWJpbGl0eSkgPT09ICd2aXNpYmxlJyA/ICdoaWRkZW4nIDogJ3Zpc2libGUnO1xuICAgIH1cbn07XG5leHBvcnRzLmhhbmRsZUFkZE5ld1Byb2plY3RJY29uQ2xpY2sgPSBoYW5kbGVBZGROZXdQcm9qZWN0SWNvbkNsaWNrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZUFkZE5ld1RvZG9JY29uQ2xpY2sgPSB2b2lkIDA7XG5jb25zdCB0b2RvTW9kYWxfMSA9IHJlcXVpcmUoXCIuLi9tb2RhbHMvdG9kb01vZGFsXCIpO1xuY29uc3QgaGFuZGxlQWRkTmV3VG9kb0ljb25DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGNvbnN0IHByb2plY3REYXRhTmFtZSA9IChfYSA9IHRoaXMuZGF0YXNldC5uYW1lKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJztcbiAgICBjb25zdCBwcm9qZWN0RGF0YUNvbG91ciA9IChfYiA9IHRoaXMuZGF0YXNldC5jb2xvdXIpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICcnO1xuICAgICgwLCB0b2RvTW9kYWxfMS50b2RvTW9kYWwpKHByb2plY3REYXRhTmFtZSwgcHJvamVjdERhdGFDb2xvdXIpO1xuICAgIGNvbnN0IGFkZFRvZG9Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lcicpO1xuICAgIGlmIChhZGRUb2RvTW9kYWwpXG4gICAgICAgIGFkZFRvZG9Nb2RhbC5zdHlsZS52aXNpYmlsaXR5ID1cbiAgICAgICAgICAgIChhZGRUb2RvTW9kYWwgPT09IG51bGwgfHwgYWRkVG9kb01vZGFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhZGRUb2RvTW9kYWwuc3R5bGUudmlzaWJpbGl0eSkgPT09ICd2aXNpYmxlJyA/ICdoaWRkZW4nIDogJ3Zpc2libGUnO1xufTtcbmV4cG9ydHMuaGFuZGxlQWRkTmV3VG9kb0ljb25DbGljayA9IGhhbmRsZUFkZE5ld1RvZG9JY29uQ2xpY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlQXJjaGl2ZWRUYWJDbGljayA9IHZvaWQgMDtcbmNvbnN0IGFkZFRvZG9zVG9Db250ZW50XzEgPSByZXF1aXJlKFwiLi4vcHJvamVjdHNBbmRUb2Rvcy9hZGRUb2Rvc1RvQ29udGVudFwiKTtcbmNvbnN0IGVsZW1lbnRfY3JlYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50LWNyZWF0b3JzXCIpO1xuY29uc3QgaGFuZGxlQXJjaGl2ZWRUYWJDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2E7XG4gICAgLy9yZW1vdmUgY29udGVudCBzZWN0aW9uJ3MgcHJldmlvdXMgY29udGVudHNcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBjb250ZW50Qm90dG9tUHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWJvdHRvbScpO1xuICAgIGNvbnRlbnRCb3R0b21QcmV2ID09PSBudWxsIHx8IGNvbnRlbnRCb3R0b21QcmV2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250ZW50Qm90dG9tUHJldi5yZW1vdmUoKTtcbiAgICAvL3JlbmRlciBuZXcgY29udGVudFxuICAgIGNvbnN0IGNvbnRlbnRCb3R0b20gPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydjb250ZW50LWJvdHRvbSddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoY29udGVudCkoY29udGVudEJvdHRvbSk7XG4gICAgY29uc3QgYXJjaGl2ZWRTdG9yYWdlQXJyID0gSlNPTi5wYXJzZSgoX2EgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJjaGl2ZWQnKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycpO1xuICAgIC8vcmVuZGVyIHRvZG9zIHdpdGggY2hlY2tib3ggZGlzYWJsZWRcbiAgICBhcmNoaXZlZFN0b3JhZ2VBcnIuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAoMCwgYWRkVG9kb3NUb0NvbnRlbnRfMS5hZGRUb2Rvc1RvQ29udGVudCkocHJvamVjdCwgdHJ1ZSk7XG4gICAgfSk7XG59O1xuZXhwb3J0cy5oYW5kbGVBcmNoaXZlZFRhYkNsaWNrID0gaGFuZGxlQXJjaGl2ZWRUYWJDbGljaztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVDcmVhdGVkVGFic0NsaWNrID0gdm9pZCAwO1xuY29uc3QgYWRkVG9kb3NUb0NvbnRlbnRfMSA9IHJlcXVpcmUoXCIuLi9wcm9qZWN0c0FuZFRvZG9zL2FkZFRvZG9zVG9Db250ZW50XCIpO1xuY29uc3QgZWxlbWVudF9jcmVhdG9yc18xID0gcmVxdWlyZShcIi4uL2VsZW1lbnQtY3JlYXRvcnNcIik7XG5jb25zdCBoYW5kbGVDcmVhdGVkVGFic0NsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIC8vcmVtb3ZlIGNvbnRlbnQgc2VjdGlvbidzIHByZXZpb3VzIGNvbnRlbnRzXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3QgY29udGVudEJvdHRvbVByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1ib3R0b20nKTtcbiAgICBjb250ZW50Qm90dG9tUHJldiA9PT0gbnVsbCB8fCBjb250ZW50Qm90dG9tUHJldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGVudEJvdHRvbVByZXYucmVtb3ZlKCk7XG4gICAgY29uc3QgY29udGVudEJvdHRvbSA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2NvbnRlbnQtYm90dG9tJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShjb250ZW50KShjb250ZW50Qm90dG9tKTtcbiAgICBjb25zdCB0aGlzUHJvamVjdE5hbWUgPSB0aGlzLnRleHRDb250ZW50O1xuICAgIGNvbnN0IHByb2plY3RBbmRUb2Rvc09iakFyciA9IFtdO1xuICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKGtleSA9PT0gdGhpc1Byb2plY3ROYW1lKSB7XG4gICAgICAgICAgICBwcm9qZWN0QW5kVG9kb3NPYmpBcnIucHVzaChKU09OLnBhcnNlKChfYSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXNQcm9qZWN0TmFtZSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvL3JlbmRlciB0b2Rvc1xuICAgIHByb2plY3RBbmRUb2Rvc09iakFyci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICgwLCBhZGRUb2Rvc1RvQ29udGVudF8xLmFkZFRvZG9zVG9Db250ZW50KShwcm9qZWN0KTtcbiAgICB9KTtcbn07XG5leHBvcnRzLmhhbmRsZUNyZWF0ZWRUYWJzQ2xpY2sgPSBoYW5kbGVDcmVhdGVkVGFic0NsaWNrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZUZpbHRlckJ5UHJpb3JpdHlDbGljayA9IHZvaWQgMDtcbmNvbnN0IGVsZW1lbnRfY3JlYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50LWNyZWF0b3JzXCIpO1xuY29uc3QgYWRkVG9kb3NUb0NvbnRlbnRfMSA9IHJlcXVpcmUoXCIuLi9wcm9qZWN0c0FuZFRvZG9zL2FkZFRvZG9zVG9Db250ZW50XCIpO1xuY29uc3QgaGFuZGxlRmlsdGVyQnlQcmlvcml0eUNsaWNrID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgLy9yZW1vdmUgY29udGVudCBzZWN0aW9uJ3MgcHJldmlvdXMgY29udGVudHNcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBjb250ZW50Qm90dG9tUHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWJvdHRvbScpO1xuICAgIGNvbnRlbnRCb3R0b21QcmV2ID09PSBudWxsIHx8IGNvbnRlbnRCb3R0b21QcmV2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250ZW50Qm90dG9tUHJldi5yZW1vdmUoKTtcbiAgICAvL3JlbmRlciBuZXcgY29udGVudFxuICAgIGNvbnN0IGNvbnRlbnRCb3R0b20gPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydjb250ZW50LWJvdHRvbSddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoY29udGVudCkoY29udGVudEJvdHRvbSk7XG4gICAgY29uc3Qgc2VsZWN0ZWRQcmlvcml0eSA9IHRoaXMudmFsdWU7XG4gICAgY29uc3QgcHJvamVjdEFyciA9IFtdO1xuICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKGtleSAhPT0gJ3Byb2plY3ROYW1lcycgJiYga2V5ICE9PSAnYXJjaGl2ZWQnKSB7XG4gICAgICAgICAgICBwcm9qZWN0QXJyLnB1c2goSlNPTi5wYXJzZSgoX2EgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgZmlsdGVyZWRQcmlvcml0eUFyciA9IFtdO1xuICAgIHByb2plY3RBcnIuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgICAgIGlmICh0b2RvLnRvZG9Qcmlvcml0eSA9PT0gc2VsZWN0ZWRQcmlvcml0eSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXAgPSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3ROYW1lOiBwcm9qZWN0LnByb2plY3QucHJvamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q29sb3VyOiBwcm9qZWN0LnByb2plY3QucHJvamVjdENvbG91cixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9kb3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvTmFtZTogdG9kby50b2RvTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb246IHRvZG8udG9kb0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EdWVEYXRlOiB0b2RvLnRvZG9EdWVEYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eTogdG9kby50b2RvUHJpb3JpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZmlsdGVyZWRQcmlvcml0eUFyci5wdXNoKHRlbXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICAvL2lmIHNlbGVjdCBpbnB1dCB0ZXh0IGlzIGNsaWNrZWQsIGFsbCAnbGl2ZScgcHJvamVjdHMgZGlzcGxheWVkXG4gICAgaWYgKHNlbGVjdGVkUHJpb3JpdHkgPT09ICcnKSB7XG4gICAgICAgIHByb2plY3RBcnIuZm9yRWFjaCgocHJvamVjdCkgPT4gKDAsIGFkZFRvZG9zVG9Db250ZW50XzEuYWRkVG9kb3NUb0NvbnRlbnQpKHByb2plY3QpKTtcbiAgICB9XG4gICAgLy9yZW5kZXIgdG9kb3NcbiAgICBmaWx0ZXJlZFByaW9yaXR5QXJyLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgKDAsIGFkZFRvZG9zVG9Db250ZW50XzEuYWRkVG9kb3NUb0NvbnRlbnQpKHByb2plY3QpO1xuICAgIH0pO1xufTtcbmV4cG9ydHMuaGFuZGxlRmlsdGVyQnlQcmlvcml0eUNsaWNrID0gaGFuZGxlRmlsdGVyQnlQcmlvcml0eUNsaWNrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZVByb2plY3RDbG9zZUljb25DbGljayA9IHZvaWQgMDtcbmNvbnN0IGhhbmRsZVByb2plY3RDbG9zZUljb25DbGljayA9IGZ1bmN0aW9uIChldikge1xuICAgIGNvbnN0IGFkZFByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgIGlmIChhZGRQcm9qZWN0TW9kYWwpXG4gICAgICAgIGFkZFByb2plY3RNb2RhbC5yZW1vdmUoKTtcbn07XG5leHBvcnRzLmhhbmRsZVByb2plY3RDbG9zZUljb25DbGljayA9IGhhbmRsZVByb2plY3RDbG9zZUljb25DbGljaztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVQcm9qZWN0Rm9ybVN1Ym1pdCA9IHZvaWQgMDtcbmNvbnN0IGFkZFByb2plY3RUb1NpZGViYXJfMSA9IHJlcXVpcmUoXCIuLi9wcm9qZWN0c0FuZFRvZG9zL2FkZFByb2plY3RUb1NpZGViYXJcIik7XG5jb25zdCBoYW5kbGVQcm9qZWN0Rm9ybVN1Ym1pdCA9IGZ1bmN0aW9uIChldikge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGFkZFByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHByb2plY3RGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybU5hbWUgPSAoX2IgPSAoX2EgPSBwcm9qZWN0Rm9ybURhdGEuZ2V0KCdhZGRQcm9qZWN0LW5hbWUnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICcnO1xuICAgIGNvbnN0IHByb2plY3RGb3JtQ29sb3VyID0gKF9kID0gKF9jID0gcHJvamVjdEZvcm1EYXRhLmdldCgnYWRkUHJvamVjdC1jb2xvdXInKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnRvU3RyaW5nKCkpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6ICcnO1xuICAgIC8vaWYgJ3Byb2plY3ROYW1lcycgZG9lc24ndCBleGlzdCwgY3JlYXRlIGl0LCBvdGhlcndpc2UgZG8gbm90aGluZ1xuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3ROYW1lcycpKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0TmFtZXMnLCBKU09OLnN0cmluZ2lmeShbXSkpO1xuICAgIH1cbiAgICBjb25zdCBzdG9yZVByb2plY3QgPSAoZnVuY3Rpb24gKHByb2plY3RGb3JtTmFtZV8pIHtcbiAgICAgICAgLy9pZiBrZXkgaW4gbG9jYWxzdG9yYWdlIGlzIHByb2plY3ROYW1lcywgdGhlbiBnZXQgdGhlIHZhbHVlcyBhc1xuICAgICAgICAvL2FuIGFycmF5XG4gICAgICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAncHJvamVjdE5hbWVzJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXNTZXQgPSBuZXcgU2V0KEpTT04ucGFyc2UoKF9hID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycpKTtcbiAgICAgICAgICAgICAgICBbJ3RvZGF5JywgJ3VwY29taW5nJywgJ2FyY2hpdmVkJywgJ3Byb2plY3RzJ10uZm9yRWFjaCgobmFtZSkgPT4ga2V5c1NldC5hZGQobmFtZSkpO1xuICAgICAgICAgICAgICAgIC8vaWYgbmFtZSBhbHJlYWR5IHByZXNlbnRcbiAgICAgICAgICAgICAgICBpZiAoa2V5c1NldC5oYXMocHJvamVjdEZvcm1OYW1lXykpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoYCR7cHJvamVjdEZvcm1OYW1lX30gYWxyZWFkeSBleGlzdHMgYXMgYSBwcm9qZWN0ICjvvaHigKLMge+4v+KAosyA772hKSAgUGxlYXNlIGNob29zZSBhbm90aGVyIG5hbWUuYCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vaWYgbmV3IG5hbWUsIHB1c2ggdG8gYXJyIGFuZCB0aGVuIHN0b3JlIGFycmF5IGluIGxvY2FsU3RvcmFnZVxuICAgICAgICAgICAgICAgICAgICBrZXlzU2V0LmFkZChwcm9qZWN0Rm9ybU5hbWVfKTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShBcnJheS5mcm9tKGtleXNTZXQpKSk7XG4gICAgICAgICAgICAgICAgICAgICgwLCBhZGRQcm9qZWN0VG9TaWRlYmFyXzEuYWRkUHJvamVjdFRvU2lkZWJhcikocHJvamVjdEZvcm1OYW1lLCBwcm9qZWN0Rm9ybUNvbG91cik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KShwcm9qZWN0Rm9ybU5hbWUpO1xuICAgIGFkZFByb2plY3RNb2RhbCA9PT0gbnVsbCB8fCBhZGRQcm9qZWN0TW9kYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFkZFByb2plY3RNb2RhbC5yZW1vdmUoKTtcbn07XG5leHBvcnRzLmhhbmRsZVByb2plY3RGb3JtU3VibWl0ID0gaGFuZGxlUHJvamVjdEZvcm1TdWJtaXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlUHJvamVjdHNUYWJDbGljayA9IHZvaWQgMDtcbmNvbnN0IGFkZFRvZG9zVG9Db250ZW50XzEgPSByZXF1aXJlKFwiLi4vcHJvamVjdHNBbmRUb2Rvcy9hZGRUb2Rvc1RvQ29udGVudFwiKTtcbmNvbnN0IGVsZW1lbnRfY3JlYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50LWNyZWF0b3JzXCIpO1xuY29uc3QgaGFuZGxlUHJvamVjdHNUYWJDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAvL3JlbW92ZSBjb250ZW50IHNlY3Rpb24ncyBwcmV2aW91cyBjb250ZW50c1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IGNvbnRlbnRCb3R0b21QcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYm90dG9tJyk7XG4gICAgY29udGVudEJvdHRvbVByZXYgPT09IG51bGwgfHwgY29udGVudEJvdHRvbVByZXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRlbnRCb3R0b21QcmV2LnJlbW92ZSgpO1xuICAgIC8vcmVuZGVyIG5ldyBjb250ZW50XG4gICAgY29uc3QgY29udGVudEJvdHRvbSA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2NvbnRlbnQtYm90dG9tJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShjb250ZW50KShjb250ZW50Qm90dG9tKTtcbiAgICBjb25zdCBwcm9qZWN0c0FuZFRvZG9zQXJyID0gW107XG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoa2V5ICE9PSAncHJvamVjdE5hbWVzJyAmJiBrZXkgIT09ICdhcmNoaXZlZCcpIHtcbiAgICAgICAgICAgIHByb2plY3RzQW5kVG9kb3NBcnIucHVzaChKU09OLnBhcnNlKChfYSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvL3JlbmRlciB0b2Rvc1xuICAgIHByb2plY3RzQW5kVG9kb3NBcnIuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAoMCwgYWRkVG9kb3NUb0NvbnRlbnRfMS5hZGRUb2Rvc1RvQ29udGVudCkocHJvamVjdCk7XG4gICAgfSk7XG59O1xuZXhwb3J0cy5oYW5kbGVQcm9qZWN0c1RhYkNsaWNrID0gaGFuZGxlUHJvamVjdHNUYWJDbGljaztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVTZWFyY2hGb3JtU3VibWl0ID0gdm9pZCAwO1xuY29uc3QgYWRkVG9kb3NUb0NvbnRlbnRfMSA9IHJlcXVpcmUoXCIuLi9wcm9qZWN0c0FuZFRvZG9zL2FkZFRvZG9zVG9Db250ZW50XCIpO1xuY29uc3QgZWxlbWVudF9jcmVhdG9yc18xID0gcmVxdWlyZShcIi4uL2VsZW1lbnQtY3JlYXRvcnNcIik7XG5jb25zdCBoYW5kbGVTZWFyY2hGb3JtU3VibWl0ID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vcmVtb3ZlIGNvbnRlbnQgc2VjdGlvbidzIHByZXZpb3VzIGNvbnRlbnRzXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3QgY29udGVudEJvdHRvbVByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1ib3R0b20nKTtcbiAgICBjb250ZW50Qm90dG9tUHJldiA9PT0gbnVsbCB8fCBjb250ZW50Qm90dG9tUHJldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGVudEJvdHRvbVByZXYucmVtb3ZlKCk7XG4gICAgLy9yZW5kZXIgbmV3IGNvbnRlbnQgYW5kIGFwcGVuZCB0byB0aGlzXG4gICAgY29uc3QgY29udGVudEJvdHRvbSA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2NvbnRlbnQtYm90dG9tJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShjb250ZW50KShjb250ZW50Qm90dG9tKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcbiAgICBjb25zdCBzZWFyY2hUZXJtID0gKF9iID0gKF9hID0gZm9ybURhdGEuZ2V0KCdzZWFyY2gtdG9kbycpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnJztcbiAgICBjb25zdCBwcm9qZWN0QXJyID0gW107XG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoa2V5ICE9PSAncHJvamVjdE5hbWVzJyAmJiBrZXkgIT09ICdhcmNoaXZlZCcpIHtcbiAgICAgICAgICAgIHByb2plY3RBcnIucHVzaChKU09OLnBhcnNlKChfYSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBzZWFyY2hSZWdFeCA9IG5ldyBSZWdFeHAoYCR7c2VhcmNoVGVybX1gKTtcbiAgICBjb25zdCBtYXRjaGVkUHJvakFuZFRvZG9zQXJyID0gW107XG4gICAgcHJvamVjdEFyci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICAgICAgLy8gaWYgaXQgbWF0Y2hlcyB0b2RvTmFtZVxuICAgICAgICAgICAgaWYgKHNlYXJjaFJlZ0V4LnRlc3QodG9kby50b2RvTmFtZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXAgPSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3ROYW1lOiBwcm9qZWN0LnByb2plY3QucHJvamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q29sb3VyOiBwcm9qZWN0LnByb2plY3QucHJvamVjdENvbG91cixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9kb3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvTmFtZTogdG9kby50b2RvTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb246IHRvZG8udG9kb0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EdWVEYXRlOiB0b2RvLnRvZG9EdWVEYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eTogdG9kby50b2RvUHJpb3JpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbWF0Y2hlZFByb2pBbmRUb2Rvc0Fyci5wdXNoKHRlbXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZWxzZSBpdCBtYXRjaGVzIGRlc2NyaXB0aW9uIHRleHRcbiAgICAgICAgICAgIGVsc2UgaWYgKHNlYXJjaFJlZ0V4LnRlc3QodG9kby50b2RvRGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0ge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZTogcHJvamVjdC5wcm9qZWN0LnByb2plY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbG91cjogcHJvamVjdC5wcm9qZWN0LnByb2plY3RDb2xvdXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb05hbWU6IHRvZG8udG9kb05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uOiB0b2RvLnRvZG9EZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRHVlRGF0ZTogdG9kby50b2RvRHVlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHk6IHRvZG8udG9kb1ByaW9yaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG1hdGNoZWRQcm9qQW5kVG9kb3NBcnIucHVzaCh0ZW1wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vZWxzZSBpdCBtYXRjaGVzIGR1ZURhdGVcbiAgICAgICAgICAgIGVsc2UgaWYgKHNlYXJjaFJlZ0V4LnRlc3QodG9kby50b2RvRHVlRGF0ZS50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXAgPSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3ROYW1lOiBwcm9qZWN0LnByb2plY3QucHJvamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q29sb3VyOiBwcm9qZWN0LnByb2plY3QucHJvamVjdENvbG91cixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9kb3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvTmFtZTogdG9kby50b2RvTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb246IHRvZG8udG9kb0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EdWVEYXRlOiB0b2RvLnRvZG9EdWVEYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eTogdG9kby50b2RvUHJpb3JpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbWF0Y2hlZFByb2pBbmRUb2Rvc0Fyci5wdXNoKHRlbXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9lbHNlIGl0IG1hdGNoZXMgcHJpb3JpdHlcbiAgICAgICAgICAgIGVsc2UgaWYgKHNlYXJjaFJlZ0V4LnRlc3QodG9kby50b2RvUHJpb3JpdHkudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0ge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZTogcHJvamVjdC5wcm9qZWN0LnByb2plY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbG91cjogcHJvamVjdC5wcm9qZWN0LnByb2plY3RDb2xvdXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb05hbWU6IHRvZG8udG9kb05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uOiB0b2RvLnRvZG9EZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRHVlRGF0ZTogdG9kby50b2RvRHVlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHk6IHRvZG8udG9kb1ByaW9yaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG1hdGNoZWRQcm9qQW5kVG9kb3NBcnIucHVzaCh0ZW1wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy9yZW5kZXIgdG9kb3NcbiAgICBtYXRjaGVkUHJvakFuZFRvZG9zQXJyLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgKDAsIGFkZFRvZG9zVG9Db250ZW50XzEuYWRkVG9kb3NUb0NvbnRlbnQpKHByb2plY3QpO1xuICAgIH0pO1xufTtcbmV4cG9ydHMuaGFuZGxlU2VhcmNoRm9ybVN1Ym1pdCA9IGhhbmRsZVNlYXJjaEZvcm1TdWJtaXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlU29ydEJ5UHJpb3JpdHlDbGljayA9IHZvaWQgMDtcbmNvbnN0IGVsZW1lbnRfY3JlYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50LWNyZWF0b3JzXCIpO1xuY29uc3QgYWRkVG9kb3NUb0NvbnRlbnRfMSA9IHJlcXVpcmUoXCIuLi9wcm9qZWN0c0FuZFRvZG9zL2FkZFRvZG9zVG9Db250ZW50XCIpO1xuY29uc3QgaGFuZGxlU29ydEJ5UHJpb3JpdHlDbGljayA9IGZ1bmN0aW9uIChldikge1xuICAgIC8vcmVtb3ZlIGNvbnRlbnQgc2VjdGlvbidzIHByZXZpb3VzIGNvbnRlbnRzXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3QgY29udGVudEJvdHRvbVByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1ib3R0b20nKTtcbiAgICBjb250ZW50Qm90dG9tUHJldiA9PT0gbnVsbCB8fCBjb250ZW50Qm90dG9tUHJldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGVudEJvdHRvbVByZXYucmVtb3ZlKCk7XG4gICAgLy9yZW5kZXIgbmV3IGNvbnRlbnRcbiAgICBjb25zdCBjb250ZW50Qm90dG9tID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnY29udGVudC1ib3R0b20nXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGNvbnRlbnQpKGNvbnRlbnRCb3R0b20pO1xuICAgIGNvbnN0IHNlbGVjdGVkU29ydFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICBjb25zdCBwcm9qZWN0QXJyID0gW107XG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoa2V5ICE9PSAncHJvamVjdE5hbWVzJyAmJiBrZXkgIT09ICdhcmNoaXZlZCcpIHtcbiAgICAgICAgICAgIHByb2plY3RBcnIucHVzaChKU09OLnBhcnNlKChfYSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvL2Fzc2lnbnMgYSBrZXkgdG8gZWFjaCBwcm9qZWN0IGJhc2VkIG9uIGl0cyB0b2RvXG4gICAgY29uc3QgcHJvamVjdE1hcCA9IHByb2plY3RBcnIucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcbiAgICAgICAgY3Vyci50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICBpZiAodG9kby50b2RvUHJpb3JpdHkgPT09ICdpbW1lZGlhdGUnKSB7XG4gICAgICAgICAgICAgICAgYWNjLnNldCg1LCB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3ROYW1lOiBjdXJyLnByb2plY3QucHJvamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q29sb3VyOiBjdXJyLnByb2plY3QucHJvamVjdENvbG91cixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9kb3M6IFt0b2RvXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRvZG8udG9kb1ByaW9yaXR5ID09PSAndXJnZW50Jykge1xuICAgICAgICAgICAgICAgIGFjYy5zZXQoNCwge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZTogY3Vyci5wcm9qZWN0LnByb2plY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbG91cjogY3Vyci5wcm9qZWN0LnByb2plY3RDb2xvdXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zOiBbdG9kb10sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2RvLnRvZG9Qcmlvcml0eSA9PT0gJ2hpZ2gnKSB7XG4gICAgICAgICAgICAgICAgYWNjLnNldCgzLCB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3ROYW1lOiBjdXJyLnByb2plY3QucHJvamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q29sb3VyOiBjdXJyLnByb2plY3QucHJvamVjdENvbG91cixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9kb3M6IFt0b2RvXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRvZG8udG9kb1ByaW9yaXR5ID09PSAnbWVkaXVtJykge1xuICAgICAgICAgICAgICAgIGFjYy5zZXQoMiwge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZTogY3Vyci5wcm9qZWN0LnByb2plY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbG91cjogY3Vyci5wcm9qZWN0LnByb2plY3RDb2xvdXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zOiBbdG9kb10sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2RvLnRvZG9Qcmlvcml0eSA9PT0gJ2xvdycpIHtcbiAgICAgICAgICAgICAgICBhY2Muc2V0KDEsIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE5hbWU6IGN1cnIucHJvamVjdC5wcm9qZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDb2xvdXI6IGN1cnIucHJvamVjdC5wcm9qZWN0Q29sb3VyLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b2RvczogW3RvZG9dLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBuZXcgTWFwKCkpO1xuICAgIC8vaW4gb3JkZXIgdG8gdXNlIHRoZSBzb3J0IG1ldGhvZFxuICAgIGNvbnN0IHByb2plY3RNYXBBcnIgPSBBcnJheS5mcm9tKHByb2plY3RNYXApO1xuICAgIGlmIChzZWxlY3RlZFNvcnRWYWx1ZSA9PT0gJ2xvd1RvSW1tZWRpYXRlJykge1xuICAgICAgICBwcm9qZWN0TWFwQXJyLnNvcnQoKGEsIGIpID0+IGFbMF0gLSBiWzBdKTtcbiAgICB9XG4gICAgaWYgKHNlbGVjdGVkU29ydFZhbHVlID09PSAnaW1tZWRpYXRlVG9Mb3cnKSB7XG4gICAgICAgIHByb2plY3RNYXBBcnIuc29ydCgoYSwgYikgPT4gYlswXSAtIGFbMF0pO1xuICAgIH1cbiAgICAvL2lmIHNlbGVjdCBpbnB1dCB0ZXh0IGlzIGNsaWNrZWQsIGFsbCAnbGl2ZScgcHJvamVjdHMgZGlzcGxheWVkXG4gICAgaWYgKHNlbGVjdGVkU29ydFZhbHVlID09PSAnJykge1xuICAgICAgICBwcm9qZWN0QXJyLmZvckVhY2goKHByb2plY3QpID0+ICgwLCBhZGRUb2Rvc1RvQ29udGVudF8xLmFkZFRvZG9zVG9Db250ZW50KShwcm9qZWN0KSk7XG4gICAgfVxuICAgIC8vcmVuZGVyIHRoZSB0b2Rvc1xuICAgIHByb2plY3RNYXBBcnIuZm9yRWFjaCgobnVtUHJvamVjdCkgPT4ge1xuICAgICAgICAoMCwgYWRkVG9kb3NUb0NvbnRlbnRfMS5hZGRUb2Rvc1RvQ29udGVudCkobnVtUHJvamVjdFsxXSk7XG4gICAgfSk7XG59O1xuZXhwb3J0cy5oYW5kbGVTb3J0QnlQcmlvcml0eUNsaWNrID0gaGFuZGxlU29ydEJ5UHJpb3JpdHlDbGljaztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVUb2RheVRhYkNsaWNrID0gdm9pZCAwO1xuY29uc3QgZWxlbWVudF9jcmVhdG9yc18xID0gcmVxdWlyZShcIi4uL2VsZW1lbnQtY3JlYXRvcnNcIik7XG5jb25zdCBhZGRUb2Rvc1RvQ29udGVudF8xID0gcmVxdWlyZShcIi4uL3Byb2plY3RzQW5kVG9kb3MvYWRkVG9kb3NUb0NvbnRlbnRcIik7XG5jb25zdCBoYW5kbGVUb2RheVRhYkNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIC8vcmVtb3ZlIGNvbnRlbnQgc2VjdGlvbidzIHByZXZpb3VzIGNvbnRlbnRzXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3QgY29udGVudEJvdHRvbVByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1ib3R0b20nKTtcbiAgICBjb250ZW50Qm90dG9tUHJldiA9PT0gbnVsbCB8fCBjb250ZW50Qm90dG9tUHJldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGVudEJvdHRvbVByZXYucmVtb3ZlKCk7XG4gICAgLy9yZW5kZXIgbmV3IGNvbnRlbnQgYW5kIGFwcGVuZCB0byB0aGlzXG4gICAgY29uc3QgY29udGVudEJvdHRvbSA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2NvbnRlbnQtYm90dG9tJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShjb250ZW50KShjb250ZW50Qm90dG9tKTtcbiAgICBjb25zdCBwcm9qZWN0QXJyID0gW107XG4gICAgLy9ncmFiIGFsbCB0aGUgcHJvamVjdHMgZXhjZXB0IG9uZXMgc3BlY2lmaWVkXG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoa2V5ICE9PSAncHJvamVjdE5hbWVzJyAmJiBrZXkgIT09ICdhcmNoaXZlZCcpIHtcbiAgICAgICAgICAgIHByb2plY3RBcnIucHVzaChKU09OLnBhcnNlKChfYSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGRhdGUgPSBub3cuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IG1vbnRoID0gbm93LmdldE1vbnRoKCkgKyAxO1xuICAgIGNvbnN0IHllYXIgPSBub3cuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCB0b2RheSA9IGAke3llYXJ9LSR7bW9udGggPCAxMCA/ICcwJyArIG1vbnRoIDogbW9udGh9LSR7ZGF0ZSA8IDEwID8gJzAnICsgZGF0ZSA6IGRhdGV9YDtcbiAgICBjb25zdCBwcm9qQW5kVG9kb3NGaWx0ZXJlZCA9IFtdO1xuICAgIC8vZ3JhYiBlYWNoIHRvZG8gZHVlIHRvZGF5IGFuZCBwdXQgaW50byBjcmVhdGVkIHRlbXAgcHJvamVjdCBhbmQgcHVzaCBwcm9qZWN0IGludG8gZmlsdGVyZWQgYXJyYXlcbiAgICBwcm9qZWN0QXJyLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICBpZiAodG9kby50b2RvRHVlRGF0ZSA9PT0gdG9kYXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0ge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZTogcHJvamVjdC5wcm9qZWN0LnByb2plY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbG91cjogcHJvamVjdC5wcm9qZWN0LnByb2plY3RDb2xvdXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb05hbWU6IHRvZG8udG9kb05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uOiB0b2RvLnRvZG9EZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRHVlRGF0ZTogdG9kby50b2RvRHVlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHk6IHRvZG8udG9kb1ByaW9yaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHByb2pBbmRUb2Rvc0ZpbHRlcmVkLnB1c2godGVtcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vcmVuZGVyIHRoZSB0b2Rvc1xuICAgIHByb2pBbmRUb2Rvc0ZpbHRlcmVkLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgKDAsIGFkZFRvZG9zVG9Db250ZW50XzEuYWRkVG9kb3NUb0NvbnRlbnQpKHByb2plY3QpO1xuICAgIH0pO1xufTtcbmV4cG9ydHMuaGFuZGxlVG9kYXlUYWJDbGljayA9IGhhbmRsZVRvZGF5VGFiQ2xpY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlVG9kb0NoZWNrYm94Q29tcGxldGUgPSB2b2lkIDA7XG5jb25zdCBoYW5kbGVUb2RvQ2hlY2tib3hDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZiwgX2csIF9oLCBfaiwgX2s7XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJjaGl2ZWQnKSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXJjaGl2ZWQnLCBKU09OLnN0cmluZ2lmeShbXSkpO1xuICAgIH1cbiAgICBjb25zdCB0aGlzUHJvamVjdE5hbWUgPSAoX2IgPSAoX2EgPSB0aGlzLnByZXZpb3VzU2libGluZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRleHRDb250ZW50KSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnJztcbiAgICBjb25zdCB0aGlzUHJvamVjdENvbG91ciA9IHRoaXMudmFsdWU7XG4gICAgY29uc3QgdGhpc1RvZG9OYW1lID0gKF9nID0gKF9mID0gKF9lID0gKF9kID0gKF9jID0gdGhpcy5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmZpcnN0Q2hpbGQpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5uZXh0U2libGluZykgPT09IG51bGwgfHwgX2YgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9mLnRleHRDb250ZW50KSAhPT0gbnVsbCAmJiBfZyAhPT0gdm9pZCAwID8gX2cgOiAnJztcbiAgICBjb25zdCBwcm9qZWN0QXJyID0gW107XG4gICAgLy9ncmFiIHRoZSBlbnRpcmUgcHJvamVjdCBiZWxvbmdpbmcgdG8gY3VycmVudGx5IGNoZWNrZWQgdG9kb1xuICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKGtleSAhPT0gJ3Byb2plY3ROYW1lcycgJiYga2V5ICE9PSAnYXJjaGl2ZWQnKSB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSB0aGlzUHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0QXJyLnB1c2goSlNPTi5wYXJzZSgoX2EgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgYXJjaGl2ZWRUb2RvcyA9IEpTT04ucGFyc2UoKF9oID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FyY2hpdmVkJykpICE9PSBudWxsICYmIF9oICE9PSB2b2lkIDAgPyBfaCA6ICcnKTtcbiAgICBjb25zdCB0b2RvVG9CZUFyY2hpdmVkID0gW107XG4gICAgLy9ncmFiIHJlbWFpbmluZyB0b2RvcyB0aGF0IGFyZSBub3QgY3VycmVudCB0b2RvXG4gICAgY29uc3QgdG9kb3NBcnJGaWx0ZXJlZCA9IFtdO1xuICAgIHByb2plY3RBcnJbMF0udG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICBpZiAodG9kby50b2RvTmFtZSAhPT0gdGhpc1RvZG9OYW1lKSB7XG4gICAgICAgICAgICB0b2Rvc0FyckZpbHRlcmVkLnB1c2godG9kbyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0b2RvVG9CZUFyY2hpdmVkLnB1c2godG9kbyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvL3JlcGxhY2UgdGhlIHRvZG9zIG9mIHByb2plY3QgZnJvbSBzdG9yYWdlIHdpdGggZmlsdGVyZWQgdG9kb3Mgd2hpY2ggZG8gbm90IGhhdmUgdGhlIGN1cnJlbnRseSBjaGVja2VkIG9mZiB0b2RvXG4gICAgcHJvamVjdEFyclswXS50b2RvcyA9IHRvZG9zQXJyRmlsdGVyZWQ7XG4gICAgLy9wdXQgdGhlIHJlbWFpbmluZyB0b2RvcyBiYWNrIGludG8gcHJvamVjdCBhbmQgaW50byBzdG9yYWdlXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpc1Byb2plY3ROYW1lLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0QXJyWzBdKSk7XG4gICAgY29uc3QgcHJvamVjdEFuZFRvZG9Ub0JlQXJjaGl2ZWQgPSB7XG4gICAgICAgIHByb2plY3Q6IHsgcHJvamVjdE5hbWU6IHRoaXNQcm9qZWN0TmFtZSwgcHJvamVjdENvbG91cjogdGhpc1Byb2plY3RDb2xvdXIgfSxcbiAgICAgICAgdG9kb3M6IFt0b2RvVG9CZUFyY2hpdmVkWzBdXSxcbiAgICB9O1xuICAgIC8vc3RvcmUgdGhlIHJlbW92ZWQgdG9kbyB1bmRlciAnYXJjaGl2ZWQnXG4gICAgYXJjaGl2ZWRUb2Rvcy5wdXNoKHByb2plY3RBbmRUb2RvVG9CZUFyY2hpdmVkKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXJjaGl2ZWQnLCBKU09OLnN0cmluZ2lmeShhcmNoaXZlZFRvZG9zKSk7XG4gICAgLy9yZW1vdmUgdGhlIGN1cnJlbnQgdG9kbyB3aG9zZSBjaGVja2JveCBpcyBjbGlja2VkXG4gICAgKF9rID0gKF9qID0gdGhpcy5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfaiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2oucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgX2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9rLnJlbW92ZSgpO1xufTtcbmV4cG9ydHMuaGFuZGxlVG9kb0NoZWNrYm94Q29tcGxldGUgPSBoYW5kbGVUb2RvQ2hlY2tib3hDb21wbGV0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVUb2RvQ2xvc2VJY29uQ2xpY2sgPSB2b2lkIDA7XG5jb25zdCBoYW5kbGVUb2RvQ2xvc2VJY29uQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdG9kb01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJyk7XG4gICAgaWYgKHRvZG9Nb2RhbClcbiAgICAgICAgdG9kb01vZGFsLnJlbW92ZSgpO1xufTtcbmV4cG9ydHMuaGFuZGxlVG9kb0Nsb3NlSWNvbkNsaWNrID0gaGFuZGxlVG9kb0Nsb3NlSWNvbkNsaWNrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZVRvZG9Gb3JtU3VibWl0ID0gdm9pZCAwO1xuY29uc3Qgc3RvcmVQcm9qZWN0QW5kVG9kb3NGdWxsXzEgPSByZXF1aXJlKFwiLi4vcHJvamVjdHNBbmRUb2Rvcy9zdG9yZVByb2plY3RBbmRUb2Rvc0Z1bGxcIik7XG5jb25zdCBhZGRUb2Rvc1RvQ29udGVudF8xID0gcmVxdWlyZShcIi4uL3Byb2plY3RzQW5kVG9kb3MvYWRkVG9kb3NUb0NvbnRlbnRcIik7XG5jb25zdCBoYW5kbGVUb2RvRm9ybVN1Ym1pdCA9IGZ1bmN0aW9uIChldikge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mLCBfZywgX2gsIF9qLCBfaywgX2wsIF9tO1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHRvZG9Gb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcbiAgICBjb25zdCB0b2RvRm9ybVByb2plY3ROYW1lID0gKF9iID0gKF9hID0gdG9kb0Zvcm1EYXRhLmdldCgnYWRkVG9kby1wcm9qZWN0TmFtZScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9TdHJpbmcoKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJyc7XG4gICAgY29uc3QgdG9kb0Zvcm1Qcm9qZWN0Q29sb3VyID0gKF9kID0gKF9jID0gdG9kb0Zvcm1EYXRhLmdldCgnYWRkVG9kby1wcm9qZWN0Q29sb3VyJykpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy50b1N0cmluZygpKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiAnJztcbiAgICBjb25zdCB0b2RvRm9ybU5hbWUgPSAoX2YgPSAoX2UgPSB0b2RvRm9ybURhdGEuZ2V0KCdhZGRUb2RvLW5hbWUnKSkgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLnRvU3RyaW5nKCkpICE9PSBudWxsICYmIF9mICE9PSB2b2lkIDAgPyBfZiA6ICcnO1xuICAgIGNvbnN0IHRvZG9Gb3JtRGVzY3JpcHRpb24gPSAoX2ggPSAoX2cgPSB0b2RvRm9ybURhdGEuZ2V0KCdhZGRUb2RvLWRlc2NyaXB0aW9uJykpID09PSBudWxsIHx8IF9nID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZy50b1N0cmluZygpKSAhPT0gbnVsbCAmJiBfaCAhPT0gdm9pZCAwID8gX2ggOiAnJztcbiAgICBjb25zdCB0b2RvRm9ybUR1ZURhdGUgPSAoX2sgPSAoX2ogPSB0b2RvRm9ybURhdGEuZ2V0KCdhZGRUb2RvLWR1ZURhdGUnKSkgPT09IG51bGwgfHwgX2ogPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9qLnRvU3RyaW5nKCkpICE9PSBudWxsICYmIF9rICE9PSB2b2lkIDAgPyBfayA6ICcnO1xuICAgIGNvbnN0IHRvZG9Gb3JtU2VsZWN0UHJpb3JpdHkgPSAoX20gPSAoX2wgPSB0b2RvRm9ybURhdGEuZ2V0KCdhZGRUb2RvLXNlbGVjdFByaW9yaXR5JykpID09PSBudWxsIHx8IF9sID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbC50b1N0cmluZygpKSAhPT0gbnVsbCAmJiBfbSAhPT0gdm9pZCAwID8gX20gOiAnJztcbiAgICBjb25zdCBwcm9qZWN0c0FuZFRvZG9zRmFjdG9yeSA9IGZ1bmN0aW9uIChwcm9qZWN0TmFtZSwgcHJvamVjdENvbG91ciwgdG9kb05hbWUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvamVjdDogeyBwcm9qZWN0TmFtZSwgcHJvamVjdENvbG91ciB9LFxuICAgICAgICAgICAgdG9kb3M6IFt7IHRvZG9OYW1lLCB0b2RvRGVzY3JpcHRpb24sIHRvZG9EdWVEYXRlLCB0b2RvUHJpb3JpdHkgfV0sXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBjb25zdCBwcm9qZWN0QW5kVG9kb3MgPSBwcm9qZWN0c0FuZFRvZG9zRmFjdG9yeSh0b2RvRm9ybVByb2plY3ROYW1lLCB0b2RvRm9ybVByb2plY3RDb2xvdXIsIHRvZG9Gb3JtTmFtZSwgdG9kb0Zvcm1EZXNjcmlwdGlvbiwgdG9kb0Zvcm1EdWVEYXRlLCB0b2RvRm9ybVNlbGVjdFByaW9yaXR5KTtcbiAgICBjb25zdCB0b2RvRXhpc3RzID0gKDAsIHN0b3JlUHJvamVjdEFuZFRvZG9zRnVsbF8xLnN0b3JlUHJvamVjdEFuZFRvZG9zRnVsbCkocHJvamVjdEFuZFRvZG9zKTtcbiAgICBpZiAoIXRvZG9FeGlzdHMpIHtcbiAgICAgICAgKDAsIGFkZFRvZG9zVG9Db250ZW50XzEuYWRkVG9kb3NUb0NvbnRlbnQpKHByb2plY3RBbmRUb2Rvcyk7XG4gICAgfVxuICAgIHRvZG9Db250YWluZXIgPT09IG51bGwgfHwgdG9kb0NvbnRhaW5lciA9PT0gdm9pZCAwID8gdm9pZCAwIDogdG9kb0NvbnRhaW5lci5yZW1vdmUoKTtcbn07XG5leHBvcnRzLmhhbmRsZVRvZG9Gb3JtU3VibWl0ID0gaGFuZGxlVG9kb0Zvcm1TdWJtaXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlVXBjb21pbmdUYWJDbGljayA9IHZvaWQgMDtcbmNvbnN0IGVsZW1lbnRfY3JlYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50LWNyZWF0b3JzXCIpO1xuY29uc3QgYWRkVG9kb3NUb0NvbnRlbnRfMSA9IHJlcXVpcmUoXCIuLi9wcm9qZWN0c0FuZFRvZG9zL2FkZFRvZG9zVG9Db250ZW50XCIpO1xuY29uc3QgaGFuZGxlVXBjb21pbmdUYWJDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAvL3JlbW92ZSBjb250ZW50IHNlY3Rpb24ncyBwcmV2aW91cyBjb250ZW50c1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IGNvbnRlbnRCb3R0b21QcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYm90dG9tJyk7XG4gICAgY29udGVudEJvdHRvbVByZXYgPT09IG51bGwgfHwgY29udGVudEJvdHRvbVByZXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRlbnRCb3R0b21QcmV2LnJlbW92ZSgpO1xuICAgIC8vcmVuZGVyIG5ldyBjb250ZW50IGFuZCBhcHBlbmQgdG8gdGhpc1xuICAgIGNvbnN0IGNvbnRlbnRCb3R0b20gPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydjb250ZW50LWJvdHRvbSddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoY29udGVudCkoY29udGVudEJvdHRvbSk7XG4gICAgY29uc3QgcHJvamVjdEFyciA9IFtdO1xuICAgIC8vZ3JhYiBhbGwgdGhlIHByb2plY3RzIGV4Y2VwdCBvbmVzIHNwZWNpZmllZFxuICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKGtleSAhPT0gJ3Byb2plY3ROYW1lcycgJiYga2V5ICE9PSAnYXJjaGl2ZWQnKSB7XG4gICAgICAgICAgICBwcm9qZWN0QXJyLnB1c2goSlNPTi5wYXJzZSgoX2EgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBkYXRlID0gbm93LmdldERhdGUoKTtcbiAgICBjb25zdCBtb250aCA9IG5vdy5nZXRNb250aCgpICsgMTtcbiAgICBjb25zdCB5ZWFyID0gbm93LmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgdG9kYXkgPSBgJHt5ZWFyfS0ke21vbnRoIDwgMTAgPyAnMCcgKyBtb250aCA6IG1vbnRofS0ke2RhdGUgPCAxMCA/ICcwJyArIGRhdGUgOiBkYXRlfWA7XG4gICAgY29uc3QgcHJvakFuZFRvZG9zRmlsdGVyZWQgPSBbXTtcbiAgICAvL2dyYWIgZWFjaCB0b2RvIG5vdCBkdWUgdG9kYXkgYW5kIHB1dCBpbnRvIGNyZWF0ZWQgdGVtcCBwcm9qZWN0IGFuZCBwdXNoIHByb2plY3QgaW50byBmaWx0ZXJlZCBhcnJheVxuICAgIHByb2plY3RBcnIuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgICAgIGlmICh0b2RvLnRvZG9EdWVEYXRlICE9PSB0b2RheSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXAgPSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3ROYW1lOiBwcm9qZWN0LnByb2plY3QucHJvamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q29sb3VyOiBwcm9qZWN0LnByb2plY3QucHJvamVjdENvbG91cixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9kb3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvTmFtZTogdG9kby50b2RvTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb246IHRvZG8udG9kb0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EdWVEYXRlOiB0b2RvLnRvZG9EdWVEYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eTogdG9kby50b2RvUHJpb3JpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcHJvakFuZFRvZG9zRmlsdGVyZWQucHVzaCh0ZW1wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy9yZW5kZXIgdGhlIHRvZG9zXG4gICAgcHJvakFuZFRvZG9zRmlsdGVyZWQuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAoMCwgYWRkVG9kb3NUb0NvbnRlbnRfMS5hZGRUb2Rvc1RvQ29udGVudCkocHJvamVjdCk7XG4gICAgfSk7XG59O1xuZXhwb3J0cy5oYW5kbGVVcGNvbWluZ1RhYkNsaWNrID0gaGFuZGxlVXBjb21pbmdUYWJDbGljaztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oZWFkZXIgPSB2b2lkIDA7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IGhlYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKTtcbiAgICBjb25zdCBoZWFkZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydoZWFkZXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHJvb3QpKGhlYWRlcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdUb2RvIExpc3QgQXBwJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShoZWFkZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaDEnKShbJ3RpdGxlJywgJ2hlYWRlci10aXRsZSddKSk7XG59O1xuZXhwb3J0cy5oZWFkZXIgPSBoZWFkZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucHJvamVjdE1vZGFsID0gdm9pZCAwO1xuY29uc3QgZWxlbWVudF9jcmVhdG9yc18xID0gcmVxdWlyZShcIi4uL2VsZW1lbnQtY3JlYXRvcnNcIik7XG5jb25zdCBoYW5kbGVQcm9qZWN0Q2xvc2VJY29uQ2xpY2tfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVQcm9qZWN0Q2xvc2VJY29uQ2xpY2tcIik7XG5jb25zdCBoYW5kbGVQcm9qZWN0Rm9ybVN1Ym1pdF8xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZVByb2plY3RGb3JtU3VibWl0XCIpO1xuY29uc3QgcHJvamVjdE1vZGFsID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgIC8vYWRkUHJvamVjdCBtb2RhbFxuICAgIGNvbnN0IGFkZFByb2plY3RDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydhZGRQcm9qZWN0LWNvbnRhaW5lciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2lkZWJhcikoYWRkUHJvamVjdENvbnRhaW5lcik7XG4gICAgY29uc3QgYWRkUHJvamVjdEhlYWRpbmdDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydhZGRQcm9qZWN0SGVhZGluZy1jb250YWluZXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFByb2plY3RDb250YWluZXIpKGFkZFByb2plY3RIZWFkaW5nQ29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ0FkZCBwcm9qZWN0JyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0SGVhZGluZ0NvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdoMycpKFsnaGVhZGluZy10ZXh0JywgJ3RleHQtYWRkUHJvamVjdCddKSk7XG4gICAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZm9ybScpKFsnZm9ybS1hZGRQcm9qZWN0J10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWydhY3Rpb24nLCAnIyddLFxuICAgICAgICBbJ21ldGhvZCcsICdwb3N0J10sXG4gICAgICAgIFsnaWQnLCAnZm9ybS1hZGRQcm9qZWN0J10sXG4gICAgICAgIFsnbmFtZScsICdmb3JtLWFkZFByb2plY3QnXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ3N1Ym1pdCcpKGhhbmRsZVByb2plY3RGb3JtU3VibWl0XzEuaGFuZGxlUHJvamVjdEZvcm1TdWJtaXQpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdENvbnRhaW5lcikpKGFkZFByb2plY3RGb3JtKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0TmFtZUNvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2FkZFByb2plY3QtbmFtZS1jb250YWluZXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFByb2plY3RGb3JtKShhZGRQcm9qZWN0TmFtZUNvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1snZm9yJywgJ2FkZFByb2plY3QtbmFtZSddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ05hbWUnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFByb2plY3ROYW1lQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2xhYmVsJykoWydsYWJlbC1uYW1lJ10pKTtcbiAgICAvL2lucHV0IG5hbWVcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsnaWQnLCAnYWRkUHJvamVjdC1uYW1lJ10sXG4gICAgICAgIFsndHlwZScsICd0ZXh0J10sXG4gICAgICAgIFsnbWlubGVuZ3RoJywgJzInXSxcbiAgICAgICAgWydtYXhsZW5ndGgnLCAnMTcnXSxcbiAgICAgICAgWydwYXR0ZXJuJywgJ15bYS16QS1aXVthLXpBLVowLTktXy5dezEsMjB9JCddLFxuICAgICAgICBbJ3BsYWNlaG9sZGVyJywgJ0VudGVyIG5hbWUgb2YgcHJvamVjdCddLFxuICAgICAgICBbJ25hbWUnLCAnYWRkUHJvamVjdC1uYW1lJ10sXG4gICAgICAgIFsncmVxdWlyZWQnLCAnJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0TmFtZUNvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdpbnB1dCcpKFsnYWRkUHJvamVjdC1uYW1lJ10pKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0Q29sb3VyQ29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnYWRkUHJvamVjdC1jb2xvdXItY29udGFpbmVyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0Rm9ybSkoYWRkUHJvamVjdENvbG91ckNvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1snZm9yJywgJ2FkZFByb2plY3QtY29sb3VyJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnQ29sb3VyJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0Q29sb3VyQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2xhYmVsJykoWydsYWJlbC1jb2xvdXInXSkpO1xuICAgIC8vaW5wdXQgY29sb3VyXG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ3R5cGUnLCAnY29sb3InXSxcbiAgICAgICAgWydpZCcsICdhZGRQcm9qZWN0LWNvbG91ciddLFxuICAgICAgICBbJ25hbWUnLCAnYWRkUHJvamVjdC1jb2xvdXInXSxcbiAgICAgICAgWyd2YWx1ZScsICcjMWUxZTFlJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0Q29sb3VyQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2lucHV0JykoWydhZGRQcm9qZWN0LWNvbG91ciddKSk7XG4gICAgY29uc3QgYWRkUHJvamVjdEljb25zQ29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnYWRkUHJvamVjdEljb25zLWNvbnRhaW5lciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdEZvcm0pKGFkZFByb2plY3RJY29uc0NvbnRhaW5lcik7XG4gICAgY29uc3QgYnR0bkNhbmNlbFByb2plY3QgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnYnV0dG9uJykoWydidHRuJywgJ2J0dG4tY2FuY2VsUHJvamVjdCddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdjbGljaycpKGhhbmRsZVByb2plY3RDbG9zZUljb25DbGlja18xLmhhbmRsZVByb2plY3RDbG9zZUljb25DbGljayksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsndHlwZScsICdidXR0b24nXSxcbiAgICAgICAgWyduYW1lJywgJ2J0dG4tY2FuY2VsJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0SWNvbnNDb250YWluZXIpKShidHRuQ2FuY2VsUHJvamVjdCk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYnR0bkNhbmNlbFByb2plY3QpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmNyZWF0ZUltYWdlKSgnLi4vLi4vZGlzdC9hc3NldHMvaWNvbnMveCgxKS5zdmcnKShbJ2ljb24nLCAnaWNvbi1jYW5jZWxQcm9qZWN0J10pKGBpY29uIG9mIHN5bWJvbCAneCcgcmVwcmVzZW50aW5nIGNhbmNlbCBvciBjbG9zZWApKCdDYW5jZWwnKSk7XG4gICAgY29uc3QgYnR0bkFkZFByb2plY3QgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnYnV0dG9uJykoWydidHRuJywgJ2J0dG4tYWRkUHJvamVjdCddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsndHlwZScsICdzdWJtaXQnXSxcbiAgICAgICAgWyduYW1lJywgJ2J0dG4tYWRkUHJvamVjdCddLFxuICAgICAgICBbJ2Zvcm0nLCAnZm9ybS1hZGRQcm9qZWN0J10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0SWNvbnNDb250YWluZXIpKShidHRuQWRkUHJvamVjdCk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYnR0bkFkZFByb2plY3QpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmNyZWF0ZUltYWdlKSgnLi4vLi4vZGlzdC9hc3NldHMvaWNvbnMvY2hlY2soMSkuc3ZnJykoWydpY29uJywgJ2ljb24tYWRkUHJvamVjdCddKShgaWNvbiBvZiBzeW1ib2wgJ2NoZWNrJyByZXByZXNlbnRpbmcgYWRkYCkoJ0FkZCBQcm9qZWN0JykpO1xufTtcbmV4cG9ydHMucHJvamVjdE1vZGFsID0gcHJvamVjdE1vZGFsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnRvZG9Nb2RhbCA9IHZvaWQgMDtcbmNvbnN0IGVsZW1lbnRfY3JlYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50LWNyZWF0b3JzXCIpO1xuY29uc3QgaGFuZGxlVG9kb0Nsb3NlSWNvbkNsaWNrXzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlVG9kb0Nsb3NlSWNvbkNsaWNrXCIpO1xuY29uc3QgaGFuZGxlVG9kb0Zvcm1TdWJtaXRfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVUb2RvRm9ybVN1Ym1pdFwiKTtcbmNvbnN0IHRvZG9Nb2RhbCA9IGZ1bmN0aW9uIChwcm9qZWN0RGF0YU5hbWVfLCBwcm9qZWN0RGF0YUNvbG91cl8pIHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKTtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWyd0b2RvLWNvbnRhaW5lciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkocm9vdCkodG9kb0NvbnRhaW5lcik7XG4gICAgY29uc3QgdG9kb0Zvcm0gPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZm9ybScpKFsnZm9ybScsICdmb3JtLWFkZFRvZG8nXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnc3VibWl0JykoaGFuZGxlVG9kb0Zvcm1TdWJtaXRfMS5oYW5kbGVUb2RvRm9ybVN1Ym1pdCksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsnYWN0aW9uJywgJyMnXSxcbiAgICAgICAgWydtZXRob2QnLCAncG9zdCddLFxuICAgICAgICBbJ2lkJywgJ2Zvcm0tYWRkVG9kbyddLFxuICAgICAgICBbJ25hbWUnLCAnZm9ybS1hZGRUb2RvJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b2RvQ29udGFpbmVyKSkodG9kb0Zvcm0pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnQWRkIHRhc2sgdG9kbycpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0Zvcm0pKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaDMnKShbJ2hlYWRpbmctdGV4dCcsICd0ZXh0LWFkZFRvZG8nXSkpO1xuICAgIGNvbnN0IGFkZFRvZG9OYW1lQ29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnYWRkVG9kby1uYW1lLWNvbnRhaW5lciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0Zvcm0pKGFkZFRvZG9OYW1lQ29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydmb3InLCAnYWRkVG9kby1uYW1lJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnTmFtZScpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkVG9kb05hbWVDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnbGFiZWwnKShbJ2xhYmVsLW5hbWUnXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWyd0eXBlJywgJ3RleHQnXSxcbiAgICAgICAgWydmb3JtJywgJ2Zvcm0tYWRkVG9kbyddLFxuICAgICAgICBbJ2lkJywgJ2FkZFRvZG8tbmFtZSddLFxuICAgICAgICBbJ25hbWUnLCAnYWRkVG9kby1uYW1lJ10sXG4gICAgICAgIFsnbWlubGVuZ3RoJywgJzInXSxcbiAgICAgICAgWydtYXhsZW5ndGgnLCAnMzEnXSxcbiAgICAgICAgWydwbGFjZWhvbGRlcicsICdFbnRlciBuYW1lIGZvciB0YXNrIHRvZG8nXSxcbiAgICAgICAgWydyZXF1aXJlZCcsICcnXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFRvZG9OYW1lQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2lucHV0JykoWydhZGRUb2RvLW5hbWUnXSkpO1xuICAgIGNvbnN0IGFkZFRvZG9EZXNjQ29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnYWRkVG9kby1kZXNjLWNvbnRhaW5lciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0Zvcm0pKGFkZFRvZG9EZXNjQ29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydmb3InLCAnYWRkVG9kby1kZXNjcmlwdGlvbiddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ0Rlc2NyaXB0aW9uJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRUb2RvRGVzY0NvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdsYWJlbCcpKFsnbGFiZWwtZGVzY3JpcHRpb24nXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWydpZCcsICdhZGRUb2RvLWRlc2NyaXB0aW9uJ10sXG4gICAgICAgIFsnYXV0b2NvbXBsZXRlJywgJ29uJ10sXG4gICAgICAgIFsnZm9ybScsICdmb3JtLWFkZFRvZG8nXSxcbiAgICAgICAgWydtYXhsZW5ndGgnLCAnMjUwJ10sXG4gICAgICAgIFsnbmFtZScsICdhZGRUb2RvLWRlc2NyaXB0aW9uJ10sXG4gICAgICAgIFsnc3BlbGxjaGVjaycsICd0cnVlJ10sXG4gICAgICAgIFsnd3JhcCcsICdoYXJkJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRUb2RvRGVzY0NvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCd0ZXh0YXJlYScpKFsnYWRkVG9kby1kZXNjcmlwdGlvbiddKSk7XG4gICAgY29uc3QgYWRkVG9kb0RhdGVDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydhZGRUb2RvLWRhdGUtY29udGFpbmVyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b2RvRm9ybSkoYWRkVG9kb0RhdGVDb250YWluZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnRHVlIGRhdGUnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ2ZvcicsICdhZGRUb2RvLWR1ZURhdGUnXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkVG9kb0RhdGVDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnbGFiZWwnKShbJ2xhYmVsLWR1ZURhdGUnXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWyd0eXBlJywgJ2RhdGUnXSxcbiAgICAgICAgWydpZCcsICdhZGRUb2RvLWR1ZURhdGUnXSxcbiAgICAgICAgW1xuICAgICAgICAgICAgJ21pbicsXG4gICAgICAgICAgICBgJHtub3cuZ2V0RnVsbFllYXIoKX0tJHtub3cuZ2V0TW9udGgoKSA8IDEwID8gJzAnICsgKG5vdy5nZXRNb250aCgpICsgMSkgOiBub3cuZ2V0TW9udGgoKSArIDF9LSR7bm93LmdldERhdGUoKSA8IDEwID8gJzAnICsgbm93LmdldERhdGUoKSA6IG5vdy5nZXREYXRlKCl9YCxcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgICAgJ21heCcsXG4gICAgICAgICAgICBgJHtub3cuZ2V0RnVsbFllYXIoKSArIDEwMH0tJHtub3cuZ2V0TW9udGgoKSA8IDEwID8gJzAnICsgKG5vdy5nZXRNb250aCgpICsgMSkgOiBub3cuZ2V0TW9udGgoKSArIDF9LSR7bm93LmdldERhdGUoKSA8IDEwID8gJzAnICsgbm93LmdldERhdGUoKSA6IG5vdy5nZXREYXRlKCl9YCxcbiAgICAgICAgXSxcbiAgICAgICAgWyduYW1lJywgJ2FkZFRvZG8tZHVlRGF0ZSddLFxuICAgICAgICBbJ3BsYWNlaG9sZGVyJywgJ3l5eXktbW0tZGQnXSxcbiAgICAgICAgWydwYXR0ZXJuJywgJygwWzEtOV18MVswLTldfDJbMC05XXwzWzAxXSktKDBbMS05XXwxWzAxMl0pLVswLTldezR9J10sXG4gICAgICAgIFsncmVxdWlyZWQnLCAnJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRUb2RvRGF0ZUNvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdpbnB1dCcpKFsnYWRkVG9kby1kdWVEYXRlJ10pKTtcbiAgICBjb25zdCBhZGRUb2RvUHJpb3JpdHlDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydhZGRUb2RvLXByaW9yaXR5LWNvbnRhaW5lciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0Zvcm0pKGFkZFRvZG9Qcmlvcml0eUNvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdQcmlvcml0eSBsZXZlbCcpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1snZm9yJywgJ2FkZFRvZG8tc2VsZWN0UHJpb3JpdHknXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkVG9kb1ByaW9yaXR5Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2xhYmVsJykoWydsYWJlbC1zZWxlY3RQcmlvcml0eSddKSk7XG4gICAgY29uc3Qgc2VsZWN0UHJpb3JpdHkgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnc2VsZWN0JykoWydhZGRUb2RvLXNlbGVjdFByaW9yaXR5J10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWyduYW1lJywgJ2FkZFRvZG8tc2VsZWN0UHJpb3JpdHknXSxcbiAgICAgICAgWydpZCcsICdhZGRUb2RvLXNlbGVjdFByaW9yaXR5J10sXG4gICAgICAgIFsnZm9ybScsICdmb3JtLWFkZFRvZG8nXSxcbiAgICAgICAgWyd0aXRsZScsICdhZGRUb2RvLXNlbGVjdFByaW9yaXR5J10sXG4gICAgICAgIFsncmVxdWlyZWQnLCAnJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRUb2RvUHJpb3JpdHlDb250YWluZXIpKShzZWxlY3RQcmlvcml0eSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCctLVBsZWFzZSBhc3NpZ24gYSBwcmlvcml0eS0tJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWyd2YWx1ZScsICcnXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2VsZWN0UHJpb3JpdHkpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnb3B0aW9uJykoWydvcHRpb24tc2VsZWN0UHJpb3JpdHknXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ3ZhbHVlJywgJ2xvdyddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ0xvdycpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2VsZWN0UHJpb3JpdHkpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnb3B0aW9uJykoWydvcHRpb24tc2VsZWN0UHJpb3JpdHknXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ3ZhbHVlJywgJ21lZGl1bSddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ01lZGl1bScpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2VsZWN0UHJpb3JpdHkpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnb3B0aW9uJykoWydvcHRpb24tc2VsZWN0UHJpb3JpdHknXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ3ZhbHVlJywgJ2hpZ2gnXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdIaWdoJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzZWxlY3RQcmlvcml0eSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdvcHRpb24nKShbJ29wdGlvbi1zZWxlY3RQcmlvcml0eSddKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1sndmFsdWUnLCAndXJnZW50J11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnVXJnZW50JyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzZWxlY3RQcmlvcml0eSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdvcHRpb24nKShbJ29wdGlvbi1zZWxlY3RQcmlvcml0eSddKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1sndmFsdWUnLCAnaW1tZWRpYXRlJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnSW1tZWRpYXRlJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzZWxlY3RQcmlvcml0eSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdvcHRpb24nKShbJ29wdGlvbi1zZWxlY3RQcmlvcml0eSddKSk7XG4gICAgLy9oaWRkZW4gZWxlbWVudCB0byBmdW5uZWwgcHJvamVjdCBuYW1lIHRvIHRvZG9mb3JtXG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ2hpZGRlbicsICcnXSxcbiAgICAgICAgWyd2YWx1ZScsIGAke3Byb2plY3REYXRhTmFtZV99YF0sXG4gICAgICAgIFsnbmFtZScsICdhZGRUb2RvLXByb2plY3ROYW1lJ10sXG4gICAgICAgIFsndHlwZScsICd0ZXh0J10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b2RvRm9ybSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdpbnB1dCcpKFsnYWRkVG9kby1wcm9qZWN0TmFtZV9faGlkZGVuJ10pKTtcbiAgICAvL2hpZGRlbiBlbGVtZW50IHRvIGZ1bm5lbCBwcm9qZWN0IGNvbG91ciB0byB0b2RvZm9ybVxuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWydoaWRkZW4nLCAnJ10sXG4gICAgICAgIFsndmFsdWUnLCBgJHtwcm9qZWN0RGF0YUNvbG91cl99YF0sXG4gICAgICAgIFsnbmFtZScsICdhZGRUb2RvLXByb2plY3RDb2xvdXInXSxcbiAgICAgICAgWyd0eXBlJywgJ3RleHQnXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZG9Gb3JtKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2lucHV0JykoWydhZGRUb2RvLXByb2plY3RDb2xvdXJfX2hpZGRlbiddKSk7XG4gICAgY29uc3QgYWRkVG9kb0ljb25zQ29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnYWRkVG9kby1pY29ucy1jb250YWluZXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZG9Gb3JtKShhZGRUb2RvSWNvbnNDb250YWluZXIpO1xuICAgIGNvbnN0IGJ0dG5DYW5jZWxUb2RvID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2J1dHRvbicpKFsnYnR0bicsICdidHRuLWNhbmNlbFRvZG8nXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ3R5cGUnLCAnY2xpY2snXSxcbiAgICAgICAgWyduYW1lJywgJ2J0dG4tY2FuY2VsVG9kbyddLFxuICAgICAgICBbJ2Zvcm0nLCAnZm9ybS1hZGRUb2RvJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRUb2RvSWNvbnNDb250YWluZXIpKShidHRuQ2FuY2VsVG9kbyk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVUb2RvQ2xvc2VJY29uQ2xpY2tfMS5oYW5kbGVUb2RvQ2xvc2VJY29uQ2xpY2spLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYnR0bkNhbmNlbFRvZG8pKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmNyZWF0ZUltYWdlKSgnLi4vLi4vZGlzdC9hc3NldHMvaWNvbnMveCgxKS5zdmcnKShbJ2ljb24nLCAnaWNvbi1jYW5jZWxUb2RvJ10pKGBpY29uIG9mIHN5bWJvbCAneCcgcmVwcmVzZW50aW5nIGNsb3NlIG9yIGNhbmNlbGApKCdDYW5jZWwnKSk7XG4gICAgY29uc3QgYnR0bkFkZFRvZG8gPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnYnV0dG9uJykoWydidHRuJywgJ2J0dG4tYWRkVG9kbyddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsndHlwZScsICdzdWJtaXQnXSxcbiAgICAgICAgWyduYW1lJywgJ2J0dG4tYWRkVG9kbyddLFxuICAgICAgICBbJ2Zvcm0nLCAnZm9ybS1hZGRUb2RvJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRUb2RvSWNvbnNDb250YWluZXIpKShidHRuQWRkVG9kbyk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYnR0bkFkZFRvZG8pKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmNyZWF0ZUltYWdlKSgnLi4vLi4vZGlzdC9hc3NldHMvaWNvbnMvY2hlY2soMSkuc3ZnJykoWydpY29uJywgJ2ljb24tYWRkVG9kbyddKShgaWNvbiBvZiBhIGNoZWNrbWFyayByZXByZXNlbnRpbmcgYWRkYCkoJ0FkZCBUb2RvJykpO1xufTtcbmV4cG9ydHMudG9kb01vZGFsID0gdG9kb01vZGFsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmFkZFByb2plY3RUb1NpZGViYXIgPSB2b2lkIDA7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IGhhbmRsZUFkZE5ld1RvZG9JY29uQ2xpY2tfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrXCIpO1xuY29uc3QgaGFuZGxlQ3JlYXRlZFRhYnNDbGlja18xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZUNyZWF0ZWRUYWJzQ2xpY2tcIik7XG5jb25zdCBhZGRQcm9qZWN0VG9TaWRlYmFyID0gZnVuY3Rpb24gKGZvcm1OYW1lXywgZm9ybUNvbG91cl8pIHtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItcHJvamVjdHMnKTtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnc2lkZWJhci1wcm9qZWN0JywgJ3Byb2plY3QnXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHByb2plY3RzQ29udGFpbmVyKShwcm9qZWN0Q29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdjbGljaycpKGhhbmRsZUNyZWF0ZWRUYWJzQ2xpY2tfMS5oYW5kbGVDcmVhdGVkVGFic0NsaWNrKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ2RhdGEtbmFtZScsIGAke2Zvcm1OYW1lX31gXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFN0eWxlVG9FbGVtKShbWydjb2xvcicsIGAke2Zvcm1Db2xvdXJffWBdXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoYCR7Zm9ybU5hbWVffWApLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkocHJvamVjdENvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdoNCcpKFsncHJvamVjdC10ZXh0J10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsnZGF0YS1uYW1lJywgYCR7Zm9ybU5hbWVffWBdLFxuICAgICAgICBbJ2RhdGEtY29sb3VyJywgYCR7Zm9ybUNvbG91cl99YF0sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdjbGljaycpKGhhbmRsZUFkZE5ld1RvZG9JY29uQ2xpY2tfMS5oYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHByb2plY3RDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmNyZWF0ZUltYWdlKSgnLi4vLi4vLi4vZGlzdC9hc3NldHMvaWNvbnMvcGx1cy5zdmcnKShbJ2ljb24nLCAnaWNvbi1wbHVzJ10pKCdpY29uIG9mIHBsdXMgc3ltYm9sJykoJ0FkZCBOZXcgVG9kbycpKTtcbn07XG5leHBvcnRzLmFkZFByb2plY3RUb1NpZGViYXIgPSBhZGRQcm9qZWN0VG9TaWRlYmFyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmFkZFRvZG9zVG9Db250ZW50ID0gdm9pZCAwO1xuY29uc3QgZWxlbWVudF9jcmVhdG9yc18xID0gcmVxdWlyZShcIi4uL2VsZW1lbnQtY3JlYXRvcnNcIik7XG5jb25zdCBoYW5kbGVUb2RvQ2hlY2tib3hDb21wbGV0ZV8xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZVRvZG9DaGVja2JveENvbXBsZXRlXCIpO1xuY29uc3QgYWRkVG9kb3NUb0NvbnRlbnQgPSBmdW5jdGlvbiAoeyBwcm9qZWN0LCB0b2RvcyB9LCBkaXNhYmxlQ2hlY2tib3ggPSBmYWxzZSkge1xuICAgIGNvbnN0IHsgcHJvamVjdE5hbWUsIHByb2plY3RDb2xvdXIgfSA9IHByb2plY3Q7XG4gICAgdG9kb3MuZm9yRWFjaCgodG9kbywgaSkgPT4ge1xuICAgICAgICBjb25zdCB7IHRvZG9OYW1lLCB0b2RvRGVzY3JpcHRpb24sIHRvZG9EdWVEYXRlLCB0b2RvUHJpb3JpdHkgfSA9IHRvZG9zW2ldO1xuICAgICAgICBjb25zdCBjb250ZW50Qm90dG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYm90dG9tJyk7XG4gICAgICAgIGNvbnN0IHRvZG9Db250ZW50Q29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsndG9kb0NvbnRlbnQtY29udGFpbmVyJ10pO1xuICAgICAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoY29udGVudEJvdHRvbSkodG9kb0NvbnRlbnRDb250YWluZXIpO1xuICAgICAgICBjb25zdCBoZWFkaW5nQ29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsndG9kb0NvbnRlbnQtaGVhZGluZy1jb250YWluZXInXSk7XG4gICAgICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b2RvQ29udGVudENvbnRhaW5lcikoaGVhZGluZ0NvbnRhaW5lcik7XG4gICAgICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ2RhdGEtY29sb3VyJywgYCR7cHJvamVjdENvbG91cn1gXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKGAke3Byb2plY3ROYW1lfWApLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFN0eWxlVG9FbGVtKShbWydjb2xvcicsIGAke3Byb2plY3RDb2xvdXJ9YF1dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGhlYWRpbmdDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaDMnKShbJ2hlYWRpbmctdGV4dCcsICd0b2RvQ29udGVudC1wcm9qZWN0TmFtZSddKSk7XG4gICAgICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ2ZvcicsICdjb21wbGV0ZSddXSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdsYWJlbCcpKFsnbGFiZWwnLCAndG9kb0NvbnRlbnQtbGFiZWwnXSkpO1xuICAgICAgICBjb25zdCBjaGVja2JveCA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdpbnB1dCcpKFsndG9kb0NvbnRlbnQtY2hlY2tib3gnXSk7XG4gICAgICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ2NsaWNrJykoaGFuZGxlVG9kb0NoZWNrYm94Q29tcGxldGVfMS5oYW5kbGVUb2RvQ2hlY2tib3hDb21wbGV0ZSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgICAgICBbJ3R5cGUnLCAnY2hlY2tib3gnXSxcbiAgICAgICAgICAgIFsnaWQnLCAnY29tcGxldGUnXSxcbiAgICAgICAgICAgIFsnbmFtZScsICdjb21wbGV0ZSddLFxuICAgICAgICAgICAgWyd2YWx1ZScsIGAke3Byb2plY3RDb2xvdXJ9YF0sXG4gICAgICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoaGVhZGluZ0NvbnRhaW5lcikpKGNoZWNrYm94KTtcbiAgICAgICAgLy90byBwcmV2ZW50IGNsaWNraW5nIGNoZWNrYm94IGFmdGVyIGl0IGhhcyBiZWVuIGFyY2hpdmVkXG4gICAgICAgIGlmIChkaXNhYmxlQ2hlY2tib3gpIHtcbiAgICAgICAgICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydkaXNhYmxlZCcsICd0cnVlJ11dKShjaGVja2JveCk7XG4gICAgICAgIH1cbiAgICAgICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKGAke3RvZG9OYW1lfWApLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0NvbnRlbnRDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaDQnKShbJ3RvZG9Db250ZW50LW5hbWUnXSkpO1xuICAgICAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoYCR7dG9kb0Rlc2NyaXB0aW9ufWApLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0NvbnRlbnRDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgncCcpKFsndG9kb0NvbnRlbnQtZGVzY3JpcHRpb24nXSkpO1xuICAgICAgICBjb25zdCBkYXRlQW5kUHJpb3JpdHlDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydkYXRlQW5kUHJpb3JpdHktY29udGFpbmVyJ10pO1xuICAgICAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0NvbnRlbnRDb250YWluZXIpKGRhdGVBbmRQcmlvcml0eUNvbnRhaW5lcik7XG4gICAgICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKShgRHVlOiAke3RvZG9EdWVEYXRlfWApLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoZGF0ZUFuZFByaW9yaXR5Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ3AnKShbJ3RvZG9Db250ZW50LWR1ZURhdGUnXSkpO1xuICAgICAgICBjb25zdCBwcmlvcml0eUNvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3ByaW9yaXR5LWNvbnRhaW5lciddKTtcbiAgICAgICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGRhdGVBbmRQcmlvcml0eUNvbnRhaW5lcikocHJpb3JpdHlDb250YWluZXIpO1xuICAgICAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFN0eWxlVG9FbGVtKShbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InLFxuICAgICAgICAgICAgICAgIGAke3RvZG9Qcmlvcml0eSA9PT0gJ2ltbWVkaWF0ZSdcbiAgICAgICAgICAgICAgICAgICAgPyAnaHNsKDAsIDEwMCUsIDM1JSknXG4gICAgICAgICAgICAgICAgICAgIDogdG9kb1ByaW9yaXR5ID09PSAndXJnZW50J1xuICAgICAgICAgICAgICAgICAgICAgICAgPyAnaHNsKDQwLCAxMDAlLCA2NSUpJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiB0b2RvUHJpb3JpdHkgPT09ICdoaWdoJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2hzbCg5MCwgMTAwJSwgNTAlKSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRvZG9Qcmlvcml0eSA9PT0gJ21lZGl1bSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnaHNsKDIwMCwgMTAwJSwgNTAlKSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnaHNsKDI1MCwgMTAwJSwgNzAlKSd9YCxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIF0pKHByaW9yaXR5Q29udGFpbmVyKTtcbiAgICAgICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKGAke3RvZG9Qcmlvcml0eX1gKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHByaW9yaXR5Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ3AnKShbJ3RvZG9Db250ZW50LXByaW9yaXR5J10pKTtcbiAgICB9KTtcbn07XG5leHBvcnRzLmFkZFRvZG9zVG9Db250ZW50ID0gYWRkVG9kb3NUb0NvbnRlbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuYXJjaGl2ZUV4cGlyZWRUb2RvcyA9IHZvaWQgMDtcbmNvbnN0IGFyY2hpdmVFeHBpcmVkVG9kb3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hO1xuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FyY2hpdmVkJykpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FyY2hpdmVkJywgSlNPTi5zdHJpbmdpZnkoW10pKTtcbiAgICB9XG4gICAgY29uc3QgcHJvamVjdEFyciA9IFtdO1xuICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKGtleSAhPT0gJ3Byb2plY3ROYW1lcycgJiYga2V5ICE9PSAnYXJjaGl2ZWQnKSB7XG4gICAgICAgICAgICBwcm9qZWN0QXJyLnB1c2goSlNPTi5wYXJzZSgoX2EgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBkYXRlID0gbm93LmdldERhdGUoKTtcbiAgICBjb25zdCBtb250aCA9IG5vdy5nZXRNb250aCgpICsgMTtcbiAgICBjb25zdCB5ZWFyID0gbm93LmdldEZ1bGxZZWFyKCk7XG4gICAgLy9ncmFiIHByZXZpb3VzbHkgc3RvcmVkIGV4cGlyZWQvYXJjaGl2ZWQgcHJvamVjdHMgZnJvbSBsb2NhbHN0b3JhZ2VcbiAgICBjb25zdCBleHBpcmVkUHJvamVjdHNBcnIgPSBKU09OLnBhcnNlKChfYSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcmNoaXZlZCcpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJyk7XG4gICAgY29uc3QgdG9kb3NOb3RFeHBpcmVkQXJyID0gW107XG4gICAgcHJvamVjdEFyci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVtcEFyciA9IHRvZG8udG9kb0R1ZURhdGUuc3BsaXQoJy0nKTtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9ZZWFyID0gTnVtYmVyKHRlbXBBcnJbMF0pO1xuICAgICAgICAgICAgY29uc3QgdG9kb01vbnRoID0gTnVtYmVyKHRlbXBBcnJbMV0pO1xuICAgICAgICAgICAgY29uc3QgdG9kb0RhdGUgPSBOdW1iZXIodGVtcEFyclsyXSk7XG4gICAgICAgICAgICAvL2dyYWIgZWFjaCB0b2RvIHdpdGggZHVlRGF0ZSBlYXJsaWVyIHRoYW4gdG9kYXkgYW5kIHN0b3JlIGNvcnJlc3BvbmRpbmcgcHJvamVjdCBpbnRvIHRlbXAgb2JqZWN0IGFuZCBzdG9yZSBpbiAuLi5BcnJcbiAgICAgICAgICAgIGlmICh0b2RvRGF0ZSA8IGRhdGUgfHwgdG9kb01vbnRoIDwgbW9udGggfHwgdG9kb1llYXIgPCB5ZWFyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcCA9IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE5hbWU6IHByb2plY3QucHJvamVjdC5wcm9qZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDb2xvdXI6IHByb2plY3QucHJvamVjdC5wcm9qZWN0Q29sb3VyLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b2RvczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9OYW1lOiB0b2RvLnRvZG9OYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbjogdG9kby50b2RvRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0R1ZURhdGU6IHRvZG8udG9kb0R1ZURhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5OiB0b2RvLnRvZG9Qcmlvcml0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBleHBpcmVkUHJvamVjdHNBcnIucHVzaCh0ZW1wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vZ3JhYiBwcm9qZWN0cyBhbmQgdG9kb3MgdGhhdCBhcmUgbm90IGV4cGlyZWQgYW5kIHN0b3JlIHRoZW0gaW50byAuLi5BcnJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0ge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZTogcHJvamVjdC5wcm9qZWN0LnByb2plY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbG91cjogcHJvamVjdC5wcm9qZWN0LnByb2plY3RDb2xvdXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb05hbWU6IHRvZG8udG9kb05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uOiB0b2RvLnRvZG9EZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRHVlRGF0ZTogdG9kby50b2RvRHVlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHk6IHRvZG8udG9kb1ByaW9yaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRvZG9zTm90RXhwaXJlZEFyci5wdXNoKHRlbXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICAvL3N0b3JlIGV4cGlyZWQgcHJvamVjdHMgYW5kIHRvZG9zIHRoYXQgaGF2ZSBuZXcgZXhwaXJlZCB0b2RvcyBhZGRlZFxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcmNoaXZlZCcsIEpTT04uc3RyaW5naWZ5KGV4cGlyZWRQcm9qZWN0c0FycikpO1xuICAgIC8vdGhlIHRvZG9zIHRoYXQgc2hhcmUgYSBwcm9qZWN0IG5hbWUgYXJlIGNvbnNvbGlkYXRlZCB1bmRlciBvbmUgcHJvamVjdFxuICAgIGNvbnN0IHVuZXhwaXJlZFByb2plY3RzTWFwID0gdG9kb3NOb3RFeHBpcmVkQXJyLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG4gICAgICAgIGlmICghYWNjLmhhcyhjdXJyLnByb2plY3QucHJvamVjdE5hbWUpKSB7XG4gICAgICAgICAgICBhY2Muc2V0KGN1cnIucHJvamVjdC5wcm9qZWN0TmFtZSwgY3Vycik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gYWNjLmdldChjdXJyLnByb2plY3QucHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgdGVtcCA9PT0gbnVsbCB8fCB0ZW1wID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0ZW1wLnRvZG9zLnB1c2goY3Vyci50b2Rvc1swXSk7XG4gICAgICAgICAgICBhY2Muc2V0KGN1cnIucHJvamVjdC5wcm9qZWN0TmFtZSwgdGVtcCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBuZXcgTWFwKCkpO1xuICAgIC8vc3RvcmUgbW9kaWZpZWQgcHJvamVjdHMgd2l0aG91dCB0aGUgZXhwaXJlZCB0b2RvcyBiYWNrIGludG8gbG9jYWxzdG9yYWdlXG4gICAgdW5leHBpcmVkUHJvamVjdHNNYXAuZm9yRWFjaCgodmFsLCBrZXkpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWwpKTtcbiAgICB9KTtcbn07XG5leHBvcnRzLmFyY2hpdmVFeHBpcmVkVG9kb3MgPSBhcmNoaXZlRXhwaXJlZFRvZG9zO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnByb2plY3RzQW5kVG9kb3NPbmxvYWQgPSB2b2lkIDA7XG5jb25zdCBhZGRQcm9qZWN0VG9TaWRlYmFyXzEgPSByZXF1aXJlKFwiLi9hZGRQcm9qZWN0VG9TaWRlYmFyXCIpO1xuY29uc3QgYWRkVG9kb3NUb0NvbnRlbnRfMSA9IHJlcXVpcmUoXCIuL2FkZFRvZG9zVG9Db250ZW50XCIpO1xuY29uc3QgcHJvamVjdHNBbmRUb2Rvc09ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgcHJvamVjdHMgPSBbXTtcbiAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmIChrZXkgIT09ICdTYW1wbGUgUHJvamVjdCcgJiYga2V5ICE9PSAncHJvamVjdE5hbWVzJyAmJiBrZXkgIT09ICdhcmNoaXZlZCcpIHtcbiAgICAgICAgICAgIHByb2plY3RzLnB1c2goSlNPTi5wYXJzZSgoX2EgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy9kaXNwbGF5IHNhbXBsZSB0b2Rvc1xuICAgIGNvbnN0IHNhbXBsZVByb2plY3QgPSBKU09OLnBhcnNlKChfYSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdTYW1wbGUgUHJvamVjdCcpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJyk7XG4gICAgKDAsIGFkZFRvZG9zVG9Db250ZW50XzEuYWRkVG9kb3NUb0NvbnRlbnQpKHNhbXBsZVByb2plY3QpO1xuICAgIC8vZGlzcGxheSByZXN0IG9mIHByb2plY3RzIGluIHN0b3JhZ2VcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICgwLCBhZGRQcm9qZWN0VG9TaWRlYmFyXzEuYWRkUHJvamVjdFRvU2lkZWJhcikocHJvamVjdC5wcm9qZWN0LnByb2plY3ROYW1lLCBwcm9qZWN0LnByb2plY3QucHJvamVjdENvbG91cik7XG4gICAgICAgICgwLCBhZGRUb2Rvc1RvQ29udGVudF8xLmFkZFRvZG9zVG9Db250ZW50KShwcm9qZWN0KTtcbiAgICB9KTtcbn07XG5leHBvcnRzLnByb2plY3RzQW5kVG9kb3NPbmxvYWQgPSBwcm9qZWN0c0FuZFRvZG9zT25sb2FkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0b3JlUHJvamVjdEFuZFRvZG9zRnVsbCA9IHZvaWQgMDtcbmNvbnN0IHN0b3JlUHJvamVjdEFuZFRvZG9zRnVsbCA9IGZ1bmN0aW9uIChwcm9qZWN0QW5kVG9kb3NfKSB7XG4gICAgdmFyIF9hO1xuICAgIGxldCB0b2RvRXhpc3RzRmxhZyA9IGZhbHNlO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qTmFtZSA9IHByb2plY3RBbmRUb2Rvc18ucHJvamVjdC5wcm9qZWN0TmFtZTtcbiAgICBjb25zdCBjdXJyZW50VG9kb05hbWUgPSBwcm9qZWN0QW5kVG9kb3NfLnRvZG9zWzBdLnRvZG9OYW1lO1xuICAgIGNvbnN0IGN1cnJlbnRUb2RvcyA9IHByb2plY3RBbmRUb2Rvc18udG9kb3NbMF07XG4gICAgY29uc3Qgc3RvcmFnZUtleXMgPSBuZXcgU2V0KCk7XG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgc3RvcmFnZUtleXMuYWRkKGtleSk7XG4gICAgfSk7XG4gICAgLy9uZXcgcHJvamVjdFxuICAgIGlmICghc3RvcmFnZUtleXMuaGFzKGN1cnJlbnRQcm9qTmFtZSkpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY3VycmVudFByb2pOYW1lLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0QW5kVG9kb3NfKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvL3Byb2plY3QgYWxyZWFkeSBleGlzdHNcbiAgICAgICAgY29uc3QgY3VycmVudFByb2pTdG9yYWdlID0gSlNPTi5wYXJzZSgoX2EgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50UHJvak5hbWUpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJyk7XG4gICAgICAgIGNvbnN0IHRvZG9OYW1lc1NldCA9IG5ldyBTZXQoKTtcbiAgICAgICAgY3VycmVudFByb2pTdG9yYWdlLnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHRvZG9OYW1lc1NldC5hZGQodG9kby50b2RvTmFtZSkpO1xuICAgICAgICAvL25ldyB0b2RvTmFtZVxuICAgICAgICBpZiAoIXRvZG9OYW1lc1NldC5oYXMoY3VycmVudFRvZG9OYW1lKSkge1xuICAgICAgICAgICAgY3VycmVudFByb2pTdG9yYWdlLnRvZG9zLnB1c2goY3VycmVudFRvZG9zKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGN1cnJlbnRQcm9qTmFtZSwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFByb2pTdG9yYWdlKSk7XG4gICAgICAgICAgICB0b2RvRXhpc3RzRmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHRvZG9FeGlzdHNGbGFnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy90b2RvTmFtZSB0YWtlblxuICAgICAgICAgICAgYWxlcnQoYCR7Y3VycmVudFRvZG9OYW1lfSBhbHJlYWR5IGV4aXN0cyBhcyBhIHRvZG8gKO+9oeKAosyB77i/4oCizIDvvaEpICBQbGVhc2UgY2hvb3NlIGFub3RoZXIgbmFtZSBvciBjb25zaWRlciBlZGl0aW5nIGFuIGV4aXN0aW5nIHRvZG8uYCk7XG4gICAgICAgICAgICB0b2RvRXhpc3RzRmxhZyA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdG9kb0V4aXN0c0ZsYWc7XG4gICAgICAgIH1cbiAgICB9XG59O1xuZXhwb3J0cy5zdG9yZVByb2plY3RBbmRUb2Rvc0Z1bGwgPSBzdG9yZVByb2plY3RBbmRUb2Rvc0Z1bGw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3RvcmVTYW1wbGVQcm9qZWN0ID0gdm9pZCAwO1xuY29uc3Qgc3RvcmVTYW1wbGVQcm9qZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgLy9yZXR1cm5zIGRhdGUgb25lIHllYXIgZnJvbSBjdXJyZW50XG4gICAgY29uc3Qgc2FtcGxlTG93RHVlRGF0ZSA9IChub3cpID0+IHtcbiAgICAgICAgbGV0IGRheSA9IG5vdy5nZXREYXRlKCk7XG4gICAgICAgIGxldCBtb250aCA9IG5vdy5nZXRNb250aCgpICsgMTtcbiAgICAgICAgY29uc3QgeWVhciA9IG5vdy5nZXRGdWxsWWVhcigpICsgMTtcbiAgICAgICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGggPCAxMCA/ICcwJyArIG1vbnRoIDogbW9udGh9LSR7ZGF5IDwgMTAgPyAnMCcgKyBkYXkgOiBkYXl9YDtcbiAgICB9O1xuICAgIC8vcmV0dXJucyBkYXRlIG9uZSBtb250aCBmcm9tIGN1cnJlbnRcbiAgICBjb25zdCBzYW1wbGVNZWREdWVEYXRlID0gKG5vdykgPT4ge1xuICAgICAgICBsZXQgbW9udGggPSBub3cuZ2V0TW9udGgoKTtcbiAgICAgICAgbW9udGggPSBtb250aCA8PSAxMCA/IG1vbnRoICsgMSA6IG1vbnRoO1xuICAgICAgICBtb250aCA9IG1vbnRoICsgMTtcbiAgICAgICAgcmV0dXJuIGAke25vdy5nZXRGdWxsWWVhcigpfS0ke21vbnRoIDwgMTAgPyAnMCcgKyBtb250aCA6IG1vbnRofS0ke25vdy5nZXREYXRlKCkgPCAxMCA/ICcwJyArIG5vdy5nZXREYXRlKCkgOiBub3cuZ2V0RGF0ZSgpfWA7XG4gICAgfTtcbiAgICAvL3JldHVybnMgZGF0ZSBvbmUgZGF5IGZyb20gY3VycmVudFxuICAgIGNvbnN0IHNhbXBsZVVyZ2VudER1ZURhdGUgPSAobm93KSA9PiB7XG4gICAgICAgIGxldCBkYXkgPSBub3cuZ2V0RGF0ZSgpO1xuICAgICAgICBkYXkgPSBkYXkgPCAyNiA/IGRheSArIDIgOiBkYXk7XG4gICAgICAgIGxldCBtb250aCA9IG5vdy5nZXRNb250aCgpICsgMTtcbiAgICAgICAgcmV0dXJuIGAke25vdy5nZXRGdWxsWWVhcigpfS0ke21vbnRoIDwgMTAgPyAnMCcgKyBtb250aCA6IG1vbnRofS0ke2RheSA8IDEwID8gJzAnICsgZGF5IDogZGF5fWA7XG4gICAgfTtcbiAgICBjb25zdCBzYW1wbGVQcm9qZWN0ID0ge1xuICAgICAgICBwcm9qZWN0OiBcbiAgICAgICAgLy9zYW1wbGUgcHJvamVjdCB0byBkaXNwbGF5IGluaXRpYWxseVxuICAgICAgICB7IHByb2plY3ROYW1lOiAnU2FtcGxlIFByb2plY3QnLCBwcm9qZWN0Q29sb3VyOiAnIzQ4ZDFjYycgfSxcbiAgICAgICAgdG9kb3M6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0b2RvTmFtZTogYEZpbmlzaCAnVGhlIEZhZGVkIFN1bjogS2Vzcml0aCdgLFxuICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbjogJ0ZpbmlzaCByZWFkaW5nIHRoZSBib29rIC0gcmV0dXJuIHNvb24hJyxcbiAgICAgICAgICAgICAgICB0b2RvRHVlRGF0ZTogYCR7c2FtcGxlVXJnZW50RHVlRGF0ZShub3cpfWAsXG4gICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5OiAndXJnZW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdG9kb05hbWU6ICdWZXQgQXBwb2ludG1lbnQnLFxuICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbjogJ1Rha2UgTmlnaHRleWVzIHRvIHRoZSB2ZXQgZm9yIHJvdXRpbmUgY2hlY2t1cCcsXG4gICAgICAgICAgICAgICAgdG9kb0R1ZURhdGU6IGAke3NhbXBsZU1lZER1ZURhdGUobm93KX1gLFxuICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eTogJ21lZGl1bScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRvZG9OYW1lOiAnQmFja3BhY2tpbmcgdHJpcCB0byBOZXBhbCcsXG4gICAgICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uOiAnUGxhbiByb3V0ZSwgc3VwcGxpZXMgYW5kIGFwcGx5IGZvciB2aXNhJyxcbiAgICAgICAgICAgICAgICB0b2RvRHVlRGF0ZTogYCR7c2FtcGxlTG93RHVlRGF0ZShub3cpfWAsXG4gICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5OiAnbG93JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfTtcbiAgICAvL29uIGZpcnN0IGxvYWQgb25seVxuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oc2FtcGxlUHJvamVjdC5wcm9qZWN0LnByb2plY3ROYW1lKSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzYW1wbGVQcm9qZWN0LnByb2plY3QucHJvamVjdE5hbWUsIEpTT04uc3RyaW5naWZ5KHNhbXBsZVByb2plY3QpKTtcbiAgICB9XG59O1xuZXhwb3J0cy5zdG9yZVNhbXBsZVByb2plY3QgPSBzdG9yZVNhbXBsZVByb2plY3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2lkZWJhciA9IHZvaWQgMDtcbmNvbnN0IGVsZW1lbnRfY3JlYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50LWNyZWF0b3JzXCIpO1xuY29uc3QgaGFuZGxlQWRkTmV3UHJvamVjdEljb25DbGlja18xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZUFkZE5ld1Byb2plY3RJY29uQ2xpY2tcIik7XG5jb25zdCBoYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrXzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlQWRkTmV3VG9kb0ljb25DbGlja1wiKTtcbmNvbnN0IGhhbmRsZUFyY2hpdmVkVGFiQ2xpY2tfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVBcmNoaXZlZFRhYkNsaWNrXCIpO1xuY29uc3QgaGFuZGxlVXBjb21pbmdUYWJDbGlja18xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZVVwY29taW5nVGFiQ2xpY2tcIik7XG5jb25zdCBoYW5kbGVUb2RheVRhYkNsaWNrXzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlVG9kYXlUYWJDbGlja1wiKTtcbmNvbnN0IGhhbmRsZVByb2plY3RzVGFiQ2xpY2tfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVQcm9qZWN0c1RhYkNsaWNrXCIpO1xuY29uc3QgaGFuZGxlQ3JlYXRlZFRhYnNDbGlja18xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZUNyZWF0ZWRUYWJzQ2xpY2tcIik7XG5jb25zdCBzaWRlYmFyID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpO1xuICAgIGNvbnN0IHNpZGViYXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydzaWRlYmFyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShyb290KShzaWRlYmFyKTtcbiAgICBjb25zdCB0b2RheUNvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3NpZGViYXItdGFiJywgJ2NvbnRhaW5lci10b2RheSddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVUb2RheVRhYkNsaWNrXzEuaGFuZGxlVG9kYXlUYWJDbGljaykodG9kYXlDb250YWluZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzaWRlYmFyKSh0b2RheUNvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kYXlDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmNyZWF0ZUltYWdlKSgnLi4vLi4vZGlzdC9hc3NldHMvaWNvbnMvYXBlcnR1cmUuc3ZnJykoWydpY29uJywgJ2ljb24tdG9kYXknXSkoYGljb24gcmVwcmVzZW50aW5nIHRvZGF5J3MgZXZlbnRzYCkoJ1RvZGF5JykpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnVG9kYXknKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZGF5Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2g0JykoWyd0YWItdGV4dCcsICd0b2RheS10YWInXSkpO1xuICAgIGNvbnN0IHVwY29taW5nQ29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnc2lkZWJhci10YWInLCAnY29udGFpbmVyLXVwY29taW5nJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdjbGljaycpKGhhbmRsZVVwY29taW5nVGFiQ2xpY2tfMS5oYW5kbGVVcGNvbWluZ1RhYkNsaWNrKSh1cGNvbWluZ0NvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNpZGViYXIpKHVwY29taW5nQ29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh1cGNvbWluZ0NvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuY3JlYXRlSW1hZ2UpKCcuLi8uLi9kaXN0L2Fzc2V0cy9pY29ucy9jYWxlbmRhci5zdmcnKShbJ2ljb24nLCAndXBjb21pbmctaWNvbiddKSgnaWNvbiByZXByZXNlbnRpbmcgdXBjb21pbmcgZXZlbnRzJykoJ1VwY29taW5nJykpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnVXBjb21pbmcnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHVwY29taW5nQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2g0JykoWyd0YWItdGV4dCcsICd0YWItdXBjb21pbmcnXSkpO1xuICAgIGNvbnN0IGFyY2hpdmVkQ29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnc2lkZWJhci10YWInLCAnY29udGFpbmVyLWFyY2hpdmVkJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdjbGljaycpKGhhbmRsZUFyY2hpdmVkVGFiQ2xpY2tfMS5oYW5kbGVBcmNoaXZlZFRhYkNsaWNrKShhcmNoaXZlZENvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNpZGViYXIpKGFyY2hpdmVkQ29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhcmNoaXZlZENvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuY3JlYXRlSW1hZ2UpKCcuLi8uLi9kaXN0L2Fzc2V0cy9pY29ucy9hcmNoaXZlLnN2ZycpKFsnaWNvbicsICdhcmNoaXZlZC1pY29uJ10pKCdpY29uIHJlcHJlc2VudGluZyBhcmNoaXZlZCBldmVudHMnKSgnQXJjaGl2ZWQnKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdBcmNoaXZlZCcpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYXJjaGl2ZWRDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaDQnKShbJ3RhYi10ZXh0JywgJ3RhYi1hcmNoaXZlZCddKSk7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydzaWRlYmFyLWhlYWRpbmcnLCAnY29udGFpbmVyLXByb2plY3RzJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzaWRlYmFyKShwcm9qZWN0c0NvbnRhaW5lcik7XG4gICAgY29uc3QgcHJvamVjdHNIZWFkaW5nID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsncHJvamVjdEhlYWRpbmctd3JhcHBlciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkocHJvamVjdHNDb250YWluZXIpKHByb2plY3RzSGVhZGluZyk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVQcm9qZWN0c1RhYkNsaWNrXzEuaGFuZGxlUHJvamVjdHNUYWJDbGljayksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ1Byb2plY3RzJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShwcm9qZWN0c0hlYWRpbmcpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaDMnKShbJ2hlYWRpbmctdGV4dCcsICd0ZXh0LXByb2plY3RzJ10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdjbGljaycpKGhhbmRsZUFkZE5ld1Byb2plY3RJY29uQ2xpY2tfMS5oYW5kbGVBZGROZXdQcm9qZWN0SWNvbkNsaWNrKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHByb2plY3RzSGVhZGluZykpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuY3JlYXRlSW1hZ2UpKCcuLi8uLi9kaXN0L2Fzc2V0cy9pY29ucy9wbHVzLnN2ZycpKFsnaWNvbicsICdpY29uLXBsdXMnXSkoJ2ljb24gb2YgcGx1cyBzeW1ib2wnKSgnQWRkIE5ldyBQcm9qZWN0JykpO1xuICAgIGNvbnN0IHNhbXBsZVByb2plY3RDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydzaWRlYmFyLXByb2plY3QnLCAncHJvamVjdCddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkocHJvamVjdHNDb250YWluZXIpKHNhbXBsZVByb2plY3RDb250YWluZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRTdHlsZVRvRWxlbSkoW1snY29sb3InLCAnIzQ4ZDFjYyddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdjbGljaycpKGhhbmRsZUNyZWF0ZWRUYWJzQ2xpY2tfMS5oYW5kbGVDcmVhdGVkVGFic0NsaWNrKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnU2FtcGxlIFByb2plY3QnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNhbXBsZVByb2plY3RDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaDQnKShbJ3Byb2plY3QtdGV4dCcsICd0ZXh0LXNhbXBsZVByb2plY3QnXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWydkYXRhLW5hbWUnLCBgU2FtcGxlIFByb2plY3RgXSxcbiAgICAgICAgWydkYXRhLWNvbG91cicsICcjNDhkMWNjJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdjbGljaycpKGhhbmRsZUFkZE5ld1RvZG9JY29uQ2xpY2tfMS5oYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNhbXBsZVByb2plY3RDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmNyZWF0ZUltYWdlKSgnLi4vLi4vLi4vZGlzdC9hc3NldHMvaWNvbnMvcGx1cy5zdmcnKShbJ2ljb24nLCAnaWNvbi1wbHVzJ10pKCdpY29uIG9mIHBsdXMgc3ltYm9sJykoJ0FkZCBOZXcgVG9kbycpKTtcbn07XG5leHBvcnRzLnNpZGViYXIgPSBzaWRlYmFyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xucmVxdWlyZShcIi4vaW5kZXguY3NzXCIpO1xuY29uc3QgY29udGVudF8xID0gcmVxdWlyZShcIi4vdHMvY29udGVudC9jb250ZW50XCIpO1xuY29uc3QgaGVhZGVyXzEgPSByZXF1aXJlKFwiLi90cy9oZWFkZXIvaGVhZGVyXCIpO1xuY29uc3Qgc2lkZWJhcl8xID0gcmVxdWlyZShcIi4vdHMvc2lkZWJhci9zaWRlYmFyXCIpO1xuY29uc3QgcHJvamVjdHNBbmRUb2Rvc09ubG9hZF8xID0gcmVxdWlyZShcIi4vdHMvcHJvamVjdHNBbmRUb2Rvcy9wcm9qZWN0c0FuZFRvZG9zT25sb2FkXCIpO1xuY29uc3Qgc3RvcmVTYW1wbGVQcm9qZWN0XzEgPSByZXF1aXJlKFwiLi90cy9wcm9qZWN0c0FuZFRvZG9zL3N0b3JlU2FtcGxlUHJvamVjdFwiKTtcbmNvbnN0IGFyY2hpdmVFeHBpcmVkVG9kb3NfMSA9IHJlcXVpcmUoXCIuL3RzL3Byb2plY3RzQW5kVG9kb3MvYXJjaGl2ZUV4cGlyZWRUb2Rvc1wiKTtcbmNvbnN0IG1haW5BcHAgPSBmdW5jdGlvbiAoKSB7XG4gICAgKDAsIGhlYWRlcl8xLmhlYWRlcikoKTtcbiAgICAoMCwgc2lkZWJhcl8xLnNpZGViYXIpKCk7XG4gICAgKDAsIGNvbnRlbnRfMS5jb250ZW50KSgpO1xuICAgICgwLCBzdG9yZVNhbXBsZVByb2plY3RfMS5zdG9yZVNhbXBsZVByb2plY3QpKCk7XG4gICAgKDAsIGFyY2hpdmVFeHBpcmVkVG9kb3NfMS5hcmNoaXZlRXhwaXJlZFRvZG9zKSgpO1xuICAgIC8vcnVucyBvbiBldmVyeSByZWZyZXNoXG4gICAgc2VsZi5vbmxvYWQgPSBwcm9qZWN0c0FuZFRvZG9zT25sb2FkXzEucHJvamVjdHNBbmRUb2Rvc09ubG9hZDtcbn07XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbWFpbkFwcCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=