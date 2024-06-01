/***
 * TOTAL: 07 STEPS
 *  1. find book >
 *  2. check availablity >
 *  3. check library card >
 *  4. provide book info >
 *  5. show checkout processing loading >
 *  6. input delivery adress
 *  7. show due date >
 *  8. take the book
 */
import icons from "url:../../asset/icons/sprite.svg";
import * as helper from "../helper";
import * as comp from "../component";
import { renderBooks, renderMarkup } from "./viewBooksOffline";
import * as bookContent from "../bookContent";
import { getStorage } from "./localstorageView";
import { searchBooks } from "./searchView";

const parent = document.querySelector(".issue__book");
const allSteps = document.querySelectorAll(".book__issue__step");
const searchInput = document.querySelector(
	".issue__book #search__books__offline__input"
);
const resultParent = document.querySelector(
	".issue__book .search-result__section"
);

// const bookIssueSteps = [
// 	"find book",
// 	"check availablity",
// 	"check library card",
// 	"provide book information",
// 	"checkout processing",
// 	"due date",
// 	"pick up the book",
// ];
const bookIssueSteps = [
	"find book",
	"check availablity",
	"check library card",
	"provide book information",
	"checkout processing",
	"input delivery address",
	"due date",
	"pick up the book",
];
const totalSteps = 8;
// selected book from search-result
let getBook;
let deliveryAddress;

const generateNextButton = (step, btntext = "Next Step") => {
	const icon = btntext === "OK" ? "ok" : "next";

	return `
        <button class="btn anim-btn next__step__btn dynaimc-next-btn ${
					step === totalSteps - 1 ? "last__step" : ""
				}" data-go-next-step="${step}">
            ${btntext} <svg style="margin-left:1.3rem; margin-right: 0"><use  xlink:href="${icons}#${icon}"></use></svg>
        </button>
    `;
};

function hideAllStepsAndShowFirstStep() {
	allSteps.forEach((step) => helper.hideEl(step));
	helper.showEl(allSteps[0]);
}

function processLocalStorageBooks() {
	if (!getStorage()) return;
	// INJECT
	bookContent.oldBooks.push(getStorage());
}

function resetOnLoad() {
	// Reset issue-book header
	const issueBookHeader = document.querySelector(
		".issue__book .issue__book__progress"
	);
	issueBookHeader.innerHTML = `
        <h2>Steps 1 of 8: <span class="step__description">find book</span></h2>
    `;

	// Reset search-result section
	const searchResultSection = document.querySelector(
		".issue__book .step__1 ul"
	);
	searchResultSection.innerHTML = "";
}

function findBook(ev) {
	ev.preventDefault();

	const issueBook = ev.target.closest(".issue__book");
	if (!issueBook) return;

	// Remove [next-step] btn at first
	helper.removeEl(
		document.querySelector(".step__1 .next__step__btn")
	);

	const searchValue = searchInput.value;
	const searchResults = searchBooks(searchValue);

	// Clear search results when no search input
	if (searchValue.length < 1) {
		helper.cleanParent(
			".search-result__section .search-result__lists"
		);
		return;
	}

	// Handle error when search result is empty
	if (
		ev.target.closest(".issue__book__find__book") &&
		searchResults.length === 0
	) {
		comp.showModal(
			parent,
			"Find Book Error",
			"Sorry, we could not find the book you queried. Please try again."
		);

		// Hide book search result on failure
		helper.hideEl(resultParent);

		// Clear book input
		helper.inputCleaner("search__books__offline__input");

		return;
	}

	// Execute on success
	helper.showEl(resultParent);

	// Clear book input
	helper.inputCleaner("search__books__offline__input");

	// Generate book in UI
	comp.renderBookMarkup(
		document.querySelector(".issue__book .search-result__lists"),
		searchResults
	);

	// Generate next-step button
	comp.renderSibling(resultParent, generateNextButton(2));
	// disble [next-btn] for step 1 AT FIRST
	document.querySelector(".step__1 .next__step__btn").disabled = true;
}

// HANDLE [NEXT-STEP] BUTTON
function goNextStepControl(ev) {
	const btnParent = ev.target.closest(".next__step__btn");
	// Get the 'step' variable from the DOM button
	const dynamicStep = btnParent.dataset.goNextStep;

	if (Number(dynamicStep) > totalSteps) return;

	const progressDescription = document.querySelector(
		".issue__book__progress"
	);

	// Update step progress
	progressDescription.innerHTML = `
        <h2>Steps ${dynamicStep} of 8: <span class="step__description">${
		bookIssueSteps[Number(dynamicStep) - 1]
	}</span></h2>
    `;

	// Hide all steps
	// helper.hideEl(document.querySelectorAll(`.book__issue__step`));
	document
		.querySelectorAll(`.book__issue__step`)
		.forEach((el) => el.classList.add("hidden"));

	// Remove all [go next] buttons
	helper.removeEl(document.querySelector(`[data-go-next-step]`));

	// Show next step in UI
	helper.showEl(document.querySelector(`.step__${dynamicStep}`));

	// Clear old button if it exists
	document
		.querySelector(`.step__${Number(dynamicStep)} .next__step__btn`)
		?.remove();

	// Render [next-step] button
	const buttonText = dynamicStep === "8" ? "OK" : "NEXT STEP";
	comp.renderChildren(
		document.querySelector(`.step__${Number(dynamicStep)}`),
		generateNextButton(Number(dynamicStep) + 1, buttonText)
	);

	// Execute on book exist function for step 2
	if (Number(dynamicStep) === 2) checkBookExist(getBook);
}

// HANDLE [PREVIOUS-STEP] BUTTON
function goStep1() {
	hideAllStepsAndShowFirstStep();
	resetOnLoad();

	// Remove [prev-btn] from previous attempt
	helper.removeEl(
		document.querySelector(".step__2 .prev__step__btn")
	);
}

// STEP 2: CHECK BOOK EXISTENCE
function checkBookExist(bookExist) {
	// Clear the parent container
	helper.cleanParent(".issue__book .step__2 .book-status");

	if (bookExist[0].quantity === 0) {
		// Book not available
		comp.renderChildren(
			document.querySelector(".issue__book .step__2 .book-status"),
			`<h1 class="h1">Book Not Available</h1>`
		);

		// Update [next-step] button to [previous-step]
		const prevBtn = document.querySelector(
			".issue__book .step__2 .next__step__btn"
		);
		prevBtn.textContent = "Previous Step";
		helper.addClass(prevBtn, "prev__step__btn");
		helper.removeClass(prevBtn, "next__step__btn");
	} else {
		// Book available
		comp.renderChildren(
			document.querySelector(".issue__book .step__2 .book-status"),
			`<h1 class="h1">Book Available</h1>`
		);
	}
}

// STEP 3: CHECK LIBRARY CARD
function libraryCardCheck(ev) {
	const checkLibraryCard = ev.target.value;

	// Show appropriate buttons based on library card availability
	if (checkLibraryCard === "yes") {
		helper.showEl(
			document.querySelector(".step__3 .next__step__btn")
		);
		helper.hideEl(
			document.querySelector(".step__3 .go__library-page")
		);
	} else {
		helper.showEl(
			document.querySelector(".step__3 .go__library-page")
		);
		helper.hideEl(
			document.querySelector(".step__3 .next__step__btn")
		);
	}
}

// STEP 4: PROVIDE ALL THE BOOK INFORMATION
function showAllInformationBook() {
	const parent = document.querySelector(".issue__book .step__4");

	// Remove previous book info
	helper.removeEl(document.querySelector(".step__4 .book__info"));

	// const targetBook = helper.bookMatch(getBook.title);
	const markup = getBook.map((book) => {
		return `
		<section class="book__info">
			<img src="${book.imgUrl}" alt="${book.title}">
			<section class="book__info__details">
				<p>Book Name: ${book.title}</p>
				<p>Author Name: ${book.authorName}</p>
				<p>Book Language: ${book.language}</p>
				<p>Genre: ${book.genre} </p>
				<p>Release Year: ${book.releaseYear}</p>
				<p>Release Version: ${book.releaseVersion}</p>
				<p>Popularity: ${book.popularity} </p>
				<p>Book Pages: ${book.pages} </p>
				<p>Book License: ${book.GNUlicense}</p>
				<p>Author Bio Link: ${book.authorBio} </p>
				<p>Book Publication Link: ${book.publicationLink}</p>
				<p>Publication Name: ${book.publicationName} </p>
			</section>
		</section>
    `;
	});

	parent.insertAdjacentHTML("afterbegin", markup);
}

// STEP 5: SHOW CHECKOUT PROCESSING
function showCheckOutPressing() {
	const step5NextBtn = document.querySelector(
		".issue__book .step__5 .next__step__btn"
	);
	const bookIssueWaiting = document.querySelector(
		".issue__book .step__5 .book__issue__waiting"
	);
	const bookIssueSuccess = document.querySelector(
		".issue__book .step__5 .book__issue__success"
	);

	helper.hideEl(step5NextBtn);
	helper.showEl(bookIssueWaiting);

	setTimeout(() => {
		helper.hideEl(bookIssueWaiting);
		helper.showEl(bookIssueSuccess);
		helper.showEl(step5NextBtn);
	}, 10);
}

// STEP 6: ENTER DELIVERY ADDRESS
// function deliveryAddress(ev) {
// 	ev.preventDefault();
// 	console.log(ev);
// 	if (ev.target.id === "delivery-address-btn") console.log(ev);
// }

// STEP 7: SHOW DUE-DATE
function showDueDate() {
	const date = new Date();

	const currDate = date.getDate();
	const currDay = date.getDay();
	const currMonth = date.getMonth();
	const currYear = date.getFullYear();

	const dayProcess = (dayInput) => {
		const daysOfWeek = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		];
		return daysOfWeek[dayInput];
	};

	const monthProcess = (monthInput) => {
		const monthsOfYear = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];
		return monthsOfYear[monthInput];
	};

	function getDaysInMonth(year, month) {
		// FOR CALCULATING FUTURE DATE
		return new Date(year, month + 1, 0).getDate();
	}

	// REMOVE PREVIOUS CONTENT
	helper.removeEl(
		document.querySelector(".step__7 .return-book__info")
	);

	const calcFutureDate = () => {
		const futureDate = currDate + 15;
		const futureMonth =
			currMonth +
			(futureDate > getDaysInMonth(currYear, currMonth) ? 1 : 0);
		const dueDateMarkup = `
            <p class="return-book__info">Please return the book before <br> Date: ${futureDate}, Month: ${monthProcess(
			futureMonth
		)}, Year: ${currYear}</p>
        `;
		document
			.querySelector(".issue__book .step__7")
			.insertAdjacentHTML("afterbegin", dueDateMarkup);
	};

	const currentDayMarkup = `
        <p class="">Today is: ${dayProcess(
					currDay
				)}, Date: ${currDate}, Month: ${monthProcess(
		currMonth
	)}, Year: ${currYear}</p>
    `;

	calcFutureDate();
}

// STEP 8: TAKE THE BOOK
function takeBook() {
	// Remove previous message
	helper.removeEl(
		document.querySelector(".issue__book .step__7 .checkout-message")
	);

	const checkoutMessageMarkup = `

	  <p class="checkout-message">
	      Thank you for choosing our library.<br />
	      Your book will be delivered to <span>${deliveryAddress}</span>.<br />
	      Have a nice day. Please visit us again.
	  </p>
	  `;
	//  <p class="checkout-message">
	//         Thank you for choosing our library.<br />
	//         Have a nice day. Please visit us again.
	//     </p>
	comp.renderChildren(
		document.querySelector(".issue__book .step__8"),
		checkoutMessageMarkup,
		"afterbegin"
	);
}

// DESIGN STEP-PROGRESS
function stepProgressing(step) {
	const target = document.querySelector(".issue__book__progress h2");
	const stepWidths = {
		2: "25%",
		3: "37.5%",
		4: "50%",
		5: "62.5%",
		6: "75%",
		7: "87.5%",
		7: "100%",
	};

	target.style.setProperty("--step-width", stepWidths[step]);
}

// QUNATITY BOOK MANAGER
function quantityBookManage() {
	const selectedBookTitle = getBook[0].title;

	// Get all books
	const allBooks = [
		...bookContent.bookLists.preBooks,
		...getStorage(),
	];
	console.log(allBooks);

	// Update book quantity for all types of books
	allBooks.forEach((book) => {
		if (book.title === selectedBookTitle) {
			book.quantity -= 1;
		}
	});

	// Check if new quantity book is from JS object or local storage
	const checkBookFrom = bookContent.bookLists.preBooks.find(
		(book) => book.id === getBook[0].id
	);

	// Filter target book from local storage object
	const oldReference = getStorage().filter(
		(book) => book.id !== getBook[0].id
	);

	// If book is from local storage, update local storage
	if (!checkBookFrom) {
		localStorage.setItem(
			"newBook",
			JSON.stringify([
				...oldReference,
				allBooks.find((book) => book.title === selectedBookTitle),
			])
		);
	}
	console.log(oldReference, getBook);

	// Render book view again [taking helps from [view-books-offline.js]]
	renderBooks(
		document.querySelector(".view-books-offline--view-all ul"),
		allBooks
	);
}

export function issueBookControl(ev) {
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

	// FETCH & PROCESS OLD BOOKS FROM LOCAL-STORAGE
	processLocalStorageBooks();

	// STEP 1: FIND BOOK
	if (ev.target.id === "search__books__offline__btn") findBook(ev);

	// selecting books in search-result
	if (ev.target.closest("section .book .book__item")) {
		const selectedBookEl = ev.target.closest(".book .book__item");
		const selectedBookID = selectedBookEl.getAttribute("id");

		// search book by ID
		searchBooks(selectedBookID);

		// inject selected book
		getBook = searchBooks(selectedBookID);

		// enable [next-btn] when book is selected
		document.querySelector(
			".step__1 .next__step__btn"
		).disabled = false;

		// select all the search-result and remove class
		document
			.querySelectorAll(
				".search-result__section .search-result__lists li"
			)
			.forEach((el) => el.classList.remove("select-book"));
		selectedBookEl.classList.add("select-book");
	}

	// STEP 1.2: CLICK ON [NEXT] BUTTON
	if (ev.target.closest(".next__step__btn")) goNextStepControl(ev);

	// STEP 2:
	if (ev.target.dataset.goNextStep === "2") {
		stepProgressing(2);
	}

	// STEP 2.1: WHEN NO BOOK > PREVIOUS BTN ACTIVITY
	if (ev.target.classList.contains("prev__step__btn")) {
		goStep1();
	}

	// STEP 3.0: HIDE [NEXT-STEP] [go-library] FROM STEP 3,
	// CLEAR RADIO CHECKED
	if (
		ev.target.dataset.goNextStep === "3" ||
		ev.target.closest(".next__step__btn svg")
	) {
		stepProgressing(3);

		helper.hideEl(
			document.querySelector(".step__3 .next__step__btn")
		);
		helper.hideEl(
			document.querySelector(".step__3 .go__library-page")
		);

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
	if (
		ev.target.dataset.goNextStep === "4" ||
		ev.target.closest(".next__step__btn svg")
	) {
		stepProgressing(4);

		showAllInformationBook();
	}

	// STEP 5: BOOK CHECK-OUT PRECESSING
	if (
		ev.target.dataset.goNextStep === "5" ||
		ev.target.closest(".next__step__btn svg")
	) {
		stepProgressing(5);

		showCheckOutPressing();
	}

	// STEP 6: ENTER DELIVERY ADDRESS
	if (
		ev.target.dataset.goNextStep === "6" ||
		ev.target.closest(".next__step__btn svg")
	) {
		stepProgressing(6);
		helper.showEl(
			document.querySelector(".step__6 form #delivery-address-btn")
		);

		deliveryAddressControl();
	}

	// STEP 7: SHOW DUE DATE
	if (
		ev.target.dataset.goNextStep === "7" ||
		ev.target.closest(".next__step__btn svg")
	) {
		stepProgressing(6);

		showDueDate();
	}

	// STEP 8: TAKE THE BOOK
	if (
		ev.target.dataset.goNextStep === "8" ||
		ev.target.closest(".next__step__btn svg")
	) {
		stepProgressing(7);

		takeBook(ev);
	}

	// ISSUE-BOOK COMPLETE
	if (
		ev.target.dataset.goNextStep === "9" ||
		ev.target.closest(".last__step svg")
	) {
		// HIDE ISSUE-BOOK PAGE
		helper.hideEl(
			document.querySelector(".issue__book"),
			document.querySelector(".issue__book").children[3]
		);

		// SHOW LIBRARY-MANAGEMENT PAGE
		helper.showEl(
			document.querySelector(".library-management"),
			...document.querySelector(".library-management").children
		);

		// QUNATITY BOOK MANAGER
		quantityBookManage();
	}
}

// HANDLE DELIVERY-ADDRESS
document.addEventListener("click", issueBookControl);

export function deliveryAddressControl() {
	const nextStepBtn = document.querySelector(
		".step__6 .next__step__btn"
	);
	const deliveryAddressBtn = document.querySelector(
		".step__6 form #delivery-address-btn"
	);
	const form = document.querySelector(".step__6 form");

	if (form) {
		// HIDE [NEXT-STEP] BUTTON
		helper.hideEl(nextStepBtn);

		form.addEventListener("submit", (ev) => {
			ev.preventDefault();

			// re-assigning delivery-address value
			deliveryAddress = ev.target.querySelector(
				"#delivery-address"
			).value; // Adjust the selector as needed

			if (deliveryAddress.length === 0) {
				comp.showModal(
					null,
					"error",
					"You cannot add an empty address. Please try again"
				);
			} else {
				helper.hideEl(deliveryAddressBtn);
				helper.showEl(nextStepBtn);
			}
		});
	}
}

// Invoke the function to attach the event listener
// deliveryAddressControl();
