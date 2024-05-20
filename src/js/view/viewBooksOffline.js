import icons from "url:../../asset/icons/sprite.svg";
import * as helper from "./../helper";
import * as comp from "../component";
import { oldBooks, preBooks } from "../bookContent";
import { flushLocalStorage } from "./localstorageView";

const containers = {
	newCollection: document.querySelector(
		".view-books-offline--new-collection ul"
	),
	trendy: document.querySelector(".view-books-offline--trending ul"),
	mostSell: document.querySelector(".view-books-offline--most-sell ul"),
	mostSearch: document.querySelector(
		".view-books-offline--most-search ul"
	),
	viewAll: document.querySelector(".view-books-offline--view-all ul"),
};

const newBooks = [];
const trendyBooks = [];
const mostSellBooks = [];
const mostSearchBooks = [];

function fillUpBookSection(target) {
	const tempStore = [];
	const randomIndices = helper.generateUniqueNumbers(
		helper.randomNumberMin()
	);

	randomIndices.forEach((index) => {
		tempStore.push(preBooks[index]);
	});

	switch (target) {
		case "new-book":
			newBooks.push(oldBooks);
			break;
		case "trendy":
			trendyBooks.push(...tempStore);
			break;
		case "sells":
			mostSellBooks.push(...tempStore);
			break;
		case "search":
			mostSearchBooks.push(...tempStore);
			break;
		default:
			break;
	}
}

function sortViewAllBooks(sortType) {
	const allBooks = [preBooks, oldBooks].flat(Infinity);

	if (sortType === "ascending")
		return allBooks.sort((a, b) => {
			if (a.title > b.title) return 1;
			if (a.title < b.title) return -1;
			return 0;
		});
	if (sortType === "descending")
		return allBooks.sort((a, b) => {
			if (a.title > b.title) return -1;
			if (a.title < b.title) return 1;
			return 0;
		});

	return allBooks;
}

export function renderBooks(parent, books) {
	const markup = books
		.flat(Infinity)
		.map((book) => renderMarkup(book))
		.join("");
	comp.render(parent, markup);
}

export function renderMarkup(book = []) {
	if (book === null) return;
	return `
        <li class="book__item ${
					book.quantity === 0 ? "no-quantity-book" : ""
				} ${book.quantity <= 5 ? "low-quantity-book" : ""}" data-id="${
		book.id
	}">
            <section class="img">
                <img src="${book.imgUrl}" alt="sample book picture">
            </section>
            <section class="book__item__description">
                <p class="item__quantity">${book.quantity}</p>
                <h3 class="item__title">${book.title}</h3>
                <p class="item__genere">${book.genre}</p>
                <h6 class="item__author-name">${book.authorName}</h6>
            </section>
        </li>`;
}

export default function offlineBookControl() {
	fillUpBookSection("new-book");
	fillUpBookSection("trendy");
	fillUpBookSection("sells");
	fillUpBookSection("search");

	renderBooks(containers.newCollection, newBooks);
	renderBooks(containers.trendy, trendyBooks);
	renderBooks(containers.mostSell, mostSellBooks);
	renderBooks(containers.mostSearch, mostSearchBooks);
	renderBooks(containers.viewAll, [preBooks, oldBooks]);
}

document.addEventListener("DOMContentLoaded", offlineBookControl);

// handling sorting
document.addEventListener("click", (ev) => {
	if (ev.target.closest(".view-books-offline--view-all h1 svg")) {
		const targetH1 = document.querySelector(
			".view-books-offline--view-all h1"
		);
		const iconParent = ev.target.closest("svg");

		if (iconParent.classList.contains("sort-ascending")) {
			// SHOW BOOKS IN ASCENDING
			targetH1.innerHTML = generateDescendingIcon();
			const sortedBooks = sortViewAllBooks("descending");
			renderBooks(containers.viewAll, sortedBooks);
		} else {
			// SHOW BOOKS IN DESCENDING
			targetH1.innerHTML = generateAscendingIcon();
			const sortedBooks = sortViewAllBooks("ascending");
			renderBooks(containers.viewAll, sortedBooks);
		}
	}
});

function generateAscendingIcon() {
	return `
		explore from our <span class="color-header">
		collection</span>
		<svg class="sort-ascending">
					<use xlink:href="${icons}#sort-ascending"></use>
		</svg>
	`;
}
function generateDescendingIcon() {
	return `
		explore from our <span class="color-header">
		collection</span>
		<svg class="sort-descending">
					<use xlink:href="${icons}#sort-descending"></use>
		</svg>
`;
}

// DELETING NEW COLLECTION BOOKS
document.addEventListener("click", (ev) => {
	if (ev.target.closest(".view-books-offline--new-collection h1 svg")) {
		flushLocalStorage();
	}
});
