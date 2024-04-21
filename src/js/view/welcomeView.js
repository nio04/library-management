import * as helper from "../helper";
import * as comp from "../component";
import { spinnerTimer } from "../config";

const welcomeSection = document.querySelector(".welcome");
const btn = document.querySelector(".welcome-btn");
const libraryPage = document.querySelector(".library-management");
const viewAllBooksSection = document.querySelector(".view-books");
const searchBookOfflineSection = document.querySelector(".search-books");
const uploadBookSection = document.querySelector(".upload-book");
const searchBookOnlineSection = document.querySelector(".search-online");
const issueBookSection = document.querySelector(".issue-book");
const contributorSection = document.querySelector(".contributor-section");

function welcomeViewControl(ev) {
	// console.log();
	comp.showSpinner(ev);

	setTimeout(() => {
		comp.hideSpinner();

		helper.hideEl(welcomeSection);

		// SHOW LIBRARY-MANAGEMENT PAGE
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
