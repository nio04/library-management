import * as helper from "../helper";
const welcomeSection=document.querySelector(".welcome")
const libraryManagement = document.querySelector(".library-management");
const viewAllBooksSection = document.querySelector(".view-books");
const searchBookOfflineSection = document.querySelector(".search-books");
const uploadBookSection = document.querySelector(".upload-book");
const searchBookOnlineSection = document.querySelector(".search-online");
const issueBookSection = document.querySelector(".issue-book");
const backBtn = document.querySelector("#back-btn");

function hideAllSections() {
  helper.hideEl(libraryManagement, viewAllBooksSection, searchBookOfflineSection, uploadBookSection, searchBookOnlineSection, issueBookSection);
}

function showTargetElement(ev) {
  // 1) check which btn is checked
  const checkedBtn = ev.target.dataset.pointer;
  if(!checkedBtn) return

  // 2) select that parent el by dataset && remove HIDDEN class
  const parentEl = document.querySelector(`.${ checkedBtn }`);
  // parentEl.classList.remove("hidden")
  helper.showEl(parentEl)
}

function libraryPageControl(ev) {
  if (backBtn) {
    const target = ev.target.dataset.backTo;

    if (target === "mainPage") {
      // 1) hide all the sections
      helper.hideEl(libraryManagement);
      // 2) show welcome page
      helper.showEl(welcomeSection);

    } else if(target==="libraryPage") {
      // BUTTON = "BACK TO LIBRARY PAGE"

      // 1) HIDE CURRENT PAGE (PARENT);
      const currentPage = ev.target.parentElement.className;
      helper.hideEl(document.querySelector(`.${ currentPage }`));

      // 2) SHOW DESIRE PAGE
      helper.showEl(libraryManagement, viewAllBooksSection, searchBookOfflineSection, uploadBookSection, searchBookOnlineSection, issueBookSection);
    }
  }

  if (!ev.target.closest(".library-management") || ev.target.classList.contains("library-management")) return;

  // HIDE ALL THE SECTION
  hideAllSections();

  // SHOW TARGET ELEMENT
  showTargetElement(ev);
}

document.addEventListener("click", libraryPageControl);

export default libraryPageControl;
