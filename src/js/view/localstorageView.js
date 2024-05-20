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

export function flushLocalStorage() {
	if (localStorage.getItem("newBook") === null) return;

	localStorage.removeItem("newBook");
}

export default function localStorageControl() {
	if (localStorage.getItem("newBook") !== null) {
		bookContent.oldBooks.push(
			...JSON.parse(localStorage.getItem("newBook"))
		);
	}
}
