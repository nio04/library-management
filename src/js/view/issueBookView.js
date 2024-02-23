/***
 * TOTAL: 07 STEPS
 * find book >
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
const allSteps = document.querySelectorAll(".book__issue__step");
const searchInput = document.querySelector(
	".issue__book #search__books__offline__input"
);
const resultParent = document.querySelector(
	".issue__book .search-result__section"
);
const bookMarkIcon = document.querySelector(".issue__book .book-mark");
const step1 = document.querySelector(".issue__book .step__1");
const step2 = document.querySelector(".issue__book .step__2");

const bookIssueSteps = [
	"find book",
	"check availablity",
	"check library card",
	"provide book information",
	"checkout processing",
	"due date",
	"pick up the book",
];

// let step = 1;

const generateNextButton = (step) => `
<button class="btn anim-btn next__step__btn" data-go-next-step="${step}">Next step</button>
`;

// function clearPreviosHtmlContent(parent) {
// 	console.log(document.querySelector(parent));
// 	document.querySelector(parent).innerHTML = "";
// }

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

		// UPDATE STEP COUNTER
		// step += 1;

		comp.renderSibling(resultParent, generateNextButton(2));
	} else {
		// REMOVE [TICK] ICON WITH [CROSS] ICON
		helper.removeEl(document.querySelector(".next__step__btn"));

		helper.addClass(bookMarkIcon, "un-marked", "un-marked__icon");
		helper.removeClass(bookMarkIcon, "marked", "marked__icon");

		document.querySelector(".book-mark").textContent = "❌";
	}
}

function goNextStepControl(ev) {
	const dynamicStep = ev.target.dataset.goNextStep;

	if (Number(dynamicStep) > 7) return;

	const progressDescription = document.querySelector(
		".issue__book__progress h1"
	);

	// UPDATE STEP PROGRESS
	progressDescription.textContent = `steps ${dynamicStep} of 7 : ${
		bookIssueSteps[Number(dynamicStep) - 1]
	}`;

	// 	HIDE PREVIOUS STEP CONTENT
	helper.hideEl(
		document.querySelector(`.step__${Number(dynamicStep) - 1}`)
	);
	helper.hideEl(document.querySelector(`.book__issue__step`));
	// helper.removeEl(document.querySelector(`.step__${step - 1}`));

	// REMOVE PREVIOUS [GO NEXT] BUTTON
	helper.removeEl(document.querySelector(`[data-go-next-step]`));

	// SHOW NEXT STEP
	helper.showEl(document.querySelector(`.step__${dynamicStep}`));

	// RENDER NEXT BUTTON
	comp.renderChildren(
		document.querySelector(`.step__${Number(dynamicStep)}`),
		generateNextButton(Number(dynamicStep) + 1)
	);
}
// function clearBookDefault() {
// 	document.querySelector(".issue__book .search-result__lists").innerHTML =
// 		"";
// 	helper.hideEl(bookMarkIcon);
// }

export default function issueBookControl(ev) {
	// HIDE ALL STEPS AND SHOW FIRST STEP ONLY
	allSteps.forEach((step) => step.classList.add("hidden"));
	helper.showEl(allSteps[0]);

	if (!ev.target.closest(".issue__book")) return;

	// STEP 1: FIND BOOK
	if (ev.target.id === "search__books__offline__btn") findBook(ev);

	// STEP 1.1: SELECT BOOK ICON
	if (ev.target.classList.contains("book-mark")) bookSelectIconControl(ev);

	// STEP 1.3: CLICK ON [NEXT] BUTTON
	if (ev.target.classList.contains("next__step__btn"))
		goNextStepControl(ev);
}

// SEARCH BOOK
document.addEventListener("click", issueBookControl);
