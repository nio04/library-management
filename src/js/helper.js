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

function generateModalMarkup(parent) {
	const markup = `
	<div class="modal">
		<p class="modal__message"></p>
		<button class="btn modal__btn">OK, I UNDERSTAND</button>
	</div>`;

	parent.insertAdjacentHTML("afterbegin", markup);
}

// SHOW MODAL
export function showModal(parent, message = "") {
	generateModalMarkup(parent);

	overlay.classList.remove("overlay-off");

	document.querySelector(".modal__message").textContent = message;
}

// HIDE MODAL
export function hideModal() {
	document.querySelector(".modal").remove();
	overlay.classList.add("overlay-off");
}

// RENDER BOOKS FROM ARRAY OF OBJECT
export function renderBookMarkup(parent, books) {
	Array.isArray(books) ? books : [books];

	const markup = books
		.map((book) => {
			return `
				<li class="book__item">
					<section class="img">
						<img
						src="${book?.imgUrl}"
						alt="${book.title}" />
					</section>
					<section class="book__item__description">
						<p class="item__quantity">${book.quantity}</p>;
						<h3 class="item__title">${book.title}</h3>
						<p class="item__genere">
						${book.genre}
						</p>
						<h6 class="item__author-name">${book.authorName}</h6>
					</section>
				</li>
	`;
		})
		.join("");

	parent.innerHTML = markup;
}
