const handleTodoCheckboxComplete = function (this: HTMLInputElement) {
	this.parentElement?.parentElement?.remove()
}
export { handleTodoCheckboxComplete }
