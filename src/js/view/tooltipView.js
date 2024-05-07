const tooltip = document.querySelector(".tool-tip__book-upload");
const tooltipSearchOnline = document.querySelector(
	".tool-tip__search-online"
);
const searchOnlineBtn = document.querySelector(
	".library-management .search-online button"
);
const TIMEOUT_SEC = 3500;

export function tooltipControl() {
	// Function to show tooltip on mouse enter
	function showTooltip(parent, message = "") {
		console.log("test");
		const tooltipMarkup = `
            <section class="tool-tip">
                <p class="tool-tip__message">${message}</p>
            </section>`;

		parent.insertAdjacentHTML("beforeend", tooltipMarkup);
	}

	// Function to hide tooltip on mouse leave after a delay
	function hideTooltip() {
		setTimeout(() => {
			const tooltipElement = document.querySelector(
				"#random-photo__label .tool-tip"
			);
			if (tooltipElement) {
				tooltipElement.remove();
			}
		}, TIMEOUT_SEC);
	}

	function revertSearchOnlineText() {
		setTimeout(() => {
			searchOnlineBtn.textContent = "search online";
		}, TIMEOUT_SEC);
	}

	// SHOW TOOL-TIP FOR SHOW INFO UNSPLASH API
	tooltip.addEventListener("mouseenter", () =>
		showTooltip(
			document.querySelector("#random-photo__label"),
			"Fetch random online book image from Unsplash API!"
		)
	);
	tooltip.addEventListener("mouseleave", hideTooltip);

	// CHANGE SEARCH-ONLINE TEXT
	tooltipSearchOnline.addEventListener(
		"mouseenter",
		() =>
			(searchOnlineBtn.textContent =
				"this feature is still not available at the moment.")
	);
	tooltipSearchOnline.addEventListener(
		"mouseleave",
		revertSearchOnlineText
	);
}
