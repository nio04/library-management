import * as helper from "./../helper";
import * as comp from "../component";
import * as bookContent from "../bookContent";
import { getStorage } from "./localstorageView";

const newCollectionContainer = document.querySelector(
	".view-books-offline--new-collection ul"
);

const trendyBooksContainer = document.querySelector(
	".view-books-offline--trending ul"
);
const mostSellBooksContainer = document.querySelector(
	".view-books-offline--most-sell ul"
);
const mostSearchBooksContainer = document.querySelector(
	".view-books-offline--most-search ul"
);
const viewAllBooksContainer = document.querySelector(
	".view-books-offline--view-all ul"
);

let getRandomBooksIndex;
const trendyBooks = [];
const mostSellBooks = [];
const mostSearchBooks = [];

/**
 *
 * @param {string} target - "trendy" | "sells" | "search"
 */
function fillUpBookSection(target) {
	const tempStore = [];
	// generate random books limit per section
	getRandomBooksIndex = helper.generateUniqueNumbers(
		helper.randomNumberMin()
	);

	for (let i = 0; i < getRandomBooksIndex.length; i += 1) {
		tempStore.push(bookContent.bookLists.preBook[getRandomBooksIndex[i]]);
	}

	switch (target) {
		case "trendy":
			trendyBooks.push(...tempStore);
			break;
		case "sells":
			mostSellBooks.push(...tempStore);
			break;
		case "search":
			mostSearchBooks.push(...tempStore);
		default:
			break;
	}
}

export function bookRenderer(parent, bookTypes) {
	let books;

	switch (bookTypes) {
		case "new-book":
			books = bookContent.oldBooks
				.flat()
				.map((book) => renderMarkup(book))
				.join("");
			break;
		case "trendy":
			books = trendyBooks.map((book) => renderMarkup(book)).join("");
			break;

		case "sells":
			books = mostSellBooks.map((book) => renderMarkup(book)).join("");
			break;

		case "search":
			books = mostSearchBooks.map((book) => renderMarkup(book)).join("");
			break;

		case "view-all":
			books = bookContent.bookLists.preBook
				.map((book) => renderMarkup(book))
				.join("");
			break;
	}

	comp.render(parent, books);
}

export default function offlineBookControl() {
	fillUpBookSection("trendy");
	fillUpBookSection("sells");
	fillUpBookSection("search");

	bookRenderer(newCollectionContainer, "new-book");
	bookRenderer(trendyBooksContainer, "trendy");
	bookRenderer(mostSellBooksContainer, "sells");
	bookRenderer(mostSearchBooksContainer, "search");
	bookRenderer(viewAllBooksContainer, "view-all");
}

function renderMarkup(book) {
	return `
   <li class="book__item ${
			book.quantity === 0 ? "no-quantity-book" : ""
		} ${book.quantity <= 5 ? "low-quantity-book" : ""}" data-id="${
		book.id
	}">
      <section class="img">
        <img src="${book.imgUrl}"
             alt="sample book picture">
      </section>

      <section class="book__item__description">
        <p class="item__quantity">${book.quantity}</p>
        <h3 class="item__title">${book.title}</h3>
        <p class="item__genere">${book.genre}</p>
        <h6 class="item__author-name">${book.authorName}</h6>
      </section>
   </li>
  `;
}

document.addEventListener("DOMContentLoaded", offlineBookControl);
