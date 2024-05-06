import * as comp from "../component";
import * as bookContent from "../bookContent";

// Array to store books in local storage
export const storageBook = [];

// Function to add a new book to storage
export function setStorage(book) {
	// Add new book to storage
	storageBook.push(book);

	// Convert storageBook array to JSON and store in local storage
	const stringify = JSON.stringify(storageBook);
	localStorage.setItem("newBook", stringify);
}

// Function to retrieve books from storage
export function getStorage() {
	// Check if newBook item exists in local storage
	if (localStorage.getItem("newBook") === null) {
		return [];
	} else {
		// Parse the JSON string and return as array
		return [...JSON.parse(localStorage.getItem("newBook"))];
	}
}

// Event listener for DOMContentLoaded event
document.addEventListener("DOMContentLoaded", () => {
	// If newBook item exists in local storage, add its contents to storageBook array
	if (localStorage.getItem("newBook") !== null) {
		storageBook.push(...JSON.parse(localStorage.getItem("newBook")));
	}

	// Add books from local storage to bookContent.oldBooks array
	bookContent.oldBooks.push(JSON.parse(localStorage.getItem("newBook")));

	// Render the book markup using component render function
	// comp.renderBookMarkup(
	//     document.querySelector(
	//         ".view-books-offline__custom #viewbooks__offline__section"
	//     ),
	//     storageBook
	// );
});

// Event listener for click on clear-all button to flush all books from local storage
// document.querySelector(".clear-all").addEventListener("click", (ev) => {
//     localStorage.removeItem("newBook");

//     // Clear the inner HTML of viewbooks__offline__section element
//     document.querySelector(
//         ".view-books-offline__custom #viewbooks__offline__section"
//     ).innerHTML = "";
// });
