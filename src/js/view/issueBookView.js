/***
 *  find book >
 *  check availablity >
 *  check library card >
 *  provide book info >
 *  show checkout processing loading >
 *  show due date >
 *  take the book
 */

// import { searchValue } from "./searchBooksOffline";
import * as helper from "../helper";
import * as comp from "../component";

const parent = document.querySelector(".issue__book");
const searchInput = document.querySelector(
	".issue__book #search__books__offline__input"
);
const resultParent = document.querySelector(
	".issue__book .search-result__section"
);
const bookMarkIcon = document.querySelector(".issue__book .book-mark");
const step1 = document.querySelector(".issue__book .step__1");

const generateNextButton = `
<button class="btn anim-btn next__step__btn">Next step</button>
`;

function bookSelectIconControl(ev) {
	if (ev.target.classList.contains("un-marked__icon")) {
		// REMOVE [CROSS] ICON WITH [TICK] ICON
		helper.removeClass(
			bookMarkIcon,
			"hidden",
			"un-marked",
			"un-marked__icon"
		);
		helper.addClass(bookMarkIcon, "marked", "marked__icon");

		document.querySelector(".book-mark").textContent = "✅";

		comp.renderSibling(step1, generateNextButton);
	} else {
		// REMOVE [TICK] ICON WITH [CROSS] ICON
		helper.removeEl(document.querySelector(".next__step__btn"));

		helper.addClass(bookMarkIcon, "un-marked", "un-marked__icon");
		helper.removeClass(bookMarkIcon, "marked", "marked__icon");

		document.querySelector(".book-mark").textContent = "❌";
	}
}

function findBook(ev) {
	ev.preventDefault();

	if (!ev.target.closest(".issue__book")) return;

	let searchValue = searchInput.value;

	if (
		ev.target.closest(".issue__book__find__book") &&
		!helper.findBook(searchValue)
	) {
		comp.showModal(
			parent,
			"sorry, We could not find the book you query. please try again"
		);

		return;
	}

	// EXECUTE ON SUCCESS
	helper.showEl(resultParent);

	// CLEAR BOOK INPUT
	helper.inputCleaner("search__books__offline__input");

	// FIND THE BOOK OBJECT
	const getBook = helper.bookMatch(searchValue);

	// GENERATE BOOK IN UI
	comp.renderBookMarkup(
		document.querySelector(".issue__book .search-result__lists"),
		[getBook]
	);
}

// function clearBookDefault() {
// 	document.querySelector(".issue__book .search-result__lists").innerHTML =
// 		"";
// 	helper.hideEl(bookMarkIcon);
// }

export default function issueBookControl(ev) {
	// if (ev.target.dataset.pointer === "issue__book") clearBookDefault(ev);

	if (ev.target.id === "search__books__offline__btn") findBook(ev);

	if (ev.target.classList.contains("book-mark")) bookSelectIconControl(ev);
}

// SEARCH BOOK
document.addEventListener("click", issueBookControl);
