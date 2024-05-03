// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// // BACK-BTN
// function backBtn() {
// 	gsap.to({
// 		// ScrollTrigger: ".btn-back",
// 		xPercent: 0,
// 		opacity: 1,
// 		duration: 1,
// 	});
// }

// //  WELCOME-PAGE
// function welcomepage() {
// 	const tl = gsap.timeline({ duration: 1 });

// 	tl.fromTo(
// 		"h1",
// 		{ xPercent: -100, opacity: 0 },
// 		{ xPercent: 0, opacity: 1 }
// 	);
// 	tl.fromTo(
// 		".welcome-btn",
// 		{ opacity: 0, y: 100 },
// 		{
// 			opacity: 1,
// 			y: 0,
// 		}
// 	);
// }

// export default function gsapControl() {
// 	welcomepage();
// 	backBtn();

// 	ScrollTrigger.create({
// 		trigger: ".btn-back",
// 		start: "top center",
// 		onEnter: backBtn,
// 	});
// }
