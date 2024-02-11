import * as helper from "../helper";

const modalMessage = document.querySelector(".modal__message");
let bookName;
let img;
let authorName;
let bookGenre;
let bookQuantity;

const customBooks = [];

function uploadBookControl(ev) {
	ev.preventDefault();

	// ON SUBMIT, GET VALUE OF INPUT'S
	getInputValue();

	// VALIDATE ALL THE NAMING
	const validateResult = validateNaming(
		bookName,
		authorName,
		bookQuantity
	);

	// RENDER [SUCCESS, ERROR] MESSAGE IN UI
	renderSubmitResultModal(validateResult);

	// IF [VALIDATE-RESULT] TRUE MEANS,
	// THERE IS SOMETHING WRONG, SO,
	// WE IMMIDIATELY RETURN
	if (validateResult) return;

	// compute - Book IMAGE - src
	const bookImg = img.files[0];

	return {
		id: crypto.randomUUID(),
		bookName,
		bookImg,
		authorName,
		bookGenre,
		bookQuantity,
	};
}

// console.log(customBooks);

const getInputValue = () => {
	bookName = document.querySelector("#book-name__input").value;
	img = document.querySelector("#book-image__input");
	authorName = document.querySelector("#book-author__input").value;
	bookGenre = document.querySelector("#book-genre__input").value;
	bookQuantity = document.querySelector("#book-quantity__input").value;
};

// VALIDATE NAMING
const validateNaming = (...names) => {
	const regex = /[-\[\]\(\);:'"\/!@#$%^&*()_+?/\\><.,=]{1,}/gi;

	const result = names.map((name) => regex.test(name));

	return result.includes(true);
};

const renderSubmitResultModal = (validateResult) => {
	const errorMessage = `There might be something wrong with your input...please check your input.`;
	const sccessMessage = `Congratulation! you have successfully added a new books the library collection`;

	helper.showModal();

	if (validateResult) modalMessage.textContent = errorMessage;
	else modalMessage.textContent = sccessMessage;
};

// CLICK EVENT
document.addEventListener("click", (ev) => {
	if (ev.target.classList.contains("modal__btn")) helper.hideModal();
	else if (ev.target.classList.contains("overlay")) helper.hideModal();
});

// FORM SUBMT EVENT
document.addEventListener("submit", uploadBookControl);
export default uploadBookControl;
