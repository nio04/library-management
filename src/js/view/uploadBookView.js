let bookName
let img
let authorName
let bookGenre
let bookQuantity
let uploadBtn = document.querySelector("#form-upload");

function uploadBookControl(ev) {
  ev.preventDefault();

  // ON SUBMIT, GET VALUE OF INPUT'S
  getInputValue();

  // compute - Book IMAGE - src
  const bookImg = img.files[0];

  // VALIDATE ALL THE NAMING
  validateNaming();

  const currentBook = {
    id: crypto.randomUUID(),
    bookName,
    bookImg,
    authorName,
    bookGenre,
    bookQuantity,
    };


  // console.log(currentBook);

}

const getInputValue=() => {
  bookName = document.querySelector("#book-name__input").value;
  img = document.querySelector("#book-image__input");
  authorName = document.querySelector("#book-author__input").value;
  bookGenre = document.querySelector("#book-genre__input").value;
  bookQuantity = document.querySelector("#book-quantity__input").value;
}

// VALIDATE NAMING
const validateNaming = book => {
  const regex = /null/gi;
  return book.match(regex)
}

document.addEventListener("submit", uploadBookControl)
export default uploadBookControl;
