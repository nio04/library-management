import WebFont from "webfontloader";

// Function to load fonts
function loadFonts(fonts) {
	WebFont.load({
		google: {
			families: fonts,
		},
	});
}

// DEFAULT FONT-FAMILY
window.addEventListener("load", () => {
	const defaultFonts = [
		"Inter:400,600",
		"Open Sans:400,600",
		"Work Sans:400,600",
		"Lato:400,700",
		"Arimo:400,600",
		"Roboto:400,700",
		"Montserrat:400,600",
		"Inconsolata:400,600",
	];
	loadFonts(defaultFonts);
});
