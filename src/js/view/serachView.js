import { preBooks } from "../bookContent";
import { getStorage } from "./localstorageView";

// Function to combine preBooks and stored books, and filter them based on search value
export const searchBooks = (searchValue) => {
	const allBooks = getAllBooks();
	return filterBooksBySearchValue(allBooks, searchValue);
};

// Function to get all books from preBooks and stored books
const getAllBooks = () => {
	const preBooksArray = Array.isArray(preBooks) ? preBooks : [];
	const storedBooksArray = getStorage() || [];
	return [...preBooksArray, ...storedBooksArray];
};

// Function to filter books based on search value
const filterBooksBySearchValue = (books, searchValue) => {
	const searchQuery = searchValue.toLowerCase();
	return books.filter((book) =>
		book.title.toLowerCase().includes(searchQuery)
	);
};
