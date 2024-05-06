import * as helper from "../helper";
import * as comp from "../component";
import { spinnerTimer } from "../config";

const sections = {
	welcome: document.querySelector(".welcome"),
	libraryPage: document.querySelector(".library-management"),
	viewAllBooksSection: document.querySelector(".view-books"),
	searchBookOfflineSection: document.querySelector(".search-books"),
	uploadBookSection: document.querySelector(".upload-book"),
	searchBookOnlineSection: document.querySelector(".search-online"),
	issueBookSection: document.querySelector(".issue-book"),
	contributorSection: document.querySelector(".contributor-section"),
};

function showLibraryPage() {
	helper.hideEl(sections.welcome);
	helper.showEl(
		sections.libraryPage,
		sections.viewAllBooksSection,
		sections.searchBookOfflineSection,
		sections.uploadBookSection,
		sections.searchBookOnlineSection,
		sections.issueBookSection
	);
}

function welcomeViewControl(ev) {
	comp.showSpinner(ev);

	setTimeout(() => {
		comp.hideSpinner();
		showLibraryPage();
	}, spinnerTimer);
}

document
	.querySelector(".welcome-btn")
	.addEventListener("click", welcomeViewControl);

export default welcomeViewControl;
