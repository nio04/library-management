import * as helper from "../helper";
import * as comp from "../component";
import * as bookContent from "../bookContent";

const parent = document.querySelector(".upload-book-container");
let title;
let img;
let authorName;
let genre;
let quantity;
const formUploadBtn = document.querySelector("#form-upload");

function uploadBookControl(ev) {
	ev.preventDefault();

	// RETURN, IF THE SUBMIT BTN IS FROM ANOTHER FORM
	if (ev.target.id !== "form-upload") return;

	// ON SUBMIT, GET VALUE OF INPUT'S
	getInputValue();

	// VALIDATE ALL THE NAMINGS
	const validateResult = validateNaming(
		title,
		authorName,
		quantity,
		genre
	);

	// RENDER [SUCCESS, ERROR] MESSAGE IN UI
	renderSubmitResultModal(ev, validateResult);

	// IF [VALIDATE-RESULT] TRUE,
	// THERE IS SOMETHING WRONG. THEN
	// WE IMMIDIATELY RETURN
	if (validateResult) return;

	// compute - Book IMAGE - src
	let imgUrl = img.files[0]?.name;

	bookContent.newBook.push({
		id: crypto.randomUUID(),
		title,
		imgUrl,
		authorName,
		genre,
		quantity,
	});

	// RENDER NEW BOOKS IN UI
	comp.renderBookMarkup(
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
	const [title, authorName, quantity, genre] = names;

	const regex = /[-\[\]\(\);:'"\/!@#$%^&*()_+?/\\><.=]{1,}/gi;

	// BOOK TITLE CHECKING
	if (
		title.length === 0 ||
		title.length < 3 ||
		title.length > 16 ||
		regex.test(title)
	)
		return true;

	// AUTHOR-NAME CHECK
	if (
		authorName.length === 0 ||
		authorName.length < 3 ||
		authorName.length > 16 ||
		regex.test(authorName)
	)
		return true;

	// Quantity CHECK
	if (
		quantity.length === 0 ||
		Number(quantity) < 1 ||
		Number(quantity) > 1000 ||
		regex.test(quantity)
	)
		return true;

	// GENRE CHECKER
	if (genre.length === 0 || regex.test(genre)) return true;
};

const renderSubmitResultModal = (ev, validateResult) => {
	if (ev.target.closest(".upload-book-container") && validateResult)
		comp.showModal(
			parent,
			`There might be something wrong with your input... Please check your input.`
		);
	else if (ev.target.closest(".upload-book-container") && !validateResult)
		comp.showModal(
			parent,
			`Congratulation! You have successfully added a new books the library collection.`
		);
};

// CLICK EVENT
document.addEventListener("click", (ev) => {
	if (ev.target.classList.contains("modal__btn")) comp.hideModal();
	else if (ev.target.classList.contains("overlay")) comp.hideModal();
});

// FORM SUBMT EVENT
formUploadBtn.addEventListener("click", uploadBookControl);
export default uploadBookControl;
