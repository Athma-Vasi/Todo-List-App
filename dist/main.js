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
    const form = (0, element_creators_1.elemCreator)('form')(['form-searchTodo']);
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([
        ['action', '#'],
        ['method', 'post'],
        ['id', 'form-searchTodo'],
        ['name', 'search-todo'],
    ]), (0, element_creators_1.appendElemToParent)(top))(form);
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([['for', 'searchTodo']]), (0, element_creators_1.appendElemToParent)(form))((0, element_creators_1.elemCreator)('label')(['label-search']));
    const searchTodo = (0, element_creators_1.elemCreator)('input')(['searchTodo']);
    (0, element_creators_1.addAttributeToElem)([
        ['type', 'search'],
        ['placeholder', 'search for a todo in selected project'],
        ['id', 'searchTodo'],
        ['name', 'search-todo'],
    ])(searchTodo);
    (0, element_creators_1.appendElemToParent)(form)(searchTodo);
    (0, element_creators_1.pipe)((0, element_creators_1.appendElemToParent)(form))((0, element_creators_1.createImage)('../../src/assets/icons/search.svg')(['icon', 'icon-search'])('icon of magnifying glass representing search')('Search'));
    (0, element_creators_1.pipe)((0, element_creators_1.addEvtListener)('click')(handleThemeIconToggle_1.handleThemeIconToggle), (0, element_creators_1.appendElemToParent)(top))((0, element_creators_1.createImage)('../../src/assets/icons/moon.svg')(['icon', 'icon-moon'])('icon of moon representing dark mode')('Dark Mode'));
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
    //TODO: clicking archived tab before storage key is set returns '' which JSON.parse cannot parse
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
    if (!localStorage.getItem('today')) {
        localStorage.setItem('today', JSON.stringify([]));
    }
    const projectArr = [];
    //grab all the projects except ones specified
    Object.keys(localStorage).forEach((key) => {
        var _a;
        if (key !== 'projectNames' &&
            key !== 'archived' &&
            key !== 'upcoming' &&
            key !== 'today') {
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
        if (key !== 'projectNames' &&
            key !== 'archived' &&
            key !== 'upcoming' &&
            key !== 'today') {
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
    if (!localStorage.getItem('today')) {
        localStorage.setItem('today', JSON.stringify([]));
    }
    const projectArr = [];
    //grab all the projects except ones specified
    Object.keys(localStorage).forEach((key) => {
        var _a;
        if (key !== 'projectNames' &&
            key !== 'archived' &&
            key !== 'upcoming' &&
            key !== 'today') {
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
        (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)(`${todoDueDate}`), (0, element_creators_1.appendElemToParent)(dateAndPriorityContainer))((0, element_creators_1.elemCreator)('p')(['todoContent-dueDate']));
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
        if (key !== 'Sample Project' &&
            key !== 'projectNames' &&
            key !== 'archived' &&
            key !== 'upcoming' &&
            key !== 'today') {
            projects.push(JSON.parse((_a = localStorage.getItem(key)) !== null && _a !== void 0 ? _a : ''));
        }
    });
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
const mainApp = function () {
    const log = (i) => console.log('\n', i);
    const root = document.querySelector('#root');
    (0, header_1.header)();
    (0, sidebar_1.sidebar)();
    (0, content_1.content)();
    (0, storeSampleProject_1.storeSampleProject)();
    //runs on every refresh
    self.onload = projectsAndTodosOnload_1.projectsAndTodosOnload;
};
document.addEventListener('DOMContentLoaded', mainApp);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7O0FDTmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUJBQU8sQ0FBQyxvQ0FBYTtBQUNyQixrQkFBa0IsbUJBQU8sQ0FBQyx5REFBc0I7QUFDaEQsaUJBQWlCLG1CQUFPLENBQUMscURBQW9CO0FBQzdDLGtCQUFrQixtQkFBTyxDQUFDLHlEQUFzQjtBQUNoRCxpQ0FBaUMsbUJBQU8sQ0FBQyx5R0FBOEM7QUFDdkYsNkJBQTZCLG1CQUFPLENBQUMsaUdBQTBDO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2NvbnRlbnQvY29udGVudC50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2VsZW1lbnQtY3JlYXRvcnMudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVBZGROZXdQcm9qZWN0SWNvbkNsaWNrLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZXZlbnRDQnMvaGFuZGxlQWRkTmV3VG9kb0ljb25DbGljay50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2V2ZW50Q0JzL2hhbmRsZUFyY2hpdmVkVGFiQ2xpY2sudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVDcmVhdGVkVGFic0NsaWNrLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZXZlbnRDQnMvaGFuZGxlUHJvamVjdENsb3NlSWNvbkNsaWNrLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZXZlbnRDQnMvaGFuZGxlUHJvamVjdEZvcm1TdWJtaXQudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVQcm9qZWN0c1RhYkNsaWNrLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZXZlbnRDQnMvaGFuZGxlVGhlbWVJY29uVG9nZ2xlLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZXZlbnRDQnMvaGFuZGxlVG9kYXlUYWJDbGljay50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2V2ZW50Q0JzL2hhbmRsZVRvZG9DaGVja2JveENvbXBsZXRlLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZXZlbnRDQnMvaGFuZGxlVG9kb0Nsb3NlSWNvbkNsaWNrLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZXZlbnRDQnMvaGFuZGxlVG9kb0Zvcm1TdWJtaXQudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVVcGNvbWluZ1RhYkNsaWNrLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvaGVhZGVyL2hlYWRlci50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL21vZGFscy9wcm9qZWN0TW9kYWwudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9tb2RhbHMvdG9kb01vZGFsLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvcHJvamVjdHNBbmRUb2Rvcy9hZGRQcm9qZWN0VG9TaWRlYmFyLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvcHJvamVjdHNBbmRUb2Rvcy9hZGRUb2Rvc1RvQ29udGVudC50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL3Byb2plY3RzQW5kVG9kb3MvcHJvamVjdHNBbmRUb2Rvc09ubG9hZC50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL3Byb2plY3RzQW5kVG9kb3Mvc3RvcmVQcm9qZWN0QW5kVG9kb3NGdWxsLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvcHJvamVjdHNBbmRUb2Rvcy9zdG9yZVNhbXBsZVByb2plY3QudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9zaWRlYmFyL3NpZGViYXIudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY29udGVudCA9IHZvaWQgMDtcbmNvbnN0IGVsZW1lbnRfY3JlYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50LWNyZWF0b3JzXCIpO1xuY29uc3QgaGFuZGxlVGhlbWVJY29uVG9nZ2xlXzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlVGhlbWVJY29uVG9nZ2xlXCIpO1xuY29uc3QgY29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBsb2cgPSAoaSkgPT4gY29uc29sZS5sb2coJ1xcbicsIGkpO1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydjb250ZW50J10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShyb290KShjb250ZW50KTtcbiAgICBjb25zdCB0b3AgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydjb250ZW50LXRvcCddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoY29udGVudCkodG9wKTtcbiAgICBjb25zdCBmb3JtID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2Zvcm0nKShbJ2Zvcm0tc2VhcmNoVG9kbyddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsnYWN0aW9uJywgJyMnXSxcbiAgICAgICAgWydtZXRob2QnLCAncG9zdCddLFxuICAgICAgICBbJ2lkJywgJ2Zvcm0tc2VhcmNoVG9kbyddLFxuICAgICAgICBbJ25hbWUnLCAnc2VhcmNoLXRvZG8nXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvcCkpKGZvcm0pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ2ZvcicsICdzZWFyY2hUb2RvJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGZvcm0pKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnbGFiZWwnKShbJ2xhYmVsLXNlYXJjaCddKSk7XG4gICAgY29uc3Qgc2VhcmNoVG9kbyA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdpbnB1dCcpKFsnc2VhcmNoVG9kbyddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ3R5cGUnLCAnc2VhcmNoJ10sXG4gICAgICAgIFsncGxhY2Vob2xkZXInLCAnc2VhcmNoIGZvciBhIHRvZG8gaW4gc2VsZWN0ZWQgcHJvamVjdCddLFxuICAgICAgICBbJ2lkJywgJ3NlYXJjaFRvZG8nXSxcbiAgICAgICAgWyduYW1lJywgJ3NlYXJjaC10b2RvJ10sXG4gICAgXSkoc2VhcmNoVG9kbyk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGZvcm0pKHNlYXJjaFRvZG8pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGZvcm0pKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmNyZWF0ZUltYWdlKSgnLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy9zZWFyY2guc3ZnJykoWydpY29uJywgJ2ljb24tc2VhcmNoJ10pKCdpY29uIG9mIG1hZ25pZnlpbmcgZ2xhc3MgcmVwcmVzZW50aW5nIHNlYXJjaCcpKCdTZWFyY2gnKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVUaGVtZUljb25Ub2dnbGVfMS5oYW5kbGVUaGVtZUljb25Ub2dnbGUpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9wKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5jcmVhdGVJbWFnZSkoJy4uLy4uL3NyYy9hc3NldHMvaWNvbnMvbW9vbi5zdmcnKShbJ2ljb24nLCAnaWNvbi1tb29uJ10pKCdpY29uIG9mIG1vb24gcmVwcmVzZW50aW5nIGRhcmsgbW9kZScpKCdEYXJrIE1vZGUnKSk7XG4gICAgY29uc3QgY29udGVudEJvdHRvbSA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2NvbnRlbnQtYm90dG9tJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShjb250ZW50KShjb250ZW50Qm90dG9tKTtcbn07XG5leHBvcnRzLmNvbnRlbnQgPSBjb250ZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBpcGUgPSBleHBvcnRzLmFkZFN0eWxlVG9FbGVtID0gZXhwb3J0cy5hZGRFdnRMaXN0ZW5lciA9IGV4cG9ydHMuY3JlYXRlSW1hZ2UgPSBleHBvcnRzLmFkZEF0dHJpYnV0ZVRvRWxlbSA9IGV4cG9ydHMuYWRkVGV4dFRvRWxlbSA9IGV4cG9ydHMuYXBwZW5kRWxlbVRvUGFyZW50ID0gZXhwb3J0cy5lbGVtQ3JlYXRvciA9IHZvaWQgMDtcbmNvbnN0IGVsZW1DcmVhdG9yID0gKGVsZW1fKSA9PiAoY2xhc3NfKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbV8pO1xuICAgIHJldHVybiBjbGFzc18ucmVkdWNlKChlbGVtLCBjdXJyQ2xhc3MpID0+IHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKGN1cnJDbGFzcyk7XG4gICAgICAgIHJldHVybiBlbGVtO1xuICAgIH0sIGVsZW1lbnQpO1xufTtcbmV4cG9ydHMuZWxlbUNyZWF0b3IgPSBlbGVtQ3JlYXRvcjtcbmNvbnN0IGFkZEF0dHJpYnV0ZVRvRWxlbSA9IChhdHRyVmFsc18pID0+IChlbGVtXykgPT4ge1xuICAgIHJldHVybiBhdHRyVmFsc18ucmVkdWNlKChlbGVtZW50LCBjdXJyKSA9PiB7XG4gICAgICAgIGlmIChjdXJyLmxlbmd0aCA+IDIpXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVsZW1lbnQuc2V0QXR0cmlidXRlKGN1cnJbMF0sIGN1cnJbMV0pO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9LCBlbGVtXyk7XG59O1xuZXhwb3J0cy5hZGRBdHRyaWJ1dGVUb0VsZW0gPSBhZGRBdHRyaWJ1dGVUb0VsZW07XG5jb25zdCBhZGRTdHlsZVRvRWxlbSA9IChzdHlsZVByb3BWYWxzXykgPT4gKGVsZW1fKSA9PiB7XG4gICAgcmV0dXJuIHN0eWxlUHJvcFZhbHNfLnJlZHVjZSgoZWxlbWVudCwgY3VycikgPT4ge1xuICAgICAgICBpZiAoY3Vyci5sZW5ndGggPiAyKVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KGN1cnJbMF0sIGN1cnJbMV0pO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9LCBlbGVtXyk7XG59O1xuZXhwb3J0cy5hZGRTdHlsZVRvRWxlbSA9IGFkZFN0eWxlVG9FbGVtO1xuY29uc3QgYWRkVGV4dFRvRWxlbSA9ICh0ZXh0XykgPT4gKGVsZW1fKSA9PiB7XG4gICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0Xyk7XG4gICAgZWxlbV8gPT09IG51bGwgfHwgZWxlbV8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVsZW1fLmFwcGVuZENoaWxkKHRleHROb2RlKTtcbiAgICByZXR1cm4gZWxlbV87XG59O1xuZXhwb3J0cy5hZGRUZXh0VG9FbGVtID0gYWRkVGV4dFRvRWxlbTtcbmNvbnN0IGFwcGVuZEVsZW1Ub1BhcmVudCA9IChwYXJlbnRfKSA9PiAoY2hpbGRfKSA9PiB7XG4gICAgaWYgKGNoaWxkXylcbiAgICAgICAgcGFyZW50XyA9PT0gbnVsbCB8fCBwYXJlbnRfID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJlbnRfLmFwcGVuZENoaWxkKGNoaWxkXyk7XG59O1xuZXhwb3J0cy5hcHBlbmRFbGVtVG9QYXJlbnQgPSBhcHBlbmRFbGVtVG9QYXJlbnQ7XG5jb25zdCBjcmVhdGVJbWFnZSA9IChzb3VyY2VfKSA9PiAoY2xhc3NfKSA9PiAoYWx0XykgPT4gKHRpdGxlXykgPT4ge1xuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gc291cmNlXztcbiAgICBpbWFnZS5hbHQgPSBhbHRfO1xuICAgIGltYWdlLnRpdGxlID0gdGl0bGVfO1xuICAgIHJldHVybiBjbGFzc18ucmVkdWNlKChlbGVtLCBjdXJyQ2xhc3MpID0+IHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKGN1cnJDbGFzcyk7XG4gICAgICAgIHJldHVybiBlbGVtO1xuICAgIH0sIGltYWdlKTtcbn07XG5leHBvcnRzLmNyZWF0ZUltYWdlID0gY3JlYXRlSW1hZ2U7XG5jb25zdCBhZGRFdnRMaXN0ZW5lciA9IChldnRfKSA9PiAoaGFuZGxlRXZ0XykgPT4gKGVsZW1fKSA9PiB7XG4gICAgZWxlbV8gPT09IG51bGwgfHwgZWxlbV8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVsZW1fLmFkZEV2ZW50TGlzdGVuZXIoZXZ0XywgaGFuZGxlRXZ0Xyk7XG4gICAgcmV0dXJuIGVsZW1fO1xufTtcbmV4cG9ydHMuYWRkRXZ0TGlzdGVuZXIgPSBhZGRFdnRMaXN0ZW5lcjtcbi8vIGZ1bmN0aW9uIHBpcGU8Vj4oLi4uZnVuY3M6IEFycmF5PChfOiBWKSA9PiBWPik6IChfOiBWKSA9PiBWIHwgbnVsbCB8IHZvaWQge1xuLy8gXHRyZXR1cm4gZnVuY3Rpb24gKHZhbHVlOiBWKSB7XG4vLyBcdFx0cmV0dXJuIGZ1bmNzLnJlZHVjZSgodmFsLCBmdW5jKSA9PiB7XG4vLyBcdFx0XHRyZXR1cm4gZnVuYyh2YWwpXG4vLyBcdFx0fSwgdmFsdWUpXG4vLyBcdH1cbi8vIH1cbmNvbnN0IHBpcGUgPSAoLi4uZnVuY3MpID0+ICh2YWx1ZSkgPT4gZnVuY3MucmVkdWNlKChyZXMsIGZ1bmMpID0+IGZ1bmMocmVzKSwgdmFsdWUpO1xuZXhwb3J0cy5waXBlID0gcGlwZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVBZGROZXdQcm9qZWN0SWNvbkNsaWNrID0gdm9pZCAwO1xuY29uc3QgcHJvamVjdE1vZGFsXzEgPSByZXF1aXJlKFwiLi4vbW9kYWxzL3Byb2plY3RNb2RhbFwiKTtcbmNvbnN0IGhhbmRsZUFkZE5ld1Byb2plY3RJY29uQ2xpY2sgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAoMCwgcHJvamVjdE1vZGFsXzEucHJvamVjdE1vZGFsKSgpO1xuICAgIGNvbnN0IGFkZFByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgIGlmIChhZGRQcm9qZWN0TW9kYWwpIHtcbiAgICAgICAgYWRkUHJvamVjdE1vZGFsLnN0eWxlLnZpc2liaWxpdHkgPVxuICAgICAgICAgICAgKGFkZFByb2plY3RNb2RhbCA9PT0gbnVsbCB8fCBhZGRQcm9qZWN0TW9kYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFkZFByb2plY3RNb2RhbC5zdHlsZS52aXNpYmlsaXR5KSA9PT0gJ3Zpc2libGUnID8gJ2hpZGRlbicgOiAndmlzaWJsZSc7XG4gICAgfVxufTtcbmV4cG9ydHMuaGFuZGxlQWRkTmV3UHJvamVjdEljb25DbGljayA9IGhhbmRsZUFkZE5ld1Byb2plY3RJY29uQ2xpY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlQWRkTmV3VG9kb0ljb25DbGljayA9IHZvaWQgMDtcbmNvbnN0IHRvZG9Nb2RhbF8xID0gcmVxdWlyZShcIi4uL21vZGFscy90b2RvTW9kYWxcIik7XG5jb25zdCBoYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSwgX2I7XG4gICAgY29uc3QgcHJvamVjdERhdGFOYW1lID0gKF9hID0gdGhpcy5kYXRhc2V0Lm5hbWUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnO1xuICAgIGNvbnN0IHByb2plY3REYXRhQ29sb3VyID0gKF9iID0gdGhpcy5kYXRhc2V0LmNvbG91cikgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJyc7XG4gICAgKDAsIHRvZG9Nb2RhbF8xLnRvZG9Nb2RhbCkocHJvamVjdERhdGFOYW1lLCBwcm9qZWN0RGF0YUNvbG91cik7XG4gICAgY29uc3QgYWRkVG9kb01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJyk7XG4gICAgaWYgKGFkZFRvZG9Nb2RhbClcbiAgICAgICAgYWRkVG9kb01vZGFsLnN0eWxlLnZpc2liaWxpdHkgPVxuICAgICAgICAgICAgKGFkZFRvZG9Nb2RhbCA9PT0gbnVsbCB8fCBhZGRUb2RvTW9kYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFkZFRvZG9Nb2RhbC5zdHlsZS52aXNpYmlsaXR5KSA9PT0gJ3Zpc2libGUnID8gJ2hpZGRlbicgOiAndmlzaWJsZSc7XG59O1xuZXhwb3J0cy5oYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrID0gaGFuZGxlQWRkTmV3VG9kb0ljb25DbGljaztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVBcmNoaXZlZFRhYkNsaWNrID0gdm9pZCAwO1xuY29uc3QgYWRkVG9kb3NUb0NvbnRlbnRfMSA9IHJlcXVpcmUoXCIuLi9wcm9qZWN0c0FuZFRvZG9zL2FkZFRvZG9zVG9Db250ZW50XCIpO1xuY29uc3QgZWxlbWVudF9jcmVhdG9yc18xID0gcmVxdWlyZShcIi4uL2VsZW1lbnQtY3JlYXRvcnNcIik7XG5jb25zdCBoYW5kbGVBcmNoaXZlZFRhYkNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBsb2cgPSAoaSkgPT4gY29uc29sZS5sb2coJ1xcbicsIGkpO1xuICAgIC8vcmVtb3ZlIGNvbnRlbnQgc2VjdGlvbidzIHByZXZpb3VzIGNvbnRlbnRzXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3QgY29udGVudEJvdHRvbVByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1ib3R0b20nKTtcbiAgICBjb250ZW50Qm90dG9tUHJldiA9PT0gbnVsbCB8fCBjb250ZW50Qm90dG9tUHJldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGVudEJvdHRvbVByZXYucmVtb3ZlKCk7XG4gICAgLy9yZW5kZXIgbmV3IGNvbnRlbnRcbiAgICBjb25zdCBjb250ZW50Qm90dG9tID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnY29udGVudC1ib3R0b20nXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGNvbnRlbnQpKGNvbnRlbnRCb3R0b20pO1xuICAgIGNvbnN0IGFyY2hpdmVkU3RvcmFnZUFyciA9IEpTT04ucGFyc2UoKF9hID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FyY2hpdmVkJykpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnKTtcbiAgICAvL1RPRE86IGNsaWNraW5nIGFyY2hpdmVkIHRhYiBiZWZvcmUgc3RvcmFnZSBrZXkgaXMgc2V0IHJldHVybnMgJycgd2hpY2ggSlNPTi5wYXJzZSBjYW5ub3QgcGFyc2VcbiAgICBhcmNoaXZlZFN0b3JhZ2VBcnIuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAoMCwgYWRkVG9kb3NUb0NvbnRlbnRfMS5hZGRUb2Rvc1RvQ29udGVudCkocHJvamVjdCwgdHJ1ZSk7XG4gICAgfSk7XG59O1xuZXhwb3J0cy5oYW5kbGVBcmNoaXZlZFRhYkNsaWNrID0gaGFuZGxlQXJjaGl2ZWRUYWJDbGljaztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVDcmVhdGVkVGFic0NsaWNrID0gdm9pZCAwO1xuY29uc3QgYWRkVG9kb3NUb0NvbnRlbnRfMSA9IHJlcXVpcmUoXCIuLi9wcm9qZWN0c0FuZFRvZG9zL2FkZFRvZG9zVG9Db250ZW50XCIpO1xuY29uc3QgZWxlbWVudF9jcmVhdG9yc18xID0gcmVxdWlyZShcIi4uL2VsZW1lbnQtY3JlYXRvcnNcIik7XG5jb25zdCBoYW5kbGVDcmVhdGVkVGFic0NsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGxvZyA9IChpKSA9PiBjb25zb2xlLmxvZygnXFxuJywgaSk7XG4gICAgLy9yZW1vdmUgY29udGVudCBzZWN0aW9uJ3MgcHJldmlvdXMgY29udGVudHNcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBjb250ZW50Qm90dG9tUHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWJvdHRvbScpO1xuICAgIGNvbnRlbnRCb3R0b21QcmV2ID09PSBudWxsIHx8IGNvbnRlbnRCb3R0b21QcmV2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250ZW50Qm90dG9tUHJldi5yZW1vdmUoKTtcbiAgICBjb25zdCBjb250ZW50Qm90dG9tID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnY29udGVudC1ib3R0b20nXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGNvbnRlbnQpKGNvbnRlbnRCb3R0b20pO1xuICAgIGNvbnN0IHRoaXNQcm9qZWN0TmFtZSA9IHRoaXMudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgcHJvamVjdEFuZFRvZG9zT2JqQXJyID0gW107XG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoa2V5ID09PSB0aGlzUHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgIHByb2plY3RBbmRUb2Rvc09iakFyci5wdXNoKEpTT04ucGFyc2UoKF9hID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpc1Byb2plY3ROYW1lKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHByb2plY3RBbmRUb2Rvc09iakFyci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICgwLCBhZGRUb2Rvc1RvQ29udGVudF8xLmFkZFRvZG9zVG9Db250ZW50KShwcm9qZWN0KTtcbiAgICB9KTtcbn07XG5leHBvcnRzLmhhbmRsZUNyZWF0ZWRUYWJzQ2xpY2sgPSBoYW5kbGVDcmVhdGVkVGFic0NsaWNrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZVByb2plY3RDbG9zZUljb25DbGljayA9IHZvaWQgMDtcbmNvbnN0IGhhbmRsZVByb2plY3RDbG9zZUljb25DbGljayA9IGZ1bmN0aW9uIChldikge1xuICAgIGNvbnN0IGFkZFByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgIC8vIGlmIChhZGRQcm9qZWN0TW9kYWwpXG4gICAgLy8gXHRhZGRQcm9qZWN0TW9kYWwuc3R5bGUudmlzaWJpbGl0eSA9XG4gICAgLy8gXHRcdGFkZFByb2plY3RNb2RhbD8uc3R5bGUudmlzaWJpbGl0eSA9PT0gJ3Zpc2libGUnID8gJ2hpZGRlbicgOiAndmlzaWJsZSdcbiAgICBpZiAoYWRkUHJvamVjdE1vZGFsKVxuICAgICAgICBhZGRQcm9qZWN0TW9kYWwucmVtb3ZlKCk7XG59O1xuZXhwb3J0cy5oYW5kbGVQcm9qZWN0Q2xvc2VJY29uQ2xpY2sgPSBoYW5kbGVQcm9qZWN0Q2xvc2VJY29uQ2xpY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlUHJvamVjdEZvcm1TdWJtaXQgPSB2b2lkIDA7XG5jb25zdCBhZGRQcm9qZWN0VG9TaWRlYmFyXzEgPSByZXF1aXJlKFwiLi4vcHJvamVjdHNBbmRUb2Rvcy9hZGRQcm9qZWN0VG9TaWRlYmFyXCIpO1xuY29uc3QgaGFuZGxlUHJvamVjdEZvcm1TdWJtaXQgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdC1jb250YWluZXInKTtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XG4gICAgY29uc3QgcHJvamVjdEZvcm1OYW1lID0gKF9iID0gKF9hID0gcHJvamVjdEZvcm1EYXRhLmdldCgnYWRkUHJvamVjdC1uYW1lJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b1N0cmluZygpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnJztcbiAgICBjb25zdCBwcm9qZWN0Rm9ybUNvbG91ciA9IChfZCA9IChfYyA9IHByb2plY3RGb3JtRGF0YS5nZXQoJ2FkZFByb2plY3QtY29sb3VyJykpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy50b1N0cmluZygpKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiAnJztcbiAgICAvL2lmICdwcm9qZWN0TmFtZXMnIGRvZXNuJ3QgZXhpc3QsIGNyZWF0ZSBpdCwgb3RoZXJ3aXNlIGRvIG5vdGhpbmdcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0TmFtZXMnKSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdE5hbWVzJywgSlNPTi5zdHJpbmdpZnkoW10pKTtcbiAgICB9XG4gICAgY29uc3Qgc3RvcmVQcm9qZWN0ID0gKGZ1bmN0aW9uIChwcm9qZWN0Rm9ybU5hbWVfKSB7XG4gICAgICAgIC8vaWYga2V5IGluIGxvY2Fsc3RvcmFnZSBpcyBwcm9qZWN0TmFtZXMsIHRoZW4gZ2V0IHRoZSB2YWx1ZXMgYXNcbiAgICAgICAgLy9hbiBhcnJheVxuICAgICAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ3Byb2plY3ROYW1lcycpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzU2V0ID0gbmV3IFNldChKU09OLnBhcnNlKChfYSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnKSk7XG4gICAgICAgICAgICAgICAgWyd0b2RheScsICd1cGNvbWluZycsICdhcmNoaXZlZCcsICdwcm9qZWN0cyddLmZvckVhY2goKG5hbWUpID0+IGtleXNTZXQuYWRkKG5hbWUpKTtcbiAgICAgICAgICAgICAgICAvL2lmIG5hbWUgYWxyZWFkeSBwcmVzZW50XG4gICAgICAgICAgICAgICAgaWYgKGtleXNTZXQuaGFzKHByb2plY3RGb3JtTmFtZV8pKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGAke3Byb2plY3RGb3JtTmFtZV99IGFscmVhZHkgZXhpc3RzIGFzIGEgcHJvamVjdCAo772h4oCizIHvuL/igKLMgO+9oSkgIFBsZWFzZSBjaG9vc2UgYW5vdGhlciBuYW1lLmApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL2lmIG5ldyBuYW1lLCBwdXNoIHRvIGFyciBhbmQgdGhlbiBzdG9yZSBhcnJheSBpbiBsb2NhbFN0b3JhZ2VcbiAgICAgICAgICAgICAgICAgICAga2V5c1NldC5hZGQocHJvamVjdEZvcm1OYW1lXyk7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoQXJyYXkuZnJvbShrZXlzU2V0KSkpO1xuICAgICAgICAgICAgICAgICAgICAoMCwgYWRkUHJvamVjdFRvU2lkZWJhcl8xLmFkZFByb2plY3RUb1NpZGViYXIpKHByb2plY3RGb3JtTmFtZSwgcHJvamVjdEZvcm1Db2xvdXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSkocHJvamVjdEZvcm1OYW1lKTtcbiAgICAvL1xuICAgIC8vXG4gICAgLy9cbiAgICAvLyBpZiAoYWRkUHJvamVjdE1vZGFsKVxuICAgIC8vIFx0YWRkUHJvamVjdE1vZGFsLnN0eWxlLnZpc2liaWxpdHkgPVxuICAgIC8vIFx0XHRhZGRQcm9qZWN0TW9kYWwuc3R5bGUudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbicgPyAndmlzaWJsZScgOiAnaGlkZGVuJ1xuICAgIGFkZFByb2plY3RNb2RhbCA9PT0gbnVsbCB8fCBhZGRQcm9qZWN0TW9kYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFkZFByb2plY3RNb2RhbC5yZW1vdmUoKTtcbn07XG5leHBvcnRzLmhhbmRsZVByb2plY3RGb3JtU3VibWl0ID0gaGFuZGxlUHJvamVjdEZvcm1TdWJtaXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlUHJvamVjdHNUYWJDbGljayA9IHZvaWQgMDtcbmNvbnN0IGFkZFRvZG9zVG9Db250ZW50XzEgPSByZXF1aXJlKFwiLi4vcHJvamVjdHNBbmRUb2Rvcy9hZGRUb2Rvc1RvQ29udGVudFwiKTtcbmNvbnN0IGVsZW1lbnRfY3JlYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50LWNyZWF0b3JzXCIpO1xuY29uc3QgaGFuZGxlUHJvamVjdHNUYWJDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBsb2cgPSAoaSkgPT4gY29uc29sZS5sb2coJ1xcbicsIGkpO1xuICAgIC8vcmVtb3ZlIGNvbnRlbnQgc2VjdGlvbidzIHByZXZpb3VzIGNvbnRlbnRzXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3QgY29udGVudEJvdHRvbVByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1ib3R0b20nKTtcbiAgICBjb250ZW50Qm90dG9tUHJldiA9PT0gbnVsbCB8fCBjb250ZW50Qm90dG9tUHJldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGVudEJvdHRvbVByZXYucmVtb3ZlKCk7XG4gICAgLy9yZW5kZXIgbmV3IGNvbnRlbnRcbiAgICBjb25zdCBjb250ZW50Qm90dG9tID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnY29udGVudC1ib3R0b20nXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGNvbnRlbnQpKGNvbnRlbnRCb3R0b20pO1xuICAgIGNvbnN0IHByb2plY3RzQW5kVG9kb3NBcnIgPSBbXTtcbiAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmIChrZXkgIT09ICdwcm9qZWN0TmFtZXMnICYmXG4gICAgICAgICAgICBrZXkgIT09ICdhcmNoaXZlZCcgJiZcbiAgICAgICAgICAgIGtleSAhPT0gJ3VwY29taW5nJyAmJlxuICAgICAgICAgICAga2V5ICE9PSAndG9kYXknKSB7XG4gICAgICAgICAgICBwcm9qZWN0c0FuZFRvZG9zQXJyLnB1c2goSlNPTi5wYXJzZSgoX2EgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcHJvamVjdHNBbmRUb2Rvc0Fyci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICgwLCBhZGRUb2Rvc1RvQ29udGVudF8xLmFkZFRvZG9zVG9Db250ZW50KShwcm9qZWN0KTtcbiAgICB9KTtcbn07XG5leHBvcnRzLmhhbmRsZVByb2plY3RzVGFiQ2xpY2sgPSBoYW5kbGVQcm9qZWN0c1RhYkNsaWNrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZVRoZW1lSWNvblRvZ2dsZSA9IHZvaWQgMDtcbmNvbnN0IGhhbmRsZVRoZW1lSWNvblRvZ2dsZSA9IGZ1bmN0aW9uIChldikge1xuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIGNvbnNvbGUubG9nKGV2KTtcbn07XG5leHBvcnRzLmhhbmRsZVRoZW1lSWNvblRvZ2dsZSA9IGhhbmRsZVRoZW1lSWNvblRvZ2dsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVUb2RheVRhYkNsaWNrID0gdm9pZCAwO1xuY29uc3QgZWxlbWVudF9jcmVhdG9yc18xID0gcmVxdWlyZShcIi4uL2VsZW1lbnQtY3JlYXRvcnNcIik7XG5jb25zdCBhZGRUb2Rvc1RvQ29udGVudF8xID0gcmVxdWlyZShcIi4uL3Byb2plY3RzQW5kVG9kb3MvYWRkVG9kb3NUb0NvbnRlbnRcIik7XG5jb25zdCBoYW5kbGVUb2RheVRhYkNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGxvZyA9IChpKSA9PiBjb25zb2xlLmxvZygnXFxuJywgaSk7XG4gICAgLy9yZW1vdmUgY29udGVudCBzZWN0aW9uJ3MgcHJldmlvdXMgY29udGVudHNcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBjb250ZW50Qm90dG9tUHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWJvdHRvbScpO1xuICAgIGNvbnRlbnRCb3R0b21QcmV2ID09PSBudWxsIHx8IGNvbnRlbnRCb3R0b21QcmV2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250ZW50Qm90dG9tUHJldi5yZW1vdmUoKTtcbiAgICAvL3JlbmRlciBuZXcgY29udGVudCBhbmQgYXBwZW5kIHRvIHRoaXNcbiAgICBjb25zdCBjb250ZW50Qm90dG9tID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnY29udGVudC1ib3R0b20nXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGNvbnRlbnQpKGNvbnRlbnRCb3R0b20pO1xuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZGF5JykpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZGF5JywgSlNPTi5zdHJpbmdpZnkoW10pKTtcbiAgICB9XG4gICAgY29uc3QgcHJvamVjdEFyciA9IFtdO1xuICAgIC8vZ3JhYiBhbGwgdGhlIHByb2plY3RzIGV4Y2VwdCBvbmVzIHNwZWNpZmllZFxuICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKGtleSAhPT0gJ3Byb2plY3ROYW1lcycgJiZcbiAgICAgICAgICAgIGtleSAhPT0gJ2FyY2hpdmVkJyAmJlxuICAgICAgICAgICAga2V5ICE9PSAndXBjb21pbmcnICYmXG4gICAgICAgICAgICBrZXkgIT09ICd0b2RheScpIHtcbiAgICAgICAgICAgIHByb2plY3RBcnIucHVzaChKU09OLnBhcnNlKChfYSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGRhdGUgPSBub3cuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IG1vbnRoID0gbm93LmdldE1vbnRoKCkgKyAxO1xuICAgIGNvbnN0IHllYXIgPSBub3cuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCB0b2RheSA9IGAke3llYXJ9LSR7bW9udGggPCAxMCA/ICcwJyArIG1vbnRoIDogbW9udGh9LSR7ZGF0ZSA8IDEwID8gJzAnICsgZGF0ZSA6IGRhdGV9YDtcbiAgICBjb25zdCBwcm9qQW5kVG9kb3NGaWx0ZXJlZCA9IFtdO1xuICAgIC8vZ3JhYiBlYWNoIHRvZG8gZHVlIHRvZGF5IGFuZCBwdXQgaW50byBjcmVhdGVkIHRlbXAgcHJvamVjdCBhbmQgcHVzaCBwcm9qZWN0IGludG8gZmlsdGVyZWQgYXJyYXlcbiAgICBwcm9qZWN0QXJyLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICBpZiAodG9kby50b2RvRHVlRGF0ZSA9PT0gdG9kYXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0ge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZTogcHJvamVjdC5wcm9qZWN0LnByb2plY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbG91cjogcHJvamVjdC5wcm9qZWN0LnByb2plY3RDb2xvdXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb05hbWU6IHRvZG8udG9kb05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uOiB0b2RvLnRvZG9EZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRHVlRGF0ZTogdG9kby50b2RvRHVlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHk6IHRvZG8udG9kb1ByaW9yaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHByb2pBbmRUb2Rvc0ZpbHRlcmVkLnB1c2godGVtcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vcmVuZGVyIHRoZSB0b2Rvc1xuICAgIHByb2pBbmRUb2Rvc0ZpbHRlcmVkLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgKDAsIGFkZFRvZG9zVG9Db250ZW50XzEuYWRkVG9kb3NUb0NvbnRlbnQpKHByb2plY3QpO1xuICAgIH0pO1xufTtcbmV4cG9ydHMuaGFuZGxlVG9kYXlUYWJDbGljayA9IGhhbmRsZVRvZGF5VGFiQ2xpY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlVG9kb0NoZWNrYm94Q29tcGxldGUgPSB2b2lkIDA7XG5jb25zdCBoYW5kbGVUb2RvQ2hlY2tib3hDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZiwgX2csIF9oLCBfaiwgX2s7XG4gICAgY29uc3QgbG9nID0gKGkpID0+IGNvbnNvbGUubG9nKCdcXG4nLCBpKTtcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcmNoaXZlZCcpKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcmNoaXZlZCcsIEpTT04uc3RyaW5naWZ5KFtdKSk7XG4gICAgfVxuICAgIGNvbnN0IHRoaXNQcm9qZWN0TmFtZSA9IChfYiA9IChfYSA9IHRoaXMucHJldmlvdXNTaWJsaW5nKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudGV4dENvbnRlbnQpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICcnO1xuICAgIGNvbnN0IHRoaXNQcm9qZWN0Q29sb3VyID0gdGhpcy52YWx1ZTtcbiAgICBjb25zdCB0aGlzVG9kb05hbWUgPSAoX2cgPSAoX2YgPSAoX2UgPSAoX2QgPSAoX2MgPSB0aGlzLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuZmlyc3RDaGlsZCkgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLm5leHRTaWJsaW5nKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2YudGV4dENvbnRlbnQpICE9PSBudWxsICYmIF9nICE9PSB2b2lkIDAgPyBfZyA6ICcnO1xuICAgIGNvbnN0IHByb2plY3RBcnIgPSBbXTtcbiAgICAvL2dyYWIgdGhlIGVudGlyZSBwcm9qZWN0IGJlbG9uZ2luZyB0byBjdXJyZW50bHkgY2hlY2tlZCB0b2RvXG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoa2V5ICE9PSAncHJvamVjdE5hbWVzJyAmJlxuICAgICAgICAgICAga2V5ICE9PSAnYXJjaGl2ZWQnICYmXG4gICAgICAgICAgICBrZXkgIT09ICd1cGNvbWluZycgJiZcbiAgICAgICAgICAgIGtleSAhPT0gJ3RvZGF5Jykge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gdGhpc1Byb2plY3ROYW1lKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdEFyci5wdXNoKEpTT04ucGFyc2UoKF9hID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGFyY2hpdmVkVG9kb3MgPSBKU09OLnBhcnNlKChfaCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcmNoaXZlZCcpKSAhPT0gbnVsbCAmJiBfaCAhPT0gdm9pZCAwID8gX2ggOiAnJyk7XG4gICAgY29uc3QgdG9kb1RvQmVBcmNoaXZlZCA9IFtdO1xuICAgIC8vZ3JhYiByZW1haW5pbmcgdG9kb3MgdGhhdCBhcmUgbm90IGN1cnJlbnQgdG9kb1xuICAgIGNvbnN0IHRvZG9zQXJyRmlsdGVyZWQgPSBbXTtcbiAgICBwcm9qZWN0QXJyWzBdLnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgaWYgKHRvZG8udG9kb05hbWUgIT09IHRoaXNUb2RvTmFtZSkge1xuICAgICAgICAgICAgdG9kb3NBcnJGaWx0ZXJlZC5wdXNoKHRvZG8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdG9kb1RvQmVBcmNoaXZlZC5wdXNoKHRvZG8pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy9yZXBsYWNlIHRoZSB0b2RvcyBvZiBwcm9qZWN0IGZyb20gc3RvcmFnZSB3aXRoIGZpbHRlcmVkIHRvZG9zIHdoaWNoIGRvIG5vdCBoYXZlIHRoZSBjdXJyZW50bHkgY2hlY2tlZCBvZmYgdG9kb1xuICAgIHByb2plY3RBcnJbMF0udG9kb3MgPSB0b2Rvc0FyckZpbHRlcmVkO1xuICAgIC8vcHV0IHRoZSByZW1haW5pbmcgdG9kb3MgYmFjayBpbnRvIHByb2plY3QgYW5kIGludG8gc3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXNQcm9qZWN0TmFtZSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdEFyclswXSkpO1xuICAgIGNvbnN0IHByb2plY3RBbmRUb2RvVG9CZUFyY2hpdmVkID0ge1xuICAgICAgICBwcm9qZWN0OiB7IHByb2plY3ROYW1lOiB0aGlzUHJvamVjdE5hbWUsIHByb2plY3RDb2xvdXI6IHRoaXNQcm9qZWN0Q29sb3VyIH0sXG4gICAgICAgIHRvZG9zOiBbdG9kb1RvQmVBcmNoaXZlZFswXV0sXG4gICAgfTtcbiAgICAvL3N0b3JlIHRoZSByZW1vdmVkIHRvZG8gdW5kZXIgJ2FyY2hpdmVkJ1xuICAgIGFyY2hpdmVkVG9kb3MucHVzaChwcm9qZWN0QW5kVG9kb1RvQmVBcmNoaXZlZCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FyY2hpdmVkJywgSlNPTi5zdHJpbmdpZnkoYXJjaGl2ZWRUb2RvcykpO1xuICAgIC8vcmVtb3ZlIHRoZSBjdXJyZW50IHRvZG8gd2hvc2UgY2hlY2tib3ggaXMgY2xpY2tlZFxuICAgIChfayA9IChfaiA9IHRoaXMucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgX2ogPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9qLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IF9rID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfay5yZW1vdmUoKTtcbn07XG5leHBvcnRzLmhhbmRsZVRvZG9DaGVja2JveENvbXBsZXRlID0gaGFuZGxlVG9kb0NoZWNrYm94Q29tcGxldGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlVG9kb0Nsb3NlSWNvbkNsaWNrID0gdm9pZCAwO1xuY29uc3QgaGFuZGxlVG9kb0Nsb3NlSWNvbkNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRvZG9Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lcicpO1xuICAgIC8vIGlmICh0b2RvTW9kYWwpXG4gICAgLy8gXHR0b2RvTW9kYWwuc3R5bGUudmlzaWJpbGl0eSA9IHRvZG9Nb2RhbC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG4gICAgLy8gXHRcdD8gJ2hpZGRlbidcbiAgICAvLyBcdFx0OiAndmlzaWJsZSdcbiAgICBpZiAodG9kb01vZGFsKVxuICAgICAgICB0b2RvTW9kYWwucmVtb3ZlKCk7XG59O1xuZXhwb3J0cy5oYW5kbGVUb2RvQ2xvc2VJY29uQ2xpY2sgPSBoYW5kbGVUb2RvQ2xvc2VJY29uQ2xpY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlVG9kb0Zvcm1TdWJtaXQgPSB2b2lkIDA7XG5jb25zdCBzdG9yZVByb2plY3RBbmRUb2Rvc0Z1bGxfMSA9IHJlcXVpcmUoXCIuLi9wcm9qZWN0c0FuZFRvZG9zL3N0b3JlUHJvamVjdEFuZFRvZG9zRnVsbFwiKTtcbmNvbnN0IGFkZFRvZG9zVG9Db250ZW50XzEgPSByZXF1aXJlKFwiLi4vcHJvamVjdHNBbmRUb2Rvcy9hZGRUb2Rvc1RvQ29udGVudFwiKTtcbmNvbnN0IGhhbmRsZVRvZG9Gb3JtU3VibWl0ID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2YsIF9nLCBfaCwgX2osIF9rLCBfbCwgX207XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBsb2cgPSAoaSkgPT4gY29uc29sZS5sb2coJ1xcbicsIGkpO1xuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jb250YWluZXInKTtcbiAgICBjb25zdCB0b2RvRm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XG4gICAgY29uc3QgdG9kb0Zvcm1Qcm9qZWN0TmFtZSA9IChfYiA9IChfYSA9IHRvZG9Gb3JtRGF0YS5nZXQoJ2FkZFRvZG8tcHJvamVjdE5hbWUnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICcnO1xuICAgIGNvbnN0IHRvZG9Gb3JtUHJvamVjdENvbG91ciA9IChfZCA9IChfYyA9IHRvZG9Gb3JtRGF0YS5nZXQoJ2FkZFRvZG8tcHJvamVjdENvbG91cicpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MudG9TdHJpbmcoKSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogJyc7XG4gICAgY29uc3QgdG9kb0Zvcm1OYW1lID0gKF9mID0gKF9lID0gdG9kb0Zvcm1EYXRhLmdldCgnYWRkVG9kby1uYW1lJykpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS50b1N0cmluZygpKSAhPT0gbnVsbCAmJiBfZiAhPT0gdm9pZCAwID8gX2YgOiAnJztcbiAgICBjb25zdCB0b2RvRm9ybURlc2NyaXB0aW9uID0gKF9oID0gKF9nID0gdG9kb0Zvcm1EYXRhLmdldCgnYWRkVG9kby1kZXNjcmlwdGlvbicpKSA9PT0gbnVsbCB8fCBfZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2cudG9TdHJpbmcoKSkgIT09IG51bGwgJiYgX2ggIT09IHZvaWQgMCA/IF9oIDogJyc7XG4gICAgY29uc3QgdG9kb0Zvcm1EdWVEYXRlID0gKF9rID0gKF9qID0gdG9kb0Zvcm1EYXRhLmdldCgnYWRkVG9kby1kdWVEYXRlJykpID09PSBudWxsIHx8IF9qID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfai50b1N0cmluZygpKSAhPT0gbnVsbCAmJiBfayAhPT0gdm9pZCAwID8gX2sgOiAnJztcbiAgICBjb25zdCB0b2RvRm9ybVNlbGVjdFByaW9yaXR5ID0gKF9tID0gKF9sID0gdG9kb0Zvcm1EYXRhLmdldCgnYWRkVG9kby1zZWxlY3RQcmlvcml0eScpKSA9PT0gbnVsbCB8fCBfbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2wudG9TdHJpbmcoKSkgIT09IG51bGwgJiYgX20gIT09IHZvaWQgMCA/IF9tIDogJyc7XG4gICAgY29uc3QgcHJvamVjdHNBbmRUb2Rvc0ZhY3RvcnkgPSBmdW5jdGlvbiAocHJvamVjdE5hbWUsIHByb2plY3RDb2xvdXIsIHRvZG9OYW1lLCB0b2RvRGVzY3JpcHRpb24sIHRvZG9EdWVEYXRlLCB0b2RvUHJpb3JpdHkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb2plY3Q6IHsgcHJvamVjdE5hbWUsIHByb2plY3RDb2xvdXIgfSxcbiAgICAgICAgICAgIHRvZG9zOiBbeyB0b2RvTmFtZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvRHVlRGF0ZSwgdG9kb1ByaW9yaXR5IH1dLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgY29uc3QgcHJvamVjdEFuZFRvZG9zID0gcHJvamVjdHNBbmRUb2Rvc0ZhY3RvcnkodG9kb0Zvcm1Qcm9qZWN0TmFtZSwgdG9kb0Zvcm1Qcm9qZWN0Q29sb3VyLCB0b2RvRm9ybU5hbWUsIHRvZG9Gb3JtRGVzY3JpcHRpb24sIHRvZG9Gb3JtRHVlRGF0ZSwgdG9kb0Zvcm1TZWxlY3RQcmlvcml0eSk7XG4gICAgY29uc3QgdG9kb0V4aXN0cyA9ICgwLCBzdG9yZVByb2plY3RBbmRUb2Rvc0Z1bGxfMS5zdG9yZVByb2plY3RBbmRUb2Rvc0Z1bGwpKHByb2plY3RBbmRUb2Rvcyk7XG4gICAgaWYgKCF0b2RvRXhpc3RzKSB7XG4gICAgICAgICgwLCBhZGRUb2Rvc1RvQ29udGVudF8xLmFkZFRvZG9zVG9Db250ZW50KShwcm9qZWN0QW5kVG9kb3MpO1xuICAgIH1cbiAgICB0b2RvQ29udGFpbmVyID09PSBudWxsIHx8IHRvZG9Db250YWluZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRvZG9Db250YWluZXIucmVtb3ZlKCk7XG59O1xuZXhwb3J0cy5oYW5kbGVUb2RvRm9ybVN1Ym1pdCA9IGhhbmRsZVRvZG9Gb3JtU3VibWl0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZVVwY29taW5nVGFiQ2xpY2sgPSB2b2lkIDA7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IGFkZFRvZG9zVG9Db250ZW50XzEgPSByZXF1aXJlKFwiLi4vcHJvamVjdHNBbmRUb2Rvcy9hZGRUb2Rvc1RvQ29udGVudFwiKTtcbmNvbnN0IGhhbmRsZVVwY29taW5nVGFiQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbG9nID0gKGkpID0+IGNvbnNvbGUubG9nKCdcXG4nLCBpKTtcbiAgICAvL3JlbW92ZSBjb250ZW50IHNlY3Rpb24ncyBwcmV2aW91cyBjb250ZW50c1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IGNvbnRlbnRCb3R0b21QcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYm90dG9tJyk7XG4gICAgY29udGVudEJvdHRvbVByZXYgPT09IG51bGwgfHwgY29udGVudEJvdHRvbVByZXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRlbnRCb3R0b21QcmV2LnJlbW92ZSgpO1xuICAgIC8vcmVuZGVyIG5ldyBjb250ZW50IGFuZCBhcHBlbmQgdG8gdGhpc1xuICAgIGNvbnN0IGNvbnRlbnRCb3R0b20gPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydjb250ZW50LWJvdHRvbSddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoY29udGVudCkoY29udGVudEJvdHRvbSk7XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kYXknKSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kYXknLCBKU09OLnN0cmluZ2lmeShbXSkpO1xuICAgIH1cbiAgICBjb25zdCBwcm9qZWN0QXJyID0gW107XG4gICAgLy9ncmFiIGFsbCB0aGUgcHJvamVjdHMgZXhjZXB0IG9uZXMgc3BlY2lmaWVkXG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoa2V5ICE9PSAncHJvamVjdE5hbWVzJyAmJlxuICAgICAgICAgICAga2V5ICE9PSAnYXJjaGl2ZWQnICYmXG4gICAgICAgICAgICBrZXkgIT09ICd1cGNvbWluZycgJiZcbiAgICAgICAgICAgIGtleSAhPT0gJ3RvZGF5Jykge1xuICAgICAgICAgICAgcHJvamVjdEFyci5wdXNoKEpTT04ucGFyc2UoKF9hID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF0ZSA9IG5vdy5nZXREYXRlKCk7XG4gICAgY29uc3QgbW9udGggPSBub3cuZ2V0TW9udGgoKSArIDE7XG4gICAgY29uc3QgeWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IHRvZGF5ID0gYCR7eWVhcn0tJHttb250aCA8IDEwID8gJzAnICsgbW9udGggOiBtb250aH0tJHtkYXRlIDwgMTAgPyAnMCcgKyBkYXRlIDogZGF0ZX1gO1xuICAgIGNvbnN0IHByb2pBbmRUb2Rvc0ZpbHRlcmVkID0gW107XG4gICAgLy9ncmFiIGVhY2ggdG9kbyBub3QgZHVlIHRvZGF5IGFuZCBwdXQgaW50byBjcmVhdGVkIHRlbXAgcHJvamVjdCBhbmQgcHVzaCBwcm9qZWN0IGludG8gZmlsdGVyZWQgYXJyYXlcbiAgICBwcm9qZWN0QXJyLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICBpZiAodG9kby50b2RvRHVlRGF0ZSAhPT0gdG9kYXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0ge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZTogcHJvamVjdC5wcm9qZWN0LnByb2plY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbG91cjogcHJvamVjdC5wcm9qZWN0LnByb2plY3RDb2xvdXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb05hbWU6IHRvZG8udG9kb05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uOiB0b2RvLnRvZG9EZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRHVlRGF0ZTogdG9kby50b2RvRHVlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHk6IHRvZG8udG9kb1ByaW9yaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHByb2pBbmRUb2Rvc0ZpbHRlcmVkLnB1c2godGVtcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vcmVuZGVyIHRoZSB0b2Rvc1xuICAgIHByb2pBbmRUb2Rvc0ZpbHRlcmVkLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgKDAsIGFkZFRvZG9zVG9Db250ZW50XzEuYWRkVG9kb3NUb0NvbnRlbnQpKHByb2plY3QpO1xuICAgIH0pO1xufTtcbmV4cG9ydHMuaGFuZGxlVXBjb21pbmdUYWJDbGljayA9IGhhbmRsZVVwY29taW5nVGFiQ2xpY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGVhZGVyID0gdm9pZCAwO1xuY29uc3QgZWxlbWVudF9jcmVhdG9yc18xID0gcmVxdWlyZShcIi4uL2VsZW1lbnQtY3JlYXRvcnNcIik7XG5jb25zdCBoZWFkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbG9nID0gKGkpID0+IGNvbnNvbGUubG9nKCdcXG4nLCBpKTtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKTtcbiAgICBjb25zdCBoZWFkZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydoZWFkZXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHJvb3QpKGhlYWRlcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdUb2RvIExpc3QgQXBwJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShoZWFkZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaDEnKShbJ3RpdGxlJywgJ2hlYWRlci10aXRsZSddKSk7XG59O1xuZXhwb3J0cy5oZWFkZXIgPSBoZWFkZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucHJvamVjdE1vZGFsID0gdm9pZCAwO1xuY29uc3QgZWxlbWVudF9jcmVhdG9yc18xID0gcmVxdWlyZShcIi4uL2VsZW1lbnQtY3JlYXRvcnNcIik7XG5jb25zdCBoYW5kbGVQcm9qZWN0Q2xvc2VJY29uQ2xpY2tfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVQcm9qZWN0Q2xvc2VJY29uQ2xpY2tcIik7XG5jb25zdCBoYW5kbGVQcm9qZWN0Rm9ybVN1Ym1pdF8xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZVByb2plY3RGb3JtU3VibWl0XCIpO1xuY29uc3QgcHJvamVjdE1vZGFsID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgIC8vYWRkUHJvamVjdCBtb2RhbFxuICAgIGNvbnN0IGFkZFByb2plY3RDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydhZGRQcm9qZWN0LWNvbnRhaW5lciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2lkZWJhcikoYWRkUHJvamVjdENvbnRhaW5lcik7XG4gICAgY29uc3QgYWRkUHJvamVjdEhlYWRpbmdDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydhZGRQcm9qZWN0SGVhZGluZy1jb250YWluZXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFByb2plY3RDb250YWluZXIpKGFkZFByb2plY3RIZWFkaW5nQ29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ0FkZCBwcm9qZWN0JyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0SGVhZGluZ0NvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdoMycpKFsnaGVhZGluZy10ZXh0JywgJ3RleHQtYWRkUHJvamVjdCddKSk7XG4gICAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZm9ybScpKFsnZm9ybS1hZGRQcm9qZWN0J10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWydhY3Rpb24nLCAnIyddLFxuICAgICAgICBbJ21ldGhvZCcsICdwb3N0J10sXG4gICAgICAgIFsnaWQnLCAnZm9ybS1hZGRQcm9qZWN0J10sXG4gICAgICAgIFsnbmFtZScsICdmb3JtLWFkZFByb2plY3QnXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ3N1Ym1pdCcpKGhhbmRsZVByb2plY3RGb3JtU3VibWl0XzEuaGFuZGxlUHJvamVjdEZvcm1TdWJtaXQpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdENvbnRhaW5lcikpKGFkZFByb2plY3RGb3JtKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0TmFtZUNvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2FkZFByb2plY3QtbmFtZS1jb250YWluZXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFByb2plY3RGb3JtKShhZGRQcm9qZWN0TmFtZUNvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1snZm9yJywgJ2FkZFByb2plY3QtbmFtZSddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ05hbWUnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFByb2plY3ROYW1lQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2xhYmVsJykoWydsYWJlbC1uYW1lJ10pKTtcbiAgICAvL2lucHV0IG5hbWVcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsnaWQnLCAnYWRkUHJvamVjdC1uYW1lJ10sXG4gICAgICAgIFsndHlwZScsICd0ZXh0J10sXG4gICAgICAgIFsnbWlubGVuZ3RoJywgJzInXSxcbiAgICAgICAgWydtYXhsZW5ndGgnLCAnMTcnXSxcbiAgICAgICAgWydwYXR0ZXJuJywgJ15bYS16QS1aXVthLXpBLVowLTktXy5dezEsMjB9JCddLFxuICAgICAgICBbJ3BsYWNlaG9sZGVyJywgJ0VudGVyIG5hbWUgb2YgcHJvamVjdCddLFxuICAgICAgICBbJ25hbWUnLCAnYWRkUHJvamVjdC1uYW1lJ10sXG4gICAgICAgIFsncmVxdWlyZWQnLCAnJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0TmFtZUNvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdpbnB1dCcpKFsnYWRkUHJvamVjdC1uYW1lJ10pKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0Q29sb3VyQ29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnYWRkUHJvamVjdC1jb2xvdXItY29udGFpbmVyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0Rm9ybSkoYWRkUHJvamVjdENvbG91ckNvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1snZm9yJywgJ2FkZFByb2plY3QtY29sb3VyJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnQ29sb3VyJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0Q29sb3VyQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2xhYmVsJykoWydsYWJlbC1jb2xvdXInXSkpO1xuICAgIC8vaW5wdXQgY29sb3VyXG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ3R5cGUnLCAnY29sb3InXSxcbiAgICAgICAgWydpZCcsICdhZGRQcm9qZWN0LWNvbG91ciddLFxuICAgICAgICBbJ25hbWUnLCAnYWRkUHJvamVjdC1jb2xvdXInXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFByb2plY3RDb2xvdXJDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaW5wdXQnKShbJ2FkZFByb2plY3QtY29sb3VyJ10pKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0SWNvbnNDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydhZGRQcm9qZWN0SWNvbnMtY29udGFpbmVyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0Rm9ybSkoYWRkUHJvamVjdEljb25zQ29udGFpbmVyKTtcbiAgICBjb25zdCBidHRuQ2FuY2VsUHJvamVjdCA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdidXR0b24nKShbJ2J0dG4nLCAnYnR0bi1jYW5jZWxQcm9qZWN0J10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ2NsaWNrJykoaGFuZGxlUHJvamVjdENsb3NlSWNvbkNsaWNrXzEuaGFuZGxlUHJvamVjdENsb3NlSWNvbkNsaWNrKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWyd0eXBlJywgJ2J1dHRvbiddLFxuICAgICAgICBbJ25hbWUnLCAnYnR0bi1jYW5jZWwnXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFByb2plY3RJY29uc0NvbnRhaW5lcikpKGJ0dG5DYW5jZWxQcm9qZWN0KTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShidHRuQ2FuY2VsUHJvamVjdCkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuY3JlYXRlSW1hZ2UpKCcuLi8uLi9zcmMvYXNzZXRzL2ljb25zL3goMSkuc3ZnJykoWydpY29uJywgJ2ljb24tY2FuY2VsUHJvamVjdCddKShgaWNvbiBvZiBzeW1ib2wgJ3gnIHJlcHJlc2VudGluZyBjYW5jZWwgb3IgY2xvc2VgKSgnQ2FuY2VsJykpO1xuICAgIGNvbnN0IGJ0dG5BZGRQcm9qZWN0ID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2J1dHRvbicpKFsnYnR0bicsICdidHRuLWFkZFByb2plY3QnXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ3R5cGUnLCAnc3VibWl0J10sXG4gICAgICAgIFsnbmFtZScsICdidHRuLWFkZFByb2plY3QnXSxcbiAgICAgICAgWydmb3JtJywgJ2Zvcm0tYWRkUHJvamVjdCddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdEljb25zQ29udGFpbmVyKSkoYnR0bkFkZFByb2plY3QpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGJ0dG5BZGRQcm9qZWN0KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5jcmVhdGVJbWFnZSkoJy4uLy4uL3NyYy9hc3NldHMvaWNvbnMvY2hlY2soMSkuc3ZnJykoWydpY29uJywgJ2ljb24tYWRkUHJvamVjdCddKShgaWNvbiBvZiBzeW1ib2wgJ2NoZWNrJyByZXByZXNlbnRpbmcgYWRkYCkoJ0FkZCBQcm9qZWN0JykpO1xufTtcbmV4cG9ydHMucHJvamVjdE1vZGFsID0gcHJvamVjdE1vZGFsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnRvZG9Nb2RhbCA9IHZvaWQgMDtcbmNvbnN0IGVsZW1lbnRfY3JlYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50LWNyZWF0b3JzXCIpO1xuY29uc3QgaGFuZGxlVG9kb0Nsb3NlSWNvbkNsaWNrXzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlVG9kb0Nsb3NlSWNvbkNsaWNrXCIpO1xuY29uc3QgaGFuZGxlVG9kb0Zvcm1TdWJtaXRfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVUb2RvRm9ybVN1Ym1pdFwiKTtcbmNvbnN0IHRvZG9Nb2RhbCA9IGZ1bmN0aW9uIChwcm9qZWN0RGF0YU5hbWVfLCBwcm9qZWN0RGF0YUNvbG91cl8pIHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKTtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWyd0b2RvLWNvbnRhaW5lciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkocm9vdCkodG9kb0NvbnRhaW5lcik7XG4gICAgY29uc3QgdG9kb0Zvcm0gPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZm9ybScpKFsnZm9ybScsICdmb3JtLWFkZFRvZG8nXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnc3VibWl0JykoaGFuZGxlVG9kb0Zvcm1TdWJtaXRfMS5oYW5kbGVUb2RvRm9ybVN1Ym1pdCksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsnYWN0aW9uJywgJyMnXSxcbiAgICAgICAgWydtZXRob2QnLCAncG9zdCddLFxuICAgICAgICBbJ2lkJywgJ2Zvcm0tYWRkVG9kbyddLFxuICAgICAgICBbJ25hbWUnLCAnZm9ybS1hZGRUb2RvJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b2RvQ29udGFpbmVyKSkodG9kb0Zvcm0pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnQWRkIHRhc2sgdG9kbycpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0Zvcm0pKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaDMnKShbJ2hlYWRpbmctdGV4dCcsICd0ZXh0LWFkZFRvZG8nXSkpO1xuICAgIGNvbnN0IGFkZFRvZG9OYW1lQ29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnYWRkVG9kby1uYW1lLWNvbnRhaW5lciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0Zvcm0pKGFkZFRvZG9OYW1lQ29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydmb3InLCAnYWRkVG9kby1uYW1lJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnTmFtZScpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkVG9kb05hbWVDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnbGFiZWwnKShbJ2xhYmVsLW5hbWUnXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWyd0eXBlJywgJ3RleHQnXSxcbiAgICAgICAgWydmb3JtJywgJ2Zvcm0tYWRkVG9kbyddLFxuICAgICAgICBbJ2lkJywgJ2FkZFRvZG8tbmFtZSddLFxuICAgICAgICBbJ25hbWUnLCAnYWRkVG9kby1uYW1lJ10sXG4gICAgICAgIFsnbWlubGVuZ3RoJywgJzInXSxcbiAgICAgICAgWydtYXhsZW5ndGgnLCAnMjAnXSxcbiAgICAgICAgWydwYXR0ZXJuJywgJ15bYS16QS1aXVthLXpBLVowLTktXy5dezEsMjB9JCddLFxuICAgICAgICBbJ3BsYWNlaG9sZGVyJywgJ0VudGVyIG5hbWUgZm9yIHRhc2sgdG9kbyddLFxuICAgICAgICBbJ3JlcXVpcmVkJywgJyddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkVG9kb05hbWVDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaW5wdXQnKShbJ2FkZFRvZG8tbmFtZSddKSk7XG4gICAgY29uc3QgYWRkVG9kb0Rlc2NDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydhZGRUb2RvLWRlc2MtY29udGFpbmVyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b2RvRm9ybSkoYWRkVG9kb0Rlc2NDb250YWluZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ2ZvcicsICdhZGRUb2RvLWRlc2NyaXB0aW9uJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnRGVzY3JpcHRpb24nKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFRvZG9EZXNjQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2xhYmVsJykoWydsYWJlbC1kZXNjcmlwdGlvbiddKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ2lkJywgJ2FkZFRvZG8tZGVzY3JpcHRpb24nXSxcbiAgICAgICAgWydhdXRvY29tcGxldGUnLCAnb24nXSxcbiAgICAgICAgWydmb3JtJywgJ2Zvcm0tYWRkVG9kbyddLFxuICAgICAgICBbJ21heGxlbmd0aCcsICcyNTAnXSxcbiAgICAgICAgWyduYW1lJywgJ2FkZFRvZG8tZGVzY3JpcHRpb24nXSxcbiAgICAgICAgWydzcGVsbGNoZWNrJywgJ3RydWUnXSxcbiAgICAgICAgWyd3cmFwJywgJ2hhcmQnXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFRvZG9EZXNjQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ3RleHRhcmVhJykoWydhZGRUb2RvLWRlc2NyaXB0aW9uJ10pKTtcbiAgICBjb25zdCBhZGRUb2RvRGF0ZUNvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2FkZFRvZG8tZGF0ZS1jb250YWluZXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZG9Gb3JtKShhZGRUb2RvRGF0ZUNvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdEdWUgZGF0ZScpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1snZm9yJywgJ2FkZFRvZG8tZHVlRGF0ZSddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRUb2RvRGF0ZUNvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdsYWJlbCcpKFsnbGFiZWwtZHVlRGF0ZSddKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ3R5cGUnLCAnZGF0ZSddLFxuICAgICAgICBbJ2lkJywgJ2FkZFRvZG8tZHVlRGF0ZSddLFxuICAgICAgICBbXG4gICAgICAgICAgICAnbWluJyxcbiAgICAgICAgICAgIGAke25vdy5nZXRGdWxsWWVhcigpfS0ke25vdy5nZXRNb250aCgpIDwgMTAgPyAnMCcgKyBub3cuZ2V0TW9udGgoKSA6IG5vdy5nZXRNb250aCgpfS0ke25vdy5nZXREYXRlKCkgPCAxMCA/ICcwJyArIG5vdy5nZXREYXRlKCkgOiBub3cuZ2V0RGF0ZSgpfWAsXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAgICdtYXgnLFxuICAgICAgICAgICAgYCR7bm93LmdldEZ1bGxZZWFyKCkgKyAxMDB9LSR7bm93LmdldE1vbnRoKCkgPCAxMCA/ICcwJyArIG5vdy5nZXRNb250aCgpIDogbm93LmdldE1vbnRoKCl9LSR7bm93LmdldERhdGUoKSA8IDEwID8gJzAnICsgbm93LmdldERhdGUoKSA6IG5vdy5nZXREYXRlKCl9YCxcbiAgICAgICAgXSxcbiAgICAgICAgWyduYW1lJywgJ2FkZFRvZG8tZHVlRGF0ZSddLFxuICAgICAgICBbJ3BsYWNlaG9sZGVyJywgJ3l5eXktbW0tZGQnXSxcbiAgICAgICAgWydwYXR0ZXJuJywgJygwWzEtOV18MVswLTldfDJbMC05XXwzWzAxXSktKDBbMS05XXwxWzAxMl0pLVswLTldezR9J10sXG4gICAgICAgIC8vIFsncmVxdWlyZWQnLCAnJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRUb2RvRGF0ZUNvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdpbnB1dCcpKFsnYWRkVG9kby1kdWVEYXRlJ10pKTtcbiAgICBjb25zdCBhZGRUb2RvUHJpb3JpdHlDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydhZGRUb2RvLXByaW9yaXR5LWNvbnRhaW5lciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0Zvcm0pKGFkZFRvZG9Qcmlvcml0eUNvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdQcmlvcml0eSBsZXZlbCcpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1snZm9yJywgJ2FkZFRvZG8tc2VsZWN0UHJpb3JpdHknXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkVG9kb1ByaW9yaXR5Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2xhYmVsJykoWydsYWJlbC1zZWxlY3RQcmlvcml0eSddKSk7XG4gICAgY29uc3Qgc2VsZWN0UHJpb3JpdHkgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnc2VsZWN0JykoWydhZGRUb2RvLXNlbGVjdFByaW9yaXR5J10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWyduYW1lJywgJ2FkZFRvZG8tc2VsZWN0UHJpb3JpdHknXSxcbiAgICAgICAgWydpZCcsICdhZGRUb2RvLXNlbGVjdFByaW9yaXR5J10sXG4gICAgICAgIFsnZm9ybScsICdmb3JtLWFkZFRvZG8nXSxcbiAgICAgICAgLy8gWydyZXF1aXJlZCcsICcnXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFRvZG9Qcmlvcml0eUNvbnRhaW5lcikpKHNlbGVjdFByaW9yaXR5KTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJy0tUGxlYXNlIGFzc2lnbiBhIHByaW9yaXR5LS0nKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ3ZhbHVlJywgJyddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzZWxlY3RQcmlvcml0eSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdvcHRpb24nKShbJ29wdGlvbi1zZWxlY3RQcmlvcml0eSddKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1sndmFsdWUnLCAnbG93J11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnTG93JyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzZWxlY3RQcmlvcml0eSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdvcHRpb24nKShbJ29wdGlvbi1zZWxlY3RQcmlvcml0eSddKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1sndmFsdWUnLCAnbWVkaXVtJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnTWVkaXVtJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzZWxlY3RQcmlvcml0eSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdvcHRpb24nKShbJ29wdGlvbi1zZWxlY3RQcmlvcml0eSddKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1sndmFsdWUnLCAnaGlnaCddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ0hpZ2gnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNlbGVjdFByaW9yaXR5KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ29wdGlvbicpKFsnb3B0aW9uLXNlbGVjdFByaW9yaXR5J10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWyd2YWx1ZScsICd1cmdlbnQnXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdVcmdlbnQnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNlbGVjdFByaW9yaXR5KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ29wdGlvbicpKFsnb3B0aW9uLXNlbGVjdFByaW9yaXR5J10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWyd2YWx1ZScsICdpbW1lZGlhdGUnXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdJbW1lZGlhdGUnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNlbGVjdFByaW9yaXR5KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ29wdGlvbicpKFsnb3B0aW9uLXNlbGVjdFByaW9yaXR5J10pKTtcbiAgICAvL2hpZGRlbiBlbGVtZW50IHRvIGZ1bm5lbCBwcm9qZWN0IG5hbWUgdG8gdG9kb2Zvcm1cbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsnaGlkZGVuJywgJyddLFxuICAgICAgICBbJ3ZhbHVlJywgYCR7cHJvamVjdERhdGFOYW1lX31gXSxcbiAgICAgICAgWyduYW1lJywgJ2FkZFRvZG8tcHJvamVjdE5hbWUnXSxcbiAgICAgICAgWyd0eXBlJywgJ3RleHQnXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZG9Gb3JtKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2lucHV0JykoWydhZGRUb2RvLXByb2plY3ROYW1lX19oaWRkZW4nXSkpO1xuICAgIC8vaGlkZGVuIGVsZW1lbnQgdG8gZnVubmVsIHByb2plY3QgY29sb3VyIHRvIHRvZG9mb3JtXG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ2hpZGRlbicsICcnXSxcbiAgICAgICAgWyd2YWx1ZScsIGAke3Byb2plY3REYXRhQ29sb3VyX31gXSxcbiAgICAgICAgWyduYW1lJywgJ2FkZFRvZG8tcHJvamVjdENvbG91ciddLFxuICAgICAgICBbJ3R5cGUnLCAndGV4dCddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0Zvcm0pKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaW5wdXQnKShbJ2FkZFRvZG8tcHJvamVjdENvbG91cl9faGlkZGVuJ10pKTtcbiAgICAvL1xuICAgIC8vXG4gICAgY29uc3QgYWRkVG9kb0ljb25zQ29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnYWRkVG9kby1pY29ucy1jb250YWluZXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZG9Gb3JtKShhZGRUb2RvSWNvbnNDb250YWluZXIpO1xuICAgIGNvbnN0IGJ0dG5DYW5jZWxUb2RvID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2J1dHRvbicpKFsnYnR0bicsICdidHRuLWNhbmNlbFRvZG8nXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ3R5cGUnLCAnY2xpY2snXSxcbiAgICAgICAgWyduYW1lJywgJ2J0dG4tY2FuY2VsVG9kbyddLFxuICAgICAgICBbJ2Zvcm0nLCAnZm9ybS1hZGRUb2RvJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRUb2RvSWNvbnNDb250YWluZXIpKShidHRuQ2FuY2VsVG9kbyk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVUb2RvQ2xvc2VJY29uQ2xpY2tfMS5oYW5kbGVUb2RvQ2xvc2VJY29uQ2xpY2spLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYnR0bkNhbmNlbFRvZG8pKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmNyZWF0ZUltYWdlKSgnLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy94KDEpLnN2ZycpKFsnaWNvbicsICdpY29uLWNhbmNlbFRvZG8nXSkoYGljb24gb2Ygc3ltYm9sICd4JyByZXByZXNlbnRpbmcgY2xvc2Ugb3IgY2FuY2VsYCkoJ0NhbmNlbCcpKTtcbiAgICBjb25zdCBidHRuQWRkVG9kbyA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdidXR0b24nKShbJ2J0dG4nLCAnYnR0bi1hZGRUb2RvJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWyd0eXBlJywgJ3N1Ym1pdCddLFxuICAgICAgICBbJ25hbWUnLCAnYnR0bi1hZGRUb2RvJ10sXG4gICAgICAgIFsnZm9ybScsICdmb3JtLWFkZFRvZG8nXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFRvZG9JY29uc0NvbnRhaW5lcikpKGJ0dG5BZGRUb2RvKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShidHRuQWRkVG9kbykpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuY3JlYXRlSW1hZ2UpKCcuLi8uLi9zcmMvYXNzZXRzL2ljb25zL2NoZWNrKDEpLnN2ZycpKFsnaWNvbicsICdpY29uLWFkZFRvZG8nXSkoYGljb24gb2YgYSBjaGVja21hcmsgcmVwcmVzZW50aW5nIGFkZGApKCdBZGQgVG9kbycpKTtcbn07XG5leHBvcnRzLnRvZG9Nb2RhbCA9IHRvZG9Nb2RhbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5hZGRQcm9qZWN0VG9TaWRlYmFyID0gdm9pZCAwO1xuY29uc3QgZWxlbWVudF9jcmVhdG9yc18xID0gcmVxdWlyZShcIi4uL2VsZW1lbnQtY3JlYXRvcnNcIik7XG5jb25zdCBoYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrXzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlQWRkTmV3VG9kb0ljb25DbGlja1wiKTtcbmNvbnN0IGhhbmRsZUNyZWF0ZWRUYWJzQ2xpY2tfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVDcmVhdGVkVGFic0NsaWNrXCIpO1xuY29uc3QgYWRkUHJvamVjdFRvU2lkZWJhciA9IGZ1bmN0aW9uIChmb3JtTmFtZV8sIGZvcm1Db2xvdXJfKSB7XG4gICAgY29uc3QgbG9nID0gKGkpID0+IGNvbnNvbGUubG9nKCdcXG4nLCBpKTtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItcHJvamVjdHMnKTtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnc2lkZWJhci1wcm9qZWN0JywgJ3Byb2plY3QnXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHByb2plY3RzQ29udGFpbmVyKShwcm9qZWN0Q29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdjbGljaycpKGhhbmRsZUNyZWF0ZWRUYWJzQ2xpY2tfMS5oYW5kbGVDcmVhdGVkVGFic0NsaWNrKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ2RhdGEtbmFtZScsIGAke2Zvcm1OYW1lX31gXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFN0eWxlVG9FbGVtKShbWydjb2xvcicsIGAke2Zvcm1Db2xvdXJffWBdXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoYCR7Zm9ybU5hbWVffWApLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkocHJvamVjdENvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdoNCcpKFsncHJvamVjdC10ZXh0J10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsnZGF0YS1uYW1lJywgYCR7Zm9ybU5hbWVffWBdLFxuICAgICAgICBbJ2RhdGEtY29sb3VyJywgYCR7Zm9ybUNvbG91cl99YF0sXG4gICAgXSksIFxuICAgIC8vIGFkZFN0eWxlVG9FbGVtKCdiYWNrZ3JvdW5kLWNvbG9yJykoYCR7Zm9ybUNvbG91cl99YCksXG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ2NsaWNrJykoaGFuZGxlQWRkTmV3VG9kb0ljb25DbGlja18xLmhhbmRsZUFkZE5ld1RvZG9JY29uQ2xpY2spLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkocHJvamVjdENvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuY3JlYXRlSW1hZ2UpKCcuLi8uLi8uLi9zcmMvYXNzZXRzL2ljb25zL3BsdXMuc3ZnJykoWydpY29uJywgJ2ljb24tcGx1cyddKSgnaWNvbiBvZiBwbHVzIHN5bWJvbCcpKCdBZGQgTmV3IFRvZG8nKSk7XG59O1xuZXhwb3J0cy5hZGRQcm9qZWN0VG9TaWRlYmFyID0gYWRkUHJvamVjdFRvU2lkZWJhcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5hZGRUb2Rvc1RvQ29udGVudCA9IHZvaWQgMDtcbmNvbnN0IGVsZW1lbnRfY3JlYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50LWNyZWF0b3JzXCIpO1xuY29uc3QgaGFuZGxlVG9kb0NoZWNrYm94Q29tcGxldGVfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVUb2RvQ2hlY2tib3hDb21wbGV0ZVwiKTtcbmNvbnN0IGFkZFRvZG9zVG9Db250ZW50ID0gZnVuY3Rpb24gKHsgcHJvamVjdCwgdG9kb3MgfSwgZGlzYWJsZUNoZWNrYm94ID0gZmFsc2UpIHtcbiAgICBjb25zdCB7IHByb2plY3ROYW1lLCBwcm9qZWN0Q29sb3VyIH0gPSBwcm9qZWN0O1xuICAgIHRvZG9zLmZvckVhY2goKHRvZG8sIGkpID0+IHtcbiAgICAgICAgY29uc3QgeyB0b2RvTmFtZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvRHVlRGF0ZSwgdG9kb1ByaW9yaXR5IH0gPSB0b2Rvc1tpXTtcbiAgICAgICAgY29uc3QgY29udGVudEJvdHRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWJvdHRvbScpO1xuICAgICAgICBjb25zdCB0b2RvQ29udGVudENvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3RvZG9Db250ZW50LWNvbnRhaW5lciddKTtcbiAgICAgICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGNvbnRlbnRCb3R0b20pKHRvZG9Db250ZW50Q29udGFpbmVyKTtcbiAgICAgICAgY29uc3QgaGVhZGluZ0NvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3RvZG9Db250ZW50LWhlYWRpbmctY29udGFpbmVyJ10pO1xuICAgICAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0NvbnRlbnRDb250YWluZXIpKGhlYWRpbmdDb250YWluZXIpO1xuICAgICAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydkYXRhLWNvbG91cicsIGAke3Byb2plY3RDb2xvdXJ9YF1dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKShgJHtwcm9qZWN0TmFtZX1gKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRTdHlsZVRvRWxlbSkoW1snY29sb3InLCBgJHtwcm9qZWN0Q29sb3VyfWBdXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShoZWFkaW5nQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2gzJykoWydoZWFkaW5nLXRleHQnLCAndG9kb0NvbnRlbnQtcHJvamVjdE5hbWUnXSkpO1xuICAgICAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydmb3InLCAnY29tcGxldGUnXV0pKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnbGFiZWwnKShbJ2xhYmVsJywgJ3RvZG9Db250ZW50LWxhYmVsJ10pKTtcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaW5wdXQnKShbJ3RvZG9Db250ZW50LWNoZWNrYm94J10pO1xuICAgICAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdjbGljaycpKGhhbmRsZVRvZG9DaGVja2JveENvbXBsZXRlXzEuaGFuZGxlVG9kb0NoZWNrYm94Q29tcGxldGUpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICAgICAgWyd0eXBlJywgJ2NoZWNrYm94J10sXG4gICAgICAgICAgICBbJ2lkJywgJ2NvbXBsZXRlJ10sXG4gICAgICAgICAgICBbJ25hbWUnLCAnY29tcGxldGUnXSxcbiAgICAgICAgICAgIFsndmFsdWUnLCBgJHtwcm9qZWN0Q29sb3VyfWBdLFxuICAgICAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGhlYWRpbmdDb250YWluZXIpKShjaGVja2JveCk7XG4gICAgICAgIC8vdG8gcHJldmVudCBjbGlja2luZyBjaGVja2JveCBhZnRlciBpdCBoYXMgYmVlbiBhcmNoaXZlZFxuICAgICAgICBpZiAoZGlzYWJsZUNoZWNrYm94KSB7XG4gICAgICAgICAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1snZGlzYWJsZWQnLCAndHJ1ZSddXSkoY2hlY2tib3gpO1xuICAgICAgICB9XG4gICAgICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKShgJHt0b2RvTmFtZX1gKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZG9Db250ZW50Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2g0JykoWyd0b2RvQ29udGVudC1uYW1lJ10pKTtcbiAgICAgICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKGAke3RvZG9EZXNjcmlwdGlvbn1gKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZG9Db250ZW50Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ3AnKShbJ3RvZG9Db250ZW50LWRlc2NyaXB0aW9uJ10pKTtcbiAgICAgICAgY29uc3QgZGF0ZUFuZFByaW9yaXR5Q29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnZGF0ZUFuZFByaW9yaXR5LWNvbnRhaW5lciddKTtcbiAgICAgICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZG9Db250ZW50Q29udGFpbmVyKShkYXRlQW5kUHJpb3JpdHlDb250YWluZXIpO1xuICAgICAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoYCR7dG9kb0R1ZURhdGV9YCksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShkYXRlQW5kUHJpb3JpdHlDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgncCcpKFsndG9kb0NvbnRlbnQtZHVlRGF0ZSddKSk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5Q29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsncHJpb3JpdHktY29udGFpbmVyJ10pO1xuICAgICAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoZGF0ZUFuZFByaW9yaXR5Q29udGFpbmVyKShwcmlvcml0eUNvbnRhaW5lcik7XG4gICAgICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkU3R5bGVUb0VsZW0pKFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcicsXG4gICAgICAgICAgICAgICAgYCR7dG9kb1ByaW9yaXR5ID09PSAnaW1tZWRpYXRlJ1xuICAgICAgICAgICAgICAgICAgICA/ICdoc2woMCwgMTAwJSwgMzUlKSdcbiAgICAgICAgICAgICAgICAgICAgOiB0b2RvUHJpb3JpdHkgPT09ICd1cmdlbnQnXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdoc2woNDAsIDEwMCUsIDY1JSknXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRvZG9Qcmlvcml0eSA9PT0gJ2hpZ2gnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnaHNsKDkwLCAxMDAlLCA1MCUpJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdG9kb1ByaW9yaXR5ID09PSAnbWVkaXVtJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdoc2woMjAwLCAxMDAlLCA1MCUpJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdoc2woMjUwLCAxMDAlLCA3MCUpJ31gLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgXSkocHJpb3JpdHlDb250YWluZXIpO1xuICAgICAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoYCR7dG9kb1ByaW9yaXR5fWApLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkocHJpb3JpdHlDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgncCcpKFsndG9kb0NvbnRlbnQtcHJpb3JpdHknXSkpO1xuICAgIH0pO1xufTtcbmV4cG9ydHMuYWRkVG9kb3NUb0NvbnRlbnQgPSBhZGRUb2Rvc1RvQ29udGVudDtcbi8vIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInZlaGljbGUxXCIgbmFtZT1cInZlaGljbGUxXCIgdmFsdWU9XCJCaWtlXCI+XG4vLyA8bGFiZWwgZm9yPVwidmVoaWNsZTFcIj4gSSBoYXZlIGEgYmlrZTwvbGFiZWw+PGJyPlxuLy8gPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwidmVoaWNsZTJcIiBuYW1lPVwidmVoaWNsZTJcIiB2YWx1ZT1cIkNhclwiPlxuLy8gPGxhYmVsIGZvcj1cInZlaGljbGUyXCI+IEkgaGF2ZSBhIGNhcjwvbGFiZWw+PGJyPlxuLy8gPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwidmVoaWNsZTNcIiBuYW1lPVwidmVoaWNsZTNcIiB2YWx1ZT1cIkJvYXRcIj5cbi8vIDxsYWJlbCBmb3I9XCJ2ZWhpY2xlM1wiPiBJIGhhdmUgYSBib2F0PC9sYWJlbD48YnI+XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucHJvamVjdHNBbmRUb2Rvc09ubG9hZCA9IHZvaWQgMDtcbmNvbnN0IGFkZFByb2plY3RUb1NpZGViYXJfMSA9IHJlcXVpcmUoXCIuL2FkZFByb2plY3RUb1NpZGViYXJcIik7XG5jb25zdCBhZGRUb2Rvc1RvQ29udGVudF8xID0gcmVxdWlyZShcIi4vYWRkVG9kb3NUb0NvbnRlbnRcIik7XG5jb25zdCBwcm9qZWN0c0FuZFRvZG9zT25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGxvZyA9IChpKSA9PiBjb25zb2xlLmxvZygnXFxuJywgaSk7XG4gICAgY29uc3QgcHJvamVjdHMgPSBbXTtcbiAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmIChrZXkgIT09ICdTYW1wbGUgUHJvamVjdCcgJiZcbiAgICAgICAgICAgIGtleSAhPT0gJ3Byb2plY3ROYW1lcycgJiZcbiAgICAgICAgICAgIGtleSAhPT0gJ2FyY2hpdmVkJyAmJlxuICAgICAgICAgICAga2V5ICE9PSAndXBjb21pbmcnICYmXG4gICAgICAgICAgICBrZXkgIT09ICd0b2RheScpIHtcbiAgICAgICAgICAgIHByb2plY3RzLnB1c2goSlNPTi5wYXJzZSgoX2EgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgZGlzcGxheVNhbXBsZVByb2plY3RPbmxvYWQgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIC8vZGlzcGxheSBzYW1wbGUgdG9kb3NcbiAgICAgICAgY29uc3Qgc2FtcGxlUHJvamVjdCA9IEpTT04ucGFyc2UoKF9hID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1NhbXBsZSBQcm9qZWN0JykpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnKTtcbiAgICAgICAgKDAsIGFkZFRvZG9zVG9Db250ZW50XzEuYWRkVG9kb3NUb0NvbnRlbnQpKHNhbXBsZVByb2plY3QpO1xuICAgIH0pKCk7XG4gICAgLy9kaXNwbGF5IHJlc3Qgb2YgcHJvamVjdHMgaW4gc3RvcmFnZVxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgKDAsIGFkZFByb2plY3RUb1NpZGViYXJfMS5hZGRQcm9qZWN0VG9TaWRlYmFyKShwcm9qZWN0LnByb2plY3QucHJvamVjdE5hbWUsIHByb2plY3QucHJvamVjdC5wcm9qZWN0Q29sb3VyKTtcbiAgICAgICAgKDAsIGFkZFRvZG9zVG9Db250ZW50XzEuYWRkVG9kb3NUb0NvbnRlbnQpKHByb2plY3QpO1xuICAgIH0pO1xufTtcbmV4cG9ydHMucHJvamVjdHNBbmRUb2Rvc09ubG9hZCA9IHByb2plY3RzQW5kVG9kb3NPbmxvYWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3RvcmVQcm9qZWN0QW5kVG9kb3NGdWxsID0gdm9pZCAwO1xuY29uc3Qgc3RvcmVQcm9qZWN0QW5kVG9kb3NGdWxsID0gZnVuY3Rpb24gKHByb2plY3RBbmRUb2Rvc18pIHtcbiAgICB2YXIgX2E7XG4gICAgbGV0IHRvZG9FeGlzdHNGbGFnID0gZmFsc2U7XG4gICAgY29uc3QgY3VycmVudFByb2pOYW1lID0gcHJvamVjdEFuZFRvZG9zXy5wcm9qZWN0LnByb2plY3ROYW1lO1xuICAgIGNvbnN0IGN1cnJlbnRUb2RvTmFtZSA9IHByb2plY3RBbmRUb2Rvc18udG9kb3NbMF0udG9kb05hbWU7XG4gICAgY29uc3QgY3VycmVudFRvZG9zID0gcHJvamVjdEFuZFRvZG9zXy50b2Rvc1swXTtcbiAgICBjb25zdCBzdG9yYWdlS2V5cyA9IG5ldyBTZXQoKTtcbiAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBzdG9yYWdlS2V5cy5hZGQoa2V5KTtcbiAgICB9KTtcbiAgICAvL25ldyBwcm9qZWN0XG4gICAgaWYgKCFzdG9yYWdlS2V5cy5oYXMoY3VycmVudFByb2pOYW1lKSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShjdXJyZW50UHJvak5hbWUsIEpTT04uc3RyaW5naWZ5KHByb2plY3RBbmRUb2Rvc18pKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vcHJvamVjdCBhbHJlYWR5IGV4aXN0c1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvalN0b3JhZ2UgPSBKU09OLnBhcnNlKChfYSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRQcm9qTmFtZSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnKTtcbiAgICAgICAgY29uc3QgdG9kb05hbWVzU2V0ID0gbmV3IFNldCgpO1xuICAgICAgICBjdXJyZW50UHJvalN0b3JhZ2UudG9kb3MuZm9yRWFjaCgodG9kbykgPT4gdG9kb05hbWVzU2V0LmFkZCh0b2RvLnRvZG9OYW1lKSk7XG4gICAgICAgIC8vbmV3IHRvZG9OYW1lXG4gICAgICAgIGlmICghdG9kb05hbWVzU2V0LmhhcyhjdXJyZW50VG9kb05hbWUpKSB7XG4gICAgICAgICAgICBjdXJyZW50UHJvalN0b3JhZ2UudG9kb3MucHVzaChjdXJyZW50VG9kb3MpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY3VycmVudFByb2pOYW1lLCBKU09OLnN0cmluZ2lmeShjdXJyZW50UHJvalN0b3JhZ2UpKTtcbiAgICAgICAgICAgIHRvZG9FeGlzdHNGbGFnID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gdG9kb0V4aXN0c0ZsYWc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvL3RvZG9OYW1lIHRha2VuXG4gICAgICAgICAgICBhbGVydChgJHtjdXJyZW50VG9kb05hbWV9IGFscmVhZHkgZXhpc3RzIGFzIGEgdG9kbyAo772h4oCizIHvuL/igKLMgO+9oSkgIFBsZWFzZSBjaG9vc2UgYW5vdGhlciBuYW1lIG9yIGNvbnNpZGVyIGVkaXRpbmcgYW4gZXhpc3RpbmcgdG9kby5gKTtcbiAgICAgICAgICAgIHRvZG9FeGlzdHNGbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0b2RvRXhpc3RzRmxhZztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL1xuICAgIC8vXG59O1xuZXhwb3J0cy5zdG9yZVByb2plY3RBbmRUb2Rvc0Z1bGwgPSBzdG9yZVByb2plY3RBbmRUb2Rvc0Z1bGw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3RvcmVTYW1wbGVQcm9qZWN0ID0gdm9pZCAwO1xuY29uc3Qgc3RvcmVTYW1wbGVQcm9qZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgLy9yZXR1cm5zIGRhdGUgb25lIHllYXIgZnJvbSBjdXJyZW50XG4gICAgY29uc3Qgc2FtcGxlTG93RHVlRGF0ZSA9IChub3cpID0+IHtcbiAgICAgICAgbGV0IGRheSA9IG5vdy5nZXREYXRlKCk7XG4gICAgICAgIGxldCBtb250aCA9IG5vdy5nZXRNb250aCgpICsgMTtcbiAgICAgICAgY29uc3QgeWVhciA9IG5vdy5nZXRGdWxsWWVhcigpICsgMTtcbiAgICAgICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGggPCAxMCA/ICcwJyArIG1vbnRoIDogbW9udGh9LSR7ZGF5IDwgMTAgPyAnMCcgKyBkYXkgOiBkYXl9YDtcbiAgICB9O1xuICAgIC8vcmV0dXJucyBkYXRlIG9uZSBtb250aCBmcm9tIGN1cnJlbnRcbiAgICBjb25zdCBzYW1wbGVNZWREdWVEYXRlID0gKG5vdykgPT4ge1xuICAgICAgICBsZXQgbW9udGggPSBub3cuZ2V0TW9udGgoKTtcbiAgICAgICAgbW9udGggPSBtb250aCA8PSAxMCA/IG1vbnRoICsgMSA6IG1vbnRoO1xuICAgICAgICBtb250aCA9IG1vbnRoICsgMTtcbiAgICAgICAgcmV0dXJuIGAke25vdy5nZXRGdWxsWWVhcigpfS0ke21vbnRoIDwgMTAgPyAnMCcgKyBtb250aCA6IG1vbnRofS0ke25vdy5nZXREYXRlKCkgPCAxMCA/ICcwJyArIG5vdy5nZXREYXRlKCkgOiBub3cuZ2V0RGF0ZSgpfWA7XG4gICAgfTtcbiAgICAvL3JldHVybnMgZGF0ZSBvbmUgZGF5IGZyb20gY3VycmVudFxuICAgIGNvbnN0IHNhbXBsZVVyZ2VudER1ZURhdGUgPSAobm93KSA9PiB7XG4gICAgICAgIGxldCBkYXkgPSBub3cuZ2V0RGF0ZSgpO1xuICAgICAgICBkYXkgPSBkYXkgPCAyNiA/IGRheSArIDIgOiBkYXk7XG4gICAgICAgIGxldCBtb250aCA9IG5vdy5nZXRNb250aCgpICsgMTtcbiAgICAgICAgcmV0dXJuIGAke25vdy5nZXRGdWxsWWVhcigpfS0ke21vbnRoIDwgMTAgPyAnMCcgKyBtb250aCA6IG1vbnRofS0ke2RheSA8IDEwID8gJzAnICsgZGF5IDogZGF5fWA7XG4gICAgfTtcbiAgICBjb25zdCBzYW1wbGVQcm9qZWN0ID0ge1xuICAgICAgICBwcm9qZWN0OiBcbiAgICAgICAgLy9zYW1wbGUgcHJvamVjdCB0byBkaXNwbGF5IGluaXRpYWxseVxuICAgICAgICB7IHByb2plY3ROYW1lOiAnU2FtcGxlIFByb2plY3QnLCBwcm9qZWN0Q29sb3VyOiAnIzQ4ZDFjYycgfSxcbiAgICAgICAgdG9kb3M6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0b2RvTmFtZTogYEZpbmlzaCAnVGhlIEZhZGVkIFN1bjogS2Vzcml0aCdgLFxuICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbjogJ0ZpbmlzaCByZWFkaW5nIHRoZSBib29rIC0gcmV0dXJuIHNvb24hJyxcbiAgICAgICAgICAgICAgICB0b2RvRHVlRGF0ZTogYCR7c2FtcGxlVXJnZW50RHVlRGF0ZShub3cpfWAsXG4gICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5OiAndXJnZW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdG9kb05hbWU6ICdWZXQgQXBwb2ludG1lbnQnLFxuICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbjogJ1Rha2UgTmlnaHRleWVzIHRvIHRoZSB2ZXQgZm9yIHJvdXRpbmUgY2hlY2t1cCcsXG4gICAgICAgICAgICAgICAgdG9kb0R1ZURhdGU6IGAke3NhbXBsZU1lZER1ZURhdGUobm93KX1gLFxuICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eTogJ21lZGl1bScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRvZG9OYW1lOiAnQmFja3BhY2tpbmcgdHJpcCB0byBOZXBhbCcsXG4gICAgICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uOiAnUGxhbiByb3V0ZSwgc3VwcGxpZXMgYW5kIGFwcGx5IGZvciB2aXNhJyxcbiAgICAgICAgICAgICAgICB0b2RvRHVlRGF0ZTogYCR7c2FtcGxlTG93RHVlRGF0ZShub3cpfWAsXG4gICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5OiAnbG93JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfTtcbiAgICAvL29uIGZpcnN0IGxvYWQgb25seVxuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oc2FtcGxlUHJvamVjdC5wcm9qZWN0LnByb2plY3ROYW1lKSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzYW1wbGVQcm9qZWN0LnByb2plY3QucHJvamVjdE5hbWUsIEpTT04uc3RyaW5naWZ5KHNhbXBsZVByb2plY3QpKTtcbiAgICB9XG59O1xuZXhwb3J0cy5zdG9yZVNhbXBsZVByb2plY3QgPSBzdG9yZVNhbXBsZVByb2plY3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2lkZWJhciA9IHZvaWQgMDtcbmNvbnN0IGVsZW1lbnRfY3JlYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50LWNyZWF0b3JzXCIpO1xuY29uc3QgaGFuZGxlQWRkTmV3UHJvamVjdEljb25DbGlja18xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZUFkZE5ld1Byb2plY3RJY29uQ2xpY2tcIik7XG5jb25zdCBoYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrXzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlQWRkTmV3VG9kb0ljb25DbGlja1wiKTtcbmNvbnN0IGhhbmRsZUFyY2hpdmVkVGFiQ2xpY2tfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVBcmNoaXZlZFRhYkNsaWNrXCIpO1xuY29uc3QgaGFuZGxlVXBjb21pbmdUYWJDbGlja18xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZVVwY29taW5nVGFiQ2xpY2tcIik7XG5jb25zdCBoYW5kbGVUb2RheVRhYkNsaWNrXzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlVG9kYXlUYWJDbGlja1wiKTtcbmNvbnN0IGhhbmRsZVByb2plY3RzVGFiQ2xpY2tfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVQcm9qZWN0c1RhYkNsaWNrXCIpO1xuY29uc3QgaGFuZGxlQ3JlYXRlZFRhYnNDbGlja18xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZUNyZWF0ZWRUYWJzQ2xpY2tcIik7XG5jb25zdCBzaWRlYmFyID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGxvZyA9IChpKSA9PiBjb25zb2xlLmxvZygnXFxuJywgaSk7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290Jyk7XG4gICAgY29uc3Qgc2lkZWJhciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3NpZGViYXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHJvb3QpKHNpZGViYXIpO1xuICAgIGNvbnN0IHRvZGF5Q29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnc2lkZWJhci10YWInLCAnY29udGFpbmVyLXRvZGF5J10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdjbGljaycpKGhhbmRsZVRvZGF5VGFiQ2xpY2tfMS5oYW5kbGVUb2RheVRhYkNsaWNrKSh0b2RheUNvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNpZGViYXIpKHRvZGF5Q29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b2RheUNvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuY3JlYXRlSW1hZ2UpKCcuLi8uLi9zcmMvYXNzZXRzL2ljb25zL2FwZXJ0dXJlLnN2ZycpKFsnaWNvbicsICdpY29uLXRvZGF5J10pKGBpY29uIHJlcHJlc2VudGluZyB0b2RheSdzIGV2ZW50c2ApKCdUb2RheScpKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ1RvZGF5JyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b2RheUNvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdoNCcpKFsndGFiLXRleHQnLCAndG9kYXktdGFiJ10pKTtcbiAgICBjb25zdCB1cGNvbWluZ0NvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3NpZGViYXItdGFiJywgJ2NvbnRhaW5lci11cGNvbWluZyddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVVcGNvbWluZ1RhYkNsaWNrXzEuaGFuZGxlVXBjb21pbmdUYWJDbGljaykodXBjb21pbmdDb250YWluZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzaWRlYmFyKSh1cGNvbWluZ0NvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodXBjb21pbmdDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmNyZWF0ZUltYWdlKSgnLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy9jYWxlbmRhci5zdmcnKShbJ2ljb24nLCAndXBjb21pbmctaWNvbiddKSgnaWNvbiByZXByZXNlbnRpbmcgdXBjb21pbmcgZXZlbnRzJykoJ1VwY29taW5nJykpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnVXBjb21pbmcnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHVwY29taW5nQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2g0JykoWyd0YWItdGV4dCcsICd0YWItdXBjb21pbmcnXSkpO1xuICAgIGNvbnN0IGFyY2hpdmVkQ29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnc2lkZWJhci10YWInLCAnY29udGFpbmVyLWFyY2hpdmVkJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdjbGljaycpKGhhbmRsZUFyY2hpdmVkVGFiQ2xpY2tfMS5oYW5kbGVBcmNoaXZlZFRhYkNsaWNrKShhcmNoaXZlZENvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNpZGViYXIpKGFyY2hpdmVkQ29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhcmNoaXZlZENvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuY3JlYXRlSW1hZ2UpKCcuLi8uLi9zcmMvYXNzZXRzL2ljb25zL2FyY2hpdmUuc3ZnJykoWydpY29uJywgJ2FyY2hpdmVkLWljb24nXSkoJ2ljb24gcmVwcmVzZW50aW5nIGFyY2hpdmVkIGV2ZW50cycpKCdBcmNoaXZlZCcpKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ0FyY2hpdmVkJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhcmNoaXZlZENvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdoNCcpKFsndGFiLXRleHQnLCAndGFiLWFyY2hpdmVkJ10pKTtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3NpZGViYXItaGVhZGluZycsICdjb250YWluZXItcHJvamVjdHMnXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNpZGViYXIpKHByb2plY3RzQ29udGFpbmVyKTtcbiAgICBjb25zdCBwcm9qZWN0c0hlYWRpbmcgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydwcm9qZWN0SGVhZGluZy13cmFwcGVyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShwcm9qZWN0c0NvbnRhaW5lcikocHJvamVjdHNIZWFkaW5nKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdjbGljaycpKGhhbmRsZVByb2plY3RzVGFiQ2xpY2tfMS5oYW5kbGVQcm9qZWN0c1RhYkNsaWNrKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnUHJvamVjdHMnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHByb2plY3RzSGVhZGluZykpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdoMycpKFsnaGVhZGluZy10ZXh0JywgJ3RleHQtcHJvamVjdHMnXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ2NsaWNrJykoaGFuZGxlQWRkTmV3UHJvamVjdEljb25DbGlja18xLmhhbmRsZUFkZE5ld1Byb2plY3RJY29uQ2xpY2spLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkocHJvamVjdHNIZWFkaW5nKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5jcmVhdGVJbWFnZSkoJy4uLy4uLy4uL3NyYy9hc3NldHMvaWNvbnMvcGx1cy5zdmcnKShbJ2ljb24nLCAnaWNvbi1wbHVzJ10pKCdpY29uIG9mIHBsdXMgc3ltYm9sJykoJ0FkZCBOZXcgUHJvamVjdCcpKTtcbiAgICBjb25zdCBzYW1wbGVQcm9qZWN0Q29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnc2lkZWJhci1wcm9qZWN0JywgJ3Byb2plY3QnXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHByb2plY3RzQ29udGFpbmVyKShzYW1wbGVQcm9qZWN0Q29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkU3R5bGVUb0VsZW0pKFtbJ2NvbG9yJywgJyM0OGQxY2MnXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVDcmVhdGVkVGFic0NsaWNrXzEuaGFuZGxlQ3JlYXRlZFRhYnNDbGljayksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ1NhbXBsZSBQcm9qZWN0JyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzYW1wbGVQcm9qZWN0Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2g0JykoWydwcm9qZWN0LXRleHQnLCAndGV4dC1zYW1wbGVQcm9qZWN0J10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsnZGF0YS1uYW1lJywgYFNhbXBsZSBQcm9qZWN0YF0sXG4gICAgICAgIFsnZGF0YS1jb2xvdXInLCAnIzQ4ZDFjYyddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrXzEuaGFuZGxlQWRkTmV3VG9kb0ljb25DbGljayksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzYW1wbGVQcm9qZWN0Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5jcmVhdGVJbWFnZSkoJy4uLy4uLy4uL3NyYy9hc3NldHMvaWNvbnMvcGx1cy5zdmcnKShbJ2ljb24nLCAnaWNvbi1wbHVzJ10pKCdpY29uIG9mIHBsdXMgc3ltYm9sJykoJ0FkZCBOZXcgVG9kbycpKTtcbiAgICAvL1xuICAgIC8vXG4gICAgLy9cbn07XG5leHBvcnRzLnNpZGViYXIgPSBzaWRlYmFyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xucmVxdWlyZShcIi4vaW5kZXguY3NzXCIpO1xuY29uc3QgY29udGVudF8xID0gcmVxdWlyZShcIi4vdHMvY29udGVudC9jb250ZW50XCIpO1xuY29uc3QgaGVhZGVyXzEgPSByZXF1aXJlKFwiLi90cy9oZWFkZXIvaGVhZGVyXCIpO1xuY29uc3Qgc2lkZWJhcl8xID0gcmVxdWlyZShcIi4vdHMvc2lkZWJhci9zaWRlYmFyXCIpO1xuY29uc3QgcHJvamVjdHNBbmRUb2Rvc09ubG9hZF8xID0gcmVxdWlyZShcIi4vdHMvcHJvamVjdHNBbmRUb2Rvcy9wcm9qZWN0c0FuZFRvZG9zT25sb2FkXCIpO1xuY29uc3Qgc3RvcmVTYW1wbGVQcm9qZWN0XzEgPSByZXF1aXJlKFwiLi90cy9wcm9qZWN0c0FuZFRvZG9zL3N0b3JlU2FtcGxlUHJvamVjdFwiKTtcbmNvbnN0IG1haW5BcHAgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbG9nID0gKGkpID0+IGNvbnNvbGUubG9nKCdcXG4nLCBpKTtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKTtcbiAgICAoMCwgaGVhZGVyXzEuaGVhZGVyKSgpO1xuICAgICgwLCBzaWRlYmFyXzEuc2lkZWJhcikoKTtcbiAgICAoMCwgY29udGVudF8xLmNvbnRlbnQpKCk7XG4gICAgKDAsIHN0b3JlU2FtcGxlUHJvamVjdF8xLnN0b3JlU2FtcGxlUHJvamVjdCkoKTtcbiAgICAvL3J1bnMgb24gZXZlcnkgcmVmcmVzaFxuICAgIHNlbGYub25sb2FkID0gcHJvamVjdHNBbmRUb2Rvc09ubG9hZF8xLnByb2plY3RzQW5kVG9kb3NPbmxvYWQ7XG59O1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIG1haW5BcHApO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9