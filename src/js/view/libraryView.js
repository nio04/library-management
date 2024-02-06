import * as helper from "../helper";

const parent = document.querySelector(".library-management");
const viewAllBooksSection = document.querySelector(".view-books");
const searchBookOfflineSection = document.querySelector(".search-books");
const uploadBookSection = document.querySelector(".upload-book");
const searchBookOnlineSection = document.querySelector(".search-online");
const issueBookSection = document.querySelector(".issue-book");

function hideAllSections() {
  helper.hideEl(parent, viewAllBooksSection, searchBookOfflineSection, uploadBookSection, searchBookOnlineSection, issueBookSection);
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
  if (!ev.target.closest(".library-management") || ev.target.classList.contains("library-management")) return;

  // HIDE ALL THE SECTION
  hideAllSections();

  // SHOW TARGET ELEMENT
  showTargetElement(ev);
}

document.addEventListener("click", libraryPageControl);

export default libraryPageControl;
