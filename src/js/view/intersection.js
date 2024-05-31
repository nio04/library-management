const elements = {
	welcomePage: document.querySelector(".welcome"),
	libraryPage: document.querySelector(".library-management"),
	viewBooksPage: document.querySelector(
		".view-books-offline--container"
	),
	searchOfflinePage: document.querySelector(".search-books-offline"),
	uploadBookPage: document.querySelector(".upload-book-container"),
	issueBookPage: document.querySelector(".issue__book"),
	step1: document.querySelector(".step__1"),
	step1Results: document.querySelector(
		".step__1 .search-result__lists"
	),
	step2: document.querySelector(".step__2"),
	step3: document.querySelector(".step__3"),
	step4: document.querySelector(".step__4"),
	step5: document.querySelector(".step__5"),
	step6: document.querySelector(".step__6"),
	step7: document.querySelector(".step__7"),
	step8: document.querySelector(".step__8"),
	contributorPage: document.querySelector(".contributor-section"),
};

///////////////
// MAIN-CONTROLLER//
/////////////
export default function intersectionController() {
	for (const iterator in elements) {
		if (elements[iterator]) observer.observe(elements[iterator]);
	}
}

function callback(entries) {
	entries.forEach((entry) => {
		if (!entry.target) return;
		if (entry.isIntersecting) {
			switch (entry.target.classList[0]) {
				case "welcome":
					showChildren([
						entry.target.children[0],
						entry.target.children[1],
					]);
					observer.unobserve(entry.target);
					break;
				case "library-management":
					showChildren([
						entry.target.children[0],
						entry.target.children[1],
						entry.target.children[2],
						entry.target.children[3],
						entry.target.children[4],
						entry.target.children[5],
						entry.target.children[6],
						entry.target.children[7],
					]);
					observer.unobserve(entry.target);
					break;
				case "view-books-offline--container":
					showChildren([
						entry.target.children[0],
						entry.target.children[1].children[0],
						entry.target.children[1].children[1],
						entry.target.children[2].children[0],
						entry.target.children[2].children[1],
						entry.target.children[3].children[0],
						entry.target.children[3].children[1],
						entry.target.children[4].children[0],
						entry.target.children[4].children[1],
						entry.target.children[5].children[0],
						entry.target.children[5].children[1],
					]);
					observer.unobserve(entry.target);
					break;
				case "search-books-offline":
					showChildren([
						entry.target.children[0],
						entry.target.children[1],
						entry.target.children[2][0],
						entry.target.children[2][1],
					]);
					observer.unobserve(entry.target);
					break;
				case "upload-book-container":
					showChildren([
						entry.target.children[0],
						entry.target.children[1],
					]);
					observer.unobserve(entry.target);
					break;
				// case "issue__book":
				// 	showChildren([
				// 		entry.target.children[0],
				// 		entry.target.children[1],
				// 		entry.target.children[2],
				// 	]);
				// 	observer.unobserve(entry.target);
				// 	break;
				// case "step__1":
				// 	showChildren([
				// 		entry.target.children[0][0],
				// 		entry.target.children[0][1],
				// 		Array.from(entry.target.children[1].children[0].children),
				// 	]);
				// 	observer.unobserve(entry.target);
				// 	break;
				// case "search-result__lists":
				// 	showChildren([Array.from(entry.target.children)]);
				// 	observer.unobserve(entry.target);
				// 	break;
				// case "step__2":
				// 	showChildren([
				// 		entry.target.children[0].children[0],
				// 		entry.target.parentElement.children[2].children[0],
				// 	]);
				// 	observer.unobserve(entry.target);
				// 	break;
				// case "step__3":
				// 	showChildren([
				// 		entry.target.children[0].children[0],
				// 		entry.target.children[0].children[1].children[0],
				// 		entry.target.children[0].children[1].children[1],
				// 		entry.target.parentElement.children[2].children[0],
				// 	]);
				// 	observer.unobserve(entry.target);
				// 	break;
				// case "step__4":
				// 	showChildren([
				// 		entry.target.children[0].children[0],
				// 		entry.target.children[0].children[1],
				// 		entry.target.parentElement.children[2].children[0],
				// 	]);
				// 	observer.unobserve(entry.target);
				// 	break;
				// case "step__5":
				// 	showChildren([
				// 		entry.target.children[0],
				// 		entry.target.children[1],
				// 		entry.target.parentElement.children[2].children[0],
				// 	]);
				// 	observer.unobserve(entry.target);
				// 	break;
				// case "step__6":
				// 	showChildren([
				// 		entry.target.children[0].children[0],
				// 		entry.target.children[0].children[1].children[1],
				// 		entry.target.parentElement.children[2].children[0],
				// 	]);
				// 	observer.unobserve(entry.target);
				// 	break;
				// case "step__7":
				// 	showChildren(
				// 		[entry.target.firstElementChild],
				// 		entry.target.parentElement.children[2].children[0]
				// 	);
				// 	observer.unobserve(entry.target);
				// 	break;
				// case "step__8":
				// 	showChildren([
				// 		entry.target.children[0],
				// 		entry.target.parentElement.children[2].children[0],
				// 	]);
				// 	observer.unobserve(entry.target);
				// 	break;
				case "contributor-section":
					showChildren([
						entry.target.children[0],
						entry.target.children[1],
						entry.target.children[2].children[0].children[0]
							.children[0],
						entry.target.children[2].children[0].children[1],
						entry.target.children[2].children[0].children[2]
							.children[0],
						entry.target.children[2].children[0].children[2]
							.children[1],
						entry.target.children[2].children[0].children[3]
							.children[0],
						entry.target.children[2].children[0].children[3]
							.children[1],
						entry.target.children[2].children[0].children[3]
							.children[2],
						entry.target.children[2].children[0].children[3]
							.children[3],
					]);
					observer.unobserve(entry.target);
					break;
				default:
					observer.unobserve(entry.target);
					break;
			}
		}
	});
}

const options = {
	root: null,
	rootMargin: "0px",
	threshold: 0,
};

const observer = new IntersectionObserver(callback, options);

// HELPER CLASS FOR SHOW CHILDREN
function showChildren(...target) {
	target
		.flat(Infinity)
		.forEach((el) => el.classList.add("to-visible"));
}
