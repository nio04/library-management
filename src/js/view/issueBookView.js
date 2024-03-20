/***
 * TOTAL: 07 STEPS
 *  1. find book >
 *  2. check availablity >
 *  3. check library card >
 *  4. provide book info >
 *  5. show checkout processing loading >
 *  6. show due date >
 *  7. take the book
 */

import * as helper from "../helper";
import * as comp from "../component";
import { bookLists } from "../bookContent";

const parent = document.querySelector(".issue__book");
const allSteps = document.querySelectorAll(".book__issue__step");
const searchInput = document.querySelector(
	".issue__book #search__books__offline__input"
);
const resultParent = document.querySelector(
	".issue__book .search-result__section"
);
const bookMarkIcon = document.querySelector(".issue__book .book-mark");

const bookIssueSteps = [
	"find book",
	"check availablity",
	"check library card",
	"provide book information",
	"checkout processing",
	"due date",
	"pick up the book",
];

let getBook;

const generateNextButton = (step) => `
<button class="btn anim-btn next__step__btn" data-go-next-step="${step}">Next step</button>
`;

function hideAllStepsAndShowFirstStep() {
	allSteps.forEach((step) => helper.hideEl(step));
	helper.showEl(allSteps[0]);
}

function resetOnLoad() {
	// RESET ISSUE-BOOK HEADER
	document.querySelector(
		".issue__book .issue__book__progress"
	).innerHTML = `<h1>steps 1 of 7: <span class="step__description">find book</span></h1>`;

	// RESET BOOK-MARK ICON
	if (document.querySelector(".book-mark")) {
		// HIDE PARENT
		helper.addClass(resultParent, "hidden");

		// RESET TO DEFAULT
		helper.addClass(bookMarkIcon, "un-marked", "un-marked__icon");
		helper.removeClass(bookMarkIcon, "marked", "marked__icon");

		document.querySelector(".book-mark").textContent = "❌";
	}

	// RESET SEARCH-RESULT SECTION
	document.querySelector(".issue__book .step__1 ul").innerHTML = "";
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
	getBook = helper.bookMatch(searchValue);

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

		comp.renderSibling(resultParent, generateNextButton(2));
	} else {
		// REMOVE [TICK] ICON WITH [CROSS] ICON
		helper.removeEl(document.querySelector(".next__step__btn"));

		helper.addClass(bookMarkIcon, "un-marked", "un-marked__icon");
		helper.removeClass(bookMarkIcon, "marked", "marked__icon");

		document.querySelector(".book-mark").textContent = "❌";
	}
}

// HANDLE [NEXT-STEP] BUTTON
function goNextStepControl(ev) {
	// GET [STEP] VARIABLE FROM DOM BUTTON
	const dynamicStep = ev.target.dataset.goNextStep;

	if (Number(dynamicStep) > 7) return;

	const progressDescription = document.querySelector(
		".issue__book__progress"
	);

	// UPDATE STEP PROGRESS
	progressDescription.innerHTML = `<h1> steps ${dynamicStep} of 7 : <span class="step__description">${
		bookIssueSteps[Number(dynamicStep) - 1]
	}</span></h1>`;

	// 	HIDE ALL STEPS
	helper.hideEl(document.querySelector(`.book__issue__step`));

	// REMOVE ALL [GO NEXT] BUTTONS
	helper.removeEl(document.querySelector(`[data-go-next-step]`));

	// SHOW NEXT STEP IN UI
	helper.showEl(document.querySelector(`.step__${dynamicStep}`));

	// CLEAR OLD BUTTON IF EXIST
	document
		.querySelector(`.step__${Number(dynamicStep)} .next__step__btn`)
		?.remove();

	// RENDER [NEXT-STEP] BUTTON
	comp.renderChildren(
		document.querySelector(`.step__${Number(dynamicStep)}`),
		generateNextButton(Number(dynamicStep) + 1)
	);

	// step 02: EXECUTE on BOOK EXIST FUNCTION
	if (Number(dynamicStep) === 2) checkBookExist(getBook);
}

// HANDLE [PREVIOUS-STEP] BUTTON
function goStep1() {
	hideAllStepsAndShowFirstStep();
	resetOnLoad();
	// REMOVE [PREV-BTN] FROM PREVIOUS ATTEMPT
	helper.removeEl(document.querySelector(".step__2 .prev__step__btn"));
}

// STEP 2: CHECK BOOK EXISTENCE
function checkBookExist(bookExist) {
	//  CLEAR THE PARENT CONTAINER
	helper.cleanParent(".issue__book .step__2 .book-status");

	// BOOK NOT AVAILABLE
	if (bookExist.quantity === 0) {
		comp.renderChildren(
			document.querySelector(".issue__book .step__2 .book-status"),
			`<h1 class="h1">Book Not Available</h1>`
		);

		// UPDATE [NEXT-STEP] BUTTON
		const prevBtn = document.querySelector(
			".issue__book .step__2 .next__step__btn"
		);
		prevBtn.textContent = "Previous Step";
		helper.addClass(prevBtn, "prev__step__btn");
		helper.removeClass(prevBtn, "next__step__btn");
	} else
		comp.renderChildren(
			document.querySelector(".issue__book .step__2 .book-status"),
			`<h1 class="h1">Book Available</h1>`
		);
}

// STEP 3: CHECK LIBRARY CARD
function libraryCardCheck(ev) {
	const checkLibraryCard = ev.target.value;

	// SHOW BTN ON HAVING LIBRARY-CARD
	if (checkLibraryCard === "yes") {
		helper.showEl(document.querySelector(".step__3 .next__step__btn"));
		helper.hideEl(document.querySelector(".step__3 .go__library-page"));
	} else {
		helper.showEl(document.querySelector(".step__3 .go__library-page"));
		helper.hideEl(document.querySelector(".step__3 .next__step__btn"));
	}
}

// STEP 4: PROVIDE ALL THE BOOK INFORMATION
function showAllInformationBook() {
	const parent = document.querySelector(".issue__book .step__4");
	const targetBook = helper.bookMatch(getBook.title);
	const markup = `
	<section class="book__info">
		<img src="${targetBook.imgUrl}" alt="${targetBook.title}">
		<section class="book__info__details">
			<p>book name: ${targetBook.title}</p>
			<p>author name: ${targetBook.authorName}</p>
			<p>book language: ${targetBook.language}</p>
			<p>genre: ${targetBook.genre} </p>
			<p>release year: ${targetBook.releaseYear}</p>
			<p>release version: ${targetBook.releaseVersion}</p>
			<p>popularity: ${targetBook.popularity} </p>
			<p>book pages: ${targetBook.pages} </p>
			<p>book license: ${targetBook.GNUlicense}</p>
			<p>author bio link: ${targetBook.authorBio} </p>
			<p>book publication link: ${targetBook.publicationLink}</p>
			<p>publication name: ${targetBook.publicationName} </p>
		</section>
	</section>`;

	parent.insertAdjacentHTML("afterbegin", markup);
}

// STEP 5: SHOW CHECKOUT PROCESSING
function showCheckOutPressing() {
	helper.hideEl(
		document.querySelector(".issue__book .step__5 .next__step__btn")
	);

	helper.showEl(
		document.querySelector(".issue__book .step__5 .book__issue__waiting")
	);

	setTimeout(() => {
		helper.hideEl(
			document.querySelector(".issue__book .step__5 .book__issue__waiting")
		);

		helper.showEl(
			document.querySelector(".issue__book .step__5 .book__issue__success")
		);

		helper.showEl(
			document.querySelector(".issue__book .step__5 .next__step__btn")
		);
	}, 2000);
}

export default function issueBookControl(ev) {
	// console.log(ev);

	// TAP >> [ISSUE-BOOK] BUTTON OR [NEXT-STEP] BUTTON
	// HIDE ALL THE STEPS AND SHOW A PARTICULAR STEP
	if (
		ev.target.dataset.pointer === "issue__book" ||
		ev.target.classList.contains("next__step__btn")
	) {
		hideAllStepsAndShowFirstStep();
	}

	// ALWAYS LOAD FIRST STEP AS default
	if (ev.target.dataset.pointer === "issue__book") resetOnLoad();

	// GUDARD CLASUE
	if (!ev.target.closest(".issue__book")) return;

	// STEP 1: FIND BOOK
	if (ev.target.id === "search__books__offline__btn") findBook(ev);

	// STEP 1.1: SELECT BOOK ICON
	if (ev.target.classList.contains("book-mark")) bookSelectIconControl(ev);

	// STEP 1.3: CLICK ON [NEXT] BUTTON
	if (ev.target.classList.contains("next__step__btn"))
		goNextStepControl(ev);

	// STEP 2: WHEN NO BOOK > PREVIOUS BTN ACTIVITY
	if (ev.target.classList.contains("prev__step__btn")) goStep1();

	// STEP 3.0: HIDE [NEXT-STEP] [go-library] FROM STEP 3,
	// CLEAR RADIO CHECKED
	if (ev.target.dataset.goNextStep === "3") {
		helper.hideEl(document.querySelector(".step__3 .next__step__btn"));
		helper.hideEl(document.querySelector(".step__3 .go__library-page"));

		// CLEAR RADIO CHECKED
		document
			.querySelectorAll(".step__3 .library-card__check__input")
			.forEach((checkBox) => (checkBox.checked = false));
	}
	// STEP 3.1: CHECK LIBRARY CARD
	if (ev.target.classList.contains("library-card__check__input"))
		libraryCardCheck(ev);

	// STEP 3.2: NO LIBRARY-CARD > THROWS TO LIBRARY-MANAGEMENT PAGE
	if (ev.target.classList.contains("go__library-page")) {
		// SHOW LIBRARY PAGE & ITS CONTENT
		helper.showEl(document.querySelector(".library-management"));
		document
			.querySelectorAll(".library-management section")
			.forEach((el) => el.classList.remove("hidden"));

		// HIDE ISSUE-BOOK PAGE
		helper.hideEl(document.querySelector(".issue__book"));
		helper.hideEl(document.querySelector(".step__3"));
	}

	// STEP 4: RUN [SHOW-BOOK-INFORMATION] FUNCTION
	if (ev.target.dataset.goNextStep === "4") {
		showAllInformationBook();
	}

	// STEP 5: BOOK CHECK-OUT PRECESSING
	if (ev.target.dataset.goNextStep === "5") {
		showCheckOutPressing();
	}
}

document.addEventListener("click", issueBookControl);
