import icons from "url:../../asset/icons/sprite.svg";
import { removeEl } from "../helper";
import localStorageControl from "./localstorageView";
import { oldBooks, newBook, preBooks } from "../bookContent";

// Call localStorageControl function
localStorageControl();

// Combine all books into a single array
const allBooks = [...oldBooks, ...newBook, ...preBooks].flat(
	Infinity
);

// Function to render book modal for view all books section
function viewAllBooks__bookSelect(ev) {
	const parent = document.querySelector(
		".view-books-offline--container"
	);
	const viewBooksTarget = ev.target.closest(".book .book__item");
	if (!viewBooksTarget) return;

	const bookId = viewBooksTarget.dataset.id;
	const targetBook = allBooks.find((book) => book.id === bookId);
	renderBookModal(parent, targetBook);
}

// Function to render book modal for search section
function searchBooks__bookSelect(ev) {
	const parent = document.querySelector(".search-books-offline");
	const searchBookTarget = ev.target.closest(".book .book__info");
	if (!searchBookTarget) return;

	const bookId = searchBookTarget.dataset.id;
	const targetBook = allBooks.find((book) => book.id === bookId);
	renderBookModal(parent, targetBook);
}

// Main book modal control function
export default function bookModalControl(ev) {
	// For view all books section
	if (ev.target.closest(".view-books-offline--container")) {
		viewAllBooks__bookSelect(ev);
	}
	// For search section
	else if (ev.target.closest(".search-result__lists")) {
		searchBooks__bookSelect(ev);
	}

	// Close book modal
	if (ev.target.closest(".book-modal .modal-close")) {
		removeEl(document.querySelector(".book-modal"));
		manageOverlay();
	}
}

document.addEventListener("click", (ev) => bookModalControl(ev));

// ERNDER BOOK-MODAL
function renderBookModal(parent, book) {
	// Generate markup for the book modal
	const markup = `
			<section class="book-modal">
				<svg class="modal-close">
				<use xlink:href="${icons}#close"></use>
				</svg>
				<figure>
					<img src="${book.imgUrl || ""}" alt="${book.title}" />
				</figure>
				<section class="book-modal__description">
					<p class="book-modal__info">
					<span class="key">Name</span> : <span class="value">${
						book.title
					}</span>
					</p>
					<p class="book-modal__info">
					<span class="key">Author Name</span> : <span class="value">${
						book.authorName
					}</span>
					</p>
					<p class="book-modal__info">
					<span class="key">Popularity</span> : <span class="value">${
						book.popularity
					}</span>
					</p>
					<p class="book-modal__info">
					<span class="key">Page Number</span> : <span class="value">${
						book.pages
					}</span>
					</p>
					<p class="book-modal__info">
					<span class="key">Book Quantity</span> : <span class="value">${
						book.quantity
					}</span>
					</p>
					<p class="book-modal__info">
					<span class="key">Language</span> : <span class="value">${
						book.language
					}</span>
					</p>
					<p class="book-modal__info">
					<span class="key">Release Year</span> : <span class="value">${
						book.releaseYear
					}</span>
					</p>
					<p class="book-modal__info">
					<span class="key">Publication Name</span> : <span class="value">${
						book.publicationName
					}</span>
					</p>
					<p class="book-modal__info">
					<span class="key">Genre</span> : <span class="value">${
						book.genre
					}</span>
					</p>
				</section>
			</section>`;

	// Insert the markup into the parent element
	parent.insertAdjacentHTML("afterbegin", markup);

	// Manage overlay
	manageOverlay();
}
