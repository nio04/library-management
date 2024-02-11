const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// HIDE ELEMENT
export function hideEl(...parents) {
	parents.forEach((el) => el.classList.add("hidden"));
}

// SHOW ELEMENT
export function showEl(...parents) {
	parents.forEach((el) => el.classList.remove("hidden"));
}

// RENDER ON SCREEN
export function render(parent, markup) {
	parent.innerHTML = markup;
}

// RANDOM GENERATE NUMBER WITHIN RANGE
export function randomNumber(limit) {
	return Math.trunc(Math.random() * limit + 1);
}

// SHOW MODAL
export function showModal() {
	modal.classList.remove("hidden");
	overlay.classList.remove("overlay-off");
}

// HIDE MODAL
export function hideModal() {
	modal.classList.add("hidden");
	overlay.classList.add("overlay-off");
}
