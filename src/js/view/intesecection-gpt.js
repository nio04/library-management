const selectors = {
	backBtn: "#back-btn",
	stepProgress: ".issuebookprogress h2",
	welcomePage: ".welcome",
	libraryPage: ".library-management",
	viewBooksPage: ".view-books-offline",
	customBooks: ".view-books-offline__custom",
	searchOfflinePage: ".search-books-offline",
	uploadBookPage: ".upload-book-container",
	uploadForm: ".upload-book__form label",
	issueBookPage: ".issue__book",
	steps: [
		".step1",
		".step2",
		".step3",
		".step4",
		".step5",
		".step6",
		".step7",
		".step8",
	],
	contributorPage: ".contributor-section",
};

export default function intersectionController() {
	for (const key in selectors) {
		// console.log(selectors[key]);
		const element = document.querySelector(selectors[key]);
		if (element) observer.observe(element);
	}
}
const targets = {
	welcome: {
		elements: document.querySelector(".welcome").children,
		classes: ["to-visible", "to-visible"],
	},
	"library-management": {
		elements: document.querySelector(".library-management").children,
		classes: ["to-visible", "to-visible"],
		additional: document.querySelectorAll(".library-management section"),
	},
	"view-books-offline": {
		elements: document.querySelector(".view-books-offline").children,
		classes: ["to-visible", "to-visible", "to-visible"],
	},
	"view-books-offline__custom": {
		elements: document.querySelector(".view-books-offline__custom")
			.children,
		classes: ["to-visible", "to-visible", "to-visible"],
	},
	"search-books-offline": {
		elements: document.querySelector(".search-books-offline").children,
		classes: ["to-visible", "to-visible", "to-visible"],
	},
	"upload-book-container": {
		elements: document.querySelector(".upload-book-container").children,
		classes: ["to-visible", "to-visible"],
		additional: document.querySelectorAll(".upload-book__form label"),
	},
	issue__book: {
		// Enclosed in quotes to prevent automatic transformation
		elements: document.querySelector(".issue__book").children,
		classes: ["to-visible", "to-visible", "to-visible"],
	},
	step__1: {
		// Enclosed in quotes to prevent automatic transformation
		elements: Array.from(
			document.querySelectorAll(
				".step__1, .step__2, .step__3, .step__4, .step__5, .step__6, .step__7, .step__8"
			)
		),
		classes: ["to-visible", "to-visible", "to-visible"],
	},
	"contributor-section": {
		elements: document.querySelector(".contributor-section").children,
		classes: ["to-visible", "to-visible"],
		additional: document.querySelectorAll(
			".contributor-section > div > div"
		),
	},
};

function callback(entries) {
	entries.forEach((entry) => {
		// if (!entry.target) return;
		console.log(entry);

		const { classList } = entry.target;
		const [targetClass] = classList;

		const targetData = targets[targetClass];
		console.log(entry.target, [targetClass], targetData);
		if (!targetData) return; // Check if targetData is defined

		console.log(
			targetData,
			document.querySelector(".search-books-offline").children
		);

		const { elements, classes, additional } = targetData;

		// console.clear(elements, classes, additional);

		if (entry.isIntersecting && elements) {
			if (elements.length !== undefined) {
				// Check if elements is iterable
				Array.from(elements).forEach((element, index) =>
					element.classList.add(classes[index])
				);
			} else {
				// Convert elements to an array if it's not already an array-like object
				Array.from([elements]).forEach((element, index) =>
					element.classList.add(classes[index])
				);
			}
			if (additional)
				additional.forEach((el) => el.classList.add("to-visible"));
			observer.unobserve(entry.target);
		}
	});
}

const options = {
	root: null,
	rootMargin: "0px",
	threshold: 0,
};

const observer = new IntersectionObserver(callback, options);
