// 2ND
import * as helper from "../helper";
import * as comp from "../component";
import { spinnerTimer } from "../config";

const container = document.querySelector(".container");
const welcomeSection = document.querySelector(".welcome");
const libraryManagement = document.querySelector(".library-management");
const viewAllBooksSection = document.querySelector(".view-books");
const searchBookOfflineSection = document.querySelector(".search-books");
const uploadBookSection = document.querySelector(".upload-book");
const searchBookOnlineSection = document.querySelector(".search-online");
const issueBookSection = document.querySelector(".issue-book");
const backBtn = document.querySelector("#back-btn");
const spinner = document.querySelector(".spinner");

function showTargetElement(ev) {
	// 1) check which btn is checked
	const checkedBtn = ev.target.dataset.pointer;
	if (!checkedBtn) return;

	// 2) select that parent el by dataset && remove HIDDEN class
	const parentEl = document.querySelector(`.${checkedBtn}`);
	// parentEl.classList.remove("hidden")
	helper.showEl(parentEl);
}

function libraryPageControl(ev) {
	comp.showSpinner(ev);

	setTimeout(() => {
		if (backBtn) {
			comp.hideSpinner();

			const target = ev.target.dataset.backTo;

			if (target === "mainPage") {
				// 1) hide all the sections
				helper.hideEl(libraryManagement);
				// 2) show welcome page
				helper.showEl(welcomeSection);
			} else if (target === "libraryPage") {
				// BUTTON = "BACK TO LIBRARY PAGE"

				// 1) HIDE CURRENT PAGE (PARENT);
				const currentPage = ev.target.parentElement.className;
				helper.hideEl(document.querySelector(`.${currentPage}`));

				// 2) SHOW DESIRE PAGE
				helper.showEl(
					libraryManagement,
					viewAllBooksSection,
					searchBookOfflineSection,
					uploadBookSection,
					searchBookOnlineSection,
					issueBookSection
				);
			}
		}

		// TAPPED ELEMENT IS NOT CHILD OF [LIBRARY-MANAGEMENT]
		// TAPPED ELEMENT CONTAINS [LIBRARY-MANAGEMENT] CLASS
		// TAPPED ELEMENT CONTAINS [H1] CLASS
		if (
			!ev.target.closest(".library-management") ||
			ev.target.classList.contains("library-management") ||
			ev.target.classList.contains("h1")
		)
			return;

		// HIDE ALL THE SECTION
		comp.hideAllSections();

		// SHOW TARGET ELEMENT
		showTargetElement(ev);
	}, spinnerTimer);

	// SEARCH-BOOK-OFFLINE :: HANDLING BOOK CARD
	if (ev.target.dataset.pointer === "search-books-offline") {
		// HIDE SERCH-REUSLT CONTAINER
		helper.hideEl(
			document.querySelector(".search-books-offline .search-result")
		);

		// REMOVE SEARCHED-RESULT BOOK CONTAINER
		helper.removeEl(
			document.querySelector(
				".search-result .search-result__section .book .book__info"
			)
		);
	}
}

document.addEventListener("click", libraryPageControl);

export default libraryPageControl;
