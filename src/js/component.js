import * as helper from "./helper";

const container = document.querySelector(".container");
const overlay = document.querySelector(".overlay");
const spinner = document.querySelector(".spinner");
const tooltip = document.querySelector(".tool-tip__book-upload");

// RENDER ON SCREEN
export function render(parent, markup) {
	parent.innerHTML = markup;
}

// RENDER AS SIBLING
export function renderSibling(parent, markup) {
	parent.insertAdjacentHTML("afterend", markup);
}

// RENDER AS CHILDREN
export function renderChildren(parent, markup) {
	parent.insertAdjacentHTML("beforeend", markup);
}

// SHOW MODAL
export function showModal(parent, message = "") {
	generateModalMarkup(parent);

	overlay.classList.remove("overlay-off");

	document.querySelector(".modal__message").textContent = message;
}

// HIDE MODAL
export function hideModal() {
	document.querySelector(".modal").remove();
	overlay.classList.add("overlay-off");
}

// GENERATING MODAL IN UI
function generateModalMarkup(parent) {
	const markup = `
	<div class="modal">
		<p class="modal__message"></p>
		<button class="btn modal__btn">OK, I UNDERSTAND</button>
	</div>`;

	parent.insertAdjacentHTML("afterbegin", markup);
}

// SHOW SPINNER
export function showSpinner(ev) {
	if (!ev?.target.classList.contains("navigator__link")) return;

	// HIDE CONTAINER
	helper.hideEl(container);

	// SHOW SPINNER
	helper.showEl(spinner);
}

// HIDE SPINNER
export function hideSpinner() {
	// SHOW CONTAINER
	helper.showEl(container);

	// HIDE SPINNER
	helper.hideEl(spinner);
}

// SET CUSTOM TITLE
export function setCustomTitle(userInput) {
	document.title = userInput;
}

// HIDE SECTION IN LIBRARY-MANAGEMENT PAGE
export function hideAllSections() {
	helper.hideEl(
		document.querySelector(".library-management"),
		document.querySelector(".view-books"),
		document.querySelector(".search-books"),
		document.querySelector(".upload-book"),
		document.querySelector(".search-online"),
		document.querySelector(".issue-book")
	);
}

// TOOL-TIP :HOVER
tooltip.addEventListener("mouseenter", () => {
	const markup = `
		<section class="tool-tip">
			<p class="tool-tip__message">fetch random online book image from unspalsh api!</p>
		</section>
		`;

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

// RENDER BOOKS FROM ARRAY OF OBJECT
export function renderBookMarkup(parent, books = []) {
	Array.isArray(books) ? books : [books];

	const markup = books
		.map((book) => {
			return `
				<li class="book__item">
					<section class="img">
						<img
						src="${book?.imgUrl}"
						alt="${book.title}" />
					</section>
					<section class="book__item__description">
						<p class="item__quantity">${book.quantity}</p>;
						<h3 class="item__title">${book.title}</h3>
						<p class="item__genere">
						${book.genre}
						</p>
						<h6 class="item__author-name">${book.authorName}</h6>
					</section>
				</li>
	`;
		})
		.join("");

	parent.innerHTML = markup;
}
