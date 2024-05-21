// import localStorageControl from "./view/localstorageView";
// localStorageControl();

import welcomeView from "./view/welcomeView";
import libraryView from "./view/libraryView";
import uploadBookView from "./view/uploadBookView";
import viewBooksOffline from "./view/viewBooksOffline";
import searchBooksOffline from "./view/searchBooksOffline";
import {
	issueBookControl,
	deliveryAddressControl,
} from "./view/issueBookView";
import bookModalControl from "./view/bookModalView";

import fontView from "./view/fontView";
import intersectionController from "./view/intersection";
import { tooltipControl } from "./view/tooltipView";

welcomeView.welcomeViewControl;
libraryView.libraryPageControl;
viewBooksOffline.offlineBookControl;
searchBooksOffline.searchBookControl;
uploadBookView.uploadBookControl;
issueBookControl;
// deliveryAddressControl;
bookModalControl;

intersectionController();
tooltipControl();
fontView.fontControl;
