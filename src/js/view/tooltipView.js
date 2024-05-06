const tooltip = document.querySelector(".tool-tip__book-upload");

export function tooltipControl() {
	// Tooltip Functions
	tooltip.addEventListener("mouseenter", () => {
		const markup = `
        <section class="tool-tip">
            <p class="tool-tip__message">fetch random online book image from unspalsh api!</p>
        </section>`;
		document
			.querySelector("#random-photo__label")
			.insertAdjacentHTML("beforeend", markup);
	});

	tooltip.addEventListener("mouseleave", () => {
		setTimeout(() => {
			helper.removeEl(
				document.querySelector("#random-photo__label .tool-tip")
			);
		}, 1200);
	});
}
