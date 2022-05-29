const handleTodoNameValidation = function (this: HTMLInputElement, ev: InputEvent) {
	this.setCustomValidity('')
	this.checkValidity()
}
export { handleTodoNameValidation }
