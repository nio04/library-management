import * as helper from "./helper";

const container = document.querySelector(".container");
const overlay = document.querySelector(".overlay");
const spinner = document.querySelector(".spinner");
const tooltip = document.querySelector(".tool-tip__book-upload");

// Render Functions
export function render(parent, markup) {
	parent.innerHTML = markup;
}

export function renderSibling(parent, markup) {
	parent.insertAdjacentHTML("afterend", markup);
}

export function renderChildren(parent, markup, position = "beforeend") {
	parent.insertAdjacentHTML(position, markup);
}

// Modal Functions
export function showModal(parent, className, message = "") {
	generateModalMarkup(parent, className, message);
	overlay.classList.remove("overlay-off");
	// document.querySelector(".modal__message").textContent = message;
}

export function hideModal() {
	document.querySelector(".modal").remove();
	overlay.classList.add("overlay-off");
}

function generateModalMarkup(parent, className, message) {
	const markup = `
        <div class="modal ${className}">
            <p class="modal__message">${message}</p>
            <button class="btn modal__btn">OK, I UNDERSTAND</button>
        </div>`;
	parent.insertAdjacentHTML("afterbegin", markup);
}

// Spinner Functions
export function showSpinner(ev) {
	if (!ev?.target.classList.contains("navigator__link")) return;
	helper.hideEl(container);
	helper.showEl(spinner);
}

export function hideSpinner() {
	helper.showEl(container);
	helper.hideEl(spinner);
}

// Utility Functions
export function setCustomTitle(userInput) {
	document.title = userInput;
}

export function hideAllSections() {
	const sections = [
		".library-management",
		".view-books",
		".search-books",
		".upload-book",
		".search-online",
		".issue-book",
		".contributor-section",
	];
	sections.forEach((section) =>
		helper.hideEl(document.querySelector(section))
	);
}

// Tooltip Functions
tooltip.addEventListener("mouseenter", () => {
	const markup = `
        <section class="tool-tip">
            <p class="tool-tip__message">fetch random online book image from unspalsh api!</p>
        </section>`;
	document
		.querySelector("#random-photo__label")
		.insertAdjacentHTML("beforeend", markup);
});

tooltip.addEventListener("mouseleave", () => {
	setTimeout(() => {
		helper.removeEl(
			document.querySelector("#random-photo__label .tool-tip")
		);
	}, 1200);
});

// Book Rendering Function
export function renderBookMarkup(parent, books = []) {
	const markup = books
		.map(
			(book) => `
        <li class="book__item">
            <section class="img">
                <img src="${book?.imgUrl}" alt="${book.title}" />
            </section>
            <section class="book__item__description">
                <p class="item__quantity">${book.quantity}</p>
                <h3 class="item__title">${book.title}</h3>
                <p class="item__genere">${book.genre}</p>
                <h6 class="item__author-name">${book.authorName}</h6>
            </section>
        </li>`
		)
		.join("");

	parent.innerHTML = markup;
}

// Next Icon Generation Function
export function nextIcon() {
	const nextIcon = new URL("../asset/icons/next.svg", import.meta.url)
		.href;
	const img = document.createElement("img");
	img.src = nextIcon;
	img.alt = "logo";
	return img;
}
