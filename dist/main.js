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
const handleArchivedTabClick = function () {
    var _a, _b;
    const log = (i) => console.log('\n', i);
    //remove content section's previous contents
    const contentTop = document.querySelector('.content-top');
    (_a = contentTop === null || contentTop === void 0 ? void 0 : contentTop.nextSibling) === null || _a === void 0 ? void 0 : _a.remove();
    const archivedStorageArr = JSON.parse((_b = localStorage.getItem('archived')) !== null && _b !== void 0 ? _b : '');
    console.log(archivedStorageArr);
    archivedStorageArr.forEach((project) => {
        (0, addTodosToContent_1.addTodosToContent)(project);
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
const handleCreatedTabsClick = function () {
    const log = (i) => console.log('\n', i);
    //remove content section's previous contents
    const content = document.querySelector('.content');
    const contentTop = document.querySelector('.content-top');
    content === null || content === void 0 ? void 0 : content.childNodes.forEach((child) => {
        if (!child.contains(contentTop)) {
            child.remove();
        }
    });
    //NEED TO ADD ANOTHER CONTAINER HOLDING CREATED PROJECTS TO EASILY REMOVE
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
const handleProjectsTabClick = function () {
    var _a;
    const log = (i) => console.log('\n', i);
    //remove content section's previous contents
    const contentTop = document.querySelector('.content-top');
    (_a = contentTop === null || contentTop === void 0 ? void 0 : contentTop.nextSibling) === null || _a === void 0 ? void 0 : _a.remove();
    //render new content
    const projectsAndTodosArr = [];
    Object.keys(localStorage).forEach((key) => {
        var _a;
        if (key !== 'Sample Project' &&
            key !== 'projectNames' &&
            key !== 'archived' &&
            key !== 'upcoming' &&
            key !== 'today') {
            projectsAndTodosArr.push(JSON.parse((_a = localStorage.getItem(key)) !== null && _a !== void 0 ? _a : ''));
        }
    });
    log(projectsAndTodosArr);
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
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleTodayTabClick = void 0;
const handleTodayTabClick = function () { };
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
        if (key !== 'Sample Project' &&
            key !== 'projectNames' &&
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
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleUpcomingTabClick = void 0;
const handleUpcomingTabClick = function () { };
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
    (0, element_creators_1.pipe)((0, element_creators_1.addEvtListener)('click')(handleCreatedTabsClick_1.handleCreatedTabsClick), (0, element_creators_1.addAttributeToElem)([['data-name', `${formName_}`]]), (0, element_creators_1.addStyleToElem)([['color', `${formColour_}`]]), (0, element_creators_1.addTextToElem)(`${formName_}`), (0, element_creators_1.appendElemToParent)(projectContainer))((0, element_creators_1.elemCreator)('h4')(['project-text', `text-${formName_}`]));
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
const addTodosToContent = function ({ project, todos }) {
    const { projectName, projectColour } = project;
    todos.forEach((todo, i) => {
        const { todoName, todoDescription, todoDueDate, todoPriority } = todos[i];
        const content = document.querySelector('.content');
        const todoContentContainer = (0, element_creators_1.elemCreator)('div')(['todoContent-container']);
        (0, element_creators_1.appendElemToParent)(content)(todoContentContainer);
        const headingContainer = (0, element_creators_1.elemCreator)('div')(['todoContent-heading-container']);
        (0, element_creators_1.appendElemToParent)(todoContentContainer)(headingContainer);
        (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([['data-colour', `${projectColour}`]]), (0, element_creators_1.addTextToElem)(`${projectName}`), (0, element_creators_1.addStyleToElem)([['color', `${projectColour}`]]), (0, element_creators_1.appendElemToParent)(headingContainer))((0, element_creators_1.elemCreator)('h3')(['heading-text', 'todoContent-projectName']));
        (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([['for', 'complete']]))((0, element_creators_1.elemCreator)('label')(['label', 'todoContent-label']));
        (0, element_creators_1.pipe)((0, element_creators_1.addEvtListener)('click')(handleTodoCheckboxComplete_1.handleTodoCheckboxComplete), (0, element_creators_1.addAttributeToElem)([
            ['type', 'checkbox'],
            ['id', 'complete'],
            ['name', 'complete'],
            ['value', `${projectColour}`],
        ]), (0, element_creators_1.appendElemToParent)(headingContainer))((0, element_creators_1.elemCreator)('input')(['todoContent-checkbox']));
        (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)(`${todoName}`), (0, element_creators_1.appendElemToParent)(todoContentContainer))((0, element_creators_1.elemCreator)('h4')(['todoContent-name']));
        (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)(`${todoDescription}`), (0, element_creators_1.appendElemToParent)(todoContentContainer))((0, element_creators_1.elemCreator)('p')(['todoContent-description']));
        (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)(`${todoDueDate}`), (0, element_creators_1.appendElemToParent)(todoContentContainer))((0, element_creators_1.elemCreator)('p')(['todoContent-dueDate']));
        const priorityContainer = (0, element_creators_1.elemCreator)('div')(['priority-container']);
        (0, element_creators_1.appendElemToParent)(todoContentContainer)(priorityContainer);
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
    (0, element_creators_1.pipe)((0, element_creators_1.addEvtListener)('click')(handleCreatedTabsClick_1.handleCreatedTabsClick), (0, element_creators_1.addTextToElem)('Sample Project'), (0, element_creators_1.appendElemToParent)(sampleProjectContainer))((0, element_creators_1.elemCreator)('h4')(['project-text', 'text-sampleProject']));
    (0, element_creators_1.pipe)((0, element_creators_1.addAttributeToElem)([['data-name', `Sample Project`]]), (0, element_creators_1.addEvtListener)('click')(handleAddNewTodoIconClick_1.handleAddNewTodoIconClick), (0, element_creators_1.appendElemToParent)(sampleProjectContainer))((0, element_creators_1.createImage)('../../../src/assets/icons/plus.svg')(['icon', 'icon-plus'])('icon of plus symbol')('Add New Todo'));
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
const mainApp = function () {
    const log = (i) => console.log('\n', i);
    const root = document.querySelector('#root');
    (0, header_1.header)();
    (0, sidebar_1.sidebar)();
    (0, content_1.content)();
    //runs on every refresh
    self.onload = projectsAndTodosOnload_1.projectsAndTodosOnload;
    // self.onload = contentsTodosOnload
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvY29udGVudC9jb250ZW50LnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZWxlbWVudC1jcmVhdG9ycy50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2V2ZW50Q0JzL2hhbmRsZUFkZE5ld1Byb2plY3RJY29uQ2xpY2sudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZXZlbnRDQnMvaGFuZGxlQXJjaGl2ZWRUYWJDbGljay50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2V2ZW50Q0JzL2hhbmRsZUNyZWF0ZWRUYWJzQ2xpY2sudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVQcm9qZWN0Q2xvc2VJY29uQ2xpY2sudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVQcm9qZWN0Rm9ybVN1Ym1pdC50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2V2ZW50Q0JzL2hhbmRsZVByb2plY3RzVGFiQ2xpY2sudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVUaGVtZUljb25Ub2dnbGUudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVUb2RheVRhYkNsaWNrLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZXZlbnRDQnMvaGFuZGxlVG9kb0NoZWNrYm94Q29tcGxldGUudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVUb2RvQ2xvc2VJY29uQ2xpY2sudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVUb2RvRm9ybVN1Ym1pdC50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2V2ZW50Q0JzL2hhbmRsZVVwY29taW5nVGFiQ2xpY2sudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9oZWFkZXIvaGVhZGVyLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvbW9kYWxzL3Byb2plY3RNb2RhbC50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL21vZGFscy90b2RvTW9kYWwudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9wcm9qZWN0c0FuZFRvZG9zL2FkZFByb2plY3RUb1NpZGViYXIudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9wcm9qZWN0c0FuZFRvZG9zL2FkZFRvZG9zVG9Db250ZW50LnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvcHJvamVjdHNBbmRUb2Rvcy9wcm9qZWN0c0FuZFRvZG9zT25sb2FkLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvcHJvamVjdHNBbmRUb2Rvcy9zdG9yZVByb2plY3RBbmRUb2Rvc0Z1bGwudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9zaWRlYmFyL3NpZGViYXIudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY29udGVudCA9IHZvaWQgMDtcbmNvbnN0IGVsZW1lbnRfY3JlYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50LWNyZWF0b3JzXCIpO1xuY29uc3QgaGFuZGxlVGhlbWVJY29uVG9nZ2xlXzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlVGhlbWVJY29uVG9nZ2xlXCIpO1xuY29uc3QgY29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBsb2cgPSAoaSkgPT4gY29uc29sZS5sb2coJ1xcbicsIGkpO1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydjb250ZW50J10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShyb290KShjb250ZW50KTtcbiAgICBjb25zdCB0b3AgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydjb250ZW50LXRvcCddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoY29udGVudCkodG9wKTtcbiAgICBjb25zdCBmb3JtID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2Zvcm0nKShbJ2Zvcm0tc2VhcmNoVG9kbyddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsnYWN0aW9uJywgJyMnXSxcbiAgICAgICAgWydtZXRob2QnLCAncG9zdCddLFxuICAgICAgICBbJ2lkJywgJ2Zvcm0tc2VhcmNoVG9kbyddLFxuICAgICAgICBbJ25hbWUnLCAnc2VhcmNoLXRvZG8nXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvcCkpKGZvcm0pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ2ZvcicsICdzZWFyY2hUb2RvJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGZvcm0pKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnbGFiZWwnKShbJ2xhYmVsLXNlYXJjaCddKSk7XG4gICAgY29uc3Qgc2VhcmNoVG9kbyA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdpbnB1dCcpKFsnc2VhcmNoVG9kbyddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ3R5cGUnLCAnc2VhcmNoJ10sXG4gICAgICAgIFsncGxhY2Vob2xkZXInLCAnc2VhcmNoIGZvciBhIHRvZG8gaW4gc2VsZWN0ZWQgcHJvamVjdCddLFxuICAgICAgICBbJ2lkJywgJ3NlYXJjaFRvZG8nXSxcbiAgICAgICAgWyduYW1lJywgJ3NlYXJjaC10b2RvJ10sXG4gICAgXSkoc2VhcmNoVG9kbyk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGZvcm0pKHNlYXJjaFRvZG8pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGZvcm0pKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmNyZWF0ZUltYWdlKSgnLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy9zZWFyY2guc3ZnJykoWydpY29uJywgJ2ljb24tc2VhcmNoJ10pKCdpY29uIG9mIG1hZ25pZnlpbmcgZ2xhc3MgcmVwcmVzZW50aW5nIHNlYXJjaCcpKCdTZWFyY2gnKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVUaGVtZUljb25Ub2dnbGVfMS5oYW5kbGVUaGVtZUljb25Ub2dnbGUpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9wKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5jcmVhdGVJbWFnZSkoJy4uLy4uL3NyYy9hc3NldHMvaWNvbnMvbW9vbi5zdmcnKShbJ2ljb24nLCAnaWNvbi1tb29uJ10pKCdpY29uIG9mIG1vb24gcmVwcmVzZW50aW5nIGRhcmsgbW9kZScpKCdEYXJrIE1vZGUnKSk7XG59O1xuZXhwb3J0cy5jb250ZW50ID0gY29udGVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5waXBlID0gZXhwb3J0cy5hZGRTdHlsZVRvRWxlbSA9IGV4cG9ydHMuYWRkRXZ0TGlzdGVuZXIgPSBleHBvcnRzLmNyZWF0ZUltYWdlID0gZXhwb3J0cy5hZGRBdHRyaWJ1dGVUb0VsZW0gPSBleHBvcnRzLmFkZFRleHRUb0VsZW0gPSBleHBvcnRzLmFwcGVuZEVsZW1Ub1BhcmVudCA9IGV4cG9ydHMuZWxlbUNyZWF0b3IgPSB2b2lkIDA7XG5jb25zdCBlbGVtQ3JlYXRvciA9IChlbGVtXykgPT4gKGNsYXNzXykgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1fKTtcbiAgICByZXR1cm4gY2xhc3NfLnJlZHVjZSgoZWxlbSwgY3VyckNsYXNzKSA9PiB7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjdXJyQ2xhc3MpO1xuICAgICAgICByZXR1cm4gZWxlbTtcbiAgICB9LCBlbGVtZW50KTtcbn07XG5leHBvcnRzLmVsZW1DcmVhdG9yID0gZWxlbUNyZWF0b3I7XG5jb25zdCBhZGRBdHRyaWJ1dGVUb0VsZW0gPSAoYXR0clZhbHNfKSA9PiAoZWxlbV8pID0+IHtcbiAgICByZXR1cm4gYXR0clZhbHNfLnJlZHVjZSgoZWxlbWVudCwgY3VycikgPT4ge1xuICAgICAgICBpZiAoY3Vyci5sZW5ndGggPiAyKVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbGVtZW50LnNldEF0dHJpYnV0ZShjdXJyWzBdLCBjdXJyWzFdKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSwgZWxlbV8pO1xufTtcbmV4cG9ydHMuYWRkQXR0cmlidXRlVG9FbGVtID0gYWRkQXR0cmlidXRlVG9FbGVtO1xuY29uc3QgYWRkU3R5bGVUb0VsZW0gPSAoc3R5bGVQcm9wVmFsc18pID0+IChlbGVtXykgPT4ge1xuICAgIHJldHVybiBzdHlsZVByb3BWYWxzXy5yZWR1Y2UoKGVsZW1lbnQsIGN1cnIpID0+IHtcbiAgICAgICAgaWYgKGN1cnIubGVuZ3RoID4gMilcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShjdXJyWzBdLCBjdXJyWzFdKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSwgZWxlbV8pO1xufTtcbmV4cG9ydHMuYWRkU3R5bGVUb0VsZW0gPSBhZGRTdHlsZVRvRWxlbTtcbmNvbnN0IGFkZFRleHRUb0VsZW0gPSAodGV4dF8pID0+IChlbGVtXykgPT4ge1xuICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dF8pO1xuICAgIGVsZW1fID09PSBudWxsIHx8IGVsZW1fID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbGVtXy5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG4gICAgcmV0dXJuIGVsZW1fO1xufTtcbmV4cG9ydHMuYWRkVGV4dFRvRWxlbSA9IGFkZFRleHRUb0VsZW07XG5jb25zdCBhcHBlbmRFbGVtVG9QYXJlbnQgPSAocGFyZW50XykgPT4gKGNoaWxkXykgPT4ge1xuICAgIGlmIChjaGlsZF8pXG4gICAgICAgIHBhcmVudF8gPT09IG51bGwgfHwgcGFyZW50XyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyZW50Xy5hcHBlbmRDaGlsZChjaGlsZF8pO1xufTtcbmV4cG9ydHMuYXBwZW5kRWxlbVRvUGFyZW50ID0gYXBwZW5kRWxlbVRvUGFyZW50O1xuY29uc3QgY3JlYXRlSW1hZ2UgPSAoc291cmNlXykgPT4gKGNsYXNzXykgPT4gKGFsdF8pID0+ICh0aXRsZV8pID0+IHtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9IHNvdXJjZV87XG4gICAgaW1hZ2UuYWx0ID0gYWx0XztcbiAgICBpbWFnZS50aXRsZSA9IHRpdGxlXztcbiAgICByZXR1cm4gY2xhc3NfLnJlZHVjZSgoZWxlbSwgY3VyckNsYXNzKSA9PiB7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChjdXJyQ2xhc3MpO1xuICAgICAgICByZXR1cm4gZWxlbTtcbiAgICB9LCBpbWFnZSk7XG59O1xuZXhwb3J0cy5jcmVhdGVJbWFnZSA9IGNyZWF0ZUltYWdlO1xuY29uc3QgYWRkRXZ0TGlzdGVuZXIgPSAoZXZ0XykgPT4gKGhhbmRsZUV2dF8pID0+IChlbGVtXykgPT4ge1xuICAgIGVsZW1fID09PSBudWxsIHx8IGVsZW1fID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbGVtXy5hZGRFdmVudExpc3RlbmVyKGV2dF8sIGhhbmRsZUV2dF8pO1xuICAgIHJldHVybiBlbGVtXztcbn07XG5leHBvcnRzLmFkZEV2dExpc3RlbmVyID0gYWRkRXZ0TGlzdGVuZXI7XG4vLyBmdW5jdGlvbiBwaXBlPFY+KC4uLmZ1bmNzOiBBcnJheTwoXzogVikgPT4gVj4pOiAoXzogVikgPT4gViB8IG51bGwgfCB2b2lkIHtcbi8vIFx0cmV0dXJuIGZ1bmN0aW9uICh2YWx1ZTogVikge1xuLy8gXHRcdHJldHVybiBmdW5jcy5yZWR1Y2UoKHZhbCwgZnVuYykgPT4ge1xuLy8gXHRcdFx0cmV0dXJuIGZ1bmModmFsKVxuLy8gXHRcdH0sIHZhbHVlKVxuLy8gXHR9XG4vLyB9XG5jb25zdCBwaXBlID0gKC4uLmZ1bmNzKSA9PiAodmFsdWUpID0+IGZ1bmNzLnJlZHVjZSgocmVzLCBmdW5jKSA9PiBmdW5jKHJlcyksIHZhbHVlKTtcbmV4cG9ydHMucGlwZSA9IHBpcGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlQWRkTmV3UHJvamVjdEljb25DbGljayA9IHZvaWQgMDtcbmNvbnN0IHByb2plY3RNb2RhbF8xID0gcmVxdWlyZShcIi4uL21vZGFscy9wcm9qZWN0TW9kYWxcIik7XG5jb25zdCBoYW5kbGVBZGROZXdQcm9qZWN0SWNvbkNsaWNrID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgKDAsIHByb2plY3RNb2RhbF8xLnByb2plY3RNb2RhbCkoKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdC1jb250YWluZXInKTtcbiAgICBpZiAoYWRkUHJvamVjdE1vZGFsKSB7XG4gICAgICAgIGFkZFByb2plY3RNb2RhbC5zdHlsZS52aXNpYmlsaXR5ID1cbiAgICAgICAgICAgIChhZGRQcm9qZWN0TW9kYWwgPT09IG51bGwgfHwgYWRkUHJvamVjdE1vZGFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhZGRQcm9qZWN0TW9kYWwuc3R5bGUudmlzaWJpbGl0eSkgPT09ICd2aXNpYmxlJyA/ICdoaWRkZW4nIDogJ3Zpc2libGUnO1xuICAgIH1cbn07XG5leHBvcnRzLmhhbmRsZUFkZE5ld1Byb2plY3RJY29uQ2xpY2sgPSBoYW5kbGVBZGROZXdQcm9qZWN0SWNvbkNsaWNrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZUFkZE5ld1RvZG9JY29uQ2xpY2sgPSB2b2lkIDA7XG5jb25zdCB0b2RvTW9kYWxfMSA9IHJlcXVpcmUoXCIuLi9tb2RhbHMvdG9kb01vZGFsXCIpO1xuY29uc3QgaGFuZGxlQWRkTmV3VG9kb0ljb25DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGNvbnN0IHByb2plY3REYXRhTmFtZSA9IChfYSA9IHRoaXMuZGF0YXNldC5uYW1lKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJztcbiAgICBjb25zdCBwcm9qZWN0RGF0YUNvbG91ciA9IChfYiA9IHRoaXMuZGF0YXNldC5jb2xvdXIpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICcnO1xuICAgICgwLCB0b2RvTW9kYWxfMS50b2RvTW9kYWwpKHByb2plY3REYXRhTmFtZSwgcHJvamVjdERhdGFDb2xvdXIpO1xuICAgIGNvbnN0IGFkZFRvZG9Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lcicpO1xuICAgIGlmIChhZGRUb2RvTW9kYWwpXG4gICAgICAgIGFkZFRvZG9Nb2RhbC5zdHlsZS52aXNpYmlsaXR5ID1cbiAgICAgICAgICAgIChhZGRUb2RvTW9kYWwgPT09IG51bGwgfHwgYWRkVG9kb01vZGFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhZGRUb2RvTW9kYWwuc3R5bGUudmlzaWJpbGl0eSkgPT09ICd2aXNpYmxlJyA/ICdoaWRkZW4nIDogJ3Zpc2libGUnO1xufTtcbmV4cG9ydHMuaGFuZGxlQWRkTmV3VG9kb0ljb25DbGljayA9IGhhbmRsZUFkZE5ld1RvZG9JY29uQ2xpY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlQXJjaGl2ZWRUYWJDbGljayA9IHZvaWQgMDtcbmNvbnN0IGFkZFRvZG9zVG9Db250ZW50XzEgPSByZXF1aXJlKFwiLi4vcHJvamVjdHNBbmRUb2Rvcy9hZGRUb2Rvc1RvQ29udGVudFwiKTtcbmNvbnN0IGhhbmRsZUFyY2hpdmVkVGFiQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBjb25zdCBsb2cgPSAoaSkgPT4gY29uc29sZS5sb2coJ1xcbicsIGkpO1xuICAgIC8vcmVtb3ZlIGNvbnRlbnQgc2VjdGlvbidzIHByZXZpb3VzIGNvbnRlbnRzXG4gICAgY29uc3QgY29udGVudFRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXRvcCcpO1xuICAgIChfYSA9IGNvbnRlbnRUb3AgPT09IG51bGwgfHwgY29udGVudFRvcCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGVudFRvcC5uZXh0U2libGluZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlbW92ZSgpO1xuICAgIGNvbnN0IGFyY2hpdmVkU3RvcmFnZUFyciA9IEpTT04ucGFyc2UoKF9iID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FyY2hpdmVkJykpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICcnKTtcbiAgICBjb25zb2xlLmxvZyhhcmNoaXZlZFN0b3JhZ2VBcnIpO1xuICAgIGFyY2hpdmVkU3RvcmFnZUFyci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICgwLCBhZGRUb2Rvc1RvQ29udGVudF8xLmFkZFRvZG9zVG9Db250ZW50KShwcm9qZWN0KTtcbiAgICB9KTtcbn07XG5leHBvcnRzLmhhbmRsZUFyY2hpdmVkVGFiQ2xpY2sgPSBoYW5kbGVBcmNoaXZlZFRhYkNsaWNrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZUNyZWF0ZWRUYWJzQ2xpY2sgPSB2b2lkIDA7XG5jb25zdCBhZGRUb2Rvc1RvQ29udGVudF8xID0gcmVxdWlyZShcIi4uL3Byb2plY3RzQW5kVG9kb3MvYWRkVG9kb3NUb0NvbnRlbnRcIik7XG5jb25zdCBoYW5kbGVDcmVhdGVkVGFic0NsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGxvZyA9IChpKSA9PiBjb25zb2xlLmxvZygnXFxuJywgaSk7XG4gICAgLy9yZW1vdmUgY29udGVudCBzZWN0aW9uJ3MgcHJldmlvdXMgY29udGVudHNcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBjb250ZW50VG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtdG9wJyk7XG4gICAgY29udGVudCA9PT0gbnVsbCB8fCBjb250ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250ZW50LmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgaWYgKCFjaGlsZC5jb250YWlucyhjb250ZW50VG9wKSkge1xuICAgICAgICAgICAgY2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvL05FRUQgVE8gQUREIEFOT1RIRVIgQ09OVEFJTkVSIEhPTERJTkcgQ1JFQVRFRCBQUk9KRUNUUyBUTyBFQVNJTFkgUkVNT1ZFXG4gICAgY29uc3QgdGhpc1Byb2plY3ROYW1lID0gdGhpcy50ZXh0Q29udGVudDtcbiAgICBjb25zdCBwcm9qZWN0QW5kVG9kb3NPYmpBcnIgPSBbXTtcbiAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmIChrZXkgPT09IHRoaXNQcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgcHJvamVjdEFuZFRvZG9zT2JqQXJyLnB1c2goSlNPTi5wYXJzZSgoX2EgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzUHJvamVjdE5hbWUpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcHJvamVjdEFuZFRvZG9zT2JqQXJyLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgKDAsIGFkZFRvZG9zVG9Db250ZW50XzEuYWRkVG9kb3NUb0NvbnRlbnQpKHByb2plY3QpO1xuICAgIH0pO1xufTtcbmV4cG9ydHMuaGFuZGxlQ3JlYXRlZFRhYnNDbGljayA9IGhhbmRsZUNyZWF0ZWRUYWJzQ2xpY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlUHJvamVjdENsb3NlSWNvbkNsaWNrID0gdm9pZCAwO1xuY29uc3QgaGFuZGxlUHJvamVjdENsb3NlSWNvbkNsaWNrID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgY29uc3QgYWRkUHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3QtY29udGFpbmVyJyk7XG4gICAgLy8gaWYgKGFkZFByb2plY3RNb2RhbClcbiAgICAvLyBcdGFkZFByb2plY3RNb2RhbC5zdHlsZS52aXNpYmlsaXR5ID1cbiAgICAvLyBcdFx0YWRkUHJvamVjdE1vZGFsPy5zdHlsZS52aXNpYmlsaXR5ID09PSAndmlzaWJsZScgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJ1xuICAgIGlmIChhZGRQcm9qZWN0TW9kYWwpXG4gICAgICAgIGFkZFByb2plY3RNb2RhbC5yZW1vdmUoKTtcbn07XG5leHBvcnRzLmhhbmRsZVByb2plY3RDbG9zZUljb25DbGljayA9IGhhbmRsZVByb2plY3RDbG9zZUljb25DbGljaztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVQcm9qZWN0Rm9ybVN1Ym1pdCA9IHZvaWQgMDtcbmNvbnN0IGFkZFByb2plY3RUb1NpZGViYXJfMSA9IHJlcXVpcmUoXCIuLi9wcm9qZWN0c0FuZFRvZG9zL2FkZFByb2plY3RUb1NpZGViYXJcIik7XG5jb25zdCBoYW5kbGVQcm9qZWN0Rm9ybVN1Ym1pdCA9IGZ1bmN0aW9uIChldikge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGFkZFByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHByb2plY3RGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybU5hbWUgPSAoX2IgPSAoX2EgPSBwcm9qZWN0Rm9ybURhdGEuZ2V0KCdhZGRQcm9qZWN0LW5hbWUnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICcnO1xuICAgIGNvbnN0IHByb2plY3RGb3JtQ29sb3VyID0gKF9kID0gKF9jID0gcHJvamVjdEZvcm1EYXRhLmdldCgnYWRkUHJvamVjdC1jb2xvdXInKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnRvU3RyaW5nKCkpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6ICcnO1xuICAgIC8vaWYgJ3Byb2plY3ROYW1lcycgZG9lc24ndCBleGlzdCwgY3JlYXRlIGl0LCBvdGhlcndpc2UgZG8gbm90aGluZ1xuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3ROYW1lcycpKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0TmFtZXMnLCBKU09OLnN0cmluZ2lmeShbXSkpO1xuICAgIH1cbiAgICBjb25zdCBzdG9yZVByb2plY3QgPSAoZnVuY3Rpb24gKHByb2plY3RGb3JtTmFtZV8pIHtcbiAgICAgICAgLy9pZiBrZXkgaW4gbG9jYWxzdG9yYWdlIGlzIHByb2plY3ROYW1lcywgdGhlbiBnZXQgdGhlIHZhbHVlcyBhc1xuICAgICAgICAvL2FuIGFycmF5XG4gICAgICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAncHJvamVjdE5hbWVzJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXNTZXQgPSBuZXcgU2V0KEpTT04ucGFyc2UoKF9hID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycpKTtcbiAgICAgICAgICAgICAgICBbJ3RvZGF5JywgJ3VwY29taW5nJywgJ2FyY2hpdmVkJywgJ3Byb2plY3RzJ10uZm9yRWFjaCgobmFtZSkgPT4ga2V5c1NldC5hZGQobmFtZSkpO1xuICAgICAgICAgICAgICAgIC8vaWYgbmFtZSBhbHJlYWR5IHByZXNlbnRcbiAgICAgICAgICAgICAgICBpZiAoa2V5c1NldC5oYXMocHJvamVjdEZvcm1OYW1lXykpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoYCR7cHJvamVjdEZvcm1OYW1lX30gYWxyZWFkeSBleGlzdHMgYXMgYSBwcm9qZWN0ICjvvaHigKLMge+4v+KAosyA772hKSAgUGxlYXNlIGNob29zZSBhbm90aGVyIG5hbWUuYCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vaWYgbmV3IG5hbWUsIHB1c2ggdG8gYXJyIGFuZCB0aGVuIHN0b3JlIGFycmF5IGluIGxvY2FsU3RvcmFnZVxuICAgICAgICAgICAgICAgICAgICBrZXlzU2V0LmFkZChwcm9qZWN0Rm9ybU5hbWVfKTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShBcnJheS5mcm9tKGtleXNTZXQpKSk7XG4gICAgICAgICAgICAgICAgICAgICgwLCBhZGRQcm9qZWN0VG9TaWRlYmFyXzEuYWRkUHJvamVjdFRvU2lkZWJhcikocHJvamVjdEZvcm1OYW1lLCBwcm9qZWN0Rm9ybUNvbG91cik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KShwcm9qZWN0Rm9ybU5hbWUpO1xuICAgIC8vXG4gICAgLy9cbiAgICAvL1xuICAgIC8vIGlmIChhZGRQcm9qZWN0TW9kYWwpXG4gICAgLy8gXHRhZGRQcm9qZWN0TW9kYWwuc3R5bGUudmlzaWJpbGl0eSA9XG4gICAgLy8gXHRcdGFkZFByb2plY3RNb2RhbC5zdHlsZS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJyA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nXG4gICAgYWRkUHJvamVjdE1vZGFsID09PSBudWxsIHx8IGFkZFByb2plY3RNb2RhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWRkUHJvamVjdE1vZGFsLnJlbW92ZSgpO1xufTtcbmV4cG9ydHMuaGFuZGxlUHJvamVjdEZvcm1TdWJtaXQgPSBoYW5kbGVQcm9qZWN0Rm9ybVN1Ym1pdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVQcm9qZWN0c1RhYkNsaWNrID0gdm9pZCAwO1xuY29uc3QgYWRkVG9kb3NUb0NvbnRlbnRfMSA9IHJlcXVpcmUoXCIuLi9wcm9qZWN0c0FuZFRvZG9zL2FkZFRvZG9zVG9Db250ZW50XCIpO1xuY29uc3QgaGFuZGxlUHJvamVjdHNUYWJDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgbG9nID0gKGkpID0+IGNvbnNvbGUubG9nKCdcXG4nLCBpKTtcbiAgICAvL3JlbW92ZSBjb250ZW50IHNlY3Rpb24ncyBwcmV2aW91cyBjb250ZW50c1xuICAgIGNvbnN0IGNvbnRlbnRUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC10b3AnKTtcbiAgICAoX2EgPSBjb250ZW50VG9wID09PSBudWxsIHx8IGNvbnRlbnRUb3AgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRlbnRUb3AubmV4dFNpYmxpbmcpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmUoKTtcbiAgICAvL3JlbmRlciBuZXcgY29udGVudFxuICAgIGNvbnN0IHByb2plY3RzQW5kVG9kb3NBcnIgPSBbXTtcbiAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmIChrZXkgIT09ICdTYW1wbGUgUHJvamVjdCcgJiZcbiAgICAgICAgICAgIGtleSAhPT0gJ3Byb2plY3ROYW1lcycgJiZcbiAgICAgICAgICAgIGtleSAhPT0gJ2FyY2hpdmVkJyAmJlxuICAgICAgICAgICAga2V5ICE9PSAndXBjb21pbmcnICYmXG4gICAgICAgICAgICBrZXkgIT09ICd0b2RheScpIHtcbiAgICAgICAgICAgIHByb2plY3RzQW5kVG9kb3NBcnIucHVzaChKU09OLnBhcnNlKChfYSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBsb2cocHJvamVjdHNBbmRUb2Rvc0Fycik7XG4gICAgcHJvamVjdHNBbmRUb2Rvc0Fyci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICgwLCBhZGRUb2Rvc1RvQ29udGVudF8xLmFkZFRvZG9zVG9Db250ZW50KShwcm9qZWN0KTtcbiAgICB9KTtcbn07XG5leHBvcnRzLmhhbmRsZVByb2plY3RzVGFiQ2xpY2sgPSBoYW5kbGVQcm9qZWN0c1RhYkNsaWNrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZVRoZW1lSWNvblRvZ2dsZSA9IHZvaWQgMDtcbmNvbnN0IGhhbmRsZVRoZW1lSWNvblRvZ2dsZSA9IGZ1bmN0aW9uIChldikge1xuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIGNvbnNvbGUubG9nKGV2KTtcbn07XG5leHBvcnRzLmhhbmRsZVRoZW1lSWNvblRvZ2dsZSA9IGhhbmRsZVRoZW1lSWNvblRvZ2dsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVUb2RheVRhYkNsaWNrID0gdm9pZCAwO1xuY29uc3QgaGFuZGxlVG9kYXlUYWJDbGljayA9IGZ1bmN0aW9uICgpIHsgfTtcbmV4cG9ydHMuaGFuZGxlVG9kYXlUYWJDbGljayA9IGhhbmRsZVRvZGF5VGFiQ2xpY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlVG9kb0NoZWNrYm94Q29tcGxldGUgPSB2b2lkIDA7XG5jb25zdCBoYW5kbGVUb2RvQ2hlY2tib3hDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZiwgX2csIF9oLCBfaiwgX2s7XG4gICAgY29uc3QgbG9nID0gKGkpID0+IGNvbnNvbGUubG9nKCdcXG4nLCBpKTtcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcmNoaXZlZCcpKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcmNoaXZlZCcsIEpTT04uc3RyaW5naWZ5KFtdKSk7XG4gICAgfVxuICAgIGNvbnN0IHRoaXNQcm9qZWN0TmFtZSA9IChfYiA9IChfYSA9IHRoaXMucHJldmlvdXNTaWJsaW5nKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudGV4dENvbnRlbnQpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICcnO1xuICAgIGNvbnN0IHRoaXNQcm9qZWN0Q29sb3VyID0gdGhpcy52YWx1ZTtcbiAgICBjb25zdCB0aGlzVG9kb05hbWUgPSAoX2cgPSAoX2YgPSAoX2UgPSAoX2QgPSAoX2MgPSB0aGlzLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuZmlyc3RDaGlsZCkgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLm5leHRTaWJsaW5nKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2YudGV4dENvbnRlbnQpICE9PSBudWxsICYmIF9nICE9PSB2b2lkIDAgPyBfZyA6ICcnO1xuICAgIGNvbnN0IHByb2plY3RBcnIgPSBbXTtcbiAgICAvL2dyYWIgdGhlIGVudGlyZSBwcm9qZWN0IGJlbG9uZ2luZyB0byBjdXJyZW50bHkgY2hlY2tlZCB0b2RvXG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoa2V5ICE9PSAnU2FtcGxlIFByb2plY3QnICYmXG4gICAgICAgICAgICBrZXkgIT09ICdwcm9qZWN0TmFtZXMnICYmXG4gICAgICAgICAgICBrZXkgIT09ICdhcmNoaXZlZCcgJiZcbiAgICAgICAgICAgIGtleSAhPT0gJ3VwY29taW5nJyAmJlxuICAgICAgICAgICAga2V5ICE9PSAndG9kYXknKSB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSB0aGlzUHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0QXJyLnB1c2goSlNPTi5wYXJzZSgoX2EgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgYXJjaGl2ZWRUb2RvcyA9IEpTT04ucGFyc2UoKF9oID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FyY2hpdmVkJykpICE9PSBudWxsICYmIF9oICE9PSB2b2lkIDAgPyBfaCA6ICcnKTtcbiAgICBjb25zdCB0b2RvVG9CZUFyY2hpdmVkID0gW107XG4gICAgLy9ncmFiIHJlbWFpbmluZyB0b2RvcyB0aGF0IGFyZSBub3QgY3VycmVudCB0b2RvXG4gICAgY29uc3QgdG9kb3NBcnJGaWx0ZXJlZCA9IFtdO1xuICAgIHByb2plY3RBcnJbMF0udG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICBpZiAodG9kby50b2RvTmFtZSAhPT0gdGhpc1RvZG9OYW1lKSB7XG4gICAgICAgICAgICB0b2Rvc0FyckZpbHRlcmVkLnB1c2godG9kbyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0b2RvVG9CZUFyY2hpdmVkLnB1c2godG9kbyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBwcm9qZWN0QXJyWzBdLnRvZG9zID0gdG9kb3NBcnJGaWx0ZXJlZDtcbiAgICAvL3B1dCB0aGUgcmVtYWluaW5nIHRvZG9zIGJhY2sgaW50byBwcm9qZWN0IGFuZCBpbnRvIHN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzUHJvamVjdE5hbWUsIEpTT04uc3RyaW5naWZ5KHByb2plY3RBcnJbMF0pKTtcbiAgICBjb25zdCBwcm9qZWN0QW5kVG9kb1RvQmVBcmNoaXZlZCA9IHtcbiAgICAgICAgcHJvamVjdDogeyBwcm9qZWN0TmFtZTogdGhpc1Byb2plY3ROYW1lLCBwcm9qZWN0Q29sb3VyOiB0aGlzUHJvamVjdENvbG91ciB9LFxuICAgICAgICB0b2RvczogW3RvZG9Ub0JlQXJjaGl2ZWRbMF1dLFxuICAgIH07XG4gICAgLy9zdG9yZSB0aGUgcmVtb3ZlZCB0b2RvIHVuZGVyICdhcmNoaXZlZCdcbiAgICBhcmNoaXZlZFRvZG9zLnB1c2gocHJvamVjdEFuZFRvZG9Ub0JlQXJjaGl2ZWQpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcmNoaXZlZCcsIEpTT04uc3RyaW5naWZ5KGFyY2hpdmVkVG9kb3MpKTtcbiAgICAoX2sgPSAoX2ogPSB0aGlzLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IF9qID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfai5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfayA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2sucmVtb3ZlKCk7XG59O1xuZXhwb3J0cy5oYW5kbGVUb2RvQ2hlY2tib3hDb21wbGV0ZSA9IGhhbmRsZVRvZG9DaGVja2JveENvbXBsZXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZVRvZG9DbG9zZUljb25DbGljayA9IHZvaWQgMDtcbmNvbnN0IGhhbmRsZVRvZG9DbG9zZUljb25DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB0b2RvTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jb250YWluZXInKTtcbiAgICAvLyBpZiAodG9kb01vZGFsKVxuICAgIC8vIFx0dG9kb01vZGFsLnN0eWxlLnZpc2liaWxpdHkgPSB0b2RvTW9kYWwuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJ1xuICAgIC8vIFx0XHQ/ICdoaWRkZW4nXG4gICAgLy8gXHRcdDogJ3Zpc2libGUnXG4gICAgaWYgKHRvZG9Nb2RhbClcbiAgICAgICAgdG9kb01vZGFsLnJlbW92ZSgpO1xufTtcbmV4cG9ydHMuaGFuZGxlVG9kb0Nsb3NlSWNvbkNsaWNrID0gaGFuZGxlVG9kb0Nsb3NlSWNvbkNsaWNrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZVRvZG9Gb3JtU3VibWl0ID0gdm9pZCAwO1xuY29uc3Qgc3RvcmVQcm9qZWN0QW5kVG9kb3NGdWxsXzEgPSByZXF1aXJlKFwiLi4vcHJvamVjdHNBbmRUb2Rvcy9zdG9yZVByb2plY3RBbmRUb2Rvc0Z1bGxcIik7XG5jb25zdCBhZGRUb2Rvc1RvQ29udGVudF8xID0gcmVxdWlyZShcIi4uL3Byb2plY3RzQW5kVG9kb3MvYWRkVG9kb3NUb0NvbnRlbnRcIik7XG5jb25zdCBoYW5kbGVUb2RvRm9ybVN1Ym1pdCA9IGZ1bmN0aW9uIChldikge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mLCBfZywgX2gsIF9qLCBfaywgX2wsIF9tO1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbG9nID0gKGkpID0+IGNvbnNvbGUubG9nKCdcXG4nLCBpKTtcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJyk7XG4gICAgY29uc3QgdG9kb0Zvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xuICAgIGNvbnN0IHRvZG9Gb3JtUHJvamVjdE5hbWUgPSAoX2IgPSAoX2EgPSB0b2RvRm9ybURhdGEuZ2V0KCdhZGRUb2RvLXByb2plY3ROYW1lJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b1N0cmluZygpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnJztcbiAgICBjb25zdCB0b2RvRm9ybVByb2plY3RDb2xvdXIgPSAoX2QgPSAoX2MgPSB0b2RvRm9ybURhdGEuZ2V0KCdhZGRUb2RvLXByb2plY3RDb2xvdXInKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnRvU3RyaW5nKCkpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6ICcnO1xuICAgIGNvbnN0IHRvZG9Gb3JtTmFtZSA9IChfZiA9IChfZSA9IHRvZG9Gb3JtRGF0YS5nZXQoJ2FkZFRvZG8tbmFtZScpKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UudG9TdHJpbmcoKSkgIT09IG51bGwgJiYgX2YgIT09IHZvaWQgMCA/IF9mIDogJyc7XG4gICAgY29uc3QgdG9kb0Zvcm1EZXNjcmlwdGlvbiA9IChfaCA9IChfZyA9IHRvZG9Gb3JtRGF0YS5nZXQoJ2FkZFRvZG8tZGVzY3JpcHRpb24nKSkgPT09IG51bGwgfHwgX2cgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9nLnRvU3RyaW5nKCkpICE9PSBudWxsICYmIF9oICE9PSB2b2lkIDAgPyBfaCA6ICcnO1xuICAgIGNvbnN0IHRvZG9Gb3JtRHVlRGF0ZSA9IChfayA9IChfaiA9IHRvZG9Gb3JtRGF0YS5nZXQoJ2FkZFRvZG8tZHVlRGF0ZScpKSA9PT0gbnVsbCB8fCBfaiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2oudG9TdHJpbmcoKSkgIT09IG51bGwgJiYgX2sgIT09IHZvaWQgMCA/IF9rIDogJyc7XG4gICAgY29uc3QgdG9kb0Zvcm1TZWxlY3RQcmlvcml0eSA9IChfbSA9IChfbCA9IHRvZG9Gb3JtRGF0YS5nZXQoJ2FkZFRvZG8tc2VsZWN0UHJpb3JpdHknKSkgPT09IG51bGwgfHwgX2wgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9sLnRvU3RyaW5nKCkpICE9PSBudWxsICYmIF9tICE9PSB2b2lkIDAgPyBfbSA6ICcnO1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgLy9yZXR1cm5zIGRhdGUgb25lIHllYXIgZnJvbSBjdXJyZW50XG4gICAgY29uc3Qgc2FtcGxlTG93RHVlRGF0ZSA9IChub3cpID0+IHtcbiAgICAgICAgbGV0IGRheSA9IG5vdy5nZXREYXRlKCk7XG4gICAgICAgIGxldCBtb250aCA9IG5vdy5nZXRNb250aCgpICsgMTtcbiAgICAgICAgY29uc3QgeWVhciA9IG5vdy5nZXRGdWxsWWVhcigpICsgMTtcbiAgICAgICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGggPCAxMCA/ICcwJyArIG1vbnRoIDogbW9udGh9LSR7ZGF5IDwgMTAgPyAnMCcgKyBkYXkgOiBkYXl9YDtcbiAgICB9O1xuICAgIC8vcmV0dXJucyBkYXRlIG9uZSBtb250aCBmcm9tIGN1cnJlbnRcbiAgICBjb25zdCBzYW1wbGVNZWREdWVEYXRlID0gKG5vdykgPT4ge1xuICAgICAgICBsZXQgbW9udGggPSBub3cuZ2V0TW9udGgoKTtcbiAgICAgICAgbW9udGggPSBtb250aCA8PSAxMCA/IG1vbnRoICsgMSA6IG1vbnRoO1xuICAgICAgICBtb250aCA9IG1vbnRoICsgMTtcbiAgICAgICAgcmV0dXJuIGAke25vdy5nZXRGdWxsWWVhcigpfS0ke21vbnRoIDwgMTAgPyAnMCcgKyBtb250aCA6IG1vbnRofS0ke25vdy5nZXREYXRlKCkgPCAxMCA/ICcwJyArIG5vdy5nZXREYXRlKCkgOiBub3cuZ2V0RGF0ZSgpfWA7XG4gICAgfTtcbiAgICAvL3JldHVybnMgZGF0ZSBvbmUgZGF5IGZyb20gY3VycmVudFxuICAgIGNvbnN0IHNhbXBsZVVyZ2VudER1ZURhdGUgPSAobm93KSA9PiB7XG4gICAgICAgIGxldCBkYXkgPSBub3cuZ2V0RGF0ZSgpO1xuICAgICAgICBkYXkgPSBkYXkgPCAyNiA/IGRheSArIDIgOiBkYXk7XG4gICAgICAgIGxldCBtb250aCA9IG5vdy5nZXRNb250aCgpICsgMTtcbiAgICAgICAgcmV0dXJuIGAke25vdy5nZXRGdWxsWWVhcigpfS0ke21vbnRoIDwgMTAgPyAnMCcgKyBtb250aCA6IG1vbnRofS0ke2RheSA8IDEwID8gJzAnICsgZGF5IDogZGF5fWA7XG4gICAgfTtcbiAgICBjb25zdCBzYW1wbGVQcm9qZWN0ID0ge1xuICAgICAgICBwcm9qZWN0OiBcbiAgICAgICAgLy9zYW1wbGUgcHJvamVjdCB0byBkaXNwbGF5IGluaXRpYWxseVxuICAgICAgICB7IHByb2plY3ROYW1lOiAnU2FtcGxlIFByb2plY3QnLCBwcm9qZWN0Q29sb3VyOiAnIzQ4ZDFjYycgfSxcbiAgICAgICAgdG9kb3M6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0b2RvTmFtZTogYEZpbmlzaCAnVGhlIEZhZGVkIFN1bjogS2Vzcml0aCdgLFxuICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbjogJ0ZpbmlzaCByZWFkaW5nIHRoZSBib29rIC0gcmV0dXJuIHNvb24hJyxcbiAgICAgICAgICAgICAgICB0b2RvRHVlRGF0ZTogYCR7c2FtcGxlVXJnZW50RHVlRGF0ZShub3cpfWAsXG4gICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5OiAndXJnZW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdG9kb05hbWU6ICdWZXQgQXBwb2ludG1lbnQnLFxuICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbjogJ1Rha2UgTmlnaHRleWVzIHRvIHRoZSB2ZXQgZm9yIHJvdXRpbmUgY2hlY2t1cCcsXG4gICAgICAgICAgICAgICAgdG9kb0R1ZURhdGU6IGAke3NhbXBsZU1lZER1ZURhdGUobm93KX1gLFxuICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eTogJ21lZGl1bScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRvZG9OYW1lOiAnQmFja3BhY2tpbmcgdHJpcCB0byBOZXBhbCcsXG4gICAgICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uOiAnUGxhbiByb3V0ZSwgc3VwcGxpZXMgYW5kIGFwcGx5IGZvciB2aXNhJyxcbiAgICAgICAgICAgICAgICB0b2RvRHVlRGF0ZTogYCR7c2FtcGxlTG93RHVlRGF0ZShub3cpfWAsXG4gICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5OiAnbG93JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfTtcbiAgICBjb25zdCBwcm9qZWN0c0FuZFRvZG9zRmFjdG9yeSA9IGZ1bmN0aW9uIChwcm9qZWN0TmFtZSwgcHJvamVjdENvbG91ciwgdG9kb05hbWUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvamVjdDogeyBwcm9qZWN0TmFtZSwgcHJvamVjdENvbG91ciB9LFxuICAgICAgICAgICAgdG9kb3M6IFt7IHRvZG9OYW1lLCB0b2RvRGVzY3JpcHRpb24sIHRvZG9EdWVEYXRlLCB0b2RvUHJpb3JpdHkgfV0sXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBjb25zdCBzdG9yZVNhbXBsZVByb2plY3QgPSAoZnVuY3Rpb24gKHNhbXBsZVByb2plY3RfKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHNhbXBsZVByb2plY3RfLnByb2plY3QucHJvamVjdE5hbWUsIEpTT04uc3RyaW5naWZ5KHNhbXBsZVByb2plY3RfKSk7XG4gICAgfSkoc2FtcGxlUHJvamVjdCk7XG4gICAgY29uc3QgcHJvamVjdEFuZFRvZG9zID0gcHJvamVjdHNBbmRUb2Rvc0ZhY3RvcnkodG9kb0Zvcm1Qcm9qZWN0TmFtZSwgdG9kb0Zvcm1Qcm9qZWN0Q29sb3VyLCB0b2RvRm9ybU5hbWUsIHRvZG9Gb3JtRGVzY3JpcHRpb24sIHRvZG9Gb3JtRHVlRGF0ZSwgdG9kb0Zvcm1TZWxlY3RQcmlvcml0eSk7XG4gICAgY29uc3QgdG9kb0V4aXN0cyA9ICgwLCBzdG9yZVByb2plY3RBbmRUb2Rvc0Z1bGxfMS5zdG9yZVByb2plY3RBbmRUb2Rvc0Z1bGwpKHByb2plY3RBbmRUb2Rvcyk7XG4gICAgaWYgKCF0b2RvRXhpc3RzKSB7XG4gICAgICAgICgwLCBhZGRUb2Rvc1RvQ29udGVudF8xLmFkZFRvZG9zVG9Db250ZW50KShwcm9qZWN0QW5kVG9kb3MpO1xuICAgIH1cbiAgICB0b2RvQ29udGFpbmVyID09PSBudWxsIHx8IHRvZG9Db250YWluZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRvZG9Db250YWluZXIucmVtb3ZlKCk7XG59O1xuZXhwb3J0cy5oYW5kbGVUb2RvRm9ybVN1Ym1pdCA9IGhhbmRsZVRvZG9Gb3JtU3VibWl0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZVVwY29taW5nVGFiQ2xpY2sgPSB2b2lkIDA7XG5jb25zdCBoYW5kbGVVcGNvbWluZ1RhYkNsaWNrID0gZnVuY3Rpb24gKCkgeyB9O1xuZXhwb3J0cy5oYW5kbGVVcGNvbWluZ1RhYkNsaWNrID0gaGFuZGxlVXBjb21pbmdUYWJDbGljaztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oZWFkZXIgPSB2b2lkIDA7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IGhlYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBsb2cgPSAoaSkgPT4gY29uc29sZS5sb2coJ1xcbicsIGkpO1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpO1xuICAgIGNvbnN0IGhlYWRlciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2hlYWRlciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkocm9vdCkoaGVhZGVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ1RvZG8gTGlzdCBBcHAnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGhlYWRlcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdoMScpKFsndGl0bGUnLCAnaGVhZGVyLXRpdGxlJ10pKTtcbn07XG5leHBvcnRzLmhlYWRlciA9IGhlYWRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wcm9qZWN0TW9kYWwgPSB2b2lkIDA7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IGhhbmRsZVByb2plY3RDbG9zZUljb25DbGlja18xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZVByb2plY3RDbG9zZUljb25DbGlja1wiKTtcbmNvbnN0IGhhbmRsZVByb2plY3RGb3JtU3VibWl0XzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlUHJvamVjdEZvcm1TdWJtaXRcIik7XG5jb25zdCBwcm9qZWN0TW9kYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gICAgLy9hZGRQcm9qZWN0IG1vZGFsXG4gICAgY29uc3QgYWRkUHJvamVjdENvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2FkZFByb2plY3QtY29udGFpbmVyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzaWRlYmFyKShhZGRQcm9qZWN0Q29udGFpbmVyKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0SGVhZGluZ0NvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2FkZFByb2plY3RIZWFkaW5nLWNvbnRhaW5lciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdENvbnRhaW5lcikoYWRkUHJvamVjdEhlYWRpbmdDb250YWluZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnQWRkIHByb2plY3QnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFByb2plY3RIZWFkaW5nQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2gzJykoWydoZWFkaW5nLXRleHQnLCAndGV4dC1hZGRQcm9qZWN0J10pKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdmb3JtJykoWydmb3JtLWFkZFByb2plY3QnXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ2FjdGlvbicsICcjJ10sXG4gICAgICAgIFsnbWV0aG9kJywgJ3Bvc3QnXSxcbiAgICAgICAgWydpZCcsICdmb3JtLWFkZFByb2plY3QnXSxcbiAgICAgICAgWyduYW1lJywgJ2Zvcm0tYWRkUHJvamVjdCddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnc3VibWl0JykoaGFuZGxlUHJvamVjdEZvcm1TdWJtaXRfMS5oYW5kbGVQcm9qZWN0Rm9ybVN1Ym1pdCksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0Q29udGFpbmVyKSkoYWRkUHJvamVjdEZvcm0pO1xuICAgIGNvbnN0IGFkZFByb2plY3ROYW1lQ29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnYWRkUHJvamVjdC1uYW1lLWNvbnRhaW5lciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdEZvcm0pKGFkZFByb2plY3ROYW1lQ29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydmb3InLCAnYWRkUHJvamVjdC1uYW1lJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnTmFtZScpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdE5hbWVDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnbGFiZWwnKShbJ2xhYmVsLW5hbWUnXSkpO1xuICAgIC8vaW5wdXQgbmFtZVxuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWydpZCcsICdhZGRQcm9qZWN0LW5hbWUnXSxcbiAgICAgICAgWyd0eXBlJywgJ3RleHQnXSxcbiAgICAgICAgWydtaW5sZW5ndGgnLCAnMiddLFxuICAgICAgICBbJ21heGxlbmd0aCcsICcxNyddLFxuICAgICAgICBbJ3BhdHRlcm4nLCAnXlthLXpBLVpdW2EtekEtWjAtOS1fLl17MSwyMH0kJ10sXG4gICAgICAgIFsncGxhY2Vob2xkZXInLCAnRW50ZXIgbmFtZSBvZiBwcm9qZWN0J10sXG4gICAgICAgIFsnbmFtZScsICdhZGRQcm9qZWN0LW5hbWUnXSxcbiAgICAgICAgWydyZXF1aXJlZCcsICcnXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFByb2plY3ROYW1lQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2lucHV0JykoWydhZGRQcm9qZWN0LW5hbWUnXSkpO1xuICAgIGNvbnN0IGFkZFByb2plY3RDb2xvdXJDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydhZGRQcm9qZWN0LWNvbG91ci1jb250YWluZXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFByb2plY3RGb3JtKShhZGRQcm9qZWN0Q29sb3VyQ29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydmb3InLCAnYWRkUHJvamVjdC1jb2xvdXInXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdDb2xvdXInKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFByb2plY3RDb2xvdXJDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnbGFiZWwnKShbJ2xhYmVsLWNvbG91ciddKSk7XG4gICAgLy9pbnB1dCBjb2xvdXJcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsndHlwZScsICdjb2xvciddLFxuICAgICAgICBbJ2lkJywgJ2FkZFByb2plY3QtY29sb3VyJ10sXG4gICAgICAgIFsnbmFtZScsICdhZGRQcm9qZWN0LWNvbG91ciddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdENvbG91ckNvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdpbnB1dCcpKFsnYWRkUHJvamVjdC1jb2xvdXInXSkpO1xuICAgIGNvbnN0IGFkZFByb2plY3RJY29uc0NvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2FkZFByb2plY3RJY29ucy1jb250YWluZXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFByb2plY3RGb3JtKShhZGRQcm9qZWN0SWNvbnNDb250YWluZXIpO1xuICAgIGNvbnN0IGJ0dG5DYW5jZWxQcm9qZWN0ID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2J1dHRvbicpKFsnYnR0bicsICdidHRuLWNhbmNlbFByb2plY3QnXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVQcm9qZWN0Q2xvc2VJY29uQ2xpY2tfMS5oYW5kbGVQcm9qZWN0Q2xvc2VJY29uQ2xpY2spLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ3R5cGUnLCAnYnV0dG9uJ10sXG4gICAgICAgIFsnbmFtZScsICdidHRuLWNhbmNlbCddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdEljb25zQ29udGFpbmVyKSkoYnR0bkNhbmNlbFByb2plY3QpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGJ0dG5DYW5jZWxQcm9qZWN0KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5jcmVhdGVJbWFnZSkoJy4uLy4uL3NyYy9hc3NldHMvaWNvbnMveCgxKS5zdmcnKShbJ2ljb24nLCAnaWNvbi1jYW5jZWxQcm9qZWN0J10pKGBpY29uIG9mIHN5bWJvbCAneCcgcmVwcmVzZW50aW5nIGNhbmNlbCBvciBjbG9zZWApKCdDYW5jZWwnKSk7XG4gICAgY29uc3QgYnR0bkFkZFByb2plY3QgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnYnV0dG9uJykoWydidHRuJywgJ2J0dG4tYWRkUHJvamVjdCddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsndHlwZScsICdzdWJtaXQnXSxcbiAgICAgICAgWyduYW1lJywgJ2J0dG4tYWRkUHJvamVjdCddLFxuICAgICAgICBbJ2Zvcm0nLCAnZm9ybS1hZGRQcm9qZWN0J10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0SWNvbnNDb250YWluZXIpKShidHRuQWRkUHJvamVjdCk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYnR0bkFkZFByb2plY3QpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmNyZWF0ZUltYWdlKSgnLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy9jaGVjaygxKS5zdmcnKShbJ2ljb24nLCAnaWNvbi1hZGRQcm9qZWN0J10pKGBpY29uIG9mIHN5bWJvbCAnY2hlY2snIHJlcHJlc2VudGluZyBhZGRgKSgnQWRkIFByb2plY3QnKSk7XG59O1xuZXhwb3J0cy5wcm9qZWN0TW9kYWwgPSBwcm9qZWN0TW9kYWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudG9kb01vZGFsID0gdm9pZCAwO1xuY29uc3QgZWxlbWVudF9jcmVhdG9yc18xID0gcmVxdWlyZShcIi4uL2VsZW1lbnQtY3JlYXRvcnNcIik7XG5jb25zdCBoYW5kbGVUb2RvQ2xvc2VJY29uQ2xpY2tfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVUb2RvQ2xvc2VJY29uQ2xpY2tcIik7XG5jb25zdCBoYW5kbGVUb2RvRm9ybVN1Ym1pdF8xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZVRvZG9Gb3JtU3VibWl0XCIpO1xuY29uc3QgdG9kb01vZGFsID0gZnVuY3Rpb24gKHByb2plY3REYXRhTmFtZV8sIHByb2plY3REYXRhQ29sb3VyXykge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpO1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3RvZG8tY29udGFpbmVyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShyb290KSh0b2RvQ29udGFpbmVyKTtcbiAgICBjb25zdCB0b2RvRm9ybSA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdmb3JtJykoWydmb3JtJywgJ2Zvcm0tYWRkVG9kbyddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdzdWJtaXQnKShoYW5kbGVUb2RvRm9ybVN1Ym1pdF8xLmhhbmRsZVRvZG9Gb3JtU3VibWl0KSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWydhY3Rpb24nLCAnIyddLFxuICAgICAgICBbJ21ldGhvZCcsICdwb3N0J10sXG4gICAgICAgIFsnaWQnLCAnZm9ybS1hZGRUb2RvJ10sXG4gICAgICAgIFsnbmFtZScsICdmb3JtLWFkZFRvZG8nXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZG9Db250YWluZXIpKSh0b2RvRm9ybSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdBZGQgdGFzayB0b2RvJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b2RvRm9ybSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdoMycpKFsnaGVhZGluZy10ZXh0JywgJ3RleHQtYWRkVG9kbyddKSk7XG4gICAgY29uc3QgYWRkVG9kb05hbWVDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydhZGRUb2RvLW5hbWUtY29udGFpbmVyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b2RvRm9ybSkoYWRkVG9kb05hbWVDb250YWluZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ2ZvcicsICdhZGRUb2RvLW5hbWUnXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdOYW1lJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRUb2RvTmFtZUNvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdsYWJlbCcpKFsnbGFiZWwtbmFtZSddKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ3R5cGUnLCAndGV4dCddLFxuICAgICAgICBbJ2Zvcm0nLCAnZm9ybS1hZGRUb2RvJ10sXG4gICAgICAgIFsnaWQnLCAnYWRkVG9kby1uYW1lJ10sXG4gICAgICAgIFsnbmFtZScsICdhZGRUb2RvLW5hbWUnXSxcbiAgICAgICAgWydtaW5sZW5ndGgnLCAnMiddLFxuICAgICAgICBbJ21heGxlbmd0aCcsICcyMCddLFxuICAgICAgICBbJ3BhdHRlcm4nLCAnXlthLXpBLVpdW2EtekEtWjAtOS1fLl17MSwyMH0kJ10sXG4gICAgICAgIFsncGxhY2Vob2xkZXInLCAnRW50ZXIgbmFtZSBmb3IgdGFzayB0b2RvJ10sXG4gICAgICAgIFsncmVxdWlyZWQnLCAnJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRUb2RvTmFtZUNvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdpbnB1dCcpKFsnYWRkVG9kby1uYW1lJ10pKTtcbiAgICBjb25zdCBhZGRUb2RvRGVzY0NvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2FkZFRvZG8tZGVzYy1jb250YWluZXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZG9Gb3JtKShhZGRUb2RvRGVzY0NvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1snZm9yJywgJ2FkZFRvZG8tZGVzY3JpcHRpb24nXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdEZXNjcmlwdGlvbicpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkVG9kb0Rlc2NDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnbGFiZWwnKShbJ2xhYmVsLWRlc2NyaXB0aW9uJ10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsnaWQnLCAnYWRkVG9kby1kZXNjcmlwdGlvbiddLFxuICAgICAgICBbJ2F1dG9jb21wbGV0ZScsICdvbiddLFxuICAgICAgICBbJ2Zvcm0nLCAnZm9ybS1hZGRUb2RvJ10sXG4gICAgICAgIFsnbWF4bGVuZ3RoJywgJzI1MCddLFxuICAgICAgICBbJ25hbWUnLCAnYWRkVG9kby1kZXNjcmlwdGlvbiddLFxuICAgICAgICBbJ3NwZWxsY2hlY2snLCAndHJ1ZSddLFxuICAgICAgICBbJ3dyYXAnLCAnaGFyZCddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkVG9kb0Rlc2NDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgndGV4dGFyZWEnKShbJ2FkZFRvZG8tZGVzY3JpcHRpb24nXSkpO1xuICAgIGNvbnN0IGFkZFRvZG9EYXRlQ29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnYWRkVG9kby1kYXRlLWNvbnRhaW5lciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0Zvcm0pKGFkZFRvZG9EYXRlQ29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ0R1ZSBkYXRlJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydmb3InLCAnYWRkVG9kby1kdWVEYXRlJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFRvZG9EYXRlQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2xhYmVsJykoWydsYWJlbC1kdWVEYXRlJ10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsndHlwZScsICdkYXRlJ10sXG4gICAgICAgIFsnaWQnLCAnYWRkVG9kby1kdWVEYXRlJ10sXG4gICAgICAgIFtcbiAgICAgICAgICAgICdtaW4nLFxuICAgICAgICAgICAgYCR7bm93LmdldEZ1bGxZZWFyKCl9LSR7bm93LmdldE1vbnRoKCkgPCAxMCA/ICcwJyArIG5vdy5nZXRNb250aCgpIDogbm93LmdldE1vbnRoKCl9LSR7bm93LmdldERhdGUoKSA8IDEwID8gJzAnICsgbm93LmdldERhdGUoKSA6IG5vdy5nZXREYXRlKCl9YCxcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgICAgJ21heCcsXG4gICAgICAgICAgICBgJHtub3cuZ2V0RnVsbFllYXIoKSArIDEwMH0tJHtub3cuZ2V0TW9udGgoKSA8IDEwID8gJzAnICsgbm93LmdldE1vbnRoKCkgOiBub3cuZ2V0TW9udGgoKX0tJHtub3cuZ2V0RGF0ZSgpIDwgMTAgPyAnMCcgKyBub3cuZ2V0RGF0ZSgpIDogbm93LmdldERhdGUoKX1gLFxuICAgICAgICBdLFxuICAgICAgICBbJ25hbWUnLCAnYWRkVG9kby1kdWVEYXRlJ10sXG4gICAgICAgIFsncGxhY2Vob2xkZXInLCAneXl5eS1tbS1kZCddLFxuICAgICAgICBbJ3BhdHRlcm4nLCAnKDBbMS05XXwxWzAtOV18MlswLTldfDNbMDFdKS0oMFsxLTldfDFbMDEyXSktWzAtOV17NH0nXSxcbiAgICAgICAgLy8gWydyZXF1aXJlZCcsICcnXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFRvZG9EYXRlQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2lucHV0JykoWydhZGRUb2RvLWR1ZURhdGUnXSkpO1xuICAgIGNvbnN0IGFkZFRvZG9Qcmlvcml0eUNvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2FkZFRvZG8tcHJpb3JpdHktY29udGFpbmVyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b2RvRm9ybSkoYWRkVG9kb1ByaW9yaXR5Q29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ1ByaW9yaXR5IGxldmVsJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydmb3InLCAnYWRkVG9kby1zZWxlY3RQcmlvcml0eSddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRUb2RvUHJpb3JpdHlDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnbGFiZWwnKShbJ2xhYmVsLXNlbGVjdFByaW9yaXR5J10pKTtcbiAgICBjb25zdCBzZWxlY3RQcmlvcml0eSA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdzZWxlY3QnKShbJ2FkZFRvZG8tc2VsZWN0UHJpb3JpdHknXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ25hbWUnLCAnYWRkVG9kby1zZWxlY3RQcmlvcml0eSddLFxuICAgICAgICBbJ2lkJywgJ2FkZFRvZG8tc2VsZWN0UHJpb3JpdHknXSxcbiAgICAgICAgWydmb3JtJywgJ2Zvcm0tYWRkVG9kbyddLFxuICAgICAgICAvLyBbJ3JlcXVpcmVkJywgJyddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkVG9kb1ByaW9yaXR5Q29udGFpbmVyKSkoc2VsZWN0UHJpb3JpdHkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnLS1QbGVhc2UgYXNzaWduIGEgcHJpb3JpdHktLScpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1sndmFsdWUnLCAnJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNlbGVjdFByaW9yaXR5KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ29wdGlvbicpKFsnb3B0aW9uLXNlbGVjdFByaW9yaXR5J10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWyd2YWx1ZScsICdsb3cnXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdMb3cnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNlbGVjdFByaW9yaXR5KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ29wdGlvbicpKFsnb3B0aW9uLXNlbGVjdFByaW9yaXR5J10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWyd2YWx1ZScsICdtZWRpdW0nXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdNZWRpdW0nKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNlbGVjdFByaW9yaXR5KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ29wdGlvbicpKFsnb3B0aW9uLXNlbGVjdFByaW9yaXR5J10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWyd2YWx1ZScsICdoaWdoJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnSGlnaCcpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2VsZWN0UHJpb3JpdHkpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnb3B0aW9uJykoWydvcHRpb24tc2VsZWN0UHJpb3JpdHknXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ3ZhbHVlJywgJ3VyZ2VudCddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ1VyZ2VudCcpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2VsZWN0UHJpb3JpdHkpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnb3B0aW9uJykoWydvcHRpb24tc2VsZWN0UHJpb3JpdHknXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ3ZhbHVlJywgJ2ltbWVkaWF0ZSddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ0ltbWVkaWF0ZScpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2VsZWN0UHJpb3JpdHkpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnb3B0aW9uJykoWydvcHRpb24tc2VsZWN0UHJpb3JpdHknXSkpO1xuICAgIC8vaGlkZGVuIGVsZW1lbnQgdG8gZnVubmVsIHByb2plY3QgbmFtZSB0byB0b2RvZm9ybVxuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWydoaWRkZW4nLCAnJ10sXG4gICAgICAgIFsndmFsdWUnLCBgJHtwcm9qZWN0RGF0YU5hbWVffWBdLFxuICAgICAgICBbJ25hbWUnLCAnYWRkVG9kby1wcm9qZWN0TmFtZSddLFxuICAgICAgICBbJ3R5cGUnLCAndGV4dCddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0Zvcm0pKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaW5wdXQnKShbJ2FkZFRvZG8tcHJvamVjdE5hbWVfX2hpZGRlbiddKSk7XG4gICAgLy9oaWRkZW4gZWxlbWVudCB0byBmdW5uZWwgcHJvamVjdCBjb2xvdXIgdG8gdG9kb2Zvcm1cbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsnaGlkZGVuJywgJyddLFxuICAgICAgICBbJ3ZhbHVlJywgYCR7cHJvamVjdERhdGFDb2xvdXJffWBdLFxuICAgICAgICBbJ25hbWUnLCAnYWRkVG9kby1wcm9qZWN0Q29sb3VyJ10sXG4gICAgICAgIFsndHlwZScsICd0ZXh0J10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b2RvRm9ybSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdpbnB1dCcpKFsnYWRkVG9kby1wcm9qZWN0Q29sb3VyX19oaWRkZW4nXSkpO1xuICAgIC8vXG4gICAgLy9cbiAgICBjb25zdCBhZGRUb2RvSWNvbnNDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydhZGRUb2RvLWljb25zLWNvbnRhaW5lciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0Zvcm0pKGFkZFRvZG9JY29uc0NvbnRhaW5lcik7XG4gICAgY29uc3QgYnR0bkNhbmNlbFRvZG8gPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnYnV0dG9uJykoWydidHRuJywgJ2J0dG4tY2FuY2VsVG9kbyddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsndHlwZScsICdjbGljayddLFxuICAgICAgICBbJ25hbWUnLCAnYnR0bi1jYW5jZWxUb2RvJ10sXG4gICAgICAgIFsnZm9ybScsICdmb3JtLWFkZFRvZG8nXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFRvZG9JY29uc0NvbnRhaW5lcikpKGJ0dG5DYW5jZWxUb2RvKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdjbGljaycpKGhhbmRsZVRvZG9DbG9zZUljb25DbGlja18xLmhhbmRsZVRvZG9DbG9zZUljb25DbGljayksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShidHRuQ2FuY2VsVG9kbykpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuY3JlYXRlSW1hZ2UpKCcuLi8uLi9zcmMvYXNzZXRzL2ljb25zL3goMSkuc3ZnJykoWydpY29uJywgJ2ljb24tY2FuY2VsVG9kbyddKShgaWNvbiBvZiBzeW1ib2wgJ3gnIHJlcHJlc2VudGluZyBjbG9zZSBvciBjYW5jZWxgKSgnQ2FuY2VsJykpO1xuICAgIGNvbnN0IGJ0dG5BZGRUb2RvID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2J1dHRvbicpKFsnYnR0bicsICdidHRuLWFkZFRvZG8nXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ3R5cGUnLCAnc3VibWl0J10sXG4gICAgICAgIFsnbmFtZScsICdidHRuLWFkZFRvZG8nXSxcbiAgICAgICAgWydmb3JtJywgJ2Zvcm0tYWRkVG9kbyddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkVG9kb0ljb25zQ29udGFpbmVyKSkoYnR0bkFkZFRvZG8pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGJ0dG5BZGRUb2RvKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5jcmVhdGVJbWFnZSkoJy4uLy4uL3NyYy9hc3NldHMvaWNvbnMvY2hlY2soMSkuc3ZnJykoWydpY29uJywgJ2ljb24tYWRkVG9kbyddKShgaWNvbiBvZiBhIGNoZWNrbWFyayByZXByZXNlbnRpbmcgYWRkYCkoJ0FkZCBUb2RvJykpO1xufTtcbmV4cG9ydHMudG9kb01vZGFsID0gdG9kb01vZGFsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmFkZFByb2plY3RUb1NpZGViYXIgPSB2b2lkIDA7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IGhhbmRsZUFkZE5ld1RvZG9JY29uQ2xpY2tfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrXCIpO1xuY29uc3QgaGFuZGxlQ3JlYXRlZFRhYnNDbGlja18xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZUNyZWF0ZWRUYWJzQ2xpY2tcIik7XG5jb25zdCBhZGRQcm9qZWN0VG9TaWRlYmFyID0gZnVuY3Rpb24gKGZvcm1OYW1lXywgZm9ybUNvbG91cl8pIHtcbiAgICBjb25zdCBsb2cgPSAoaSkgPT4gY29uc29sZS5sb2coJ1xcbicsIGkpO1xuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci1wcm9qZWN0cycpO1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydzaWRlYmFyLXByb2plY3QnLCAncHJvamVjdCddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkocHJvamVjdHNDb250YWluZXIpKHByb2plY3RDb250YWluZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ2NsaWNrJykoaGFuZGxlQ3JlYXRlZFRhYnNDbGlja18xLmhhbmRsZUNyZWF0ZWRUYWJzQ2xpY2spLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1snZGF0YS1uYW1lJywgYCR7Zm9ybU5hbWVffWBdXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkU3R5bGVUb0VsZW0pKFtbJ2NvbG9yJywgYCR7Zm9ybUNvbG91cl99YF1dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKShgJHtmb3JtTmFtZV99YCksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShwcm9qZWN0Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2g0JykoWydwcm9qZWN0LXRleHQnLCBgdGV4dC0ke2Zvcm1OYW1lX31gXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWydkYXRhLW5hbWUnLCBgJHtmb3JtTmFtZV99YF0sXG4gICAgICAgIFsnZGF0YS1jb2xvdXInLCBgJHtmb3JtQ29sb3VyX31gXSxcbiAgICBdKSwgXG4gICAgLy8gYWRkU3R5bGVUb0VsZW0oJ2JhY2tncm91bmQtY29sb3InKShgJHtmb3JtQ29sb3VyX31gKSxcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrXzEuaGFuZGxlQWRkTmV3VG9kb0ljb25DbGljayksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShwcm9qZWN0Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5jcmVhdGVJbWFnZSkoJy4uLy4uLy4uL3NyYy9hc3NldHMvaWNvbnMvcGx1cy5zdmcnKShbJ2ljb24nLCAnaWNvbi1wbHVzJ10pKCdpY29uIG9mIHBsdXMgc3ltYm9sJykoJ0FkZCBOZXcgVG9kbycpKTtcbn07XG5leHBvcnRzLmFkZFByb2plY3RUb1NpZGViYXIgPSBhZGRQcm9qZWN0VG9TaWRlYmFyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmFkZFRvZG9zVG9Db250ZW50ID0gdm9pZCAwO1xuY29uc3QgZWxlbWVudF9jcmVhdG9yc18xID0gcmVxdWlyZShcIi4uL2VsZW1lbnQtY3JlYXRvcnNcIik7XG5jb25zdCBoYW5kbGVUb2RvQ2hlY2tib3hDb21wbGV0ZV8xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZVRvZG9DaGVja2JveENvbXBsZXRlXCIpO1xuY29uc3QgYWRkVG9kb3NUb0NvbnRlbnQgPSBmdW5jdGlvbiAoeyBwcm9qZWN0LCB0b2RvcyB9KSB7XG4gICAgY29uc3QgeyBwcm9qZWN0TmFtZSwgcHJvamVjdENvbG91ciB9ID0gcHJvamVjdDtcbiAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdG9kb05hbWUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eSB9ID0gdG9kb3NbaV07XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgICAgICBjb25zdCB0b2RvQ29udGVudENvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3RvZG9Db250ZW50LWNvbnRhaW5lciddKTtcbiAgICAgICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGNvbnRlbnQpKHRvZG9Db250ZW50Q29udGFpbmVyKTtcbiAgICAgICAgY29uc3QgaGVhZGluZ0NvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3RvZG9Db250ZW50LWhlYWRpbmctY29udGFpbmVyJ10pO1xuICAgICAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0NvbnRlbnRDb250YWluZXIpKGhlYWRpbmdDb250YWluZXIpO1xuICAgICAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydkYXRhLWNvbG91cicsIGAke3Byb2plY3RDb2xvdXJ9YF1dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKShgJHtwcm9qZWN0TmFtZX1gKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRTdHlsZVRvRWxlbSkoW1snY29sb3InLCBgJHtwcm9qZWN0Q29sb3VyfWBdXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShoZWFkaW5nQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2gzJykoWydoZWFkaW5nLXRleHQnLCAndG9kb0NvbnRlbnQtcHJvamVjdE5hbWUnXSkpO1xuICAgICAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydmb3InLCAnY29tcGxldGUnXV0pKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnbGFiZWwnKShbJ2xhYmVsJywgJ3RvZG9Db250ZW50LWxhYmVsJ10pKTtcbiAgICAgICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVUb2RvQ2hlY2tib3hDb21wbGV0ZV8xLmhhbmRsZVRvZG9DaGVja2JveENvbXBsZXRlKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgICAgIFsndHlwZScsICdjaGVja2JveCddLFxuICAgICAgICAgICAgWydpZCcsICdjb21wbGV0ZSddLFxuICAgICAgICAgICAgWyduYW1lJywgJ2NvbXBsZXRlJ10sXG4gICAgICAgICAgICBbJ3ZhbHVlJywgYCR7cHJvamVjdENvbG91cn1gXSxcbiAgICAgICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShoZWFkaW5nQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2lucHV0JykoWyd0b2RvQ29udGVudC1jaGVja2JveCddKSk7XG4gICAgICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKShgJHt0b2RvTmFtZX1gKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZG9Db250ZW50Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2g0JykoWyd0b2RvQ29udGVudC1uYW1lJ10pKTtcbiAgICAgICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKGAke3RvZG9EZXNjcmlwdGlvbn1gKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZG9Db250ZW50Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ3AnKShbJ3RvZG9Db250ZW50LWRlc2NyaXB0aW9uJ10pKTtcbiAgICAgICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKGAke3RvZG9EdWVEYXRlfWApLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0NvbnRlbnRDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgncCcpKFsndG9kb0NvbnRlbnQtZHVlRGF0ZSddKSk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5Q29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsncHJpb3JpdHktY29udGFpbmVyJ10pO1xuICAgICAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0NvbnRlbnRDb250YWluZXIpKHByaW9yaXR5Q29udGFpbmVyKTtcbiAgICAgICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRTdHlsZVRvRWxlbSkoW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJyxcbiAgICAgICAgICAgICAgICBgJHt0b2RvUHJpb3JpdHkgPT09ICdpbW1lZGlhdGUnXG4gICAgICAgICAgICAgICAgICAgID8gJ2hzbCgwLCAxMDAlLCAzNSUpJ1xuICAgICAgICAgICAgICAgICAgICA6IHRvZG9Qcmlvcml0eSA9PT0gJ3VyZ2VudCdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2hzbCg0MCwgMTAwJSwgNjUlKSdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdG9kb1ByaW9yaXR5ID09PSAnaGlnaCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdoc2woOTAsIDEwMCUsIDUwJSknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0b2RvUHJpb3JpdHkgPT09ICdtZWRpdW0nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2hzbCgyMDAsIDEwMCUsIDUwJSknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2hzbCgyNTAsIDEwMCUsIDcwJSknfWAsXG4gICAgICAgICAgICBdLFxuICAgICAgICBdKShwcmlvcml0eUNvbnRhaW5lcik7XG4gICAgICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKShgJHt0b2RvUHJpb3JpdHl9YCksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShwcmlvcml0eUNvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdwJykoWyd0b2RvQ29udGVudC1wcmlvcml0eSddKSk7XG4gICAgfSk7XG59O1xuZXhwb3J0cy5hZGRUb2Rvc1RvQ29udGVudCA9IGFkZFRvZG9zVG9Db250ZW50O1xuLy8gPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwidmVoaWNsZTFcIiBuYW1lPVwidmVoaWNsZTFcIiB2YWx1ZT1cIkJpa2VcIj5cbi8vIDxsYWJlbCBmb3I9XCJ2ZWhpY2xlMVwiPiBJIGhhdmUgYSBiaWtlPC9sYWJlbD48YnI+XG4vLyA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ2ZWhpY2xlMlwiIG5hbWU9XCJ2ZWhpY2xlMlwiIHZhbHVlPVwiQ2FyXCI+XG4vLyA8bGFiZWwgZm9yPVwidmVoaWNsZTJcIj4gSSBoYXZlIGEgY2FyPC9sYWJlbD48YnI+XG4vLyA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ2ZWhpY2xlM1wiIG5hbWU9XCJ2ZWhpY2xlM1wiIHZhbHVlPVwiQm9hdFwiPlxuLy8gPGxhYmVsIGZvcj1cInZlaGljbGUzXCI+IEkgaGF2ZSBhIGJvYXQ8L2xhYmVsPjxicj5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wcm9qZWN0c0FuZFRvZG9zT25sb2FkID0gdm9pZCAwO1xuY29uc3QgYWRkUHJvamVjdFRvU2lkZWJhcl8xID0gcmVxdWlyZShcIi4vYWRkUHJvamVjdFRvU2lkZWJhclwiKTtcbmNvbnN0IGFkZFRvZG9zVG9Db250ZW50XzEgPSByZXF1aXJlKFwiLi9hZGRUb2Rvc1RvQ29udGVudFwiKTtcbmNvbnN0IHByb2plY3RzQW5kVG9kb3NPbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbG9nID0gKGkpID0+IGNvbnNvbGUubG9nKCdcXG4nLCBpKTtcbiAgICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKGtleSAhPT0gJ1NhbXBsZSBQcm9qZWN0JyAmJlxuICAgICAgICAgICAga2V5ICE9PSAncHJvamVjdE5hbWVzJyAmJlxuICAgICAgICAgICAga2V5ICE9PSAnYXJjaGl2ZWQnICYmXG4gICAgICAgICAgICBrZXkgIT09ICd1cGNvbWluZycgJiZcbiAgICAgICAgICAgIGtleSAhPT0gJ3RvZGF5Jykge1xuICAgICAgICAgICAgcHJvamVjdHMucHVzaChKU09OLnBhcnNlKChfYSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICgwLCBhZGRQcm9qZWN0VG9TaWRlYmFyXzEuYWRkUHJvamVjdFRvU2lkZWJhcikocHJvamVjdC5wcm9qZWN0LnByb2plY3ROYW1lLCBwcm9qZWN0LnByb2plY3QucHJvamVjdENvbG91cik7XG4gICAgICAgICgwLCBhZGRUb2Rvc1RvQ29udGVudF8xLmFkZFRvZG9zVG9Db250ZW50KShwcm9qZWN0KTtcbiAgICB9KTtcbn07XG5leHBvcnRzLnByb2plY3RzQW5kVG9kb3NPbmxvYWQgPSBwcm9qZWN0c0FuZFRvZG9zT25sb2FkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0b3JlUHJvamVjdEFuZFRvZG9zRnVsbCA9IHZvaWQgMDtcbmNvbnN0IHN0b3JlUHJvamVjdEFuZFRvZG9zRnVsbCA9IGZ1bmN0aW9uIChwcm9qZWN0QW5kVG9kb3NfKSB7XG4gICAgdmFyIF9hO1xuICAgIGxldCB0b2RvRXhpc3RzRmxhZyA9IGZhbHNlO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qTmFtZSA9IHByb2plY3RBbmRUb2Rvc18ucHJvamVjdC5wcm9qZWN0TmFtZTtcbiAgICBjb25zdCBjdXJyZW50VG9kb05hbWUgPSBwcm9qZWN0QW5kVG9kb3NfLnRvZG9zWzBdLnRvZG9OYW1lO1xuICAgIGNvbnN0IGN1cnJlbnRUb2RvcyA9IHByb2plY3RBbmRUb2Rvc18udG9kb3NbMF07XG4gICAgY29uc3Qgc3RvcmFnZUtleXMgPSBuZXcgU2V0KCk7XG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgc3RvcmFnZUtleXMuYWRkKGtleSk7XG4gICAgfSk7XG4gICAgLy9uZXcgcHJvamVjdFxuICAgIGlmICghc3RvcmFnZUtleXMuaGFzKGN1cnJlbnRQcm9qTmFtZSkpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY3VycmVudFByb2pOYW1lLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0QW5kVG9kb3NfKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvL3Byb2plY3QgYWxyZWFkeSBleGlzdHNcbiAgICAgICAgY29uc3QgY3VycmVudFByb2pTdG9yYWdlID0gSlNPTi5wYXJzZSgoX2EgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50UHJvak5hbWUpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJyk7XG4gICAgICAgIGNvbnN0IHRvZG9OYW1lc1NldCA9IG5ldyBTZXQoKTtcbiAgICAgICAgY3VycmVudFByb2pTdG9yYWdlLnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHRvZG9OYW1lc1NldC5hZGQodG9kby50b2RvTmFtZSkpO1xuICAgICAgICAvL25ldyB0b2RvTmFtZVxuICAgICAgICBpZiAoIXRvZG9OYW1lc1NldC5oYXMoY3VycmVudFRvZG9OYW1lKSkge1xuICAgICAgICAgICAgY3VycmVudFByb2pTdG9yYWdlLnRvZG9zLnB1c2goY3VycmVudFRvZG9zKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGN1cnJlbnRQcm9qTmFtZSwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFByb2pTdG9yYWdlKSk7XG4gICAgICAgICAgICB0b2RvRXhpc3RzRmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHRvZG9FeGlzdHNGbGFnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy90b2RvTmFtZSB0YWtlblxuICAgICAgICAgICAgYWxlcnQoYCR7Y3VycmVudFRvZG9OYW1lfSBhbHJlYWR5IGV4aXN0cyBhcyBhIHRvZG8gKO+9oeKAosyB77i/4oCizIDvvaEpICBQbGVhc2UgY2hvb3NlIGFub3RoZXIgbmFtZSBvciBjb25zaWRlciBlZGl0aW5nIGFuIGV4aXN0aW5nIHRvZG8uYCk7XG4gICAgICAgICAgICB0b2RvRXhpc3RzRmxhZyA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdG9kb0V4aXN0c0ZsYWc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9cbiAgICAvL1xufTtcbmV4cG9ydHMuc3RvcmVQcm9qZWN0QW5kVG9kb3NGdWxsID0gc3RvcmVQcm9qZWN0QW5kVG9kb3NGdWxsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNpZGViYXIgPSB2b2lkIDA7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IGhhbmRsZUFkZE5ld1Byb2plY3RJY29uQ2xpY2tfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVBZGROZXdQcm9qZWN0SWNvbkNsaWNrXCIpO1xuY29uc3QgaGFuZGxlQWRkTmV3VG9kb0ljb25DbGlja18xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZUFkZE5ld1RvZG9JY29uQ2xpY2tcIik7XG5jb25zdCBoYW5kbGVBcmNoaXZlZFRhYkNsaWNrXzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlQXJjaGl2ZWRUYWJDbGlja1wiKTtcbmNvbnN0IGhhbmRsZVVwY29taW5nVGFiQ2xpY2tfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVVcGNvbWluZ1RhYkNsaWNrXCIpO1xuY29uc3QgaGFuZGxlVG9kYXlUYWJDbGlja18xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZVRvZGF5VGFiQ2xpY2tcIik7XG5jb25zdCBoYW5kbGVQcm9qZWN0c1RhYkNsaWNrXzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlUHJvamVjdHNUYWJDbGlja1wiKTtcbmNvbnN0IGhhbmRsZUNyZWF0ZWRUYWJzQ2xpY2tfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVDcmVhdGVkVGFic0NsaWNrXCIpO1xuY29uc3Qgc2lkZWJhciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBsb2cgPSAoaSkgPT4gY29uc29sZS5sb2coJ1xcbicsIGkpO1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpO1xuICAgIGNvbnN0IHNpZGViYXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydzaWRlYmFyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShyb290KShzaWRlYmFyKTtcbiAgICBjb25zdCB0b2RheUNvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3NpZGViYXItdGFiJywgJ2NvbnRhaW5lci10b2RheSddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVUb2RheVRhYkNsaWNrXzEuaGFuZGxlVG9kYXlUYWJDbGljaykodG9kYXlDb250YWluZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzaWRlYmFyKSh0b2RheUNvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kYXlDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmNyZWF0ZUltYWdlKSgnLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy9hcGVydHVyZS5zdmcnKShbJ2ljb24nLCAnaWNvbi10b2RheSddKShgaWNvbiByZXByZXNlbnRpbmcgdG9kYXkncyBldmVudHNgKSgnVG9kYXknKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdUb2RheScpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kYXlDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaDQnKShbJ3RhYi10ZXh0JywgJ3RvZGF5LXRhYiddKSk7XG4gICAgY29uc3QgdXBjb21pbmdDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydzaWRlYmFyLXRhYicsICdjb250YWluZXItdXBjb21pbmcnXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ2NsaWNrJykoaGFuZGxlVXBjb21pbmdUYWJDbGlja18xLmhhbmRsZVVwY29taW5nVGFiQ2xpY2spKHVwY29taW5nQ29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2lkZWJhcikodXBjb21pbmdDb250YWluZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHVwY29taW5nQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5jcmVhdGVJbWFnZSkoJy4uLy4uL3NyYy9hc3NldHMvaWNvbnMvY2FsZW5kYXIuc3ZnJykoWydpY29uJywgJ3VwY29taW5nLWljb24nXSkoJ2ljb24gcmVwcmVzZW50aW5nIHVwY29taW5nIGV2ZW50cycpKCdVcGNvbWluZycpKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ1VwY29taW5nJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh1cGNvbWluZ0NvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdoNCcpKFsndGFiLXRleHQnLCAndGFiLXVwY29taW5nJ10pKTtcbiAgICBjb25zdCBhcmNoaXZlZENvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3NpZGViYXItdGFiJywgJ2NvbnRhaW5lci1hcmNoaXZlZCddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVBcmNoaXZlZFRhYkNsaWNrXzEuaGFuZGxlQXJjaGl2ZWRUYWJDbGljaykoYXJjaGl2ZWRDb250YWluZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzaWRlYmFyKShhcmNoaXZlZENvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYXJjaGl2ZWRDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmNyZWF0ZUltYWdlKSgnLi4vLi4vc3JjL2Fzc2V0cy9pY29ucy9hcmNoaXZlLnN2ZycpKFsnaWNvbicsICdhcmNoaXZlZC1pY29uJ10pKCdpY29uIHJlcHJlc2VudGluZyBhcmNoaXZlZCBldmVudHMnKSgnQXJjaGl2ZWQnKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdBcmNoaXZlZCcpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYXJjaGl2ZWRDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaDQnKShbJ3RhYi10ZXh0JywgJ3RhYi1hcmNoaXZlZCddKSk7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydzaWRlYmFyLWhlYWRpbmcnLCAnY29udGFpbmVyLXByb2plY3RzJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzaWRlYmFyKShwcm9qZWN0c0NvbnRhaW5lcik7XG4gICAgY29uc3QgcHJvamVjdHNIZWFkaW5nID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsncHJvamVjdEhlYWRpbmctd3JhcHBlciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkocHJvamVjdHNDb250YWluZXIpKHByb2plY3RzSGVhZGluZyk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVQcm9qZWN0c1RhYkNsaWNrXzEuaGFuZGxlUHJvamVjdHNUYWJDbGljayksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ1Byb2plY3RzJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShwcm9qZWN0c0hlYWRpbmcpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaDMnKShbJ2hlYWRpbmctdGV4dCcsICd0ZXh0LXByb2plY3RzJ10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdjbGljaycpKGhhbmRsZUFkZE5ld1Byb2plY3RJY29uQ2xpY2tfMS5oYW5kbGVBZGROZXdQcm9qZWN0SWNvbkNsaWNrKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHByb2plY3RzSGVhZGluZykpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuY3JlYXRlSW1hZ2UpKCcuLi8uLi8uLi9zcmMvYXNzZXRzL2ljb25zL3BsdXMuc3ZnJykoWydpY29uJywgJ2ljb24tcGx1cyddKSgnaWNvbiBvZiBwbHVzIHN5bWJvbCcpKCdBZGQgTmV3IFByb2plY3QnKSk7XG4gICAgY29uc3Qgc2FtcGxlUHJvamVjdENvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3NpZGViYXItcHJvamVjdCcsICdwcm9qZWN0J10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShwcm9qZWN0c0NvbnRhaW5lcikoc2FtcGxlUHJvamVjdENvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVDcmVhdGVkVGFic0NsaWNrXzEuaGFuZGxlQ3JlYXRlZFRhYnNDbGljayksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ1NhbXBsZSBQcm9qZWN0JyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzYW1wbGVQcm9qZWN0Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2g0JykoWydwcm9qZWN0LXRleHQnLCAndGV4dC1zYW1wbGVQcm9qZWN0J10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydkYXRhLW5hbWUnLCBgU2FtcGxlIFByb2plY3RgXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrXzEuaGFuZGxlQWRkTmV3VG9kb0ljb25DbGljayksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzYW1wbGVQcm9qZWN0Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5jcmVhdGVJbWFnZSkoJy4uLy4uLy4uL3NyYy9hc3NldHMvaWNvbnMvcGx1cy5zdmcnKShbJ2ljb24nLCAnaWNvbi1wbHVzJ10pKCdpY29uIG9mIHBsdXMgc3ltYm9sJykoJ0FkZCBOZXcgVG9kbycpKTtcbiAgICAvL1xuICAgIC8vXG4gICAgLy9cbn07XG5leHBvcnRzLnNpZGViYXIgPSBzaWRlYmFyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xucmVxdWlyZShcIi4vaW5kZXguY3NzXCIpO1xuY29uc3QgY29udGVudF8xID0gcmVxdWlyZShcIi4vdHMvY29udGVudC9jb250ZW50XCIpO1xuY29uc3QgaGVhZGVyXzEgPSByZXF1aXJlKFwiLi90cy9oZWFkZXIvaGVhZGVyXCIpO1xuY29uc3Qgc2lkZWJhcl8xID0gcmVxdWlyZShcIi4vdHMvc2lkZWJhci9zaWRlYmFyXCIpO1xuY29uc3QgcHJvamVjdHNBbmRUb2Rvc09ubG9hZF8xID0gcmVxdWlyZShcIi4vdHMvcHJvamVjdHNBbmRUb2Rvcy9wcm9qZWN0c0FuZFRvZG9zT25sb2FkXCIpO1xuY29uc3QgbWFpbkFwcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBsb2cgPSAoaSkgPT4gY29uc29sZS5sb2coJ1xcbicsIGkpO1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpO1xuICAgICgwLCBoZWFkZXJfMS5oZWFkZXIpKCk7XG4gICAgKDAsIHNpZGViYXJfMS5zaWRlYmFyKSgpO1xuICAgICgwLCBjb250ZW50XzEuY29udGVudCkoKTtcbiAgICAvL3J1bnMgb24gZXZlcnkgcmVmcmVzaFxuICAgIHNlbGYub25sb2FkID0gcHJvamVjdHNBbmRUb2Rvc09ubG9hZF8xLnByb2plY3RzQW5kVG9kb3NPbmxvYWQ7XG4gICAgLy8gc2VsZi5vbmxvYWQgPSBjb250ZW50c1RvZG9zT25sb2FkXG59O1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIG1haW5BcHApO1xuLy8gcGlwZShcbi8vIFx0YWRkVGV4dFRvRWxlbSgnSGkgQXRobWEhIScpLFxuLy8gXHRhZGRBdHRyaWJ1dGVUb0VsZW0oJ2RhdGEta2V5JykoJ3NvbWV0aGluZycpLFxuLy8gXHRhcHBlbmRFbGVtVG9QYXJlbnQobWFpbkNvbnRlbnQpXG4vLyApKGVsZW1DcmVhdG9yKCdwJykoWydwYXJhJ10pKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9