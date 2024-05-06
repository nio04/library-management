import * as helper from "./helper";

// Array to store oldBooks
export const oldBooks = [];

// Define the number of offline images available
const offlineImgNum = 10;

// Array to store pre-defined books
export const preBooks = [
	{
		id: crypto.randomUUID(),
		title: "book name A",
		authorName: "author name A",
		genre: ["comedy", "romance", "slice of life", "actions"],
		quantity: 10,
		imgUrl: `book-${helper.randomNumberMax(offlineImgNum)}.jpg`,
		releaseYear: 2015,
		releaseVersion: 3,
		popularity: 8.5,
		pages: 450,
		GNUlicense: true,
		language: "english",
		authorBio: "author bio link",
		publicationLink: "publication link",
		publicationName: "Haque",
	},
	{
		id: crypto.randomUUID(),
		title: "book name B",
		authorName: "author name B",
		genre: ["comedy", "slice of life"],
		quantity: 5,
		imgUrl: `book-${helper.randomNumberMax(offlineImgNum)}.jpg`,
		releaseYear: 2018,
		releaseVersion: 2,
		popularity: 8,
		pages: 400,
		GNUlicense: true,
		language: "english",
		authorBio: "author bio link",
		publicationLink: "publication link",
		publicationName: "Haque",
	},
	{
		id: crypto.randomUUID(),
		title: "book name C",
		authorName: "author name C",
		genre: ["comedy", "romance", "slice of life", "actions", "tragedy"],
		quantity: 0,
		imgUrl: `book-${helper.randomNumberMax(offlineImgNum)}.jpg`,
		releaseYear: 2010,
		releaseVersion: 5,
		popularity: 10,
		pages: 500,
		GNUlicense: true,
		language: "bangla",
		authorBio: "author bio link",
		publicationLink: "publication link",
		publicationName: "Haque",
	},
	{
		id: crypto.randomUUID(),
		title: "book name D",
		authorName: "author name D",
		genre: ["comedy", "romance", "actions"],
		quantity: 4,
		imgUrl: `book-${helper.randomNumberMax(offlineImgNum)}.jpg`,
		releaseYear: 2020,
		releaseVersion: 1,
		popularity: 5,
		pages: 200,
		GNUlicense: true,
		language: "english",
		authorBio: "author bio link",
		publicationLink: "publication link",
		publicationName: "Haque",
	},
	{
		id: crypto.randomUUID(),
		title: "book name E",
		authorName: "author name E",
		genre: ["comedy", "romance", "slice of life", "actions", "adults"],
		quantity: 8,
		imgUrl: `book-${helper.randomNumberMax(offlineImgNum)}.jpg`,
		releaseYear: 2022,
		releaseVersion: 2,
		popularity: 4.8,
		pages: 200,
		GNUlicense: true,
		language: "english",
		authorBio: "author bio link",
		publicationLink: "publication link",
		publicationName: "Haque",
	},
	{
		id: crypto.randomUUID(),
		title: "book name F",
		authorName: "author name F",
		genre: ["comedy", "slice of life", "actions", "NTR"],
		quantity: 20,
		imgUrl: `book-${helper.randomNumberMax(offlineImgNum)}.jpg`,
		releaseYear: 2020,
		releaseVersion: 2,
		popularity: 10,
		pages: 600,
		GNUlicense: true,
		language: "english",
		authorBio: "author bio link",
		publicationLink: "publication link",
		publicationName: "Haque",
	},
	{
		id: crypto.randomUUID(),
		title: "book name G",
		authorName: "author name G",
		genre: ["heroic", "historical", "slice of life", "actions"],
		quantity: 2,
		imgUrl: `book-${helper.randomNumberMax(offlineImgNum)}.jpg`,
		releaseYear: 2018,
		releaseVersion: 6,
		popularity: 7.5,
		pages: 550,
		GNUlicense: true,
		language: "bangla",
		authorBio: "author bio link",
		publicationLink: "publication link",
		publicationName: "Haque",
	},
	{
		id: crypto.randomUUID(),
		title: "book name H",
		authorName: "author name H",
		genre: ["comedy", "romance", "slice of life", "actions", "drama"],
		quantity: 7,
		imgUrl: `book-${helper.randomNumberMax(offlineImgNum)}.jpg`,
		releaseYear: 2010,
		releaseVersion: 2,
		popularity: 9.6,
		pages: 120,
		GNUlicense: true,
		language: "bangla",
		authorBio: "author bio link",
		publicationLink: "publication link",
		publicationName: "Haque",
	},
	{
		id: crypto.randomUUID(),
		title: "book name I",
		authorName: "author name I",
		genre: ["comedy", "NTR", "actions"],
		quantity: 10,
		imgUrl: `book-${helper.randomNumberMax(offlineImgNum)}.jpg`,
		releaseYear: 2021,
		releaseVersion: 7,
		popularity: 9.5,
		pages: 200,
		GNUlicense: true,
		language: "english",
		authorBio: "author bio link",
		publicationLink: "publication link",
		publicationName: "Haque",
	},
	{
		id: crypto.randomUUID(),
		title: "book name J",
		authorName: "author name J",
		genre: ["Bloody", "adults", "slice of life", "actions"],
		quantity: 10,
		imgUrl: `book-${helper.randomNumberMax(offlineImgNum)}.jpg`,
		releaseYear: 2023,
		releaseVersion: 3,
		popularity: 7.1,
		pages: 350,
		GNUlicense: true,
		language: "bangla",
		authorBio: "author bio link",
		publicationLink: "publication link",
		publicationName: "Haque",
	},
	{
		id: crypto.randomUUID(),
		title: "book name K",
		authorName: "author name K",
		genre: ["comedy", "romance", "historical", "drama"],
		quantity: 15,
		imgUrl: `book-${helper.randomNumberMax(offlineImgNum)}.jpg`,
		releaseYear: 2012,
		releaseVersion: 5,
		popularity: 10,
		pages: 800,
		GNUlicense: true,
		language: "bangla",
		authorBio: "author bio link",
		publicationLink: "publication link",
		publicationName: "Haque",
	},
	{
		id: crypto.randomUUID(),
		title: "book name L",
		authorName: "author name L",
		genre: ["comedy", "slice of life", "drama", "actons", "adults"],
		quantity: 30,
		imgUrl: `book-${helper.randomNumberMax(offlineImgNum)}.jpg`,
		releaseYear: 2010,
		releaseVersion: 1,
		popularity: 1.9,
		pages: 300,
		GNUlicense: true,
		language: "bangla",
		authorBio: "author bio link",
		publicationLink: "publication link",
		publicationName: "Haque",
	},
	{
		id: crypto.randomUUID(),
		title: "book name M",
		authorName: "author name M",
		genre: ["comedy", "school", "politics", "NTR"],
		quantity: 0,
		imgUrl: `book-${helper.randomNumberMax(offlineImgNum)}.jpg`,
		releaseYear: 2015,
		releaseVersion: 3,
		popularity: 8.5,
		pages: 230,
		GNUlicense: true,
		language: "english",
		authorBio: "author bio link",
		publicationLink: "publication link",
		publicationName: "Haque",
	},
	{
		id: crypto.randomUUID(),
		title: "book name N",
		authorName: "author name N",
		genre: ["comedy", "actions", "school", "animation", "webtoons"],
		quantity: 6,
		imgUrl: `book-${helper.randomNumberMax(offlineImgNum)}.jpg`,
		releaseYear: 2002,
		releaseVersion: 5,
		popularity: 9.5,
		pages: 500,
		GNUlicense: true,
		language: "bangla",
		authorBio: "author bio link",
		publicationLink: "publication link",
		publicationName: "Haque",
	},
	{
		id: crypto.randomUUID(),
		title: "book name O",
		authorName: "author name O",
		genre: ["comedy", "romance", "slice of life", "actions"],
		quantity: 10,
		imgUrl: `book-${helper.randomNumberMax(offlineImgNum)}.jpg`,
		releaseYear: 2015,
		releaseVersion: 3,
		popularity: 8.5,
		pages: 450,
		GNUlicense: true,
		language: "english",
		authorBio: "author bio link",
		publicationLink: "publication link",
		publicationName: "Haque",
	},
];

// Array to store new books
export const newBook = [];

// Export the book lists object
export const bookLists = {
	preBooks,
	newBook,
};
