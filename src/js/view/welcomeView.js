import * as helper from "../helper";

const welcomeSection = document.querySelector(".welcome");
const btn = document.querySelector(".welcome-btn");
const libraryPage=document.querySelector(".library-management")
const viewAllBooksSection = document.querySelector(".view-books");
const searchBookOfflineSection = document.querySelector(".search-books");
const uploadBookSection = document.querySelector(".upload-book");
const searchBookOnlineSection = document.querySelector(".search-online");
const issueBookSection = document.querySelector(".issue-book");

function welcomeViewControl() {
  // welcomeSection.classList.add("hidden");
  helper.hideEl(welcomeSection)

  // SHOW LIBRARY-MANAGEMENT PAGE
  // libraryPage.classList.remove("hidden");
  helper.showEl(libraryPage, viewAllBooksSection, searchBookOfflineSection, uploadBookSection, searchBookOnlineSection, issueBookSection);
}

// EVENT
btn.addEventListener("click", welcomeViewControl);

export default welcomeViewControl;
