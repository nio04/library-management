import * as comp from "../component";
import * as bookContent from "../bookContent";

export const storageBook = [];

export function setStorage(book) {
	// NEW BOOK ADD TO STORAGE
	storageBook.push(book);

	const stringify = JSON.stringify(storageBook);
	localStorage.setItem("newBook", stringify);
}

export function getStorage() {
	if (localStorage.getItem("newBook") === null) return [];
	else return [...JSON.parse(localStorage.getItem("newBook"))];
}

document.addEventListener("DOMContentLoaded", () => {
	if (localStorage.getItem("newBook") !== null)
		storageBook.push(...JSON.parse(localStorage.getItem("newBook")));

	// INJECT BOOK-COINTENT STORAGE
	bookContent.oldBooks.push(JSON.parse(localStorage.getItem("newBook")));

	// comp.renderBookMarkup(
	// 	document.querySelector(
	// 		".view-books-offline__custom #viewbooks__offline__section"
	// 	),
	// 	storageBook
	// );
});

// FLUSH ALL THE BOOKS FROM LOCAL-STORAGE
// document.querySelector(".clear-all").addEventListener("click", (ev) => {
// 	localStorage.removeItem("newBook");

// 	document.querySelector(
// 		".view-books-offline__custom #viewbooks__offline__section"
// 	).innerHTML = "";
// });
