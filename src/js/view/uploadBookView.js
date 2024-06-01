import * as comp from "../component";
import * as helper from "../helper";
import * as bookContent from "../bookContent";
import * as localstorage from "./localstorageView";
import { onlineImg } from "./libraryView";

const parent = document.querySelector(".upload-book-container");

let title,
	authorName,
	genre,
	language,
	releaseYear,
	releaseVserion,
	popularity,
	pages,
	// licenseY,
	// licenseN,
	authorBio,
	publicationLink,
	publicationName,
	quantity,
	img,
	imgUrl;
let localImage = "off";

const formUploadBtn = document.querySelector("#form-upload");

export default function uploadBookControl(ev) {
	ev.preventDefault();

	if (ev.target.id !== "form-upload") return;

	getInputValue();

	const validateResult = validateNaming();

	renderSubmitResultModal(ev, validateResult);

	if (!validateResult) return;

	imgUrl = localImage === "on" ? img.files[0].name : onlineImg;

	const newBook = {
		id: crypto.randomUUID(),
		customBook: true,
		title,
		authorName,
		genre,
		language,
		releaseYear,
		releaseVserion,
		popularity,
		pages,
		// GNUlicense: licenseY === true,
		authorBio,
		publicationLink,
		publicationName,
		quantity,
		imgUrl,
	};

	bookContent.newBook.push(newBook);
	localstorage.setStorage(newBook);

	// Clear the URL form data
	history.pushState({}, document.title, window.location.pathname);
}

function getInputValue() {
	title = document.querySelector("#book-name__input").value;
	authorName = document.querySelector("#book-author__input").value;
	genre = document.querySelector("#book-genre__input").value;
	language = document.querySelector("#book-language__input").value;
	releaseYear = document.querySelector("#book-release__input").value;
	releaseVserion = document.querySelector(
		"#book-release-version__input"
	).value;
	popularity = document.querySelector(
		"#book-popularity__input"
	).value;
	pages = document.querySelector("#book-page__input").value;
	// licenseY = document.querySelector("#book-license__y").checked;
	// licenseN = document.querySelector("#book-license__n").checked;
	authorBio = document.querySelector("#book-author-bio__input").value;
	publicationLink = document.querySelector(
		"#book-publication-link__input"
	).value;
	publicationName = document.querySelector(
		"#book-publication-name__input"
	).value;
	quantity = document.querySelector("#book-quantity__input").value;
	img = document.querySelector("#book-image__input");
}

function validateNaming() {
	const regexNaming = /^[a-z]+[\sa-z]*$/gi;
	const regexGenre = /^[a-z]+[,\sa-z]*$/gi;
	const regexNumber = /^(?:[1-9]\d{0,3}|1000)$/g;
	const regexLink = /^https:\/\/www\.\w+\.com$/gi;

	const result = [
		title.match(regexNaming),
		authorName.match(regexNaming),
		genre.match(regexGenre),
		language.match(regexNaming),
		releaseYear.match(regexNumber),
		releaseVserion.match(regexNumber),
		popularity.match(regexNumber),
		pages.match(regexNumber),
		authorBio.match(regexLink),
		publicationLink.match(regexLink),
		publicationName.match(regexNaming),
		quantity.match(regexNumber),
	];

	let flag = true;

	// if (!(licenseY || licenseN)) flag = false;

	result.flat().forEach((res) => {
		if (res === null) flag = false;
	});

	return flag;
}

function renderSubmitResultModal(ev, validateResult) {
	const message = validateResult
		? "Congratulation! You have successfully added a new book to the library collection."
		: "There might be something wrong with your input. Please check your input.";

	if (ev.target.closest(".upload-book-container")) {
		const type = validateResult ? "success upload" : "error upload";
		comp.showModal(parent, type, message);
	}
}

document.addEventListener("click", (ev) => {
	if (!ev.target.closest(".upload-book-container")) return;

	if (
		ev.target.closest(
			".modal .modal-dialog .modal-content .modal-footer button"
		) ||
		ev.target.classList.contains("overlay")
	) {
		// comp.hideModal();
		location.reload();
	}
	if (ev.target.id === "form-upload") uploadBookControl(ev);
});

// Check if random img or manual img
document
	.querySelector("section #random-photo")
	.addEventListener("change", (ev) => {
		const label = document.querySelector("#book-image__label");
		const fileInputEl = document.querySelector("#book-image__input");

		if (!ev.target.checked) {
			helper.removeEl(document.querySelector("#random-photo__label"));
			helper.removeEl(document.querySelector("#random-photo"));
			helper.removeClass(label, "hidden");
			helper.removeClass(fileInputEl, "hidden");
		}
	});

document
	.querySelector("#book-image__input")
	.addEventListener("change", (ev) => {
		localImage = "on";
		imgUrl = ev.target.files[0].name;
	});

// document.addEventListener("click", (ev) => {
// 	ev.preventDefault();

// 	if (!ev.target.closest(".upload-book-container")) return;

// 	const state = document.querySelector("#flexCheckDefault").checked;

// 	document.querySelector("#flexCheckDefault").checked = !state;
// 	console.log(ev.target, ev);
// });
