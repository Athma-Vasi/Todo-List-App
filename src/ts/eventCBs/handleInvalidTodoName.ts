const handleInvalidTodoName = function (this: HTMLInputElement, ev: InputEvent) {
	if (this.value === '') this.setCustomValidity('Please enter a todo name')
	else
		this.setCustomValidity(
			'Todo names can only contain letters and numbers. Please try again!'
		)
}
export { handleInvalidTodoName }
