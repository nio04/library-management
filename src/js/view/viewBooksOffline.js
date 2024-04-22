import * as helper from "./../helper";
import * as comp from "../component";
import * as bookContent from "../bookContent";
import { getStorage } from "./localstorageView";

const viewBooksContainer = document.querySelector(
	"#viewbooks__offline__section"
);

export function bookRenderer() {
	// GETTING OLD BOOKS FROM LOCAL-STORAGE
	let oldBooks;
	if (localStorage.getItem("newBook") === null) oldBooks = [];
	else oldBooks = JSON.parse(localStorage.getItem("newBook"));

	const books = [...bookContent.bookLists.preBook, oldBooks]
		.map((book) => renderMarkup(book))
		.join("");

	comp.render(viewBooksContainer, books);
}

export default function offlineBookControl() {
	bookRenderer();
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
