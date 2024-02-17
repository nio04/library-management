import * as bookContent from "../bookContent";
import * as helper from "../helper";

const parent = document.querySelector(".search-books-offline");
const searchInput = document.querySelector(
	"#search__books__offline__input"
);
const searchBtn = document.querySelector("#search__books__offline__btn");
const resultParent = document.querySelector(".search-result");

const allOfflineBookName = bookContent.bookLists.preBook.map(
	(book) => book.title
);

let searchValue;

function getSearchInput(ev) {
	searchValue = ev.target.value;
	if (ev.target.value.length === 0) {
		document.querySelector(".search-result__lists .book__item")?.remove();
	}
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
	const bookMatch = bookContent.bookLists.preBook.find(
		(book) => book.title === searchValue
	);
	const processBook = [];
	processBook.push(bookMatch);

	// GENERATE BOOK IN UI
	helper.renderBookMarkup(
		document.querySelector(".search-result__lists"),
		processBook
	);
}

searchInput.addEventListener("input", getSearchInput);

searchBtn.addEventListener("click", bookSearchControl);
