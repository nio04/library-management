import { query, clientID } from "../config";

export const getRandomImg = async () => {
	try {
		const url = `https://api.unsplash.com/photos/random?query=${query}&client_id=${clientID}`;
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error("Network response was not ok!");
		}

		const data = await response.json();
		return data.urls.thumb;
	} catch (error) {
		if (
			error.name === "TypeError" &&
			error.message === "Failed to fetch"
		) {
			console.error("Network error: ", error.message);
		} else {
			console.error(error);
		}
	}
};
