import localStorageControl from "./localstorageView";
localStorageControl();
import { oldBooks, newBook, preBooks } from "../bookContent";

const allBooks = [...oldBooks, ...newBook, ...preBooks];

function viewAllBooks__bookSelect(ev) {
	const viewBooksTarget = ev.target.closest(".book .book__item");
	if (!ev.target.closest(".book .book__item")) return;

	const bookId = viewBooksTarget.dataset.id;
	const targetBook = allBooks.filter((book) => book.id === bookId);
	console.log(targetBook);

	renderBookModal(targetBook);
}

function searchBooks__bookSelect(ev) {
	const searchBookTarget = ev.target.closest(".book .book__info");
	if (!ev.target.closest(".book .book__info")) return;

	const bookId = searchBookTarget.dataset.id;
	const targetBook = allBooks.filter((book) => book.id === bookId);
	console.log(targetBook);
}

export default function bookModalControl(ev) {
	// FOR VIEW-ALL BOOKS SECTION
	if (ev.target.closest(".view-books-offline--container"))
		viewAllBooks__bookSelect(ev);
	// FOR SEARCH SECTION
	else if (ev.target.closest(".search-result__lists"))
		searchBooks__bookSelect(ev);
}

document.addEventListener("click", (ev) => bookModalControl(ev));

function renderBookModal(book) {
	const markup = book
		.map((item) => {
			return `
		<section class="book-modal">
			<figure>
				<img src="${item.imgUrl === undefined ? "" : item.imgUrl}" al="${
				item.title
			}" />
			</figure>
			<section class="book-modal__description>
				<p class="book-modal__info">
					<span class="key">name</span> : <span class="value">${item.title}</span>
				</p>
				<p class="book-modal__info">
					<span class="key">author name</span> : <span class="value">${
						item.authorName
					}</span>
				</p>
				<p class="book-modal__info">
					<span class="key"> popularity</span> : <span class="value">${
						item.popularity
					}</span>
				</p>
				<p class="book-modal__info">
					<span class="key">page number</span> : <span class="value">${
						item.pages
					}</span>
				</p>
				<p class="book-modal__info">
					<span class="key">book quantity</span> : <span class="value">${
						item.quantity
					}</span>
				</p>
				<p class="book-modal__info">
					<span class="key"> language</span> : <span class="value">${
						item.language
					}</span>
				</p>
				<p class="book-modal__info">
					<span class="key">genre</span> : <span class="value">${item.genre}</span>
				</p>
				<p class="book-modal__info">
					<span class="key">release year</span> : <span class="value">${
						item.releaseYear
					}</span>
				</p>
				<p class="book-modal__info">
					<span class="key">publication name</span> : <span class="value">${
						item.publicationName
					}</span>
				</p>
				</section>
		</section>
		`;
		})
		.join("");

	console.log(markup);
}
