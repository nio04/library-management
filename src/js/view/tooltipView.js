const tooltip = document.querySelector(".tool-tip__book-upload");

export function tooltipControl() {
	// Function to show tooltip on mouse enter
	function showTooltip() {
		const tooltipMarkup = `
            <section class="tool-tip">
                <p class="tool-tip__message">Fetch random online book image from Unsplash API!</p>
            </section>`;
		document
			.querySelector("#random-photo__label")
			.insertAdjacentHTML("beforeend", tooltipMarkup);
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
		}, 1200);
	}

	// Event listeners for mouse enter and leave
	tooltip.addEventListener("mouseenter", showTooltip);
	tooltip.addEventListener("mouseleave", hideTooltip);
}
