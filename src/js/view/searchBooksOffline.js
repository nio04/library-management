import * as helper from "../helper";
import * as comp from "../component";
import { searchBooks } from "./searchView";

// DOM elements
const parent = document.querySelector(".search-books-offline");
const searchInput = document.querySelector(
	"#search__books__offline__input"
);
const searchBtn = document.querySelector(
	"#search__books__offline__btn"
);
const resultParent = document.querySelector(".search-result");

// Variables to store search value and results
let searchValue;
let searchResults;

// Function to get search input value
function getSearchInput(ev) {
	searchValue = ev.target.value.trim();
}

// Main function to control book search
export default function bookSearchControl(ev) {
	ev.preventDefault();

	// Hide search result container if clicked inside search area
	if (ev.target.closest(".search-books-offline")) {
		helper.hideEl(
			document.querySelector(".search-books-offline .search-result")
		);
	}

	// Clear search results if no input
	if (searchValue?.length < 1) {
		helper.cleanParent(".search-result .search-result__lists");
		return;
	}

	// Perform search and store results
	searchResults = searchBooks(searchValue);

	// Show error message if no results found
	if (
		ev.target.closest(".search-books-offline") &&
		searchResults.length === 0
	) {
		comp.showModal(
			parent,
			"Search Book Error",
			"Sorry, we could not find the book you are looking for. Please try again."
		);
		return helper.inputCleaner();
	}

	// Show search result container
	helper.showEl(resultParent);

	// Clear search input
	helper.inputCleaner();

	// Generate search result markup
	const results = searchResultMarkup(searchResults);

	// Update search result container with markup
	document.querySelector(".search-result__lists").innerHTML = results;

	// Reset search value
	searchValue = "";
}

// Function to generate search result markup
function searchResultMarkup(results) {
	return [...results]
		.map(
			(book) =>
				`<li class="book__info" data-id="${book.id}">
                <figure>
                    <img src="${book.imgUrl}" alt="${book.title}">
                </figure>
                <section class="book__info__details">
                    <p>Book name: ${book.title}</p>
                    <p>Author name: ${book.authorName}</p>
                </section>
            </li>`
		)
		.join("");
}

// Event listeners
searchInput.addEventListener("input", getSearchInput);
searchBtn.addEventListener("click", bookSearchControl);
