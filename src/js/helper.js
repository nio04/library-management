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

// RANDOM GENERATE NUMBER WITHIN RANGE [limit-max]
export function randomNumberMax(limit) {
	return Math.trunc(Math.random() * limit + 1);
}

// RANDOM GENERATE NUMBER WITHIN RANGE [limit-min]
export function randomNumberMin(min = 3, max = 6) {
	return Math.trunc(Math.random() * (max - min) + 1) + min;
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

// GENERATE random number but unique
export function generateUniqueNumbers(count, min = 0, max = 10) {
	const uniqueNumbers = [];

	const isUnique = (number) => uniqueNumbers.indexOf(number) === -1;

	while (uniqueNumbers.length < count) {
		const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

		if (isUnique(randomNumber)) uniqueNumbers.push(randomNumber);
	}
	return uniqueNumbers;
}
