const section = document.querySelector(".welcome");
const btn = document.querySelector(".welcome-btn");
const libraryPage=document.querySelector(".library-management")

function welcomeViewControl() {
  section.classList.add("hidden");

  // SHOW LIBRARY-MANAGEMENT PAGE
  libraryPage.classList.remove("hidden")
}

// EVENT
btn.addEventListener("click", welcomeViewControl);

export default welcomeViewControl;
