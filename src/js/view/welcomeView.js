import * as helper from "../helper";
import { spinnerTimer } from "../config";

const welcomeSection = document.querySelector(".welcome");
const btn = document.querySelector(".welcome-btn");
const libraryPage = document.querySelector(".library-management");
const viewAllBooksSection = document.querySelector(".view-books");
const searchBookOfflineSection = document.querySelector(".search-books");
const uploadBookSection = document.querySelector(".upload-book");
const searchBookOnlineSection = document.querySelector(".search-online");
const issueBookSection = document.querySelector(".issue-book");
// const navigatorEl = document.querySelector(".navigator__link");

function welcomeViewControl(ev) {
	// console.log();
	helper.showSpinner(ev);

	setTimeout(() => {
		helper.hideSpinner();

		// welcomeSection.classList.add("hidden");
		helper.hideEl(welcomeSection);

		// SHOW LIBRARY-MANAGEMENT PAGE
		// libraryPage.classList.remove("hidden");
		helper.showEl(
			libraryPage,
			viewAllBooksSection,
			searchBookOfflineSection,
			uploadBookSection,
			searchBookOnlineSection,
			issueBookSection
		);
	}, spinnerTimer);
}

// EVENT
btn.addEventListener("click", welcomeViewControl);

export default welcomeViewControl;
