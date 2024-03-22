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
	// RENDER ERROR MESSAGE WHEN BOOKS NOT FOUND
	if (
		ev.target.closest(".search-books-offline") &&
		!helper.findBook(searchValue)
	) {
		comp.showModal(
			parent,
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

	const processBook = [];
	processBook.push(helper.bookMatch(searchValue));

	// GENERATE BOOK IN UI
	comp.renderBookMarkup(
		document.querySelector(".search-result__lists"),
		processBook
	);

	const searchResult = processBook
		.map((targetBook) => {
			return `
	<li class="book__info">
		<figure>
			<img src="${targetBook.imgUrl}" alt="${targetBook.title}">
		</figure>
		<section class="book__info__details">
			<p>book name: ${targetBook.title}</p>
			<p>author name: ${targetBook.authorName}</p>
			<p>book language: ${targetBook.language}</p>
			<p>genre: ${targetBook.genre} </p>
			<p>release year: ${targetBook.releaseYear}</p>
			<p>release version: ${targetBook.releaseVersion}</p>
			<p>popularity: ${targetBook.popularity} </p>
			<p>book pages: ${targetBook.pages} </p>
			<p>book license: ${targetBook.GNUlicense}</p>
			<p>author bio link: ${targetBook.authorBio} </p>
			<p>book publication link: ${targetBook.publicationLink}</p>
			<p>publication name: ${targetBook.publicationName} </p>
		</section>
	</li>`;
		})
		.join("");

	document.querySelector(".search-result__lists").innerHTML = searchResult;
}

searchInput.addEventListener("input", getSearchInput);

searchBtn.addEventListener("click", bookSearchControl);
