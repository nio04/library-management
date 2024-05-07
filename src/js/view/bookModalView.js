import localStorageControl from "./localstorageView";
localStorageControl();

import { oldBooks, newBook, preBooks } from "../bookContent";

const allBooks = [...oldBooks, ...newBook, ...preBooks];

export default function bookModalControl(ev) {
	if (!ev.target.closest(".view-books-offline--container")) return;

	const viewBooksTarget = ev.target.closest(".book .book__item");

	if (viewBooksTarget) {
		const bookId = viewBooksTarget.dataset.id;
		const targetBook = allBooks.filter((book) => book.id === bookId);
		console.log(targetBook);
	}
}

document.addEventListener("click", (ev) => bookModalControl(ev));
