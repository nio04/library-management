import * as helper from "../helper";
import * as comp from "../component";
import * as bookContent from "../bookContent";

const parent = document.querySelector(".upload-book-container");
let title;
let authorName;
let genre;
let language;
let releaseYear;
let releaseVserion;
let popularity;
let pages;
let licenseY;
let licenseN;
let authorBio;
let publicationLink;
let publicationName;
let quantity;
let img;
const formUploadBtn = document.querySelector("#form-upload");

function uploadBookControl(ev) {
	ev.preventDefault();

	// RETURN, IF THE SUBMIT BTN IS FROM ANOTHER FORM
	if (ev.target.id !== "form-upload") return;

	// ON SUBMIT, GET VALUE OF INPUT'S
	getInputValue();

	// VALIDATE ALL THE NAMINGS
	const validateResult = validateNaming();

	// RENDER [SUCCESS, ERROR] MESSAGE IN UI
	renderSubmitResultModal(ev, validateResult);

	// IF [VALIDATE-RESULT] TRUE,
	// THERE IS SOMETHING WRONG. THEN
	// WE IMMIDIATELY RETURN
	if (!validateResult) return;

	// compute - Book IMAGE - src
	let imgUrl = img.files[0]?.name;
	// COMPUUTE BOOK-LICENSE
	let GNUlicense = licenseY === true ? true : false;

	bookContent.newBook.push({
		id: crypto.randomUUID(),
		title,
		authorName,
		genre,
		language,
		releaseYear,
		releaseVserion,
		popularity,
		pages,
		GNUlicense,
		authorBio,
		publicationLink,
		publicationName,
		quantity,
		imgUrl,
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
	authorName = document.querySelector("#book-author__input").value;
	genre = document.querySelector("#book-genre__input").value;
	language = document.querySelector("#book-language__input").value;
	releaseYear = document.querySelector("#book-release__input").value;
	releaseVserion = document.querySelector(
		"#book-release-version__input"
	).value;
	popularity = document.querySelector("#book-popularity__input").value;
	pages = document.querySelector("#book-page__input").value;
	licenseY = document.querySelector("#book-license__y").checked;
	licenseN = document.querySelector("#book-license__n").checked;
	authorBio = document.querySelector("#book-author-bio__input").value;
	publicationLink = document.querySelector(
		"#book-publication-link__input"
	).value;
	publicationName = document.querySelector(
		"#book-publication-name__input"
	).value;
	quantity = document.querySelector("#book-quantity__input").value;
	img = document.querySelector("#book-image__input");
};

function validateNaming() {
	// IF NULL > REGEX MATCHING FAILS!
	const result = [];
	let flag = true;
	const regexNaming = /^[a-z]+[\sa-z]*$/gi;
	const regexGenre = /^[a-z]+[,\sa-z]*$/gi;
	const regexNumber = /^(?:[1-9]\d{0,3}|1000)$/g;
	const regexLink = /^https:\/\/www\.\w+\.com$/gi;

	result.push(title.match(regexNaming));
	result.push(authorName.match(regexNaming));
	result.push(genre.match(regexGenre));
	result.push(language.match(regexNaming));
	result.push(releaseYear.match(regexNumber));
	result.push(releaseVserion.match(regexNumber));
	result.push(popularity.match(regexNumber));
	result.push(pages.match(regexNumber));
	result.push(authorBio.match(regexLink));
	result.push(publicationLink.match(regexLink));
	result.push(publicationName.match(regexNaming));
	result.push(quantity.match(regexNumber));
	if (licenseY === false && licenseN === false) flag = false;

	result.flat().forEach((res) => {
		if (res === null) flag = false;
	});

	return flag;
}

const renderSubmitResultModal = (ev, validateResult) => {
	if (ev.target.closest(".upload-book-container") && !validateResult)
		comp.showModal(
			parent,
			`There might be something wrong with your input... Please check your input.`
		);
	else if (ev.target.closest(".upload-book-container") && validateResult)
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
