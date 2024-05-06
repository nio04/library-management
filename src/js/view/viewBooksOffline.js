import * as helper from "./../helper";
import * as comp from "../component";
import { oldBooks, preBooks } from "../bookContent";

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

function renderBooks(parent, books) {
	const markup = books
		.flat(Infinity)
		.map((book) => renderMarkup(book))
		.join("");
	comp.render(parent, markup);
}

function renderMarkup(book = []) {
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
