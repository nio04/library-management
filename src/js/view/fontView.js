import WebFont from "webfontloader";

// DEFAULT FONT-FAMILY
window.addEventListener("load", () => {
	WebFont.load({
		google: {
			families: [
				"Inter:400, 600",
				"Open Sans: 400, 600",
				"Work Sans: 400, 600",
				"Lato: 400, 700",
				"Arimo: 400, 600",
				"Roboto: 400, 700",
				"Montserrat: 400, 600",
				"Inconsolata: 400, 600",
			],
		},
	});
});
