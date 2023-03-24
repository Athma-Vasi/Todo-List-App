const handleProjNameValidation = function (this: HTMLInputElement, ev: InputEvent) {
	//to avoid input registering as invalid, if a custom validity was previously set, when input contains valid value upon submission
	this.setCustomValidity('');
	this.checkValidity();
};
export { handleProjNameValidation };
