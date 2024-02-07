// HIDE ELEMENT
export function hideEl(...parents) {
  parents.forEach(el => el.classList.add("hidden"));
}

// SHOW ELEMENT
export function showEl(...parents) {
   parents.forEach(el => el.classList.remove("hidden"));
}

// RANDOM GENERATE NUMBER WITHIN RANGE
export function randomNumber(limit) {
  return Math.trunc(Math.random() * limit + 1);
}
