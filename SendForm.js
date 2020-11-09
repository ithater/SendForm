export default class SendForm {
	constructor({
		formId,
		submit
	}) {
		this.form = document.getElementById(formId);
		this.submit = submit;
	}

	init() {
		this.form.addEventListener('submit', this.submit);
	}
}
