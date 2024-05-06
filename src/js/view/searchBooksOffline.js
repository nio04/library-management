import * as helper from "../helper";
import * as comp from "../component";

const parent = document.querySelector(".search-books-offline");
const searchInput = document.querySelector(
	"#search__books__offline__input"
);
const searchBtn = document.querySelector("#search__books__offline__btn");
const resultParent = document.querySelector(".search-result");

let searchValue;

function getSearchInput(ev) {
	searchValue = ev.target.value;
	if (ev.target.value.length === 0) {
		document.querySelector(".search-result__lists .book__item")?.remove();
	}
}

export default function bookSearchControl(ev) {
	ev.preventDefault();

	if (ev.target.closest(".search-books-offline")) {
		helper.hideEl(
			document.querySelector(".search-books-offline .search-result")
		);
	}

	// RENDER [ERROR-MESSAGE] WHEN BOOKS NOT FOUND
	if (
		ev.target.closest(".search-books-offline") &&
		!helper.findBook(searchValue)
	) {
		comp.showModal(
			parent,
			"error",
			"sorry, We could not find the book you query. please try again"
		);

		return helper.inputCleaner();
	}

	// EXECUTE ON SUCCESS
	helper.showEl(resultParent);

	// INPUT CLEANER
	helper.inputCleaner();

	// FIND THE BOOK OBJECT
	helper.bookMatch(searchValue);

	// store search-reesults after finding
	const searchResults = helper.bookMatch(searchValue);

	// store search-results markup
	const results = searchResultMarkup(searchResults);

	document.querySelector(".search-result__lists").innerHTML = results;
}

function searchResultMarkup(results) {
	return [...results]
		.map(
			(book) =>
				`<li class="book__info">
					<figure>
						<img src="${book.imgUrl}" alt="${book.title}">
					</figure>
					<section class="book__info__details">
						<p>book name: ${book.title}</p>
						<p>author name: ${book.authorName}</p>
					</section>
				</li>`
		)
		.join("");
}

searchInput.addEventListener("input", getSearchInput);

searchBtn.addEventListener("click", bookSearchControl);

/*
	<p>book language: ${book.language}</p>
	<p>genre: ${book.genre} </p>
	<p>release year: ${book.releaseYear}</p>
	<p>release version: ${book.releaseVersion}</p>
	<p>popularity: ${book.popularity} </p>
	<p>book pages: ${book.pages} </p>
	<p>book license: ${book.GNUlicense}</p>
	<p>author bio link: ${book.authorBio} </p>
	<p>book publication link: ${book.publicationLink}</p>
	<p>publication name: ${book.publicationName} </p>
*/
