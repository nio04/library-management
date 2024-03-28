export const getRandomImg = async () => {
	try {
		// const res = await fetch(
		// 	"https://api.unsplash.com/photos/${photoId}?client_id=${wztGNHFuJ25HJkJ8UhXkQDGo0r_rKT17DVqwBfH4p1Q}"
		// );
		const res = await fetch(
			"https://api.unsplash.com/photos/random?query=bookcover&client_id=wztGNHFuJ25HJkJ8UhXkQDGo0r_rKT17DVqwBfH4p1Q"
		);

		const data = await res.json();

		return data.urls.thumb;
	} catch (err) {
		console.error(err);
	}
};
