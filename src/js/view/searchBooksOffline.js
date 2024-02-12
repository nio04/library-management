import { bookLists } from "../bookContent";
import * as helper from "../helper";

const parent = document.querySelector(".search-books-offline");
const searchInput = document.querySelector(
	"#search__books__offline__input"
);
const searchBtn = document.querySelector("#search__books__offline__btn");
const resultParent = document.querySelector(".search-result");

const allOfflineBookName = bookLists.map((book) => book.title);
let searchValue;

function getSearchInput(ev) {
	return (searchValue = ev.target.value);
}

export default function bookSearchControl(ev) {
	const findBook = allOfflineBookName.includes(searchValue);

	// RENDER ERROR MESSAGE WHEN BOOKS NOT FOUND
	if (ev.target.closest(".search-books-offline") && !findBook) {
		helper.showModal(
			parent,
			"sorry, We could not find the book you query. please try again"
		);

		return;
	}

	// EXECUTE ON SUCCESS
	helper.showEl(resultParent);

	// FIND THE BOOK OBJECT
	const bookMatch = bookLists.find((book) => book.title === searchValue);
	console.log(bookMatch);
	// GENERATE BOOK IN UI
	helper.renderBookMarkup(
		document.querySelector(".search-result__lists"),
		bookMatch
	);
}

searchInput.addEventListener("input", getSearchInput);

searchBtn.addEventListener("click", bookSearchControl);
