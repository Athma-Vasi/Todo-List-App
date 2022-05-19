const storeProjects = function (formName_: string, formColour_: string) {
	localStorage.setItem(formName_, JSON.stringify([formName_, formColour_]))
}

export { storeProjects }
