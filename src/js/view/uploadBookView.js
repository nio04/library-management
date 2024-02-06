const uploadBtn = document.querySelector("#form-upload");

function uploadBookControl(ev) {
   ev.preventDefault();

  console.log("uplaoded");
}

uploadBtn.addEventListener("click", uploadBookControl)
export default uploadBookControl;
