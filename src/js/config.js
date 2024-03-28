export const spinnerTimer = 300;
export const query = "bookcover";
export const clientID = "wztGNHFuJ25HJkJ8UhXkQDGo0r_rKT17DVqwBfH4p1Q";

/*
1. search by random
	const res = await fetch(
		"https://api.unsplash.com/photos/${photoId}?client_id=${wztGNHFuJ25HJkJ8UhXkQDGo0r_rKT17DVqwBfH4p1Q}"
	);

  2. from result, get the photo id, save it to Object
  3. search by photo id
  https://api.unsplash.com/photos/${photoId}?client_id=${accessKey}

  ## photo object path: data.urls.thumb

*/
