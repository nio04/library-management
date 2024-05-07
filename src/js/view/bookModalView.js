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
