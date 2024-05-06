// DOM Manipulation Functions
export function hideEl(...parents) {
	parents.forEach((parent) => parent.classList.add("hidden"));
}

export function showEl(...parents) {
	parents.forEach((parent) => parent.classList.remove("hidden"));
}

export function removeEl(...targets) {
	targets.forEach((target) => target?.remove());
}

export function cleanParent(target) {
	document.querySelector(target).innerHTML = "";
}

export function addClass(target, ...classes) {
	target.classList.add(...classes);
}

export function removeClass(target, ...classes) {
	target.classList.remove(...classes);
}

export const inputCleaner = (target) =>
	document
		.querySelectorAll("input[type='search']")
		.forEach((el) => (el.value = ""));

// Random Number Generation Functions
export function randomNumberMax(limit) {
	return Math.trunc(Math.random() * limit + 1);
}

export function randomNumberMin(min = 3, max = 6) {
	return Math.trunc(Math.random() * (max - min) + 1) + min;
}

export function generateUniqueNumbers(count, min = 0, max = 10) {
	const uniqueNumbers = [];

	const isUnique = (number) => uniqueNumbers.indexOf(number) === -1;

	while (uniqueNumbers.length < count) {
		const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

		if (isUnique(randomNumber)) uniqueNumbers.push(randomNumber);
	}
	return uniqueNumbers;
}

// Book-related Functions
import * as bookContent from "./bookContent";
import { getStorage } from "./view/localstorageView";

export const allOfflineBookName = [
	...bookContent.bookLists.preBooks,
	...getStorage(),
].map((book) => book.title);

export const findBook = (searchValue) =>
	allOfflineBookName.includes(searchValue);

export const bookMatch = (searchValue) => {
	const oldBooks = getStorage();

	return [...oldBooks, ...bookContent.bookLists.preBook].find(
		(book) => book.title === searchValue
	);
};
