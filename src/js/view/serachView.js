import { preBooks } from "../bookContent";
import { getStorage } from "./localstorageView";

// searching functionality
export const searchBooks = (searchValue) =>
	[...preBooks, ...getStorage()].filter((book) =>
		book.title.toLowerCase().includes(searchValue.toLowerCase())
	);
