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
    const linksContainer = (0, element_creators_1.elemCreator)('div')(['links-container']);
    (0, element_creators_1.appendElemToParent)(top)(linksContainer);
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('Made by Athma Vasi'), (0, element_creators_1.addAttributeToElem)([['href', 'https://github.com/Athma-Vasi']]), (0, element_creators_1.appendElemToParent)(linksContainer))((0, element_creators_1.elemCreator)('a')(['link-author']));
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('View Code'), (0, element_creators_1.addAttributeToElem)([['href', 'https://github.com/Athma-Vasi/Todo-List-App']]), (0, element_creators_1.appendElemToParent)(linksContainer))((0, element_creators_1.elemCreator)('a')(['link-repo']));
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
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('--Filter by priority--'), (0, element_creators_1.addAttributeToElem)([['value', ' ']]), (0, element_creators_1.appendElemToParent)(selectFilterByPriority))((0, element_creators_1.elemCreator)('option')(['option-filterByPriority']));
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
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('--Sort by priority--'), (0, element_creators_1.addAttributeToElem)([['value', ' ']]), (0, element_creators_1.appendElemToParent)(selectSortByPriority))((0, element_creators_1.elemCreator)('option')(['option-sortByPriority']));
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
        addProjectModal.style.boxShadow =
            '1px 1px 1.6px 1.6px #63526f61, 1.6px 1.6px 2.6px 2.6px #63526f61';
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
    if (addTodoModal) {
        addTodoModal.style.visibility =
            (addTodoModal === null || addTodoModal === void 0 ? void 0 : addTodoModal.style.visibility) === 'visible' ? 'hidden' : 'visible';
        addTodoModal.style.boxShadow =
            '1px 1px 1.6px 1.6px #63526f61, 1.6px 1.6px 2.6px 2.6px #63526f61';
    }
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
    //if select input default text is clicked, all 'live' projects displayed
    if (selectedPriority === ' ') {
        //remove content section's previous contents
        const content = document.querySelector('.content');
        const contentBottomPrev = document.querySelector('.content-bottom');
        contentBottomPrev === null || contentBottomPrev === void 0 ? void 0 : contentBottomPrev.remove();
        //render new content
        const contentBottom = (0, element_creators_1.elemCreator)('div')(['content-bottom']);
        (0, element_creators_1.appendElemToParent)(content)(contentBottom);
        projectArr.forEach((project) => (0, addTodosToContent_1.addTodosToContent)(project));
    }
    //render todos
    filteredPriorityArr.forEach((project) => {
        (0, addTodosToContent_1.addTodosToContent)(project);
    });
};
exports.handleFilterByPriorityClick = handleFilterByPriorityClick;


/***/ }),

/***/ "./src/ts/eventCBs/handleInvalidProjName.ts":
/*!**************************************************!*\
  !*** ./src/ts/eventCBs/handleInvalidProjName.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleInvalidProjName = void 0;
const handleInvalidProjName = function (ev) {
    if (this.value === '')
        this.setCustomValidity('Please enter a project name!');
    else
        this.setCustomValidity('Project names can only contain upper and lowercase letters. Please try again!');
};
exports.handleInvalidProjName = handleInvalidProjName;


/***/ }),

/***/ "./src/ts/eventCBs/handleInvalidTodoName.ts":
/*!**************************************************!*\
  !*** ./src/ts/eventCBs/handleInvalidTodoName.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleInvalidTodoName = void 0;
const handleInvalidTodoName = function (ev) {
    if (this.value === '')
        this.setCustomValidity('Please enter a todo name');
    else
        this.setCustomValidity('Todo names can only contain letters and numbers. Please try again!');
};
exports.handleInvalidTodoName = handleInvalidTodoName;


/***/ }),

/***/ "./src/ts/eventCBs/handleProjNameValidation.ts":
/*!*****************************************************!*\
  !*** ./src/ts/eventCBs/handleProjNameValidation.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleProjNameValidation = void 0;
const handleProjNameValidation = function (ev) {
    //to avoid input registering as invalid, if a custom validity was previously set, when input contains valid value upon submission
    this.setCustomValidity('');
    this.checkValidity();
};
exports.handleProjNameValidation = handleProjNameValidation;


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
                ['Sample Project', 'archived', 'projects'].forEach((name) => keysSet.add(name));
                //if name already present
                if (keysSet.has(projectFormName_)) {
                    alert(`${projectFormName_} already exists as a project (｡•́︿•̀｡)  Please choose another name.`);
                    return;
                }
                else {
                    //if new name, push to arr and then store array in localStorage
                    keysSet.add(projectFormName_);
                    localStorage.setItem(key, JSON.stringify(Array.from(keysSet)));
                    //render projects with name,colour & icon under sidebar
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
    //grab all the projects except specified
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
    //grab all the projects except specified
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
    //grab all projects except specified
    Object.keys(localStorage).forEach((key) => {
        var _a;
        if (key !== 'projectNames' && key !== 'archived') {
            projectArr.push(JSON.parse((_a = localStorage.getItem(key)) !== null && _a !== void 0 ? _a : ''));
        }
    });
    console.log(projectArr);
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
    console.log(projectMap);
    //in order to use the sort method
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
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    if (!localStorage.getItem('archived')) {
        localStorage.setItem('archived', JSON.stringify([]));
    }
    const thisProjectName = (_b = (_a = this.previousSibling) === null || _a === void 0 ? void 0 : _a.textContent) !== null && _b !== void 0 ? _b : '';
    const thisProjectColour = (_c = this.value) !== null && _c !== void 0 ? _c : '';
    const thisTodoName = (_h = (_g = (_f = (_e = (_d = this.parentElement) === null || _d === void 0 ? void 0 : _d.parentElement) === null || _e === void 0 ? void 0 : _e.firstChild) === null || _f === void 0 ? void 0 : _f.nextSibling) === null || _g === void 0 ? void 0 : _g.textContent) !== null && _h !== void 0 ? _h : '';
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
    const archivedTodos = JSON.parse((_j = localStorage.getItem('archived')) !== null && _j !== void 0 ? _j : '');
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
    (_l = (_k = this.parentElement) === null || _k === void 0 ? void 0 : _k.parentElement) === null || _l === void 0 ? void 0 : _l.remove();
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
    //checks if todoExists and returns true if todoName is present
    const todoExists = (0, storeProjectAndTodosFull_1.storeProjectAndTodosFull)(projectAndTodos);
    if (!todoExists) {
        (0, addTodosToContent_1.addTodosToContent)(projectAndTodos);
    }
    todoContainer === null || todoContainer === void 0 ? void 0 : todoContainer.remove();
};
exports.handleTodoFormSubmit = handleTodoFormSubmit;


/***/ }),

/***/ "./src/ts/eventCBs/handleTodoNameValidation.ts":
/*!*****************************************************!*\
  !*** ./src/ts/eventCBs/handleTodoNameValidation.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleTodoNameValidation = void 0;
const handleTodoNameValidation = function (ev) {
    //to avoid input registering as invalid, if a custom validity was previously set, when input contains valid value upon submission
    this.setCustomValidity('');
    this.checkValidity();
};
exports.handleTodoNameValidation = handleTodoNameValidation;


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
    //grab each todo not due today and put into temp project obj and push into ...Filtered
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
const handleInvalidProjName_1 = __webpack_require__(/*! ../eventCBs/handleInvalidProjName */ "./src/ts/eventCBs/handleInvalidProjName.ts");
const handleProjectCloseIconClick_1 = __webpack_require__(/*! ../eventCBs/handleProjectCloseIconClick */ "./src/ts/eventCBs/handleProjectCloseIconClick.ts");
const handleProjectFormSubmit_1 = __webpack_require__(/*! ../eventCBs/handleProjectFormSubmit */ "./src/ts/eventCBs/handleProjectFormSubmit.ts");
const handleProjNameValidation_1 = __webpack_require__(/*! ../eventCBs/handleProjNameValidation */ "./src/ts/eventCBs/handleProjNameValidation.ts");
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
    (0, element_creators_1.pipe)((0, element_creators_1.addEvtListener)('input')(handleProjNameValidation_1.handleProjNameValidation), (0, element_creators_1.addEvtListener)('invalid')(handleInvalidProjName_1.handleInvalidProjName), (0, element_creators_1.addAttributeToElem)([
        ['id', 'addProject-name'],
        ['type', 'text'],
        ['minlength', '2'],
        ['maxlength', '17'],
        ['pattern', '[a-zA-Z]+'],
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
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('Cancel'), (0, element_creators_1.addEvtListener)('click')(handleProjectCloseIconClick_1.handleProjectCloseIconClick), (0, element_creators_1.addAttributeToElem)([
        ['type', 'button'],
        ['name', 'bttn-cancel'],
    ]), (0, element_creators_1.appendElemToParent)(addProjectIconsContainer))(bttnCancelProject);
    const bttnAddProject = (0, element_creators_1.elemCreator)('button')(['bttn', 'bttn-addProject']);
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('Add'), (0, element_creators_1.addAttributeToElem)([
        ['type', 'submit'],
        ['name', 'bttn-addProject'],
        ['form', 'form-addProject'],
    ]), (0, element_creators_1.appendElemToParent)(addProjectIconsContainer))(bttnAddProject);
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
const handleInvalidTodoName_1 = __webpack_require__(/*! ../eventCBs/handleInvalidTodoName */ "./src/ts/eventCBs/handleInvalidTodoName.ts");
const handleTodoCloseIconClick_1 = __webpack_require__(/*! ../eventCBs/handleTodoCloseIconClick */ "./src/ts/eventCBs/handleTodoCloseIconClick.ts");
const handleTodoFormSubmit_1 = __webpack_require__(/*! ../eventCBs/handleTodoFormSubmit */ "./src/ts/eventCBs/handleTodoFormSubmit.ts");
const handleTodoNameValidation_1 = __webpack_require__(/*! ../eventCBs/handleTodoNameValidation */ "./src/ts/eventCBs/handleTodoNameValidation.ts");
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
    (0, element_creators_1.pipe)((0, element_creators_1.addEvtListener)('input')(handleTodoNameValidation_1.handleTodoNameValidation), (0, element_creators_1.addEvtListener)('invalid')(handleInvalidTodoName_1.handleInvalidTodoName), (0, element_creators_1.addAttributeToElem)([
        ['type', 'text'],
        ['form', 'form-addTodo'],
        ['id', 'addTodo-name'],
        ['name', 'addTodo-name'],
        ['minlength', '2'],
        ['maxlength', '31'],
        ['pattern', '[A-Za-z0-9]+'],
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
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('Cancel'), (0, element_creators_1.addEvtListener)('click')(handleTodoCloseIconClick_1.handleTodoCloseIconClick), (0, element_creators_1.addAttributeToElem)([
        ['type', 'click'],
        ['name', 'bttn-cancelTodo'],
        ['form', 'form-addTodo'],
    ]), (0, element_creators_1.appendElemToParent)(addTodoIconsContainer))(bttnCancelTodo);
    const bttnAddTodo = (0, element_creators_1.elemCreator)('button')(['bttn', 'bttn-addTodo']);
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('Add'), (0, element_creators_1.addAttributeToElem)([
        ['type', 'submit'],
        ['name', 'bttn-addTodo'],
        ['form', 'form-addTodo'],
    ]), (0, element_creators_1.appendElemToParent)(addTodoIconsContainer))(bttnAddTodo);
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
    (0, element_creators_1.pipe)((0, element_creators_1.addEvtListener)('click')(handleCreatedTabsClick_1.handleCreatedTabsClick), (0, element_creators_1.addAttributeToElem)([
        ['data-name', `${formName_}`],
        ['data-colour', `${formColour_}`],
    ]), (0, element_creators_1.addStyleToElem)([['color', `${formColour_}`]]), (0, element_creators_1.addTextToElem)(`${formName_}`), (0, element_creators_1.appendElemToParent)(projectContainer))((0, element_creators_1.elemCreator)('h4')(['project-text']));
    (0, element_creators_1.pipe)((0, element_creators_1.addStyleToElem)([['color', `${formColour_}`]]), (0, element_creators_1.addTextToElem)('+'), (0, element_creators_1.addAttributeToElem)([
        ['data-name', `${formName_}`],
        ['data-colour', `${formColour_}`],
    ]), (0, element_creators_1.addEvtListener)('click')(handleAddNewTodoIconClick_1.handleAddNewTodoIconClick), (0, element_creators_1.appendElemToParent)(projectContainer))((0, element_creators_1.elemCreator)('button')(['bttn', 'bttn-todoModal']));
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
            //grab each todo with dueDate earlier than today and store corresponding project into temp object and store in expiredProjectsArr
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
    unexpiredProjectsMap.forEach((proj, projName) => {
        localStorage.setItem(projName, JSON.stringify(proj));
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
    //render sample todos
    const sampleProject = JSON.parse((_a = localStorage.getItem('Sample Project')) !== null && _a !== void 0 ? _a : '');
    (0, addTodosToContent_1.addTodosToContent)(sampleProject);
    //render rest of projects in storage
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
            alert(`${currentTodoName} already exists as a todo (｡•́︿•̀｡)  Please choose another name.`);
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
        day = day <= 26 ? day + 2 : day;
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
                todoDescription: `Finish reading the book - return ${now.getDate() > 26 ? 'today' : 'day after tomorrow'}!`,
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
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('Today'), (0, element_creators_1.appendElemToParent)(todayContainer))((0, element_creators_1.elemCreator)('h4')(['tab-text', 'today-tab']));
    const upcomingContainer = (0, element_creators_1.elemCreator)('div')(['sidebar-tab', 'container-upcoming']);
    (0, element_creators_1.addEvtListener)('click')(handleUpcomingTabClick_1.handleUpcomingTabClick)(upcomingContainer);
    (0, element_creators_1.appendElemToParent)(sidebar)(upcomingContainer);
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('Upcoming'), (0, element_creators_1.appendElemToParent)(upcomingContainer))((0, element_creators_1.elemCreator)('h4')(['tab-text', 'tab-upcoming']));
    const archivedContainer = (0, element_creators_1.elemCreator)('div')(['sidebar-tab', 'container-archived']);
    (0, element_creators_1.addEvtListener)('click')(handleArchivedTabClick_1.handleArchivedTabClick)(archivedContainer);
    (0, element_creators_1.appendElemToParent)(sidebar)(archivedContainer);
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('Archived'), (0, element_creators_1.appendElemToParent)(archivedContainer))((0, element_creators_1.elemCreator)('h4')(['tab-text', 'tab-archived']));
    const projectsContainer = (0, element_creators_1.elemCreator)('div')(['sidebar-heading', 'container-projects']);
    (0, element_creators_1.appendElemToParent)(sidebar)(projectsContainer);
    const projectsHeading = (0, element_creators_1.elemCreator)('div')(['projectHeading-wrapper']);
    (0, element_creators_1.appendElemToParent)(projectsContainer)(projectsHeading);
    (0, element_creators_1.pipe)((0, element_creators_1.addEvtListener)('click')(handleProjectsTabClick_1.handleProjectsTabClick), (0, element_creators_1.addTextToElem)('Projects'), (0, element_creators_1.appendElemToParent)(projectsHeading))((0, element_creators_1.elemCreator)('h3')(['heading-text', 'text-projects']));
    (0, element_creators_1.pipe)((0, element_creators_1.addTextToElem)('+'), (0, element_creators_1.addEvtListener)('click')(handleAddNewProjectIconClick_1.handleAddNewProjectIconClick), (0, element_creators_1.appendElemToParent)(projectsHeading))((0, element_creators_1.elemCreator)('button')(['bttn', 'bttn-projectModal']));
    const sampleProjectContainer = (0, element_creators_1.elemCreator)('div')(['sidebar-project', 'project']);
    (0, element_creators_1.appendElemToParent)(projectsContainer)(sampleProjectContainer);
    (0, element_creators_1.pipe)((0, element_creators_1.addStyleToElem)([['color', '#48d1cc']]), (0, element_creators_1.addEvtListener)('click')(handleCreatedTabsClick_1.handleCreatedTabsClick), (0, element_creators_1.addTextToElem)('Sample Project'), (0, element_creators_1.appendElemToParent)(sampleProjectContainer))((0, element_creators_1.elemCreator)('h4')(['project-text', 'text-sampleProject']));
    (0, element_creators_1.pipe)((0, element_creators_1.addStyleToElem)([['color', '#48d1cc']]), (0, element_creators_1.addTextToElem)('+'), (0, element_creators_1.addAttributeToElem)([
        ['data-name', `Sample Project`],
        ['data-colour', '#48d1cc'],
    ]), (0, element_creators_1.addEvtListener)('click')(handleAddNewTodoIconClick_1.handleAddNewTodoIconClick), (0, element_creators_1.appendElemToParent)(sampleProjectContainer))((0, element_creators_1.elemCreator)('button')(['bttn', 'bttn-todoModal']));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7QUFDN0QsbUJBQU8sQ0FBQyxvQ0FBYTtBQUNyQixrQkFBa0IsbUJBQU8sQ0FBQyx5REFBc0I7QUFDaEQsaUJBQWlCLG1CQUFPLENBQUMscURBQW9CO0FBQzdDLGtCQUFrQixtQkFBTyxDQUFDLHlEQUFzQjtBQUNoRCxpQ0FBaUMsbUJBQU8sQ0FBQyx5R0FBOEM7QUFDdkYsNkJBQTZCLG1CQUFPLENBQUMsaUdBQTBDO0FBQy9FLDhCQUE4QixtQkFBTyxDQUFDLG1HQUEyQztBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvY29udGVudC9jb250ZW50LnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZWxlbWVudC1jcmVhdG9ycy50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2V2ZW50Q0JzL2hhbmRsZUFkZE5ld1Byb2plY3RJY29uQ2xpY2sudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZXZlbnRDQnMvaGFuZGxlQXJjaGl2ZWRUYWJDbGljay50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2V2ZW50Q0JzL2hhbmRsZUNyZWF0ZWRUYWJzQ2xpY2sudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVGaWx0ZXJCeVByaW9yaXR5Q2xpY2sudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVJbnZhbGlkUHJvak5hbWUudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVJbnZhbGlkVG9kb05hbWUudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVQcm9qTmFtZVZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVQcm9qZWN0Q2xvc2VJY29uQ2xpY2sudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVQcm9qZWN0Rm9ybVN1Ym1pdC50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2V2ZW50Q0JzL2hhbmRsZVByb2plY3RzVGFiQ2xpY2sudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVTZWFyY2hGb3JtU3VibWl0LnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZXZlbnRDQnMvaGFuZGxlU29ydEJ5UHJpb3JpdHlDbGljay50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2V2ZW50Q0JzL2hhbmRsZVRvZGF5VGFiQ2xpY2sudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9ldmVudENCcy9oYW5kbGVUb2RvQ2hlY2tib3hDb21wbGV0ZS50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2V2ZW50Q0JzL2hhbmRsZVRvZG9DbG9zZUljb25DbGljay50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2V2ZW50Q0JzL2hhbmRsZVRvZG9Gb3JtU3VibWl0LnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZXZlbnRDQnMvaGFuZGxlVG9kb05hbWVWYWxpZGF0aW9uLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvZXZlbnRDQnMvaGFuZGxlVXBjb21pbmdUYWJDbGljay50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL2hlYWRlci9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9tb2RhbHMvcHJvamVjdE1vZGFsLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvbW9kYWxzL3RvZG9Nb2RhbC50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL3Byb2plY3RzQW5kVG9kb3MvYWRkUHJvamVjdFRvU2lkZWJhci50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL3Byb2plY3RzQW5kVG9kb3MvYWRkVG9kb3NUb0NvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9wcm9qZWN0c0FuZFRvZG9zL2FyY2hpdmVFeHBpcmVkVG9kb3MudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9wcm9qZWN0c0FuZFRvZG9zL3Byb2plY3RzQW5kVG9kb3NPbmxvYWQudHMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy90cy9wcm9qZWN0c0FuZFRvZG9zL3N0b3JlUHJvamVjdEFuZFRvZG9zRnVsbC50cyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3RzL3Byb2plY3RzQW5kVG9kb3Mvc3RvcmVTYW1wbGVQcm9qZWN0LnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvdHMvc2lkZWJhci9zaWRlYmFyLnRzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNvbnRlbnQgPSB2b2lkIDA7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IGhhbmRsZUZpbHRlckJ5UHJpb3JpdHlDbGlja18xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZUZpbHRlckJ5UHJpb3JpdHlDbGlja1wiKTtcbmNvbnN0IGhhbmRsZVNlYXJjaEZvcm1TdWJtaXRfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVTZWFyY2hGb3JtU3VibWl0XCIpO1xuY29uc3QgaGFuZGxlU29ydEJ5UHJpb3JpdHlDbGlja18xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZVNvcnRCeVByaW9yaXR5Q2xpY2tcIik7XG5jb25zdCBjb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydjb250ZW50J10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShyb290KShjb250ZW50KTtcbiAgICBjb25zdCB0b3AgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydjb250ZW50LXRvcCddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoY29udGVudCkodG9wKTtcbiAgICBjb25zdCBsaW5rc0NvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2xpbmtzLWNvbnRhaW5lciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9wKShsaW5rc0NvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdNYWRlIGJ5IEF0aG1hIFZhc2knKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL0F0aG1hLVZhc2knXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkobGlua3NDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnYScpKFsnbGluay1hdXRob3InXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnVmlldyBDb2RlJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydocmVmJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9BdGhtYS1WYXNpL1RvZG8tTGlzdC1BcHAnXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkobGlua3NDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnYScpKFsnbGluay1yZXBvJ10pKTtcbiAgICBjb25zdCBmb3JtID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2Zvcm0nKShbJ2Zvcm0tc2VhcmNoVG9kbyddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdzdWJtaXQnKShoYW5kbGVTZWFyY2hGb3JtU3VibWl0XzEuaGFuZGxlU2VhcmNoRm9ybVN1Ym1pdCksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsnYWN0aW9uJywgJyMnXSxcbiAgICAgICAgWydtZXRob2QnLCAncG9zdCddLFxuICAgICAgICBbJ2lkJywgJ2Zvcm0tc2VhcmNoVG9kbyddLFxuICAgICAgICBbJ25hbWUnLCAnc2VhcmNoLXRvZG8nXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvcCkpKGZvcm0pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ2ZvcicsICdzZWFyY2hUb2RvJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGZvcm0pKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnbGFiZWwnKShbJ2xhYmVsLXNlYXJjaCddKSk7XG4gICAgY29uc3Qgc2VhcmNoVG9kbyA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdpbnB1dCcpKFsnc2VhcmNoVG9kbyddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ3R5cGUnLCAnc2VhcmNoJ10sXG4gICAgICAgIFsncGxhY2Vob2xkZXInLCAnc2VhcmNoIGZvciBhIHRvZG8nXSxcbiAgICAgICAgWydpZCcsICdzZWFyY2hUb2RvJ10sXG4gICAgICAgIFsnbmFtZScsICdzZWFyY2gtdG9kbyddLFxuICAgIF0pKHNlYXJjaFRvZG8pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShmb3JtKShzZWFyY2hUb2RvKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsnZm9yJywgJ3NlbGVjdC1maWx0ZXJCeVByaW9yaXR5J10sXG4gICAgICAgIFsnbmFtZScsICdzZWxlY3QtZmlsdGVyQnlQcmlvcml0eSddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9wKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2xhYmVsJykoWydsYWJlbCcsICdsYWJlbC1maWx0ZXJCeVByaW9yaXR5J10pKTtcbiAgICBjb25zdCBzZWxlY3RGaWx0ZXJCeVByaW9yaXR5ID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ3NlbGVjdCcpKFsnc2VsZWN0LWZpbHRlckJ5UHJpb3JpdHknXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVGaWx0ZXJCeVByaW9yaXR5Q2xpY2tfMS5oYW5kbGVGaWx0ZXJCeVByaW9yaXR5Q2xpY2spLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ25hbWUnLCAnc2VsZWN0LWZpbHRlckJ5UHJpb3JpdHknXSxcbiAgICAgICAgWydpZCcsICdzZWxlY3QtZmlsdGVyQnlQcmlvcml0eSddLFxuICAgICAgICBbJ3RpdGxlJywgJ3NlbGVjdC1maWx0ZXJCeVByaW9yaXR5J10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b3ApKShzZWxlY3RGaWx0ZXJCeVByaW9yaXR5KTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJy0tRmlsdGVyIGJ5IHByaW9yaXR5LS0nKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ3ZhbHVlJywgJyAnXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2VsZWN0RmlsdGVyQnlQcmlvcml0eSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdvcHRpb24nKShbJ29wdGlvbi1maWx0ZXJCeVByaW9yaXR5J10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ2ltbWVkaWF0ZScpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1sndmFsdWUnLCAnaW1tZWRpYXRlJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNlbGVjdEZpbHRlckJ5UHJpb3JpdHkpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnb3B0aW9uJykoWydvcHRpb24tZmlsdGVyQnlQcmlvcml0eSddKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCd1cmdlbnQnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ3ZhbHVlJywgJ3VyZ2VudCddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzZWxlY3RGaWx0ZXJCeVByaW9yaXR5KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ29wdGlvbicpKFsnb3B0aW9uLWZpbHRlckJ5UHJpb3JpdHknXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnaGlnaCcpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1sndmFsdWUnLCAnaGlnaCddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzZWxlY3RGaWx0ZXJCeVByaW9yaXR5KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ29wdGlvbicpKFsnb3B0aW9uLWZpbHRlckJ5UHJpb3JpdHknXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnbWVkaXVtJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWyd2YWx1ZScsICdtZWRpdW0nXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2VsZWN0RmlsdGVyQnlQcmlvcml0eSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdvcHRpb24nKShbJ29wdGlvbi1maWx0ZXJCeVByaW9yaXR5J10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ2xvdycpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1sndmFsdWUnLCAnbG93J11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNlbGVjdEZpbHRlckJ5UHJpb3JpdHkpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnb3B0aW9uJykoWydvcHRpb24tZmlsdGVyQnlQcmlvcml0eSddKSk7XG4gICAgY29uc3Qgc2VsZWN0U29ydEJ5UHJpb3JpdHkgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnc2VsZWN0JykoWydzZWxlY3Qtc29ydEJ5UHJpb3JpdHknXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVTb3J0QnlQcmlvcml0eUNsaWNrXzEuaGFuZGxlU29ydEJ5UHJpb3JpdHlDbGljayksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsnaWQnLCAnc2VsZWN0LXNvcnRCeVByaW9yaXR5J10sXG4gICAgICAgIFsnbmFtZScsICdzZWxlY3Qtc29ydEJ5UHJpb3JpdHknXSxcbiAgICAgICAgWyd0aXRsZScsICdzZWxlY3Qtc29ydEJ5UHJpb3JpdHknXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvcCkpKHNlbGVjdFNvcnRCeVByaW9yaXR5KTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJy0tU29ydCBieSBwcmlvcml0eS0tJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWyd2YWx1ZScsICcgJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNlbGVjdFNvcnRCeVByaW9yaXR5KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ29wdGlvbicpKFsnb3B0aW9uLXNvcnRCeVByaW9yaXR5J10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ2xvdyB0byBpbW1lZGlhdGUnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ3ZhbHVlJywgJ2xvd1RvSW1tZWRpYXRlJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNlbGVjdFNvcnRCeVByaW9yaXR5KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ29wdGlvbicpKFsnb3B0aW9uLXNvcnRCeVByaW9yaXR5J10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ2ltbWVkaWF0ZSB0byBsb3cnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ3ZhbHVlJywgJ2ltbWVkaWF0ZVRvTG93J11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNlbGVjdFNvcnRCeVByaW9yaXR5KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ29wdGlvbicpKFsnb3B0aW9uLXNvcnRCeVByaW9yaXR5J10pKTtcbiAgICBjb25zdCBjb250ZW50Qm90dG9tID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnY29udGVudC1ib3R0b20nXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGNvbnRlbnQpKGNvbnRlbnRCb3R0b20pO1xufTtcbmV4cG9ydHMuY29udGVudCA9IGNvbnRlbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucGlwZSA9IGV4cG9ydHMuYWRkU3R5bGVUb0VsZW0gPSBleHBvcnRzLmFkZEV2dExpc3RlbmVyID0gZXhwb3J0cy5jcmVhdGVJbWFnZSA9IGV4cG9ydHMuYWRkQXR0cmlidXRlVG9FbGVtID0gZXhwb3J0cy5hZGRUZXh0VG9FbGVtID0gZXhwb3J0cy5hcHBlbmRFbGVtVG9QYXJlbnQgPSBleHBvcnRzLmVsZW1DcmVhdG9yID0gdm9pZCAwO1xuY29uc3QgZWxlbUNyZWF0b3IgPSAoZWxlbV8pID0+IChjbGFzc18pID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtXyk7XG4gICAgcmV0dXJuIGNsYXNzXy5yZWR1Y2UoKGVsZW0sIGN1cnJDbGFzcykgPT4ge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY3VyckNsYXNzKTtcbiAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgfSwgZWxlbWVudCk7XG59O1xuZXhwb3J0cy5lbGVtQ3JlYXRvciA9IGVsZW1DcmVhdG9yO1xuY29uc3QgYWRkQXR0cmlidXRlVG9FbGVtID0gKGF0dHJWYWxzXykgPT4gKGVsZW1fKSA9PiB7XG4gICAgcmV0dXJuIGF0dHJWYWxzXy5yZWR1Y2UoKGVsZW1lbnQsIGN1cnIpID0+IHtcbiAgICAgICAgaWYgKGN1cnIubGVuZ3RoID4gMilcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWxlbWVudC5zZXRBdHRyaWJ1dGUoY3VyclswXSwgY3VyclsxXSk7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0sIGVsZW1fKTtcbn07XG5leHBvcnRzLmFkZEF0dHJpYnV0ZVRvRWxlbSA9IGFkZEF0dHJpYnV0ZVRvRWxlbTtcbmNvbnN0IGFkZFN0eWxlVG9FbGVtID0gKHN0eWxlUHJvcFZhbHNfKSA9PiAoZWxlbV8pID0+IHtcbiAgICByZXR1cm4gc3R5bGVQcm9wVmFsc18ucmVkdWNlKChlbGVtZW50LCBjdXJyKSA9PiB7XG4gICAgICAgIGlmIChjdXJyLmxlbmd0aCA+IDIpXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoY3VyclswXSwgY3VyclsxXSk7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0sIGVsZW1fKTtcbn07XG5leHBvcnRzLmFkZFN0eWxlVG9FbGVtID0gYWRkU3R5bGVUb0VsZW07XG5jb25zdCBhZGRUZXh0VG9FbGVtID0gKHRleHRfKSA9PiAoZWxlbV8pID0+IHtcbiAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHRfKTtcbiAgICBlbGVtXyA9PT0gbnVsbCB8fCBlbGVtXyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWxlbV8uYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuICAgIHJldHVybiBlbGVtXztcbn07XG5leHBvcnRzLmFkZFRleHRUb0VsZW0gPSBhZGRUZXh0VG9FbGVtO1xuY29uc3QgYXBwZW5kRWxlbVRvUGFyZW50ID0gKHBhcmVudF8pID0+IChjaGlsZF8pID0+IHtcbiAgICBpZiAoY2hpbGRfKVxuICAgICAgICBwYXJlbnRfID09PSBudWxsIHx8IHBhcmVudF8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmVudF8uYXBwZW5kQ2hpbGQoY2hpbGRfKTtcbn07XG5leHBvcnRzLmFwcGVuZEVsZW1Ub1BhcmVudCA9IGFwcGVuZEVsZW1Ub1BhcmVudDtcbmNvbnN0IGNyZWF0ZUltYWdlID0gKHNvdXJjZV8pID0+IChjbGFzc18pID0+IChhbHRfKSA9PiAodGl0bGVfKSA9PiB7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBzb3VyY2VfO1xuICAgIGltYWdlLmFsdCA9IGFsdF87XG4gICAgaW1hZ2UudGl0bGUgPSB0aXRsZV87XG4gICAgcmV0dXJuIGNsYXNzXy5yZWR1Y2UoKGVsZW0sIGN1cnJDbGFzcykgPT4ge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoY3VyckNsYXNzKTtcbiAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgfSwgaW1hZ2UpO1xufTtcbmV4cG9ydHMuY3JlYXRlSW1hZ2UgPSBjcmVhdGVJbWFnZTtcbmNvbnN0IGFkZEV2dExpc3RlbmVyID0gKGV2dF8pID0+IChoYW5kbGVFdnRfKSA9PiAoZWxlbV8pID0+IHtcbiAgICBlbGVtXyA9PT0gbnVsbCB8fCBlbGVtXyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWxlbV8uYWRkRXZlbnRMaXN0ZW5lcihldnRfLCBoYW5kbGVFdnRfKTtcbiAgICByZXR1cm4gZWxlbV87XG59O1xuZXhwb3J0cy5hZGRFdnRMaXN0ZW5lciA9IGFkZEV2dExpc3RlbmVyO1xuY29uc3QgcGlwZSA9ICguLi5mdW5jcykgPT4gKHZhbHVlKSA9PiBmdW5jcy5yZWR1Y2UoKHJlcywgZnVuYykgPT4gZnVuYyhyZXMpLCB2YWx1ZSk7XG5leHBvcnRzLnBpcGUgPSBwaXBlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZUFkZE5ld1Byb2plY3RJY29uQ2xpY2sgPSB2b2lkIDA7XG5jb25zdCBwcm9qZWN0TW9kYWxfMSA9IHJlcXVpcmUoXCIuLi9tb2RhbHMvcHJvamVjdE1vZGFsXCIpO1xuY29uc3QgaGFuZGxlQWRkTmV3UHJvamVjdEljb25DbGljayA9IGZ1bmN0aW9uIChldikge1xuICAgICgwLCBwcm9qZWN0TW9kYWxfMS5wcm9qZWN0TW9kYWwpKCk7XG4gICAgY29uc3QgYWRkUHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3QtY29udGFpbmVyJyk7XG4gICAgaWYgKGFkZFByb2plY3RNb2RhbCkge1xuICAgICAgICBhZGRQcm9qZWN0TW9kYWwuc3R5bGUudmlzaWJpbGl0eSA9XG4gICAgICAgICAgICAoYWRkUHJvamVjdE1vZGFsID09PSBudWxsIHx8IGFkZFByb2plY3RNb2RhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWRkUHJvamVjdE1vZGFsLnN0eWxlLnZpc2liaWxpdHkpID09PSAndmlzaWJsZScgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJztcbiAgICAgICAgYWRkUHJvamVjdE1vZGFsLnN0eWxlLmJveFNoYWRvdyA9XG4gICAgICAgICAgICAnMXB4IDFweCAxLjZweCAxLjZweCAjNjM1MjZmNjEsIDEuNnB4IDEuNnB4IDIuNnB4IDIuNnB4ICM2MzUyNmY2MSc7XG4gICAgfVxufTtcbmV4cG9ydHMuaGFuZGxlQWRkTmV3UHJvamVjdEljb25DbGljayA9IGhhbmRsZUFkZE5ld1Byb2plY3RJY29uQ2xpY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlQWRkTmV3VG9kb0ljb25DbGljayA9IHZvaWQgMDtcbmNvbnN0IHRvZG9Nb2RhbF8xID0gcmVxdWlyZShcIi4uL21vZGFscy90b2RvTW9kYWxcIik7XG5jb25zdCBoYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSwgX2I7XG4gICAgY29uc3QgcHJvamVjdERhdGFOYW1lID0gKF9hID0gdGhpcy5kYXRhc2V0Lm5hbWUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnO1xuICAgIGNvbnN0IHByb2plY3REYXRhQ29sb3VyID0gKF9iID0gdGhpcy5kYXRhc2V0LmNvbG91cikgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJyc7XG4gICAgKDAsIHRvZG9Nb2RhbF8xLnRvZG9Nb2RhbCkocHJvamVjdERhdGFOYW1lLCBwcm9qZWN0RGF0YUNvbG91cik7XG4gICAgY29uc3QgYWRkVG9kb01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJyk7XG4gICAgaWYgKGFkZFRvZG9Nb2RhbCkge1xuICAgICAgICBhZGRUb2RvTW9kYWwuc3R5bGUudmlzaWJpbGl0eSA9XG4gICAgICAgICAgICAoYWRkVG9kb01vZGFsID09PSBudWxsIHx8IGFkZFRvZG9Nb2RhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWRkVG9kb01vZGFsLnN0eWxlLnZpc2liaWxpdHkpID09PSAndmlzaWJsZScgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJztcbiAgICAgICAgYWRkVG9kb01vZGFsLnN0eWxlLmJveFNoYWRvdyA9XG4gICAgICAgICAgICAnMXB4IDFweCAxLjZweCAxLjZweCAjNjM1MjZmNjEsIDEuNnB4IDEuNnB4IDIuNnB4IDIuNnB4ICM2MzUyNmY2MSc7XG4gICAgfVxufTtcbmV4cG9ydHMuaGFuZGxlQWRkTmV3VG9kb0ljb25DbGljayA9IGhhbmRsZUFkZE5ld1RvZG9JY29uQ2xpY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlQXJjaGl2ZWRUYWJDbGljayA9IHZvaWQgMDtcbmNvbnN0IGFkZFRvZG9zVG9Db250ZW50XzEgPSByZXF1aXJlKFwiLi4vcHJvamVjdHNBbmRUb2Rvcy9hZGRUb2Rvc1RvQ29udGVudFwiKTtcbmNvbnN0IGVsZW1lbnRfY3JlYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50LWNyZWF0b3JzXCIpO1xuY29uc3QgaGFuZGxlQXJjaGl2ZWRUYWJDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2E7XG4gICAgLy9yZW1vdmUgY29udGVudCBzZWN0aW9uJ3MgcHJldmlvdXMgY29udGVudHNcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBjb250ZW50Qm90dG9tUHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWJvdHRvbScpO1xuICAgIGNvbnRlbnRCb3R0b21QcmV2ID09PSBudWxsIHx8IGNvbnRlbnRCb3R0b21QcmV2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250ZW50Qm90dG9tUHJldi5yZW1vdmUoKTtcbiAgICAvL3JlbmRlciBuZXcgY29udGVudFxuICAgIGNvbnN0IGNvbnRlbnRCb3R0b20gPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydjb250ZW50LWJvdHRvbSddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoY29udGVudCkoY29udGVudEJvdHRvbSk7XG4gICAgY29uc3QgYXJjaGl2ZWRTdG9yYWdlQXJyID0gSlNPTi5wYXJzZSgoX2EgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJjaGl2ZWQnKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycpO1xuICAgIC8vcmVuZGVyIHRvZG9zIHdpdGggY2hlY2tib3ggZGlzYWJsZWRcbiAgICBhcmNoaXZlZFN0b3JhZ2VBcnIuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAoMCwgYWRkVG9kb3NUb0NvbnRlbnRfMS5hZGRUb2Rvc1RvQ29udGVudCkocHJvamVjdCwgdHJ1ZSk7XG4gICAgfSk7XG59O1xuZXhwb3J0cy5oYW5kbGVBcmNoaXZlZFRhYkNsaWNrID0gaGFuZGxlQXJjaGl2ZWRUYWJDbGljaztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVDcmVhdGVkVGFic0NsaWNrID0gdm9pZCAwO1xuY29uc3QgYWRkVG9kb3NUb0NvbnRlbnRfMSA9IHJlcXVpcmUoXCIuLi9wcm9qZWN0c0FuZFRvZG9zL2FkZFRvZG9zVG9Db250ZW50XCIpO1xuY29uc3QgZWxlbWVudF9jcmVhdG9yc18xID0gcmVxdWlyZShcIi4uL2VsZW1lbnQtY3JlYXRvcnNcIik7XG5jb25zdCBoYW5kbGVDcmVhdGVkVGFic0NsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIC8vcmVtb3ZlIGNvbnRlbnQgc2VjdGlvbidzIHByZXZpb3VzIGNvbnRlbnRzXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3QgY29udGVudEJvdHRvbVByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1ib3R0b20nKTtcbiAgICBjb250ZW50Qm90dG9tUHJldiA9PT0gbnVsbCB8fCBjb250ZW50Qm90dG9tUHJldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGVudEJvdHRvbVByZXYucmVtb3ZlKCk7XG4gICAgY29uc3QgY29udGVudEJvdHRvbSA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2NvbnRlbnQtYm90dG9tJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShjb250ZW50KShjb250ZW50Qm90dG9tKTtcbiAgICBjb25zdCB0aGlzUHJvamVjdE5hbWUgPSB0aGlzLnRleHRDb250ZW50O1xuICAgIGNvbnN0IHByb2plY3RBbmRUb2Rvc09iakFyciA9IFtdO1xuICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKGtleSA9PT0gdGhpc1Byb2plY3ROYW1lKSB7XG4gICAgICAgICAgICBwcm9qZWN0QW5kVG9kb3NPYmpBcnIucHVzaChKU09OLnBhcnNlKChfYSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXNQcm9qZWN0TmFtZSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvL3JlbmRlciB0b2Rvc1xuICAgIHByb2plY3RBbmRUb2Rvc09iakFyci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICgwLCBhZGRUb2Rvc1RvQ29udGVudF8xLmFkZFRvZG9zVG9Db250ZW50KShwcm9qZWN0KTtcbiAgICB9KTtcbn07XG5leHBvcnRzLmhhbmRsZUNyZWF0ZWRUYWJzQ2xpY2sgPSBoYW5kbGVDcmVhdGVkVGFic0NsaWNrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZUZpbHRlckJ5UHJpb3JpdHlDbGljayA9IHZvaWQgMDtcbmNvbnN0IGVsZW1lbnRfY3JlYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50LWNyZWF0b3JzXCIpO1xuY29uc3QgYWRkVG9kb3NUb0NvbnRlbnRfMSA9IHJlcXVpcmUoXCIuLi9wcm9qZWN0c0FuZFRvZG9zL2FkZFRvZG9zVG9Db250ZW50XCIpO1xuY29uc3QgaGFuZGxlRmlsdGVyQnlQcmlvcml0eUNsaWNrID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgLy9yZW1vdmUgY29udGVudCBzZWN0aW9uJ3MgcHJldmlvdXMgY29udGVudHNcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBjb250ZW50Qm90dG9tUHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWJvdHRvbScpO1xuICAgIGNvbnRlbnRCb3R0b21QcmV2ID09PSBudWxsIHx8IGNvbnRlbnRCb3R0b21QcmV2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250ZW50Qm90dG9tUHJldi5yZW1vdmUoKTtcbiAgICAvL3JlbmRlciBuZXcgY29udGVudFxuICAgIGNvbnN0IGNvbnRlbnRCb3R0b20gPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydjb250ZW50LWJvdHRvbSddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoY29udGVudCkoY29udGVudEJvdHRvbSk7XG4gICAgY29uc3Qgc2VsZWN0ZWRQcmlvcml0eSA9IHRoaXMudmFsdWU7XG4gICAgY29uc3QgcHJvamVjdEFyciA9IFtdO1xuICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKGtleSAhPT0gJ3Byb2plY3ROYW1lcycgJiYga2V5ICE9PSAnYXJjaGl2ZWQnKSB7XG4gICAgICAgICAgICBwcm9qZWN0QXJyLnB1c2goSlNPTi5wYXJzZSgoX2EgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgZmlsdGVyZWRQcmlvcml0eUFyciA9IFtdO1xuICAgIHByb2plY3RBcnIuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgICAgIGlmICh0b2RvLnRvZG9Qcmlvcml0eSA9PT0gc2VsZWN0ZWRQcmlvcml0eSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXAgPSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3ROYW1lOiBwcm9qZWN0LnByb2plY3QucHJvamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q29sb3VyOiBwcm9qZWN0LnByb2plY3QucHJvamVjdENvbG91cixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9kb3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvTmFtZTogdG9kby50b2RvTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb246IHRvZG8udG9kb0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EdWVEYXRlOiB0b2RvLnRvZG9EdWVEYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eTogdG9kby50b2RvUHJpb3JpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZmlsdGVyZWRQcmlvcml0eUFyci5wdXNoKHRlbXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICAvL2lmIHNlbGVjdCBpbnB1dCBkZWZhdWx0IHRleHQgaXMgY2xpY2tlZCwgYWxsICdsaXZlJyBwcm9qZWN0cyBkaXNwbGF5ZWRcbiAgICBpZiAoc2VsZWN0ZWRQcmlvcml0eSA9PT0gJyAnKSB7XG4gICAgICAgIC8vcmVtb3ZlIGNvbnRlbnQgc2VjdGlvbidzIHByZXZpb3VzIGNvbnRlbnRzXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgICAgICBjb25zdCBjb250ZW50Qm90dG9tUHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWJvdHRvbScpO1xuICAgICAgICBjb250ZW50Qm90dG9tUHJldiA9PT0gbnVsbCB8fCBjb250ZW50Qm90dG9tUHJldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGVudEJvdHRvbVByZXYucmVtb3ZlKCk7XG4gICAgICAgIC8vcmVuZGVyIG5ldyBjb250ZW50XG4gICAgICAgIGNvbnN0IGNvbnRlbnRCb3R0b20gPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydjb250ZW50LWJvdHRvbSddKTtcbiAgICAgICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGNvbnRlbnQpKGNvbnRlbnRCb3R0b20pO1xuICAgICAgICBwcm9qZWN0QXJyLmZvckVhY2goKHByb2plY3QpID0+ICgwLCBhZGRUb2Rvc1RvQ29udGVudF8xLmFkZFRvZG9zVG9Db250ZW50KShwcm9qZWN0KSk7XG4gICAgfVxuICAgIC8vcmVuZGVyIHRvZG9zXG4gICAgZmlsdGVyZWRQcmlvcml0eUFyci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICgwLCBhZGRUb2Rvc1RvQ29udGVudF8xLmFkZFRvZG9zVG9Db250ZW50KShwcm9qZWN0KTtcbiAgICB9KTtcbn07XG5leHBvcnRzLmhhbmRsZUZpbHRlckJ5UHJpb3JpdHlDbGljayA9IGhhbmRsZUZpbHRlckJ5UHJpb3JpdHlDbGljaztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVJbnZhbGlkUHJvak5hbWUgPSB2b2lkIDA7XG5jb25zdCBoYW5kbGVJbnZhbGlkUHJvak5hbWUgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICBpZiAodGhpcy52YWx1ZSA9PT0gJycpXG4gICAgICAgIHRoaXMuc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBlbnRlciBhIHByb2plY3QgbmFtZSEnKTtcbiAgICBlbHNlXG4gICAgICAgIHRoaXMuc2V0Q3VzdG9tVmFsaWRpdHkoJ1Byb2plY3QgbmFtZXMgY2FuIG9ubHkgY29udGFpbiB1cHBlciBhbmQgbG93ZXJjYXNlIGxldHRlcnMuIFBsZWFzZSB0cnkgYWdhaW4hJyk7XG59O1xuZXhwb3J0cy5oYW5kbGVJbnZhbGlkUHJvak5hbWUgPSBoYW5kbGVJbnZhbGlkUHJvak5hbWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlSW52YWxpZFRvZG9OYW1lID0gdm9pZCAwO1xuY29uc3QgaGFuZGxlSW52YWxpZFRvZG9OYW1lID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgaWYgKHRoaXMudmFsdWUgPT09ICcnKVxuICAgICAgICB0aGlzLnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UgZW50ZXIgYSB0b2RvIG5hbWUnKTtcbiAgICBlbHNlXG4gICAgICAgIHRoaXMuc2V0Q3VzdG9tVmFsaWRpdHkoJ1RvZG8gbmFtZXMgY2FuIG9ubHkgY29udGFpbiBsZXR0ZXJzIGFuZCBudW1iZXJzLiBQbGVhc2UgdHJ5IGFnYWluIScpO1xufTtcbmV4cG9ydHMuaGFuZGxlSW52YWxpZFRvZG9OYW1lID0gaGFuZGxlSW52YWxpZFRvZG9OYW1lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZVByb2pOYW1lVmFsaWRhdGlvbiA9IHZvaWQgMDtcbmNvbnN0IGhhbmRsZVByb2pOYW1lVmFsaWRhdGlvbiA9IGZ1bmN0aW9uIChldikge1xuICAgIC8vdG8gYXZvaWQgaW5wdXQgcmVnaXN0ZXJpbmcgYXMgaW52YWxpZCwgaWYgYSBjdXN0b20gdmFsaWRpdHkgd2FzIHByZXZpb3VzbHkgc2V0LCB3aGVuIGlucHV0IGNvbnRhaW5zIHZhbGlkIHZhbHVlIHVwb24gc3VibWlzc2lvblxuICAgIHRoaXMuc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuICAgIHRoaXMuY2hlY2tWYWxpZGl0eSgpO1xufTtcbmV4cG9ydHMuaGFuZGxlUHJvak5hbWVWYWxpZGF0aW9uID0gaGFuZGxlUHJvak5hbWVWYWxpZGF0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZVByb2plY3RDbG9zZUljb25DbGljayA9IHZvaWQgMDtcbmNvbnN0IGhhbmRsZVByb2plY3RDbG9zZUljb25DbGljayA9IGZ1bmN0aW9uIChldikge1xuICAgIGNvbnN0IGFkZFByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgIGlmIChhZGRQcm9qZWN0TW9kYWwpXG4gICAgICAgIGFkZFByb2plY3RNb2RhbC5yZW1vdmUoKTtcbn07XG5leHBvcnRzLmhhbmRsZVByb2plY3RDbG9zZUljb25DbGljayA9IGhhbmRsZVByb2plY3RDbG9zZUljb25DbGljaztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVQcm9qZWN0Rm9ybVN1Ym1pdCA9IHZvaWQgMDtcbmNvbnN0IGFkZFByb2plY3RUb1NpZGViYXJfMSA9IHJlcXVpcmUoXCIuLi9wcm9qZWN0c0FuZFRvZG9zL2FkZFByb2plY3RUb1NpZGViYXJcIik7XG5jb25zdCBoYW5kbGVQcm9qZWN0Rm9ybVN1Ym1pdCA9IGZ1bmN0aW9uIChldikge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGFkZFByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHByb2plY3RGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybU5hbWUgPSAoX2IgPSAoX2EgPSBwcm9qZWN0Rm9ybURhdGEuZ2V0KCdhZGRQcm9qZWN0LW5hbWUnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICcnO1xuICAgIGNvbnN0IHByb2plY3RGb3JtQ29sb3VyID0gKF9kID0gKF9jID0gcHJvamVjdEZvcm1EYXRhLmdldCgnYWRkUHJvamVjdC1jb2xvdXInKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnRvU3RyaW5nKCkpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6ICcnO1xuICAgIC8vaWYgJ3Byb2plY3ROYW1lcycgZG9lc24ndCBleGlzdCwgY3JlYXRlIGl0LCBvdGhlcndpc2UgZG8gbm90aGluZ1xuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3ROYW1lcycpKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0TmFtZXMnLCBKU09OLnN0cmluZ2lmeShbXSkpO1xuICAgIH1cbiAgICBjb25zdCBzdG9yZVByb2plY3QgPSAoZnVuY3Rpb24gKHByb2plY3RGb3JtTmFtZV8pIHtcbiAgICAgICAgLy9pZiBrZXkgaW4gbG9jYWxzdG9yYWdlIGlzIHByb2plY3ROYW1lcywgdGhlbiBnZXQgdGhlIHZhbHVlcyBhc1xuICAgICAgICAvL2FuIGFycmF5XG4gICAgICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAncHJvamVjdE5hbWVzJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXNTZXQgPSBuZXcgU2V0KEpTT04ucGFyc2UoKF9hID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycpKTtcbiAgICAgICAgICAgICAgICBbJ1NhbXBsZSBQcm9qZWN0JywgJ2FyY2hpdmVkJywgJ3Byb2plY3RzJ10uZm9yRWFjaCgobmFtZSkgPT4ga2V5c1NldC5hZGQobmFtZSkpO1xuICAgICAgICAgICAgICAgIC8vaWYgbmFtZSBhbHJlYWR5IHByZXNlbnRcbiAgICAgICAgICAgICAgICBpZiAoa2V5c1NldC5oYXMocHJvamVjdEZvcm1OYW1lXykpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoYCR7cHJvamVjdEZvcm1OYW1lX30gYWxyZWFkeSBleGlzdHMgYXMgYSBwcm9qZWN0ICjvvaHigKLMge+4v+KAosyA772hKSAgUGxlYXNlIGNob29zZSBhbm90aGVyIG5hbWUuYCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vaWYgbmV3IG5hbWUsIHB1c2ggdG8gYXJyIGFuZCB0aGVuIHN0b3JlIGFycmF5IGluIGxvY2FsU3RvcmFnZVxuICAgICAgICAgICAgICAgICAgICBrZXlzU2V0LmFkZChwcm9qZWN0Rm9ybU5hbWVfKTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShBcnJheS5mcm9tKGtleXNTZXQpKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vcmVuZGVyIHByb2plY3RzIHdpdGggbmFtZSxjb2xvdXIgJiBpY29uIHVuZGVyIHNpZGViYXJcbiAgICAgICAgICAgICAgICAgICAgKDAsIGFkZFByb2plY3RUb1NpZGViYXJfMS5hZGRQcm9qZWN0VG9TaWRlYmFyKShwcm9qZWN0Rm9ybU5hbWUsIHByb2plY3RGb3JtQ29sb3VyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pKHByb2plY3RGb3JtTmFtZSk7XG4gICAgYWRkUHJvamVjdE1vZGFsID09PSBudWxsIHx8IGFkZFByb2plY3RNb2RhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWRkUHJvamVjdE1vZGFsLnJlbW92ZSgpO1xufTtcbmV4cG9ydHMuaGFuZGxlUHJvamVjdEZvcm1TdWJtaXQgPSBoYW5kbGVQcm9qZWN0Rm9ybVN1Ym1pdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVQcm9qZWN0c1RhYkNsaWNrID0gdm9pZCAwO1xuY29uc3QgYWRkVG9kb3NUb0NvbnRlbnRfMSA9IHJlcXVpcmUoXCIuLi9wcm9qZWN0c0FuZFRvZG9zL2FkZFRvZG9zVG9Db250ZW50XCIpO1xuY29uc3QgZWxlbWVudF9jcmVhdG9yc18xID0gcmVxdWlyZShcIi4uL2VsZW1lbnQtY3JlYXRvcnNcIik7XG5jb25zdCBoYW5kbGVQcm9qZWN0c1RhYkNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIC8vcmVtb3ZlIGNvbnRlbnQgc2VjdGlvbidzIHByZXZpb3VzIGNvbnRlbnRzXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3QgY29udGVudEJvdHRvbVByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1ib3R0b20nKTtcbiAgICBjb250ZW50Qm90dG9tUHJldiA9PT0gbnVsbCB8fCBjb250ZW50Qm90dG9tUHJldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGVudEJvdHRvbVByZXYucmVtb3ZlKCk7XG4gICAgLy9yZW5kZXIgbmV3IGNvbnRlbnRcbiAgICBjb25zdCBjb250ZW50Qm90dG9tID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnY29udGVudC1ib3R0b20nXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGNvbnRlbnQpKGNvbnRlbnRCb3R0b20pO1xuICAgIGNvbnN0IHByb2plY3RzQW5kVG9kb3NBcnIgPSBbXTtcbiAgICAvL2dyYWIgYWxsIHRoZSBwcm9qZWN0cyBleGNlcHQgc3BlY2lmaWVkXG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoa2V5ICE9PSAncHJvamVjdE5hbWVzJyAmJiBrZXkgIT09ICdhcmNoaXZlZCcpIHtcbiAgICAgICAgICAgIHByb2plY3RzQW5kVG9kb3NBcnIucHVzaChKU09OLnBhcnNlKChfYSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvL3JlbmRlciB0b2Rvc1xuICAgIHByb2plY3RzQW5kVG9kb3NBcnIuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAoMCwgYWRkVG9kb3NUb0NvbnRlbnRfMS5hZGRUb2Rvc1RvQ29udGVudCkocHJvamVjdCk7XG4gICAgfSk7XG59O1xuZXhwb3J0cy5oYW5kbGVQcm9qZWN0c1RhYkNsaWNrID0gaGFuZGxlUHJvamVjdHNUYWJDbGljaztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVTZWFyY2hGb3JtU3VibWl0ID0gdm9pZCAwO1xuY29uc3QgYWRkVG9kb3NUb0NvbnRlbnRfMSA9IHJlcXVpcmUoXCIuLi9wcm9qZWN0c0FuZFRvZG9zL2FkZFRvZG9zVG9Db250ZW50XCIpO1xuY29uc3QgZWxlbWVudF9jcmVhdG9yc18xID0gcmVxdWlyZShcIi4uL2VsZW1lbnQtY3JlYXRvcnNcIik7XG5jb25zdCBoYW5kbGVTZWFyY2hGb3JtU3VibWl0ID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vcmVtb3ZlIGNvbnRlbnQgc2VjdGlvbidzIHByZXZpb3VzIGNvbnRlbnRzXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3QgY29udGVudEJvdHRvbVByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1ib3R0b20nKTtcbiAgICBjb250ZW50Qm90dG9tUHJldiA9PT0gbnVsbCB8fCBjb250ZW50Qm90dG9tUHJldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGVudEJvdHRvbVByZXYucmVtb3ZlKCk7XG4gICAgLy9yZW5kZXIgbmV3IGNvbnRlbnQgYW5kIGFwcGVuZCB0byB0aGlzXG4gICAgY29uc3QgY29udGVudEJvdHRvbSA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2NvbnRlbnQtYm90dG9tJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShjb250ZW50KShjb250ZW50Qm90dG9tKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcbiAgICBjb25zdCBzZWFyY2hUZXJtID0gKF9iID0gKF9hID0gZm9ybURhdGEuZ2V0KCdzZWFyY2gtdG9kbycpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnJztcbiAgICBjb25zdCBwcm9qZWN0QXJyID0gW107XG4gICAgLy9ncmFiIGFsbCB0aGUgcHJvamVjdHMgZXhjZXB0IHNwZWNpZmllZFxuICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKGtleSAhPT0gJ3Byb2plY3ROYW1lcycgJiYga2V5ICE9PSAnYXJjaGl2ZWQnKSB7XG4gICAgICAgICAgICBwcm9qZWN0QXJyLnB1c2goSlNPTi5wYXJzZSgoX2EgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3Qgc2VhcmNoUmVnRXggPSBuZXcgUmVnRXhwKGAke3NlYXJjaFRlcm19YCk7XG4gICAgY29uc3QgbWF0Y2hlZFByb2pBbmRUb2Rvc0FyciA9IFtdO1xuICAgIHByb2plY3RBcnIuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgICAgIC8vIGlmIGl0IG1hdGNoZXMgdG9kb05hbWVcbiAgICAgICAgICAgIGlmIChzZWFyY2hSZWdFeC50ZXN0KHRvZG8udG9kb05hbWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0ge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZTogcHJvamVjdC5wcm9qZWN0LnByb2plY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbG91cjogcHJvamVjdC5wcm9qZWN0LnByb2plY3RDb2xvdXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb05hbWU6IHRvZG8udG9kb05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uOiB0b2RvLnRvZG9EZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRHVlRGF0ZTogdG9kby50b2RvRHVlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHk6IHRvZG8udG9kb1ByaW9yaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG1hdGNoZWRQcm9qQW5kVG9kb3NBcnIucHVzaCh0ZW1wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGVsc2UgaXQgbWF0Y2hlcyBkZXNjcmlwdGlvbiB0ZXh0XG4gICAgICAgICAgICBlbHNlIGlmIChzZWFyY2hSZWdFeC50ZXN0KHRvZG8udG9kb0Rlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcCA9IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE5hbWU6IHByb2plY3QucHJvamVjdC5wcm9qZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDb2xvdXI6IHByb2plY3QucHJvamVjdC5wcm9qZWN0Q29sb3VyLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b2RvczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9OYW1lOiB0b2RvLnRvZG9OYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbjogdG9kby50b2RvRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0R1ZURhdGU6IHRvZG8udG9kb0R1ZURhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5OiB0b2RvLnRvZG9Qcmlvcml0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBtYXRjaGVkUHJvakFuZFRvZG9zQXJyLnB1c2godGVtcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2Vsc2UgaXQgbWF0Y2hlcyBkdWVEYXRlXG4gICAgICAgICAgICBlbHNlIGlmIChzZWFyY2hSZWdFeC50ZXN0KHRvZG8udG9kb0R1ZURhdGUudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0ge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZTogcHJvamVjdC5wcm9qZWN0LnByb2plY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbG91cjogcHJvamVjdC5wcm9qZWN0LnByb2plY3RDb2xvdXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb05hbWU6IHRvZG8udG9kb05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uOiB0b2RvLnRvZG9EZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRHVlRGF0ZTogdG9kby50b2RvRHVlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHk6IHRvZG8udG9kb1ByaW9yaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG1hdGNoZWRQcm9qQW5kVG9kb3NBcnIucHVzaCh0ZW1wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vZWxzZSBpdCBtYXRjaGVzIHByaW9yaXR5XG4gICAgICAgICAgICBlbHNlIGlmIChzZWFyY2hSZWdFeC50ZXN0KHRvZG8udG9kb1ByaW9yaXR5LnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcCA9IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE5hbWU6IHByb2plY3QucHJvamVjdC5wcm9qZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDb2xvdXI6IHByb2plY3QucHJvamVjdC5wcm9qZWN0Q29sb3VyLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b2RvczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9OYW1lOiB0b2RvLnRvZG9OYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbjogdG9kby50b2RvRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0R1ZURhdGU6IHRvZG8udG9kb0R1ZURhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5OiB0b2RvLnRvZG9Qcmlvcml0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBtYXRjaGVkUHJvakFuZFRvZG9zQXJyLnB1c2godGVtcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vcmVuZGVyIHRvZG9zXG4gICAgbWF0Y2hlZFByb2pBbmRUb2Rvc0Fyci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICgwLCBhZGRUb2Rvc1RvQ29udGVudF8xLmFkZFRvZG9zVG9Db250ZW50KShwcm9qZWN0KTtcbiAgICB9KTtcbn07XG5leHBvcnRzLmhhbmRsZVNlYXJjaEZvcm1TdWJtaXQgPSBoYW5kbGVTZWFyY2hGb3JtU3VibWl0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZVNvcnRCeVByaW9yaXR5Q2xpY2sgPSB2b2lkIDA7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IGFkZFRvZG9zVG9Db250ZW50XzEgPSByZXF1aXJlKFwiLi4vcHJvamVjdHNBbmRUb2Rvcy9hZGRUb2Rvc1RvQ29udGVudFwiKTtcbmNvbnN0IGhhbmRsZVNvcnRCeVByaW9yaXR5Q2xpY2sgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAvL3JlbW92ZSBjb250ZW50IHNlY3Rpb24ncyBwcmV2aW91cyBjb250ZW50c1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IGNvbnRlbnRCb3R0b21QcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYm90dG9tJyk7XG4gICAgY29udGVudEJvdHRvbVByZXYgPT09IG51bGwgfHwgY29udGVudEJvdHRvbVByZXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRlbnRCb3R0b21QcmV2LnJlbW92ZSgpO1xuICAgIC8vcmVuZGVyIG5ldyBjb250ZW50XG4gICAgY29uc3QgY29udGVudEJvdHRvbSA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2NvbnRlbnQtYm90dG9tJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShjb250ZW50KShjb250ZW50Qm90dG9tKTtcbiAgICBjb25zdCBzZWxlY3RlZFNvcnRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgY29uc3QgcHJvamVjdEFyciA9IFtdO1xuICAgIC8vZ3JhYiBhbGwgcHJvamVjdHMgZXhjZXB0IHNwZWNpZmllZFxuICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKGtleSAhPT0gJ3Byb2plY3ROYW1lcycgJiYga2V5ICE9PSAnYXJjaGl2ZWQnKSB7XG4gICAgICAgICAgICBwcm9qZWN0QXJyLnB1c2goSlNPTi5wYXJzZSgoX2EgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdEFycik7XG4gICAgLy9hc3NpZ25zIGEga2V5IHRvIGVhY2ggcHJvamVjdCBiYXNlZCBvbiBpdHMgdG9kb1xuICAgIGNvbnN0IHByb2plY3RNYXAgPSBwcm9qZWN0QXJyLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG4gICAgICAgIGN1cnIudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICAgICAgaWYgKHRvZG8udG9kb1ByaW9yaXR5ID09PSAnaW1tZWRpYXRlJykge1xuICAgICAgICAgICAgICAgIGFjYy5zZXQoNSwge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZTogY3Vyci5wcm9qZWN0LnByb2plY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbG91cjogY3Vyci5wcm9qZWN0LnByb2plY3RDb2xvdXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zOiBbdG9kb10sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2RvLnRvZG9Qcmlvcml0eSA9PT0gJ3VyZ2VudCcpIHtcbiAgICAgICAgICAgICAgICBhY2Muc2V0KDQsIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE5hbWU6IGN1cnIucHJvamVjdC5wcm9qZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDb2xvdXI6IGN1cnIucHJvamVjdC5wcm9qZWN0Q29sb3VyLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b2RvczogW3RvZG9dLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9kby50b2RvUHJpb3JpdHkgPT09ICdoaWdoJykge1xuICAgICAgICAgICAgICAgIGFjYy5zZXQoMywge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZTogY3Vyci5wcm9qZWN0LnByb2plY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdENvbG91cjogY3Vyci5wcm9qZWN0LnByb2plY3RDb2xvdXIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvZG9zOiBbdG9kb10sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2RvLnRvZG9Qcmlvcml0eSA9PT0gJ21lZGl1bScpIHtcbiAgICAgICAgICAgICAgICBhY2Muc2V0KDIsIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE5hbWU6IGN1cnIucHJvamVjdC5wcm9qZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDb2xvdXI6IGN1cnIucHJvamVjdC5wcm9qZWN0Q29sb3VyLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b2RvczogW3RvZG9dLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9kby50b2RvUHJpb3JpdHkgPT09ICdsb3cnKSB7XG4gICAgICAgICAgICAgICAgYWNjLnNldCgxLCB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3ROYW1lOiBjdXJyLnByb2plY3QucHJvamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q29sb3VyOiBjdXJyLnByb2plY3QucHJvamVjdENvbG91cixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9kb3M6IFt0b2RvXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgbmV3IE1hcCgpKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TWFwKTtcbiAgICAvL2luIG9yZGVyIHRvIHVzZSB0aGUgc29ydCBtZXRob2RcbiAgICBjb25zdCBwcm9qZWN0TWFwQXJyID0gQXJyYXkuZnJvbShwcm9qZWN0TWFwKTtcbiAgICBpZiAoc2VsZWN0ZWRTb3J0VmFsdWUgPT09ICdsb3dUb0ltbWVkaWF0ZScpIHtcbiAgICAgICAgcHJvamVjdE1hcEFyci5zb3J0KChhLCBiKSA9PiBhWzBdIC0gYlswXSk7XG4gICAgfVxuICAgIGlmIChzZWxlY3RlZFNvcnRWYWx1ZSA9PT0gJ2ltbWVkaWF0ZVRvTG93Jykge1xuICAgICAgICBwcm9qZWN0TWFwQXJyLnNvcnQoKGEsIGIpID0+IGJbMF0gLSBhWzBdKTtcbiAgICB9XG4gICAgLy9yZW5kZXIgdGhlIHRvZG9zXG4gICAgcHJvamVjdE1hcEFyci5mb3JFYWNoKChudW1Qcm9qZWN0KSA9PiB7XG4gICAgICAgICgwLCBhZGRUb2Rvc1RvQ29udGVudF8xLmFkZFRvZG9zVG9Db250ZW50KShudW1Qcm9qZWN0WzFdKTtcbiAgICB9KTtcbn07XG5leHBvcnRzLmhhbmRsZVNvcnRCeVByaW9yaXR5Q2xpY2sgPSBoYW5kbGVTb3J0QnlQcmlvcml0eUNsaWNrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmhhbmRsZVRvZGF5VGFiQ2xpY2sgPSB2b2lkIDA7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IGFkZFRvZG9zVG9Db250ZW50XzEgPSByZXF1aXJlKFwiLi4vcHJvamVjdHNBbmRUb2Rvcy9hZGRUb2Rvc1RvQ29udGVudFwiKTtcbmNvbnN0IGhhbmRsZVRvZGF5VGFiQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy9yZW1vdmUgY29udGVudCBzZWN0aW9uJ3MgcHJldmlvdXMgY29udGVudHNcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBjb250ZW50Qm90dG9tUHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWJvdHRvbScpO1xuICAgIGNvbnRlbnRCb3R0b21QcmV2ID09PSBudWxsIHx8IGNvbnRlbnRCb3R0b21QcmV2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250ZW50Qm90dG9tUHJldi5yZW1vdmUoKTtcbiAgICAvL3JlbmRlciBuZXcgY29udGVudCBhbmQgYXBwZW5kIHRvIHRoaXNcbiAgICBjb25zdCBjb250ZW50Qm90dG9tID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnY29udGVudC1ib3R0b20nXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGNvbnRlbnQpKGNvbnRlbnRCb3R0b20pO1xuICAgIGNvbnN0IHByb2plY3RBcnIgPSBbXTtcbiAgICAvL2dyYWIgYWxsIHRoZSBwcm9qZWN0cyBleGNlcHQgb25lcyBzcGVjaWZpZWRcbiAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmIChrZXkgIT09ICdwcm9qZWN0TmFtZXMnICYmIGtleSAhPT0gJ2FyY2hpdmVkJykge1xuICAgICAgICAgICAgcHJvamVjdEFyci5wdXNoKEpTT04ucGFyc2UoKF9hID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF0ZSA9IG5vdy5nZXREYXRlKCk7XG4gICAgY29uc3QgbW9udGggPSBub3cuZ2V0TW9udGgoKSArIDE7XG4gICAgY29uc3QgeWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IHRvZGF5ID0gYCR7eWVhcn0tJHttb250aCA8IDEwID8gJzAnICsgbW9udGggOiBtb250aH0tJHtkYXRlIDwgMTAgPyAnMCcgKyBkYXRlIDogZGF0ZX1gO1xuICAgIGNvbnN0IHByb2pBbmRUb2Rvc0ZpbHRlcmVkID0gW107XG4gICAgLy9ncmFiIGVhY2ggdG9kbyBkdWUgdG9kYXkgYW5kIHB1dCBpbnRvIGNyZWF0ZWQgdGVtcCBwcm9qZWN0IGFuZCBwdXNoIHByb2plY3QgaW50byBmaWx0ZXJlZCBhcnJheVxuICAgIHByb2plY3RBcnIuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgICAgIGlmICh0b2RvLnRvZG9EdWVEYXRlID09PSB0b2RheSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXAgPSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3ROYW1lOiBwcm9qZWN0LnByb2plY3QucHJvamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q29sb3VyOiBwcm9qZWN0LnByb2plY3QucHJvamVjdENvbG91cixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9kb3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvTmFtZTogdG9kby50b2RvTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb246IHRvZG8udG9kb0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EdWVEYXRlOiB0b2RvLnRvZG9EdWVEYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eTogdG9kby50b2RvUHJpb3JpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcHJvakFuZFRvZG9zRmlsdGVyZWQucHVzaCh0ZW1wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy9yZW5kZXIgdGhlIHRvZG9zXG4gICAgcHJvakFuZFRvZG9zRmlsdGVyZWQuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAoMCwgYWRkVG9kb3NUb0NvbnRlbnRfMS5hZGRUb2Rvc1RvQ29udGVudCkocHJvamVjdCk7XG4gICAgfSk7XG59O1xuZXhwb3J0cy5oYW5kbGVUb2RheVRhYkNsaWNrID0gaGFuZGxlVG9kYXlUYWJDbGljaztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVUb2RvQ2hlY2tib3hDb21wbGV0ZSA9IHZvaWQgMDtcbmNvbnN0IGhhbmRsZVRvZG9DaGVja2JveENvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mLCBfZywgX2gsIF9qLCBfaywgX2w7XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJjaGl2ZWQnKSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXJjaGl2ZWQnLCBKU09OLnN0cmluZ2lmeShbXSkpO1xuICAgIH1cbiAgICBjb25zdCB0aGlzUHJvamVjdE5hbWUgPSAoX2IgPSAoX2EgPSB0aGlzLnByZXZpb3VzU2libGluZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRleHRDb250ZW50KSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnJztcbiAgICBjb25zdCB0aGlzUHJvamVjdENvbG91ciA9IChfYyA9IHRoaXMudmFsdWUpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6ICcnO1xuICAgIGNvbnN0IHRoaXNUb2RvTmFtZSA9IChfaCA9IChfZyA9IChfZiA9IChfZSA9IChfZCA9IHRoaXMucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5maXJzdENoaWxkKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2YubmV4dFNpYmxpbmcpID09PSBudWxsIHx8IF9nID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZy50ZXh0Q29udGVudCkgIT09IG51bGwgJiYgX2ggIT09IHZvaWQgMCA/IF9oIDogJyc7XG4gICAgY29uc3QgcHJvamVjdEFyciA9IFtdO1xuICAgIC8vZ3JhYiB0aGUgZW50aXJlIHByb2plY3QgYmVsb25naW5nIHRvIGN1cnJlbnRseSBjaGVja2VkIHRvZG9cbiAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmIChrZXkgIT09ICdwcm9qZWN0TmFtZXMnICYmIGtleSAhPT0gJ2FyY2hpdmVkJykge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gdGhpc1Byb2plY3ROYW1lKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdEFyci5wdXNoKEpTT04ucGFyc2UoKF9hID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGFyY2hpdmVkVG9kb3MgPSBKU09OLnBhcnNlKChfaiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcmNoaXZlZCcpKSAhPT0gbnVsbCAmJiBfaiAhPT0gdm9pZCAwID8gX2ogOiAnJyk7XG4gICAgY29uc3QgdG9kb1RvQmVBcmNoaXZlZCA9IFtdO1xuICAgIC8vZ3JhYiByZW1haW5pbmcgdG9kb3MgdGhhdCBhcmUgbm90IGN1cnJlbnQgdG9kb1xuICAgIGNvbnN0IHRvZG9zQXJyRmlsdGVyZWQgPSBbXTtcbiAgICBwcm9qZWN0QXJyWzBdLnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgaWYgKHRvZG8udG9kb05hbWUgIT09IHRoaXNUb2RvTmFtZSkge1xuICAgICAgICAgICAgdG9kb3NBcnJGaWx0ZXJlZC5wdXNoKHRvZG8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdG9kb1RvQmVBcmNoaXZlZC5wdXNoKHRvZG8pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy9yZXBsYWNlIHRoZSB0b2RvcyBvZiBwcm9qZWN0IGZyb20gc3RvcmFnZSB3aXRoIGZpbHRlcmVkIHRvZG9zIHdoaWNoIGRvIG5vdCBoYXZlIHRoZSBjdXJyZW50bHkgY2hlY2tlZCBvZmYgdG9kb1xuICAgIHByb2plY3RBcnJbMF0udG9kb3MgPSB0b2Rvc0FyckZpbHRlcmVkO1xuICAgIC8vcHV0IHRoZSByZW1haW5pbmcgdG9kb3MgYmFjayBpbnRvIHByb2plY3QgYW5kIGludG8gc3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXNQcm9qZWN0TmFtZSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdEFyclswXSkpO1xuICAgIGNvbnN0IHByb2plY3RBbmRUb2RvVG9CZUFyY2hpdmVkID0ge1xuICAgICAgICBwcm9qZWN0OiB7IHByb2plY3ROYW1lOiB0aGlzUHJvamVjdE5hbWUsIHByb2plY3RDb2xvdXI6IHRoaXNQcm9qZWN0Q29sb3VyIH0sXG4gICAgICAgIHRvZG9zOiBbdG9kb1RvQmVBcmNoaXZlZFswXV0sXG4gICAgfTtcbiAgICAvL3N0b3JlIHRoZSByZW1vdmVkIHRvZG8gdW5kZXIgJ2FyY2hpdmVkJ1xuICAgIGFyY2hpdmVkVG9kb3MucHVzaChwcm9qZWN0QW5kVG9kb1RvQmVBcmNoaXZlZCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FyY2hpdmVkJywgSlNPTi5zdHJpbmdpZnkoYXJjaGl2ZWRUb2RvcykpO1xuICAgIC8vcmVtb3ZlIHRoZSBjdXJyZW50IHRvZG8gd2hvc2UgY2hlY2tib3ggaXMgY2xpY2tlZFxuICAgIChfbCA9IChfayA9IHRoaXMucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgX2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9rLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IF9sID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbC5yZW1vdmUoKTtcbn07XG5leHBvcnRzLmhhbmRsZVRvZG9DaGVja2JveENvbXBsZXRlID0gaGFuZGxlVG9kb0NoZWNrYm94Q29tcGxldGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlVG9kb0Nsb3NlSWNvbkNsaWNrID0gdm9pZCAwO1xuY29uc3QgaGFuZGxlVG9kb0Nsb3NlSWNvbkNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRvZG9Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lcicpO1xuICAgIGlmICh0b2RvTW9kYWwpXG4gICAgICAgIHRvZG9Nb2RhbC5yZW1vdmUoKTtcbn07XG5leHBvcnRzLmhhbmRsZVRvZG9DbG9zZUljb25DbGljayA9IGhhbmRsZVRvZG9DbG9zZUljb25DbGljaztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYW5kbGVUb2RvRm9ybVN1Ym1pdCA9IHZvaWQgMDtcbmNvbnN0IHN0b3JlUHJvamVjdEFuZFRvZG9zRnVsbF8xID0gcmVxdWlyZShcIi4uL3Byb2plY3RzQW5kVG9kb3Mvc3RvcmVQcm9qZWN0QW5kVG9kb3NGdWxsXCIpO1xuY29uc3QgYWRkVG9kb3NUb0NvbnRlbnRfMSA9IHJlcXVpcmUoXCIuLi9wcm9qZWN0c0FuZFRvZG9zL2FkZFRvZG9zVG9Db250ZW50XCIpO1xuY29uc3QgaGFuZGxlVG9kb0Zvcm1TdWJtaXQgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZiwgX2csIF9oLCBfaiwgX2ssIF9sLCBfbTtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jb250YWluZXInKTtcbiAgICBjb25zdCB0b2RvRm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XG4gICAgY29uc3QgdG9kb0Zvcm1Qcm9qZWN0TmFtZSA9IChfYiA9IChfYSA9IHRvZG9Gb3JtRGF0YS5nZXQoJ2FkZFRvZG8tcHJvamVjdE5hbWUnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICcnO1xuICAgIGNvbnN0IHRvZG9Gb3JtUHJvamVjdENvbG91ciA9IChfZCA9IChfYyA9IHRvZG9Gb3JtRGF0YS5nZXQoJ2FkZFRvZG8tcHJvamVjdENvbG91cicpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MudG9TdHJpbmcoKSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogJyc7XG4gICAgY29uc3QgdG9kb0Zvcm1OYW1lID0gKF9mID0gKF9lID0gdG9kb0Zvcm1EYXRhLmdldCgnYWRkVG9kby1uYW1lJykpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS50b1N0cmluZygpKSAhPT0gbnVsbCAmJiBfZiAhPT0gdm9pZCAwID8gX2YgOiAnJztcbiAgICBjb25zdCB0b2RvRm9ybURlc2NyaXB0aW9uID0gKF9oID0gKF9nID0gdG9kb0Zvcm1EYXRhLmdldCgnYWRkVG9kby1kZXNjcmlwdGlvbicpKSA9PT0gbnVsbCB8fCBfZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2cudG9TdHJpbmcoKSkgIT09IG51bGwgJiYgX2ggIT09IHZvaWQgMCA/IF9oIDogJyc7XG4gICAgY29uc3QgdG9kb0Zvcm1EdWVEYXRlID0gKF9rID0gKF9qID0gdG9kb0Zvcm1EYXRhLmdldCgnYWRkVG9kby1kdWVEYXRlJykpID09PSBudWxsIHx8IF9qID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfai50b1N0cmluZygpKSAhPT0gbnVsbCAmJiBfayAhPT0gdm9pZCAwID8gX2sgOiAnJztcbiAgICBjb25zdCB0b2RvRm9ybVNlbGVjdFByaW9yaXR5ID0gKF9tID0gKF9sID0gdG9kb0Zvcm1EYXRhLmdldCgnYWRkVG9kby1zZWxlY3RQcmlvcml0eScpKSA9PT0gbnVsbCB8fCBfbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2wudG9TdHJpbmcoKSkgIT09IG51bGwgJiYgX20gIT09IHZvaWQgMCA/IF9tIDogJyc7XG4gICAgY29uc3QgcHJvamVjdHNBbmRUb2Rvc0ZhY3RvcnkgPSBmdW5jdGlvbiAocHJvamVjdE5hbWUsIHByb2plY3RDb2xvdXIsIHRvZG9OYW1lLCB0b2RvRGVzY3JpcHRpb24sIHRvZG9EdWVEYXRlLCB0b2RvUHJpb3JpdHkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb2plY3Q6IHsgcHJvamVjdE5hbWUsIHByb2plY3RDb2xvdXIgfSxcbiAgICAgICAgICAgIHRvZG9zOiBbeyB0b2RvTmFtZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvRHVlRGF0ZSwgdG9kb1ByaW9yaXR5IH1dLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgY29uc3QgcHJvamVjdEFuZFRvZG9zID0gcHJvamVjdHNBbmRUb2Rvc0ZhY3RvcnkodG9kb0Zvcm1Qcm9qZWN0TmFtZSwgdG9kb0Zvcm1Qcm9qZWN0Q29sb3VyLCB0b2RvRm9ybU5hbWUsIHRvZG9Gb3JtRGVzY3JpcHRpb24sIHRvZG9Gb3JtRHVlRGF0ZSwgdG9kb0Zvcm1TZWxlY3RQcmlvcml0eSk7XG4gICAgLy9jaGVja3MgaWYgdG9kb0V4aXN0cyBhbmQgcmV0dXJucyB0cnVlIGlmIHRvZG9OYW1lIGlzIHByZXNlbnRcbiAgICBjb25zdCB0b2RvRXhpc3RzID0gKDAsIHN0b3JlUHJvamVjdEFuZFRvZG9zRnVsbF8xLnN0b3JlUHJvamVjdEFuZFRvZG9zRnVsbCkocHJvamVjdEFuZFRvZG9zKTtcbiAgICBpZiAoIXRvZG9FeGlzdHMpIHtcbiAgICAgICAgKDAsIGFkZFRvZG9zVG9Db250ZW50XzEuYWRkVG9kb3NUb0NvbnRlbnQpKHByb2plY3RBbmRUb2Rvcyk7XG4gICAgfVxuICAgIHRvZG9Db250YWluZXIgPT09IG51bGwgfHwgdG9kb0NvbnRhaW5lciA9PT0gdm9pZCAwID8gdm9pZCAwIDogdG9kb0NvbnRhaW5lci5yZW1vdmUoKTtcbn07XG5leHBvcnRzLmhhbmRsZVRvZG9Gb3JtU3VibWl0ID0gaGFuZGxlVG9kb0Zvcm1TdWJtaXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlVG9kb05hbWVWYWxpZGF0aW9uID0gdm9pZCAwO1xuY29uc3QgaGFuZGxlVG9kb05hbWVWYWxpZGF0aW9uID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgLy90byBhdm9pZCBpbnB1dCByZWdpc3RlcmluZyBhcyBpbnZhbGlkLCBpZiBhIGN1c3RvbSB2YWxpZGl0eSB3YXMgcHJldmlvdXNseSBzZXQsIHdoZW4gaW5wdXQgY29udGFpbnMgdmFsaWQgdmFsdWUgdXBvbiBzdWJtaXNzaW9uXG4gICAgdGhpcy5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gICAgdGhpcy5jaGVja1ZhbGlkaXR5KCk7XG59O1xuZXhwb3J0cy5oYW5kbGVUb2RvTmFtZVZhbGlkYXRpb24gPSBoYW5kbGVUb2RvTmFtZVZhbGlkYXRpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFuZGxlVXBjb21pbmdUYWJDbGljayA9IHZvaWQgMDtcbmNvbnN0IGVsZW1lbnRfY3JlYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50LWNyZWF0b3JzXCIpO1xuY29uc3QgYWRkVG9kb3NUb0NvbnRlbnRfMSA9IHJlcXVpcmUoXCIuLi9wcm9qZWN0c0FuZFRvZG9zL2FkZFRvZG9zVG9Db250ZW50XCIpO1xuY29uc3QgaGFuZGxlVXBjb21pbmdUYWJDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAvL3JlbW92ZSBjb250ZW50IHNlY3Rpb24ncyBwcmV2aW91cyBjb250ZW50c1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IGNvbnRlbnRCb3R0b21QcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYm90dG9tJyk7XG4gICAgY29udGVudEJvdHRvbVByZXYgPT09IG51bGwgfHwgY29udGVudEJvdHRvbVByZXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRlbnRCb3R0b21QcmV2LnJlbW92ZSgpO1xuICAgIC8vcmVuZGVyIG5ldyBjb250ZW50IGFuZCBhcHBlbmQgdG8gdGhpc1xuICAgIGNvbnN0IGNvbnRlbnRCb3R0b20gPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydjb250ZW50LWJvdHRvbSddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoY29udGVudCkoY29udGVudEJvdHRvbSk7XG4gICAgY29uc3QgcHJvamVjdEFyciA9IFtdO1xuICAgIC8vZ3JhYiBhbGwgdGhlIHByb2plY3RzIGV4Y2VwdCBvbmVzIHNwZWNpZmllZFxuICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKGtleSAhPT0gJ3Byb2plY3ROYW1lcycgJiYga2V5ICE9PSAnYXJjaGl2ZWQnKSB7XG4gICAgICAgICAgICBwcm9qZWN0QXJyLnB1c2goSlNPTi5wYXJzZSgoX2EgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJykpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBkYXRlID0gbm93LmdldERhdGUoKTtcbiAgICBjb25zdCBtb250aCA9IG5vdy5nZXRNb250aCgpICsgMTtcbiAgICBjb25zdCB5ZWFyID0gbm93LmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgdG9kYXkgPSBgJHt5ZWFyfS0ke21vbnRoIDwgMTAgPyAnMCcgKyBtb250aCA6IG1vbnRofS0ke2RhdGUgPCAxMCA/ICcwJyArIGRhdGUgOiBkYXRlfWA7XG4gICAgY29uc3QgcHJvakFuZFRvZG9zRmlsdGVyZWQgPSBbXTtcbiAgICAvL2dyYWIgZWFjaCB0b2RvIG5vdCBkdWUgdG9kYXkgYW5kIHB1dCBpbnRvIHRlbXAgcHJvamVjdCBvYmogYW5kIHB1c2ggaW50byAuLi5GaWx0ZXJlZFxuICAgIHByb2plY3RBcnIuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgICAgIGlmICh0b2RvLnRvZG9EdWVEYXRlICE9PSB0b2RheSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXAgPSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3ROYW1lOiBwcm9qZWN0LnByb2plY3QucHJvamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q29sb3VyOiBwcm9qZWN0LnByb2plY3QucHJvamVjdENvbG91cixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9kb3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvTmFtZTogdG9kby50b2RvTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb246IHRvZG8udG9kb0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EdWVEYXRlOiB0b2RvLnRvZG9EdWVEYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eTogdG9kby50b2RvUHJpb3JpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcHJvakFuZFRvZG9zRmlsdGVyZWQucHVzaCh0ZW1wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy9yZW5kZXIgdGhlIHRvZG9zXG4gICAgcHJvakFuZFRvZG9zRmlsdGVyZWQuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAoMCwgYWRkVG9kb3NUb0NvbnRlbnRfMS5hZGRUb2Rvc1RvQ29udGVudCkocHJvamVjdCk7XG4gICAgfSk7XG59O1xuZXhwb3J0cy5oYW5kbGVVcGNvbWluZ1RhYkNsaWNrID0gaGFuZGxlVXBjb21pbmdUYWJDbGljaztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oZWFkZXIgPSB2b2lkIDA7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IGhlYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKTtcbiAgICBjb25zdCBoZWFkZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydoZWFkZXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHJvb3QpKGhlYWRlcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdUb2RvIExpc3QgQXBwJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShoZWFkZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaDEnKShbJ3RpdGxlJywgJ2hlYWRlci10aXRsZSddKSk7XG59O1xuZXhwb3J0cy5oZWFkZXIgPSBoZWFkZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucHJvamVjdE1vZGFsID0gdm9pZCAwO1xuY29uc3QgZWxlbWVudF9jcmVhdG9yc18xID0gcmVxdWlyZShcIi4uL2VsZW1lbnQtY3JlYXRvcnNcIik7XG5jb25zdCBoYW5kbGVJbnZhbGlkUHJvak5hbWVfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVJbnZhbGlkUHJvak5hbWVcIik7XG5jb25zdCBoYW5kbGVQcm9qZWN0Q2xvc2VJY29uQ2xpY2tfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVQcm9qZWN0Q2xvc2VJY29uQ2xpY2tcIik7XG5jb25zdCBoYW5kbGVQcm9qZWN0Rm9ybVN1Ym1pdF8xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZVByb2plY3RGb3JtU3VibWl0XCIpO1xuY29uc3QgaGFuZGxlUHJvak5hbWVWYWxpZGF0aW9uXzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlUHJvak5hbWVWYWxpZGF0aW9uXCIpO1xuY29uc3QgcHJvamVjdE1vZGFsID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgIC8vYWRkUHJvamVjdCBtb2RhbFxuICAgIGNvbnN0IGFkZFByb2plY3RDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydhZGRQcm9qZWN0LWNvbnRhaW5lciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2lkZWJhcikoYWRkUHJvamVjdENvbnRhaW5lcik7XG4gICAgY29uc3QgYWRkUHJvamVjdEhlYWRpbmdDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydhZGRQcm9qZWN0SGVhZGluZy1jb250YWluZXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFByb2plY3RDb250YWluZXIpKGFkZFByb2plY3RIZWFkaW5nQ29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ0FkZCBwcm9qZWN0JyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0SGVhZGluZ0NvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdoMycpKFsnaGVhZGluZy10ZXh0JywgJ3RleHQtYWRkUHJvamVjdCddKSk7XG4gICAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZm9ybScpKFsnZm9ybS1hZGRQcm9qZWN0J10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWydhY3Rpb24nLCAnIyddLFxuICAgICAgICBbJ21ldGhvZCcsICdwb3N0J10sXG4gICAgICAgIFsnaWQnLCAnZm9ybS1hZGRQcm9qZWN0J10sXG4gICAgICAgIFsnbmFtZScsICdmb3JtLWFkZFByb2plY3QnXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ3N1Ym1pdCcpKGhhbmRsZVByb2plY3RGb3JtU3VibWl0XzEuaGFuZGxlUHJvamVjdEZvcm1TdWJtaXQpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdENvbnRhaW5lcikpKGFkZFByb2plY3RGb3JtKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0TmFtZUNvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2FkZFByb2plY3QtbmFtZS1jb250YWluZXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFByb2plY3RGb3JtKShhZGRQcm9qZWN0TmFtZUNvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1snZm9yJywgJ2FkZFByb2plY3QtbmFtZSddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ05hbWUnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFByb2plY3ROYW1lQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2xhYmVsJykoWydsYWJlbC1uYW1lJ10pKTtcbiAgICAvL2lucHV0IG5hbWVcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdpbnB1dCcpKGhhbmRsZVByb2pOYW1lVmFsaWRhdGlvbl8xLmhhbmRsZVByb2pOYW1lVmFsaWRhdGlvbiksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdpbnZhbGlkJykoaGFuZGxlSW52YWxpZFByb2pOYW1lXzEuaGFuZGxlSW52YWxpZFByb2pOYW1lKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWydpZCcsICdhZGRQcm9qZWN0LW5hbWUnXSxcbiAgICAgICAgWyd0eXBlJywgJ3RleHQnXSxcbiAgICAgICAgWydtaW5sZW5ndGgnLCAnMiddLFxuICAgICAgICBbJ21heGxlbmd0aCcsICcxNyddLFxuICAgICAgICBbJ3BhdHRlcm4nLCAnW2EtekEtWl0rJ10sXG4gICAgICAgIFsncGxhY2Vob2xkZXInLCAnRW50ZXIgbmFtZSBvZiBwcm9qZWN0J10sXG4gICAgICAgIFsnbmFtZScsICdhZGRQcm9qZWN0LW5hbWUnXSxcbiAgICAgICAgWydyZXF1aXJlZCcsICcnXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFByb2plY3ROYW1lQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2lucHV0JykoWydhZGRQcm9qZWN0LW5hbWUnXSkpO1xuICAgIGNvbnN0IGFkZFByb2plY3RDb2xvdXJDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydhZGRQcm9qZWN0LWNvbG91ci1jb250YWluZXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFByb2plY3RGb3JtKShhZGRQcm9qZWN0Q29sb3VyQ29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydmb3InLCAnYWRkUHJvamVjdC1jb2xvdXInXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdDb2xvdXInKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFByb2plY3RDb2xvdXJDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnbGFiZWwnKShbJ2xhYmVsLWNvbG91ciddKSk7XG4gICAgLy9pbnB1dCBjb2xvdXJcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsndHlwZScsICdjb2xvciddLFxuICAgICAgICBbJ2lkJywgJ2FkZFByb2plY3QtY29sb3VyJ10sXG4gICAgICAgIFsnbmFtZScsICdhZGRQcm9qZWN0LWNvbG91ciddLFxuICAgICAgICBbJ3ZhbHVlJywgJyMxZTFlMWUnXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFByb2plY3RDb2xvdXJDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaW5wdXQnKShbJ2FkZFByb2plY3QtY29sb3VyJ10pKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0SWNvbnNDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydhZGRQcm9qZWN0SWNvbnMtY29udGFpbmVyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0Rm9ybSkoYWRkUHJvamVjdEljb25zQ29udGFpbmVyKTtcbiAgICBjb25zdCBidHRuQ2FuY2VsUHJvamVjdCA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdidXR0b24nKShbJ2J0dG4nLCAnYnR0bi1jYW5jZWxQcm9qZWN0J10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnQ2FuY2VsJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdjbGljaycpKGhhbmRsZVByb2plY3RDbG9zZUljb25DbGlja18xLmhhbmRsZVByb2plY3RDbG9zZUljb25DbGljayksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsndHlwZScsICdidXR0b24nXSxcbiAgICAgICAgWyduYW1lJywgJ2J0dG4tY2FuY2VsJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRQcm9qZWN0SWNvbnNDb250YWluZXIpKShidHRuQ2FuY2VsUHJvamVjdCk7XG4gICAgY29uc3QgYnR0bkFkZFByb2plY3QgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnYnV0dG9uJykoWydidHRuJywgJ2J0dG4tYWRkUHJvamVjdCddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ0FkZCcpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ3R5cGUnLCAnc3VibWl0J10sXG4gICAgICAgIFsnbmFtZScsICdidHRuLWFkZFByb2plY3QnXSxcbiAgICAgICAgWydmb3JtJywgJ2Zvcm0tYWRkUHJvamVjdCddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkUHJvamVjdEljb25zQ29udGFpbmVyKSkoYnR0bkFkZFByb2plY3QpO1xufTtcbmV4cG9ydHMucHJvamVjdE1vZGFsID0gcHJvamVjdE1vZGFsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnRvZG9Nb2RhbCA9IHZvaWQgMDtcbmNvbnN0IGVsZW1lbnRfY3JlYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50LWNyZWF0b3JzXCIpO1xuY29uc3QgaGFuZGxlSW52YWxpZFRvZG9OYW1lXzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlSW52YWxpZFRvZG9OYW1lXCIpO1xuY29uc3QgaGFuZGxlVG9kb0Nsb3NlSWNvbkNsaWNrXzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlVG9kb0Nsb3NlSWNvbkNsaWNrXCIpO1xuY29uc3QgaGFuZGxlVG9kb0Zvcm1TdWJtaXRfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVUb2RvRm9ybVN1Ym1pdFwiKTtcbmNvbnN0IGhhbmRsZVRvZG9OYW1lVmFsaWRhdGlvbl8xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZVRvZG9OYW1lVmFsaWRhdGlvblwiKTtcbmNvbnN0IHRvZG9Nb2RhbCA9IGZ1bmN0aW9uIChwcm9qZWN0RGF0YU5hbWVfLCBwcm9qZWN0RGF0YUNvbG91cl8pIHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKTtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWyd0b2RvLWNvbnRhaW5lciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkocm9vdCkodG9kb0NvbnRhaW5lcik7XG4gICAgY29uc3QgdG9kb0Zvcm0gPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZm9ybScpKFsnZm9ybScsICdmb3JtLWFkZFRvZG8nXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnc3VibWl0JykoaGFuZGxlVG9kb0Zvcm1TdWJtaXRfMS5oYW5kbGVUb2RvRm9ybVN1Ym1pdCksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsnYWN0aW9uJywgJyMnXSxcbiAgICAgICAgWydtZXRob2QnLCAncG9zdCddLFxuICAgICAgICBbJ2lkJywgJ2Zvcm0tYWRkVG9kbyddLFxuICAgICAgICBbJ25hbWUnLCAnZm9ybS1hZGRUb2RvJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b2RvQ29udGFpbmVyKSkodG9kb0Zvcm0pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnQWRkIHRhc2sgdG9kbycpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0Zvcm0pKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaDMnKShbJ2hlYWRpbmctdGV4dCcsICd0ZXh0LWFkZFRvZG8nXSkpO1xuICAgIGNvbnN0IGFkZFRvZG9OYW1lQ29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnYWRkVG9kby1uYW1lLWNvbnRhaW5lciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0Zvcm0pKGFkZFRvZG9OYW1lQ29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydmb3InLCAnYWRkVG9kby1uYW1lJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnTmFtZScpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkVG9kb05hbWVDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnbGFiZWwnKShbJ2xhYmVsLW5hbWUnXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ2lucHV0JykoaGFuZGxlVG9kb05hbWVWYWxpZGF0aW9uXzEuaGFuZGxlVG9kb05hbWVWYWxpZGF0aW9uKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ2ludmFsaWQnKShoYW5kbGVJbnZhbGlkVG9kb05hbWVfMS5oYW5kbGVJbnZhbGlkVG9kb05hbWUpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ3R5cGUnLCAndGV4dCddLFxuICAgICAgICBbJ2Zvcm0nLCAnZm9ybS1hZGRUb2RvJ10sXG4gICAgICAgIFsnaWQnLCAnYWRkVG9kby1uYW1lJ10sXG4gICAgICAgIFsnbmFtZScsICdhZGRUb2RvLW5hbWUnXSxcbiAgICAgICAgWydtaW5sZW5ndGgnLCAnMiddLFxuICAgICAgICBbJ21heGxlbmd0aCcsICczMSddLFxuICAgICAgICBbJ3BhdHRlcm4nLCAnW0EtWmEtejAtOV0rJ10sXG4gICAgICAgIFsncGxhY2Vob2xkZXInLCAnRW50ZXIgbmFtZSBmb3IgdGFzayB0b2RvJ10sXG4gICAgICAgIFsncmVxdWlyZWQnLCAnJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRUb2RvTmFtZUNvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdpbnB1dCcpKFsnYWRkVG9kby1uYW1lJ10pKTtcbiAgICBjb25zdCBhZGRUb2RvRGVzY0NvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2FkZFRvZG8tZGVzYy1jb250YWluZXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZG9Gb3JtKShhZGRUb2RvRGVzY0NvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1snZm9yJywgJ2FkZFRvZG8tZGVzY3JpcHRpb24nXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdEZXNjcmlwdGlvbicpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkVG9kb0Rlc2NDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnbGFiZWwnKShbJ2xhYmVsLWRlc2NyaXB0aW9uJ10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsnaWQnLCAnYWRkVG9kby1kZXNjcmlwdGlvbiddLFxuICAgICAgICBbJ2F1dG9jb21wbGV0ZScsICdvbiddLFxuICAgICAgICBbJ2Zvcm0nLCAnZm9ybS1hZGRUb2RvJ10sXG4gICAgICAgIFsnbWF4bGVuZ3RoJywgJzI1MCddLFxuICAgICAgICBbJ25hbWUnLCAnYWRkVG9kby1kZXNjcmlwdGlvbiddLFxuICAgICAgICBbJ3NwZWxsY2hlY2snLCAndHJ1ZSddLFxuICAgICAgICBbJ3dyYXAnLCAnaGFyZCddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkVG9kb0Rlc2NDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgndGV4dGFyZWEnKShbJ2FkZFRvZG8tZGVzY3JpcHRpb24nXSkpO1xuICAgIGNvbnN0IGFkZFRvZG9EYXRlQ29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnYWRkVG9kby1kYXRlLWNvbnRhaW5lciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0Zvcm0pKGFkZFRvZG9EYXRlQ29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ0R1ZSBkYXRlJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydmb3InLCAnYWRkVG9kby1kdWVEYXRlJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFRvZG9EYXRlQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2xhYmVsJykoWydsYWJlbC1kdWVEYXRlJ10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsndHlwZScsICdkYXRlJ10sXG4gICAgICAgIFsnaWQnLCAnYWRkVG9kby1kdWVEYXRlJ10sXG4gICAgICAgIFtcbiAgICAgICAgICAgICdtaW4nLFxuICAgICAgICAgICAgYCR7bm93LmdldEZ1bGxZZWFyKCl9LSR7bm93LmdldE1vbnRoKCkgPCAxMCA/ICcwJyArIChub3cuZ2V0TW9udGgoKSArIDEpIDogbm93LmdldE1vbnRoKCkgKyAxfS0ke25vdy5nZXREYXRlKCkgPCAxMCA/ICcwJyArIG5vdy5nZXREYXRlKCkgOiBub3cuZ2V0RGF0ZSgpfWAsXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAgICdtYXgnLFxuICAgICAgICAgICAgYCR7bm93LmdldEZ1bGxZZWFyKCkgKyAxMDB9LSR7bm93LmdldE1vbnRoKCkgPCAxMCA/ICcwJyArIChub3cuZ2V0TW9udGgoKSArIDEpIDogbm93LmdldE1vbnRoKCkgKyAxfS0ke25vdy5nZXREYXRlKCkgPCAxMCA/ICcwJyArIG5vdy5nZXREYXRlKCkgOiBub3cuZ2V0RGF0ZSgpfWAsXG4gICAgICAgIF0sXG4gICAgICAgIFsnbmFtZScsICdhZGRUb2RvLWR1ZURhdGUnXSxcbiAgICAgICAgWydwbGFjZWhvbGRlcicsICd5eXl5LW1tLWRkJ10sXG4gICAgICAgIFsncGF0dGVybicsICcoMFsxLTldfDFbMC05XXwyWzAtOV18M1swMV0pLSgwWzEtOV18MVswMTJdKS1bMC05XXs0fSddLFxuICAgICAgICBbJ3JlcXVpcmVkJywgJyddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkVG9kb0RhdGVDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaW5wdXQnKShbJ2FkZFRvZG8tZHVlRGF0ZSddKSk7XG4gICAgY29uc3QgYWRkVG9kb1ByaW9yaXR5Q29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnYWRkVG9kby1wcmlvcml0eS1jb250YWluZXInXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZG9Gb3JtKShhZGRUb2RvUHJpb3JpdHlDb250YWluZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnUHJpb3JpdHkgbGV2ZWwnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ2ZvcicsICdhZGRUb2RvLXNlbGVjdFByaW9yaXR5J11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFRvZG9Qcmlvcml0eUNvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdsYWJlbCcpKFsnbGFiZWwtc2VsZWN0UHJpb3JpdHknXSkpO1xuICAgIGNvbnN0IHNlbGVjdFByaW9yaXR5ID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ3NlbGVjdCcpKFsnYWRkVG9kby1zZWxlY3RQcmlvcml0eSddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsnbmFtZScsICdhZGRUb2RvLXNlbGVjdFByaW9yaXR5J10sXG4gICAgICAgIFsnaWQnLCAnYWRkVG9kby1zZWxlY3RQcmlvcml0eSddLFxuICAgICAgICBbJ2Zvcm0nLCAnZm9ybS1hZGRUb2RvJ10sXG4gICAgICAgIFsndGl0bGUnLCAnYWRkVG9kby1zZWxlY3RQcmlvcml0eSddLFxuICAgICAgICBbJ3JlcXVpcmVkJywgJyddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYWRkVG9kb1ByaW9yaXR5Q29udGFpbmVyKSkoc2VsZWN0UHJpb3JpdHkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnLS1QbGVhc2UgYXNzaWduIGEgcHJpb3JpdHktLScpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1sndmFsdWUnLCAnJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNlbGVjdFByaW9yaXR5KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ29wdGlvbicpKFsnb3B0aW9uLXNlbGVjdFByaW9yaXR5J10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWyd2YWx1ZScsICdsb3cnXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdMb3cnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNlbGVjdFByaW9yaXR5KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ29wdGlvbicpKFsnb3B0aW9uLXNlbGVjdFByaW9yaXR5J10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWyd2YWx1ZScsICdtZWRpdW0nXV0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdNZWRpdW0nKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNlbGVjdFByaW9yaXR5KSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ29wdGlvbicpKFsnb3B0aW9uLXNlbGVjdFByaW9yaXR5J10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWyd2YWx1ZScsICdoaWdoJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnSGlnaCcpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2VsZWN0UHJpb3JpdHkpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnb3B0aW9uJykoWydvcHRpb24tc2VsZWN0UHJpb3JpdHknXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ3ZhbHVlJywgJ3VyZ2VudCddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ1VyZ2VudCcpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2VsZWN0UHJpb3JpdHkpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnb3B0aW9uJykoWydvcHRpb24tc2VsZWN0UHJpb3JpdHknXSkpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtbJ3ZhbHVlJywgJ2ltbWVkaWF0ZSddXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ0ltbWVkaWF0ZScpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2VsZWN0UHJpb3JpdHkpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnb3B0aW9uJykoWydvcHRpb24tc2VsZWN0UHJpb3JpdHknXSkpO1xuICAgIC8vaGlkZGVuIGVsZW1lbnQgdG8gZnVubmVsIHByb2plY3QgbmFtZSB0byB0b2RvZm9ybVxuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRBdHRyaWJ1dGVUb0VsZW0pKFtcbiAgICAgICAgWydoaWRkZW4nLCAnJ10sXG4gICAgICAgIFsndmFsdWUnLCBgJHtwcm9qZWN0RGF0YU5hbWVffWBdLFxuICAgICAgICBbJ25hbWUnLCAnYWRkVG9kby1wcm9qZWN0TmFtZSddLFxuICAgICAgICBbJ3R5cGUnLCAndGV4dCddLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0Zvcm0pKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaW5wdXQnKShbJ2FkZFRvZG8tcHJvamVjdE5hbWVfX2hpZGRlbiddKSk7XG4gICAgLy9oaWRkZW4gZWxlbWVudCB0byBmdW5uZWwgcHJvamVjdCBjb2xvdXIgdG8gdG9kb2Zvcm1cbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsnaGlkZGVuJywgJyddLFxuICAgICAgICBbJ3ZhbHVlJywgYCR7cHJvamVjdERhdGFDb2xvdXJffWBdLFxuICAgICAgICBbJ25hbWUnLCAnYWRkVG9kby1wcm9qZWN0Q29sb3VyJ10sXG4gICAgICAgIFsndHlwZScsICd0ZXh0J10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b2RvRm9ybSkpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdpbnB1dCcpKFsnYWRkVG9kby1wcm9qZWN0Q29sb3VyX19oaWRkZW4nXSkpO1xuICAgIGNvbnN0IGFkZFRvZG9JY29uc0NvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ2FkZFRvZG8taWNvbnMtY29udGFpbmVyJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh0b2RvRm9ybSkoYWRkVG9kb0ljb25zQ29udGFpbmVyKTtcbiAgICBjb25zdCBidHRuQ2FuY2VsVG9kbyA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdidXR0b24nKShbJ2J0dG4nLCAnYnR0bi1jYW5jZWxUb2RvJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnQ2FuY2VsJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdjbGljaycpKGhhbmRsZVRvZG9DbG9zZUljb25DbGlja18xLmhhbmRsZVRvZG9DbG9zZUljb25DbGljayksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsndHlwZScsICdjbGljayddLFxuICAgICAgICBbJ25hbWUnLCAnYnR0bi1jYW5jZWxUb2RvJ10sXG4gICAgICAgIFsnZm9ybScsICdmb3JtLWFkZFRvZG8nXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGFkZFRvZG9JY29uc0NvbnRhaW5lcikpKGJ0dG5DYW5jZWxUb2RvKTtcbiAgICBjb25zdCBidHRuQWRkVG9kbyA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdidXR0b24nKShbJ2J0dG4nLCAnYnR0bi1hZGRUb2RvJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnQWRkJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbXG4gICAgICAgIFsndHlwZScsICdzdWJtaXQnXSxcbiAgICAgICAgWyduYW1lJywgJ2J0dG4tYWRkVG9kbyddLFxuICAgICAgICBbJ2Zvcm0nLCAnZm9ybS1hZGRUb2RvJ10sXG4gICAgXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShhZGRUb2RvSWNvbnNDb250YWluZXIpKShidHRuQWRkVG9kbyk7XG59O1xuZXhwb3J0cy50b2RvTW9kYWwgPSB0b2RvTW9kYWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuYWRkUHJvamVjdFRvU2lkZWJhciA9IHZvaWQgMDtcbmNvbnN0IGVsZW1lbnRfY3JlYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50LWNyZWF0b3JzXCIpO1xuY29uc3QgaGFuZGxlQWRkTmV3VG9kb0ljb25DbGlja18xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZUFkZE5ld1RvZG9JY29uQ2xpY2tcIik7XG5jb25zdCBoYW5kbGVDcmVhdGVkVGFic0NsaWNrXzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlQ3JlYXRlZFRhYnNDbGlja1wiKTtcbmNvbnN0IGFkZFByb2plY3RUb1NpZGViYXIgPSBmdW5jdGlvbiAoZm9ybU5hbWVfLCBmb3JtQ29sb3VyXykge1xuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci1wcm9qZWN0cycpO1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydzaWRlYmFyLXByb2plY3QnLCAncHJvamVjdCddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkocHJvamVjdHNDb250YWluZXIpKHByb2plY3RDb250YWluZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ2NsaWNrJykoaGFuZGxlQ3JlYXRlZFRhYnNDbGlja18xLmhhbmRsZUNyZWF0ZWRUYWJzQ2xpY2spLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ2RhdGEtbmFtZScsIGAke2Zvcm1OYW1lX31gXSxcbiAgICAgICAgWydkYXRhLWNvbG91cicsIGAke2Zvcm1Db2xvdXJffWBdLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFN0eWxlVG9FbGVtKShbWydjb2xvcicsIGAke2Zvcm1Db2xvdXJffWBdXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoYCR7Zm9ybU5hbWVffWApLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkocHJvamVjdENvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdoNCcpKFsncHJvamVjdC10ZXh0J10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkU3R5bGVUb0VsZW0pKFtbJ2NvbG9yJywgYCR7Zm9ybUNvbG91cl99YF1dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnKycpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ2RhdGEtbmFtZScsIGAke2Zvcm1OYW1lX31gXSxcbiAgICAgICAgWydkYXRhLWNvbG91cicsIGAke2Zvcm1Db2xvdXJffWBdLFxuICAgIF0pLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVBZGROZXdUb2RvSWNvbkNsaWNrXzEuaGFuZGxlQWRkTmV3VG9kb0ljb25DbGljayksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShwcm9qZWN0Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2J1dHRvbicpKFsnYnR0bicsICdidHRuLXRvZG9Nb2RhbCddKSk7XG59O1xuZXhwb3J0cy5hZGRQcm9qZWN0VG9TaWRlYmFyID0gYWRkUHJvamVjdFRvU2lkZWJhcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5hZGRUb2Rvc1RvQ29udGVudCA9IHZvaWQgMDtcbmNvbnN0IGVsZW1lbnRfY3JlYXRvcnNfMSA9IHJlcXVpcmUoXCIuLi9lbGVtZW50LWNyZWF0b3JzXCIpO1xuY29uc3QgaGFuZGxlVG9kb0NoZWNrYm94Q29tcGxldGVfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVUb2RvQ2hlY2tib3hDb21wbGV0ZVwiKTtcbmNvbnN0IGFkZFRvZG9zVG9Db250ZW50ID0gZnVuY3Rpb24gKHsgcHJvamVjdCwgdG9kb3MgfSwgZGlzYWJsZUNoZWNrYm94ID0gZmFsc2UpIHtcbiAgICBjb25zdCB7IHByb2plY3ROYW1lLCBwcm9qZWN0Q29sb3VyIH0gPSBwcm9qZWN0O1xuICAgIHRvZG9zLmZvckVhY2goKHRvZG8sIGkpID0+IHtcbiAgICAgICAgY29uc3QgeyB0b2RvTmFtZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvRHVlRGF0ZSwgdG9kb1ByaW9yaXR5IH0gPSB0b2Rvc1tpXTtcbiAgICAgICAgY29uc3QgY29udGVudEJvdHRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWJvdHRvbScpO1xuICAgICAgICBjb25zdCB0b2RvQ29udGVudENvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3RvZG9Db250ZW50LWNvbnRhaW5lciddKTtcbiAgICAgICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGNvbnRlbnRCb3R0b20pKHRvZG9Db250ZW50Q29udGFpbmVyKTtcbiAgICAgICAgY29uc3QgaGVhZGluZ0NvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3RvZG9Db250ZW50LWhlYWRpbmctY29udGFpbmVyJ10pO1xuICAgICAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkodG9kb0NvbnRlbnRDb250YWluZXIpKGhlYWRpbmdDb250YWluZXIpO1xuICAgICAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydkYXRhLWNvbG91cicsIGAke3Byb2plY3RDb2xvdXJ9YF1dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKShgJHtwcm9qZWN0TmFtZX1gKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRTdHlsZVRvRWxlbSkoW1snY29sb3InLCBgJHtwcm9qZWN0Q29sb3VyfWBdXSksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShoZWFkaW5nQ29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2gzJykoWydoZWFkaW5nLXRleHQnLCAndG9kb0NvbnRlbnQtcHJvamVjdE5hbWUnXSkpO1xuICAgICAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkQXR0cmlidXRlVG9FbGVtKShbWydmb3InLCAnY29tcGxldGUnXV0pKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnbGFiZWwnKShbJ2xhYmVsJywgJ3RvZG9Db250ZW50LWxhYmVsJ10pKTtcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaW5wdXQnKShbJ3RvZG9Db250ZW50LWNoZWNrYm94J10pO1xuICAgICAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdjbGljaycpKGhhbmRsZVRvZG9DaGVja2JveENvbXBsZXRlXzEuaGFuZGxlVG9kb0NoZWNrYm94Q29tcGxldGUpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICAgICAgWyd0eXBlJywgJ2NoZWNrYm94J10sXG4gICAgICAgICAgICBbJ2lkJywgJ2NvbXBsZXRlJ10sXG4gICAgICAgICAgICBbJ25hbWUnLCAnY29tcGxldGUnXSxcbiAgICAgICAgICAgIFsndmFsdWUnLCBgJHtwcm9qZWN0Q29sb3VyfWBdLFxuICAgICAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGhlYWRpbmdDb250YWluZXIpKShjaGVja2JveCk7XG4gICAgICAgIC8vdG8gcHJldmVudCBjbGlja2luZyBjaGVja2JveCBhZnRlciBpdCBoYXMgYmVlbiBhcmNoaXZlZFxuICAgICAgICBpZiAoZGlzYWJsZUNoZWNrYm94KSB7XG4gICAgICAgICAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1snZGlzYWJsZWQnLCAndHJ1ZSddXSkoY2hlY2tib3gpO1xuICAgICAgICB9XG4gICAgICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKShgJHt0b2RvTmFtZX1gKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZG9Db250ZW50Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2g0JykoWyd0b2RvQ29udGVudC1uYW1lJ10pKTtcbiAgICAgICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKGAke3RvZG9EZXNjcmlwdGlvbn1gKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZG9Db250ZW50Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ3AnKShbJ3RvZG9Db250ZW50LWRlc2NyaXB0aW9uJ10pKTtcbiAgICAgICAgY29uc3QgZGF0ZUFuZFByaW9yaXR5Q29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnZGF0ZUFuZFByaW9yaXR5LWNvbnRhaW5lciddKTtcbiAgICAgICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZG9Db250ZW50Q29udGFpbmVyKShkYXRlQW5kUHJpb3JpdHlDb250YWluZXIpO1xuICAgICAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoYER1ZTogJHt0b2RvRHVlRGF0ZX1gKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKGRhdGVBbmRQcmlvcml0eUNvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdwJykoWyd0b2RvQ29udGVudC1kdWVEYXRlJ10pKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydwcmlvcml0eS1jb250YWluZXInXSk7XG4gICAgICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShkYXRlQW5kUHJpb3JpdHlDb250YWluZXIpKHByaW9yaXR5Q29udGFpbmVyKTtcbiAgICAgICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRTdHlsZVRvRWxlbSkoW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJyxcbiAgICAgICAgICAgICAgICBgJHt0b2RvUHJpb3JpdHkgPT09ICdpbW1lZGlhdGUnXG4gICAgICAgICAgICAgICAgICAgID8gJ2hzbCgwLCAxMDAlLCAzNSUpJ1xuICAgICAgICAgICAgICAgICAgICA6IHRvZG9Qcmlvcml0eSA9PT0gJ3VyZ2VudCdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2hzbCg0MCwgMTAwJSwgNjUlKSdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdG9kb1ByaW9yaXR5ID09PSAnaGlnaCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdoc2woOTAsIDEwMCUsIDUwJSknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0b2RvUHJpb3JpdHkgPT09ICdtZWRpdW0nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2hzbCgyMDAsIDEwMCUsIDUwJSknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2hzbCgyNTAsIDEwMCUsIDcwJSknfWAsXG4gICAgICAgICAgICBdLFxuICAgICAgICBdKShwcmlvcml0eUNvbnRhaW5lcik7XG4gICAgICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKShgJHt0b2RvUHJpb3JpdHl9YCksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShwcmlvcml0eUNvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdwJykoWyd0b2RvQ29udGVudC1wcmlvcml0eSddKSk7XG4gICAgfSk7XG59O1xuZXhwb3J0cy5hZGRUb2Rvc1RvQ29udGVudCA9IGFkZFRvZG9zVG9Db250ZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmFyY2hpdmVFeHBpcmVkVG9kb3MgPSB2b2lkIDA7XG5jb25zdCBhcmNoaXZlRXhwaXJlZFRvZG9zID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcmNoaXZlZCcpKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcmNoaXZlZCcsIEpTT04uc3RyaW5naWZ5KFtdKSk7XG4gICAgfVxuICAgIGNvbnN0IHByb2plY3RBcnIgPSBbXTtcbiAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmIChrZXkgIT09ICdwcm9qZWN0TmFtZXMnICYmIGtleSAhPT0gJ2FyY2hpdmVkJykge1xuICAgICAgICAgICAgcHJvamVjdEFyci5wdXNoKEpTT04ucGFyc2UoKF9hID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF0ZSA9IG5vdy5nZXREYXRlKCk7XG4gICAgY29uc3QgbW9udGggPSBub3cuZ2V0TW9udGgoKSArIDE7XG4gICAgY29uc3QgeWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xuICAgIC8vZ3JhYiBwcmV2aW91c2x5IHN0b3JlZCBleHBpcmVkL2FyY2hpdmVkIHByb2plY3RzIGZyb20gbG9jYWxzdG9yYWdlXG4gICAgY29uc3QgZXhwaXJlZFByb2plY3RzQXJyID0gSlNPTi5wYXJzZSgoX2EgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJjaGl2ZWQnKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycpO1xuICAgIGNvbnN0IHRvZG9zTm90RXhwaXJlZEFyciA9IFtdO1xuICAgIHByb2plY3RBcnIuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBBcnIgPSB0b2RvLnRvZG9EdWVEYXRlLnNwbGl0KCctJyk7XG4gICAgICAgICAgICBjb25zdCB0b2RvWWVhciA9IE51bWJlcih0ZW1wQXJyWzBdKTtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9Nb250aCA9IE51bWJlcih0ZW1wQXJyWzFdKTtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9EYXRlID0gTnVtYmVyKHRlbXBBcnJbMl0pO1xuICAgICAgICAgICAgLy9ncmFiIGVhY2ggdG9kbyB3aXRoIGR1ZURhdGUgZWFybGllciB0aGFuIHRvZGF5IGFuZCBzdG9yZSBjb3JyZXNwb25kaW5nIHByb2plY3QgaW50byB0ZW1wIG9iamVjdCBhbmQgc3RvcmUgaW4gZXhwaXJlZFByb2plY3RzQXJyXG4gICAgICAgICAgICBpZiAodG9kb0RhdGUgPCBkYXRlIHx8IHRvZG9Nb250aCA8IG1vbnRoIHx8IHRvZG9ZZWFyIDwgeWVhcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXAgPSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3ROYW1lOiBwcm9qZWN0LnByb2plY3QucHJvamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q29sb3VyOiBwcm9qZWN0LnByb2plY3QucHJvamVjdENvbG91cixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9kb3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvTmFtZTogdG9kby50b2RvTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb246IHRvZG8udG9kb0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EdWVEYXRlOiB0b2RvLnRvZG9EdWVEYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eTogdG9kby50b2RvUHJpb3JpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZXhwaXJlZFByb2plY3RzQXJyLnB1c2godGVtcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL2dyYWIgcHJvamVjdHMgYW5kIHRvZG9zIHRoYXQgYXJlIG5vdCBleHBpcmVkIGFuZCBzdG9yZSB0aGVtIGludG8gLi4uQXJyXG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcCA9IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE5hbWU6IHByb2plY3QucHJvamVjdC5wcm9qZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RDb2xvdXI6IHByb2plY3QucHJvamVjdC5wcm9qZWN0Q29sb3VyLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0b2RvczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9OYW1lOiB0b2RvLnRvZG9OYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbjogdG9kby50b2RvRGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0R1ZURhdGU6IHRvZG8udG9kb0R1ZURhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5OiB0b2RvLnRvZG9Qcmlvcml0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0b2Rvc05vdEV4cGlyZWRBcnIucHVzaCh0ZW1wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy9zdG9yZSBleHBpcmVkIHByb2plY3RzIGFuZCB0b2RvcyB0aGF0IGhhdmUgbmV3IGV4cGlyZWQgdG9kb3MgYWRkZWRcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXJjaGl2ZWQnLCBKU09OLnN0cmluZ2lmeShleHBpcmVkUHJvamVjdHNBcnIpKTtcbiAgICAvL3RoZSB0b2RvcyB0aGF0IHNoYXJlIGEgcHJvamVjdCBuYW1lIGFyZSBjb25zb2xpZGF0ZWQgdW5kZXIgb25lIHByb2plY3RcbiAgICBjb25zdCB1bmV4cGlyZWRQcm9qZWN0c01hcCA9IHRvZG9zTm90RXhwaXJlZEFyci5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xuICAgICAgICBpZiAoIWFjYy5oYXMoY3Vyci5wcm9qZWN0LnByb2plY3ROYW1lKSkge1xuICAgICAgICAgICAgYWNjLnNldChjdXJyLnByb2plY3QucHJvamVjdE5hbWUsIGN1cnIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IGFjYy5nZXQoY3Vyci5wcm9qZWN0LnByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIHRlbXAgPT09IG51bGwgfHwgdGVtcCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGVtcC50b2Rvcy5wdXNoKGN1cnIudG9kb3NbMF0pO1xuICAgICAgICAgICAgYWNjLnNldChjdXJyLnByb2plY3QucHJvamVjdE5hbWUsIHRlbXApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgbmV3IE1hcCgpKTtcbiAgICAvL3N0b3JlIG1vZGlmaWVkIHByb2plY3RzIHdpdGhvdXQgdGhlIGV4cGlyZWQgdG9kb3MgYmFjayBpbnRvIGxvY2Fsc3RvcmFnZVxuICAgIHVuZXhwaXJlZFByb2plY3RzTWFwLmZvckVhY2goKHByb2osIHByb2pOYW1lKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2pOYW1lLCBKU09OLnN0cmluZ2lmeShwcm9qKSk7XG4gICAgfSk7XG59O1xuZXhwb3J0cy5hcmNoaXZlRXhwaXJlZFRvZG9zID0gYXJjaGl2ZUV4cGlyZWRUb2RvcztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wcm9qZWN0c0FuZFRvZG9zT25sb2FkID0gdm9pZCAwO1xuY29uc3QgYWRkUHJvamVjdFRvU2lkZWJhcl8xID0gcmVxdWlyZShcIi4vYWRkUHJvamVjdFRvU2lkZWJhclwiKTtcbmNvbnN0IGFkZFRvZG9zVG9Db250ZW50XzEgPSByZXF1aXJlKFwiLi9hZGRUb2Rvc1RvQ29udGVudFwiKTtcbmNvbnN0IHByb2plY3RzQW5kVG9kb3NPbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IHByb2plY3RzID0gW107XG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoa2V5ICE9PSAnU2FtcGxlIFByb2plY3QnICYmIGtleSAhPT0gJ3Byb2plY3ROYW1lcycgJiYga2V5ICE9PSAnYXJjaGl2ZWQnKSB7XG4gICAgICAgICAgICBwcm9qZWN0cy5wdXNoKEpTT04ucGFyc2UoKF9hID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vcmVuZGVyIHNhbXBsZSB0b2Rvc1xuICAgIGNvbnN0IHNhbXBsZVByb2plY3QgPSBKU09OLnBhcnNlKChfYSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdTYW1wbGUgUHJvamVjdCcpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJyk7XG4gICAgKDAsIGFkZFRvZG9zVG9Db250ZW50XzEuYWRkVG9kb3NUb0NvbnRlbnQpKHNhbXBsZVByb2plY3QpO1xuICAgIC8vcmVuZGVyIHJlc3Qgb2YgcHJvamVjdHMgaW4gc3RvcmFnZVxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgKDAsIGFkZFByb2plY3RUb1NpZGViYXJfMS5hZGRQcm9qZWN0VG9TaWRlYmFyKShwcm9qZWN0LnByb2plY3QucHJvamVjdE5hbWUsIHByb2plY3QucHJvamVjdC5wcm9qZWN0Q29sb3VyKTtcbiAgICAgICAgKDAsIGFkZFRvZG9zVG9Db250ZW50XzEuYWRkVG9kb3NUb0NvbnRlbnQpKHByb2plY3QpO1xuICAgIH0pO1xufTtcbmV4cG9ydHMucHJvamVjdHNBbmRUb2Rvc09ubG9hZCA9IHByb2plY3RzQW5kVG9kb3NPbmxvYWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3RvcmVQcm9qZWN0QW5kVG9kb3NGdWxsID0gdm9pZCAwO1xuY29uc3Qgc3RvcmVQcm9qZWN0QW5kVG9kb3NGdWxsID0gZnVuY3Rpb24gKHByb2plY3RBbmRUb2Rvc18pIHtcbiAgICB2YXIgX2E7XG4gICAgbGV0IHRvZG9FeGlzdHNGbGFnID0gZmFsc2U7XG4gICAgY29uc3QgY3VycmVudFByb2pOYW1lID0gcHJvamVjdEFuZFRvZG9zXy5wcm9qZWN0LnByb2plY3ROYW1lO1xuICAgIGNvbnN0IGN1cnJlbnRUb2RvTmFtZSA9IHByb2plY3RBbmRUb2Rvc18udG9kb3NbMF0udG9kb05hbWU7XG4gICAgY29uc3QgY3VycmVudFRvZG9zID0gcHJvamVjdEFuZFRvZG9zXy50b2Rvc1swXTtcbiAgICBjb25zdCBzdG9yYWdlS2V5cyA9IG5ldyBTZXQoKTtcbiAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBzdG9yYWdlS2V5cy5hZGQoa2V5KTtcbiAgICB9KTtcbiAgICAvL25ldyBwcm9qZWN0XG4gICAgaWYgKCFzdG9yYWdlS2V5cy5oYXMoY3VycmVudFByb2pOYW1lKSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShjdXJyZW50UHJvak5hbWUsIEpTT04uc3RyaW5naWZ5KHByb2plY3RBbmRUb2Rvc18pKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vcHJvamVjdCBhbHJlYWR5IGV4aXN0c1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvalN0b3JhZ2UgPSBKU09OLnBhcnNlKChfYSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRQcm9qTmFtZSkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnKTtcbiAgICAgICAgY29uc3QgdG9kb05hbWVzU2V0ID0gbmV3IFNldCgpO1xuICAgICAgICBjdXJyZW50UHJvalN0b3JhZ2UudG9kb3MuZm9yRWFjaCgodG9kbykgPT4gdG9kb05hbWVzU2V0LmFkZCh0b2RvLnRvZG9OYW1lKSk7XG4gICAgICAgIC8vbmV3IHRvZG9OYW1lXG4gICAgICAgIGlmICghdG9kb05hbWVzU2V0LmhhcyhjdXJyZW50VG9kb05hbWUpKSB7XG4gICAgICAgICAgICBjdXJyZW50UHJvalN0b3JhZ2UudG9kb3MucHVzaChjdXJyZW50VG9kb3MpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY3VycmVudFByb2pOYW1lLCBKU09OLnN0cmluZ2lmeShjdXJyZW50UHJvalN0b3JhZ2UpKTtcbiAgICAgICAgICAgIHRvZG9FeGlzdHNGbGFnID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gdG9kb0V4aXN0c0ZsYWc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvL3RvZG9OYW1lIHRha2VuXG4gICAgICAgICAgICBhbGVydChgJHtjdXJyZW50VG9kb05hbWV9IGFscmVhZHkgZXhpc3RzIGFzIGEgdG9kbyAo772h4oCizIHvuL/igKLMgO+9oSkgIFBsZWFzZSBjaG9vc2UgYW5vdGhlciBuYW1lLmApO1xuICAgICAgICAgICAgdG9kb0V4aXN0c0ZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRvZG9FeGlzdHNGbGFnO1xuICAgICAgICB9XG4gICAgfVxufTtcbmV4cG9ydHMuc3RvcmVQcm9qZWN0QW5kVG9kb3NGdWxsID0gc3RvcmVQcm9qZWN0QW5kVG9kb3NGdWxsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0b3JlU2FtcGxlUHJvamVjdCA9IHZvaWQgMDtcbmNvbnN0IHN0b3JlU2FtcGxlUHJvamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIC8vcmV0dXJucyBkYXRlIG9uZSB5ZWFyIGZyb20gY3VycmVudFxuICAgIGNvbnN0IHNhbXBsZUxvd0R1ZURhdGUgPSAobm93KSA9PiB7XG4gICAgICAgIGxldCBkYXkgPSBub3cuZ2V0RGF0ZSgpO1xuICAgICAgICBsZXQgbW9udGggPSBub3cuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgIGNvbnN0IHllYXIgPSBub3cuZ2V0RnVsbFllYXIoKSArIDE7XG4gICAgICAgIHJldHVybiBgJHt5ZWFyfS0ke21vbnRoIDwgMTAgPyAnMCcgKyBtb250aCA6IG1vbnRofS0ke2RheSA8IDEwID8gJzAnICsgZGF5IDogZGF5fWA7XG4gICAgfTtcbiAgICAvL3JldHVybnMgZGF0ZSBvbmUgbW9udGggZnJvbSBjdXJyZW50XG4gICAgY29uc3Qgc2FtcGxlTWVkRHVlRGF0ZSA9IChub3cpID0+IHtcbiAgICAgICAgbGV0IG1vbnRoID0gbm93LmdldE1vbnRoKCk7XG4gICAgICAgIG1vbnRoID0gbW9udGggPD0gMTAgPyBtb250aCArIDEgOiBtb250aDtcbiAgICAgICAgbW9udGggPSBtb250aCArIDE7XG4gICAgICAgIHJldHVybiBgJHtub3cuZ2V0RnVsbFllYXIoKX0tJHttb250aCA8IDEwID8gJzAnICsgbW9udGggOiBtb250aH0tJHtub3cuZ2V0RGF0ZSgpIDwgMTAgPyAnMCcgKyBub3cuZ2V0RGF0ZSgpIDogbm93LmdldERhdGUoKX1gO1xuICAgIH07XG4gICAgLy9yZXR1cm5zIGRhdGUgb25lIGRheSBmcm9tIGN1cnJlbnRcbiAgICBjb25zdCBzYW1wbGVVcmdlbnREdWVEYXRlID0gKG5vdykgPT4ge1xuICAgICAgICBsZXQgZGF5ID0gbm93LmdldERhdGUoKTtcbiAgICAgICAgZGF5ID0gZGF5IDw9IDI2ID8gZGF5ICsgMiA6IGRheTtcbiAgICAgICAgbGV0IG1vbnRoID0gbm93LmdldE1vbnRoKCkgKyAxO1xuICAgICAgICByZXR1cm4gYCR7bm93LmdldEZ1bGxZZWFyKCl9LSR7bW9udGggPCAxMCA/ICcwJyArIG1vbnRoIDogbW9udGh9LSR7ZGF5IDwgMTAgPyAnMCcgKyBkYXkgOiBkYXl9YDtcbiAgICB9O1xuICAgIGNvbnN0IHNhbXBsZVByb2plY3QgPSB7XG4gICAgICAgIHByb2plY3Q6IFxuICAgICAgICAvL3NhbXBsZSBwcm9qZWN0IHRvIGRpc3BsYXkgaW5pdGlhbGx5XG4gICAgICAgIHsgcHJvamVjdE5hbWU6ICdTYW1wbGUgUHJvamVjdCcsIHByb2plY3RDb2xvdXI6ICcjNDhkMWNjJyB9LFxuICAgICAgICB0b2RvczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRvZG9OYW1lOiBgRmluaXNoICdUaGUgRmFkZWQgU3VuOiBLZXNyaXRoJ2AsXG4gICAgICAgICAgICAgICAgdG9kb0Rlc2NyaXB0aW9uOiBgRmluaXNoIHJlYWRpbmcgdGhlIGJvb2sgLSByZXR1cm4gJHtub3cuZ2V0RGF0ZSgpID4gMjYgPyAndG9kYXknIDogJ2RheSBhZnRlciB0b21vcnJvdyd9IWAsXG4gICAgICAgICAgICAgICAgdG9kb0R1ZURhdGU6IGAke3NhbXBsZVVyZ2VudER1ZURhdGUobm93KX1gLFxuICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eTogJ3VyZ2VudCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRvZG9OYW1lOiAnVmV0IEFwcG9pbnRtZW50JyxcbiAgICAgICAgICAgICAgICB0b2RvRGVzY3JpcHRpb246ICdUYWtlIE5pZ2h0ZXllcyB0byB0aGUgdmV0IGZvciByb3V0aW5lIGNoZWNrdXAnLFxuICAgICAgICAgICAgICAgIHRvZG9EdWVEYXRlOiBgJHtzYW1wbGVNZWREdWVEYXRlKG5vdyl9YCxcbiAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHk6ICdtZWRpdW0nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0b2RvTmFtZTogJ0JhY2twYWNraW5nIHRyaXAgdG8gTmVwYWwnLFxuICAgICAgICAgICAgICAgIHRvZG9EZXNjcmlwdGlvbjogJ1BsYW4gcm91dGUsIHN1cHBsaWVzIGFuZCBhcHBseSBmb3IgdmlzYScsXG4gICAgICAgICAgICAgICAgdG9kb0R1ZURhdGU6IGAke3NhbXBsZUxvd0R1ZURhdGUobm93KX1gLFxuICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eTogJ2xvdycsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH07XG4gICAgLy9vbiBmaXJzdCBsb2FkIG9ubHlcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKHNhbXBsZVByb2plY3QucHJvamVjdC5wcm9qZWN0TmFtZSkpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc2FtcGxlUHJvamVjdC5wcm9qZWN0LnByb2plY3ROYW1lLCBKU09OLnN0cmluZ2lmeShzYW1wbGVQcm9qZWN0KSk7XG4gICAgfVxufTtcbmV4cG9ydHMuc3RvcmVTYW1wbGVQcm9qZWN0ID0gc3RvcmVTYW1wbGVQcm9qZWN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNpZGViYXIgPSB2b2lkIDA7XG5jb25zdCBlbGVtZW50X2NyZWF0b3JzXzEgPSByZXF1aXJlKFwiLi4vZWxlbWVudC1jcmVhdG9yc1wiKTtcbmNvbnN0IGhhbmRsZUFkZE5ld1Byb2plY3RJY29uQ2xpY2tfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVBZGROZXdQcm9qZWN0SWNvbkNsaWNrXCIpO1xuY29uc3QgaGFuZGxlQWRkTmV3VG9kb0ljb25DbGlja18xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZUFkZE5ld1RvZG9JY29uQ2xpY2tcIik7XG5jb25zdCBoYW5kbGVBcmNoaXZlZFRhYkNsaWNrXzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlQXJjaGl2ZWRUYWJDbGlja1wiKTtcbmNvbnN0IGhhbmRsZVVwY29taW5nVGFiQ2xpY2tfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVVcGNvbWluZ1RhYkNsaWNrXCIpO1xuY29uc3QgaGFuZGxlVG9kYXlUYWJDbGlja18xID0gcmVxdWlyZShcIi4uL2V2ZW50Q0JzL2hhbmRsZVRvZGF5VGFiQ2xpY2tcIik7XG5jb25zdCBoYW5kbGVQcm9qZWN0c1RhYkNsaWNrXzEgPSByZXF1aXJlKFwiLi4vZXZlbnRDQnMvaGFuZGxlUHJvamVjdHNUYWJDbGlja1wiKTtcbmNvbnN0IGhhbmRsZUNyZWF0ZWRUYWJzQ2xpY2tfMSA9IHJlcXVpcmUoXCIuLi9ldmVudENCcy9oYW5kbGVDcmVhdGVkVGFic0NsaWNrXCIpO1xuY29uc3Qgc2lkZWJhciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKTtcbiAgICBjb25zdCBzaWRlYmFyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnc2lkZWJhciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkocm9vdCkoc2lkZWJhcik7XG4gICAgY29uc3QgdG9kYXlDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydzaWRlYmFyLXRhYicsICdjb250YWluZXItdG9kYXknXSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ2NsaWNrJykoaGFuZGxlVG9kYXlUYWJDbGlja18xLmhhbmRsZVRvZGF5VGFiQ2xpY2spKHRvZGF5Q29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2lkZWJhcikodG9kYXlDb250YWluZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEucGlwZSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnVG9kYXknKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHRvZGF5Q29udGFpbmVyKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2g0JykoWyd0YWItdGV4dCcsICd0b2RheS10YWInXSkpO1xuICAgIGNvbnN0IHVwY29taW5nQ29udGFpbmVyID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsnc2lkZWJhci10YWInLCAnY29udGFpbmVyLXVwY29taW5nJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkRXZ0TGlzdGVuZXIpKCdjbGljaycpKGhhbmRsZVVwY29taW5nVGFiQ2xpY2tfMS5oYW5kbGVVcGNvbWluZ1RhYkNsaWNrKSh1cGNvbWluZ0NvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hcHBlbmRFbGVtVG9QYXJlbnQpKHNpZGViYXIpKHVwY29taW5nQ29udGFpbmVyKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ1VwY29taW5nJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KSh1cGNvbWluZ0NvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdoNCcpKFsndGFiLXRleHQnLCAndGFiLXVwY29taW5nJ10pKTtcbiAgICBjb25zdCBhcmNoaXZlZENvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3NpZGViYXItdGFiJywgJ2NvbnRhaW5lci1hcmNoaXZlZCddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVBcmNoaXZlZFRhYkNsaWNrXzEuaGFuZGxlQXJjaGl2ZWRUYWJDbGljaykoYXJjaGl2ZWRDb250YWluZXIpO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzaWRlYmFyKShhcmNoaXZlZENvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdBcmNoaXZlZCcpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoYXJjaGl2ZWRDb250YWluZXIpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaDQnKShbJ3RhYi10ZXh0JywgJ3RhYi1hcmNoaXZlZCddKSk7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnZGl2JykoWydzaWRlYmFyLWhlYWRpbmcnLCAnY29udGFpbmVyLXByb2plY3RzJ10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShzaWRlYmFyKShwcm9qZWN0c0NvbnRhaW5lcik7XG4gICAgY29uc3QgcHJvamVjdHNIZWFkaW5nID0gKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2RpdicpKFsncHJvamVjdEhlYWRpbmctd3JhcHBlciddKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkocHJvamVjdHNDb250YWluZXIpKHByb2plY3RzSGVhZGluZyk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEV2dExpc3RlbmVyKSgnY2xpY2snKShoYW5kbGVQcm9qZWN0c1RhYkNsaWNrXzEuaGFuZGxlUHJvamVjdHNUYWJDbGljayksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJ1Byb2plY3RzJyksICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShwcm9qZWN0c0hlYWRpbmcpKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmVsZW1DcmVhdG9yKSgnaDMnKShbJ2hlYWRpbmctdGV4dCcsICd0ZXh0LXByb2plY3RzJ10pKTtcbiAgICAoMCwgZWxlbWVudF9jcmVhdG9yc18xLnBpcGUpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYWRkVGV4dFRvRWxlbSkoJysnKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ2NsaWNrJykoaGFuZGxlQWRkTmV3UHJvamVjdEljb25DbGlja18xLmhhbmRsZUFkZE5ld1Byb2plY3RJY29uQ2xpY2spLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkocHJvamVjdHNIZWFkaW5nKSkoKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5lbGVtQ3JlYXRvcikoJ2J1dHRvbicpKFsnYnR0bicsICdidHRuLXByb2plY3RNb2RhbCddKSk7XG4gICAgY29uc3Qgc2FtcGxlUHJvamVjdENvbnRhaW5lciA9ICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdkaXYnKShbJ3NpZGViYXItcHJvamVjdCcsICdwcm9qZWN0J10pO1xuICAgICgwLCBlbGVtZW50X2NyZWF0b3JzXzEuYXBwZW5kRWxlbVRvUGFyZW50KShwcm9qZWN0c0NvbnRhaW5lcikoc2FtcGxlUHJvamVjdENvbnRhaW5lcik7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFN0eWxlVG9FbGVtKShbWydjb2xvcicsICcjNDhkMWNjJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ2NsaWNrJykoaGFuZGxlQ3JlYXRlZFRhYnNDbGlja18xLmhhbmRsZUNyZWF0ZWRUYWJzQ2xpY2spLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFRleHRUb0VsZW0pKCdTYW1wbGUgUHJvamVjdCcpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2FtcGxlUHJvamVjdENvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdoNCcpKFsncHJvamVjdC10ZXh0JywgJ3RleHQtc2FtcGxlUHJvamVjdCddKSk7XG4gICAgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5waXBlKSgoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZFN0eWxlVG9FbGVtKShbWydjb2xvcicsICcjNDhkMWNjJ11dKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRUZXh0VG9FbGVtKSgnKycpLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFkZEF0dHJpYnV0ZVRvRWxlbSkoW1xuICAgICAgICBbJ2RhdGEtbmFtZScsIGBTYW1wbGUgUHJvamVjdGBdLFxuICAgICAgICBbJ2RhdGEtY29sb3VyJywgJyM0OGQxY2MnXSxcbiAgICBdKSwgKDAsIGVsZW1lbnRfY3JlYXRvcnNfMS5hZGRFdnRMaXN0ZW5lcikoJ2NsaWNrJykoaGFuZGxlQWRkTmV3VG9kb0ljb25DbGlja18xLmhhbmRsZUFkZE5ld1RvZG9JY29uQ2xpY2spLCAoMCwgZWxlbWVudF9jcmVhdG9yc18xLmFwcGVuZEVsZW1Ub1BhcmVudCkoc2FtcGxlUHJvamVjdENvbnRhaW5lcikpKCgwLCBlbGVtZW50X2NyZWF0b3JzXzEuZWxlbUNyZWF0b3IpKCdidXR0b24nKShbJ2J0dG4nLCAnYnR0bi10b2RvTW9kYWwnXSkpO1xufTtcbmV4cG9ydHMuc2lkZWJhciA9IHNpZGViYXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5yZXF1aXJlKFwiLi9pbmRleC5jc3NcIik7XG5jb25zdCBjb250ZW50XzEgPSByZXF1aXJlKFwiLi90cy9jb250ZW50L2NvbnRlbnRcIik7XG5jb25zdCBoZWFkZXJfMSA9IHJlcXVpcmUoXCIuL3RzL2hlYWRlci9oZWFkZXJcIik7XG5jb25zdCBzaWRlYmFyXzEgPSByZXF1aXJlKFwiLi90cy9zaWRlYmFyL3NpZGViYXJcIik7XG5jb25zdCBwcm9qZWN0c0FuZFRvZG9zT25sb2FkXzEgPSByZXF1aXJlKFwiLi90cy9wcm9qZWN0c0FuZFRvZG9zL3Byb2plY3RzQW5kVG9kb3NPbmxvYWRcIik7XG5jb25zdCBzdG9yZVNhbXBsZVByb2plY3RfMSA9IHJlcXVpcmUoXCIuL3RzL3Byb2plY3RzQW5kVG9kb3Mvc3RvcmVTYW1wbGVQcm9qZWN0XCIpO1xuY29uc3QgYXJjaGl2ZUV4cGlyZWRUb2Rvc18xID0gcmVxdWlyZShcIi4vdHMvcHJvamVjdHNBbmRUb2Rvcy9hcmNoaXZlRXhwaXJlZFRvZG9zXCIpO1xuY29uc3QgbWFpbkFwcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAoMCwgaGVhZGVyXzEuaGVhZGVyKSgpO1xuICAgICgwLCBzaWRlYmFyXzEuc2lkZWJhcikoKTtcbiAgICAoMCwgY29udGVudF8xLmNvbnRlbnQpKCk7XG4gICAgKDAsIHN0b3JlU2FtcGxlUHJvamVjdF8xLnN0b3JlU2FtcGxlUHJvamVjdCkoKTtcbiAgICAoMCwgYXJjaGl2ZUV4cGlyZWRUb2Rvc18xLmFyY2hpdmVFeHBpcmVkVG9kb3MpKCk7XG4gICAgLy9ydW5zIG9uIGV2ZXJ5IHJlZnJlc2hcbiAgICBzZWxmLm9ubG9hZCA9IHByb2plY3RzQW5kVG9kb3NPbmxvYWRfMS5wcm9qZWN0c0FuZFRvZG9zT25sb2FkO1xufTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBtYWluQXBwKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==