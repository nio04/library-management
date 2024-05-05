// const logo = new URL("../asset/icons/next.svg", import.meta.url).href;

import intersectionController from "./view/intersection";

import welcomeView from "./view/welcomeView";
import libraryView from "./view/libraryView";
import uploadBookView from "./view/uploadBookView";
import viewBooksOffline from "./view/viewBooksOffline";
import searchBooksOffline from "./view/searchBooksOffline";

import {
	issueBookControl,
	deliveryAddressControl,
} from "./view/issueBookView";

import fontView from "./view/fontView";

welcomeView.welcomeViewControl;
libraryView.libraryPageControl;
viewBooksOffline.offlineBookControl;
searchBooksOffline.searchBookControl;
uploadBookView.uploadBookControl;
issueBookControl;
deliveryAddressControl;

intersectionController();

// const t = document.querySelector(".welcome");

// t.addEventListener("click", () => {
// 	const x = document.querySelector(".library-management--header ");

// 	const img = document.createElement("img");
// 	img.src = logo;
// 	console.log(img);

// 	x.appendChild(img);
// });
