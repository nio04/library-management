import * as comp from "../component";
export const storageBook = [];

export function setStorage(book) {
	// NEW BOOK ADD TO STORAGE
	storageBook.push(book);

	const stringify = JSON.stringify(storageBook);
	localStorage.setItem("newBook", stringify);
}

document.addEventListener("DOMContentLoaded", () => {
	if (localStorage.getItem("newBook") !== null)
		storageBook.push(...JSON.parse(localStorage.getItem("newBook")));

	comp.renderBookMarkup(
		document.querySelector(
			".view-books-offline__custom #viewbooks__offline__section"
		),
		storageBook
	);
});

// FLUSH ALL THE BOOKS FROM LOCAL-STORAGE
document.querySelector(".clear-all").addEventListener("click", (ev) => {
	localStorage.removeItem("newBook");

	document.querySelector(
		".view-books-offline__custom #viewbooks__offline__section"
	).innerHTML = "";
});
