const handleInvalidProjName = function (this: HTMLInputElement, ev: InputEvent) {
	if (this.value === '') this.setCustomValidity('Please enter a project name!')
	else
		this.setCustomValidity(
			'Project names can only contain upper and lowercase letters. Please try again!'
		)
}
export { handleInvalidProjName }
