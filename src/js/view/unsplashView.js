import { query, clientID } from "../config";

export const getRandomImg = async () => {
	try {
		const res = await fetch(
			`https://api.unsplash.com/photos/random?query=${query}&client_id=${clientID}`
		);

		if (!res.ok) throw new Error("Network response was not ok!");

		const data = await res.json();

		return data.urls.thumb;
	} catch (err) {
		if (err.name === "TypeError" && err.message === "Failed to fetch")
			console.error("network error: ", err.message);
		else console.error(err);
	}
};
