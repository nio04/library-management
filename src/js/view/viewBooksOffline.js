import {bookLists} from "../bookContent";

const viewBooksContainer = document.querySelector("#viewbooks__offline__section");

function offlineBookControl() {
  const books= bookLists.map(book => `
   <li class="book__item" data-id="${ book.id }">
      <section class="img">
        <img src="${book.imgUrl}"
             alt="sample book picture">
      </section>

      <section class="book__item__description">
        <p class="item__quantity">${ book.quantity }</p>
        <h3 class="item__title">${ book.title }</h3>
        <p class="item__genere">${ book.genre }</p>
        <h6 class="item__author-name">${ book.authorName }</h6>
      </section>
   </li>
  `).join("");

  viewBooksContainer.innerHTML = books;
}

document.addEventListener("DOMContentLoaded", offlineBookControl);

export default offlineBookControl;
