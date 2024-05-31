import { preBooks } from "../bookContent";
import { getStorage } from "./localstorageView";

// Function to combine preBooks and stored books, and filter them based on search value
export const searchBooks = (searchValue) => {
	const allBooks = getAllBooks();
	if (searchValue?.length > 30 && searchValue.includes("-"))
		return searchBooksByID(allBooks, searchValue);

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
	const searchQuery = searchValue?.toLowerCase();
	return books.filter((book) =>
		book.title?.toLowerCase().includes(searchQuery)
	);
};

// Function to filter books based on search value [book-id]
const searchBooksByID = (allBooks, searchValue) => {
	return allBooks.filter((book) => book.id === searchValue);
};
