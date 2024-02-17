import * as helper from "./helper";

const offlineImg = 10;

// let preBook;
export let newBook = [];

// ONLY GENERATE RANDOM NUMBER BASED ON IMAGE NUMBER
const randomPicturePick = () => helper.randomNumber(offlineImg);

export const bookLists = {
	preBook: [
		{
			id: crypto.randomUUID(),
			title: "book name A",
			authorName: "author name A",
			genre: ["comedy", "romance", "slice of life", "actions"],
			quantity: 10,
			imgUrl: `book-${randomPicturePick()}.jpg`,
		},
		{
			id: crypto.randomUUID(),
			title: "book name B",
			authorName: "author name B",
			genre: ["comedy", "slice of life"],
			quantity: 5,
			imgUrl: `book-${randomPicturePick()}.jpg`,
		},
		{
			id: crypto.randomUUID(),
			title: "book name C",
			authorName: "author name C",
			genre: ["comedy", "romance", "slice of life", "actions", "tragedy"],
			quantity: 0,
			imgUrl: `book-${randomPicturePick()}.jpg`,
		},
		{
			id: crypto.randomUUID(),
			title: "book name D",
			authorName: "author name D",
			genre: ["comedy", "romance", "actions"],
			quantity: 4,
			imgUrl: `book-${randomPicturePick()}.jpg`,
		},
		{
			id: crypto.randomUUID(),
			title: "book name E",
			authorName: "author name E",
			genre: ["comedy", "romance", "slice of life", "actions", "adults"],
			quantity: 8,
			imgUrl: `book-${randomPicturePick()}.jpg`,
		},
		{
			id: crypto.randomUUID(),
			title: "book name F",
			authorName: "author name F",
			genre: ["comedy", "slice of life", "actions", "NTR"],
			quantity: 20,
			imgUrl: `book-${randomPicturePick()}.jpg`,
		},
		{
			id: crypto.randomUUID(),
			title: "book name G",
			authorName: "author name G",
			genre: ["heroic", "historical", "slice of life", "actions"],
			quantity: 2,
			imgUrl: `book-${randomPicturePick()}.jpg`,
		},
		{
			id: crypto.randomUUID(),
			title: "book name H",
			authorName: "author name H",
			genre: ["comedy", "romance", "slice of life", "actions", "drama"],
			quantity: 7,
			imgUrl: `book-${randomPicturePick()}.jpg`,
		},
		{
			id: crypto.randomUUID(),
			title: "book name I",
			authorName: "author name I",
			genre: ["comedy", "NTR", "actions"],
			quantity: 10,
			imgUrl: `book-${randomPicturePick()}.jpg`,
		},
		{
			id: crypto.randomUUID(),
			title: "book name J",
			authorName: "author name J",
			genre: ["Bloody", "adults", "slice of life", "actions"],
			quantity: 10,
			imgUrl: `book-${randomPicturePick()}.jpg`,
		},
		{
			id: crypto.randomUUID(),
			title: "book name K",
			authorName: "author name K",
			genre: ["comedy", "romance", "historical", "drama"],
			quantity: 15,
			imgUrl: `book-${randomPicturePick()}.jpg`,
		},
		{
			id: crypto.randomUUID(),
			title: "book name L",
			authorName: "author name L",
			genre: ["comedy", "slice of life", "drama", "actons", "adults"],
			quantity: 30,
			imgUrl: `book-${randomPicturePick()}.jpg`,
		},
		{
			id: crypto.randomUUID(),
			title: "book name M",
			authorName: "author name M",
			genre: ["comedy", "school", "politics", "NTR"],
			quantity: 0,
			imgUrl: `book-${randomPicturePick()}.jpg`,
		},
		{
			id: crypto.randomUUID(),
			title: "book name N",
			authorName: "author name N",
			genre: ["comedy", "actions", "school", "animation", "webtoons"],
			quantity: 6,
			imgUrl: `book-${randomPicturePick()}.jpg`,
		},
		{
			id: crypto.randomUUID(),
			title: "book name O",
			authorName: "author name O",
			genre: ["comedy", "romance", "slice of life", "actions"],
			quantity: 10,
			imgUrl: `book-${randomPicturePick()}.jpg`,
		},
	],

	newBook,
};
