import { hideEl, showEl, manageOverlay } from "./helper";
import * as bootstrap from "./view/bootstrapView";

const container = document.querySelector(".container");
const spinner = document.querySelector(".spinner");

// Render Functions
export function render(parent, markup) {
	parent.innerHTML = markup;
}

export function renderSibling(parent, markup) {
	parent.insertAdjacentHTML("afterend", markup);
}

export function renderChildren(
	parent,
	markup,
	position = "beforeend"
) {
	parent.insertAdjacentHTML(position, markup);
}

// Modal Functions
export function showModal(parent, title, message = "") {
	generateModalMarkup(parent, title, message);
	bootstrap.createModalInstance();
	// bootstrap.modalShow();
}

export function hideModal() {
	document.querySelector(".book-modal")?.remove();
	manageOverlay();
}

// function generateModalMarkup(parent, className, message) {
// 	const markup = `
//         <div class="modal ${className}">
//             <p class="modal__message">${message}</p>
//             <button class="btn modal__btn">OK, I UNDERSTAND</button>
//         </div>`;
// 	parent.insertAdjacentHTML("afterbegin", markup);
// }
function generateModalMarkup(parent, title, message) {
	const markup = `
		<div class="modal fade" id="my-modal" tabindex="-1" 	aria-labelledby="exampleModalLabel" aria-hidden="true">
	  <div class="modal-dialog modal-dialog-centered modal-lg">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h1 class="modal-title" id="exampleModalLabel">${title}</h1>
	        <button type="button" class="btn-close" data-bs-dismiss="modal" 	aria-label="Close"></button>
	      </div>
	      <div class="modal-body">
	        ${message}
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-secondary" 	data-bs-dismiss="modal">Close</button>
	       </div>
	    </div>
	  </div>
	</div>`;

	parent.insertAdjacentHTML("afterbegin", markup);
}

// Spinner Functions
export function showSpinner(ev) {
	if (!ev?.target.classList.contains("navigator__link")) return;
	hideEl(container);
	showEl(spinner);
}

export function hideSpinner() {
	showEl(container);
	hideEl(spinner);
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
		hideEl(document.querySelector(section))
	);
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

// Book Rendering Function
export function renderBookMarkup(parent, books = []) {
	const markup = books
		.map(
			(book) => `
        <li class="book__item" id="${book.id}">
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
