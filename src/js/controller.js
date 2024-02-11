import * as model from "./model";

import welcomeView from "./view/welcomeView";
import libraryView from "./view/libraryView";
import uploadBookView from "./view/uploadBookView";
import viewBooksOffline from "./view/viewBooksOffline";

welcomeView.welcomeViewControl;
libraryView.libraryPageControl;
// uploadBookView.uploadBookControl;
viewBooksOffline.offlineBookControl;
model.offlineBook(uploadBookView.uploadBookControl);
