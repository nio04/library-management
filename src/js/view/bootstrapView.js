import * as bootstrap from "bootstrap";

export function createModalInstance() {
	const modal = new bootstrap.Modal("#my-modal");
	modal.show();
	removeModal(modal);
}

function removeModal(modal) {
	const modalEl = document.querySelector("#my-modal");
	modalEl.addEventListener("hidden.bs.modal", () => modalEl.remove());
}
