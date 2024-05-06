// Import dependencies
import * as helper from "../helper";
import * as comp from "../component";
import { spinnerTimer } from "../config";
import { getRandomImg } from "./unsplashView";

// DOM elements
const sections = {
	welcome: document.querySelector(".welcome"),
	libraryManagement: document.querySelector(".library-management"),
	viewAllBooks: document.querySelector(".view-books"),
	searchBookOffline: document.querySelector(".search-books"),
	uploadBook: document.querySelector(".upload-book"),
	searchBookOnline: document.querySelector(".search-online"),
	issueBook: document.querySelector(".issue-book"),
	contributor: document.querySelector(".contributor-section"),
};
const backBtn = document.querySelector("#back-btn");

// Variable to store online image
export let onlineImg;

// Function to show target element based on the clicked button
function showTargetElement(ev) {
	const checkedBtn = ev.target.dataset.pointer;
	if (!checkedBtn) return;
	const parentEl = document.querySelector(`.${checkedBtn}`);
	helper.showEl(parentEl);
}

// Function to control actions on the library page
async function libraryPageControl(ev) {
	comp.showSpinner(ev);

	setTimeout(() => {
		if (backBtn) {
			comp.hideSpinner();
			const target = ev.target.dataset.backTo;
			if (target === "mainPage") {
				helper.hideEl(sections.libraryManagement);
				helper.showEl(sections.welcome);
			} else if (target === "libraryPage") {
				const currentPage = ev.target.parentElement.className;
				helper.hideEl(document.querySelector(`.${currentPage}`));
				helper.showEl(
					sections.libraryManagement,
					sections.viewAllBooks,
					sections.searchBookOffline,
					sections.uploadBook,
					sections.searchBookOnline,
					sections.issueBook
				);
			}
		}

		if (
			!ev.target.closest(".library-management") ||
			ev.target.classList.contains("library-management") ||
			ev.target.classList.contains("h1")
		) {
			return;
		}

		comp.hideAllSections();
		showTargetElement(ev);
	}, spinnerTimer);

	if (ev.target.dataset.pointer === "search-books-offline") {
		helper.hideEl(
			document.querySelector(".search-books-offline .search-result")
		);
		helper.removeEl(
			document.querySelector(
				".search-result .search-result__section .book .book__info"
			)
		);
	}

	if (ev.target.dataset.pointer === "upload-book-container") {
		onlineImg = await getRandomImg();
	}
}

// Event listener for clicks on the library page
document.addEventListener("click", libraryPageControl);

export default libraryPageControl;
