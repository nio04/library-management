import * as bookContent from "../bookContent";
import * as helper from "../helper";

const parent = document.querySelector(".upload-book-container");
const form = document.querySelector("#book-form__upload");
let title;
let img;
let authorName;
let genre;
let quantity;

function uploadBookControl(ev) {
	ev.preventDefault();

	// RETURN, IF THE SUBMIT BTN IS FROM ANOTHER FORM
	if (ev.target.id !== "book-form__upload") return;

	// ON SUBMIT, GET VALUE OF INPUT'S
	getInputValue();

	// VALIDATE ALL THE NAMING
	const validateResult = validateNaming(title, authorName, quantity);

	// RENDER [SUCCESS, ERROR] MESSAGE IN UI
	renderSubmitResultModal(ev, validateResult);

	// IF [VALIDATE-RESULT] TRUE MEANS,
	// THERE IS SOMETHING WRONG, SO,
	// WE IMMIDIATELY RETURN
	if (validateResult) return;

	// compute - Book IMAGE - src
	const imgUrl = img.files[0]?.name;

	bookContent.newBook.push({
		id: crypto.randomUUID(),
		title,
		imgUrl,
		authorName,
		genre,
		quantity,
	});

	// RENDER BOOKS IN UI
	helper.renderBookMarkup(
		document.querySelector(
			".view-books-offline__custom #viewbooks__offline__section"
		),
		bookContent.bookLists.newBook
	);
}

const getInputValue = () => {
	title = document.querySelector("#book-name__input").value;
	img = document.querySelector("#book-image__input");
	authorName = document.querySelector("#book-author__input").value;
	genre = document.querySelector("#book-genre__input").value;
	quantity = document.querySelector("#book-quantity__input").value;
};

// VALIDATE NAMING
const validateNaming = (...names) => {
	const regex = /[-\[\]\(\);:'"\/!@#$%^&*()_+?/\\><.,=]{1,}/gi;

	const result = names.map((name) => regex.test(name));

	return result.includes(true);
};

const renderSubmitResultModal = (ev, validateResult) => {
	if (ev.target.closest(".upload-book-container") && validateResult)
		helper.showModal(
			parent,
			`There might be something wrong with your input... Please check your input.`
		);
	else if (ev.target.closest(".upload-book-container") && !validateResult)
		helper.showModal(
			parent,
			`Congratulation! You have successfully added a new books the library collection.`
		);
};

// CLICK EVENT
document.addEventListener("click", (ev) => {
	if (ev.target.classList.contains("modal__btn")) helper.hideModal();
	else if (ev.target.classList.contains("overlay")) helper.hideModal();
});

// FORM SUBMT EVENT
document.addEventListener("submit", uploadBookControl);
export default uploadBookControl;
