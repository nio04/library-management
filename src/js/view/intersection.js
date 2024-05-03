const backBtn = document.querySelector("#back-btn");
// const nextStepBtn = document.querySelector(".next__step__btn ");
const stepProgress = document.querySelector(".issue__book__progress h2");

// WELCOME-PAGE
const welcomePage = document.querySelector(".welcome");

// LIBRARY-PAGE [2ND PAGE]
const libraryPage = document.querySelector(".library-management");
const libraryAllSections = document.querySelectorAll(
	".library-management section"
);

// VIEW-BOOKS-OFFLINE
const viewBooksPage = document.querySelector(".view-books-offline");
const customBooks = document.querySelector(".view-books-offline__custom");

// SEARCH OFFLINE BOOKS
const searchOfflinePage = document.querySelector(".search-books-offline");

// UPLOAD BOOK
const uploadBookPage = document.querySelector(".upload-book-container");
const uploadForm = document.querySelectorAll(".upload-book__form label");

// ISSUE-BOOK
const issueBookPage = document.querySelector(".issue__book");
const step1 = document.querySelector(".step__1");
const step2 = document.querySelector(".step__2");
const step3 = document.querySelector(".step__3");
const step4 = document.querySelector(".step__4");
const step5 = document.querySelector(".step__5");
const step6 = document.querySelector(".step__6");
const step7 = document.querySelector(".step__7");
const step8 = document.querySelector(".step__8");

// CONTRIBUTOR-PAGE
const contributorPage = document.querySelector(".contributor-section");

///////////////
// MAIN-CONTROLLER//
/////////////
export default function intersectionController() {
	if (welcomePage) observer.observe(welcomePage);

	if (libraryPage) observer.observe(libraryPage);

	if (viewBooksPage) observer.observe(viewBooksPage);

	if (customBooks) observer.observe(customBooks);

	if (searchOfflinePage) observer.observe(searchOfflinePage);

	if (uploadBookPage) observer.observe(uploadBookPage);

	if (issueBookPage) observer.observe(issueBookPage);

	if (step1) observer.observe(step1);

	if (step2) observer.observe(step2);

	if (step3) observer.observe(step3);

	if (step4) observer.observe(step4);

	if (step5) observer.observe(step5);

	if (step6) observer.observe(step6);

	if (step7) observer.observe(step7);

	if (step8) observer.observe(step8);

	if (contributorPage) observer.observe(contributorPage);
}

function callback(entries) {
	entries.forEach((entry) => {
		if (!entry.target) return;
		console.log(entry);
		if (entry.isIntersecting && entry.target.classList[0] === "welcome") {
			// WELCOME-PAGE
			entry.target.children[0].classList.add("to-visible");
			entry.target.children[1].classList.add("to-visible");
			observer.unobserve(welcomePage);
		}
		if (
			entry.isIntersecting &&
			entry.target.classList[0] === "library-management"
		) {
			// LIBRARY-PAGE
			entry.target.children[0].classList.add("to-visible");
			entry.target.children[1].classList.add("to-visible");
			libraryAllSections.forEach((section, idx) => {
				section.classList.add("to-visible");
			});
			observer.unobserve(libraryPage);
		}

		if (
			entry.isIntersecting &&
			entry.target.classList[0] === "view-books-offline"
		) {
			entry.target.children[0].classList.add("to-visible");
			entry.target.children[1].classList.add("to-visible");
			entry.target.children[2].classList.add("to-visible");
			observer.unobserve(viewBooksPage);
		}

		if (
			entry.isIntersecting &&
			entry.target.classList[0] === "view-books-offline__custom"
		) {
			entry.target.children[0].classList.add("to-visible");
			entry.target.children[1].classList.add("to-visible");
			entry.target.children[2].classList.add("to-visible");
			observer.unobserve(customBooks);
		}

		if (
			entry.isIntersecting &&
			entry.target.classList[0] === "search-books-offline"
		) {
			entry.target.children[0].classList.add("to-visible");
			entry.target.children[1].classList.add("to-visible");
			entry.target.children[2][0].classList.add("to-visible");
			entry.target.children[2][1].classList.add("to-visible");
			observer.unobserve(searchOfflinePage);
		}

		if (
			entry.isIntersecting &&
			entry.target.classList[0] === "upload-book-container"
		) {
			entry.target.children[0].classList.add("to-visible");
			entry.target.children[1].classList.add("to-visible");
			uploadForm.forEach((el) => el.classList.add("to-visible"));
			observer.unobserve(uploadBookPage);
			observer.unobserve(uploadForm);
		}

		if (
			entry.isIntersecting &&
			entry.target.classList[0] === "issue__book"
		) {
			entry.target.children[0].classList.add("to-visible");
			entry.target.children[1].classList.add("to-visible");
			entry.target.children[2].children[0].classList.add("to-visible");
		}

		if (entry.isIntersecting && entry.target.classList[0] === "step__1") {
			entry.target.children[0][0].classList.add("to-visible");
			entry.target.children[0][1].classList.add("to-visible");
			entry.target.children[1].children[0].classList.add("to-visible");
			entry.target.children[1]?.children[1]?.children[0]?.classList.add(
				"to-visible"
			);
		}

		if (entry.isIntersecting && entry.target.classList[0] === "step__2") {
			entry.target.children[0].children[0].classList.add("to-visible");
			entry.target.parentElement.children[2].children[0].classList.add(
				"to-visible"
			);
		}
		if (entry.isIntersecting && entry.target.classList[0] === "step__3") {
			entry.target.children[0].children[0].classList.add("to-visible");
			entry.target.children[0].children[1].children[0].classList.add(
				"to-visible"
			);
			entry.target.children[0].children[1].children[1].classList.add(
				"to-visible"
			);
			entry.target.parentElement.children[2].children[0].classList.add(
				"to-visible"
			);
		}
		if (entry.isIntersecting && entry.target.classList[0] === "step__4") {
			entry.target.children[0].children[0].classList.add("to-visible");
			entry.target.children[0].children[1].classList.add("to-visible");
			entry.target.parentElement.children[2].children[0].classList.add(
				"to-visible"
			);
		}
		if (entry.isIntersecting && entry.target.classList[0] === "step__5") {
			entry.target.children[0].classList.add("to-visible");
			entry.target.children[1].classList.add("to-visible");
			entry.target.parentElement.children[2].children[0].classList.add(
				"to-visible"
			);
		}
		if (entry.isIntersecting && entry.target.classList[0] === "step__6") {
			entry.target.children[0].children[0].classList.add("to-visible");
			entry.target.children[0].children[1].classList.add("to-visible");
			entry.target.parentElement.children[2].children[0].classList.add(
				"to-visible"
			);
		}
		if (entry.isIntersecting && entry.target.classList[0] === "step__7") {
			entry.target.firstElementChild.classList.add("to-visible");

			entry.target.parentElement.children[2].children[0].classList.add(
				"to-visible"
			);
		}
		if (entry.isIntersecting && entry.target.classList[0] === "step__8") {
			entry.target.children[0].classList.add("to-visible");

			entry.target.parentElement.children[2].children[0].classList.add(
				"to-visible"
			);
		}

		if (
			entry.isIntersecting &&
			entry.target.classList[0] === "contributor-section"
		) {
			entry.target.children[0].classList.add("to-visible");
			entry.target.children[1].classList.add("to-visible");
			// profile-picture
			entry.target.children[2].children[0].children[0].children[0].classList.add(
				"to-visible"
			);
			// name
			entry.target.children[2].children[0].children[1].classList.add(
				"to-visible"
			);
			// education
			entry.target.children[2].children[0].children[2].children[0].classList.add(
				"to-visible"
			);
			entry.target.children[2].children[0].children[2].children[1].classList.add(
				"to-visible"
			);
			// role
			entry.target.children[2].children[0].children[3].children[0].classList.add(
				"to-visible"
			);
			entry.target.children[2].children[0].children[3].children[1].classList.add(
				"to-visible"
			);
			entry.target.children[2].children[0].children[3].children[2].classList.add(
				"to-visible"
			);
			entry.target.children[2].children[0].children[3].children[3].classList.add(
				"to-visible"
			);
		}
	});
}

const options = {
	root: null,
	rootMargin: "0px",
	threshold: 0,
};

const observer = new IntersectionObserver(callback, options);
