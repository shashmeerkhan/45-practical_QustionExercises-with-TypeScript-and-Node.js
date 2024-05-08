// Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians by
//  adding the phrase the Great to each magician’s name. Call show_magicians()
//  to see that the list has actually been modified.

import { log } from "console";

function showMagicians(magician: string[]) {
  magician.forEach((name) => {
    console.log(name);
  });
}
function makeGreat(magicians: string[]) {
  return magicians.map((name) => `The Great ${name}`);
}
let magicianName = ["Harry Poter", "Agha Waqar Ahmed", "Tahir Shah"];

let greatMagician = makeGreat(magicianName);
showMagicians(greatMagician);
