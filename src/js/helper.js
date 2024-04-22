import * as bookContent from "./bookContent";
import { getStorage } from "./view/localstorageView";

// HIDE ELEMENT
export function hideEl(...parents) {
	parents.forEach((parent) => parent.classList.add("hidden"));
}

// SHOW ELEMENT
export function showEl(...parents) {
	parents.forEach((parent) => {
		parent.classList.remove("hidden");
	});
}

// REMOVE ELEMENT
export function removeEl(...targets) {
	targets.forEach((target) => target?.remove());
}

// CLEAN INSIDE PARENT
export function cleanParent(target) {
	document.querySelector(target).innerHTML = "";
}

// ADD CLASS
export function addClass(target, ...classes) {
	target.classList.add(...classes);
}

// REMOVE CLASS
export function removeClass(target, ...classes) {
	target.classList.remove(...classes);
}

// RANDOM GENERATE NUMBER WITHIN RANGE
export function randomNumber(limit) {
	return Math.trunc(Math.random() * limit + 1);
}

// CLEAR ALL INPUT VALUE
export const inputCleaner = (target) =>
	document
		.querySelectorAll("input[type='search']")
		.forEach((el) => (el.value = ""));

// RETURN ALL PRE-BOOKS TITLE
export const allOfflineBookName = [
	...bookContent.bookLists.preBook,
	...getStorage(),
].map((book) => book.title);

// FIND BOOK FROM PRE-BOOK --TITLE
export const findBook = (searchValue) =>
	allOfflineBookName.includes(searchValue);

// FIND THE BOOK OBJECT FULL
export const bookMatch = (searchValue) => {
	const oldBooks = getStorage();

	return [...oldBooks, ...bookContent.bookLists.preBook].find(
		(book) => book.title === searchValue
	);
};
